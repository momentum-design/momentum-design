import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './toggle.styles';
import { Component } from '../../models';
import FormfieldWrapper from '../formfieldwrapper';
import { ValueMixin } from '../../utils/mixins/ValueMixin';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS, ICON_NAME, TOGGLE_SIZE } from './toggle.constants';
import { ToggleSize } from './toggle.types';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

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
 */
class Toggle extends NameMixin(ValueMixin(DisabledMixin(FormfieldWrapper))) {
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

  /**
   * Determines aria label on mdc-toggle.
   */
  @property({ type: String, reflect: true, attribute: 'data-aria-label' })
  dataAriaLabel = '';

  constructor() {
    super();

    // Toggle does not contain helpTextType property.
    this.helpTextType = undefined as unknown as ValidationType;
  }

  /**
   * Toggles the state of the toggle element.
   * and dispatch the new change event.
   */
  private handleChange(event: KeyboardEvent) {
    if (this.disabled) return;

    if (['Enter', ' '].includes(event.key)) {
      event.preventDefault();
    }

    this.checked = !this.checked;
    // Since change event doesn't bubble out of shadow dom, we need to explicitly dispatch it.
    this.dispatchEvent(new CustomEvent('onToggleChange', { detail: { checked: this.checked } }));
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
            aria-label=${ifDefined(this.dataAriaLabel)}
            tabindex="${this.disabled ? -1 : 0}"
            @change="${this.handleChange}"
          />
          <div class="mdc-toggle__slider">
                <div class="mdc-toggle__icon-container">
                    <mdc-icon
                      name="${this.checked ? ICON_NAME.CHECKED : ICON_NAME.UNCHECKED}"
                      class="mdc-toggle__icon"
                      length-unit="%"
                      size="100"
                    ></mdc-icon>
                </div>
          </div>
        </div>
        <div class="mdc-toggle__label-container">
          ${this.renderLabel()}
          ${this.renderHelperText()}
        </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Toggle;
