import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import type { IconNames } from '../icon/icon.types';

import styles from './inputchip.styles';
import { DEFAULTS } from './inputchip.constants';

/**
 * mdc-inputchip component is an interactive chip that consumers can use to represent an input.
 *
 * - It supports a leading icon via the `icon-name` property.
 * - It supports a prefix slot for avatars or other custom content (takes precedence over icon-name).
 * - It supports an error state for validation.
 * - It supports a close button to remove the chip.
 *
 * @tagname mdc-inputchip
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event remove - This event is dispatched when the close button is activated. It bubbles and is composed.
 *
 * @slot prefix - A slot for prefix content such as avatars.
 *
 * @csspart label - The label part of the chip.
 * @csspart icon - The icon part of the chip.
 * @csspart close-icon - The close icon part of the chip.
 *
 * @cssproperty --mdc-chip-color - The color of the chip.
 * @cssproperty --mdc-chip-border-color - The border color of the chip.
 * @cssproperty --mdc-chip-background-color - The background color of the chip.
 *
 */
class InputChip extends IconNameMixin(DisabledMixin(Component)) {
  /**
   * The label of the inputchip.
   *
   * We recommend limiting the <b>maximum length of the label text to 20 characters</b>,
   * including empty spaces to split words.
   */
  @property({ type: String }) label = '';

  /**
   * The error state of the inputchip.
   *
   * @default false
   */
  @property({ type: Boolean }) error = false;

  /**
   * The aria-label of the close button.
   */
  @property({ type: String, attribute: 'clear-aria-label' }) clearAriaLabel = '';

  /**
   * Renders the prefix content, supporting both icons and slot content.
   * @returns The prefix content if available, otherwise nothing.
   */
  private renderPrefix() {
    return html`
      <slot name="prefix">
        ${this.iconName
          ? html`<mdc-icon part="icon" name="${this.iconName as IconNames}" length-unit="rem" size="1"></mdc-icon>`
          : nothing}
      </slot>
    `;
  }

  /**
   * Handles the behavior of the close button on click event.
   * @param event - The event object.
   */
  private handleClose() {
    this.dispatchEvent(new CustomEvent('remove', { bubbles: true, composed: true }));
  }

  public override render() {
    return html`
      ${this.renderPrefix()}
      ${this.label
        ? html`<mdc-text part="label" type="${DEFAULTS.TEXT_TYPE}" tagname="${DEFAULTS.TAG_NAME}"
            >${this.label}</mdc-text
          >`
        : nothing}
      <mdc-button
        ?disabled="${this.disabled}"
        variant="tertiary"
        part="close-icon"
        aria-label="${this.clearAriaLabel}"
        prefix-icon="${DEFAULTS.CLOSE_ICON}"
        size="20"
        @click="${this.handleClose}"
      ></mdc-button>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default InputChip;
