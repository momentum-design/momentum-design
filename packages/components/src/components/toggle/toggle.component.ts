import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './toggle.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { ValueMixin } from '../../utils/mixins/ValueMixin';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { DEFAULTS, ICON_NAME, ICON_SIZE_IN_REM, TOGGLE_SIZE } from './toggle.constants';
import { ToggleSize } from './toggle.types';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';

/**
 * Toggle Component is an interactive control used to switch between two mutually exclusive options,
 * such as On/Off, Active/Inactive. These are commonly used in settings panels, forms, and preference selections
 * where users need to enable or disable a feature.
 * It contains an optional label and an optional helper text.
 *
 * Note: It internally renders a checkbox styled as a toggle switch.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-toggle
 *
 * @cssproperty --mdc-toggle-width - width of the toggle
 * @cssproperty --mdc-toggle-height - height of the toggle
 * @cssproperty --mdc-toggle-width-compact - width of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-height-compact - height of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border-radius - border radius of the toggle
 * @cssproperty --mdc-toggle-border-radius-compact - border radius of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border - border of the toggle
 * @cssproperty --mdc-toggle-inactive-rest-color - background color of the inactive toggle in rest state
 * @cssproperty --mdc-toggle-inactive-hover-color - background color of the inactive toggle in hover state
 * @cssproperty --mdc-toggle-inactive-pressed-color - background color of the inactive toggle in pressed state
 * @cssproperty --mdc-toggle-inactive-disabled-color - background color of the inactive toggle in disabled state
 * @cssproperty --mdc-toggle-active-rest-color - background color of the active toggle in rest state
 * @cssproperty --mdc-toggle-active-hover-color - background color of the active toggle in hover state
 * @cssproperty --mdc-toggle-active-pressed-color - background color of the active toggle in pressed state
 * @cssproperty --mdc-toggle-active-disabled-color - background color of the active toggle in disabled state
 * @cssproperty --mdc-toggle-help-text-color -  color of the help text label
 * @cssproperty --mdc-toggle-label-color-disabled - color of the toggle label and help text in disabled state
 *
 */
class Toggle extends NameMixin(ValueMixin(DataAriaLabelMixin(FormfieldWrapper))) {
  /**
  * Determines whether the toggle is active or inactive.
  * @default false
  */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Determines toggle size in rem (height is specified here).
   * - **Default**: 1.5
   * - **Compact**: 1
   * @default default
   */
  @property({ type: String, reflect: true })
  size: ToggleSize = DEFAULTS.SIZE;

  /** @internal */
  private internals: ElementInternals;

  /** @internal */
  static formAssociated = true;

  /** @internal */
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  constructor() {
    super();
    /** @internal */
    this.internals = this.attachInternals();
    // Toggle does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
  }

  /**
   * Updates the form value to reflect the current state of the toggle.
   * If toggle is switched on, the value is set to either the user-provided value or 'isActive' if no value is provided.
   * If toggle is switched off, the value is set to null.
   */
  private setFormValue() {
    let actualValue: string | null = null;

    if (this.checked) {
      actualValue = !this.value ? 'isActive' : this.value;
    }

    this.internals.setFormValue(actualValue);
  }

  /**
   * Toggles the state of the toggle element.
   * If the element is not disabled, then the checked property is toggled.
   */
  private toggleState(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  /**
   * Toggles the state of the toggle element.
   * and dispatch the new change event.
   */
  private handleChange(event: Event) {
    this.toggleState();
    // Re-dispatch the existing event instead of creating a new one since change event doesn't bubble out of shadow dom
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  /**
   * Sets the size attribute for the toggle component.
   * If the provided size is not included in the TOGGLE_SIZE,
   * it defaults to the value specified in DEFAULTS.SIZE.
   *
   * @param size - The size to set.
   */
  private setToggleSize(size: ToggleSize) {
    this.setAttribute('size', Object.values(TOGGLE_SIZE).includes(size) ? size : DEFAULTS.SIZE);
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('checked')) {
      this.setFormValue();
    }

    if (changedProperties.has('size')) {
      this.setToggleSize(this.size);
    }
  }

  public override render() {
    return html`
        <div class="mdc-toggle__container mdc-focus-ring">
          <input
            id="${this.id}"
            type="checkbox"
            class="mdc-toggle__input"
            role="switch"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            .checked="${this.checked}"
            .disabled="${this.disabled}"
            aria-label="${this.dataAriaLabel ?? ''}"
            tabindex="${this.disabled ? -1 : 0}"
            @change="${this.handleChange}"
          />
          <div class="mdc-toggle__slider">
            <mdc-icon
              name="${this.checked ? ICON_NAME.CHECKED : ICON_NAME.UNCHECKED}"
              class="mdc-toggle__icon"
              length-unit="rem"
              size="${ICON_SIZE_IN_REM[this.size]}"
            ></mdc-icon>
          </div>
        </div>
        ${this.renderLabel()}
        ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Toggle;
