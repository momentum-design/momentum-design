import { property, queryAssignedNodes } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';
import type { CSSResult } from 'lit';
import type { PropertyValues } from '@lit/reactive-element';
import { DEFAULTS, TOOLTIP_TYPES } from './tooltip.constants';
import Popover from '../popover/popover.component';
import styles from './tooltip.styles';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import type { TooltipType } from './tooltip.types';

/**
 * A tooltip is triggered by mouse hover or by keyboard focus
 * and will disappear upon mouse exit or focus change.
 *
 * Note: Tooltips cannot contain content that can be focused or interacted with.
 *
 * @tagname mdc-tooltip
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

  @queryAssignedNodes()
  private defaultSlotNodes!: Array<Node>;

  constructor() {
    super();
    this.backdrop = false;
    this.color = DEFAULTS.COLOR;
    this.delay = DEFAULTS.DELAY;
    this.focusTrap = false;
    this.hideOnBlur = true;
    this.hideOnEscape = true;
    this.interactive = false;
    this.offset = DEFAULTS.OFFSET;
    this.placement = DEFAULTS.PLACEMENT;
    this.role = 'tooltip';
    this.showArrow = true;
    this.trigger = 'mouseenter focusin';

    this.visible = false;
    this.enabledFocusTrap = false;
    this.enabledPreventScroll = false;
    this.flip = true;
    this.focusTrap = false;
    this.preventScroll = false;
    this.closeButton = false;
    this.hideOnOutsideClick = false;
    this.focusBackToTrigger = false;
    this.size = false;
    this.disableAriaExpanded = true;
  }

  /**
   * @returns The tooltip text.
   */
  private getTooltipText(): string {
    return (
      this.defaultSlotNodes
        ?.map((node) => node.textContent)
        .join(' ')
        ?.trim() || ''
    );
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
  private onIdUpdated(): void {
    // Set tooltip ID if not set.
    if (this.id.length === 0) {
      this.id = `mdc-tooltip-${uuidv4()}`;
    }
    // Update the aria props on the trigger component to updated tooltip id.
    const triggerElement = document.getElementById(this.triggerID);
    if (triggerElement) {
      switch (this.tooltipType) {
        case TOOLTIP_TYPES.DESCRIPTION:
          triggerElement.setAttribute('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          triggerElement.setAttribute('aria-labelledby', this.id);
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

    const triggerElement = document.getElementById(this.triggerID);
    if (triggerElement) {
      const tooltipText = this.getTooltipText();
      switch (this.tooltipType) {
        case TOOLTIP_TYPES.DESCRIPTION:
          if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            triggerElement.removeAttribute('aria-labelledby');
          }
          triggerElement.setAttribute('aria-describedby', this.id);
          break;
        case TOOLTIP_TYPES.LABEL:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            triggerElement.removeAttribute('aria-describedby');
          }
          triggerElement.setAttribute('aria-labelledby', this.id);
          break;
        default:
          if (previousTooltipType === TOOLTIP_TYPES.DESCRIPTION) {
            triggerElement.removeAttribute('aria-describedby');
          } else if (previousTooltipType === TOOLTIP_TYPES.LABEL) {
            triggerElement.removeAttribute('aria-labelledby');
          }
          break;
      }
      if (tooltipText.length > 0 && this.tooltipType !== TOOLTIP_TYPES.NONE && !this.ariaLabel) {
        this.ariaLabel = tooltipText;
      }
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('id')) {
      this.onIdUpdated();
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
