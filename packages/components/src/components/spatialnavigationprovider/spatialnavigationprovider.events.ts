/* eslint-disable max-classes-per-file */

import type { Actions } from '../../utils/mixins/KeyToActionMixin';

import type { SpatialNavigationNavigationEvents } from './spatialnavigationprovider.types';

/**
 * Generic spatial navigation event.
 * It can be canceled to prevent the focus change.
 *
 * It is very similar to NavigationEvent defined in css-nav-1 spec,
 * but the `dir` property is replaced with `action` to support "enter" and "escape" over the direction actions.
 *
 * @see https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus
 */
export class SpatialNavigationEvent extends UIEvent {
  /** The navigation action requested by the user */
  public readonly action?: Actions;

  /** The element that is going to be focused or the last searched focus area */
  public readonly relatedTarget: EventTarget | null;

  constructor(type: SpatialNavigationNavigationEvents, relatedTarget: EventTarget | null, action?: Actions) {
    super(type, { bubbles: true, cancelable: true, composed: true, view: window });
    this.action = action;
    this.relatedTarget = relatedTarget;
  }
}
