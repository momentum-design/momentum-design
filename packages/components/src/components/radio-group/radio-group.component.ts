import { CSSResult } from 'lit';
import { NameMixin } from '../../utils/mixins/NameMixin';
import FormfieldGroup from '../formfieldgroup';
import { TAG_NAME as RADIO_TAGNAME } from '../radio/radio.constants';

/**
 * Radio Group Component - This is the wrapper component for radio buttons which are grouped together.
 * It can have a header text and a description. It enables users to select a single option from a set of options.
 * It is often used in forms, settings, and selection in lists. It automatically group the radio buttons inside it.
 *
 * @tagname mdc-radio-group
 *
 * @cssproperty --mdc-radio-group-description-text-normal - color of the description text
 *
 */
class RadioGroup extends NameMixin(FormfieldGroup) {
  constructor() {
    super();
    // This is used to set the role of the component as `radiogroup`.
    this.isRadio = true;
  }

  /**
   * Using name property to group the radio buttons together.
   * If the name is not set, it will be set to the name of the radio group.
   */
  override firstUpdated() {
    const slots = Array.from(this.shadowRoot?.querySelectorAll('slot') || []);
    const radios = slots
      .flatMap((slot) => slot.assignedElements({ flatten: true }))
      .filter((el) => el.tagName.toLowerCase() === RADIO_TAGNAME);
    if (radios) {
      radios.forEach((radio) => {
        if (!radio.hasAttribute('name')) {
          radio.setAttribute('name', this.name);
        }
      });
    }
  }

  public static override styles: Array<CSSResult> = [...FormfieldGroup.styles];
}

export default RadioGroup;
