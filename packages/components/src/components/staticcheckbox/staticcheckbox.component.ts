import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticcheckbox.styles';
import { ICON_NAME } from './staticcheckbox.constants';

/**
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

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (
      (changedProperties.has('checked') || changedProperties.has('indeterminate')) &&
      !this.hasAttribute('data-motion-active')
    ) {
      this.setAttribute('data-motion-active', '');
    }
  }

  private get iconName(): string {
    return this.indeterminate ? ICON_NAME.INDETERMINATE : ICON_NAME.CHECKED;
  }

  public override render() {
    return html`<slot></slot>
      <div part="icon-container">
        <mdc-icon
          part="checkbox-icon"
          aria-hidden="true"
          name="${this.iconName}"
          size="1"
          length-unit="rem"
        ></mdc-icon>
      </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticCheckbox;
