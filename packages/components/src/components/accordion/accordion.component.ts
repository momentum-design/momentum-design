import { CSSResult, html, PropertyValues } from 'lit';
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
 * @slot leading-controls - The leading controls slot of the accordion on the header section.
 * @slot trailing-controls - The trailing controls slot of the accordion on the header section.
 * @slot default - The default slot contains the body section of the accordion. User can place anything inside this body slot.
 *
 * @event shown - (React: onShown) This event is triggered when the accordion is expanded.
 *
 * @cssproperty --mdc-accordionbutton-border-color - The border color of the accordion button.
 *
 * @csspart header-section - The header section of the accordion button.
 * @csspart leading-header - The leading header of the accordion button.
 * @csspart trailing-header - The trailing header of the accordion button.
 * @csspart body-section - The body section of the accordion button.
 */
class Accordion extends AccordionButton {
  /** @internal */
  @queryAssignedElements({ slot: 'leading-controls' })
  leadingControlsSlot!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ slot: 'trailing-controls' })
  trailingControlsSlot!: Array<HTMLElement>;

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      [...this.leadingControlsSlot, ...this.trailingControlsSlot].forEach(element => {
        if (this.disabled) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled');
        }
      });
    }
  }

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
            ?disabled="${this.disabled}"
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
