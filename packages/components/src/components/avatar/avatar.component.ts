import { CSSResult, html, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './avatar.styles';
import { Component } from '../../models';
import type { AvatarSize, AvatarType } from './avatar.types';
import type { IconNames } from '../icon/icon.types';
import type { PresenceType } from '../presence/presence.types';
import { AVATAR_TYPE, MAX_COUNTER, DEFAULTS } from './avatar.constants';
import { getAvatarIconSize, getAvatarTextFontSize } from './avatar.utils';

/**
 * The `mdc-avatar` component is used to represent a person or a space.
 * An avatar can be an icon, initials, counter and photo.
 *
 * To set the photo of an avatar,
 * you need to set "src" attribute.
 *
 * While the avatar image is loading, as a placeholder,
 * we will show the initials text.
 * If the initials are not specified then,
 * we will show `user-regular` icon as a placeholder.
 *
 * By default, if there are no attributes specified,
 * then the default avatar will be an icon with `user-regular` name.
 *
 * If the avatar is typing, then the loading indicator will be displayed and presence will be hidden.
 *
 * @dependency mdc-icon
 * @dependency mdc-presence
 * @dependency mdc-text
 *
 * @tagname mdc-avatar
 */
class Avatar extends Component {
  /**
   * The src is the url which will be used to display the avatar.
   * When the src is loading, we will display the initials as a placeholder.
   */
  @property({ type: String })
  src?: string;

  /**
   * The initials to be displayed for the avatar.
   * The first two characters of the initials will be displayed in the avatar as upper case.
   */
  @property({ type: String })
  initials?: string;

  /**
   * The presence is the status which can be used to display the
   * activity state of a user or a space within an avatar component.
   *
   * Acceptable values include:
   * - `active`
   * - `away`
   * - `away-calling`
   * - `busy`
   * - `dnd`
   * - `meeting`
   * - `on-call`
   * - `on-device`
   * - `on-mobile`
   * - `pause`
   * - `pto`
   * - `presenting`
   * - `quiet`
   * - `scheduled`
   *
   * @default active
   */
  @property({ type: String })
  presence?: PresenceType;

  /**
   * Acceptable values include:
   * - xx_small
   * - x_small
   * - small
   * - midsize
   * - large
   * - x_large
   * - xx_large
   *
   * @default x_small
   */
  @property({ type: String, reflect: true })
  size: AvatarSize = DEFAULTS.SIZE;

  /**
   * Name of the icon to be displayed inside the Avatar.
   * Must be a valid icon name.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: IconNames;

  /**
   * The counter is the number which can be displayed for the avatar.
   * The maximum number is 99 and if the give number is greater than 99,
   * then the avatar will be displayed as `99+`.
   */
  @property({ type: Number })
  counter?: number;

  /**
   * Determines whether the user is typing.
   * When this is set to true, the presence will be disabled.
   * @default false
   */
  @property({ type: Boolean, attribute: 'is-typing' })
  isTyping = false;

  /**
   * @internal
   */
  @state() private isPhotoLoaded = false;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * The avatar presence will be hidden if the avatar type is COUNTER.
   * If the presence is set, it will be rendered as a child of the avatar.
   *
   * @param type - The type of the avatar.
   * @returns The presence template or an empty template.
   */
  private getPresenceTemplateBasedOnType(type: AvatarType): TemplateResult | typeof nothing {
    // avatar type of counter should not have presence
    if (type === AVATAR_TYPE.COUNTER && this.counter) {
      return nothing;
    }
    if (this.presence) {
      return html`
        <mdc-presence class="presence" type="${this.presence}" size="${this.size}"></mdc-presence>
      `;
    }
    return nothing;
  }

  /**
   * @internal
   * Sets `isPhotoLoaded` to `true` when the avatar photo is loaded.
   * This is used to hide the avatar photo initially and show it only when it is loaded.
   */
  private handleOnLoad(): void {
    this.isPhotoLoaded = true;
  }

  /**
   * @internal
   * Handles errors that occur during the image loading process.
   * Sets `isPhotoLoaded` to `false` to indicate the failure and throws an error message.
   * The error message suggests checking the `src` attribute.
   */
  private handleOnError(): void {
    this.isPhotoLoaded = false;
    if (this.onerror) {
      this.onerror('There was a problem while fetching the <img/>. Please check the src attribute and try again.');
    }
  }

  /**
   * @internal
   * Generates the photo template for the avatar component.
   * Utilizes the `src` attribute to display an image.
   * The photo is hidden until it is fully loaded, at which point
   * `isPhotoLoaded` is set to `true` by the `handleOnLoad` method.
   * If an error occurs during loading, `handleOnError` sets `isPhotoLoaded`
   * to `false` and throws an error.
   *
   * @returns The template result containing the avatar photo.
   */
  private photoTemplate(): TemplateResult {
    return html`
      <img
        class="photo"
        src="${ifDefined(this.src)}"
        aria-hidden="true"
        ?hidden="${!this.isPhotoLoaded}"
        @load="${this.handleOnLoad}"
        @error="${this.handleOnError}"
      />
    `;
  }

  /**
   * @internal
   * Generates the icon template for the avatar component.
   * Utilizes the `mdc-icon` component to display an icon.
   * If the `iconName` property is not provided, it defaults to the `DEFAULTS.ICON_NAME`.
   *
   * @returns The template result containing the avatar icon.
   */
  private iconTemplate(): TemplateResult {
    const name = this.iconName || DEFAULTS.ICON_NAME;
    return html`
      <mdc-icon
        class="icon"
        name="${ifDefined(name)}"
        length-unit="rem"
        size="${getAvatarIconSize(this.size)}"
      ></mdc-icon>
    `;
  }

  /**
   * @internal
   * Generates the text template for the avatar component.
   * Utilizes the `mdc-text` component to display text.
   *
   * @param content - the text content to be displayed
   * @returns The template result containing the avatar text.
   */
  private textTemplate(content: string): TemplateResult {
    return html`
      <mdc-text
        class="place-center"
        type="${getAvatarTextFontSize(this.size)}"
        tagname="span"
      >
        ${content}
      </mdc-text>
    `;
  }

  /**
   * @internal
   * Generates the counter text by converting the given number to a string.
   * If the counter exceeds the maximum limit of 99, it will return the maximum limit as a string
   * followed by a '+' character.
   *
   * @param counter - the number to be converted to a string
   * @returns the counter text
   */
  private generateCounterText(counter: number): string {
    if (counter > MAX_COUNTER) {
      return `${MAX_COUNTER}'+'`;
    }
    return counter.toString();
  }

  /**
   * @internal
   * Converts the given initials to uppercase and takes the first two characters.
   * This is used to generate the text content for the text avatar type.
   *
   * @param initials - the string containing the initials
   * @returns the first two uppercase characters of the given initials
   */
  private generateInitialsText(initials: string): string {
    return initials.toUpperCase().slice(0, 2);
  }

  /**
   * @internal
   * Generates the text content based on the given type.
   * If the type is TEXT, it will use the initials property and generate the first two uppercase characters.
   * If the type is COUNTER, it will use the counter property and generate the string representation of the counter.
   * The generated content is then passed to the textTemplate method to generate the final template.
   *
   * @param type - the type of the avatar
   * @returns the template result containing the avatar text
   */
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

  /**
   * @internal
   * Returns the type of the avatar component based on the user-provided inputs.
   *
   * @returns the type of the avatar component
   */
  private getTypeBasedOnInputs(): AvatarType {
    if (this.src) {
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

  /**
   * @internal
   * Returns the template result based on the type of the avatar component.
   * The type is determined by the user-provided inputs and the method will delegate to the
   * corresponding template method to generate the template result.
   *
   * @param type - the type of the avatar component
   * @returns the template result containing the avatar content
   */
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

  /**
   * @internal
   * Generates the loading indicator content for the avatar when typing.
   * If the avatar is in typing state, this method returns a loading indicator
   * comprising three small filled dots, scaled based on the avatar size.
   *
   * @returns The template result containing the loading indicator, or an empty template if not typing.
   */
  private getLoadingContent(): TemplateResult | typeof nothing {
    if (!this.isTyping) {
      return nothing;
    }
    return html`<div class="loader"></div>`;
  }

  /**
   * @internal
   * Generates the photo placeholder content for the avatar component.
   * If the photo is not yet loaded, and the avatar type is PHOTO with initials provided,
   * it generates and returns the initials as a placeholder text.
   * If the photo is already loaded, it returns an empty template.
   *
   * @param type - The type of the avatar.
   * @returns The template result containing the placeholder content or an empty template.
   */
  private getPhotoPlaceHolderContent(type: AvatarType): TemplateResult | typeof nothing {
    // if photo is already loaded then no need to show placeholder
    if (this.isPhotoLoaded) {
      return nothing;
    }
    if (type === AVATAR_TYPE.PHOTO) {
      if (this.initials) {
        return this.textTemplate(this.generateInitialsText(this.initials));
      }
      return this.iconTemplate();
    }
    return nothing;
  }

  /**
   * @internal
   * Assembles and returns the complete content for the avatar component.
   *
   * @returns The template result containing the fully assembled avatar content.
   */
  private renderedContent(): TemplateResult {
    const type = this.getTypeBasedOnInputs();
    return html`
      ${this.getPhotoPlaceHolderContent(type)}
      ${this.getTemplateBasedOnType(type)}
      ${this.getPresenceTemplateBasedOnType(type)}
      ${this.getLoadingContent()}
    `;
  }

  public override render(): TemplateResult {
    const renderedContent = this.renderedContent();

    return html`
      <div class="content" aria-hidden="true">
        ${renderedContent}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
