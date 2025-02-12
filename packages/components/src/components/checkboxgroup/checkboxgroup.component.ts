import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { TAG_NAME as CHECKBOX_TAGNAME } from '../checkbox/checkbox.constants';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import styles from './checkboxgroup.styles';

/**
 * `mdc-checkboxgroup` component allows you to select multiple options from a predefined list.
 * It is commonly used in forms where multiple selections are required, such as preferences, filters, or categories.
 *
 * A checkbox group typically consists of multiple checkboxes grouped together,
 * each representing a selectable option. You can check or uncheck options based on their preferences.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot default - This is a default slot
 */
class Checkboxgroup extends Component {
  /**
   * The header text of the checkboxgroup.
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  /** @internal */
  @property({ type: String, reflect: true }) override role = 'group';

  /** @internal */
  private get checkboxList() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements() || [];
    return assignedElements.filter((element) => element.tagName.toLowerCase() === CHECKBOX_TAGNAME);
  }

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Handles the keydown event on the parent checkbox in the checkboxgroup.
   * When the user presses the down arrow key, the focus is moved to the next checkbox in the checkboxgroup.
   * When the user presses the up arrow key, the focus is moved to the previous checkbox in the checkboxgroup.
   * @param event - The KeyboardEvent
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      this.navigate(event.target, 1);
    }
    if (event.key === 'ArrowUp') {
      this.navigate(event.target, -1);
    }
  }

  /**
   * Navigate to the next or previous checkbox in the checkboxgroup based on the given origin and direction.
   * @param origin - The element that triggered the event.
   * @param direction - The direction of navigation, either -1 or 1.
   */
  private navigate(origin: EventTarget | null, direction: number): void {
    const getAllCheckboxIds = this.checkboxList.map((checkbox) => checkbox.id);
    const currentIdIndex = getAllCheckboxIds.indexOf((origin as HTMLInputElement).id);
    const nextIndex = (currentIdIndex + direction) % getAllCheckboxIds.length;
    (this.children[nextIndex] as HTMLInputElement).focus();
  }

  public override render() {
    const header = this.headerText
      ? html`<mdc-text class="header-text" tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}">
          ${this.headerText}
        </mdc-text>`
      : nothing;
    return html`
      ${header}
      <slot></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
