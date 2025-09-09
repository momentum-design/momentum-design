import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import Linksimple from '../linksimple/linksimple.component';

import { DEFAULTS, LINK_ICON_SIZES, LINK_SIZES } from './link.constants';
import styles from './link.styles';
import type { LinkSize } from './link.types';

/**
 * `mdc-link` component can be used to navigate to a different page
 * within the application or to an external site. It can be used to link to
 * emails or phone numbers.
 *
 * The `children` of the link component is expected to be the text content.
 *
 * For `icon`, the `mdc-icon` component is used to render the icon.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-link
 *
 * @event click - (React: onClick) Fired when the user activates the Link using a mouse or assistive technology.
 * @event keydown - (React: onKeyDown) Fired when the user presses a key while the Link has focus.
 * @event focus - (React: onFocus) Fired when the Link receives keyboard or mouse focus.
 * @event blur - (React: onBlur) Fired when the Link loses keyboard or mouse focus.
 */
class Link extends IconNameMixin(Linksimple) {
  /**
   * Size of the link.
   * Acceptable values include:
   *
   * - 'small'
   * - 'midsize'
   * - 'large'
   *
   * @default large
   */
  @property({ type: String, reflect: true })
  size: LinkSize = DEFAULTS.LINK_SIZE;

  /**
   * Method to get the size of the trailing icon based on the link size.
   * @returns The icon size value and units.
   */
  private getIconSize(): number {
    switch (this.size) {
      case LINK_SIZES.SMALL:
        return LINK_ICON_SIZES.SMALL;
      case LINK_SIZES.MIDSIZE:
        return LINK_ICON_SIZES.MIDSIZE;
      default:
        return LINK_ICON_SIZES.LARGE;
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
        <slot></slot>
        ${this.iconName
          ? html`<mdc-icon
              name="${this.iconName}"
              size="${this.getIconSize()}"
              length-unit="rem"
            ></mdc-icon>`
          : nothing}
      </a>
    `;
  }

  public static override styles: Array<CSSResult> = [...Linksimple.styles, ...styles];
}

export default Link;
