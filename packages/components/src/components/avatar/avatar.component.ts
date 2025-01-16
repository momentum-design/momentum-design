import { CSSResult, html, nothing } from 'lit';
import type { PropertyValues, TemplateResult } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import { AVATAR_TYPE, DEFAULTS, MAX_COUNTER } from './avatar.constants';
import styles from './avatar.styles';
import type { AvatarType } from './avatar.types';
import { getAvatarIconSize, getAvatarTextFontSize, getPresenceSize } from './avatar.utils';

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
 * The avatar component is non clickable and non interactive/focusable component.
 * If the avatar is typing, then the loading indicator will be displayed.
 * If the counter type avatar is set to a negative number, then we will display 0.
 * The presence indicator will be hidden when the counter property is set.
 *
 * @dependency mdc-icon
 * @dependency mdc-presence
 * @dependency mdc-text
 *
 * @tagname mdc-avatar
 *
 * @cssproperty --mdc-avatar-default-background-color - Allows customization of the default background color.
 * @cssproperty --mdc-avatar-default-foreground-color - Allows customization of the default foreground color.
 * @cssproperty --mdc-avatar-loading-indicator-background-color -
 *  Allows customization of the loading indicator background color.
 * @cssproperty --mdc-avatar-loading-indicator-foreground-color -
 *  Allows customization of the loading indicator foreground color.
 * @cssproperty --mdc-avatar-loading-overlay-background-color -
 *  Allows customization of the loading overlay background color.
 */
class Avatar extends AvatarComponentMixin(Component) {
  /**
   * @internal
   */
  @state() private isPhotoLoaded = false;

  /**
   * @internal
   * The avatar presence will be hidden if the avatar type is COUNTER.
   * If the presence is set, it will be rendered as a child of the avatar.
   *
   * @param type - The type of the avatar.
   * @returns The presence template or an empty template.
   */
  private getPresenceTemplateBasedOnType(type: AvatarType): TemplateResult | typeof nothing {
    // avatar type of counter should not have presence
    if (type === AVATAR_TYPE.COUNTER && (this.counter || this.counter === 0)) {
      return nothing;
    }
    if (this.presence) {
      return html`
        <mdc-presence class="presence" type="${this.presence}" size="${getPresenceSize(this.size)}"></mdc-presence>
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
   * The photo remains hidden until it is fully loaded;
   * upon successful loading, the `handleOnLoad` method sets `isPhotoLoaded` to true.
   * In the event of a loading error, the `handleOnError` method sets `isPhotoLoaded` to false and raises an error.
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
   * Generates the icon template for the photo avatar component.
   * Utilizes the `mdc-icon` component to display an icon.
   * If the `iconName` property is not provided, it defaults to the `DEFAULTS.ICON_NAME`.
   *
   * @returns The template result containing the avatar icon.
   */
  private iconTemplate(): TemplateResult {
    const name = this.iconName || DEFAULTS.ICON_NAME;
    return html`
      <mdc-icon
        name="${ifDefined(name)}"
        length-unit="rem"
        size="${getAvatarIconSize(this.size)}"
      ></mdc-icon>
    `;
  }

  /**
   * @internal
   * Generates the text template for the initials/counter avatar component.
   * Utilizes the `mdc-text` component to display text.
   *
   * @param content - the text content to be displayed
   * @returns The template result containing the avatar text.
   */
  private textTemplate(content: string): TemplateResult {
    return html`
      <mdc-text
        type="${getAvatarTextFontSize(this.size)}"
        tagname="span"
      >
        ${content}
      </mdc-text>
    `;
  }

  /**
   * @internal
   * Generates the text content for counter avatar by converting the given number to a string.
   * If the counter exceeds the maximum limit of 99, it will return the maximum limit as a string
   * followed by a '+' character.
   *
   * @param counter - the number to be converted to a string
   * @returns the counter text
   */
  private generateCounterText(counter: number): string {
    // If the consumer provides a negative number, we set it to 0.
    if (counter < 0) {
      return '0';
    }
    if (counter > MAX_COUNTER) {
      return `${MAX_COUNTER}+`;
    }
    return counter.toString();
  }

  /**
   * @internal
   * Converts the given initials to uppercase and takes the first two characters.
   * This is used to generate the text content for the initials avatar.
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
   * If the type is COUNTER, it uses the value of counter property and
   * generate the string representation of the counter.
   * The generated content is then passed to the `textTemplate` method to generate the final template.
   *
   * @param type - the type of the avatar
   * @returns the template result containing the avatar text
   */
  private generateTextContent(type: AvatarType): TemplateResult {
    let content = '';
    if (type === AVATAR_TYPE.TEXT && this.initials) {
      content = this.generateInitialsText(this.initials);
    }
    if (type === AVATAR_TYPE.COUNTER && (this.counter || this.counter === 0)) {
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
    if (this.iconName) {
      return AVATAR_TYPE.ICON;
    }
    if (this.initials) {
      return AVATAR_TYPE.TEXT;
    }
    if (this.counter || this.counter === 0) {
      return AVATAR_TYPE.COUNTER;
    }
    return AVATAR_TYPE.ICON;
  }

  /**
   * @internal
   * Returns the template result based on the type of the avatar component.
   * The type is determined by `getTypeBasedOnInputs` based on user's input.
   * Based on the generated type, template result is generated.
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
   * Represents the loading indicator for the avatar when typing.
   * If the avatar is in typing state, this method returns a loading indicator
   * comprising three small filled dots, scaled based on the avatar size.
   *
   * @returns The template result containing the loading indicator, or an empty template if not typing.
   */
  private getLoadingContent(): TemplateResult | typeof nothing {
    if (!this.isTyping) {
      return nothing;
    }
    return html`<div class="loading__wrapper"><div class="loader"></div></div>`;
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

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('src') && !this.src) {
      // Reset photo loaded if src is empty
      this.isPhotoLoaded = false;
    }
  }

  public override render(): TemplateResult {
    const type = this.getTypeBasedOnInputs();
    return html`
      <div class="content" aria-hidden="true">
        ${this.getPhotoPlaceHolderContent(type)}
        ${this.getTemplateBasedOnType(type)}
        ${this.getLoadingContent()}
        ${this.getPresenceTemplateBasedOnType(type)}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
