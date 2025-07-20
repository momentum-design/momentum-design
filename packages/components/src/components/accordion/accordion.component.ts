import { CSSResult, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';

import { ROLE } from '../../utils/roles';
import AccordionButton from '../accordionbutton';
import { ICON_NAME } from '../accordionbutton/accordionbutton.constants';
import { BUTTON_VARIANTS } from '../button/button.constants';

import styles from './accordion.styles';

/**
 * accordion component, which ...
 *
 * @tagname mdc-accordion
 *
 * @slot default - This is a default/unnamed slot
 *
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Accordion extends AccordionButton {
  /** @internal */
  @queryAssignedElements({ slot: 'leading-controls' })
  leadingControlsSlot!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ slot: 'trailing-controls' })
  trailingControlsSlot!: Array<HTMLElement>;

  public override renderHeader() {
    return html`
      <div part="header-section">
        <div part="leading-header">
          ${this.renderIcon(this.prefixIcon)}
          <div role="${ROLE.HEADING}" aria-level="${this.dataAriaLevel}">${this.renderHeadingText()}</div>
          <slot name="leading-controls"></slot>
        </div>
        <div part="trailing-header">
          <slot name="trailing-controls"></slot>
          <mdc-button
            @click="${this.handleHeaderClick}"
            aria-controls="${this.bodySectionId}"
            aria-expanded="${this.expanded}"
            prefix-icon="${this.expanded ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN}"
            variant="${BUTTON_VARIANTS.TERTIARY}"
          ></mdc-button>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...AccordionButton.styles, ...styles];
}

export default Accordion;
