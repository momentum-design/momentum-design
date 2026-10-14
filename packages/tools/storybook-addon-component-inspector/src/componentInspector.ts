import { addons } from "storybook/preview-api";
import type { Channel } from "storybook/internal/channels";
import type { PartialStoryFn, Renderer, StoryContext } from "storybook/internal/types";

import { EVENTS, KEY, PARAM_KEY } from "./constants";
import type {
  ComponentInspectorParameters,
  CustomElementsManifest,
  InspectorMode,
  LegendPayload,
  ManifestCssPart,
  ManifestSlot,
} from "./types";

/**
 * Storybook decorator that renders an interactive overlay to highlight the
 * slots or CSS Parts of a web component.
 *
 * The overlay is mounted whenever the toolbar dropdown (the `component-inspector`
 * Storybook global) is set to `slots` or `parts`. While active, simply hovering
 * any matching element reveals its slot / shadow-part overlay — no modifier key
 * is required.
 *
 * Each region is drawn on a full-viewport `<canvas>` that is transparent to
 * pointer events, so the story underneath stays fully interactive. The colour
 * legend itself is rendered in the Storybook "Inspect" panel (using Storybook's
 * own UI components and theme); this decorator only streams the legend data
 * over the Storybook channel. While nothing is hovered the panel shows a help
 * message instead. Slot and part definitions are read from the custom-elements
 * manifest provided via `parameters.componentInspector.customElements`.
 */
type Mode = "slots" | "parts";

const MODE: Record<"SLOTS" | "PARTS", Mode> = { SLOTS: "slots", PARTS: "parts" };

const OVERLAY_CANVAS_CLASS = "cmp-inspector-canvas";

// Inline styles applied to the full-viewport overlay canvas. The canvas is
// transparent to pointer events so the story underneath stays interactive.
const OVERLAY_CANVAS_STYLES: Partial<CSSStyleDeclaration> = {
  position: "fixed",
  inset: "0",
  zIndex: "2147483000",
  pointerEvents: "none",
  display: "block",
};

/** A DOMRect-like box, the common shape produced by unions and measurements. */
interface RectLike {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

/** A collected slot / shadow-part with its on-screen rect and resolved colours. */
interface InspectedItem {
  label: string;
  rect: RectLike | null;
  borderColor?: string;
  bgColor?: string;
}

/** `tag-name` → slot/part definition maps derived from the manifest. */
interface ManifestMaps {
  slotsByTag: Map<string, ManifestSlot[]>;
  partsByTag: Map<string, ManifestCssPart[]>;
}

/**
 * Whether `node` is an inspectable element. With a `prefix` only elements whose
 * tag name starts with it match; without one, any element is selectable. When
 * `contentContainer` is set, the element must also be contained within it.
 */
const matchesTarget = (
  node: EventTarget | null,
  prefix: string | null,
  contentContainer: Element | null,
): node is Element => {
  if (!(node instanceof Element)) return false;
  if (contentContainer && !contentContainer.contains(node)) return false;
  if (!prefix) return true;
  return node.tagName.toLowerCase().startsWith(prefix);
};

/** Normalise the default slot names used across the manifest (case-insensitive). */ const isDefaultSlot = (
  name?: string,
): boolean => {
  const normalized = (name || "").trim().toLowerCase();
  return normalized === "" || normalized === "default";
};

/**
 * Distinct, deterministic colour per item index, used for both the canvas
 * overlay and the manager legend. Each entry is a solid border colour; the
 * fill is derived as a lighter shade of the same hue (see `lighten`).
 */
const PALETTE = ["#4f7cff", "#e6b800", "#8bc34a", "#26a69a", "#ff9800", "#ec407a", "#ab47bc", "#78909c", "#7e57c2"];

/** Mix a `#rrggbb` colour towards white by `ratio` (0–1) → `rgb(...)`. */
const lighten = (hex: string, ratio: number): string => {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  const mix = (channel: number) => Math.round(channel + (255 - channel) * ratio);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
};

/** Union of two DOMRect-like boxes. */
const unionRect = (a: RectLike | null, b: RectLike | null): RectLike | null => {
  if (!a) return b;
  if (!b) return a;
  const left = Math.min(a.left, b.left);
  const top = Math.min(a.top, b.top);
  const right = Math.max(a.right, b.right);
  const bottom = Math.max(a.bottom, b.bottom);
  return { left, top, right, bottom, width: right - left, height: bottom - top };
};

/**
 * Bounding rect for an assigned item node. Element nodes report their own box;
 * text nodes are measured via a Range so non-empty default items (which usually
 * contain plain text, e.g. a button label) are highlighted too.
 */
const nodeBoundingRect = (node: Node): DOMRect | null => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return (node as Element).getBoundingClientRect();
  }
  if (node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim()) {
    const range = document.createRange();
    range.selectNodeContents(node);
    return range.getBoundingClientRect();
  }
  return null;
};

const rectToPlain = (rect: RectLike) => ({
  top: rect.top,
  left: rect.left,
  width: rect.width,
  height: rect.height,
});

/**
 * Build (and memoise) the `tag-name` → slot/part definition maps from the
 * custom-elements manifest supplied by the consuming Storybook.
 */
const manifestCache = new WeakMap<CustomElementsManifest, ManifestMaps>();

const buildManifestMaps = (manifest: CustomElementsManifest | undefined): ManifestMaps => {
  const slotsByTag = new Map<string, ManifestSlot[]>();
  const partsByTag = new Map<string, ManifestCssPart[]>();
  if (!manifest || typeof manifest !== "object") return { slotsByTag, partsByTag };

  const cached = manifestCache.get(manifest);
  if (cached) return cached;

  (manifest.modules || []).forEach((module) => {
    (module.declarations || []).forEach((declaration) => {
      if (declaration.tagName && Array.isArray(declaration.slots)) {
        slotsByTag.set(declaration.tagName, declaration.slots);
      }
      if (declaration.tagName && Array.isArray(declaration.cssParts)) {
        partsByTag.set(declaration.tagName, declaration.cssParts);
      }
    });
  });

  const maps: ManifestMaps = { slotsByTag, partsByTag };
  manifestCache.set(manifest, maps);
  return maps;
};

// Controller that owns the canvas rendering, the legend channel messages, the
// hovered element and the listeners/observers that keep the overlay in sync
// with the story.
class ComponentInspector {
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  private readonly container: Element;

  private readonly slotsByTag: Map<string, ManifestSlot[]>;

  private readonly partsByTag: Map<string, ManifestCssPart[]>;

  private readonly channel: Channel | null;

  private readonly prefix: string | null;

  private readonly contentContainerSelector: string | null;

  private hovered: Element | null = null;

  private mode: Mode;

  private frame: number | null = null;

  private readonly resizeObserver: ResizeObserver;

  private readonly mutationObserver: MutationObserver;

  constructor(
    canvas: HTMLCanvasElement,
    container: Element,
    slotsByTag: Map<string, ManifestSlot[]>,
    partsByTag: Map<string, ManifestCssPart[]>,
    channel: Channel | null,
    prefix: string | null,
    contentContainerSelector: string | null,
    mode: Mode,
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.container = container;
    this.slotsByTag = slotsByTag;
    this.partsByTag = partsByTag;
    this.channel = channel;
    this.prefix = prefix;
    this.contentContainerSelector = contentContainerSelector;
    this.mode = mode;

    this.onPointerOver = this.onPointerOver.bind(this);
    this.onPointerOut = this.onPointerOut.bind(this);
    this.onRequest = this.onRequest.bind(this);
    this.scheduleDraw = this.scheduleDraw.bind(this);

    this.resizeObserver = new ResizeObserver(this.scheduleDraw);
    this.mutationObserver = new MutationObserver(this.scheduleDraw);

    this.attach();
  }

  private attach(): void {
    document.addEventListener("pointerover", this.onPointerOver, true);
    document.addEventListener("pointerout", this.onPointerOut, true);
    window.addEventListener("resize", this.scheduleDraw);
    window.addEventListener("scroll", this.scheduleDraw, true);
    this.channel?.on(EVENTS.REQUEST, this.onRequest);

    this.resizeObserver.observe(this.container);
    this.mutationObserver.observe(this.container, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    this.emitHelp();
  }

  destroy(): void {
    document.removeEventListener("pointerover", this.onPointerOver, true);
    document.removeEventListener("pointerout", this.onPointerOut, true);
    window.removeEventListener("resize", this.scheduleDraw);
    window.removeEventListener("scroll", this.scheduleDraw, true);
    this.channel?.off(EVENTS.REQUEST, this.onRequest);
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
    this.clearLegend();
    this.canvas.remove();
  }

  /** Switch the active inspection mode (called when the toolbar selection changes). */
  setMode(mode: Mode): void {
    if (this.mode === mode) return;
    this.mode = mode;
    this.scheduleDraw();
  }

  // Resolved on every lookup (rather than once at construction) because the
  // story — and therefore the selector's target — may not exist in the DOM
  // yet when the inspector is first mounted.
  private getContentContainer(): Element | null {
    if (!this.contentContainerSelector) return null;
    return this.container.querySelector(this.contentContainerSelector);
  }

  // Track the innermost matching ancestor of the hovered element so the
  // overlay always targets a whole component, not one of its internals.
  private onPointerOver(event: PointerEvent): void {
    const contentContainer = this.getContentContainer();
    const target = event
      .composedPath()
      .find(
        (node) => matchesTarget(node, this.prefix, contentContainer) && (node as Element).getRootNode() === document,
      );
    if (!matchesTarget(target ?? null, this.prefix, contentContainer) || target === this.hovered) return;
    this.hovered = target as Element;
    this.scheduleDraw();
  }

  // Clear the overlay once the pointer actually leaves the hovered element
  // (and all of its descendants) rather than on every bubbled `pointerout`.
  private onPointerOut(event: PointerEvent): void {
    if (!this.hovered) return;
    const related = event.relatedTarget as Node | null;
    if (related && this.hovered.contains(related)) return;
    this.hovered = null;
    this.scheduleDraw();
  }

  // Re-emit the current legend/help so a freshly mounted panel (which may have
  // subscribed after the initial emit) picks up the correct state.
  private onRequest(): void {
    if (this.hovered?.isConnected) {
      this.draw();
    } else {
      this.emitHelp();
    }
  }

  private emitLegend(payload: LegendPayload): void {
    this.channel?.emit(EVENTS.UPDATE, payload);
  }

  // With nothing hovered there is nothing to outline, so the floating panel
  // renders a help message instead (signalled by a `null` tag).
  private emitHelp(): void {
    this.emitLegend({ tag: null, mode: this.mode, items: [], anchor: null });
  }

  private clearLegend(): void {
    this.channel?.emit(EVENTS.CLEAR);
  }

  private scheduleDraw(): void {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      this.frame = null;
      this.draw();
    });
  }

  private resizeCanvas(): { width: number; height: number } {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width, height };
  }

  // Collect the on-screen rectangle and colour for each manifest slot of the
  // hovered element. Named slots are resolved through the shadow `<slot>`
  // assignment; the default slot counts the element's own light-DOM children
  // that have no explicit `slot` attribute.
  private collectSlots(): InspectedItem[] {
    const hovered = this.hovered;
    if (!hovered) return [];
    const tag = hovered.tagName.toLowerCase();
    const definitions = this.slotsByTag.get(tag) || [];
    const root = hovered.shadowRoot;

    const slots = definitions
      .filter((definition) => {
        // Drop the default slot when the component does not actually render an
        // unnamed `<slot>` (e.g. mdc-tab inherits an empty-name slot from
        // Buttonsimple in the manifest but exposes only prefix/postfix slots).
        if (isDefaultSlot(definition.name)) {
          return !!(root && root.querySelector("slot:not([name])"));
        }
        return true;
      })
      .map<InspectedItem>((definition) => {
        const { name } = definition;
        const nodes = isDefaultSlot(name) ? this.defaultSlotNodes() : this.namedSlotNodes(root, name ?? "");

        let rect: RectLike | null = null;
        nodes.forEach((node) => {
          const nodeRect = nodeBoundingRect(node);
          if (nodeRect && (nodeRect.width || nodeRect.height)) rect = unionRect(rect, nodeRect);
        });

        return { label: isDefaultSlot(name) ? "default" : (name ?? ""), rect };
      })
      .sort((a, b) => a.label.localeCompare(b.label));

    return this.decorateWithColors(slots);
  }

  // Collect the on-screen rectangle and colour for each manifest shadow part of
  // the hovered element by querying its shadow DOM for `[part~="name"]`.
  private collectParts(): InspectedItem[] {
    const hovered = this.hovered;
    if (!hovered) return [];
    const tag = hovered.tagName.toLowerCase();
    const definitions = this.partsByTag.get(tag) || [];
    const root = hovered.shadowRoot;

    const parts = definitions
      .map<InspectedItem>((definition) => {
        const { name } = definition;
        let rect: RectLike | null = null;
        if (root) {
          root.querySelectorAll(`[part~="${name}"]`).forEach((el) => {
            const elRect = el.getBoundingClientRect();
            if (elRect.width || elRect.height) rect = unionRect(rect, elRect);
          });
        }
        return { label: name, rect };
      })
      .sort((a, b) => a.label.localeCompare(b.label));

    return this.decorateWithColors(parts);
  }

  // Assign a deterministic palette colour to each collected item: a solid
  // border colour and a lighter fill shade, consistent across canvas and legend.
  private decorateWithColors(items: InspectedItem[]): InspectedItem[] {
    items.forEach((item, index) => {
      const border = PALETTE[index % PALETTE.length]!;
      item.borderColor = border;
      item.bgColor = lighten(border, 0.6);
    });
    return items;
  }

  // Direct light-DOM children (and non-empty text nodes) of the hovered
  // element with no explicit `slot` attribute — i.e. the default slot content.
  private defaultSlotNodes(): Node[] {
    if (!this.hovered) return [];
    return Array.from(this.hovered.childNodes).filter((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return !!(node.textContent && node.textContent.trim());
      }
      return node.nodeType === Node.ELEMENT_NODE && !(node as Element).hasAttribute("slot");
    });
  }

  // Nodes assigned to a named shadow `<slot>`.
  private namedSlotNodes(root: ShadowRoot | null, name: string): Node[] {
    const slotElement = root ? (root.querySelector(`slot[name="${name}"]`) as HTMLSlotElement | null) : null;
    if (!slotElement || !slotElement.assignedNodes) return [];
    return slotElement.assignedNodes({ flatten: true });
  }

  private draw(): void {
    const { width, height } = this.resizeCanvas();
    const { ctx } = this;
    ctx.clearRect(0, 0, width, height);

    if (!this.hovered || !this.hovered.isConnected) {
      this.emitHelp();
      return;
    }

    const tag = this.hovered.tagName.toLowerCase();
    const items = this.mode === MODE.PARTS ? this.collectParts() : this.collectSlots();

    this.drawHoveredOutline(ctx);
    items.forEach((item) => {
      if (item.rect) this.drawSlotRect(ctx, item.rect, item);
    });

    this.emitLegend({
      tag,
      mode: this.mode,
      items: items.map((item) => ({
        label: item.label,
        empty: !item.rect,
        borderColor: item.borderColor ?? "",
        bgColor: item.bgColor ?? "",
      })),
      anchor: rectToPlain(this.hovered.getBoundingClientRect()),
    });
  }

  private drawHoveredOutline(ctx: CanvasRenderingContext2D): void {
    const rect = this.hovered!.getBoundingClientRect();
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
    ctx.restore();
  }

  private drawSlotRect(ctx: CanvasRenderingContext2D, rect: RectLike, slot: InspectedItem): void {
    ctx.save();
    ctx.fillStyle = slot.bgColor ?? "";
    ctx.globalAlpha = 0.35;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = slot.borderColor ?? "";
    ctx.lineWidth = 2;
    ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
    ctx.restore();
  }
}

/** Only a single inspector can be active at a time (one story is visible). */
let currentInspector: ComponentInspector | null = null;

/**
 * Identity of the configuration the current inspector was built from, used to
 * avoid tearing down (and losing hover state / observers) on every re-render
 * when only the active mode changed.
 */
let currentConfig: {
  container: Element;
  slotsByTag: Map<string, ManifestSlot[]>;
  partsByTag: Map<string, ManifestCssPart[]>;
  prefix: string | null;
  contentContainerSelector: string | null;
} | null = null;

const teardownInspector = (): void => {
  if (currentInspector) {
    currentInspector.destroy();
    currentInspector = null;
    currentConfig = null;
  }
};

const isSameConfig = (config: NonNullable<typeof currentConfig>): boolean =>
  !!currentConfig &&
  currentConfig.container === config.container &&
  currentConfig.slotsByTag === config.slotsByTag &&
  currentConfig.partsByTag === config.partsByTag &&
  currentConfig.prefix === config.prefix &&
  currentConfig.contentContainerSelector === config.contentContainerSelector;

/**
 * Storybook decorator. Mounts the inspector overlay whenever the toolbar
 * dropdown (the `component-inspector` global) is set to `slots` or `parts`,
 * and never in docs view.
 */
export const withComponentInspector = (story: PartialStoryFn<Renderer>, context: StoryContext<Renderer>) => {
  const globalMode = (context.globals?.[KEY] as InspectorMode | undefined) ?? "off";
  const isEnabled = globalMode === "slots" || globalMode === "parts";

  if (context.viewMode === "docs" || !isEnabled) {
    teardownInspector();
    return story();
  }

  const parameters = context.parameters?.[PARAM_KEY] as ComponentInspectorParameters | undefined;
  const { slotsByTag, partsByTag } = buildManifestMaps(parameters?.customElements);
  const prefix = parameters?.prefix ? parameters.prefix.toLowerCase() : null;
  const container = document.getElementById("storybook-root") || document.body;
  const contentContainerSelector = parameters?.contentContainer ?? null;
  const mode: Mode = globalMode === "parts" ? MODE.PARTS : MODE.SLOTS;

  const config = { container, slotsByTag, partsByTag, prefix, contentContainerSelector };

  if (currentInspector && isSameConfig(config)) {
    currentInspector.setMode(mode);
    return story();
  }

  let channel: Channel | null = null;
  try {
    channel = addons.getChannel();
  } catch {
    channel = null;
  }

  // Any previously mounted overlay is torn down before a new one is created.
  teardownInspector();

  const canvas = document.createElement("canvas");
  canvas.className = OVERLAY_CANVAS_CLASS;
  Object.assign(canvas.style, OVERLAY_CANVAS_STYLES);
  document.body.appendChild(canvas);

  currentInspector = new ComponentInspector(
    canvas,
    container,
    slotsByTag,
    partsByTag,
    channel,
    prefix,
    contentContainerSelector,
    mode,
  );
  currentConfig = config;

  return story();
};
