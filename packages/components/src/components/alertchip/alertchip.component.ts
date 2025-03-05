import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './alertchip.styles';
import { Component } from '../../models';
import { DEFAULTS } from './alertchip.constants';
import { getAlertIcon } from './alertchip.utils';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import type { VariantType } from './alertchip.types';

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
class Alertchip extends TabIndexMixin(Component) {
  @property({ type: String }) variant: VariantType = DEFAULTS.VARIANT;

  @property({ type: String }) label = '';

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
