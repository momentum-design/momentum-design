import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TAG_NAME as CHECKBOX_NAME } from '../checkbox/checkbox.constants';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import { ATTRIBUTE, TYPE as CHECKBOXGROUP_TYPE } from './checkboxgroup.constants';
import styles from './checkboxgroup.styles';

/**
 * `mdc-checkboxgroup` component allows you to select multiple options from a predefined list.
 * It is commonly used in forms where multiple selections are required, such as preferences, filters, or categories.
 *
 * A checkbox group typically consists of multiple checkboxes grouped together,
 * each representing a selectable option. You can check or uncheck options based on their preferences.
 *
 * If the `type` is set to "none", then a header text will be shown. <br/>
 * If the `type` is set to "parent", then the parent checkbox will visible.
 *
 * @dependency mdc-text
 * @dependency mdc-checkbox
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot default - This is a default slot
 */
class Checkboxgroup extends DataAriaLabelMixin(DisabledMixin(Component)) {
  /**
   * The type of the checkbox group, either 'parent' or nothing.
   */
  @property({ type: String }) type?: string;

  /**
   * The label of the parent checkbox in the checkboxgroup.
   */
  @property({ type: String }) label?: string;

  /**
   * The header text of the checkboxgroup.
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  /**
   * @internal
   */
  private get checkboxList() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements() || [];
    return assignedElements.filter((element) => element.tagName.toLowerCase() === CHECKBOX_NAME);
  }

  constructor() {
    super();
    this.addEventListener('change', this.handleEntireChange);
  }

  /**
   * Handles the change event of the parent checkbox in the checkboxgroup.
   * This method is called when the parent checkbox is changed.
   * It changes the state of the checkboxes in the checkboxgroup
   * to be the same as the parent checkbox.
   * @param event - Event
   */
  private handleParentCheckboxChange(event: Event): void {
    const { checked } = <HTMLInputElement>event.currentTarget;
    this.checkboxList
      .filter((checkbox: Element) => !checkbox.hasAttribute(ATTRIBUTE.DISABLED))
      .forEach((checkbox: Element) => this.setCheckboxAttribute(checkbox, ATTRIBUTE.CHECKED, checked));
    this.handleEntireChange();
  }

  /**
   * Sets the given attribute on the given checkbox element to the given value.
   * If the value is true, the attribute is set.
   * If the value is false, the attribute is removed.
   * @param checkbox - The checkbox element.
   * @param attributeName - The name of the attribute to set.
   * @param value - The value of the attribute to set.
   */
  private setCheckboxAttribute(checkbox: Element, attributeName: string, value: boolean): void {
    if (value) {
      checkbox.setAttribute(attributeName, value.toString());
    } else {
      checkbox.removeAttribute(attributeName);
    }
  }

  /**
   * Handles the slot change event of the checkboxgroup.
   * This method is called when the elements in the checkboxgroup are changed.
   * It disables/enables all the checkboxes in the checkboxgroup if the parent checkboxgroup is disabled or not.
   * It calls the handleEntireChange method to update the state of the parent checkbox.
   */
  private handleSlotChange(): void {
    this.handleEntireChange();
  }

  /**
   * Handles the change event of the entire checkboxgroup.
   * This method is called when any of the checkboxes in the checkboxgroup are changed.
   * It updates the state of the parent checkbox in the checkboxgroup
   * to be the same as the children checkboxes.
   * If all the children checkboxes are checked, the parent checkbox is set to checked.
   * If some of the children checkboxes are checked, the parent checkbox is set to indeterminate.
   * If none of the children checkboxes are checked, the parent checkbox is set to unchecked.
   */
  private handleEntireChange(): void {
    const internalParentCheckbox = this.shadowRoot?.querySelector(CHECKBOX_NAME) ?? null;
    const selectedCheckboxCount = this.checkboxList.filter((checkbox) => (checkbox as HTMLInputElement).checked).length;
    this.touchParentCheckbox(internalParentCheckbox, selectedCheckboxCount, this.checkboxList.length);
  }

  /**
   * Touches the parent checkbox according to the given children state.
   * This method is called when the state of the children checkboxes are changed.
   * It updates the state of the parent checkbox in the checkboxgroup
   * to be the same as the children checkboxes.
   * If all the children checkboxes are checked, the parent checkbox is set to checked.
   * If some of the children checkboxes are checked, the parent checkbox is set to indeterminate.
   * If none of the children checkboxes are checked, the parent checkbox is set to unchecked.
   * @param parentCheckbox - The parent checkbox element.
   * @param currentChildrenCount - The number of children checkboxes that are currently checked.
   * @param allChildrenCount - The total number of children checkboxes.
   */
  private touchParentCheckbox(
    parentCheckbox: Element | null,
    currentChildrenCount: number,
    allChildrenCount: number,
  ): void {
    if (parentCheckbox === null || (currentChildrenCount === 0 && allChildrenCount === 0)) {
      return;
    }
    let checkedValue = false;
    let indeterminateValue = false;
    if (currentChildrenCount === allChildrenCount) {
      checkedValue = true;
      indeterminateValue = false;
    } else if (currentChildrenCount > 0) {
      checkedValue = false;
      indeterminateValue = true;
    }
    this.setCheckboxAttribute(parentCheckbox, ATTRIBUTE.CHECKED, checkedValue);
    this.setCheckboxAttribute(parentCheckbox, ATTRIBUTE.INDETERMINATE, indeterminateValue);
  }

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.get('disabled') !== undefined) {
      this.checkboxList.forEach((checkbox) => this.setCheckboxAttribute(checkbox, ATTRIBUTE.DISABLED, this.disabled));
    }
  }

  public override render() {
    const header = this.headerText
      ? html`<mdc-text class="header-text" tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}">
          ${this.headerText}
        </mdc-text>`
      : nothing;
    const parentCheckbox = this.type === CHECKBOXGROUP_TYPE.PARENT
      ? html`<mdc-checkbox
          .disabled="${this.disabled}"
          @change="${this.handleParentCheckboxChange}"
          data-aria-label="${this.dataAriaLabel ?? ''}"
          label="${ifDefined(this.label)}"
        ></mdc-checkbox>`
      : nothing;
    return html`
      ${header} ${parentCheckbox}
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
