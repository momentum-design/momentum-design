import type { TemplateResult } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';
import { TAG_NAME as OPTION_GROUP_TAG_NAME } from '../optgroup/optgroup.constants';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../tooltip/tooltip.constants';
import { ARROW_ICON } from './select.constants';
import styles from './select.styles';

/**
 * select component, represents a control that provides a menu of options.
 *
 * @dependency mdc-icon
 * @dependency mdc-popover
 * @dependency mdc-text
 * @dependency mdc-tooltip
 *
 * @tagname mdc-select
 *
 * @slot default - This is a default/unnamed slot for options and/or option group.
 *
 * @event click - (React: onClick) This event is dispatched when the select is clicked.
 * @event change - (React: onChange) This event is dispatched when the select is changed.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the select.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the select.
 * @event focus - (React: onFocus) This event is dispatched when the select receives focus.
 */
class Select extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
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
   * @default 'auto'
   */
  @property({ type: String, attribute: 'height' }) height = 'auto';

  /** @internal */
  @queryAssignedElements() optionsList!: Array<HTMLElement>;

  /** @internal */
  @state() private baseIconName: IconNames = ARROW_ICON.ARROW_DOWN;

  /** @internal */
  @state() selectedValue?: string;

  /** @internal */
  @state() showPopover = false;

  /** @internal */
  @state() activeDescendant = '';

  /**
   * @internal
   * The native select element
   */
  @query('select') override inputElement!: HTMLInputElement;

  override connectedCallback(): void {
    super.connectedCallback();
    // select will only contain name and value will be defined in the options.
    this.value = undefined as unknown as string;

    this.addEventListener('keydown', this.handleKeydown);
  }

  /**
   * A helper function which returns a flattened array of all valid options from the assigned slot.
   * It takes care of the edge cases where the option is either a direct child or a
   * child of an option group.
   */
  private getAllValidOptions() {
    return this.optionsList
      ?.map((option) => {
        if (option.tagName.toLowerCase() === OPTION_TAG_NAME) {
          return option;
        }
        if (option.tagName.toLowerCase() === OPTION_GROUP_TAG_NAME) {
          return Array.from(option.children).filter((optgroup) => optgroup.tagName.toLowerCase() === OPTION_TAG_NAME);
        }
        return [];
      }).flat() || [];
  }

  private handlePopoverOpen(): void {
    this.baseIconName = ARROW_ICON.ARROW_UP;
  }

  private handlePopoverClose(): void {
    this.baseIconName = ARROW_ICON.ARROW_DOWN;
  }

  /**
   * Updates the tabindex and selected attribute of the options.
   * If selectedOption is provided, it will be set as the selected option.
   * Otherwise, it will set the first option as the selected option.
   * @param selectedOption - The option which should be selected.
   */
  private updateTabIndexAndSetSelectedOnOptions(selectedOption?: EventTarget | null): void {
    let isTabIndexSet = false;
    this.getAllValidOptions().forEach((option) => {
      if (option === selectedOption) {
        this.setSelectedValue(option);
        isTabIndexSet = true;
        option.setAttribute('selected', '');
        option.setAttribute('tabindex', '0');
      } else {
        option?.setAttribute('tabindex', '-1');
        option?.removeAttribute('selected');
      }
    });

    if (isTabIndexSet) {
      return;
    }
    // if no option is selected, set the first option as focused
    this.getAllValidOptions()[0]?.setAttribute('tabindex', '0');
  }

  /**
   * A private method which is called when an option is clicked.
   * It is used to update the tabindex and selected attribute of the options.
   * @param event - The event which triggered this function.
   */
  private handleOptionsClick(event: MouseEvent): void {
    this.updateTabIndexAndSetSelectedOnOptions(event.target);
  }

  /**
   * Listens to changes in the default slot and updates the tabindex and selected attribute of the options accordingly.
   * This is used to set the tabindex and selected attribute of the options when they are slotted.
   * It is called internally when the slot is changed.
   */
  private handleSlotChange(): void {
    this.updateTabIndexAndSetSelectedOnOptions();
  }

  /**
   * Sets the selected value based on the provided option element.
   * It retrieves the 'label' attribute of the option, if present,
   * otherwise it falls back to the option's text content.
   * @param option - The option element from which to set the selected value.
   */
  private setSelectedValue(option: Element): void {
    this.selectedValue = option?.getAttribute('label') ?? option?.textContent ?? '';
    this.value = option?.getAttribute('value') ?? option?.textContent ?? '';

    // Set form value
    this.internals.setFormValue(this.value);
    this.manageRequired();

    // dispatch a change event when a value is selected
    this.dispatchChange(this.value);
  }

  /**
   * Manages the required state of the select.
   * If the value is not set and the requiredLabel property is set,
   * then the select is invalid.
   */
  private manageRequired() {
    if (!this.value && this.requiredLabel) {
      if (this.validationMessage) {
        this.inputElement.setCustomValidity(this.validationMessage);
      } else {
        this.inputElement.setCustomValidity('');
      }
      this.setValidity();
    } else {
      this.internals.setValidity({});
    }
  }

  /**
   * @internal
   * Resets the select to its initial state.
   */
  formResetCallback(): void {
    this.value = '';
    this.selectedValue = undefined;
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    this.value = state;
    this.selectedValue = state;
  }

  private dispatchChange(value: string): void {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value },
        composed: true,
        bubbles: true,
      }),
    );
  }

  /**
   * Handles keyboard navigation for the options list using arrow keys.
   * It calculates the new index based on the current target index and the key pressed.
   * Updates the focus and tabindex of the options accordingly.
   * @param key - The key pressed, expected to be either 'ArrowDown' or 'ArrowUp'.
   * @param target - The current target element in focus.
   */
  private handleArrowUpDownEvent(key: string, target: EventTarget | null): void {
    const currentIndex = this.getAllValidOptions().findIndex((option) => option === target);
    const optionsLength = this.getAllValidOptions().length;
    let newIndex: number | undefined;
    if (key === KEYS.ARROW_DOWN) {
      newIndex = (currentIndex + 1) % optionsLength;
    } else if (key === KEYS.ARROW_UP) {
      newIndex = (currentIndex - 1 + optionsLength) % optionsLength;
    }
    if (newIndex !== undefined) {
      (this.getAllValidOptions()[newIndex] as HTMLElement)?.focus();
      this.getAllValidOptions().forEach((node, index) => {
        const newTabindex = newIndex === index ? '0' : '-1';
        node?.setAttribute('tabindex', newTabindex);
      });
    }
  }

  private updateActivedescendant(target: EventTarget | null): void {
    const currentIndex = this.getAllValidOptions().findIndex((option) => option === target);
    this.activeDescendant = this.getAllValidOptions()[currentIndex]?.id ?? '';
  }

  private resetActivedescendant(): void {
    this.activeDescendant = '';
  }

  /**
   * Handles the keydown event for the select component.
   * Toggles the popover on SPACE or ESCAPE key press, selecting options
   * and updating the active descendant and tabindex accordingly.
   * - SPACE: Opens the popover and resets the active descendant.
   * - ESCAPE: Closes the popover and resets the active descendant.
   * - ENTER: Updates tabindex and selected option based on the event target.
   * - ARROW_DOWN/ARROW_UP: Navigates through options and updates focus.
   * @param event - The keyboard event that triggered the handler.
   */
  private handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.SPACE:
        this.showPopover = true;
        this.resetActivedescendant();
        break;
      case KEYS.ESCAPE:
        this.showPopover = false;
        this.resetActivedescendant();
        break;
      case KEYS.ENTER:
        this.updateTabIndexAndSetSelectedOnOptions(event.target);
        // if the popover is closed, then we submit the form.
        if (!this.showPopover) this.form?.requestSubmit();
        break;
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
        this.handleArrowUpDownEvent(event.key, event.target);
        this.updateActivedescendant(event.target);
        break;
      default:
        break;
    }
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   * If not, use the placeholder if it exists, otherwise use the first option.
   */
  public override firstUpdated() {
    const selectedOptionIndex = this.getAllValidOptions().findIndex((option) => option?.hasAttribute('selected'));
    if (selectedOptionIndex !== -1) {
      this.setSelectedValue(this.getAllValidOptions()[selectedOptionIndex]);
    } else if (!this.placeholder) {
      // We will set the first option as selected.
      this.setSelectedValue(this.getAllValidOptions()[0]);
    } else if (this.placeholder) {
      // If there is no default selected option
      // then we set the placeholder and call the native validity
      this.manageRequired();
    }
  }

  private shouldFocusSelect(): boolean {
    if (this.disabled || this.readonly) {
      return false;
    }
    return true;
  }

  /**
   * This method maps over all valid options and constructs their corresponding
   * HTML `<option>` elements. The attributes such as `value`, `label`, `disabled`,
   * and `selected` are extracted from the respective option elements.
   * If the attribute is not present, a default value or fallback is used.
   * The content of each `<option>` is set to the text content of the option element.
   * @returns An array of `TemplateResult` representing the option elements.
   */
  private getOptionsContentFromSlot(): TemplateResult[] {
    return this.getAllValidOptions()
      .map((option) => html`
        <option
          value="${option.getAttribute('value') ?? ''}"
          label="${option.getAttribute('label') ?? ''}"
          ?disabled="${!!option.hasAttribute('disabled')}"
          ?selected="${!!option.hasAttribute('selected')}"
        >
          ${option.textContent}
        </option>
    `);
  }

  /**
   * Generates the content for the popover associated with the select component.
   * If the component is disabled or readonly, returns `nothing`.
   * Otherwise, returns a `TemplateResult` that renders a popover with various configurations
   * such as visibility, interaction, and event handlers.
   * The popover acts as a dropdown list with options, allowing user interaction.
   */
  private getPopoverContent(): TemplateResult | typeof nothing {
    if (this.disabled || this.readonly) {
      return nothing;
    }
    return html`
      <mdc-popover
        id="options-popover"
        triggerid="select-base-triggerid"
        interactive
        ?visible="${this.showPopover}"
        hide-on-outside-click
        focus-back-to-trigger
        focus-trap
        role="listbox"
        placement="${POPOVER_PLACEMENT.BOTTOM_START}"
        @shown="${this.handlePopoverOpen}"
        @hidden="${this.handlePopoverClose}"
        style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
      >
        <slot
          @click="${this.handleOptionsClick}"
          @slotchange="${this.handleSlotChange}"
          @mouseover=${this.showTooltipPopoverMouseOver}
          @mouseout=${this.hideTooltipPopoverMouseOut}
        >
        </slot>
      </mdc-popover>
    `;
  }

  /**
   * Shows a tooltip for the option when the mouse is over it.
   * The tooltip is created dynamically and appended to the parent element of the select component.
   * The tooltip is only shown when the option label text is too long to fit the given width.
   * @param event - The event that triggered this function.
   */
  private showTooltipPopoverMouseOver(event: Event): void {
    const htmlElement = event.target as HTMLElement;
    if (htmlElement.tagName?.toLowerCase() !== OPTION_TAG_NAME) {
      return;
    }

    const dimensions = htmlElement.shadowRoot
      ?.querySelector('[part="leading-text-primary-label"]');
    // If the scroll width is less than the client width,
    // it means that the option label text is fully visible and we do not need to show the tooltip.
    if (
      dimensions && dimensions.scrollWidth && dimensions.clientWidth
      && dimensions.scrollWidth <= dimensions?.clientWidth
    ) {
      return;
    }

    // Create tooltip for long text label which has an ellipse at the end.
    const tooltip = document.createElement(TOOLTIP_TAG_NAME);
    tooltip.id = 'dynamic-tooltip-popover';
    tooltip.textContent = htmlElement.textContent ?? '';
    tooltip.setAttribute('triggerid', htmlElement.id);
    tooltip.setAttribute('placement', POPOVER_PLACEMENT.TOP);
    tooltip.setAttribute('visible', 'true');

    // Add tooltip programmatically at the outside of the select component.
    const parent = this.parentElement || document.body;
    parent.appendChild(tooltip);
  }

  /**
   * Hides the dynamic tooltip popover when the user moves the mouse out of the option element.
   * This method is called when the user moves the mouse out of the options slot.
   * It finds the existing dynamic tooltip popover by its id and removes it.
   */
  private hideTooltipPopoverMouseOut(): void {
    const existingTooltip = document.querySelector('#dynamic-tooltip-popover');
    existingTooltip?.remove();
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="select-base-triggerid"
          part="base-container"
          tabindex="${this.shouldFocusSelect() ? '0' : '-1'}"
          class="${this.shouldFocusSelect() ? 'mdc-focus-ring' : ''}"
        >
          <mdc-text
            part="base-text ${this.selectedValue ? 'selected' : ''}"
            type="${TYPE.BODY_MIDSIZE_REGULAR}"
            tagname="${VALID_TEXT_TAGS.SPAN}"
          >
            ${this.selectedValue ?? this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        <select
          part="native-select"
          id="${this.id}"
          tabindex="-1"
          name="${this.name}"
          .value="${this.value}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?required="${!!this.requiredLabel}"
          aria-activedescendant="${this.activeDescendant}"
          aria-expanded="${this.showPopover}"
          aria-haspopup="listbox"
          aria-label="${this.dataAriaLabel ?? ''}"
          aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
          @click="${(e: Event) => e.stopPropagation()}"
        >
          ${this.getOptionsContentFromSlot()}
        </select>
        ${this.getPopoverContent()}
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Select;
