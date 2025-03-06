import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './chip.styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { Component } from '../../models';
import { DEFAULTS } from './chip.constants';
import type { IconNames } from '../icon/icon.types';
import type { ColorType } from './chip.types';

/**
 * chip component, which ...
 *
 * @tagname mdc-chip
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Chip extends TabIndexMixin(DisabledMixin(IconNameMixin(Component))) {
  @property({ type: String }) color: ColorType = DEFAULTS.COLOR;

  @property({ type: String }) label = '';

  @property({ type: String, attribute: 'avatar-src' }) avatarSrc?: string;

  @property({ type: String, attribute: 'avatar-initials' }) avatarInitials?: string;

  private prevTabindex = 0;

  /**
   * Sets the disabled attribute for the button.
   * When disabled, the button is not focusable or clickable, and tabindex is set to -1.
   * The previous tabindex is stored and restored when enabled.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The button element.
   * @param disabled - The disabled state.
   */
  private setDisabled(element: HTMLElement, disabled: boolean) {
    if (disabled) {
      element.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
    } else {
      if (this.tabIndex === -1) {
        this.tabIndex = this.prevTabindex;
      }
      element.removeAttribute('aria-disabled');
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
  }

  private renderLeadingData() {
    if (this.avatarSrc || this.avatarInitials) {
      return html`
      <mdc-avatar
        size="24"
        initials="${ifDefined(this.avatarInitials)}"
        src="${ifDefined(this.avatarSrc)}"
      ></mdc-avatar>
    `;
    }
    if (this.iconName) {
      return html`
      <mdc-icon 
        name="${this.iconName as IconNames}" 
        length-unit="rem" 
        size="1"></mdc-icon>
    `;
    }
    return nothing;
  }

  public override render() {
    return html`
        ${this.renderLeadingData()}
        <mdc-text type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}">${this.label.substring(0, 20)}</mdc-text>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Chip;

// support avatar or icon. Not both
// support tooltip
