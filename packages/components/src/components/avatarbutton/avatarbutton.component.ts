import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import { DEFAULTS as AVATAR_DEFAULTS } from '../avatar/avatar.constants';
import type { AvatarSize } from '../avatar/avatar.types';
import Button from '../button/button.component';
import { DEFAULTS as BUTTON_DEFAULTS } from '../button/button.constants';
import type { ButtonColor, ButtonVariant, IconButtonSize, PillButtonSize } from '../button/button.types';
import { SIZE as AVATAR_SIZES } from '../presence/presence.constants';
import styles from './avatarbutton.styles';

/**
 * The `mdc-avatarbutton` component is an interactable version of the `mdc-avatar` component.
 *
 * This component is made using the `mdc-button` component.
 * The button component acts as a wrapper for the avatar component.
 *
 * @dependency mdc-avatar
 *
 * @tagname mdc-avatarbutton
 */
class AvatarButton extends AvatarComponentMixin(Button) {
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
  override size: AvatarSize = AVATAR_DEFAULTS.SIZE;

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
    if (Object.values(AVATAR_SIZES).includes(this.size)) {
      return;
    }
    super.setSize(this.size as unknown as PillButtonSize | IconButtonSize);
  }

  public override render() {
    return html`
      <mdc-avatar
        slot="prefixIcon"
        ?is-typing="${this.isTyping}"
        counter="${ifDefined(this.counter)}"
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
