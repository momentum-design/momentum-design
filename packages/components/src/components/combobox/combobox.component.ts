import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import Input from '../input/input.component';
import { AUTO_COMPLETE } from '../input/input.constants';
import type Option from '../option/option.component';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT, TRIGGER, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { TAG_NAME as SELECTLISTBOX_TAG_NAME } from '../selectlistbox/selectlistbox.constants';

import { AUTOCOMPLETE_LIST, ICON_NAME, LISTBOX_ID, TRIGGER_ID } from './combobox.constants';
import styles from './combobox.styles';
import { Placement } from './combobox.types';

/**
 * Combobox component, which ...
 * @dependency mdc-buttonsimple
 * @dependency mdc-icon
 * @dependency mdc-input
 * @dependency mdc-popover
 *
 * @tagname mdc-combobox
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --mdc-combobox-border-color - The border color of the combobox
 */
class Combobox extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) {
  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * readonly attribute of the combobox field. If true, the combobox is read-only.
   * @default false
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String, reflect: true }) placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * height attribute of the combobox field. If set,
   * then a scroll bar will be visible when there more options than the adjusted height.
   * @default auto
   */
  @property({ type: String }) height = 'auto';

  /**
   * Text to be displayed when no results are found.
   *
   * @default undefined
   */
  @property({ type: String, attribute: 'no-result-text', reflect: true }) noResultText?: string;

  /**
   * Indicates whether the combobox is soft disabled.
   * When set to `true`, the combobox appears visually disabled but still allows
   * focus.
   *
   * @default undefined
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true }) softDisabled?: boolean;

  /**
   * This describes the clipping element(s) or area that overflow of the used popover will be checked relative to.
   * The default is 'clippingAncestors', which are the overflow ancestors which will cause the
   * element to be clipped.
   *
   * Possible values:
   *  - 'clippingAncestors'
   *  - any css selector
   *
   * @default 'clippingAncestors'
   *
   * @see [Floating UI - boundary](https://floating-ui.com/docs/detectOverflow#boundary)
   */
  @property({ type: String, reflect: true, attribute: 'boundary' })
  boundary: 'clippingAncestors' | string = POPOVER_DEFAULTS.BOUNDARY;

  /**
   * The strategy of the popover within Select.
   * This determines how the popover is positioned in the DOM.
   *
   * In case `boundary` is set to something other than 'clippingAncestors',
   * it might be necessary to set the `strategy` to 'fixed' to ensure that the popover
   * is not getting clipped by scrollable containers enclosing the combobox.
   *
   * @default absolute
   * @see [Floating UI - strategy](https://floating-ui.com/docs/computePosition#strategy)
   */
  @property({ type: String, reflect: true, attribute: 'strategy' })
  strategy: 'absolute' | 'fixed' = POPOVER_DEFAULTS.STRATEGY;

  /**
   * The z-index of the popover within Select.
   *
   * Override this to make sure this stays on top of other components.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'popover-z-index' })
  popoverZIndex: number = POPOVER_DEFAULTS.Z_INDEX;

  /**
   * ID of the element where the backdrop will be appended to.
   * This is useful to ensure that the backdrop is appended to the correct element in the DOM.
   * If not set, the backdrop will be appended to the parent element of the combobox.
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  backdropAppendTo?: string;

  /** @internal */
  @queryAssignedElements({ selector: SELECTLISTBOX_TAG_NAME }) slottedListboxes!: Array<HTMLElement>;

  @state() private isOpen = false;

  @state() private lastSelectedOptionIndex = 0;

  @state() private selectedOption: {
    value?: string;
    label?: string;
  } = {};

  @state() private internalValue = '';

  /**
   * Modifies the listbox wrapper to ensure it has the correct attributes
   * and IDs for accessibility.
   *
   * Once [ariaOwnsElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaOwnsElements) is supported in browsers,
   * this an be removed and mdc-option can be used directly in the combobox component with a listbox in a different
   * shadow root and aria-owns attribute to connect them.
   */
  private modifyListBoxWrapper() {
    const slottedListBox = this.slottedListboxes[0];
    if (!slottedListBox) {
      return;
    }
    slottedListBox.setAttribute('id', LISTBOX_ID);
    slottedListBox.setAttribute('aria-label', this.dataAriaLabel || '');
    slottedListBox.setAttribute('aria-labelledby', TRIGGER_ID);
  }

  private openPopover(): void {
    this.isOpen = true;
  }

  private closePopover(): void {
    this.isOpen = false;
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  private compareOptionWithValue(option: Option, value: string): boolean {
    const optionValue = option.getAttribute('label') || '';
    return optionValue.toLowerCase().startsWith(value?.toLowerCase());
  }

  private getAllValidOptions(): Array<Option> {
    return Array.from(this.slottedListboxes[0]?.querySelectorAll(OPTION_TAG_NAME) || []);
  }

  private getVisibleOptions(): Array<Option> {
    return this.getAllValidOptions().filter(option => this.compareOptionWithValue(option, this.internalValue));
  }

  private getFirstSelectedOption(): Option | null {
    return this.slottedListboxes[0]?.querySelector(`${OPTION_TAG_NAME}[selected]:not([disabled])`);
  }

  private setSelectedValue(option: Option | null): void {
    const newValue = option?.getAttribute('value') || '';
    const newLabel = option?.getAttribute('label') || '';
    this.selectedOption = {
      ...this.selectedOption,
      value: newValue,
      label: newLabel,
    };
    this.value = newValue;
    this.internalValue = newLabel;
    this.internals.setFormValue(this.value);
    this.updateHiddenOptions();

    this.setInputValidity();
  }

  public override async firstUpdated() {
    await this.updateComplete;
    this.modifyListBoxWrapper();

    const firstSelectedOption = this.getFirstSelectedOption();
    if (firstSelectedOption) {
      firstSelectedOption.removeAttribute('selected');
      this.setSelectedValue(firstSelectedOption);
    } else {
      this.setInputValidity();
    }
    // For the first, we set the first element only as active.
    this.getAllValidOptions().forEach(option => {
      option.setAttribute('tabindex', '-1');
    });
  }

  /**
   * Sets the validity of the input element based on the selected option.
   * If the selected option is not set and the select is required,
   * it sets a custom validation message.
   * If the selected option is set or the select is not required,
   * it clears the custom validation message.
   * This method is called to ensure that the select component behaves correctly
   * in form validation scenarios, especially when the select is required.
   * @internal
   */
  private setInputValidity() {
    if (!this.selectedOption.value && this.required && this.validationMessage) {
      this.inputElement?.setCustomValidity(this.validationMessage);
    } else {
      this.inputElement?.setCustomValidity('');
    }
    this.setValidity();
  }

  private resetFocusedOption() {
    this.getAllValidOptions()
      .filter(option => option.hasAttribute('data-focused'))
      .forEach(option => this.updateFocus(option, false));
  }

  private updateFocus(option: Option, value: boolean): void {
    if (option === undefined) return;
    if (value) {
      option.setAttribute('data-focused', '');
    } else {
      option.removeAttribute('data-focused');
    }
    option.setAttribute('aria-selected', value.toString());
  }

  private handleBlurChange(): void {
    this.closePopover();
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    // if no option is focused, then set the last selected option
    if (getLastFocusedOptionIndex === -1) {
      // TODO: set the combobox invalid as no value is selected.
      return;
    }
    this.setSelectedValue(options[getLastFocusedOptionIndex]);
  }

  private handleInputKeydown(event: KeyboardEvent): void {
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === options.length - 1) {
          this.lastSelectedOptionIndex = 0;
        } else {
          this.lastSelectedOptionIndex =
            getLastFocusedOptionIndex + 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex + 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        this.updateFocus(options[this.lastSelectedOptionIndex], true);
        event.preventDefault();
        break;
      }
      case KEYS.ARROW_UP: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === 0) {
          this.lastSelectedOptionIndex = options.length - 1;
        } else {
          this.lastSelectedOptionIndex =
            getLastFocusedOptionIndex - 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex - 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        this.updateFocus(options[this.lastSelectedOptionIndex], true);
        event.preventDefault();
        break;
      }
      case KEYS.ENTER: {
        if (getLastFocusedOptionIndex === -1) return;
        this.setSelectedValue(options[getLastFocusedOptionIndex]);
        if (this.isOpen === true) {
          this.closePopover();
        }
        break;
      }
      case KEYS.ESCAPE: {
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        if (options.length && this.shouldDisplayPopover(options.length)) {
          this.closePopover();
        } else {
          this.setSelectedValue(null);
          // force clear the actual DOM input property
          const input = event.target as HTMLInputElement;
          input.value = '';
        }
        break;
      }
      case KEYS.HOME:
      case KEYS.END: {
        this.resetFocusedOption();
        break;
      }
      default:
        break;
    }
  }

  private updateHiddenOptions(): void {
    const options = this.getAllValidOptions();
    options.forEach(option => {
      if (!this.compareOptionWithValue(option, this.internalValue)) {
        option.setAttribute('data-hidden', '');
      } else {
        option.removeAttribute('data-hidden');
      }
    });
    // TODO: Add option group hidden content
  }

  private handleInputChange(event: Event): void {
    this.internalValue = (event.target as HTMLInputElement).value;
    this.resetFocusedOption();
    this.updateHiddenOptions();
    if (this.isOpen === false) {
      this.openPopover();
    }
  }

  private handleOptionsClick(event: MouseEvent): void {
    const option = event.target as Option;
    if (
      option &&
      option.tagName === OPTION_TAG_NAME.toUpperCase() &&
      !option.hasAttribute('disabled') &&
      !option.hasAttribute('soft-disabled')
    ) {
      this.setSelectedValue(option);
      this.closePopover();
    }
  }

  private shouldDisplayPopover(optionsLength: number): boolean {
    if (!this.slottedListboxes[0]) {
      return false;
    }
    if (optionsLength) {
      return this.isOpen;
    }
    if (this.noResultText) {
      return true;
    }
    return false;
  }

  private renderNoResultsText(optionsLength: number): TemplateResult | typeof nothing {
    return this.slottedListboxes[0] && optionsLength === 0 && this.noResultText
      ? html`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`
      : nothing;
  }

  public override render() {
    const options = this.getVisibleOptions();
    return html`
      ${this.renderLabel()}
      <div part="container__base" id="${TRIGGER_ID}">
        <mdc-input
          @click="${() => this.toggleDropdown()}"
          ?disabled="${this.disabled}"
          ?soft-disabled="${this.softDisabled}"
        >
          <input
            id="${this.id}"
            slot="input"
            ?disabled="${this.disabled}"
            .value="${this.selectedOption?.label ?? ''}"
            autocomplete="${AUTO_COMPLETE.OFF}"
            class="input"
            part="mdc-input"
            placeholder="${ifDefined(this.placeholder)}"
            role="${ROLE.COMBOBOX}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input=${this.handleInputChange}
            @keydown=${this.handleInputKeydown}
            @blur="${this.handleBlurChange}"
            aria-autocomplete="${AUTOCOMPLETE_LIST}"
            aria-controls="${LISTBOX_ID}"
            aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
            aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
            aria-expanded="${this.isOpen ? 'true' : 'false'}"
            aria-haspopup="${ROLE.LISTBOX}"
            aria-invalid="${this.helpTextType === VALIDATION.ERROR ? 'true' : 'false'}"
            aria-label="${this.dataAriaLabel ?? ''}"
            aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
            aria-readonly="${ifDefined(this.readonly)}"
            aria-required="${this.required ? 'true' : 'false'}"
          />
        </mdc-input>
        <mdc-buttonsimple
          @click="${() => this.toggleDropdown()}"
          part="container__button"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-expanded="${this.isOpen ? 'true' : 'false'}"
          aria-controls="${LISTBOX_ID}"
          aria-label="${this.dataAriaLabel ?? ''}"
        >
          <mdc-icon
            part="container__button-icon"
            name="${this.shouldDisplayPopover(options.length) ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <input
          name="${this.name}"
          type="text"
          .value="${live(this.selectedOption?.value ?? '')}"
          aria-hidden="true"
          part="internal-native-input"
          tabindex="-1"
          autocomplete="${AUTO_COMPLETE.OFF}"
          @invalid=${this.setInputValidity}
          aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
        />
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(options.length)}"
          @closebyescape="${() => {
            this.closePopover();
          }}"
          @closebyoutsideclick="${() => {
            this.closePopover();
          }}"
          backdrop
          backdrop-append-to="${ifDefined(this.backdropAppendTo)}"
          boundary="${ifDefined(this.boundary)}"
          disable-aria-expanded
          exportparts="popover-content"
          hide-on-escape
          hide-on-outside-click
          is-backdrop-invisible
          placement="${this.placement}"
          role=""
          size
          strategy="${ifDefined(this.strategy)}"
          style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
          trigger="${TRIGGER.MANUAL}"
          triggerid="${TRIGGER_ID}"
          z-index="${ifDefined(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(options.length)}
          <slot @mousedown="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...Input.styles, ...styles];
}

export default Combobox;
