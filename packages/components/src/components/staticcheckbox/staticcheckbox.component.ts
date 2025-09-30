import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticcheckbox.styles';
import { ICON_NAME } from './staticcheckbox.constants';

/**
 * This is a decorative component that is styled to look as a checkbox.
 *
 * It has 3 properties - checked, indeterminate and disabled.
 *
 * We are using the same styling that has been created for the `mdc-checkbox` component.
 *
 * @tagname mdc-staticcheckbox
 *
 * @dependency mdc-icon
 *
 * @cssproperty --mdc-staticcheckbox-border-color - Border color in high contrast.
 * @cssproperty --mdc-staticcheckbox-checked-background-color - Background color for a selected checkbox.
 * @cssproperty --mdc-staticcheckbox-disabled-background-color - Background color for a disabled checkbox.
 * @cssproperty --mdc-checkbox-disabled-border-color - Border color for a disabled checkbox.
 * @cssproperty --mdc-checkbox-disabled-checked-icon-color - Background color for a disabled, selected checkbox.
 * @cssproperty --mdc-staticcheckbox-disabled-icon-color - Icon color for a disabled checkbox.
 * @cssproperty --mdc-staticcheckbox-icon-background-color - Background color for an unselected checkbox.
 * @cssproperty --mdc-staticcheckbox-icon-border-color - Default background color for an unselected checkbox.
 * @cssproperty --mdc-staticcheckbox-icon-color - Icon color for an unselected checkbox.
 *
 * @csspart icon-container - The container for the checkbox icon.
 * @csspart icon - The checkbox icon.
 *
 * @slot - Default slot for adding label text.
 */
class StaticCheckbox extends DisabledMixin(Component) {
  /**
   * Determines whether the checkbox is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the checkbox is in an indeterminate state.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  public override render() {
    const checkboxIconContent =
      this.checked || this.indeterminate
        ? html`
            <mdc-icon
              part="icon"
              name="${this.indeterminate ? ICON_NAME.INDETERMINATE : ICON_NAME.CHECKED}"
              size="1"
              length-unit="rem"
            ></mdc-icon>
          `
        : nothing;

    return html`<slot></slot>
      <div part="icon-container">${checkboxIconContent}</div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticCheckbox;
