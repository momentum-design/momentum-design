import { CSSResult, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { TAG_NAME as CHECKBOX_NAME } from '../checkbox/checkbox.constants';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as CHECKBOXGROUP_NAME, TYPE } from './checkboxgroup.constants';
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
class Checkboxgroup extends Component {
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
  @state() private isIndeterminate = false;

  /**
   * @internal
   */
  @state() private isChecked = false;

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

    if (selectedChildren.length === getAllCheckboxChildren.length) {
      this.isChecked = true;
      this.isIndeterminate = false;
    } else if (selectedChildren.length > 0) {
      this.isChecked = false;
      this.isIndeterminate = true;
    } else {
      this.isChecked = false;
      this.isIndeterminate = false;
    }
  }

  /**
   * Recursively filters all checkboxes from a list of elements in the slot.
   * If an element is a checkbox group, it adds its internal parent checkbox and
   * continues filtering its children. Otherwise, it adds the checkbox to the result array.
   *
   * @param checkboxList - The list of elements to filter checkboxes from.
   * @param resultArray - The array to store filtered checkboxes.
   * @returns An array of all filtered checkboxes.
   */
  private filterAllCheckboxes(checkboxList: Array<Element>, resultArray: Array<Element> = []): Array<Element> {
    checkboxList?.forEach((eachCheckbox: Element) => {
      if (eachCheckbox.tagName.toLowerCase() === CHECKBOXGROUP_NAME) {
        const internalParentCheckbox = eachCheckbox.shadowRoot?.querySelector(CHECKBOX_NAME) ?? null;
        if (internalParentCheckbox) {
          resultArray.push(internalParentCheckbox);
        }
        this.filterAllCheckboxes(Array.from(eachCheckbox.children), resultArray);
      } else {
        resultArray.push(eachCheckbox);
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
    const getAllCheckBoxChildren = this.filterAllCheckboxes(this.checkboxList);
    getAllCheckBoxChildren.forEach((checkbox: Element) => {
      if (event.detail?.checked) {
        checkbox.setAttribute('checked', 'true');
      } else {
        checkbox.removeAttribute('checked');
      }
    });
  }

  public override render() {
    const header = this.headerText
      ? html`<mdc-text tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}"> ${this.headerText} </mdc-text>`
      : nothing;
    const parentCheckbox = this.type === TYPE.PARENT
      ? html`<mdc-checkbox
          ?checked="${this.isChecked}"
          ?indeterminate="${this.isIndeterminate}"
          label="${ifDefined(this.label)}"
          @change="${this.handleParentCheckboxChange}"
        ></mdc-checkbox>`
      : nothing;
    return html`
      ${header} ${parentCheckbox}
      <slot @slotchange=${this.toggleParentCheckboxState}></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
