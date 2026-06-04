import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { queryAssignedElements, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ROLE } from '../../utils/roles';
import AccordionButton from '../accordionbutton/accordionbutton.component';
import { TOGGLE_POSITION } from '../accordionbutton/accordionbutton.constants';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';

import styles from './accordion.styles';

/**
 * @tagname mdc-accordion
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot leading-header-text - The leading header text slot of the accordion on the header section. Placed after the prefix icon.
 * @slot leading-controls - The leading controls slot of the accordion on the header section. Placed after the header text.
 * @slot trailing-controls - The trailing controls slot of the accordion on the header section. Placed before the expand/collapse button.
 * @slot default - The default slot contains the body section of the accordion. User can place anything inside this body slot.
 *
 * @event shown - (React: onShown) This event is triggered when the accordion is toggled (expanded or collapsed).
 *
 * @cssproperty --mdc-accordionbutton-border-color - The border color of the accordion.
 * @cssproperty --mdc-accordionbutton-disabled-color - The disabled text color of the accordion.
 *
 * @csspart body-section - The body section of the accordion.
 * @csspart header-section - The header section of the accordion.
 * @csspart leading-header - The leading header of the accordion.
 * @csspart leading-header-text - The leading header text of the accordion button.
 * @csspart trailing-header - The trailing header of the accordion.
 * @csspart toggle-button - The expand/collapse toggle button of the accordion.
 */
class Accordion extends AccordionButton {
  /** @internal */
  @queryAssignedElements({ slot: 'leading-controls' })
  leadingControlsSlot!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ slot: 'trailing-controls' })
  trailingControlsSlot!: Array<HTMLElement>;

  /**
   * Accessible label for the expand/collapse button when the accordion is in collapsed state.
   * Provides context to screen readers about the button's action to open the accordion.
   */
  @property({ type: String, attribute: 'open-button-aria-label', reflect: true })
  openButtonAriaLabel?: string;

  /**
   * Accessible label for the expand/collapse button when the accordion is in expanded state.
   * Provides context to screen readers about the button's action to close the accordion.
   */
  @property({ type: String, attribute: 'close-button-aria-label', reflect: true })
  closeButtonAriaLabel?: string;

  /**
   * Prevents "shown" events from child elements in the header section from bubbling up.
   * @param event - The shown event to stop.
   */
  private handleHeaderShownEvent(event: Event): void {
    event.stopPropagation();
  }

  /**
   * Handles property changes for the accordion.
   * If the disabled property is updated, applies the same disabled state to all elements in the leading and trailing controls slots.
   * @param changedProperties - The changed properties of the accordion.
   */
  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      [...this.leadingControlsSlot, ...this.trailingControlsSlot].forEach(element => {
        if (this.disabled) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled');
        }
      });
    }
  }

  /**
   * Renders the expand/collapse toggle button.
   * @returns The rendered toggle button.
   */
  private renderToggleButton() {
    return html`
      <mdc-button
        part="toggle-button"
        ?disabled="${this.disabled}"
        @click="${this.handleHeaderClick}"
        aria-controls="${this.bodySectionId}"
        aria-expanded="${this.expanded}"
        aria-label="${ifDefined(this.expanded ? this.closeButtonAriaLabel : this.openButtonAriaLabel)}"
        prefix-icon="${this.getArrowIconName()}"
        variant="${BUTTON_VARIANTS.TERTIARY}"
        size="${ICON_BUTTON_SIZES[20]}"
      ></mdc-button>
    `;
  }

  /**
   * Renders the header section of the accordion.
   * This includes the leading icon, text and controls, and the trailing controls.
   * The trailing controls include the expand/collapse button.
   * The button is disabled if the accordion is disabled.
   * The button is also given the aria-controls attribute set to the id of the body section.
   * The button is also given the aria-expanded attribute set to the expanded state of the accordion.
   * The prefix icon of the button is set to the expanded state of the accordion.
   * @returns The rendered header section of the accordion.
   */
  public override renderHeader() {
    const isLeading = this.togglePosition === TOGGLE_POSITION.LEADING;
    return html`
      <div part="header-section" @shown="${this.handleHeaderShownEvent}">
        <div part="leading-header">
          ${isLeading ? this.renderToggleButton() : nothing} ${this.renderIcon(this.prefixIcon)}
          <div role="${ROLE.HEADING}" aria-level="${this.dataAriaLevel}">
            <slot name="leading-header-text">${this.renderHeadingText()}</slot>
          </div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          ${isLeading ? nothing : this.renderToggleButton()}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...AccordionButton.styles, ...styles];
}

export default Accordion;
