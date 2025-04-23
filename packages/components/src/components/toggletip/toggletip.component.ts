import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, queryAssignedNodes, state } from 'lit/decorators.js';
import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { DEFAULTS } from './toggletip.constants';
import styles from './toggletip.styles';

/**
 * A toggletip is triggered by clicking a trigger element.
 *
 * It can contain interactive content and can be closed by
 * clicking outside the toggletip or pressing the escape key.
 *
 * It can have optional close button to close the toggletip.
 *
 * Toggletip component uses `mdc-screenreaderannouncer` internally to
 * announce the toggletip text content with screen readers when the toggletip is shown.
 *
 * `screenreader-announcer-identity` attribute can be used to provide ID of an element
 * in DOM to which announcement elements are added. If not set, a visually hidden
 * div element is created in DOM to which announcement elements are added.
 *
 * Please refer to the `mdc-screenreaderannouncer` component for more details.
 *
 * @dependency mdc-screenreaderannouncer
 * @dependency mdc-button
 *
 * @tagname mdc-toggletip
 *
 * @event shown - (React: onShown) This event is dispatched when the toggletip is shown
 * @event hidden - (React: onHidden) This event is dispatched when the toggletip is hidden
 * @event created - (React: onCreated) This event is dispatched when the toggletip is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the toggletip
 * is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-toggletip-max-width - The maximum width of the toggletip.
 * @cssproperty --mdc-toggletip-text-color - The text color of the toggletip.
 * @cssproperty --mdc-toggletip-text-color-contrast - The text color of the toggletip
 *  when the color is contrast.
 *
 * @slot - Default slot for the toggletip content
 */
class ToggleTip extends Popover {
  @queryAssignedNodes()
  private defaultSlotNodes!: Array<Node>;

  /** @internal */
  @state() currentAnnouncement = '';

  /**
    * Set this attribute with the id of the element in the DOM, to which announcement
    * elements will be appended.
    * If an id is provided, the announcement elements will be appended to this element.
    * If id is not provided, a visually hidden div element will be created in the DOM.
    *
    * Please refer to the `mdc-screenreaderannouncer` component for more details.
  */
  @property({ type: String, reflect: true, attribute: 'screenreader-announcer-identity' })
  screenreaderAnnouncerIdentity = '';

  override connectedCallback(): void {
    super.connectedCallback();
    this.closeButton = DEFAULTS.CLOSE_BUTTON;
    this.closeButtonAriaLabel = DEFAULTS.CLOSE_BUTTON_ARIA_LABEL;
    this.placement = DEFAULTS.PLACEMENT;
    this.trigger = DEFAULTS.CLICK;
    this.showArrow = DEFAULTS.SHOW_ARROW;
    this.interactive = true;
    this.backdrop = true;
    this.hideOnBlur = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.disableAriaExpanded = false;
    this.focusBackToTrigger = true;
  }

  /**
   * @returns The text content of all the nodes in the default slot, joined by a space.
   *          If there are no nodes, an empty string is returned.
   */
  private getToggleTipText(): string {
    return this.defaultSlotNodes?.map((node: Node) => node.textContent).join(' ')?.trim() || '';
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
        identity="${this.screenreaderAnnouncerIdentity}"
        announcement="${this.currentAnnouncement}"
        delay="300">
      </mdc-screenreaderannouncer>
    `;
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default ToggleTip;
