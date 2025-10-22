import { CSSResult, html } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import Searchfield from '../searchfield/searchfield.component';
import { KEYS } from '../../utils/keys';
import { POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { ROLE } from '../../utils/roles';

import styles from './searchpopover.styles';
import { DEFAULTS, TRIGGER_ID, POPOVER_ID } from './searchpopover.constants';
import type { Placement } from './searchpopover.types';

/**
 * `mdc-searchpopover` widget is a combination of the Searchfield and Popover components, connected to ensure
 * proper accessibility. This component should be used when search results or suggestions need to be displayed
 * in a popover below the search input field, where the search results hold individual actions like navigating to a
 * a different url etc.
 *
 * - Don't use this when search results are displayed inline on the page -> use Searchfield component instead.
 * - Don't use this when a list of options is filtered based on the search input -> use Combobox component instead.
 *
 * It supports `mdc-inputchip` as filters.
 *
 * This component is built by extending the `mdc-searchfield` component & rendering the mdc-popover component inside.
 *
 * @tagname mdc-searchpopover
 *
 * @event input - (React: onInput) This event is dispatched when the value of the input field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the input field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the input receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the input loses focus.
 * @event clear - (React: onClear) This event is dispatched when the input text is cleared.
 * @event shown - (React: onShown) This event is dispatched when the popover is shown
 * @event hidden - (React: onHidden) This event is dispatched when the popover is hidden
 *
 * @slot default - Default slot (=children) for the popover content
 * @slot filters - Slot for input chips
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 * @slot input - Slot for the input element. If not provided, the input field will be rendered.
 * @slot input-leading-icon - Slot for the leading icon before the input field. If not provided, the `leadingIcon` property will be used to render the leading icon.
 * @slot input-prefix-text - Slot for the prefix text before the input field. If not provided, the `prefixText` property will be used to render the prefix text.
 * @slot trailing-button - Slot for the trailing button to clear the input field. If not provided, the clear button will be rendered when `trailingButton` property is set to true.
 *
 * @cssproperty --mdc-label-font-size - Font size for the label text.
 * @cssproperty --mdc-label-font-weight - Font weight for the label text.
 * @cssproperty --mdc-label-line-height - Line height for the label text.
 * @cssproperty --mdc-label-color - Color for the label text.
 * @cssproperty --mdc-help-text-font-size - Font size for the help text.
 * @cssproperty --mdc-help-text-font-weight - Font weight for the help text.
 * @cssproperty --mdc-help-text-line-height - Line height for the help text.
 * @cssproperty --mdc-help-text-color - Color for the help text.
 * @cssproperty --mdc-required-indicator-color - Color for the required indicator text.
 * @cssproperty --mdc-input-text-color - Text color for the input field
 * @cssproperty --mdc-input-border-color - Border color for the input container
 * @cssproperty --mdc-input-background-color - Background color for the input field
 * @cssproperty --mdc-input-support-text-color - Text color for the help text
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 * @cssproperty --mdc-searchpopover-width - Width of the searchpopover component
 * @cssproperty --mdc-searchpopover-popover-width - Width of the popover within the searchpopover component
 * @cssproperty --mdc-searchpopover-popover-height - Height of the popover within the searchpopover component
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart leading-icon - The leading icon element that is displayed before the input field.
 * @csspart prefix-text - The prefix text element that is displayed before the input field.
 * @csspart input-container - The container for the input field, leading icon, prefix text, and trailing button elements.
 * @csspart input-section - The container for the input field, leading icon, and prefix text elements.
 * @csspart input-text - The input field element.
 * @csspart trailing-button - The trailing button element that is displayed to clear the input field when the `trailingButton` property is set to true.
 * @csspart popover-content - The popover content element.
 */
class Searchpopover extends Searchfield {
  /**
   * Whether to display the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'display-popover' })
  displayPopover?: boolean = DEFAULTS.DISPLAY_POPOVER;

  /**
   * The placement of the popover within Searchpopover component.
   * This defines the position of the popover relative to the search input field.
   *
   * Possible values:
   *  - 'top-start'
   *  - 'bottom-start'
   * @default 'bottom-start'
   */
  @property({ type: String, reflect: true })
  placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * The z-index of the popover within Searchpopover.
   *
   * Override this to make sure this stays on top of other components.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'popover-z-index' })
  popoverZIndex: number = POPOVER_DEFAULTS.Z_INDEX;

  /**
   * The aria-label for the popover within Searchpopover.
   * Use to provide an accessible name for the popover i.e. "Search results".
   */
  @property({ type: String, reflect: true, attribute: 'popover-aria-label' })
  popoverAriaLabel?: string;

  protected override renderInputElement() {
    const placeholderText = this.hasInputChips ? '' : this.placeholder;

    return html`<input
      aria-label="${this.dataAriaLabel ?? ''}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${live(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${DEFAULTS.TYPE}"
      aria-expanded="${this.displayPopover ? 'true' : 'false'}"
      aria-controls="${POPOVER_ID}"
      aria-owns="${POPOVER_ID}"
      aria-haspopup="${ROLE.DIALOG}"
      aria-describedby="${ifDefined(
        this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : (this.dataAriaDescribedby ?? ''),
      )}"
      aria-invalid="${this.helpTextType === 'error' ? 'true' : 'false'}"
      placeholder=${ifDefined(placeholderText)}
      minlength=${ifDefined(this.minlength)}
      maxlength=${ifDefined(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${ifDefined(this.dirname)}
      pattern=${ifDefined(this.pattern)}
      list=${ifDefined(this.list)}
      size=${ifDefined(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
      role=${ifDefined(ROLE.COMBOBOX)}
    />`;
  }

  public override render() {
    return html`
      ${this.renderLabelElement()}
      <div
        class="${classMap({
          'mdc-focus-ring': this.isInputFocused,
        })}"
        part="input-container"
        id="${TRIGGER_ID}"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${() => this.inputElement.focus()}
            @keydown=${(e: KeyboardEvent) => (e.key === KEYS.ENTER ? this.inputElement.focus() : null)}
            @keyup=${(e: KeyboardEvent) => (e.key === KEYS.SPACE ? this.inputElement.focus() : null)}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement()}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
      <mdc-popover
        triggerID="${TRIGGER_ID}"
        id="${POPOVER_ID}"
        trigger="manual"
        interactive
        ?visible=${this.displayPopover}
        hide-on-outside-click
        hide-on-escape
        focus-back-to-trigger
        size
        placement="${this.placement}"
        aria-label="${ifDefined(this.popoverAriaLabel)}"
        disable-aria-expanded
        z-index="${ifDefined(this.popoverZIndex)}"
        exportparts="popover-content"
      >
        <slot></slot>
      </mdc-popover>
    `;
  }

  public static override styles: Array<CSSResult> = [...Searchfield.styles, ...styles];
}

export default Searchpopover;
