import { CSSResult, html, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './buttongroup.constants';
import styles from './buttongroup.styles';
import type { ButtonGroupOrientation, ButtonGroupSize, ButtonGroupVariant } from './buttongroup.types';

/**
 * buttongroup component, is a wrapper to group multiple buttons.
 * It can support icon buttons, combination of icon and pill buttons, and text buttons.
 * Button group can be positioned in horizontal orientation and vertical orientation.
 *
 * The sizes of buttons within the button group can be set using the `size` attribute on the button group,
 * which will apply the size to all buttons within the group.
 *
 * Buttons of sizes 24, 28, 32, and 40 are only supported inside a button group. Default size is 28.
 *
 * The variant of buttons within the button group can be set using the `variant` attribute on the button group,
 * which will apply the variant to all buttons within the group. Default variant is `primary`.
 *
 * All buttons are placed horizontally by default. To change the orientation to vertical, set the `orientation` attribute to `vertical`.
 *
 * Things to note:
 * - Button group will allow only `mdc-button` components as its direct children.
 * - Button group will set the `size` and `variant` attributes on the buttons within it,
 *   so any `size` or `variant` set directly on any button will be overridden.
 *
 * @tagname mdc-buttongroup
 *
 * @slot default - This is a default/unnamed slot, which contains the buttons
 *
 * @cssproperty --mdc-buttongroup-border-radius - The border radius of the buttongroup
 * @cssproperty --mdc-buttongroup-border-color - The border color of the buttongroup
 * @cssproperty --mdc-buttongroup-divider-color - The color of the divider between buttons within the buttongroup
 *
 * @csspart container - The container of the buttongroup.
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
