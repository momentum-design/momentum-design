import { html, render } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import customElements from '../../../dist/custom-elements.json';
import '../../../src/components/popover';
import '../../../src/components/text';

/**
 * Storybook decorator that renders an interactive overlay to highlight the
 * slots or CSS Parts of a Momentum Design component.
 *
 * Usage:
 *  - Hold the `Shift` key to reveal the slot overlay.
 *  - Hold the `Meta` key to reveal the shadow-part overlay instead.
 *  - The first `mdc-<componentName>` element is selected automatically.
 *  - `Shift + click` / `Meta + click` any other MDC element to inspect it.
 *
 * Each region is drawn on a full-viewport `<canvas>` that is transparent
 * to pointer events, so the story underneath stays fully interactive. The
 * legend is shown in an `mdc-popover` positioned over/under the selected
 * component. Slot and part definitions are read from the component manifest
 * that Storybook already consumes.
 */

// Map of `tag-name` to the array of slot definitions coming from the manifest.
const SLOTS_BY_TAG = (() => {
  const map = new Map();
  customElements.modules.forEach(module => {
    (module.declarations || []).forEach(declaration => {
      if (declaration.tagName && Array.isArray(declaration.slots)) {
        map.set(declaration.tagName, declaration.slots);
      }
    });
  });
  return map;
})();

// Map of `tag-name` to the array of shadow part definitions from the manifest.
const PARTS_BY_TAG = (() => {
  const map = new Map();
  customElements.modules.forEach(module => {
    (module.declarations || []).forEach(declaration => {
      if (declaration.tagName && Array.isArray(declaration.cssParts)) {
        map.set(declaration.tagName, declaration.cssParts);
      }
    });
  });
  return map;
})();

// Inspection modes: `slots` is toggled with Shift, `parts` with Meta.
const MODE = { SLOTS: 'slots', PARTS: 'parts' };

const OVERLAY_CANVAS_CLASS = 'mdc-cmp-inspector-canvas';
const TARGET_ID_PREFIX = 'mdc-cmp-inspector-target-';

const OVERLAY_STYLES = `
  .mdc-cmp-inspector-container {
    display: contents;
  }
  .${OVERLAY_CANVAS_CLASS} {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    pointer-events: none;
    display: none;
  }
  .mdc-cmp-inspector-legend {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px 2px;
    max-height: 60vh;
    overflow: auto;
  }
  .mdc-cmp-inspector-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .mdc-cmp-inspector-swatch {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    flex: 0 0 auto;
    background: var(--mdc-cmp-inspector-swatch-bg, transparent);
    border: 1px solid var(--mdc-cmp-inspector-swatch-border, transparent);
  }
  .mdc-cmp-inspector-label--empty {
    opacity: 0.6;
  }
`;

let targetIdCounter = 0;

const isMdcElement = node => node instanceof Element && node.tagName.toLowerCase().startsWith('mdc-');

/** Normalise the default slot names used across the manifest (case-insensitive). */
const isDefaultSlot = name => {
  const normalized = (name || '').trim().toLowerCase();
  return normalized === '' || normalized === 'default';
};

/** Distinct, deterministic colour per item index. */
// MDC label colour variants used to colour-code items. Each item gets a
// variant which maps to the theme label tokens (see `variantColors`).
const LABEL_VARIANTS = ['cobalt', 'gold', 'lime', 'mint', 'orange', 'pink', 'purple', 'slate', 'violet'];

/** CSS custom property names for a label variant's outline and background. */
const variantTokens = variant => ({
  border: `--mds-color-theme-outline-label-${variant}`,
  background: `--mds-color-theme-background-label-${variant}-normal`,
});

/** Union of two DOMRect-like boxes. */
const unionRect = (a, b) => {
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
 * text nodes are measured via a Range so non-empty default item (which usually
 * contain plain text, e.g. a button label) are highlighted too.
 */
const nodeBoundingRect = node => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return node.getBoundingClientRect();
  }
  if (node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim()) {
    const range = document.createRange();
    range.selectNodeContents(node);
    return range.getBoundingClientRect();
  }
  return null;
};

const ensureId = element => {
  if (!element.id) {
    targetIdCounter += 1;
    // eslint-disable-next-line no-param-reassign
    element.id = `${TARGET_ID_PREFIX}${targetIdCounter}`;
  }
  return element.id;
};

// Controller that owns the canvas rendering, the legend popover, selection
// state and the listeners/observers that keep the overlay in sync with the
// story.
class ComponentInspector {
  constructor(canvas, container, componentName) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.container = container;
    this.componentName = componentName;

    this.selected = null;
    this.active = false;
    this.mode = MODE.SLOTS;
    this.frame = null;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClick = this.onClick.bind(this);
    this.scheduleDraw = this.scheduleDraw.bind(this);

    this.resizeObserver = new ResizeObserver(this.scheduleDraw);
    this.mutationObserver = new MutationObserver(this.scheduleDraw);

    this.createPopover();
    this.attach();
    this.selectInitial();
  }

  createPopover() {
    const popover = document.createElement('mdc-popover');
    popover.setAttribute('trigger', 'manual');
    popover.setAttribute('placement', 'bottom');
    popover.setAttribute('color', 'tonal');
    popover.setAttribute('showArrow', 'showArrow');
    popover.offset = 8;

    this.container.appendChild(popover);
    this.popover = popover;
    this.renderLegend([], null);
  }

  attach() {
    window.addEventListener('keydown', this.onKeyDown, true);
    window.addEventListener('keyup', this.onKeyUp, true);
    window.addEventListener('blur', this.onKeyUp);
    window.addEventListener('resize', this.scheduleDraw);
    window.addEventListener('scroll', this.scheduleDraw, true);
    document.addEventListener('click', this.onClick, true);

    if (this.container) {
      this.resizeObserver.observe(this.container);
      this.mutationObserver.observe(this.container, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
      });
    }
    this.updateVisibility();
  }

  destroy() {
    window.removeEventListener('keydown', this.onKeyDown, true);
    window.removeEventListener('keyup', this.onKeyUp, true);
    window.removeEventListener('blur', this.onKeyUp);
    window.removeEventListener('resize', this.scheduleDraw);
    window.removeEventListener('scroll', this.scheduleDraw, true);
    document.removeEventListener('click', this.onClick, true);
    this.resizeObserver.disconnect();
    this.mutationObserver.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
    this.popover.remove();
  }

  selectInitial(attempt = 0) {
    if (!this.container || !this.componentName || this.selected) return;

    const initial = this.container.querySelector(this.componentName);
    if (initial) {
      this.selected = initial;
      // If the inspector was toggled on before the story finished rendering,
      // anchor the popover now that the target exists.
      if (this.active) {
        this.openPopover();
        this.scheduleDraw();
      }
      return;
    }

    // The story may not be rendered/upgraded yet when the decorator mounts.
    // Retry on the next frames until the element appears (bounded).
    if (attempt < 60) {
      requestAnimationFrame(() => this.selectInitial(attempt + 1));
    }
  }

  setSelected(element, mode) {
    this.selected = element;
    this.mode = mode;
    this.active = true;
    this.updateVisibility();
    this.openPopover();
    this.scheduleDraw();
  }

  // Activate an inspection mode when its modifier key is pressed.
  activateMode(mode) {
    if (this.active && this.mode === mode) return;
    this.active = true;
    this.mode = mode;
    this.updateVisibility();
    this.openPopover();
    this.scheduleDraw();
  }

  onKeyDown(event) {
    if (event.key === 'Shift') {
      this.activateMode(MODE.SLOTS);
    } else if (event.key === 'Meta') {
      this.activateMode(MODE.PARTS);
    }
  }

  onKeyUp(event) {
    const releasesActive =
      event.type === 'blur' ||
      (event.key === 'Shift' && this.mode === MODE.SLOTS) ||
      (event.key === 'Meta' && this.mode === MODE.PARTS);
    if (releasesActive && this.active) {
      this.active = false;
      this.updateVisibility();
    }
  }

  onClick(event) {
    let mode = null;
    if (event.shiftKey) mode = MODE.SLOTS;
    else if (event.metaKey) mode = MODE.PARTS;
    if (!mode) return;
    const target = event
      .composedPath()
      .find(node => isMdcElement(node) && node !== this.popover && node.getRootNode() === document);
    if (!target) return;
    // Prevent the modifier+click from triggering the component's own behaviour
    // while it is being selected for inspection.
    event.preventDefault();
    event.stopImmediatePropagation();
    this.setSelected(target, mode);
    window.getSelection().empty();
  }

  updateVisibility() {
    this.canvas.style.display = this.active ? 'block' : 'none';
    if (!this.active) this.popover.visible = false;
  }

  /** (Re)anchor and show the popover against the current selection. */
  openPopover() {
    if (!this.active || !this.selected) return;
    this.popover.triggerID = ensureId(this.selected);
    // Toggle to force floating-ui to re-bind to the (possibly new) anchor.
    this.popover.visible = false;
    requestAnimationFrame(() => {
      if (this.active) this.popover.visible = true;
    });
  }

  scheduleDraw() {
    if (!this.active) return;
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      this.frame = null;
      this.draw();
    });
  }

  resizeCanvas() {
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
  collectSlots() {
    const tag = this.selected.tagName.toLowerCase();
    const definitions = SLOTS_BY_TAG.get(tag) || [];
    const root = this.selected.shadowRoot;

    const slots = definitions
      .filter(definition => {
        // Drop the default slot when the component does not actually render an
        // unnamed `<slot>` (e.g. mdc-tab inherits an empty-name slot from
        // Buttonsimple in the manifest but exposes only prefix/postfix slots).
        if (isDefaultSlot(definition.name)) {
          return !!(root && root.querySelector('slot:not([name])'));
        }
        return true;
      })
      .map(definition => {
        const { name } = definition;
        const nodes = isDefaultSlot(name) ? this.defaultSlotNodes() : this.namedSlotNodes(root, name);

        let rect = null;
        nodes.forEach(node => {
          const nodeRect = nodeBoundingRect(node);
          if (nodeRect && (nodeRect.width || nodeRect.height)) rect = unionRect(rect, nodeRect);
        });

        return { label: isDefaultSlot(name) ? 'default' : name, rect };
      })
      .sort((a, b) => a.label.localeCompare(b.label));

    return this.decorateWithColors(slots);
  }

  // Collect the on-screen rectangle and colour for each manifest shadow part of
  // the selected element by querying its shadow DOM for `[part~="name"]`.
  collectParts() {
    const tag = this.selected.tagName.toLowerCase();
    const definitions = PARTS_BY_TAG.get(tag) || [];
    const root = this.selected.shadowRoot;

    const parts = definitions
      .map(definition => {
        const { name } = definition;
        let rect = null;
        if (root) {
          root.querySelectorAll(`[part~="${name}"]`).forEach(el => {
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
  decorateWithColors(items) {
    items.forEach((item, index) => {
      const variant = LABEL_VARIANTS[index % LABEL_VARIANTS.length];
      const tokens = variantTokens(variant);
      const border = this.resolveToken(tokens.border) || this.resolveToken(tokens.background);
      /* eslint-disable no-param-reassign */
      item.variant = variant;
      item.borderColor = border;
      item.bgColor = this.resolveToken(tokens.background);
      /* eslint-enable no-param-reassign */
    });
    return items;
  }

  // Resolve an `--mds-*` custom property to its computed value within the
  // themed context of the selected element (works for the canvas, which cannot
  // reference CSS variables directly).
  resolveToken(name) {
    return getComputedStyle(this.selected).getPropertyValue(name).trim();
  }

  // Direct light-DOM children (and non-empty text nodes) of the selected
  // element with no explicit `slot` attribute — i.e. the default slot content.
  defaultSlotNodes() {
    return Array.from(this.selected.childNodes).filter(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return !!(node.textContent && node.textContent.trim());
      }
      return node.nodeType === Node.ELEMENT_NODE && !node.hasAttribute('slot');
    });
  }

  // Nodes assigned to a named shadow `<slot>`.
  namedSlotNodes(root, name) {
    const slotElement = root ? root.querySelector(`slot[name="${name}"]`) : null;
    if (!slotElement || !slotElement.assignedNodes) return [];
    return slotElement.assignedNodes({ flatten: true });
  }

  draw() {
    const { width, height } = this.resizeCanvas();
    const { ctx } = this;
    ctx.clearRect(0, 0, width, height);

    if (!this.selected || !this.selected.isConnected) {
      this.renderLegend([], null);
      return;
    }

    const tag = this.selected.tagName.toLowerCase();
    const items = this.mode === MODE.PARTS ? this.collectParts() : this.collectSlots();

    this.drawSelectedOutline(ctx);
    items.forEach(item => {
      if (item.rect) this.drawSlotRect(ctx, item.rect, item);
    });

    this.renderLegend(items, tag);
  }

  drawSelectedOutline(ctx) {
    const rect = this.selected.getBoundingClientRect();
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
    ctx.restore();
  }

  drawSlotRect(ctx, rect, slot) {
    ctx.save();
    ctx.fillStyle = slot.bgColor;
    ctx.globalAlpha = 0.35;
    ctx.fillRect(rect.left, rect.top, rect.width, rect.height);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = slot.borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
    ctx.restore();
  }

  /** Rebuild the popover legend rows (colour swatch + slot/part name). */
  renderLegend(items, tag) {
    const kind = this.mode === MODE.PARTS ? 'Parts' : 'Slots';
    const legend = html`
      <div class="mdc-cmp-inspector-legend">
        <mdc-text type="body-large-bold" tagname="div">
          ${tag ? html`${kind} · &lt;${tag}&gt;` : 'Shift + click for slots · Meta + click for parts'}
        </mdc-text>
        ${items.map(
          item => html`
            <div class="mdc-cmp-inspector-row">
              <span
                class="mdc-cmp-inspector-swatch"
                style="--mdc-cmp-inspector-swatch-bg:${item.rect
                  ? item.borderColor
                  : item.bgColor};--mdc-cmp-inspector-swatch-border:${item.borderColor};"
              ></span>
              <mdc-text
                type="body-small-regular"
                tagname="span"
                class="${item.rect ? '' : 'mdc-cmp-inspector-label--empty'}"
              >
                ${item.rect ? item.label : `${item.label} (empty)`}
              </mdc-text>
            </div>
          `,
        )}
      </div>
    `;
    render(legend, this.popover);
  }
}

/** Only a single inspector can be active at a time (one story is visible). */
let currentInspector = null;

export const withComponentInspectorDecorator = (story, context) => {
  if (context.viewMode === 'docs') {
    return undefined;
  }

  const baseComponentName = context.kind.split('/').pop().trim().toLowerCase().replace(/\s+/g, '');
  const componentName = baseComponentName ? `mdc-${baseComponentName}` : '';
  const containerRef = createRef();

  const initCanvas = canvas => {
    if (!canvas) return;
    if (currentInspector) currentInspector.destroy();
    currentInspector = new ComponentInspector(canvas, containerRef.value, componentName);
  };

  return html`
    <style>
      ${OVERLAY_STYLES}
    </style>
    <div ${ref(containerRef)} class="mdc-cmp-inspector-container">${story()}</div>
    <canvas ${ref(initCanvas)} class="${OVERLAY_CANVAS_CLASS}"></canvas>
  `;
};
