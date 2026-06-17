import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

import FormfieldGroup from '../formfieldgroup';
import { TAG_NAME as RADIO_TAGNAME } from '../radio/radio.constants';
import { TAG_NAME as CARD_RADIO_TAGNAME } from '../cardradio/cardradio.constants';
import type { PopoverStrategy, PopoverPlacement } from '../popover/popover.types';

const isRadio = new RegExp(`^(${RADIO_TAGNAME}|${CARD_RADIO_TAGNAME})$`, 'i');

/**
 * @tagname mdc-radiogroup
 *
 */
class RadioGroup extends FormfieldGroup {
  /**
   * Name of the radio group.
   * They are used to group elements in a form together.
   * @default ''
   */
  @property({ type: String, reflect: true }) name = '';

  constructor() {
    super();
    // This is used to set the role of the component as `radiogroup`.
    this.isRadio = true;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // toggletipPlacement and toggletipStrategy are set to undefined as they are not used by radiogroup.
    this.toggletipPlacement = undefined as unknown as PopoverPlacement;
    this.toggletipStrategy = undefined as unknown as PopoverStrategy;
  }

  /**
   * Using name property to group the radio buttons together.
   * If the name is not set, it will be set to the name of the radio group.
   */
  override firstUpdated() {
    Array.from(this.shadowRoot?.querySelectorAll('slot') || [])
      .flatMap(slot => slot.assignedElements({ flatten: true }))
      .filter(el => isRadio.test(el.tagName))
      .forEach(radio => {
        if (!radio.hasAttribute('name')) {
          radio.setAttribute('name', this.name);
        }
        radio.toggleAttribute('required', this.required);
      });
  }

  public static override styles: Array<CSSResult> = [...FormfieldGroup.styles];
}

export default RadioGroup;
