import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { NavComponentMixin } from '../../utils/mixins/NavComponentMixin';
import providerUtils from '../../utils/provider';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import Linksimple from '../linksimple';
import type { IconNames } from '../icon/icon.types';

import styles from './navbuttonlink.styles';

/**
 * The NavButtonLink component is a Link which acts like a NavItem.
 * It can collapse and expand and is styled as a NavItem.
 * This component is used when external links are opened via an item in the SideNavigation.
 * Do not use this when the content on the page itself is changing, in that case use the NavMenuItem component.
 *
 * NOTE: This component is intended to be used inside a SideNavigation component. It should
 * not be used within a menubar, given the aria role is "link" and links are not allowed within
 * menubars per WAI-ARIA practices. Use the NavMenuItem component instead for menubar use cases.
 *
 * @tagname mdc-navbuttonlink
 *
 * @event click - (React: onClick) This event is dispatched when the buttonlink is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the buttonlink.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the buttonlink.
 * @event focus - (React: onFocus) This event is dispatched when the buttonlink receives focus.
 *
 * @csspart anchor - The anchor element that wraps the navbuttonlink content.
 *
 * @cssproperty --mdc-navbuttonlink-background - Background color of the navbuttonlink
 * @cssproperty --mdc-navbuttonlink-text-color - Text color of the navbuttonlink
 */
class Navbuttonlink extends NavComponentMixin(Linksimple) {
  static override shadowRootOptions = { ...Linksimple.shadowRootOptions, delegatesFocus: true };

  /**
   * The name of the icon to display as a postfix.
   * The icon is displayed on the right side of the navbuttonlink and is
   * used for indicating of a link is opening external. Use `pop-out-bold`
   * icon or similar for this purpose.
   */
  @property({ type: String, attribute: 'postfix-icon', reflect: true })
  postfixIcon?: IconNames;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('tooltipText') || changedProperties.has('showLabel')) {
      this.renderDynamicTooltip();
    }

    if (changedProperties.has('showLabel')) {
      // If collapsed and aria-label is not set, use visible label
      if (!this.showLabel && !this.getAttribute('data-aria-label')?.length && this.label) {
        this.setAttribute('data-aria-label', this.label);
      }
    }

    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.showLabel = context.expanded;
  }

  /**
   * @internal
   */
  protected renderDynamicTooltip(): void {
    if (!this.tooltipText || this.showLabel) {
      this.removeTooltip();
      return;
    }
    this.addTooltip('navbuttonlink', this.tooltipText);
  }

  /**
   * @internal
   */
  protected override renderAnchorContent() {
    return html`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
      </div>
      ${this.showLabel ? html`${this.renderTextLabel(this.label)}` : nothing}
      ${this.showLabel && this.postfixIcon
        ? html`<mdc-icon name="${this.postfixIcon as IconNames}" part="postfix-icon" length-unit="rem"></mdc-icon>`
        : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Navbuttonlink;
