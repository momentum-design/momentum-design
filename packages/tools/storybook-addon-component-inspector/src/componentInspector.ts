import { addons } from "storybook/preview-api";
import type { Channel } from "storybook/internal/channels";
import type {
  PartialStoryFn,
  Renderer,
  StoryContext,
} from "storybook/internal/types";

import { EVENTS, KEY, PARAM_KEY } from "./constants";
import type {
  ComponentInspectorParameters,
  CustomElementsManifest,
  LegendPayload,
  ManifestCssPart,
  ManifestSlot,
} from "./types";

/**
 * Storybook decorator that renders an interactive overlay to highlight the
 * slots or CSS Parts of a Momentum Design component.
 *
 * The overlay is only mounted while the inspector is turned on through the
 * toolbar toggle (the `mdc-component-inspector` Storybook global). Once active:
 *  - Hold the `Shift` key to reveal the slot overlay.
 *  - Hold the `Meta` key to reveal the shadow-part overlay instead.
 *  - `Shift + click` / `Meta + click` any MDC element to inspect it.
 *
 * Each region is drawn on a full-viewport `<canvas>` that is transparent to
 * pointer events, so the story underneath stays fully interactive. The colour
 * legend itself is rendered in the Storybook manager (using Storybook's own UI
 * components and theme); this decorator only streams the legend data and the
 * anchor rect over the Storybook channel. While nothing is selected the manager
 * shows an OS-aware help message instead. Slot and part definitions are read
 * from the custom-elements manifest provided via
 * `parameters.componentInspector.customElements`.
 */

// Inspection modes: `slots` is toggled with Shift, `parts` with Meta.
type Mode = "slots" | "parts";

const MODE: Record<"SLOTS" | "PARTS", Mode> = { SLOTS: "slots", PARTS: "parts" };

const OVERLAY_CANVAS_CLASS = "mdc-cmp-inspector-canvas";

// Inline styles applied to the full-viewport overlay canvas. The canvas is
// transparent to pointer events so the story underneath stays interactive.
const OVERLAY_CANVAS_STYLES: Partial<CSSStyleDeclaration> = {
  position: "fixed",
  inset: "0",
  zIndex: "2147483000",
  pointerEvents: "none",
  display: "none",
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
  variant?: string;
  borderColor?: string;
  bgColor?: string;
}

/** `tag-name` → slot/part definition maps derived from the manifest. */
interface ManifestMaps {
  slotsByTag: Map<string, ManifestSlot[]>;
  partsByTag: Map<string, ManifestCssPart[]>;
}

const isMdcElement = (node: EventTarget | null): node is Element =>
  node instanceof Element && node.tagName.toLowerCase().startsWith("mdc-");

/** Normalise the default slot names used across the manifest (case-insensitive). */
const isDefaultSlot = (name?: string): boolean => {
  const normalized = (name || "").trim().toLowerCase();
  return normalized === "" || normalized === "default";
};

/** Distinct, deterministic colour per item index. */
// MDC label colour variants used to colour-code items. Each item gets a
// variant which maps to the theme label tokens (see `variantTokens`).
const LABEL_VARIANTS = ["cobalt", "gold", "lime", "mint", "orange", "pink", "purple", "slate", "violet"];

/** CSS custom property names for a label variant's outline and background. */
const variantTokens = (variant: string): { border: string; background: string } => ({
  border: `--mds-color-theme-outline-label-${variant}`,
  background: `--mds-color-theme-background-label-${variant}-normal`,
});

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

// Controller that owns the canvas rendering, the legend channel messages,
// selection state and the listeners/observers that keep the overlay in sync
// with the story.
class ComponentInspector {
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  private readonly container: Element;

  private readonly slotsByTag: Map<string, ManifestSlot[]>;

  private readonly partsByTag: Map<string, ManifestCssPart[]>;

  private readonly channel: Channel | null;

  private selected: Element | null = null;

  private active = false;

  private mode: Mode = MODE.SLOTS;

  private frame: number | null = null;

  private readonly resizeObserver: ResizeObserver;

  private readonly mutationObserver: MutationObserver;

  constructor(
    canvas: HTMLCanvasElement,
    container: Element,
    slotsByTag: Map<string, ManifestSlot[]>,
    partsByTag: Map<string, ManifestCssPart[]>,
    channel: Channel | null,
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.container = container;
    this.slotsByTag = slotsByTag;
    this.partsByTag = partsByTag;
    this.channel = channel;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onRequest = this.onRequest.bind(this);
    this.scheduleDraw = this.scheduleDraw.bind(this);

    this.resizeObserver = new ResizeObserver(this.scheduleDraw);
    this.mutationObserver = new MutationObserver(this.scheduleDraw);

    this.attach();
  }

  private attach(): void {
    window.addEventListener("keydown", this.onKeyDown, true);
    window.addEventListener("keyup", this.onKeyUp, true);
    window.addEventListener("blur", this.onKeyUp);
    window.addEventListener("resize", this.scheduleDraw);
    window.addEventListener("scroll", this.scheduleDraw, true);
    document.addEventListener("click", this.onClick, true);
    this.channel?.on(EVENTS.REQUEST, this.onRequest);

    this.resizeObserver.observe(this.container);
    this.mutationObserver.observe(this.container, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    this.updateVisibility();
  }

  destroy(): void {
    window.removeEventListener("keydown", this.onKeyDown, true);
    window.removeEventListener("keyup", this.onKeyUp, true);
    window.removeEventListener("blur", this.onKeyUp);
    window.removeEventListener("resize", this.scheduleDraw);
    window.removeEventListener("scroll", this.scheduleDraw, true);
    document.removeEventListener("click", this.onClick, true);
    this.channel?.off(EVENTS.REQUEST, this.onRequest);
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
    this.clearLegend();
    this.canvas.remove();
  }

  private setSelected(element: Element, mode: Mode): void {
    this.selected = element;
    this.mode = mode;
    this.active = true;
    this.updateVisibility();
    this.scheduleDraw();
  }

  // Activate an inspection mode when its modifier key is pressed.
  private activateMode(mode: Mode): void {
    if (this.active && this.mode === mode) return;
    this.active = true;
    this.mode = mode;
    this.updateVisibility();
    this.scheduleDraw();
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Shift") {
      this.activateMode(MODE.SLOTS);
    } else if (event.key === "Meta") {
      this.activateMode(MODE.PARTS);
    }
  }

  private onKeyUp(event: KeyboardEvent | FocusEvent): void {
    const key = "key" in event ? event.key : undefined;
    const releasesActive =
      event.type === "blur" ||
      (key === "Shift" && this.mode === MODE.SLOTS) ||
      (key === "Meta" && this.mode === MODE.PARTS);
    if (releasesActive && this.active) {
      this.active = false;
      this.updateVisibility();
    }
  }

  private onClick(event: MouseEvent): void {
    let mode: Mode | null = null;
    if (event.shiftKey) mode = MODE.SLOTS;
    else if (event.metaKey) mode = MODE.PARTS;
    if (!mode) return;
    const target = event.composedPath().find((node) => isMdcElement(node) && node.getRootNode() === document);
    if (!isMdcElement(target ?? null)) return;
    // Prevent the modifier+click from triggering the component's own behaviour
    // while it is being selected for inspection.
    event.preventDefault();
    event.stopImmediatePropagation();
    this.setSelected(target as Element, mode);
    window.getSelection()?.empty();
  }

  // Re-emit the current legend/help so a freshly mounted manager panel (which
  // may have subscribed after the initial emit) picks up the correct state.
  private onRequest(): void {
    if (this.active && this.selected?.isConnected) {
      this.draw();
    } else {
      this.emitHelp();
    }
  }

  private updateVisibility(): void {
    this.canvas.style.display = this.active ? "block" : "none";
    if (!this.active) {
      if (this.selected) this.clearLegend();
      else this.emitHelp();
    }
  }

  private emitLegend(payload: LegendPayload): void {
    this.channel?.emit(EVENTS.UPDATE, payload);
  }

  // With nothing selected there is nothing to outline, so the manager renders
  // an OS-aware key guide instead (signalled by a `null` tag).
  private emitHelp(): void {
    this.emitLegend({ tag: null, mode: this.mode, items: [], anchor: null });
  }

  private clearLegend(): void {
    this.channel?.emit(EVENTS.CLEAR);
  }

  private scheduleDraw(): void {
    if (!this.active) return;
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
  // selected element. Named slots are resolved through the shadow `<slot>`
  // assignment; the default slot counts the element's own light-DOM children
  // that have no explicit `slot` attribute.
  private collectSlots(): InspectedItem[] {
    const selected = this.selected;
    if (!selected) return [];
    const tag = selected.tagName.toLowerCase();
    const definitions = this.slotsByTag.get(tag) || [];
    const root = selected.shadowRoot;

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
  // the selected element by querying its shadow DOM for `[part~="name"]`.
  private collectParts(): InspectedItem[] {
    const selected = this.selected;
    if (!selected) return [];
    const tag = selected.tagName.toLowerCase();
    const definitions = this.partsByTag.get(tag) || [];
    const root = selected.shadowRoot;

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

  // Assign an MDC label colour variant (and its resolved token colours) to each
  // collected item, colour-coding it consistently across canvas and legend.
  private decorateWithColors(items: InspectedItem[]): InspectedItem[] {
    items.forEach((item, index) => {
      const variant = LABEL_VARIANTS[index % LABEL_VARIANTS.length]!;
      const tokens = variantTokens(variant);
      const border = this.resolveToken(tokens.border) || this.resolveToken(tokens.background);
      item.variant = variant;
      item.borderColor = border;
      item.bgColor = this.resolveToken(tokens.background);
    });
    return items;
  }

  // Resolve an `--mds-*` custom property to its computed value within the
  // themed context of the selected element (works for the canvas, which cannot
  // reference CSS variables directly).
  private resolveToken(name: string): string {
    if (!this.selected) return "";
    return getComputedStyle(this.selected).getPropertyValue(name).trim();
  }

  // Direct light-DOM children (and non-empty text nodes) of the selected
  // element with no explicit `slot` attribute — i.e. the default slot content.
  private defaultSlotNodes(): Node[] {
    if (!this.selected) return [];
    return Array.from(this.selected.childNodes).filter((node) => {
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

    if (!this.selected || !this.selected.isConnected) {
      this.emitHelp();
      return;
    }

    const tag = this.selected.tagName.toLowerCase();
    const items = this.mode === MODE.PARTS ? this.collectParts() : this.collectSlots();

    this.drawSelectedOutline(ctx);
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
      anchor: rectToPlain(this.selected.getBoundingClientRect()),
    });
  }

  private drawSelectedOutline(ctx: CanvasRenderingContext2D): void {
    const rect = this.selected!.getBoundingClientRect();
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

const teardownInspector = (): void => {
  if (currentInspector) {
    currentInspector.destroy();
    currentInspector = null;
  }
};

/**
 * Storybook decorator. Mounts the inspector overlay only while the toolbar
 * toggle (the `mdc-component-inspector` global) is on, and never in docs view.
 */
export const withComponentInspector = (story: PartialStoryFn<Renderer>, context: StoryContext<Renderer>) => {
  const isEnabled = !!(context.globals && context.globals[KEY]);

  if (context.viewMode === "docs" || !isEnabled) {
    teardownInspector();
    return story();
  }

  const parameters = context.parameters?.[PARAM_KEY] as ComponentInspectorParameters | undefined;
  const { slotsByTag, partsByTag } = buildManifestMaps(parameters?.customElements);

  let channel: Channel | null = null;
  try {
    channel = addons.getChannel();
  } catch {
    channel = null;
  }

  // Any previously mounted overlay is torn down before a new one is created.
  teardownInspector();

  const container = document.getElementById("storybook-root") || document.body;

  const canvas = document.createElement("canvas");
  canvas.className = OVERLAY_CANVAS_CLASS;
  Object.assign(canvas.style, OVERLAY_CANVAS_STYLES);
  document.body.appendChild(canvas);

  currentInspector = new ComponentInspector(canvas, container, slotsByTag, partsByTag, channel);

  return story();
};
