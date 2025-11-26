import { CSSResult, html, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './buttongroup.constants';
import styles from './buttongroup.styles';
import type { ButtonGroupOrientation, ButtonGroupSize, ButtonGroupVariant } from './buttongroup.types';

/**
 * `mdc-buttongroup` is a wrapper component that groups multiple buttons together.
 *
 * ## Supported button types
 * - Icon buttons
 * - Pill buttons
 * - Combination of icon and pill buttons
 *
 * ## Features
 * - Horizontal or vertical orientation
 * - Unified size and variant applied to all child buttons
 * - Optional compact mode for reduced height
 * - Supported sizes: 24, 28 (default), 32, 40
 *
 * ## Usage
 * - Only `mdc-button` components are allowed as direct children
 * - The `size` and `variant` set on buttongroup override individual button settings
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
   * Layout direction of the buttons within the group.
   * - `horizontal`: Buttons are arranged side by side (default)
   * - `vertical`: Buttons are stacked vertically
   * @default 'horizontal'
   */
  @property({ type: String, reflect: true })
  orientation: ButtonGroupOrientation = DEFAULTS.ORIENTATION;

  /**
   * Visual style variant applied to all buttons in the group.
   * - `primary`: Solid background color
   * - `secondary`: Transparent background with solid border
   * - `tertiary`: No background or border, text-only appearance
   * @default 'primary'
   */
  @property({ type: String, reflect: true })
  variant: ButtonGroupVariant = DEFAULTS.VARIANT;

  /**
   * Size applied to all buttons in the group.
   * Available sizes: 24, 28, 32, 40
   * @default 28
   */
  @property({ type: Number, reflect: true })
  size: ButtonGroupSize = DEFAULTS.SIZE;

  /**
   * Enables compact mode with reduced height.
   * When true, all buttons have a fixed height of 24px regardless of their size setting.
   * Useful for space-constrained layouts.
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
