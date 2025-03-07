import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './alertchip.styles';
import { Component } from '../../models';
import { DEFAULTS } from './alertchip.constants';
import { getAlertIcon } from './alertchip.utils';
import type { VariantType } from './alertchip.types';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

/**
 * alertchip component, which ...
 *
 * @tagname mdc-alertchip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Alertchip extends Buttonsimple {
  @property({ type: String }) variant: VariantType = DEFAULTS.VARIANT;

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
      <mdc-icon name="${getAlertIcon(this.variant)}" length-unit="rem" size="1"></mdc-icon>
      <slot></slot>
      <mdc-text type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label.substring(0, 20)}</mdc-text>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Alertchip;
