import { CSSResult, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import styles from './buttonavatar.styles';
import Button from '../button/button.component';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
import { AvatarSize } from '../avatar/avatar.types';
import { DEFAULTS } from '../avatar/avatar.constants';

/**
 * The `mdc-buttonavatar` component is an interactable version of the `mdc-avatar` component.
 *
 * This component is made using the `mdc-button` component.
 * The button component acts as a wrapper for the avatar component.
 *
 * @dependecy mdc-avatar
 *
 * @tagname mdc-buttonavatar
 */
class ButtonAvatar extends AvatarComponentMixin(Button) {
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
  override size: AvatarSize = DEFAULTS.SIZE;

  constructor() {
    super();
    this.unsetButtonUnusedProps();
  }

  private unsetButtonUnusedProps() {
    this.active = undefined;
    this.color = undefined;
    this.disabled = undefined;
    this.postfixIcon = undefined;
    this.prefixIcon = undefined;
    this.softDisabled = undefined;
    this.variant = undefined;
  }

  public override render() {
    const { src, initials, size, presence, iconName, counter, isTyping } = this;
    return html`
      <mdc-avatar
        slot="prefixIcon"
        src="${ifDefined(src)}"
        initials="${ifDefined(initials)}"
        presence="${ifDefined(presence)}"
        size="${ifDefined(size)}"
        icon-name="${ifDefined(iconName)}"
        counter="${ifDefined(counter)}"
        ?is-typing="${isTyping}"
      ></mdc-avatar>
    `;
  }

  public static override styles: Array<CSSResult> = [...Button.styles, ...styles];
}

export default ButtonAvatar;
