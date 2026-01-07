import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticcheckbox.styles';
import { ICON_NAME } from './staticcheckbox.constants';

/**
 * The StaticCheckbox component is a decorative, non-interactive checkbox used for visual
 * presentation in read-only scenarios. Unlike the interactive `mdc-checkbox`, it does not
 * handle user interactions or form submissions.
 *
 * This component supports multiple visual states: checked, indeterminate, disabled, readonly,
 * and soft-disabled.
 *
 * ## When to use
 * Use StaticCheckbox to display checkbox states in read-only contexts such as summary views,
 * confirmation screens, or when showing historical form data. For interactive checkboxes, use
 * [mdc-checkbox](?path=/docs/components-checkbox--docs) instead.
 *
 * ## Accessibility
 * - StaticCheckbox is decorative and non-interactive by design
 * - Always pair with descriptive text labels in the default slot
 * - Do not use this as a replacement for interactive checkboxes in forms
 *
 * @tagname mdc-staticcheckbox
 *
 * @dependency mdc-icon
 *
 * @cssproperty --mdc-staticcheckbox-border-color - Border color of the checkbox.
 * @cssproperty --mdc-staticcheckbox-background-color - Background color of the checkbox.
 * @cssproperty --mdc-staticcheckbox-icon-color - Icon color of the checkbox.
 * @cssproperty --mdc-staticcheckbox-size - Size of the checkbox.
 *
 * @csspart icon-container - The container for the checkbox icon.
 * @csspart checkbox-icon - The checkbox icon element.
 *
 * @slot - Default slot for label text.
 */
class StaticCheckbox extends DisabledMixin(Component) {
  /**
   * Determines whether the checkbox appears checked (selected) or unchecked.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the checkbox appears in an indeterminate (mixed) state.
   * Typically used to represent partial selection in nested checkbox groups.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /**
   * Determines whether the checkbox appears in a read-only state.
   * Note: This is purely visual as StaticCheckbox is non-interactive by design.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Determines whether the checkbox appears in a soft-disabled state.
   * Soft-disabled provides a less prominent disabled appearance than the standard disabled state.
   * Note: This is purely visual as StaticCheckbox is non-interactive by design.
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
