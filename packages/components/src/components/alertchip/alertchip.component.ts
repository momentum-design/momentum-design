import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './alertchip.styles';
import { Component } from '../../models';
import { DEFAULTS } from './alertchip.constants';
import { getAlertIcon } from './alertchip.utils';
import type { VariantType } from './alertchip.types';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

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
 *
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

  constructor() {
    super();
    this.disabled = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
    this.active = undefined as unknown as boolean;
    this.size = DEFAULTS.SIZE;
    this.role = DEFAULTS.ROLE;
  }

  public override render() {
    return html`
      <mdc-icon part="icon" name="${getAlertIcon(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      <mdc-text part="label" type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label}</mdc-text>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AlertChip;
