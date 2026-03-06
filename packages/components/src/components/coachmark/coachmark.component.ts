import { property } from 'lit/decorators.js';

import Popover from '../popover/popover.component';
import type { PopoverTrigger } from '../popover/popover.types';

import { DEFAULTS } from './coachmark.constants';

/**
 * A Coachmark is a contextual guidance component used to highlight a specific UI element and explain its purpose or functionality.
 * It is typically shown as part of onboarding, feature discovery, or progressive education within the product.
 *
 * Coachmark component based on top of the popover component,
 * with the default value of certain properties changed.
 * Coachmark component will always have an arrow attached to it.
 * The color of the coachmark is contrast.
 *
 * ## When to use
 * - Introducing a new or complex feature to users.
 * - Drawing attention to a UI element that might otherwise be missed.
 * - Providing step-by-step guidance in an onboarding or walkthrough flow.
 *
 * ## Accessibility
 * - The default role of coachmark is `"dialog"`, which can be changed via the `role` attribute.
 * - aria-label or aria-labelledby can be provided to give the coachmark an accessible name.
 *
 * @dependency mdc-popover
 *
 * @tagname mdc-coachmark
 *
 * @event shown - (React: onShown) This event is dispatched when the coachmark is shown
 * @event hidden - (React: onHidden) This event is dispatched when the coachmark is hidden
 * @event created - (React: onCreated) This event is dispatched when the coachmark is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the coachmark is
 * destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-border-color - border color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 * @cssproperty --mdc-popover-elevation-3 - elevation of the popover
 *
 * @slot - Default slot for modal container
 */
class Coachmark extends Popover {
  /**
   * Determines the events that cause the Coachmark to show.
   * Multiple event names should be separated by spaces.
   * For example to allow both click and hover, use 'click mouseenter' as the trigger.
   * - **click**
   * - **mouseenter**
   * - **focusin**
   * - **manual**
   * @default manual
   */
  @property({ type: String, reflect: true })
  override trigger: PopoverTrigger = DEFAULTS.TRIGGER;

  /**
   * The arrow visibility of the Coachmark.
   * @default true
   */
  @property({ type: Boolean, attribute: 'show-arrow' })
  override showArrow: boolean = DEFAULTS.ARROW;

  /**
   * The close button visibility of the Coachmark.
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-button' })
  override closeButton: boolean = DEFAULTS.CLOSE_BUTTON;

  /**
   * Disable aria-expanded attribute on trigger element.
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-expanded' })
  override disableAriaExpanded: boolean = DEFAULTS.DISABLE_ARIA_EXPANDED;

  override connectedCallback(): void {
    super.connectedCallback();
    this.color = DEFAULTS.COLOR;
    this.showArrow = DEFAULTS.ARROW;
  }
}

export default Coachmark;
