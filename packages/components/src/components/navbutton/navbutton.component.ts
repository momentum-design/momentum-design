import { CSSResult, html, nothing } from 'lit';

import Buttonsimple from '../buttonsimple/buttonsimple.component';
import { NavComponentMixin } from '../../utils/mixins/NavComponentMixin';
import providerUtils from '../../utils/provider';
import SideNavigation from '../sidenavigation/sidenavigation.component';

import styles from './navbutton.styles';

/**
 * The NavButton component is a Button which acts like a NavItem.
 * It can collapse and expand and is styled as a NavItem.
 * This component is used when Modals are opened or other in app actions are performed
 * via an item in the SideNavigation. Do not use this when the URL & content is changing,
 * in that case use the NavMenuItem component.
 *
 * NOTE: This component is intended to be used inside a SideNavigation component. It should
 * not be used within a menubar, given the aria role is "button" and buttons are not allowed within
 * menubars per WAI-ARIA practices. Use the NavMenuItem component instead for menubar use cases.
 *
 * @tagname mdc-navbutton
 *
 * @event click - (React: onClick) This event is dispatched when the navbutton is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the navbutton.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the navbutton.
 * @event focus - (React: onFocus) This event is dispatched when the navbutton receives focus.
 *
 * @cssproperty --mdc-navbutton-background - Background color of the navbutton
 * @cssproperty --mdc-navbutton-text-color - Text color of the navbutton
 */
class Navbutton extends NavComponentMixin(Buttonsimple) {
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
      if (!this.showLabel && !this.getAttribute('aria-label')?.length && this.label) {
        this.setAttribute('aria-label', this.label);
      }
    }

    const context = this.sideNavigationContext?.value;
    if (!context) return;

    // Determine expansion state
    this.showLabel = context.expanded;
  }

  protected renderDynamicTooltip(): void {
    if (!this.tooltipText || this.showLabel) {
      this.removeTooltip();
      return;
    }
    this.addTooltip('navbutton', this.tooltipText);
  }

  public override render() {
    return html`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
        ${!this.showLabel ? this.renderBadge(this.showLabel) : nothing}
      </div>
      ${this.showLabel ? html`${this.renderTextLabel(this.label)}${this.renderBadge(this.showLabel)}` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Navbutton;
