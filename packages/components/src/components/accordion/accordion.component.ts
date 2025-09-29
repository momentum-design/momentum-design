import type { CSSResult, PropertyValues } from 'lit';
import { html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ROLE } from '../../utils/roles';
import AccordionButton from '../accordionbutton/accordionbutton.component';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';

import styles from './accordion.styles';

/**
 * An accordion contains a header and body section with a focusable heading that can be expanded or collapsed.
 *
 * The header section contains:
 * - Prefix Icon
 * - Header Text
 * - Leading Slot - Contains the leading controls of the accordion on the header section. This will be placed on the leading side, after the header text.
 * - Trailing Slot - Contains the trailing controls of the accordion on the header section. This will be placed on the trailing side, before the expand/collapse button.
 *
 * The body section contains:
 * - Default slot - User can place any content inside the body section.
 *
 * The accordion can be expanded or collapsed. The visibility of the body section can be controlled by `expanded` attribute. <br/>
 * There are two types of variants based on that the border styling of the accordion gets reflected. <br/>
 * There are two sizes of accordion, one is small and the other is large.
 * Small size has a padding of 1rem (16px) and large size has a padding of 1.5rem (24px) for the body section of accordion.
 *
 * By default, the header text in the accordion heading is of H3 with an aria-level of '3'.
 * If this accordion is placed on any other level in the entire webpage, then do adjust the aria-level number based on that.
 *
 * An accordion can be disabled, and when it's disabled, the header section will not be clickable.
 *
 * If you don't need any controls on your accordion heading, then it's advised to use `accordionbutton` component.
 *
 * If an accordion is expanded by default, then the screen reader might loose focus when toggling the visibilty of the accordion.
 *
 * @tagname mdc-accordion
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot leading-controls - The leading controls slot of the accordion on the header section.
 * @slot trailing-controls - The trailing controls slot of the accordion on the header section.
 * @slot default - The default slot contains the body section of the accordion. User can place anything inside this body slot.
 *
 * @event shown - (React: onShown) This event is triggered when the accordion is expanded.
 *
 * @cssproperty --mdc-accordionbutton-border-color - The border color of the accordion.
 * @cssproperty --mdc-accordionbutton-hover-color - The hover color of the accordion.
 * @cssproperty --mdc-accordionbutton-active-color - The active color of the accordion.
 * @cssproperty --mdc-accordionbutton-disabled-color - The disabled color of the accordion.
 *
 * @csspart body-section - The body section of the accordion.
 * @csspart header-section - The header section of the accordion.
 * @csspart leading-header - The leading header of the accordion.
 * @csspart trailing-header - The trailing header of the accordion.
 * @csspart trailing-header__button - The trailing header button of the accordion.
 */
class Accordion extends AccordionButton {
  /** @internal */
  @queryAssignedElements({ slot: 'leading-controls' })
  leadingControlsSlot!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ slot: 'trailing-controls' })
  trailingControlsSlot!: Array<HTMLElement>;

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
    return html`
      <div part="header-section">
        <div part="leading-header">
          ${this.renderIcon(this.prefixIcon)}
          <div role="${ROLE.HEADING}" aria-level="${this.dataAriaLevel}">${this.renderHeadingText()}</div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          <mdc-button
            part="trailing-header__button"
            ?disabled="${this.disabled}"
            @click="${this.handleHeaderClick}"
            aria-controls="${this.bodySectionId}"
            aria-expanded="${this.expanded}"
            title="${ifDefined(this.headerText)}"
            prefix-icon="${this.getArrowIconName()}"
            variant="${BUTTON_VARIANTS.TERTIARY}"
            size="${ICON_BUTTON_SIZES[20]}"
          ></mdc-button>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...AccordionButton.styles, ...styles];
}

export default Accordion;
