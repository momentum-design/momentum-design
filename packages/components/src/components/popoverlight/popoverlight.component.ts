import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import Popover from '../popover/popover.component';

import styles from './popoverlight.styles';

/**
 * Popoverlight component is a lightweight floating UI element that displays additional content when triggered.
 * It is similar to Popover but renders its children in the light DOM (no shadow root).
 *
 * @tagname mdc-popoverlight
 *
 * @slot - Default slot for the popoverlight content
 *
 * @event shown - (React: onShown) This event is dispatched when the popoverlight is shown
 * @event hidden - (React: onHidden) This event is dispatched when the popoverlight is hidden
 * @event created - (React: onCreated) This event is dispatched when the popoverlight is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the popoverlight is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-border-color - border color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 * @cssproperty --mdc-popover-elevation-3 - elevation of the popover
 * @cssproperty --mdc-popover-max-width - max width of the popover
 * @cssproperty --mdc-popover-max-height - max height of the popover
 */
class Popoverlight extends Popover {
  // Override render to use light DOM
  public override createRenderRoot() {
    return this;
  }

  private injectPopoverlightStyles() {
    if (!document.getElementById('popoverlight-global-styles')) {
      const style = document.createElement('style');
      style.id = 'popoverlight-global-styles';
      style.textContent = styles;
      document.head.appendChild(style);
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.injectPopoverlightStyles();

    // Move all children into .popover-content after first update
    requestAnimationFrame(() => {
      const popoverContent = this.querySelector('.popover-content');
      if (popoverContent) {
        // Move all nodes except the popover structure into .popover-content
        const nodesToMove: Node[] = [];
        this.childNodes.forEach(node => {
          // Only move nodes that are not part of the popover structure
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            !(node as Element).classList.contains('popover-hover-bridge') &&
            !(node as Element).classList.contains('popover-close') &&
            !(node as Element).classList.contains('popover-arrow') &&
            !(node as Element).classList.contains('popover-content')
          ) {
            nodesToMove.push(node);
          } else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            nodesToMove.push(node);
          }
        });
        nodesToMove.forEach(node => popoverContent.appendChild(node));
      }
    });
  }

  public override render() {
    return html`
      <div class="popover-hover-bridge"></div>
      ${this.closeButton
        ? html` <mdc-button
            class="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${ifDefined(this.closeButtonAriaLabel) || ''}
            @click="${this.hidePopover}"
          ></mdc-button>`
        : nothing}
      ${this.showArrow ? html`<div class="popover-arrow"></div>` : nothing}
      <div class="popover-content"></div>
    `;
  }
}

export default Popoverlight;
