/* eslint-disable max-classes-per-file */

import { Direction } from './spatialnavigationprovider.types';

/**
 * This event dispatched a back navigation triggered by the user.
 * The event's detail contains the goBackElement if any. It is cancelable to prevent click
 * action on the goBackElement
 */
export class NavBackEvent extends UIEvent {
  public readonly relevantTarget: EventTarget | null;

  constructor(relevantTarget: EventTarget | null = null) {
    super('navback', { bubbles: true, cancelable: true, composed: true, view: window });
    this.relevantTarget = relevantTarget;
  }
}

/**
 * This event dispatched before spatial navigation process any key event.
 * It can be canceled to prevent any action from spatial navigation, e.g.: back, click or calculating the next candidate.
 */
export class NavBeforeProcessEvent extends UIEvent {
  constructor() {
    super('navbeforeprocess', { bubbles: true, cancelable: true, composed: true, view: window });
  }
}

/**
 * This event is dispatched before the focus is changing to the next element.
 * It can be canceled to prevent the focus change. @see https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus
 */
export class NavBeforeFocusEvent extends UIEvent {
  /** The direction of the navigation as requested by the user */
  public readonly dir: Direction;

  /** The element that is going to be focused */
  public readonly relatedTarget: EventTarget | null;

  constructor(dir: Direction, relatedTarget: EventTarget | null) {
    super('navbeforefocus', { bubbles: true, cancelable: true, composed: true, view: window });
    this.dir = dir;
    this.relatedTarget = relatedTarget;
  }
}
