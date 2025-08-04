import type { CSSResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { ROLE } from '../../utils/roles';
import ListItem from '../listitem/listitem.component';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { KEYS } from '../../utils/keys';

import { ARROW_ICONS, ARROW_DIRECTIONS, ARROW_POSITIONS } from './menuitem.constants';
import type { ArrowPositions, ArrowDirections } from './menuitem.types';
import styles from './menuitem.styles';

/**
 * menuitem component is inherited by listitem component with the role set `menuitem`.<br/>
 * A menu item can contain an icon on the leading or trailing side.
 *
 * The leading and trailing slots can be used to display controls and text.<br/>
 * Based on the leading/trailing slot, the position of the controls and text can be adjusted.
 *
 * Please use element with role=menu as a parent element even when there is only menuitem for a11y purpose.
 * For example mdc-menupopover or mdc-menubar.
 *
 * Menu item has `name` and `value` attribute that can be used to identify the menu item when it is selected.
 *
 * @dependency mdc-text
 * @dependency mdc-icon
 * @dependency mdc-tooltip
 *
 * @tagname mdc-menuitem
 *
 * @slot leading-controls - slot for menu item controls to appear of leading end.
 * @slot leading-text-primary-label - slot for menu item primary label.
 * @slot leading-text-secondary-label - slot for menu item secondary label.
 * @slot leading-text-tertiary-label - slot for menu item tertiary label.
 * @slot trailing-text-side-header - slot for menu item side header text.
 * @slot trailing-text-subline - slot for menu item subline text.
 * @slot trailing-controls - slot for menu item controls to appear of trailing end.
 *
 * @event click - (React: onClick) This event is dispatched when the menuitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the menuitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the menuitem.
 * @event focus - (React: onFocus) This event is dispatched when the menuitem receives focus.
 */
class MenuItem extends ListItem {
  /**
   * Defines where the arrow icon will appear.
   * - `'leading'`: Icon appears on the leading edge (start).
   * - `'trailing'`: Icon appears on the trailing edge (end).
   *
   * If not set, no arrow is displayed.
   */
  @property({ type: String, reflect: true, attribute: 'arrow-position' })
  arrowPosition?: ArrowPositions;

  /**
   * Defines the direction the arrow icon points.
   * - `'positive'`: Arrow points toward the trailing side.
   * - `'negative'`: Arrow points toward the leading side.
   */
  @property({ type: String, reflect: true, attribute: 'arrow-direction' })
  arrowDirection?: ArrowDirections;

  /**
   * The name attribute is used to identify the menu item when it is selected.
   */
  @property({ type: String, reflect: true }) name?: undefined | string = undefined;

  /**
   * The value attribute is used to represent a value when the menu item is selected.
   * It is typically used with checkbox and radio menu items, but can be handy for any menu item.
   */
  @property({ type: String, reflect: true }) value?: undefined | string = undefined;

  constructor() {
    super();
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  /**
   * Handles the keydown event for the menu item.
   * If the Enter key is pressed, it triggers a click event on the menu item.
   * This allows keyboard users to activate the menu item using the Enter key.

   * This follows the native behaviour, actionable element can be triggered by Enter
   * key on the keydown event.
   *
   * Note: Action triggered by Space on the keyup event.
   *
   * @param event - The keyboard event that triggered the action.
   */
  override handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER) {
      this.triggerClickEvent();
      event.preventDefault();
    }
  }

  /**
   * Handles the keyup event for the menu item.
   * If the Space key is released, it triggers a click event on the menu item.
   * This allows keyboard users to activate the menu item using the Space key.
   * It also prevents the default action of the Space key to avoid scrolling the page.
   *
   * This follows the native behaviour, actionable element can be triggered by Space
   * key on the keyup event.
   *
   * Note: Action triggered by Enter on the keydown event.
   * @param event - The keyboard event that triggered the action.
   */
  private handleKeyUp(event: KeyboardEvent): void {
    if (event.key === KEYS.SPACE) {
      this.triggerClickEvent();
      event.preventDefault();
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEM;
    this.variant = LISTITEM_VARIANTS.INSET_RECTANGLE;
  }

  /**
   * Renders the trailing controls slot and optionally the trailing arrow icon,
   * based on `arrowPosition` and `arrowDirection`.
   */
  protected override renderTrailingControls() {
    const arrowIcon = this.arrowDirection === ARROW_DIRECTIONS.NEGATIVE ? ARROW_ICONS.LEFT : ARROW_ICONS.RIGHT;

    return html`
      <slot
        name="trailing-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition === ARROW_POSITIONS.TRAILING
        ? html`<mdc-icon name="${arrowIcon}" length-unit="rem" part="trailing-arrow"></mdc-icon>`
        : nothing}
    `;
  }

  /**
   * Renders the leading controls slot and optionally the leading arrow icon,
   * based on `arrowPosition` and `arrowDirection`.
   */
  protected override renderLeadingControls() {
    const arrowIcon = this.arrowDirection === ARROW_DIRECTIONS.POSITIVE ? ARROW_ICONS.RIGHT : ARROW_ICONS.LEFT;

    return html`
      <slot
        name="leading-controls"
        @click=${this.stopEventPropagation}
        @keyup=${this.stopEventPropagation}
        @keydown=${this.stopEventPropagation}
      ></slot>
      ${this.arrowPosition === ARROW_POSITIONS.LEADING
        ? html`<mdc-icon name="${arrowIcon}" length-unit="rem" part="leading-arrow"></mdc-icon>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles, ...styles];
}

export default MenuItem;
