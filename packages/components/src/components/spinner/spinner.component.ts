import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

import styles from './spinner.styles';
import { SpinnerSize, SpinnerVariant } from './spinner.types';
import { DEFAULTS } from './spinner.constants';

/**
 * `mdc-spinner` is loading spinner which is an indeterminate progress indicator, meaning
 * it's best for cases where the  progress or duration of a process is variable or unknown.
 *
 * Spinner Variants:
 * - **Standalone (Default)**: Track has a blue color.
 * - **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
 * To ensure a minimum 3:1 contrast ratio, the color is changed internally to be the same color as the button’s
 * icon or label text.
 *
 * Spinner Sizes:
 * - **Large (96px)**: Use when replacing entire regions or pages that are still loading
 * - **MidSize (48px) (Default)**: Use for most use cases.
 * - **Small (24px)**: Use for inline with loading text.
 *
 * Customisation of the spinner size is allowed by setting the size to undefined and using the --mdc-spinner-size
 * CSS property.
 *
 * Spinner Colors:
 * - **Default**: Use for most use cases.
 * - **Inverted**: Only to be used within inverted components, such as coachmarks.
 *
 * Regarding accessibility, if an aria-label is provided, the role will be set to 'img'; if it is absent, the role
 * will be unset
 * and aria-hidden will be set to 'true' so the spinner will be ignored by screen readers.
 *
 * @tagname mdc-spinner
 *
 * @cssproperty --mdc-spinner-default-color - Allows customization of the default spinner color.
 * @cssproperty --mdc-spinner-inverted-color - Allows customization of the inverted spinner color.
 * @cssproperty --mdc-spinner-button-variant-color - Allows customization of the spinner Button variant color.
 * @cssproperty --mdc-spinner-size - Allows customization of the spinner size.
 *
 * @csspart container - The svg which contains the circle spinner.
 * @csspart circle - The circle of the spinner.
 */
class Spinner extends Component {
  /**
   * The spinner color can be inverted by setting the inverted attribute to true.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  inverted?: boolean = DEFAULTS.INVERTED;

  /**
   * Size of the spinner.
   * Acceptable values include:
   *
   * - 'small'
   * - 'midsize'
   * - 'large'
   * - 'undefined'
   *
   * @default midsize
   */
  @property({ type: String, reflect: true })
  size?: SpinnerSize = DEFAULTS.SIZE;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * There are 2 variants of spinner: default and button. Their coloring is different.
   * - **Standalone (Default)**: Track has a blue color.
   * - **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
   * To ensure a minimum 3:1 contrast ratio, change the active indicator color to be the same color as the button’s
   * icon or label text.
   * @default standalone
   */
  @property({ type: String, reflect: true })
  variant: SpinnerVariant = DEFAULTS.VARIANT;

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('ariaLabel')) {
      this.role = this.ariaLabel ? ROLE.IMG : null;
      this.ariaHidden = this.ariaLabel ? 'false' : 'true';
    }
  }

  public override render() {
    return html`
      <svg part="container" viewBox="0 0 100 100">
        <circle part="circle" cx="50" cy="50" r="46"></circle>
      </svg>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Spinner;
