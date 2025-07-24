import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import Link from '../link/link.component';
import { DEFAULTS as LINKSIMPLE_DEFAULTS } from '../linksimple/linksimple.constants';

import { DEFAULTS, LINKBUTTON_SIZES } from './linkbutton.constants';
import type { LinkButtonSize } from './linkbutton.types';
import { getIconSize } from './linkbutton.utils';
import styles from './linkbutton.styles';

/**
 * `mdc-linkbutton` visually resembles a link but behaves like a button, combining the appearance of `mdc-link` with the interactive and accessibility features of `mdc-button`.
 *
 * ### Features:
 * - Behaves like a button while visually resembling a link.
 * - Supports slots for text label and optional trailing icon.
 * - Inherits accessibility and keyboard interaction support from `mdc-buttonsimple`.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-linkbutton
 *
 * @slot - Text label of the linkbutton.
 *
 * @event click - (React: onClick) This event is dispatched when the linkbutton is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the linkbutton.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the linkbutton.
 * @event focus - (React: onFocus) This event is dispatched when the linkbutton receives focus.
 *
 * @cssproperty --mdc-link-border-radius - Border radius of the linkbutton.
 * @cssproperty --mdc-link-color-active - Color of the linkbutton’s child content in the active state.
 * @cssproperty --mdc-link-color-disabled - Color of the linkbutton’s child content in the disabled state.
 * @cssproperty --mdc-link-color-hover - Color of the linkbutton’s child content in the hover state.
 * @cssproperty --mdc-link-color-normal - Color of the linkbutton’s child content in the normal state.
 * @cssproperty --mdc-link-inverted-color-active - Color of the inverted linkbutton’s child content in the active state.
 * @cssproperty --mdc-link-inverted-color-disabled - Color of the inverted linkbutton’s child content in the disabled state.
 * @cssproperty --mdc-link-inverted-color-hover - Color of the inverted linkbutton’s child content in the hover state.
 * @cssproperty --mdc-link-inverted-color-normal - Color of the inverted linkbutton’s child content in the normal state.
 */
class LinkButton extends IconNameMixin(Buttonsimple) {
  /**
   * Sets the size of the linkbutton.
   * Acceptable values: 
   * - 12
   * - 14
   * - 16
   * @default 16
   */
  @property({ type: Number, reflect: true })
  override size: LinkButtonSize = DEFAULTS.SIZE;

  /**
   * The linkbutton can be inline or standalone.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  inline: boolean = LINKSIMPLE_DEFAULTS.INLINE;

  /**
   * The linkbutton color can be inverted by setting the inverted attribute to true.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  inverted: boolean = LINKSIMPLE_DEFAULTS.INVERTED;

  override connectedCallback() {
    super.connectedCallback();
    
    this.active = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
    this.role = DEFAULTS.ROLE;
    this.type = DEFAULTS.TYPE;
  }

  override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
  }

  /**
   * Sets the `size` attribute for the linkbutton, falling back to the default if the value is invalid.
   *
   * @param size - The desired link size.
   */
  private setSize(size: LinkButtonSize) {
    this.setAttribute('size', Object.values(LINKBUTTON_SIZES).includes(size) ? `${size}` : DEFAULTS.SIZE.toString());
  }

  public override render() {
    return html`
      <slot></slot>
      ${this.iconName
        ? html` <mdc-icon name=${this.iconName} size=${getIconSize(this.size)} length-unit="rem"></mdc-icon> `
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Link.styles, ...styles];
}

export default LinkButton;
