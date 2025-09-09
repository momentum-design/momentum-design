import { CSSResult, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

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

  public override render() {
    return html`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${this.href}"
        target="${this.target}"
        rel="${ifDefined(this.rel)}"
        download="${ifDefined(this.download)}"
        ping="${ifDefined(this.ping)}"
        hreflang="${ifDefined(this.hreflang)}"
        type="${ifDefined(this.type)}"
        referrerpolicy="${ifDefined(this.referrerpolicy)}"
        aria-label="${this.dataAriaLabel ?? ''}"
        tabindex="${this.disabled ? -1 : 0}"
      >
        ${this.prefixIcon
          ? html`<mdc-icon
              name="${this.prefixIcon as IconNames}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`
          : ''}
        <slot @slotchange="${this.inferButtonType}" part="button-text"></slot>
        ${this.postfixIcon
          ? html`<mdc-icon
              name="${this.postfixIcon as IconNames}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`
          : ''}
      </a>
    `;
  }

  public static override styles: Array<CSSResult> = [...Button.styles, ...styles];
}

export default ButtonLink;
