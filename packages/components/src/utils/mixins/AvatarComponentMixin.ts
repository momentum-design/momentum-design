import { property } from 'lit/decorators.js';
import { DEFAULTS as AVATAR_DEFAULTS } from '../../components/avatar/avatar.constants';
import type { AvatarSize } from '../../components/avatar/avatar.types';
import type { IconNames } from '../../components/icon/icon.types';
import type { PresenceType } from '../../components/presence/presence.types';
import type { Component } from '../../models';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface AvatarComponentMixinInterface {
  src?: string;
  initials?: string;
  presence?: PresenceType;
  avatarSize: AvatarSize;
  iconName?: IconNames;
  counter?: number;
  isTyping: boolean;
}

export const AvatarComponentMixin = <T extends Constructor<Component>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    /**
     * The src is the url which will be used to display the avatar.
     * When the src is loading, we will display the initials as a placeholder.
     */
    @property({ type: String })
    src?: string;

    /**
     * The initials to be displayed for the avatar.
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
    @property({ type: String, reflect: true, attribute: 'size' })
    avatarSize: AvatarSize = AVATAR_DEFAULTS.SIZE;

    /**
     * Name of the icon to be displayed inside the Avatar.
     * Must be a valid icon name.
     */
    @property({ type: String, attribute: 'icon-name' })
    iconName?: IconNames;

    /**
     * The counter is the number which can be displayed on the avatar.
     * The maximum number is 99 and if the give number is greater than 99,
     * then the avatar will be displayed as `99+`.
     * If the given number is a negative number,
     * then the avatar will be displayed as `0`.
     */
    @property({ type: Number })
    counter?: number;

    /**
     * Represents the typing indicator when the user is typing.
     * @default false
     */
    @property({ type: Boolean, attribute: 'is-typing' })
    isTyping = false;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<AvatarComponentMixinInterface> & T;
};
