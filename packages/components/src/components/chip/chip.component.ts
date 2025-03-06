import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './chip.styles';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { Component } from '../../models';
import { DEFAULTS } from './chip.constants';
import type { IconNames } from '../icon/icon.types';
import type { ColorType } from './chip.types';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

/**
 * chip component, which ...
 *
 * @tagname mdc-chip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property\
 *
 * @event click - (React: onClick) This event is dispatched when the button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the button.
 * @event focus - (React: onFocus) This event is dispatched when the button receives focus.
 */
class Chip extends IconNameMixin(Buttonsimple) {
  @property({ type: String }) color: ColorType = DEFAULTS.COLOR;

  @property({ type: String }) label = '';

  @property({ type: String, attribute: 'avatar-src' }) avatarSrc?: string;

  @property({ type: String, attribute: 'avatar-initials' }) avatarInitials?: string;

  constructor() {
    super();
    this.role = DEFAULTS.ROLE;
    this.size = DEFAULTS.SIZE;
    this.active = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
  }

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

export default Chip;

// support avatar or icon. Not both
// support tooltip
