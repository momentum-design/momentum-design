import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import styles from './staticcheckbox.styles';
import { ICON_NAME } from './staticcheckbox.constants';

/**
 * This is a decorative component that is styled to look as a checkbox option.
 *
 * It has 3 properties - checked, indeterminate and disabled.
 *
 * We are using the same styling that has been created for the `mdc-checkbox` component.
 *
 * @tagname mdc-staticcheckbox
 *
 */
class StaticCheckbox extends DisabledMixin(Component) {
  @property({ type: Boolean, reflect: true }) checked = false;

  @property({ type: Boolean, reflect: true }) indeterminate = false;

  public override render() {
    const checkboxIconContent = (this.checked || this.indeterminate) ? html`
      <mdc-icon
        class="icon"
        name="${this.indeterminate ? ICON_NAME.INDETERMINATE : ICON_NAME.CHECKED}"
        size="1"
        length-unit="rem"
      ></mdc-icon>
    ` : nothing;

    return html`<slot></slot>
      <div part="icon-container">${checkboxIconContent}</div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticCheckbox;
