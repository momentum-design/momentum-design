import { LitElement } from 'lit';
import { ContextConsumer } from '@lit/context';

import { KEYS } from '../keys';
import providerUtils from '../provider';
import SpatialNavigationProvider from '../../components/spatialnavigationprovider';
import SpatialNavigationProviderContext from '../../components/spatialnavigationprovider/spatialnavigationprovider.context';

import type { Constructor } from './index.types';

export const ACTIONS = {
  /** Action key, e.g., Enter */
  ENTER: 'enter',
  /** Back key, e.g., Escape/Back/Cancel */
  ESCAPE: 'escape',
  /** Navigation key up */
  UP: 'up',
  /** Navigation key down */
  DOWN: 'down',
  /** Navigation key left */
  LEFT: 'left',
  /** Navigation key right */
  RIGHT: 'right',
  /** Space key, some actions and scrolling */
  SPACE: 'space',
  /** Tab key */
  TAB: 'tab',
  /** Home key */
  HOME: 'home',
  /** End key */
  END: 'end',
} as const;

export type Actions = (typeof ACTIONS)[keyof typeof ACTIONS];

/**
 * Default key to action mapping if no spatial navigation context is available
 */
const DEFAULT_KEY_TO_ACTION: Record<string, Actions> = {
  [KEYS.ARROW_UP]: ACTIONS.UP,
  [KEYS.ARROW_DOWN]: ACTIONS.DOWN,
  [KEYS.ARROW_LEFT]: ACTIONS.LEFT,
  [KEYS.ARROW_RIGHT]: ACTIONS.RIGHT,
  [KEYS.ENTER]: ACTIONS.ENTER,
  [KEYS.SPACE]: ACTIONS.SPACE,
  [KEYS.ESCAPE]: ACTIONS.ESCAPE,
  [KEYS.TAB]: ACTIONS.TAB,
  [KEYS.HOME]: ACTIONS.HOME,
  [KEYS.END]: ACTIONS.END,
};

export type KeyboardNavModes = 'spatial' | 'default';

export const NAV_MODES = {
  /** Normal navigation mode, focus moved with Tab and Shift+Tab keys */
  DEFAULT: 'default',
  /** Spatial navigation mode, focus moved with arrow keys */
  SPATIAL: 'spatial',
} as const;

export interface KeyToActionInterface {
  /** @internal */
  readonly spatialNavigationContext?: ContextConsumer<typeof SpatialNavigationProviderContext, any>;
  /**
   * Returns a (abstract) action for the given keyboard event based on the current spatial navigation context
   *
   * @param evt - The keyboard event
   * @param applyWritingDirection - For right-to-left writing direction, left/right actions are swapped if set to true
   * @returns The mapped key or `undefined` if no mapping exists
   */
  getActionForKeyEvent(evt: KeyboardEvent, applyWritingDirection?: boolean): Actions | undefined;

  /**
   * Returns the current keyboard navigation mode
   */
  getKeyboardNavMode(): KeyboardNavModes;

  /**
   * Returns `true` if the given action is a direction action (up, down, left, right)
   * @param action - The action to check
   * @returns `true` if the action is a direction action, otherwise `false`
   */
  isDirectionAction(action: Actions | undefined): boolean;
}

/**
 * Mixin to provide abstract key mapping for navigation and actions keys.
 *
 * Instead of using hardcoded key names this mixin provides a way to map keys to abstract actions
 * and use different key mappings based on context.
 *
 * All components should implement this mixin if it handles keyboard events for navigation or actions,
 * e.g. buttons, lists, popups, etc.
 *
 * Navigation keys mapped directly:
 * - 'up'
 * - 'down'
 * - 'left'
 * - 'right'
 * - 'tab'
 * - 'home'
 * - 'end'
 *
 * Action keys:
 * - 'action' (Enter key)
 *
 * Special keys:
 * - 'space' (Space key)
 *
 * Space is separated from action keys as it is
 *  - not always trigger the same action as the enter key
 *  - not every platform has a space key equivalent for example on a TV remote or gamepad
 *  - often used for scrolling as well.
 *
 *  From the above lists only 'up', 'down', 'left', 'right', 'action' and 'abort' are mandatory to implement,
 *  because those are essential for spatial navigation and basic actions and all platforms have equivalents for those.
 */
export const KeyToActionMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    readonly spatialNavigationContext = providerUtils.consume({
      host: this,
      context: SpatialNavigationProvider.Context,
    });

    /** @see KeyToActionInterface.getKeyboardNavMode */
    getKeyboardNavMode() {
      const provider = this.spatialNavigationContext?.value as SpatialNavigationProvider | undefined;
      return provider ? NAV_MODES.SPATIAL : NAV_MODES.DEFAULT;
    }

    /** @see KeyToActionInterface.getMappedKeyFromEvent */
    getActionForKeyEvent(evt: KeyboardEvent, applyWritingDirection: boolean = false): Actions | undefined {
      const mapping = this.spatialNavigationContext?.value?.keyToActionMap ?? DEFAULT_KEY_TO_ACTION;
      const key = mapping[evt.key];

      if (applyWritingDirection) {
        const isRtl = window.getComputedStyle(this).direction === 'rtl';
        if (!isRtl) return key;
        if (key === ACTIONS.LEFT) return ACTIONS.RIGHT;
        if (key === ACTIONS.RIGHT) return ACTIONS.LEFT;
      }
      return key;
    }

    /** @see KeyToActionInterface.isDirectionAction */
    isDirectionAction(action: Actions): boolean {
      return action === ACTIONS.UP || action === ACTIONS.DOWN || action === ACTIONS.LEFT || action === ACTIONS.RIGHT;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<KeyToActionInterface> & T;
};
