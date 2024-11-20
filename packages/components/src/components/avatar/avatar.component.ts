import { CSSResult, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { DirectiveResult } from 'lit-html/directive';
import styles from './avatar.styles';
import { Component } from '../../models';
import type { AvatarSize, AvatarType } from './avatar.types';
import { AVATAR_TYPE, MAX_COUNTER, DEFAULTS } from './avatar.constants';
import '../presence';
import { getAvatarSize, getAvatarIconSize, getAvatarTextFontSize, getAvatarLoadingScaleSize } from './avatar.utils';

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

  @property({ type: String, reflect: true })
  size: AvatarSize = DEFAULTS.SIZE;

  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  @property({ type: Boolean, attribute: 'is-typing' })
  isTyping = false;

  @property({ type: Boolean, attribute: 'is-clickable' })
  isClickable = false;

  private getPresenceTemplateBasedOnType(type: AvatarType): TemplateResult {
    // while typing the loading spinner will be displayed and presence will be hidden
    if (this.isTyping) {
      return html``;
    }
    // avatar type of counter should not have presence
    if (type === AVATAR_TYPE.COUNTER && this.counter) {
      return html``;
    }
    if (this.presence) {
      return html`
        <mdc-presence class="presence" type="${this.presence}" size="${this.size}"></mdc-presence>
      `;
    }
    return html``;
  }

  private photoTemplate(): TemplateResult {
    return html`
      <img
        class="photo"
        src="${ifDefined(this.src)}"
        alt="${ifDefined(this.alt)}"
      />
    `;
  }

  private iconTemplate(): TemplateResult {
    return html`
      <mdc-icon
        class="icon"
        name="${ifDefined(this.iconName)}"
        length-unit="rem"
        size="${getAvatarIconSize(this.size)}"
      ></mdc-icon>
    `;
  }

  private textTemplate(type: AvatarType): TemplateResult {
    let content = '';
    if (type === AVATAR_TYPE.TEXT && this.initials) {
      content = this.initials.toUpperCase().slice(0, 2);
    }
    if (type === AVATAR_TYPE.COUNTER && this.counter) {
      if (this.counter > MAX_COUNTER) {
        content = [MAX_COUNTER, '+'].join('');
      } else {
        content = this.counter.toString();
      }
    }
    return html`
      <mdc-text
        class="place-center"
        type="${getAvatarTextFontSize(this.size)}"
        tagname="span"
        style="${this.generateAvatarDimensions()}"
      >
        ${content}
      </mdc-text>
    `;
  }

  private getTypeBasedOnInputs(): AvatarType {
    if (this.src && this.alt) {
      return AVATAR_TYPE.PHOTO;
    }
    if (this.initials) {
      return AVATAR_TYPE.TEXT;
    }
    if (this.iconName) {
      return AVATAR_TYPE.ICON;
    }
    if (this.counter) {
      return AVATAR_TYPE.COUNTER;
    }
    return AVATAR_TYPE.ICON;
  }

  private getTemplateBasedOnType(type: AvatarType): TemplateResult {
    switch (type) {
      case AVATAR_TYPE.PHOTO:
        return this.photoTemplate();
      case AVATAR_TYPE.TEXT:
      case AVATAR_TYPE.COUNTER:
        return this.textTemplate(type);
      case AVATAR_TYPE.ICON:
      default:
        return this.iconTemplate();
    }
  }

  private generateAvatarDimensions(): DirectiveResult {
    const rems = [getAvatarSize(this.size), 'rem'].join('');
    return styleMap({
      width: rems,
      height: rems,
    });
  }

  private getLoadingContent(): TemplateResult {
    if (!this.isTyping) {
      return html``;
    }
    const loadStyle = styleMap({ transform: getAvatarLoadingScaleSize(this.size) });
    return html`
      <div class="loading__container" aria-hidden="true" style="${loadStyle}">
        <div class="loading__wrapper">
          <mdc-icon
            name="active-presence-small-filled"
            class="loading__icon"
            length-unit="rem"
            size="4"
          ></mdc-icon>
          <mdc-icon
            name="active-presence-small-filled"
            class="loading__icon"
            length-unit="rem"
            size="4"
          ></mdc-icon>
          <mdc-icon
            name="active-presence-small-filled"
            class="loading__icon"
            length-unit="rem"
            size="4"
          ></mdc-icon>
        </div>
      </div>
    `;
  }

  public override render() {
    const type = this.getTypeBasedOnInputs();
    const mainContent = this.getTemplateBasedOnType(type);
    const presence = this.getPresenceTemplateBasedOnType(type);
    const dimensions = this.generateAvatarDimensions();
    const loadingContent = this.getLoadingContent();

    if (this.isClickable) {
      return html`
        <mdc-button class="container" style="${dimensions}">
          <div class="content" style="${dimensions}">
            ${mainContent}
            ${presence}
            ${loadingContent}
          </div>
        </mdc-button>
      `;
    }
    return html`
      <div class="container place-center" style="${dimensions}" aria-hidden="true">
        <div class="content" style="${dimensions}">
          ${mainContent}
          ${presence}
          ${loadingContent}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
