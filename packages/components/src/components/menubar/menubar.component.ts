import { html } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';
import { Component } from '../../models';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ROLE } from '../../utils/roles';
import styles from './menubar.styles';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuBar extends MenuMixin(Component) {
  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;

    this.addEventListener('keydown', this.handleKeyDown);
  }

  public override firstUpdated(): void {
    // For the first, we set the first element only as active.
    this.resetTabIndexAndSetActiveTabIndex(0);
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('ariaOrientation')) {
      this.updatePopoverPlacementBasedOnOrientation();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
