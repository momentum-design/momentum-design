import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { queryAssignedElements, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ROLE } from '../../utils/roles';
import AccordionButton from '../accordionbutton/accordionbutton.component';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';

import styles from './accordion.styles';

/**
 * An accordion is a vertically stacked component with a header and expandable/collapsible body section.
 * The header displays a prefix icon, header text, optional control slots (leading and trailing), and a dedicated expand/collapse button.
 * Unlike `accordionbutton`, only the expand/collapse button is clickable and not the entire header.
 *
 * ## Header contains
 * - Optional prefix icon
 * - Header text (default H3, customizable via `data-aria-level`)
 * - Leading slot for controls (placed after header text)
 * - Trailing slot for controls (placed before expand/collapse button)
 * - Expand/collapse button (automatically positioned at the end)
 *
 * ## Body contains
 * - Default slot for any content
 *
 * The accordion supports different border styles through the `variant` attribute and different spacing through the `size` attribute.
 * An accordion can be disabled, which prevents all interactions including the expand/collapse button and any slotted controls.
 *
 * ## When to use
 * - Use `mdc-accordion` when you need additional interactive controls (chips, badges, buttons, icons) in the header.
 * - Use `mdc-accordionbutton` if you only need a simple clickable header without extra controls.
 *
 * ## Accessibility
 * - Always provide `open-button-aria-label` and `close-button-aria-label` for screen reader support
 * - Adjust `data-aria-level` based on heading hierarchy in your page
 * - Note: Screen readers may lose focus when toggling if accordion is expanded by default
 *
 * @tagname mdc-accordion
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot leading-header-text - The leading header text slot of the accordion on the header section. Placed after the prefix icon.
 * @slot leading-controls - The leading controls slot of the accordion on the header section. Placed after the header text.
 * @slot trailing-controls - The trailing controls slot of the accordion on the header section. Placed before the expand/collapse button.
 * @slot toggle-button - Slot for custom placement of the expand/collapse button. When used, the default trailing button is hidden.
 * The slotted button will automatically receive click handling, icon updates, and aria attributes.
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
 * @csspart leading-header__button - The leading header button container for the toggle-button slot.
 * @csspart leading-header-text - The leading header text of the accordion button.
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

  /** @internal */
  @queryAssignedElements({ slot: 'toggle-button' })
  toggleButtonSlot!: Array<HTMLElement>;

  /** @internal */
  @state()
  private hasToggleButtonSlot = false;

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
   * Handles the slotchange event for the toggle-button slot.
   * Updates the hasToggleButtonSlot state and configures the slotted button.
   */
  private handleToggleButtonSlotChange(): void {
    this.hasToggleButtonSlot = this.toggleButtonSlot.length > 0;
    this.configureToggleButtonSlot();
  }

  /**
   * Configures the toggle-button slot with click handler, icon, and aria attributes.
   * Only configures if the slotted element is an mdc-button.
   */
  private configureToggleButtonSlot(): void {
    const button = this.toggleButtonSlot[0];
    if (!button || button.tagName.toLowerCase() !== 'mdc-button') {
      return;
    }

    // Set button visual attributes
    button.setAttribute('prefix-icon', this.getArrowIconName());
    button.setAttribute('variant', BUTTON_VARIANTS.TERTIARY);
    button.setAttribute('size', String(ICON_BUTTON_SIZES[20]));

    // Set accessibility attributes
    // Note: aria-controls is intentionally NOT set because the slotted button is in light DOM
    // while the body section is in shadow DOM - ARIA relationships cannot cross shadow boundaries.
    button.setAttribute('aria-expanded', String(this.expanded));

    const ariaLabel = this.expanded ? this.closeButtonAriaLabel : this.openButtonAriaLabel;
    if (ariaLabel) {
      button.setAttribute('aria-label', ariaLabel);
    }

    if (this.disabled) {
      button.setAttribute('disabled', '');
    } else {
      button.removeAttribute('disabled');
    }

    button.removeEventListener('click', this.handleSlottedButtonClick);
    button.addEventListener('click', this.handleSlottedButtonClick);
  }

  /**
   * Bound click handler for the slotted toggle button.
   */
  private handleSlottedButtonClick = (): void => {
    this.handleHeaderClick();
  };

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

    if (
      changedProperties.has('expanded') ||
      changedProperties.has('disabled') ||
      changedProperties.has('openButtonAriaLabel') ||
      changedProperties.has('closeButtonAriaLabel')
    ) {
      this.configureToggleButtonSlot();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.toggleButtonSlot.length > 0) {
      this.toggleButtonSlot[0].removeEventListener('click', this.handleSlottedButtonClick);
    }
  }

  /**
   * Renders the toggle-button slot in the leading header position.
   * The slot is always rendered (hidden when empty) to detect slotchange events.
   * The visible container is only rendered when content is slotted.
   * @returns The toggle-button slot template.
   */
  private renderToggleButtonSlot() {
    return html`
      <div part="leading-header__button" class="${this.hasToggleButtonSlot ? '' : 'hidden'}">
        <slot name="toggle-button" @slotchange="${this.handleToggleButtonSlotChange}"></slot>
      </div>
    `;
  }

  /**
   * Renders the default trailing button.
   * Only renders if toggle-button slot is not being used.
   * @returns The trailing button template or nothing if toggle-button slot is used.
   */
  private renderTrailingButton() {
    if (this.hasToggleButtonSlot) {
      return nothing;
    }
    return html`
      <mdc-button
        part="trailing-header__button"
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
    return html`
      <div part="header-section" @shown="${this.handleHeaderShownEvent}">
        <div part="leading-header">
          ${this.renderToggleButtonSlot()} ${this.renderIcon(this.prefixIcon)}
          <div role="${ROLE.HEADING}" aria-level="${this.dataAriaLevel}">
            <slot name="leading-header-text">${this.renderHeadingText()}</slot>
          </div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          ${this.renderTrailingButton()}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...AccordionButton.styles, ...styles];
}

export default Accordion;
