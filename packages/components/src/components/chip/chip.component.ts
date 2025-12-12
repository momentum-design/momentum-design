import type { CSSResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import StaticChip from '../staticchip/staticchip.component';
import type { ColorType } from '../staticchip/staticchip.types';

import { DEFAULTS } from './chip.constants';
import styles from './chip.styles';

/**
 * mdc-chip is an interactive element that can be used to represent a chip. It supports a leading icon along with label.
 * Consumers can wrap this component around a tooltip to provide additional context.
 *
 * It is recommended to keep the label text for the chip component concise and compact.<br/>
 * For best results, we recommend limiting the <b>maximum length of the label text to 20 characters</b>,
 * including empty spaces to split words.
 *
 * This component is built by extending `Buttonsimple`.
 *
 * @tagname mdc-chip
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @cssproperty --mdc-chip-color - The color of the chip.
 * @cssproperty --mdc-chip-border-color - The border color of the chip.
 * @cssproperty --mdc-chip-background-color - The background color of the chip.
 *
 * @csspart icon - The icon part of the chip.
 * @csspart label - The label part of the chip.
 *
 * @event click - (React: onClick) This event is dispatched when the chip is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the chip.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the chip.
 * @event focus - (React: onFocus) This event is dispatched when the chip receives focus.
 */
class Chip extends IconNameMixin(Buttonsimple) {
  /**
   * The color of the chip. It supports the following colors
   * - default
   * - cobalt
   * - gold
   * - lime
   * - mint
   * - orange
   * - pink
   * - purple
   * - slate
   * - violet
   *
   * @default default
   */
  @property({ type: String, reflect: true }) color: ColorType = DEFAULTS.COLOR;

  /**
   * The visible label text of the chip.
   *
   * We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
   * including empty spaces to split words.
   *
   * @default undefined
   */
  @property({ type: String }) label?: string;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = DEFAULTS.ROLE;
    this.size = DEFAULTS.SIZE;
    this.active = undefined as unknown as boolean;
    this.softDisabled = undefined as unknown as boolean;
  }

  /**
   * Renders the icon element if available.
   * @returns The icon element if available, otherwise nothing.
   */
  private renderIcon() {
    if (!this.iconName) return nothing;
    return html` <mdc-icon part="icon" name="${this.iconName}" length-unit="rem" size="1"></mdc-icon> `;
  }

  public override render() {
    return html`
      ${this.renderIcon()}
      ${this.label
        ? html`<mdc-text part="label" type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}"
            >${this.label}</mdc-text
          >`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...StaticChip.styles, ...styles];
}

export default Chip;
