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
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import { TAG_NAME as SELECTLISTBOX_TAG_NAME } from '../selectlistbox/selectlistbox.constants';

import { AUTOCOMPLETE_LIST, ICON_NAME, LISTBOX_ID, TRIGGER_ID } from './combobox.constants';
import styles from './combobox.styles';

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
   * readonly attribute of the select field. If true, the select is read-only.
   * @default false
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * height attribute of the select field. If set,
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
   * Indicates whether the select is soft disabled.
   * When set to `true`, the select appears visually disabled but still allows
   * focus.
   *
   * @default undefined
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true }) softDisabled?: boolean;

  /** @internal */
  @queryAssignedElements({ selector: SELECTLISTBOX_TAG_NAME }) slottedListboxes!: Array<HTMLElement>;

  @state() private isOpen = false;

  @state() private lastSelectedOption = 0;

  /**
   * Modifies the listbox wrapper to ensure it has the correct attributes
   * and IDs for accessibility.
   *
   * Once [ariaOwnsElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaOwnsElements) is supported in browsers,
   * this an be removed and mdc-option can be used directly in the select component with a listbox in a different
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

  private compareValueWithLabel(value: string, label: string): boolean {
    return value.toLowerCase().startsWith(label.toLowerCase());
  }

  private getAllValidOptions(): Array<Option> {
    return Array.from(this.slottedListboxes[0]?.querySelectorAll(OPTION_TAG_NAME) || []);
  }

  private getVisibleOptions(): Array<Option> {
    return this.getAllValidOptions().filter(option => this.compareValueWithLabel(option.label ?? '', this.value));
  }

  private setSelectedValue(value: string): void {
    this.value = value;
    this.internals.setFormValue(value);
  }

  public override async firstUpdated() {
    await this.updateComplete;
    this.modifyListBoxWrapper();
    // For the first, we set the first element only as active.
    this.getAllValidOptions().forEach(option => {
      option.setAttribute('tabindex', '-1');
    });
  }

  private resetFocusedOption() {
    this.getAllValidOptions()
      .filter(option => option.hasAttribute('data-focused'))
      .forEach(option => {
        option.removeAttribute('data-focused');
        option.setAttribute('aria-selected', 'false');
      });
  }

  private handleBlurChange(): void {
    this.closePopover();
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    if (getLastFocusedOptionIndex === -1) return;
    this.setSelectedValue(options[getLastFocusedOptionIndex].label ?? '');
  }

  private handleInputKeydown(event: KeyboardEvent): void {
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === options.length - 1) {
          this.lastSelectedOption = 0;
        } else {
          this.lastSelectedOption =
            getLastFocusedOptionIndex + 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex + 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          options[getLastFocusedOptionIndex].removeAttribute('data-focused');
          options[getLastFocusedOptionIndex].setAttribute('aria-selected', 'false');
        }
        options[this.lastSelectedOption].setAttribute('data-focused', '');
        options[this.lastSelectedOption].setAttribute('aria-selected', 'true');
        event.preventDefault();
        break;
      }
      case KEYS.ARROW_UP: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === 0) {
          this.lastSelectedOption = options.length - 1;
        } else {
          this.lastSelectedOption =
            getLastFocusedOptionIndex - 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex - 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          options[getLastFocusedOptionIndex].removeAttribute('data-focused');
          options[getLastFocusedOptionIndex].setAttribute('aria-selected', 'false');
        }
        options[this.lastSelectedOption].setAttribute('data-focused', '');
        options[this.lastSelectedOption].setAttribute('aria-selected', 'true');
        event.preventDefault();
        break;
      }
      case KEYS.ENTER: {
        if (getLastFocusedOptionIndex === -1) return;
        this.setSelectedValue(options[getLastFocusedOptionIndex].label ?? '');
        if (this.isOpen === true) {
          this.closePopover();
        }
        break;
      }
      case KEYS.ESCAPE: {
        if (getLastFocusedOptionIndex !== -1) {
          options[getLastFocusedOptionIndex].removeAttribute('data-focused');
          options[getLastFocusedOptionIndex].setAttribute('aria-selected', 'false');
        }
        if (options.length && this.shouldDisplayPopover(options.length)) {
          this.closePopover();
        } else {
          this.setSelectedValue('');
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

  private handleInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setSelectedValue(target.value);
    this.resetFocusedOption();
    const options = this.getAllValidOptions();
    options.forEach(option => {
      if (!this.compareValueWithLabel(option.label ?? '', this.value)) {
        option.setAttribute('data-hidden', '');
      } else {
        option.removeAttribute('data-hidden');
      }
    });
    if (this.isOpen === false) {
      this.openPopover();
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
      ? html`<mdc-listitem part="no-results-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`
      : nothing;
  }

  public override render() {
    const options = this.getVisibleOptions();
    return html`
      ${this.renderLabel()}
      <div part="container__base" id="${TRIGGER_ID}">
        <mdc-input
          @blur="${this.handleBlurChange}"
          @click="${() => this.toggleDropdown()}"
          ?soft-disabled="${this.softDisabled}"
        >
          <input
            slot="input"
            ?disabled="${this.disabled}"
            .value="${live(this.value)}"
            autocomplete="${AUTO_COMPLETE.OFF}"
            class="input"
            name="${this.name}"
            part="mdc-input"
            placeholder="${this.placeholder}"
            role="${ROLE.COMBOBOX}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input=${this.handleInputChange}
            @keydown=${this.handleInputKeydown}
            aria-autocomplete="${AUTOCOMPLETE_LIST}"
            aria-controls="${LISTBOX_ID}"
            aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
            aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
            aria-expanded="${this.isOpen.toString()}"
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
          aria-expanded="${this.isOpen.toString()}"
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
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(options.length)}"
          disable-aria-expanded
          hide-on-escape
          hide-on-outside-click
          placement="${POPOVER_PLACEMENT.BOTTOM_START}"
          role=""
          size
          style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
          trigger="${TRIGGER.MANUAL}"
          triggerid="${TRIGGER_ID}"
          @closebyescape="${() => {
            this.closePopover();
          }}"
          @closebyoutsideclick="${() => {
            this.closePopover();
          }}"
        >
          ${this.renderNoResultsText(options.length)}
          <slot></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...Input.styles, ...styles];
}

export default Combobox;
