import { CSSResult, html, TemplateResult } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { DirectiveResult } from 'lit-html/directive';
import styles from './avatar.styles';
import { Component } from '../../models';
import type { AvatarSize, AvatarType } from './avatar.types';
import { AVATAR_TYPE, MAX_COUNTER, DEFAULTS } from './avatar.constants';
import { getAvatarSize, getAvatarIconSize, getAvatarTextFontSize, getAvatarLoadingScaleSize } from './avatar.utils';

/**
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

  // FIXME: Replace "string" with PRESENCE_TYPE const
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

  @state() private isPhotoLoaded = false;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

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

  private handleOnLoad(): void {
    this.isPhotoLoaded = true;
  }

  private handleOnError(): void {
    this.isPhotoLoaded = false;
    throw new Error('There was a problem while fetching the <img/>. Please check the src attribute and try again.');
  }

  private photoTemplate(): TemplateResult {
    return html`
      <img
        class="photo"
        src="${ifDefined(this.src)}"
        alt="${ifDefined(this.alt)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `;
  }

  private iconTemplate(): TemplateResult {
    const name = this.iconName ? this.iconName : DEFAULTS.ICON_NAME;
    return html`
      <mdc-icon
        class="icon"
        name="${ifDefined(name)}"
        length-unit="rem"
        size="${getAvatarIconSize(this.size)}"
      ></mdc-icon>
    `;
  }

  private textTemplate(content: string): TemplateResult {
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

  private generateCounterText(counter: number): string {
    if (counter > MAX_COUNTER) {
      return [MAX_COUNTER, '+'].join('');
    }
    return counter.toString();
  }

  private generateInitialsText(initials: string): string {
    return initials.toUpperCase().slice(0, 2);
  }

  private generateTextContent(type: AvatarType): TemplateResult {
    let content = '';
    if (type === AVATAR_TYPE.TEXT && this.initials) {
      content = this.generateInitialsText(this.initials);
    }
    if (type === AVATAR_TYPE.COUNTER && this.counter) {
      content = this.generateCounterText(this.counter);
    }
    return this.textTemplate(content);
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
        return this.generateTextContent(type);
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
          <!-- Load 3 small filled icons -->
          ${repeat(Array(3), () => html`
            <mdc-icon
              name="active-presence-small-filled"
              class="loading__icon"
              length-unit="rem"
              size="4"
            ></mdc-icon>
          `)}
        </div>
      </div>
    `;
  }

  private getPhotoPlaceHolderContent(type: AvatarType): TemplateResult {
    // if photo is already loaded then no need to show placeholder
    if (this.isPhotoLoaded) {
      return html``;
    }
    if (this.initials && type === AVATAR_TYPE.PHOTO) {
      return this.textTemplate(this.generateInitialsText(this.initials));
    }
    return html``;
  }

  private renderedContent(): TemplateResult {
    const type = this.getTypeBasedOnInputs();
    const photoPlaceHolder = this.getPhotoPlaceHolderContent(type);
    const mainContent = this.getTemplateBasedOnType(type);
    const presence = this.getPresenceTemplateBasedOnType(type);
    const loadingContent = this.getLoadingContent();
    return html`
      ${photoPlaceHolder}
      ${mainContent}
      ${presence}
      ${loadingContent}
    `;
  }

  public override render(): TemplateResult {
    const dimensions = this.generateAvatarDimensions();
    const renderedContent = this.renderedContent();

    if (this.isClickable) {
      return html`
        <mdc-button class="container" style="${dimensions}" aria-label="${ifDefined(this.ariaLabel || '')}">
          <div class="content" style="${dimensions}">
            ${renderedContent}
          </div>
        </mdc-button>
      `;
    }
    return html`
      <div class="container place-center" style="${dimensions}" aria-hidden="true">
        <div class="content" style="${dimensions}">
          ${renderedContent}
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
