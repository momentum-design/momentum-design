import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { ValueMixin } from '../../utils/mixins/ValueMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { ICON_NAME } from './checkbox.constants';
import styles from './checkbox.styles';

/**
 * Checkboxes allow users to select multiple options from a list or turn an item/feature on or off.
 * These are often used in forms, settings, and selections in lists.
 *
 * A checkbox component contains an optional label and an optional helper text.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-checkbox
 */
class Checkbox extends NameMixin(ValueMixin(DataAriaLabelMixin(DisabledMixin(FormfieldWrapper)))) {
  /**
   * Determines whether the checkbox is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * This property is used to determine the parent checkbox in a nested checkbox group.
   * If any one of the children is unselected, then the parent checkbox will be indeterminate.
   * If all children are either selected or unselected, then the parent checkbox will not be indeterminate.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  constructor() {
    super();

    // Checkbox does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
  }

  /**
   * Toggles the state of the checkbox element.
   * If the checkbox element is not disabled,
   * then we will toggle its checked state.
   */
  private toggleState(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  /**
   * Toggles the state of the checkbox element.
   * and dispatch the new change event.
   */
  public handleChange(event: Event): void {
    this.toggleState();

    // Change event doesn't bubble out of shadow dom,
    // Workaround to fix this: https://github.com/lit/lit-element/issues/922#issuecomment-611139629
    const newEvent = new (event.constructor as typeof Event)(event.type, event);
    this.dispatchEvent(newEvent);
  }

  public override render() {
    const checkboxIconContent = (this.checked || this.indeterminate) ? html`
      <mdc-icon
        class="mdc-checkbox__icon"
        name="${this.indeterminate ? ICON_NAME.INDETERMINATE : ICON_NAME.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    ` : nothing;

    return html`
      <div class="mdc-checkbox__container mdc-focus-ring">
        <input
          id="${this.id}"
          type="checkbox"
          class="mdc-checkbox__input"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          .checked="${live(this.checked)}"
          .indeterminate="${live(this.indeterminate)}"
          .disabled="${this.disabled}"
          aria-disabled="${this.disabled}"
          aria-label="${ifDefined(this.dataAriaLabel ?? '')}"
          @change=${this.handleChange}
        />
        <div class="mdc-checkbox__icon-container">${checkboxIconContent}</div>
      </div>
      <div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Checkbox;
