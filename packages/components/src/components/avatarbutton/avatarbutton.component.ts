import { CSSResult, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import Button from '../button/button.component';
import { DEFAULTS as BUTTON_DEFAULTS } from '../button/button.constants';
import type { ButtonColor, ButtonVariant } from '../button/button.types';
import { SIZE as AVATAR_SIZE } from '../presence/presence.constants';
import styles from './avatarbutton.styles';

/**
 * The `mdc-avatarbutton` component is an interactable version of the `mdc-avatar` component.
 *
 * This component is made using the `mdc-button` component.
 * The button component acts as a wrapper for the avatar component.
 *
 * @dependency mdc-avatar
 * @dependency mdc-button
 *
 * @tagname mdc-avatarbutton
 */
class AvatarButton extends AvatarComponentMixin(Button) {
  constructor() {
    super();

    this.active = undefined as unknown as boolean;
    this.color = undefined as unknown as ButtonColor;
    this.disabled = undefined as unknown as boolean;
    this.postfixIcon = undefined;
    this.prefixIcon = undefined;
    this.softDisabled = undefined as unknown as boolean;
    this.variant = undefined as unknown as ButtonVariant;

    this.role = 'button';
    this.type = BUTTON_DEFAULTS.TYPE;
  }

  protected override setSize() {
    // The avatar sizes and the button sizes are different.
    // If the given size is a valid avatar size, then we will not call the parent setSize() method.
    if (Object.values(AVATAR_SIZE).includes(this.avatarSize)) {
      return;
    }
    super.setSize(this.size);
  }

  // An empty setColor method is called to unset the color from the parent button component.
  protected override setColor() {}

  // An empty setVariant method is called to unset the variant from the parent button component.
  protected override setVariant() {}

  public override render() {
    return html`
      <mdc-avatar
        slot="prefixIcon"
        ?is-typing="${this.isTyping}"
        counter="${ifDefined(this.counter)}"
        icon-name="${ifDefined(this.iconName)}"
        initials="${ifDefined(this.initials)}"
        presence="${ifDefined(this.presence)}"
        size="${ifDefined(this.avatarSize)}"
        src="${ifDefined(this.src)}"
      ></mdc-avatar>
    `;
  }

  public static override styles: Array<CSSResult> = [...styles];
}

export default AvatarButton;
