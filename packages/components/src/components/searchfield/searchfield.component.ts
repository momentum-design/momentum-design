// AI-Assisted
import { CSSResult, html, PropertyValueMap } from 'lit';
import { queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import Input from '../input/input.component';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { ACTIONS } from '../../utils/mixins/KeyToActionMixin';
import { KeyDownHandledMixin } from '../../utils/mixins/KeyDownHandledMixin';
import { ControlTypeMixin } from '../../utils/mixins/ControlTypeMixin';
import { TAG_NAME as INPUT_CHIP_TAG } from '../inputchip/inputchip.constants';

import styles from './searchfield.styles';
import { CHIP_SELECTOR, DEFAULTS } from './searchfield.constants';

/**
 * `mdc-searchfield` component is used as an input field for search functionality.
 *
 * It supports any interactable Chip component as filters. (`mdc-inputchip`, `mdc-alertchip`, `mdc-chip`)
 * Chips are rendered inline with the search input text, behaving like single characters.
 * Users can traverse the cursor between chips and text using arrow keys,
 * and remove a chip by pressing Backspace when the cursor is adjacent to it.
 *
 * This component is built by extending the `mdc-input` component.
 *
 * **Accessibility:**
 *
 * NOTE: this component should not be used in combination with a Popover or Listbox component.
 * Search results should be shown permanently on the page if using this component.
 *
 * For a search field that opens a Popover, use the `mdc-searchpopover` widget instead.
 *
 * @tagname mdc-searchfield
 *
 * @event input - (React: onInput) This event is dispatched when the value of the input field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the input field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the input receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the input loses focus.
 * @event clear - (React: onClear) This event is dispatched when the input text is cleared.
 * @event chipRemove - (React: onChipRemove) This event is dispatched when a chip filter is removed. The removed chip element is available in event.detail.chip. In `uncontrolled` mode (default) the chip is removed from the DOM automatically; in `controlled` mode only the event is fired and the consumer is responsible for removing the chip.
 *
 * @slot filters - Slot for chip filters rendered inline with the input text
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
 * @csspart searchfield-container - The inline flow container for chips and the input field.
 */
class Searchfield extends ControlTypeMixin(KeyDownHandledMixin(Input)) {
  @queryAssignedElements({ slot: 'filters' })
  chips?: Array<HTMLElement>;

  /**
   * @internal
   */
  @state() isInputFocused = false;

  /**
   * @internal
   */
  @state() hasChips = false;

  /**
   * Tracks which chip is currently focused for keyboard navigation.
   * -1 means no chip is focused (input has focus).
   * @internal
   */
  private focusedChipIndex = -1;

  /**
   * Flag to suppress scroll-to-start when programmatically focusing the input
   * (e.g., ArrowRight from chip). When false, onfocus scrolls the container
   * to position 0 so chips are visible (e.g., Tab into the component).
   * @internal
   */
  private navigatingToInput = false;

  /**
   * Maps each chip element to its focus target, for listener cleanup.
   * @internal
   */
  private chipsWithListeners = new WeakMap<HTMLElement, HTMLElement>();

  /**
   * Handles the keydown event of the search field.
   * If the key pressed is 'Enter', it submits the form.
   * If the key pressed is 'Escape', it clears the input text.
   * If 'Backspace' is pressed at cursor position 0, removes the last chip.
   * If 'ArrowLeft' is pressed at cursor position 0, focuses the last chip.
   * @param event - Keyboard event
   */
  override handleKeyDown(event: KeyboardEvent) {
    super.handleKeyDown(event);
    const action = this.getActionForKeyEvent(event);

    if (action === ACTIONS.ESCAPE) {
      this.clearInputText();
      this.keyDownEventHandled();
      return;
    }

    if (!this.hasChips || !this.chips?.length) return;

    const input = this.inputElement as HTMLInputElement;
    const isAtStart = input.selectionStart === 0 && input.selectionEnd === 0;

    if (action === ACTIONS.BACKSPACE && isAtStart) {
      event.preventDefault();
      this.removeChipAtIndex(this.chips.length - 1);
      this.keyDownEventHandled();
      return;
    }

    if (action === ACTIONS.LEFT && isAtStart) {
      event.preventDefault();
      this.focusChipAtIndex(this.chips.length - 1);
      this.keyDownEventHandled();
      return;
    }

    // Home always navigates to the first chip regardless of cursor position,
    // treating chips as part of the input content before the text.
    if (action === ACTIONS.HOME) {
      event.preventDefault();
      this.focusChipAtIndex(0);
      this.keyDownEventHandled();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.chips?.forEach(chip => this.removeChipListeners(chip));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.leadingIcon = DEFAULTS.ICON;
    this.trailingButton = DEFAULTS.CLOSE_BTN;
    this.helpText = undefined as unknown as string;
    this.helpTextType = undefined as unknown as ValidationType;
    this.required = undefined as unknown as boolean;
    this.validationMessage = undefined as unknown as string;
    this.prefixText = undefined as unknown as string;
  }

  /**
   * This method is used to render the chips inside filters slot.
   * It will remove any elements that are not supported chips.
   * Sets up keyboard navigation listeners on valid chip elements.
   * @internal
   */
  protected renderChips() {
    this.hasChips = !!this.chips?.length;
    if (this.chips) {
      this.chips.forEach(element => {
        if (!element.matches(CHIP_SELECTOR)) {
          this.removeChip(element);
          return;
        }
        // Remove chips from tab order; they are navigated via arrow keys from the input
        element.setAttribute('tabindex', '-1');
        if (!this.chipsWithListeners.has(element)) {
          const focusTarget = this.getFocusTargetForChip(element);
          focusTarget.addEventListener('keydown', this.handleChipKeyDown);
          focusTarget.addEventListener('focus', this.handleChipFocus);
          this.chipsWithListeners.set(element, focusTarget);
        }
      });
    }
    this.focusedChipIndex = -1;
  }

  /**
   * This sets the focus ring state based on the input focus state.
   * Also resets chip focus state when the input receives focus.
   * Eventually, this logic has to be omitted and achieved using CSS instead.
   * @override
   */
  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    this.inputElement.onfocus = () => {
      this.isInputFocused = true;
      this.focusedChipIndex = -1;
      this.resetChipTabIndices();

      // When focus enters from outside (Tab / click), the browser auto-scrolls
      // the overflow container to reveal the <input>, hiding the chips.
      // Reset scroll to 0 so chips are visible first.
      // Skip when we programmatically moved focus from chip → input.
      if (!this.navigatingToInput && this.hasChips) {
        const container = this.scrollContainer;
        if (container) {
          container.scrollLeft = 0;
        }
      }
      this.navigatingToInput = false;
    };
    this.inputElement.onblur = () => {
      // Only remove focus ring if focus is not moving to a chip
      requestAnimationFrame(() => {
        if (this.focusedChipIndex < 0) {
          this.isInputFocused = false;
        }
      });
    };
    super.firstUpdated(_changedProperties);
  }

  /**
   * Removes a chip element from the DOM and dispatches the 'chipRemove' event with the chip detail.
   * In controlled mode, the chip is not removed from the DOM, only the event is dispatched.
   * @param chip - The chip element to be removed
   */
  private removeChip(chip: HTMLElement) {
    this.dispatchEvent(new CustomEvent('chipRemove', { detail: { chip }, bubbles: true, composed: true }));
    if (this.controlType !== 'controlled') {
      chip.remove();
    }
  }

  override clearInputText() {
    super.clearInputText();
    // Directly remove all chips from DOM since not all chip types support the 'removed' event
    // In uncontrolled mode, removeChip handles DOM removal.
    // In controlled mode, only the 'chipRemove' event is fired per chip.
    const chipsToRemove = [...(this.chips ?? [])];
    chipsToRemove.forEach(element => {
      this.removeChip(element);
    });
  }

  /**
   * Removes keydown and focus event listeners from the focus target of a chip.
   * @param chip - The chip element whose listeners should be removed
   * @internal
   */
  private removeChipListeners(chip: HTMLElement) {
    const focusTarget = this.chipsWithListeners.get(chip);
    if (focusTarget) {
      focusTarget.removeEventListener('keydown', this.handleChipKeyDown);
      focusTarget.removeEventListener('focus', this.handleChipFocus);
      this.chipsWithListeners.delete(chip);
    }
  }

  /**
   * Handles keydown events on focused chip elements.
   * Supports Backspace/Delete to remove, arrow keys to navigate,
   * Escape to clear all, and printable characters to redirect to input.
   * @internal
   */
  private handleChipKeyDown = (event: KeyboardEvent) => {
    const action = this.getActionForKeyEvent(event);

    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      this.removeChipAtIndex(this.focusedChipIndex);
      return;
    }

    if (action === ACTIONS.LEFT) {
      event.preventDefault();
      if (this.focusedChipIndex > 0) {
        this.focusChipAtIndex(this.focusedChipIndex - 1);
      }
      return;
    }

    if (action === ACTIONS.RIGHT) {
      event.preventDefault();
      if (this.chips && this.focusedChipIndex < this.chips.length - 1) {
        this.focusChipAtIndex(this.focusedChipIndex + 1);
      } else {
        this.focusInputField();
      }
      return;
    }

    if (action === ACTIONS.ESCAPE) {
      event.preventDefault();
      this.clearInputText();
      this.keyDownEventHandled();
      return;
    }

    if (action === ACTIONS.HOME) {
      event.preventDefault();
      this.focusChipAtIndex(0);
      return;
    }

    if (action === ACTIONS.END) {
      event.preventDefault();
      this.focusInputField();
      // Place cursor at end of text and scroll to show it
      const input = this.inputElement as HTMLInputElement;
      const len = input.value.length;
      input.setSelectionRange(len, len);
      this.scrollContainerToEnd();
      return;
    }

    // Printable character: redirect focus to input so the character is typed there
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      this.focusInputField();
    }
  };

  /**
   * Handles focus events on chip elements to track focused chip index.
   * @internal
   */
  private handleChipFocus = (event: FocusEvent) => {
    const target = event.currentTarget as HTMLElement;
    const chip = this.getChipForFocusTarget(target);
    const index = chip ? (this.chips?.indexOf(chip) ?? -1) : -1;
    if (index >= 0) {
      this.focusedChipIndex = index;
      this.isInputFocused = true;
    }
  };

  /**
   * Focuses a chip at the given index and updates tabindex management.
   * Scrolls the chip into view within the searchfield container.
   * @param index - The index of the chip to focus
   * @internal
   */
  private focusChipAtIndex(index: number) {
    if (!this.chips || index < 0 || index >= this.chips.length) return;
    this.focusedChipIndex = index;
    this.resetChipTabIndices();
    const chip = this.chips[index];
    const focusTarget = this.getFocusTargetForChip(chip);
    focusTarget.setAttribute('tabindex', '0');
    focusTarget.focus({ preventScroll: true });
    this.scrollChipIntoView(chip);
    this.isInputFocused = false;
  }

  /**
   * Returns focus to the input field and resets chip focus state.
   * Uses preventScroll so the container scroll position is preserved.
   * @internal
   */
  private focusInputField() {
    this.focusedChipIndex = -1;
    this.resetChipTabIndices();
    this.navigatingToInput = true;
    this.inputElement.focus({ preventScroll: true });
  }

  /**
   * Removes a chip at the given index by directly removing it from the DOM.
   * After removal, focuses the appropriate next element.
   * @param index - The index of the chip to remove
   * @internal
   */
  private removeChipAtIndex(index: number) {
    if (!this.chips || index < 0 || index >= this.chips.length) return;
    const chip = this.chips[index];
    this.removeChipListeners(chip);
    this.removeChip(chip);

    // Wait for DOM/slot update after removal
    requestAnimationFrame(() => {
      if (this.chips && this.chips.length > 0) {
        const newIndex = Math.min(index, this.chips.length - 1);
        this.focusChipAtIndex(newIndex);
      } else {
        this.focusInputField();
      }
    });
  }

  /**
   * Resets tabindex to -1 on all chips.
   * @internal
   */
  private resetChipTabIndices() {
    this.chips?.forEach(c => {
      const target = this.getFocusTargetForChip(c);
      target.setAttribute('tabindex', '-1');
    });
  }

  /**
   * Returns the element that should receive focus for a given chip.
   * For mdc-inputchip, this is the close button inside its shadow DOM.
   * For mdc-chip and mdc-alertchip, this is the chip element itself.
   * @internal
   */
  private getFocusTargetForChip(chip: HTMLElement): HTMLElement {
    if (chip.matches(INPUT_CHIP_TAG)) {
      const closeBtn = chip.shadowRoot?.querySelector<HTMLElement>('[part="close-icon"]');
      if (closeBtn) return closeBtn;
    }
    return chip;
  }

  /**
   * Returns the chip element corresponding to a focus target.
   * For mdc-inputchip close buttons, returns the parent inputchip.
   * For other chips, returns the element itself.
   * @internal
   */
  private getChipForFocusTarget(target: HTMLElement): HTMLElement | null {
    // If the target is a direct chip in the slot, return it
    if (this.chips?.includes(target)) return target;
    // Otherwise, it's the close button inside an inputchip's shadow DOM.
    // Walk up to find the host element.
    const host = (target.getRootNode() as ShadowRoot)?.host as HTMLElement;
    if (host && this.chips?.includes(host)) return host;
    return null;
  }

  /**
   * Returns the scrollable container element that holds chips and the input.
   * @internal
   */
  protected get scrollContainer(): HTMLElement | null {
    return this.shadowRoot?.querySelector('[part="searchfield-container"]') ?? null;
  }

  /**
   * Scrolls the given chip element into view within the searchfield container.
   * @param chip - The chip element to scroll into view
   * @internal
   */
  private scrollChipIntoView(chip: HTMLElement) {
    const container = this.scrollContainer;
    if (!container) return;

    // For the first chip, always scroll to the very start
    if (this.chips && this.chips.indexOf(chip) === 0) {
      container.scrollLeft = 0;
      return;
    }

    // Use getBoundingClientRect to get positions relative to the viewport,
    // then compare against the container's visible bounds.
    const containerRect = container.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();

    if (chipRect.left < containerRect.left) {
      container.scrollLeft -= containerRect.left - chipRect.left;
    } else if (chipRect.right > containerRect.right) {
      container.scrollLeft += chipRect.right - containerRect.right;
    }
  }

  /**
   * Scrolls the searchfield container so that the input element's right edge
   * is just visible, without over-scrolling past it.
   * @internal
   */
  private scrollContainerToEnd() {
    const container = this.scrollContainer;
    const input = this.inputElement as HTMLElement;
    if (!container || !input) return;
    const inputRight = input.offsetLeft + input.offsetWidth;
    const desiredScroll = inputRight - container.clientWidth;
    container.scrollLeft = Math.max(0, desiredScroll);
  }

  handleFilterContainerClick = () => {
    this.inputElement.focus();
  };

  public override render() {
    return html`
      ${this.renderLabelElement()}
      <div
        class="${classMap({
          'mdc-focus-ring': this.isInputFocused,
        })}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="searchfield-container" @click=${this.handleFilterContainerClick} tabindex="-1">
          <slot name="filters" @slotchange=${this.renderChips}></slot>
          ${this.renderInputElement(DEFAULTS.TYPE, this.hasChips)}
        </div>
        ${this.renderTrailingButton(this.hasChips)}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
// End AI-Assisted
