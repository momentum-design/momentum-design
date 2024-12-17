import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import { DEFAULTS as AVATAR_DEFAULTS } from '../avatar/avatar.constants';
import type { AvatarSize } from '../avatar/avatar.types';
import Button from '../button/button.component';
import { DEFAULTS as BUTTON_DEFAULTS } from '../button/button.constants';
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
    this.active = undefined;
    this.color = undefined;
    this.disabled = undefined;
    this.postfixIcon = undefined;
    this.prefixIcon = undefined;
    this.softDisabled = undefined;
    this.variant = undefined;
    this.role = 'button';
    this.type = BUTTON_DEFAULTS.TYPE;
  }

  public override render() {
    return html`
      <mdc-avatar
        slot="prefixIcon"
        src="${ifDefined(this.src)}"
        initials="${ifDefined(this.initials)}"
        presence="${ifDefined(this.presence)}"
        size="${ifDefined(this.size)}"
        icon-name="${ifDefined(this.iconName)}"
        counter="${ifDefined(this.counter)}"
        ?is-typing="${this.isTyping}"
      ></mdc-avatar>
    `;
  }

  public static override styles: Array<CSSResult> = [...styles];
}

export default AvatarButton;
