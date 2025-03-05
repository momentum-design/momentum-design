import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './chip.styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { Component } from '../../models';
import { DEFAULTS } from './chip.constants';
import type { IconNames } from '../icon/icon.types';
import type { ColorType } from './chip.types';

/**
 * chip component, which ...
 *
 * @tagname mdc-chip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Chip extends TabIndexMixin(DisabledMixin(IconNameMixin(Component))) {
  @property({ type: String }) color: ColorType = DEFAULTS.COLOR;

  @property({ type: String }) label = '';

  public override render() {
    return html`
      ${this.iconName ? html`<mdc-icon 
        name="${this.iconName as IconNames}" 
        length-unit="rem" 
        size="1"></mdc-icon>` : nothing}
        <slot name="avatar"></slot>
        <mdc-text type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label.substring(0, 20)}</mdc-text>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Chip;

// support avatar or icon. Not both
// support tooltip
