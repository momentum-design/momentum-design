import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';

import { Component } from '../../models';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { TAG_NAME as SELECTLISTBOX_TAG_NAME } from '../selectlistbox/selectlistbox.constants';
import type Option from '../option/option.component';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import { ROLE } from '../../utils/roles';
import { KEYS } from '../../utils/keys';

import { ICON_NAME, LISTBOX_ID, TRIGGER_ID } from './combobox.constants';
import styles from './combobox.styles';

/**
 * Combobox component, which ...
 *
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
   * height attribute of the select field. If set,
   * then a scroll bar will be visible when there more options than the adjusted height.
   * @default auto
   */
  @property({ type: String }) height = 'auto';

  /**
   * Text to be displayed when no results are found.
   * @default 'No results'
   */
  @property({ type: String, attribute: 'no-result-text', reflect: true }) noResultText = 'No results';

  /** @internal */
  @queryAssignedElements({ selector: SELECTLISTBOX_TAG_NAME }) slottedListboxes!: Array<HTMLElement>;

  @state() private isOpen = false;

  @state() private lastSelectedOption = 0;

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  private handleClick(event: MouseEvent): void {
    this.toggleDropdown();
    event.stopPropagation();
  }

  private closePopover(): void {
    console.log('closing now');
    this.isOpen = false;
  }

  private openPopover(): void {
    console.log('opening now');
    this.isOpen = true;
  }

  private resetOptionFocusedClass() {
    this.getAllValidOptions().forEach(option => {
      option.removeAttribute('data-focused');
      option.setAttribute('aria-selected', 'false');
    });
  }

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

  private getAllValidOptions(): Array<Option> {
    return Array.from(this.slottedListboxes[0]?.querySelectorAll(OPTION_TAG_NAME) || []);
  }

  private getVisibleOptions(): Array<Option> {
    return this.getAllValidOptions().filter(option => option.label?.toLowerCase().startsWith(this.value.toLowerCase()));
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

  private resetAriaSelected(options: Array<Option>, newIndex: number, oldIndex: number) {
    if (newIndex === oldIndex) return;
    options[oldIndex]?.setAttribute('aria-selected', 'false');
    options[newIndex]?.setAttribute('aria-selected', 'true');
  }

  private handleBlurChange() {
    console.log('blurring in');
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    console.log(getLastFocusedOptionIndex);
    if (getLastFocusedOptionIndex === -1) return;
    this.setSelectedValue(options[getLastFocusedOptionIndex].label ?? '');
    this.closePopover();
  }

  private handleInputKeydown(event: KeyboardEvent) {
    console.log('input in');
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
        this.setSelectedValue(options[getLastFocusedOptionIndex].label ?? '');
        this.closePopover();
        break;
      }
      default: {
        break;
      }
    }
  }

  private handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.setSelectedValue(target.value);
  }

  // protected override updated(changedProperties: PropertyValues): void {
  //   if (changedProperties.has('value')) {
  //     console.log('updated in');
  //     const options = this.getAllValidOptions();
  //     this.resetOptionFocusedClass();
  //     options.forEach(option => {
  //       if (!option.label?.toLowerCase().startsWith(this.value.toLowerCase())) {
  //         option.setAttribute('data-hidden', '');
  //       } else {
  //         option.removeAttribute('data-hidden');
  //       }
  //     });
  //     // const hiddenOptionsCount = options.filter(option => option.hasAttribute('data-hidden')).length;
  //     // if (hiddenOptionsCount && this.noResultText) {
  //     //   this.isOpen = false;
  //     // }
  //     // On change of value, if the dropdown is closed, open it.
  //     console.log(this.isOpen, this.dontOpenAgain);
  //     if (this.isOpen === false && this.dontOpenAgain) {
  //       this.dontOpenAgain = false;
  //       this.openPopover();
  //     }
  //   }
  // }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <div class="mdc-focus-ring" part="container__base" id="${TRIGGER_ID}">
          <mdc-input
            value="${this.value}"
            ?disabled="${this.disabled}"
            @click="${this.handleClick}"
            @keyup="${this.handleInputKeydown}"
            @blur="${this.handleBlurChange}"
            @input="${this.handleInputChange}"
            role="${ROLE.COMBOBOX}"
            placeholder="${this.placeholder}"
            aria-expanded="${this.isOpen.toString()}"
            aria-autocomplete="${ROLE.LIST}"
          ></mdc-input>
          <div part="container__base-icon" role="${ROLE.BUTTON}" aria-expanded="${this.isOpen.toString()}">
            <mdc-icon
              name="${this.isOpen ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          </div>
          <mdc-popover
            trigger="${TRIGGER.MANUAL}"
            triggerid="${TRIGGER_ID}"
            ?visible="${this.isOpen}"
            role=""
            hide-on-outside-click
            hide-on-escape
            size
            placement="${POPOVER_PLACEMENT.BOTTOM_START}"
            style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
            @closebyescape="${() => {
              this.closePopover();
            }}"
            @closebyoutsideclick="${() => {
              this.closePopover();
            }}"
          >
            <slot></slot>
          </mdc-popover>
        </div>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Combobox;
