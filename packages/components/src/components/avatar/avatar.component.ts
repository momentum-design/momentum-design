import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './avatar.styles';
import { Component } from '../../models';
import type { AvatarType } from './avatar.types';
import { AVATAR_TYPES, MAX_COUNTER } from './avatar.constants';
import '../presence';

/**
 * @slot - This is a default/unnamed slot
 *
 * @tagname mdc-avatar
 */
class Avatar extends Component {
  @property({ type: String })
  src?: string;

  @property({ type: String })
  alt?: string;

  @property({ type: String })
  initials?: string;

  @property({ type: Number })
  counter?: number;

  @property({ type: String })
  presence?: string;

  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  @property({ type: Boolean, attribute: 'is-typing' })
  isTyping = false;

  @property({ type: Boolean, attribute: 'is-clickable' })
  isClickable = false;

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
  }

  private getPresenceTemplateBasedOnType(type: AvatarType) {
    // avatar type of counter should not have presence
    if (type === AVATAR_TYPES.TEXT && this.counter) {
      return html``;
    }
    if (this.presence) {
      return html`
        <mdc-presence class="presence" type="${this.presence}" size="xx_large"></mdc-presence>
      `;
    }
    return html``;
  }

  private photoTemplate() {
    return html`
      <img
        class="photo"
        src="${ifDefined(this.src)}"
        alt="${ifDefined(this.alt)}"
      />
    `;
  }

  private iconTemplate() {
    return html`
      <mdc-icon
        class="icon"
        name="${ifDefined(this.iconName)}"
        size="3"
      ></mdc-icon>
    `;
  }

  private textTemplate(type: string) {
    let content = '';
    if (type === 'text' && this.initials) {
      content = this.initials.toUpperCase().slice(0, 2);
    }
    if (type === 'counter' && this.counter) {
      if (this.counter > MAX_COUNTER) {
        content = `${MAX_COUNTER}+`;
      } else {
        content = this.counter.toString();
      }
    }
    return html`
      <mdc-text>${content}</mdc-text>
    `;
  }

  private getTypeBasedOnInputs(): AvatarType {
    if (this.src && this.alt) {
      return AVATAR_TYPES.PHOTO;
    }
    if (this.initials) {
      return AVATAR_TYPES.TEXT;
    }
    if (this.iconName) {
      return AVATAR_TYPES.ICON;
    }
    if (this.counter) {
      return AVATAR_TYPES.COUNTER;
    }
    return AVATAR_TYPES.ICON;
  }

  private getTemplateBasedOnType(type: AvatarType) {
    switch (type) {
      case AVATAR_TYPES.PHOTO:
        return this.photoTemplate();
      case AVATAR_TYPES.TEXT:
      case AVATAR_TYPES.COUNTER:
        return this.textTemplate(type);
      case AVATAR_TYPES.ICON:
      default:
        return this.iconTemplate();
    }
  }

  public override render() {
    const type = this.getTypeBasedOnInputs();
    const content = this.getTemplateBasedOnType(type);
    const presence = this.getPresenceTemplateBasedOnType(type);
    if (this.isClickable) {
      return html`
        <mdc-button class="container">
          ${content}
          ${presence}
        </mdc-button>
      `;
    }
    return html`
      <div class="container place-center">
        ${content}
        ${presence}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
