import { CSSResult, html, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import type { ButtonVariant } from '../button/button.types';
import { DEFAULTS } from './buttongroup.constants';
import styles from './buttongroup.styles';
import type { ButtonGroupOrientation, ButtonGroupSize } from './buttongroup.types';

/**
 * buttongroup component, which ...
 *
 * @tagname mdc-buttongroup
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Buttongroup extends Component {
  @property({ type: String, reflect: true })
  orientation: ButtonGroupOrientation = DEFAULTS.ORIENTATION;

  @property({ type: String, reflect: true })
  variant: ButtonVariant = DEFAULTS.VARIANT;

  @property({ type: Number, reflect: true })
  size: ButtonGroupSize = DEFAULTS.SIZE;

  @property({ type: Boolean, reflect: true })
  compact = false;

  @queryAssignedElements({ selector: 'mdc-button' })
  private buttons!: Array<HTMLButtonElement>;

  private handleSlotChange() {
    this.buttons.forEach((button) => {
      button.setAttribute('size', this.size.toString());
      button.setAttribute('variant', this.variant);
    });
  }

  override updated(changedProperties: PropertyValues<Buttongroup>) {
    super.updated(changedProperties);
    if (changedProperties.has('size') || changedProperties.has('variant')) {
      this.handleSlotChange();
    }
  }

  public override render() {
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Buttongroup;
