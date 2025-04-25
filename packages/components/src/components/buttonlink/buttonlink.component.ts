import { CSSResult, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import Button from '../button/button.component';
import { ButtonComponentMixin } from '../../utils/mixins/ButtonComponentMixin';
import { DEFAULTS } from '../button/button.constants';
import type { IconNames } from '../icon/icon.types';
import Linksimple from '../linksimple/linksimple.component';
import type { IconButtonSize, PillButtonSize } from '../button/button.types';

/**
 * `mdc-buttonlink` combines the functional behavior of `mdc-linksimple` with the visual and structural
 * features of `mdc-button`. This includes support for variants, sizing, and optional
 * prefix and postfix icons via slots.
 *
 * ### Features:
 * - Behaves like an link while visually resembling a button.
 * - Supports slots for `prefix-icon` and `postfix-icon`.
 * - Customizable size, color, and variant through attributes.
 * - Inherits accessibility and keyboard interaction support from `mdc-linksimple`.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-buttonlink
 *
 * @event click - (React: onClick) Fired when the user activates the buttonLink using a mouse or assistive technology.
 * @event keydown - (React: onKeyDown) Fired when the user presses a key while the buttonLink has focus.
 * @event focus - (React: onFocus) Fired when the buttonLink receives keyboard or mouse focus.
 * @event blur - (React: onBlur) Fired when the buttonLink loses keyboard or mouse focus.
 *
 */
class ButtonLink extends ButtonComponentMixin(Linksimple) {
  /**
   * ButtonLink sizing is based on the buttonlink type.
    * - **Pill buttonlink**: 40, 32, 28, 24.
    * - **Icon buttonlink**: 64, 52, 40, 32, 28, 24.
    * - Tertiary icon buttonlink can also be 20.
    * @default 32
    */
  @property({ type: Number, reflect: true }) size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

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

  public override render() {
    return html`
      ${this.prefixIcon ? html` <mdc-icon name="${this.prefixIcon as IconNames}" part="prefix-icon"></mdc-icon>` : ''}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon
    ? html` <mdc-icon name="${this.postfixIcon as IconNames}" part="postfix-icon"></mdc-icon>`
    : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Button.styles];
}

export default ButtonLink;
