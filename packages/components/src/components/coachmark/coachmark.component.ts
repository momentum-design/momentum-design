import { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './coachmark.styles';
import Popover from '../popover/popover.component';
import { DEFAULTS } from './coachmark.constants';
import { PopoverTrigger } from '../popover/popover.types';

/**
 * Coachmark component is identical to the popover component, with the default value of certain properties changed.
 *
 * @dependency mdc-popover
 *
 * @tagname mdc-coachmark
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 *
 * @slot - Default slot for modal container
 *
 */
class Coachmark extends Popover {
  /**
   * Determines the events that cause the Popover to show.
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
   * The arrow visibility of the popover.
   * @default true
   */
  @property({ type: Boolean, attribute: 'show-arrow' })
  override showArrow: boolean = DEFAULTS.ARROW;

  /**
   * The close button visibility of the popover.
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-button' })
  override closeButton: boolean = DEFAULTS.CLOSE_BUTTON;

  constructor() {
    super();
    this.color = DEFAULTS.COLOR;
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default Coachmark;
