import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticcheckbox.styles';
import { ICON_NAME } from './staticcheckbox.constants';

/**
 * This is a decorative component that is styled to look as a checkbox.
 *
 * It has 5 properties - checked, indeterminate, disabled, readonly and soft-disabled.
 *
 * We are using the same styling that has been created for the `mdc-checkbox` component.
 *
 * @tagname mdc-staticcheckbox
 *
 * @dependency mdc-icon
 *
 * @cssproperty --mdc-checkbox-border-color - Controls the border color of the checkbox.
 * @cssproperty --mdc-checkbox-background-color - Controls the background color of the checkbox.
 * @cssproperty --mdc-checkbox-icon-color - Controls the icon color of the checkbox.
 * @cssproperty --mdc-checkbox-size - Controls the size of the checkbox.
 *
 * @csspart icon-container - The container for the checkbox icon.
 * @csspart checkbox-icon - The checkbox icon.
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

  /**
   * Determines whether the checkbox is read-only.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Determines whether the checkbox is soft-disabled.
   *
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true }) softDisabled = false;

  public override render() {
    const checkboxIconContent =
      this.checked || this.indeterminate
        ? html`
            <mdc-icon
              part="checkbox-icon"
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
