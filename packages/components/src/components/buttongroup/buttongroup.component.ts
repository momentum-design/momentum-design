import { CSSResult, html, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './buttongroup.constants';
import styles from './buttongroup.styles';
import type { ButtonGroupOrientation, ButtonGroupSize, ButtonGroupVariant } from './buttongroup.types';

/**
 * buttongroup component, is a styled wrapper for multiple buttons.
 * It can support icon buttons, combination of icon and pill buttons, and text buttons.
 * They are available in horizontal and vertical orientation.
 *
 * @tagname mdc-buttongroup
 *
 * @slot default - This is a default/unnamed slot, which contains the buttons
 *
 * @cssproperty --mdc-buttongroup-border-radius - The border radius of the buttongroup
 * @cssproperty --mdc-buttongroup-border-color - The border color of the buttongroup
 * @cssproperty --mdc-buttongroup-divider-color - The color of the divider between buttons within the buttongroup
 */
class ButtonGroup extends Component {
  /**
   * Orientation of the buttongroup.
   * @default 'horizontal'
   */
  @property({ type: String, reflect: true })
  orientation: ButtonGroupOrientation = DEFAULTS.ORIENTATION;

  /**
   * Variant of the buttons within the buttongroup.
   * @default 'primary'
   */
  @property({ type: String, reflect: true })
  variant: ButtonGroupVariant = DEFAULTS.VARIANT;

  /**
   * Size of the buttons within the buttongroup.
   * @default '28'
   */
  @property({ type: Number, reflect: true })
  size: ButtonGroupSize = DEFAULTS.SIZE;

  /**
   * When this is true, the buttons within the buttongroup will be compact.
   * i.e. Irrespective of the size of the buttons, they will have a height of 24px.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  compact = false;

  /**
   * List of buttons passed into the slot
   * @internal
   */
  @queryAssignedElements({ selector: 'mdc-button' })
  private buttons!: Array<HTMLButtonElement>;

  /**
   * Handles the slotchange event, setting the size and variant of the buttons
   * @internal
   */
  private handleSlotChange() {
    this.buttons.forEach(button => {
      button.setAttribute('size', this.size.toString());
      button.setAttribute('variant', this.variant);
    });
  }

  override updated(changedProperties: PropertyValues<ButtonGroup>) {
    super.updated(changedProperties);
    if (changedProperties.has('size') || changedProperties.has('variant')) {
      this.handleSlotChange();
    }
  }

  public override render() {
    return html`<div part="container"><slot @slotchange=${this.handleSlotChange}></slot></div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ButtonGroup;
