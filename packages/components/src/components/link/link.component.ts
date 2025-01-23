import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, LINK_ICON_SIZES, LINK_SIZES } from './link.constants';
import { LinkSize } from './link.types';
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
 * @dependency mdc-icon
 *
 * @tagname mdc-link
 *
 * @cssproperty --mdc-link-border-radius - Border radius of the link
 * @cssproperty --mdc-link-color-active - Text and icon color of the link in active state
 * @cssproperty --mdc-link-color-disabled - Text and icon color of the link in disabled state
 * @cssproperty --mdc-link-color-hover - Text and icon color of the link in hover state
 * @cssproperty --mdc-link-color-normal - Text and icon color of the link in normal state
 * @cssproperty --mdc-link-icon-margin-left - Gap between the text and icon (only applicable when an icon is set)
 * @cssproperty --mdc-link-inverted-color-active - Text and icon color of the inverted link in active state
 * @cssproperty --mdc-link-inverted-color-disabled - Text and icon color of the inverted link in disabled state
 * @cssproperty --mdc-link-inverted-color-hover - Text and icon color of the inverted link in hover state
 * @cssproperty --mdc-link-inverted-color-normal - Text and icon color of the inverted link in normal state
 * @cssproperty --mdc-link-text-decoration-disabled - Text decoration of the link in disabled state for all variants
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
  @property({ type: Boolean, reflect: true })
  inline: boolean = DEFAULTS.INLINE;

  /**
   * The link color can be inverted by setting the inverted attribute to true.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  inverted: boolean = DEFAULTS.INVERTED;

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
   * Used to store the previous tabindex value of the host element
   * null value means that the host element did not have a tabindex attribute.
   * @internal
   */
  private prevTabindex : number | null = null;

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

  /**
   * Updates the tabindex of the host element to disable or enable the link.
   * When disabled, the link is not focusable or clickable, and tabindex is set to -1
   * and aria-disabled attribute is set to true
   * When link is not disabled, the previous tabindex of the host element is restored
   * and aria-disabled attribute is removed.
   *
   * @param disabled - The disabled state of icon
   */
  private setDisabled(disabled: boolean) {
    if (disabled) {
      this.prevTabindex = this.hasAttribute('tabindex') ? this.tabIndex : null;
      this.tabIndex = -1;
      this.setAttribute('aria-disabled', 'true');
    } else if (this.prevTabindex === null) {
      this.removeAttribute('tabindex');
      this.removeAttribute('aria-disabled');
    } else {
      this.tabIndex = this.prevTabindex;
      this.removeAttribute('aria-disabled');
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
      trailingIcon.setAttribute('size', `${iconSize}`);
      trailingIcon.setAttribute('length-unit', 'rem');
      anchorElement.appendChild(trailingIcon);
    }
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.has('disabled')) {
      this.setDisabled(this.disabled);
    }
  }

  public override render() {
    return html`<slot @slotchange=${this.updateTrailingIcon}></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Link;
