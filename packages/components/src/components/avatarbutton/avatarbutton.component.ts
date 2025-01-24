import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AvatarComponentMixin } from '../../utils/mixins/AvatarComponentMixin';
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
 * @dependency mdc-avatar
 *
 * @tagname mdc-avatarbutton
 */
class AvatarButton extends AvatarComponentMixin(Buttonsimple) {
    /**
   * Aria-label attribute to be set for accessibility
   */
    @property({ type: String, attribute: 'aria-label' })
    override ariaLabel: string | null = null;

    constructor() {
      super();

      this.active = undefined as unknown as boolean;
      this.disabled = undefined as unknown as boolean;
      this.softDisabled = undefined as unknown as boolean;
      this.role = 'button';
      this.type = BUTTON_DEFAULTS.TYPE;
    }

    override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
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
