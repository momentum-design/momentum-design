import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

import styles from './alertchip.styles';
import { DEFAULTS } from './alertchip.constants';
import { getAlertIcon } from './alertchip.utils';
import type { VariantType } from './alertchip.types';

/**
 * mdc-alertchip component is an interactive chip that consumers can use to represent an alert.
 *
 * - It supports a leading icon along with label.
 * - It supports 5 variants of alerts - neutral, warning, error, success, and informational
 *
 * This component is built by extending Buttonsimple.
 *
 * @tagname mdc-alertchip
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @cssproperty --mdc-chip-color - The color of the label text
 * @cssproperty --mdc-chip-icon-color - The color of the icon
 * @cssproperty --mdc-chip-border-color - The border color of the alertchip
 * @cssproperty --mdc-chip-background-color - The background color of the alertchip
 * @cssproperty --mdc-button-height - Height for button size
 *
 * @csspart icon - The alert icon
 * @csspart label - The text label of the alertchip
 *
 * @event click - (React: onClick) This event is dispatched when the chip is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the chip.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the chip.
 * @event focus - (React: onFocus) This event is dispatched when the chip receives focus.
 */
class AlertChip extends Buttonsimple {
  /**
   * The variant of the alertchip. It supports 5 variants
   * - neutral
   * - warning
   * - error
   * - success
   * - informational
   *
   * @default neutral
   */
  @property({ type: String }) variant: VariantType = DEFAULTS.VARIANT;

  /**
   * The visible label text of the alertchip.
   *
   * We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
   * including empty spaces to split words.
   */
  @property({ type: String }) label = '';

  override connectedCallback(): void {
    super.connectedCallback();
    this.disabled = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
    this.active = undefined as unknown as boolean;
    this.size = DEFAULTS.SIZE;
    this.role = DEFAULTS.ROLE;
  }

  public override render() {
    return html`
      <mdc-icon part="icon" name="${getAlertIcon(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      ${this.label
        ? html`<mdc-text part="label" type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}"
            >${this.label}</mdc-text
          >`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AlertChip;
