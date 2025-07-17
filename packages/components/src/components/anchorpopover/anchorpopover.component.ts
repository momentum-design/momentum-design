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

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = null;
    this.ariaLabel = null;
    this.ariaLabelledby = null;
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    this.triggerElementOverride = this.anchorElements.length > 0 ? this.anchorElements[0] : null;
    this.popoverContainerOverride = this.popoverElement;
    await super.firstUpdated(changedProperties);
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
