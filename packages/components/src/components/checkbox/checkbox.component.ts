import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import styles from './checkbox.styles';

/**
 * Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selections in lists.
 *
 * A checkbox component contains an optional label and an optional helper text.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-checkbox
 */
class Checkbox extends DisabledMixin(Component) {
  /**
   * Determines whether the checkbox is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * The name of the checkbox.
   */
  @property({ type: String }) name?: string;

  /**
   * The value of the checkbox.
   */
  @property({ type: String }) value?: string;

  /**
   * The label of the checkbox.
   */
  @property({ type: String }) label?: string;

  /**
   * The helper text of the checkbox. This text is displayed below the checkbox label.
   * Using this property, we can display any additional text related to the checkbox.
   */
  @property({ type: String, attribute: 'help-text' }) helpText?: string;

  /**
   * When the indeterminate state is set, the checkbox cannot be selected or unselected.
   * This property is used to determine the parent checkbox in a nested checkbox group.
   * If any one of the children is unselected, then the parent checkbox will be indeterminate.
   * If all children are either selected or unselected, then the parent checkbox will not be indeterminate.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Triggers a change event on the checkbox element.
   * This is used to dispatch the change event.
   */
  private triggerChangeEvent(): void {
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(changeEvent);
  }

  /**
   * Toggles the state of the checkbox element.
   * If the checkbox element is not disabled,
   * then we will toggle its checked state
   * and also trigger a change event.
   */
  private toggleState(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.triggerChangeEvent();
    }
  }

  /**
   * Handles the keydown event on the checkbox.
   * If the checkbox is indeterminate or disabled, then the event is ignored.
   * If the key is 'Enter' or 'Space', the checkbox is toggled.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (this.indeterminate || this.disabled) {
      return;
    }
    if (['Enter', ' '].includes(event.key)) {
      this.handleClick(event);
    }
  }

  /**
   * Handles the click event on the checkbox.
   * Prevents the default action on the event,
   * and toggles the state of the checkbox.
   *
   * @param event - The click event.
   */
  private handleClick(event: Event): void {
    event.preventDefault();
    this.toggleState();
  }

  public override render() {
    const checkboxIconContent = (this.checked || this.indeterminate) ? html`
      <mdc-icon
        class="mdc-checkbox__icon"
        name="${this.indeterminate ? 'minus-regular' : 'check-regular'}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    ` : nothing;
    const helpTextContent = this.helpText ? html`
      <mdc-text
        class="mdc-checkbox__help-text"
        tagname="${VALID_TEXT_TAGS.SPAN}"
        type="${TYPE.BODY_MIDSIZE_REGULAR}"
      >${this.helpText}</mdc-text>` : nothing;

    return html`
      <label class="mdc-checkbox__container" @click=${this.handleClick}>
        <input
          id="${this.id}"
          type="checkbox" 
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          class="mdc-checkbox__input"
        />
        <span
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          aria-label="${ifDefined(this.label)}"
          class="mdc-checkbox__icon-container mdc-focus-ring"
          role="checkbox"
          tabindex="${this.disabled ? -1 : 0}"
        >
          ${checkboxIconContent}
        </span>
        <span class="mdc-checkbox__label-text">${this.label}</span>
      </label>
      ${helpTextContent}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkbox;
