import { CSSResult, html } from 'lit';
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

  @state() private filter = '';

  // @state() private activeInputText = '';

  private handleClick(event: MouseEvent): void {
    this.isOpen = !this.isOpen;
    event.stopPropagation();
  }

  private closePopover() {
    this.isOpen = false;
    this.resetOptionFocusedClass();
  }

  private resetOptionFocusedClass() {
    this.getAllValidOptions().forEach(option => {
      option.classList.remove('mdc-option--focused');
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
    return this.getAllValidOptions().filter(option => option.value.includes(this.filter));
  }

  public override async firstUpdated() {
    await this.updateComplete;
    this.modifyListBoxWrapper();
    // For the first, we set the first element only as active.
    this.getAllValidOptions().forEach(option => {
      option.setAttribute('tabindex', '-1');
    });
  }

  // private resetTabIndexAndSetFocus(options: Array<Option>, newIndex: number, oldIndex: number) {
  //   if (newIndex === oldIndex) return;
  //   options[newIndex]?.setAttribute('tabindex', '0');
  //   options[oldIndex]?.setAttribute('tabindex', '-1');
  //   options[newIndex]?.focus();
  // }

  private resetAriaSelected(options: Array<Option>, newIndex: number, oldIndex: number) {
    if (newIndex === oldIndex) return;
    options[oldIndex]?.setAttribute('aria-selected', 'false');
    options[newIndex]?.setAttribute('aria-selected', 'true');
  }

  private isPrintableCharacter(str: string): boolean {
    return !!(str.length === 1 && str.match(/\S| /));
  }

  private handleFocusOut() {
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.className.includes('mdc-option--focused'));
    if (getLastFocusedOptionIndex === -1) return;
    this.value = options[getLastFocusedOptionIndex].label ?? '';
    this.internals.setFormValue(this.value);
    this.closePopover();
  }

  private handleInputKeydown(event: KeyboardEvent) {
    const options = this.getVisibleOptions();
    const getLastFocusedOptionIndex = options.findIndex(option => option.className.includes('mdc-option--focused'));
    if (getLastFocusedOptionIndex === -1) return;
    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        this.isOpen = true;
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === options.length - 1) {
          this.lastSelectedOption = 0;
        } else {
          this.lastSelectedOption =
            getLastFocusedOptionIndex + 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex + 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          options[getLastFocusedOptionIndex].classList.remove('mdc-option--focused');
        }
        options[this.lastSelectedOption].classList.add('mdc-option--focused');
        event.preventDefault();
        break;
      }
      case KEYS.ARROW_UP: {
        this.isOpen = true;
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === 0) {
          this.lastSelectedOption = options.length - 1;
        } else {
          this.lastSelectedOption =
            getLastFocusedOptionIndex - 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex - 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          options[getLastFocusedOptionIndex].classList.remove('mdc-option--focused');
        }
        options[this.lastSelectedOption].classList.add('mdc-option--focused');
        event.preventDefault();
        break;
      }
      case KEYS.ENTER: {
        this.value = options[getLastFocusedOptionIndex].label ?? '';
        this.internals.setFormValue(this.value);
        this.closePopover();
        break;
      }
      default: {
        if (!this.isPrintableCharacter(event.key)) return;
        this.filter += event.key;
        break;
      }
    }
  }

  // private handlePopoverKeydown(event: KeyboardEvent) {
  //   const options = this.getVisibleOptions();
  //   const currentIndex = options.findIndex(option => option === event.target);
  //   switch (event.key) {
  //     case KEYS.ARROW_DOWN: {
  //       const newIndex = currentIndex + 1 === options.length ? 0 : currentIndex + 1;
  //       this.resetAriaSelected(options, newIndex, currentIndex);
  //       this.resetTabIndexAndSetFocus(options, newIndex, currentIndex);
  //       event.preventDefault();
  //       break;
  //     }
  //     case KEYS.ARROW_UP: {
  //       const newIndex = currentIndex - 1 === -1 ? options.length - 1 : currentIndex - 1;
  //       this.resetAriaSelected(options, newIndex, currentIndex);
  //       this.resetTabIndexAndSetFocus(options, newIndex, currentIndex);
  //       event.preventDefault();
  //       break;
  //     }
  //     case KEYS.ENTER: {
  //       this.isOpen = false;
  //       this.setSelectedValue(options[currentIndex]);
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  // }

  // private setSelectedValue(option: Option): void {
  //   this.value = option.label ?? '';
  //   this.internals.setFormValue(this.value);
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
            @focusout="${this.handleFocusOut}"
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
