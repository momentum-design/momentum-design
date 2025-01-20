import { CSSResult, html } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import styles from './checkboxgroup.styles';

/**
 * checkboxgroup component, which ...
 *
 * @dependency mdc-text
 * @tagname mdc-checkboxgroup
 */
class Checkboxgroup extends Component {
  /**
   * type
   */
  @property({ type: String }) type?: string;

  /**
   * label
   */
  @property({ type: String }) label?: string;

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
  @queryAssignedElements({ selector: 'mdc-checkbox' })
  private checkBoxList!: HTMLInputElement[];

  constructor() {
    super();
    this.addEventListener('change', this.toggleParentCheckboxState);
  }

  private toggleParentCheckboxState(): void {
    const selectedChildren = this.checkBoxList.filter((element: HTMLInputElement) => element.checked);
    // console.log('in toggleState', selectedChildren.length, this.checkBoxList.length);
    if (selectedChildren.length === this.checkBoxList.length) {
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

  private handleParentCheckboxChange(event: CustomEvent) {
    // console.log('in parent checkbox change');
    // console.log(this.checkBoxList);
    // this.checkBoxList.filter((el) => el.tagName === 'CHECKBOX');
    this.checkBoxList.forEach((checkbox: HTMLInputElement) => {
      if (event.detail.checked) {
        checkbox.setAttribute('checked', 'true');
      } else {
        checkbox.removeAttribute('checked');
      }
    });
  }

  private handleSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements() || [];
    console.log('assignedElements: ');
    console.log(assignedElements);

    this.toggleParentCheckboxState();
  }

  private getCheckboxHeader() {
    if (this.type === 'parent') {
      return html`
        <mdc-checkbox
          ?checked="${this.isChecked}"
          ?indeterminate="${this.isIndeterminate}"
          label="${ifDefined(this.label)}"
          @change="${this.handleParentCheckboxChange}"
        ></mdc-checkbox>
      `;
    }
    return html`
      <mdc-text
        tagname="${VALID_TEXT_TAGS.SPAN}"
        type="${TYPE.BODY_LARGE_BOLD}"
      >${this.label}</mdc-text>`;
  }

  public override render() {
    return html`
      ${this.getCheckboxHeader()}
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
