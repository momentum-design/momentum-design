import { arrow, autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { query, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import Popover from '../popover/popover.component';

import styles from './anchorpopover.styles';

/**
 * anchorpopover component, which ...
 *
 * @tagname mdc-anchorpopover
 *
 * @slot default - This is a default/unnamed slot
 * @slot anchor - Named slot for the trigger element (alternative to triggerID)
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class AnchorPopover extends Popover {
  @query('[part="popover"]')
  private popoverElement!: HTMLElement;

  @queryAssignedElements({ slot: 'anchor' })
  private anchorElements!: HTMLElement[];

  protected override async firstUpdated(changedProperties: PropertyValues) {
    this.triggerElement = this.anchorElements.length > 0 ? this.anchorElements[0] : null;
    await super.firstUpdated(changedProperties);
    this.popoverElement.style.zIndex = `${this.zIndex}`;

    if (this.visible) {
      // If the popover is visible on first update and focustrap is enabled, we need to activate the focus trap
      if (this.interactive && this.focusTrap) {
        // Wait for the first update to complete before setting focusable elements
        await this.updateComplete;
        this.activateFocusTrap?.(this.popoverElement);
        this.setInitialFocus?.();
      }
    }
  }

  protected override positionPopover() {
    if (!this.triggerElement) return;

    const middleware = [shift()];
    let popoverOffset = this.offset;

    if (this.flip) {
      middleware.push(flip());
    }

    if (this.size) {
      const popoverContent = this.renderRoot.querySelector('[part="popover-content"]') as HTMLElement;
      middleware.push(
        size({
          apply({ availableHeight }) {
            if (!popoverContent) return;
            Object.assign(popoverContent.style, {
              maxHeight: `${availableHeight}px`,
              overflowY: 'auto',
            });
          },
          padding: 50,
        }),
      );
    }

    if (this.showArrow) {
      this.arrowElement = this.renderRoot.querySelector('.popover-arrow');
      if (this.arrowElement) {
        const arrowLen = this.arrowElement.offsetHeight;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset += arrowOffset;
        middleware.push(arrow({ element: this.arrowElement, padding: 12 }));
      }
    }

    middleware.push(offset(popoverOffset));

    autoUpdate(this.triggerElement, this, async () => {
      if (!this.triggerElement) return;
      const { x, y, middlewareData, placement } = await computePosition(this.triggerElement, this.popoverElement, {
        placement: this.placement,
        middleware,
      });

      this.utils.updatePopoverStyle(x, y, this.popoverElement);
      if (middlewareData.arrow && this.arrowElement) {
        this.utils.updateArrowStyle(middlewareData.arrow, placement);
      }
      if (this.trigger.includes('mouseenter') && this.interactive) {
        this.utils.setupHoverBridge(placement);
      }
    });
  }

  public override render() {
    return html`
      <slot name="anchor"></slot>
      <div part="popover">
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
        <div part="popover-content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AnchorPopover;
