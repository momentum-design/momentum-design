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
 * @cssprop --custom-property-name - Description of the CSS custom property
 *
 * @event click - (React: onClick) This event is dispatched when the button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the button.
 * @event focus - (React: onFocus) This event is dispatched when the button receives focus.
 */
class Inputchip extends IconNameMixin(DisabledMixin(Component)) {
  @property({ type: String }) label = '';

  @property({ type: Boolean }) error = false;

  @property({ type: String, attribute: 'avatar-src' }) avatarSrc?: string;

  @property({ type: String, attribute: 'avatar-initials' }) avatarInitials?: string;

  @property({ type: String, attribute: 'clear-aria-label' }) clearAriaLabel?: string;

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

  private handleClose() {
    this.dispatchEvent(new CustomEvent('click'));
  }

  public override render() {
    return html`
        ${this.renderLeadingData()}
        <mdc-text type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label}</mdc-text>
        <mdc-button 
          ?disabled="${this.disabled}"
          variant="tertiary"
          part="close-icon"
          aria-label="${ifDefined(this.clearAriaLabel)}"
          prefix-icon="${DEFAULTS.CLOSE_ICON}"
          size="20"
          @click="${this.handleClose}"
        ></mdc-button>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Inputchip;
