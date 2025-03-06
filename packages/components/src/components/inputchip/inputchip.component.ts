import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './inputchip.styles';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { IconNames } from '../icon/icon.types';
import { DEFAULTS } from './inputchip.constants';

/**
 * inputchip component, which ...
 *
 * @tagname mdc-inputchip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Inputchip extends IconNameMixin(DisabledMixin(Component)) {
  @property({ type: String }) label = '';

  @property({ type: Boolean }) error = false;

  @property({ type: String, attribute: 'avatar-src' }) avatarSrc?: string;

  @property({ type: String, attribute: 'avatar-initials' }) avatarInitials?: string;

  private renderLeadingData() {
    if (this.avatarSrc || this.avatarInitials) {
      return html`
      <mdc-avatar
        size="24"
        initials="${ifDefined(this.avatarInitials)}"
        src="${ifDefined(this.avatarSrc)}"
      ></mdc-avatar>
    `;
    }
    if (this.iconName) {
      return html`
      <mdc-icon 
        name="${this.iconName as IconNames}" 
        length-unit="rem" 
        size="1"></mdc-icon>
    `;
    }
    return nothing;
  }

  public override render() {
    return html`
        ${this.renderLeadingData()}
        <mdc-text type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label.substring(0, 20)}</mdc-text>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Inputchip;
