import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, LINK_ICON_SIZES, LINK_SIZES } from './link.constants';
import { LinkIconSize, LinkSize } from './link.types';
import styles from './link.styles';
import { IconNames } from '../icon/icon.types';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * `mdc-link` component can be used to navigate to a different page
 * within the application or to an external site. It can be used to link to
 * emails or phone numbers.
 *
 * The `children` of the link component is expected to be an anchor element
 * containing the text, href, and other attributes.
 *
 * For `icon`, the `mdc-icon` component is used to render the icon.
 *
 * Example:
 * ```
 * <mdc-link icon-name="pop-out-regular">
 *  <a href="https://www.webex.com">Link</a>
 * </mdc-link>
 * ```
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-link
 */
class Link extends DisabledMixin(Component) {
  /**
   * Name of the icon (= filename) to be used as trailing icon for link.
   *
   * If no `icon` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: IconNames;

  /**
   * The link can be inline or standalone.
   * @default false
   */
  @property({ type: Boolean })
  inline: boolean = DEFAULTS.INLINE;

  /**
   * The link can be inverted or not.
   * @default false
   */
  @property({ type: Boolean })
  inverted: boolean = DEFAULTS.INVERTED;

  /**
   * Size of the link.
   * Can be `small`, `midsize` or `large`.
   * @default large
   */
  @property({ type: String })
  size: LinkSize = DEFAULTS.LINK_SIZE;

  /**
   * Method to get the size of the trailing icon based on the link size.
   * @returns The icon size value and units.
   */
  private getIconSize(): LinkIconSize {
    switch (this.size) {
      case LINK_SIZES.SMALL:
        return LINK_ICON_SIZES.SMALL;
      case LINK_SIZES.MIDSIZE:
        return LINK_ICON_SIZES.MIDSIZE;
      default:
        return LINK_ICON_SIZES.LARGE;
    }
  }

  /**
   * Method to create and append trailing icon to the first anchor element in the slot.
   * If no icon name is provided, no icon will be rendered.
   */
  private updateTrailingIcon() {
    const anchorElement = this.shadowRoot?.querySelector('slot')
      ?.assignedElements({ flatten: true }).find((element) => element.tagName === 'A');

    const iconSize = this.getIconSize();

    if (this.iconName && anchorElement) {
      const trailingIcon = document.createElement('mdc-icon');
      trailingIcon.setAttribute('name', this.iconName);
      trailingIcon.setAttribute('size', iconSize.size);
      trailingIcon.setAttribute('length-unit', iconSize.unit);
      anchorElement.appendChild(trailingIcon);
    }
  }

  public override render() {
    return html`<slot @slotchange=${this.updateTrailingIcon}></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Link;
