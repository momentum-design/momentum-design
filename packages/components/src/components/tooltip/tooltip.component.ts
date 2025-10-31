import type { PropertyValues } from '@lit/reactive-element';
import type { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';

import { ROLE } from '../../utils/roles';
import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import styles from './tooltip.styles';
import type { TooltipType } from './tooltip.types';

/**
 * A tooltip is triggered by mouse hover or by keyboard focus
 * and will disappear upon mouse exit or focus change.
 *
 * Note: Tooltips cannot contain content that can be focused or interacted with.
 *
 * @tagname mdc-tooltip
 *
 * @event shown - (React: onShown) This event is dispatched when the tooltip is shown
 * @event hidden - (React: onHidden) This event is dispatched when the tooltip is hidden
 * @event created - (React: onCreated) This event is dispatched when the tooltip is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the tooltip is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-tooltip-max-width - The maximum width of the tooltip.
 * @cssproperty --mdc-tooltip-padding - The padding of the tooltip.
 * @cssproperty --mdc-tooltip-text-color - The text color of the tooltip.
 * @cssproperty --mdc-tooltip-text-color-contrast - The text color of the tooltip when the color is contrast.
 *
 */
class Tooltip extends Popover {
  /**
   * The type of tooltip.
   * - **description** sets aria-describedby on the trigger component which refers to the tooltip id.
   * - **label** sets aria-labelledby on the trigger component which refers to the tooltip id.
   * - **none** no aria props set on trigger component referring to the tooltip id.
   * @default 'description'
   */
  @property({ type: String, attribute: 'tooltip-type', reflect: true })
  tooltipType: TooltipType = DEFAULTS.TOOLTIP_TYPE;

  override connectedCallback(): void {
    super.connectedCallback();
    this.backdrop = false;
    this.delay = this.delay || DEFAULTS.DELAY;
    this.focusTrap = false;
    this.hideOnBlur = true;
    this.hideOnEscape = true;
    this.interactive = false;
    this.offset = this.offset || DEFAULTS.OFFSET;
    this.placement = this.placement || DEFAULTS.PLACEMENT;
    this.role = ROLE.TOOLTIP;
    this.trigger = 'mouseenter focusin';

    this.preventScroll = false;
    this.flip = false;
    this.preventScroll = false;
    this.closeButton = false;
    this.hideOnOutsideClick = false;
    this.focusBackToTrigger = false;
    this.size = false;
    this.disableAriaExpanded = true;
  }

  /**
   * Sets the type attribute for the tooltip component.
   * If the provided type is not included in the TOOLTIP_TYPES,
   * it defaults to the value specified in DEFAULTS.TOOLTIP_TYPE.
   *
   * @param type - The type to set.
   */
  private setTooltipType(type: TooltipType): void {
    this.setAttribute('tooltip-type', Object.values(TOOLTIP_TYPES).includes(type) ? type : DEFAULTS.TOOLTIP_TYPE);
  }

  /**
   * Updates the tooltip id if it is empty.
   */
  private async onIdUpdated(): Promise<void> {
    // Set tooltip ID if not set.
    if (this.id.length === 0) {
      this.id = `mdc-tooltip-${uuidv4()}`;
    }

    await this.updateComplete;
    // Update the aria props on the trigger component to updated tooltip id.
    if (this.triggerElement) {
      switch (this.tooltipType) {
        case TOOLTIP_TYPES.DESCRIPTION:
          this.triggerElement.setAttribute('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          this.triggerElement.setAttribute('aria-labelledby', this.id);
          break;
        default:
          break;
      }
    }
  }

  /**
   * Updates the placement attribute if it is not a valid placement.
   * Overriding the default from Popover
   */
  private onPlacementUpdated(): void {
    if (!Object.values(POPOVER_PLACEMENT).includes(this.placement)) {
      this.placement = DEFAULTS.PLACEMENT;
    }
  }

  /**
   * Updates the tooltip type attribute and sets the appropriate aria props on the trigger component.
   * @param changedProperties - The changed properties.
   */
  private onTooltipTypeUpdated(changedProperties: PropertyValues): void {
    const previousTooltipType = changedProperties.get('tooltipType');

    if (!Object.values(TOOLTIP_TYPES).includes(this.tooltipType)) {
      this.setTooltipType(DEFAULTS.TOOLTIP_TYPE);
    }

    if (this.triggerElement) {
      switch (this.tooltipType) {
        case TOOLTIP_TYPES.DESCRIPTION:
          if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            this.triggerElement.removeAttribute('aria-labelledby');
          }
          this.triggerElement.setAttribute('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            this.triggerElement.removeAttribute('aria-describedby');
          }
          this.triggerElement.setAttribute('aria-labelledby', this.id);
          break;
        default:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            this.triggerElement.removeAttribute('aria-describedby');
          } else if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            this.triggerElement.removeAttribute('aria-labelledby');
          }
          break;
      }
    }
  }

  public override async update(changedProperties: PropertyValues): Promise<void> {
    super.update(changedProperties);

    if (changedProperties.has('id')) {
      await this.onIdUpdated();
    }
    if (changedProperties.has('placement')) {
      this.onPlacementUpdated();
    }
    if (changedProperties.has('tooltipType')) {
      this.onTooltipTypeUpdated(changedProperties);
    }
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default Tooltip;
