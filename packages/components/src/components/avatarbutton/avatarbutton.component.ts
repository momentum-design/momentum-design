import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { ROLE } from '../../utils/roles';
import { AVATAR_SIZE, DEFAULTS } from '../avatar/avatar.constants';
import type { AvatarSize } from '../avatar/avatar.types';
import { DEFAULTS as BUTTON_DEFAULTS } from '../button/button.constants';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

import styles from './avatarbutton.styles';

/**
 * The `mdc-avatarbutton` component is an interactable version of the `mdc-avatar` component.
 *
 * This component is made by extending `buttonsimple` class.
 * The button component acts as a wrapper for the avatar component.
 *
 * To override styles of the avatar inside, use the specified css parts.
 *
 * @dependency mdc-avatar
 *
 * @event click - (React: onClick) This event is dispatched when the avatarbutton is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the avatarbutton.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the avatarbutton.
 * @event focus - (React: onFocus) This event is dispatched when the avatarbutton receives focus.
 *
 * @tagname mdc-avatarbutton
 *
 * @cssproperty --mdc-avatarbutton-overlay-background-color-rest - Background color of the overlay in rest state
 * @cssproperty --mdc-avatarbutton-overlay-background-color-hover - Background color of the overlay in hover state
 * @cssproperty --mdc-avatarbutton-overlay-background-color-active - Background color of the overlay in active state
 *
 * @csspart overlay - The overlay part of the avatar button.
 * @csspart content - The main content of the avatar.
 * @csspart photo - The photo part of the avatar.
 * @csspart presence - The presence indicator part of the avatar.
 * @csspart loading-wrapper - The wrapper for the loading indicator of the avatar.
 * @csspart loader - The loading indicator part of the avatar.
 */
class AvatarButton extends AvatarComponentMixin(IconNameMixin(Buttonsimple)) {
  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  override connectedCallback(): void {
    super.connectedCallback();

    this.active = undefined as unknown as boolean;
    this.disabled = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
    this.role = ROLE.BUTTON;
    this.type = BUTTON_DEFAULTS.TYPE;
  }

  override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
  }

  private setSize(size: AvatarSize) {
    this.setAttribute('size', Object.values(AVATAR_SIZE).includes(size) ? `${size}` : DEFAULTS.SIZE.toString());
  }

  public override render() {
    return html`
      <div part="overlay" aria-hidden="true"></div>
      <mdc-avatar
        exportparts="content, photo, presence, loading-wrapper, loader"
        ?is-typing="${this.isTyping}"
        counter="${ifDefined(this.counter)}"
        max-counter="${ifDefined(this.maxCounter)}"
        icon-name="${ifDefined(this.iconName)}"
        initials="${ifDefined(this.initials)}"
        presence="${ifDefined(this.presence)}"
        size="${ifDefined(this.size)}"
        src="${ifDefined(this.src)}"
      ></mdc-avatar>
    `;
  }

  public static override styles: Array<CSSResult> = [...styles];
}

export default AvatarButton;
