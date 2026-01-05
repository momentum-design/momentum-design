import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, queryAssignedNodes, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { PopoverPlacement } from '../popover/popover.types';

import { DEFAULTS } from './toggletip.constants';
import styles from './toggletip.styles';

/**
 * A toggletip is triggered by clicking a trigger element and can contain interactive content.
 * Unlike tooltips which disappear on blur, toggletips remain visible until explicitly dismissed
 * by clicking outside, pressing escape, or clicking the optional close button.
 *
 * Toggletips are ideal for displaying contextual help text, additional information, or interactive
 * elements like links and buttons that users need time to read and interact with.
 *
 * The component uses [mdc-screenreaderannouncer](?path=/docs/components-screenreaderannouncer--docs) internally to announce the toggletip content
 * to screen readers when shown, ensuring proper accessibility support.
 *
 * **Note:** This component extends the Popover component with toggletip-specific defaults.
 *
 * ## When to use
 * Use toggletips when you need to display interactive content or detailed information that requires
 * user interaction. For simple, non-interactive text hints, use tooltips instead.
 *
 * ## Accessibility
 * - Toggletip content is announced to screen readers when shown
 * - Use `screenreader-announcer-identity` attribute to control announcement placement in the DOM
 * - Focus is trapped within the toggletip when open, allowing navigation of interactive elements
 * - Keyboard shortcuts: Escape to close, Tab to move between elements
 * - Focus returns to the trigger element when the toggletip is closed
 *
 * @dependency mdc-screenreaderannouncer
 * @dependency mdc-button
 *
 * @tagname mdc-toggletip
 *
 * @event shown - (React: onShown) This event is dispatched when the toggletip is shown
 * @event hidden - (React: onHidden) This event is dispatched when the toggletip is hidden
 * @event created - (React: onCreated) This event is dispatched when the toggletip is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the toggletip is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-toggletip-max-width - The maximum width of the toggletip.
 * @cssproperty --mdc-toggletip-text-color - The text color of the toggletip.
 * @cssproperty --mdc-toggletip-text-color-contrast - The text color of the toggletip when the color is contrast.
 *
 * @slot - Default slot for the toggletip content
 */
class ToggleTip extends Popover {
  @queryAssignedNodes()
  private defaultSlotNodes!: Array<Node>;

  /** @internal */
  @state() currentAnnouncement = '';

  /**
   * The ID of an element in the DOM to which announcement elements will be appended.
   * If not set, a visually hidden div element will be created in the DOM.
   */
  @property({ type: String, reflect: true, attribute: 'screenreader-announcer-identity' })
  screenreaderAnnouncerIdentity?: string;

  /**
   * The placement of the popover.
   * - **top**
   * - **top-start**
   * - **top-end**
   * - **bottom**
   * - **bottom-start**
   * - **bottom-end**
   * - **left**
   * - **left-start**
   * - **left-end**
   * - **right**
   * - **right-start**
   * - **right-end**
   * @default bottom
   */
  @property({ type: String, reflect: true })
  override placement: PopoverPlacement = DEFAULTS.PLACEMENT;

  override connectedCallback(): void {
    super.connectedCallback();
    this.closeButton = this.closeButton ?? DEFAULTS.CLOSE_BUTTON;
    this.closeButtonAriaLabel = DEFAULTS.CLOSE_BUTTON_ARIA_LABEL;
    this.trigger = DEFAULTS.CLICK;
    this.showArrow = DEFAULTS.SHOW_ARROW;
    this.interactive = true;
    this.backdrop = true;
    this.hideOnBlur = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.disableAriaExpanded = false;
    this.focusBackToTrigger = true;
    this.focusTrap = true;
  }

  /**
   * @returns The text content of all the nodes in the default slot, joined by a space.
   *          If there are no nodes, an empty string is returned.
   */
  private getToggleTipText(): string {
    return (
      this.defaultSlotNodes
        ?.map((node: Node) => node.textContent)
        .join(' ')
        ?.trim() || ''
    );
  }

  /**
   * Updates the placement attribute if it is not a valid placement.
   * Default placement for toggle tip is top.
   */
  private onPlacementUpdated(): void {
    if (!Object.values(POPOVER_PLACEMENT).includes(this.placement)) {
      this.placement = DEFAULTS.PLACEMENT;
    }
  }

  protected override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('placement')) {
      this.onPlacementUpdated();
    }

    if (changedProperties.has('visible')) {
      this.currentAnnouncement = this.visible ? this.getToggleTipText() : '';
    }
  }

  public override render() {
    return html`
      ${super.render()}
      <mdc-screenreaderannouncer
        identity="${ifDefined(this.screenreaderAnnouncerIdentity)}"
        announcement="${this.currentAnnouncement}"
        delay="300"
      >
      </mdc-screenreaderannouncer>
    `;
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default ToggleTip;
