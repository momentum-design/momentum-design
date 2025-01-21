import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TAG_NAME as CHECKBOX_NAME } from '../checkbox/checkbox.constants';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import { ATTRIBUTE, TAG_NAME as CHECKBOXGROUP_NAME, TYPE } from './checkboxgroup.constants';
import styles from './checkboxgroup.styles';

/**
 * checkboxgroup component acts as a parent container for a list of checkboxes.
 *
 * @dependency mdc-text
 * @dependency mdc-checkbox
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot - Children checkboxes of the checkboxgroup.
 */
class Checkboxgroup extends DisabledMixin(Component) {
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
   *
   */
  @property({ type: String }) headerText?: string;

  /**
   * @internal
   */
  override role = 'group';

  /**
   * @internal
   */
  private get checkboxList() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements() || [];
    return assignedElements.filter((element) => element.tagName.toLowerCase() === CHECKBOX_NAME || CHECKBOXGROUP_NAME);
  }

  constructor() {
    super();
    this.addEventListener('change', this.toggleParentCheckboxState);
  }

  /**
   * Handles the change event for the parent checkbox of the checkboxgroup.
   * If all children checkboxes are checked, then we set the parent checkbox to true,
   * If any one of the children is unchecked, then we set the parent checkbox will be indeterminate.
   */
  private toggleParentCheckboxState(): void {
    const getAllCheckboxChildren = this.filterAllCheckboxes(this.checkboxList);
    const selectedChildren = getAllCheckboxChildren.filter((checkbox) => (checkbox as HTMLInputElement).checked);

    const internalParentCheckbox = this.shadowRoot?.querySelector(CHECKBOX_NAME) ?? null;
    this.touchParentCheckbox(
      internalParentCheckbox,
      selectedChildren.length,
      getAllCheckboxChildren.length,
    );
  }

  /**
   * Recursively filters all checkboxes from a list of elements in the slot.
   * If an element is a checkbox group, it adds its internal parent checkbox and
   * continues filtering its children. Otherwise, it adds the checkbox to the result array.
   * @param checkboxList - The list of elements to filter checkboxes from.
   * @param resultArray - The array to store filtered checkboxes.
   * @returns An array of all filtered checkboxes.
   */
  private filterAllCheckboxes(checkboxList: Array<Element>, resultArray: Array<Element> = []): Array<Element> {
    checkboxList?.forEach((checkbox: Element) => {
      if (checkbox.tagName.toLowerCase() === CHECKBOXGROUP_NAME) {
        const internalParentCheckbox = checkbox.shadowRoot?.querySelector(CHECKBOX_NAME) ?? null;
        if (internalParentCheckbox) {
          resultArray.push(internalParentCheckbox);
        }
        this.filterAllCheckboxes(Array.from(checkbox.children), resultArray);
      } else {
        resultArray.push(checkbox);
      }
    });
    return resultArray;
  }

  /**
   * Handles the change event for the parent checkbox of the checkboxgroup.
   * Toggles all the children checkboxes of based on the checked state of the parent checkbox.
   * @param event - The change event of the parent checkbox.
   */
  private handleParentCheckboxChange(event: CustomEvent): void {
    this.touchAllCheckboxes(this.checkboxList, event.detail.checked);
  }

  /**
   * Handles the change event for the parent checkbox of the checkboxgroup.
   * Toggles all the children checkboxes of based on the checked state of the parent checkbox.
   * Recursively goes through all the children and toggles all the checkboxes.
   * @param checkboxList - The list of elements to toggle checkboxes from.
   * @param checked - The value to set the checked state of the children checkboxes.
   */
  private touchAllCheckboxes(checkboxList: Array<Element>, checked: boolean) {
    checkboxList.forEach((checkbox: Element) => {
      if (checkbox.hasAttribute(ATTRIBUTE.DISABLED)) {
        return;
      }
      if (checkbox.tagName.toLowerCase() === CHECKBOXGROUP_NAME) {
        const internalParentChildren = Array.from(checkbox.children);
        this.touchAllCheckboxes(internalParentChildren, checked);
        const internalParentCheckbox = checkbox.shadowRoot?.querySelector(CHECKBOX_NAME) ?? null;
        this.touchParentCheckbox(
          internalParentCheckbox,
          internalParentChildren.filter((child) => (child as HTMLInputElement).checked).length,
          internalParentChildren.length,
        );
      } else {
        this.setCheckboxAttribute(checkbox, ATTRIBUTE.CHECKED, checked);
      }
    });
  }

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

  private setCheckboxAttribute(checkbox: Element, attributeName: string, value: boolean): void {
    if (value) {
      checkbox.setAttribute(attributeName, value.toString());
    } else {
      checkbox.removeAttribute(attributeName);
    }
  }

  private handleSlotChange(): void {
    if (this.disabled) {
      this.checkboxList.forEach(
        (checkbox) => this.setCheckboxAttribute(checkbox, ATTRIBUTE.DISABLED, true),
      );
    }
    this.toggleParentCheckboxState();
  }

  public override render() {
    const header = this.headerText
      ? html`<mdc-text tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}"> ${this.headerText} </mdc-text>`
      : nothing;
    const parentCheckbox = this.type === TYPE.PARENT
      ? html`<mdc-checkbox
          ?disabled="${this.disabled}"
          label="${ifDefined(this.label)}"
          @change="${this.handleParentCheckboxChange}"
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
