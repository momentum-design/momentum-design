import { CSSResult, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import Button from '../button/button.component';
import { ButtonComponentMixin } from '../../utils/mixins/ButtonComponentMixin';
import { DEFAULTS } from '../button/button.constants';
import type { IconNames } from '../icon/icon.types';
import Linksimple from '../linksimple/linksimple.component';
import type { IconButtonSize, PillButtonSize } from '../button/button.types';

import styles from './buttonlink.styles';

/**
 * `mdc-buttonlink` combines the functional behavior of `mdc-linksimple` with the visual and structural
 * features of `mdc-button`. This includes support for variants, sizing, and optional
 * prefix and postfix icons.
 *
 * ### Features:
 * - Behaves like a link while visually resembling a button.
 * - Customizable size, color, and variant through attributes.
 * - Supports prefix and postfix icons.
 * - Inherits accessibility and keyboard interaction support from `mdc-linksimple`.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-buttonlink
 *
 * @slot default - The default slot for buttonlink text content.
 *
 * @event click - (React: onClick) Fired when the user activates the buttonLink using a mouse or assistive technology.
 * @event keydown - (React: onKeyDown) Fired when the user presses a key while the buttonLink has focus.
 * @event focus - (React: onFocus) Fired when the buttonLink receives keyboard or mouse focus.
 * @event blur - (React: onBlur) Fired when the buttonLink loses keyboard or mouse focus.
 *
 * @csspart anchor - The anchor element that wraps the buttonlink content.
 * @csspart prefix-icon - The prefix icon element.
 * @csspart button-text - The slot containing the buttonlink text.
 * @csspart postfix-icon - The postfix icon element.
 *
 * @cssproperty --mdc-button-height - Height of the buttonlink
 * @cssproperty --mdc-button-background - Background color of the buttonlink
 * @cssproperty --mdc-button-border-color - Border color of the buttonlink
 * @cssproperty --mdc-button-text-color - Text color of the buttonlink
 * @cssproperty --mdc-button-line-height - Line height of the buttonlink text
 * @cssproperty --mdc-button-prefix-icon-size - Size of the prefix icon
 * @cssproperty --mdc-button-postfix-icon-size - Size of the postfix icon
 */
class ButtonLink extends ButtonComponentMixin(Linksimple) {
  /**
   * Size of the buttonlink, determined by its type.
   * - **Pill buttonlink**: 40 (2.5rem), 32 (2rem), 28 (1.75rem), 24 (1.5rem)
   * - **Icon buttonlink**: 64 (4rem), 52 (3.25rem), 40 (2.5rem), 32 (2rem), 28 (1.75rem), 24 (1.5rem)
   * - **Tertiary icon buttonlink** can also use: 20 (1.25rem)
   * @default 32
   */
  @property({ type: Number, reflect: true }) size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * Indicates whether the buttonlink is soft disabled.
   * When set to `true`, the buttonlink appears visually disabled but still allows
   * focus, click, and keyboard actions to be passed through.
   *
   * **Important:** When using soft disabled, consumers must ensure that
   * the buttonlink behaves like a disabled buttonlink, allowing only focus and
   * preventing any interactions (clicks or keyboard actions) from triggering unintended actions.
   * @default undefined
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true })
  softDisabled?: boolean;

  /**
   * Sets the soft-disabled attribute for the buttonlink.
   * When soft-disabled, the buttonlink looks to be disabled but remains focusable and clickable.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The buttonlink element.
   * @param softDisabled - The soft-disabled state.
   */
  private setSoftDisabled(element: HTMLElement, softDisabled?: boolean) {
    if (softDisabled) {
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('aria-disabled');
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled(this, this.softDisabled);
    }
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.setSize(this.size);
    }
    if (changedProperties.has('color')) {
      this.setColor(this.color);
    }
    if (changedProperties.has('typeInternal')) {
      this.setSize(this.size);
    }
    if (changedProperties.has('prefixIcon') || changedProperties.has('postfixIcon')) {
      this.inferButtonType();
    }
  }

  protected override renderAnchorContent() {
    return html`
      ${this.prefixIcon
        ? html`<mdc-icon name="${this.prefixIcon as IconNames}" part="prefix-icon" length-unit="rem"></mdc-icon>`
        : ''}
      <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
      ${this.postfixIcon
        ? html`<mdc-icon name="${this.postfixIcon as IconNames}" part="postfix-icon" length-unit="rem"></mdc-icon>`
        : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Button.styles, ...styles];
}

export default ButtonLink;
