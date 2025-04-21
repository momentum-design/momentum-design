import { CSSResult, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import Link from '../link/link.component';
import Button from '../button/button.component';
import { ButtonComponentMixin } from '../../utils/mixins/ButtonComponentMixin';
import { DEFAULTS } from '../button/button.constants';

/**
 * `mdc-buttonlink` is a link that looks like a button.
 * It supports all features of `mdc-link`, along with `prefix-icon` and `postfix-icon` slots.
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
class Buttonlink extends ButtonComponentMixin(Link) {
  /**
   * Button sizing is based on the button type.
    * - **Pill button**: 40, 32, 28, 24.
    * - **Icon button**: 64, 52, 40, 32, 28, 24.
    * - Tertiary icon button can also be 20.
    * @default 32
    */
  /* Note: TypeScript does not allow overriding the type of an inherited attribute when extending a class,
   so we've kept it as `any` (workaround for now) */
  @property({ type: Number, reflect: true }) override size: any = DEFAULTS.SIZE;

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

  public static override styles: Array<CSSResult> = [...Button.styles];
}

export default Buttonlink;
