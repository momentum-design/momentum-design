import type { PropertyValues } from '@lit/reactive-element';
import type { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';

import { ROLE } from '../../utils/roles';
import Popover from '../popover/popover.component';
import { DEFAULTS as POPOVER_DEFAULTS, POPOVER_PLACEMENT } from '../popover/popover.constants';

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
 * When the tooltip-type is set to "description", the tooltip sets `aria-describedby` on the trigger component which refers to the tooltip id. In case of "label", it sets `aria-labelledby` on the trigger component which refers to the tooltip id.
 * For components that support `data-aria-describedby` or `data-aria-labelledby` properties, those properties are set accordingly.
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

  private setAriaAttributeOnTrigger(attribute: 'aria-describedby' | 'aria-labelledby', value: string): void {
    if (!this.triggerElement) return;

    // Convert 'aria-describedby' to 'dataAriaDescribedby'
    // Regex logic: Find a hyphen followed by a letter and replace it with the uppercase version of that letter.
    const propertyName = `data-${attribute}`.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    // Check if the property exists on the Lit element instance
    if (propertyName in this.triggerElement) {
      (this.triggerElement as any)[propertyName] = value;
    }
    // Check if the element has the property set (but not the attribute)
    else {
      this.triggerElement.setAttribute(attribute, value);
    }
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
          this.setAriaAttributeOnTrigger('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          this.setAriaAttributeOnTrigger('aria-labelledby', this.id);
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

  private removeAriaAttributeFromTrigger(attribute: 'aria-describedby' | 'aria-labelledby'): void {
    if (!this.triggerElement) return;

    // Convert 'aria-describedby' to 'dataAriaDescribedby'
    // Regex logic: Find a hyphen followed by a letter and replace it with the uppercase version of that letter.
    const propertyName = `data-${attribute}`.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    // Check if the property exists on the Lit element instance
    if (propertyName in this.triggerElement) {
      (this.triggerElement as any)[propertyName] = '';
    }
    // Check if the element has the attribute
    else if (this.triggerElement.hasAttribute(attribute)) {
      this.triggerElement.removeAttribute(attribute);
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
      // AI-Assisted
      switch (this.tooltipType) {
        case TOOLTIP_TYPES.DESCRIPTION:
          if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            this.removeAriaAttributeFromTrigger('aria-labelledby');
          }
          this.setAriaAttributeOnTrigger('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            this.removeAriaAttributeFromTrigger('aria-describedby');
          }
          this.setAriaAttributeOnTrigger('aria-labelledby', this.id);
          break;
        default:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            this.removeAriaAttributeFromTrigger('aria-describedby');
          } else if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            this.removeAriaAttributeFromTrigger('aria-labelledby');
          }
          break;
      }
      // End AI-Assisted
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
