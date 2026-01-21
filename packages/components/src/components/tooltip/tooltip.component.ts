import type { PropertyValues } from '@lit/reactive-element';
import type { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';

import { ROLE } from '../../utils/roles';
import Popover from '../popover/popover.component';
import { DEFAULTS as POPOVER_DEFAULTS, POPOVER_PLACEMENT } from '../popover/popover.constants';
import { hasOverflowMixin } from '../../utils/dom';
import Text from '../text/text.component';
import providerUtils from '../../utils/provider';
import TextOverflowObserverProvider from '../textoverflowobserverprovider';

import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import styles from './tooltip.styles';
import type { TooltipType } from './tooltip.types';

/**
 * A Tooltip is a special type of popovers that provide additional context to content on the screen. <br/>
 * Tooltip is triggered by mouse hover or by keyboard focus and will disappear upon mouse exit or focus change.
 *
 * Because of this, tooltips cannot contain content that can be focused or interacted with.
 * When a tooltip must contain a focusable element like a link or button, use a toggle tip instead.
 *
 * A tooltip is triggered by mouse hover or by keyboard focus
 * and will disappear upon mouse exit or focus change.
 *
 * Note:
 *  - Tooltips cannot contain content that can be focused or interacted with.
 *  - Tooltips will contain the default `aria-hidden="true"` so that VO will never focus the tooltip.
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

  /**
   * If true, the tooltip will only be shown when the trigger element's content is overflowing on the x-axis.
   *
   * Supports the following components:
   * - mdc-button
   * - mdc-text
   *
   * @default false
   */
  @property({ type: Boolean, attribute: 'only-show-when-trigger-overflows', reflect: true })
  onlyShowWhenTriggerOverflows: boolean = DEFAULTS.ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS;

  private readonly textoverflowobserverprovider = providerUtils.consume({
    host: this,
    context: TextOverflowObserverProvider.Context,
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.TOOLTIP;
    // We don't want the tooltip to be visible for screen readers as they are not focusable
    this.ariaHidden = DEFAULTS.ARIA_HIDDEN;
    // Tooltip defaults
    this.backdrop = DEFAULTS.BACKDROP;
    this.delay = this.delay || DEFAULTS.DELAY;
    this.disableAriaExpanded = DEFAULTS.DISABLE_ARIA_EXPANDED;
    this.hideOnBlur = DEFAULTS.HIDE_ON_BLUR;
    this.hideOnEscape = DEFAULTS.HIDE_ON_ESCAPE;
    this.offset = this.offset || DEFAULTS.OFFSET;
    this.placement = this.placement || DEFAULTS.PLACEMENT;
    this.trigger = DEFAULTS.TRIGGER;

    // Popover defaults
    this.closeButton = POPOVER_DEFAULTS.CLOSE_BUTTON;
    this.disableFlip = POPOVER_DEFAULTS.DISABLE_FLIP;
    this.focusBackToTrigger = POPOVER_DEFAULTS.FOCUS_BACK;
    this.focusTrap = POPOVER_DEFAULTS.FOCUS_TRAP;
    this.hideOnOutsideClick = POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE;
    this.interactive = POPOVER_DEFAULTS.INTERACTIVE;
    this.preventScroll = POPOVER_DEFAULTS.PREVENT_SCROLL;
    this.size = POPOVER_DEFAULTS.SIZE;
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
  private onTooltipTypeUpdated(changedProperties: PropertyValues<this>): void {
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

  protected override async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    const { triggerElement } = this;
    if (oldValue === newValue || !triggerElement) {
      return;
    }

    if (!newValue) {
      // Timing is critical when the popover pushed/popped from the stack.
      //
      // Timing here:
      // Tooltip closes -> New Popover opens -> Tooltip popped from the stack -> it popes out the new popover as well.
      //
      // It happens because by default the popped element automatically pop the element above it in the stack.
      // To avoid this, we explicitly remove the tooltip from the stack before it is popped.
      this.depthManager.remove([this]);
    }

    await super.isOpenUpdated(oldValue, newValue);
  }

  private onOnlyShowWhenTriggerOverflowsUpdated(): void {
    if (!(this.triggerElement instanceof Text)) {
      return;
    }

    if (this.onlyShowWhenTriggerOverflows) {
      this.textoverflowobserverprovider.value?.observeResizeForOverflow(this.triggerElement);
    } else {
      this.textoverflowobserverprovider.value?.unobserveResizeForOverflow(this.triggerElement);
    }
  }

  public override async update(changedProperties: PropertyValues<this>): Promise<void> {
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
    if (changedProperties.has('onlyShowWhenTriggerOverflows')) {
      this.onOnlyShowWhenTriggerOverflowsUpdated();
    }
  }

  public override show() {
    if (this.onlyShowWhenTriggerOverflows && this.triggerElement && hasOverflowMixin(this.triggerElement)) {
      if (!this.triggerElement.isWidthOverflowing()) {
        return;
      }
    }

    super.show();
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default Tooltip;
