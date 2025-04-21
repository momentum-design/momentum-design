import { PropertyValues, CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { DEFAULTS, LINK_ICON_SIZES, LINK_SIZES } from './link.constants';
import styles from './link.styles';
import type { LinkSize } from './link.types';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';

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
 * @event click - (React: onClick) Fired when the user activates the buttonLink using a mouse or assistive technology.
 * @event keydown - (React: onKeyDown) Fired when the user presses a key while the buttonLink has focus.
 * @event focus - (React: onFocus) Fired when the buttonLink receives keyboard or mouse focus.
 * @event blur - (React: onBlur) Fired when the buttonLink loses keyboard or mouse focus.
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
class Link extends DisabledMixin(TabIndexMixin(IconNameMixin(Component))) {
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
   * Href for navigation. The URL that the hyperlink points to
   */
  @property({ type: String, reflect: true })
  href: string = '#';

  /**
   * Optional target: _blank, _self, _parent, _top and _unfencedTop
   */
  @property({ type: String, reflect: true })
  target: string = '_self';

  /**
   * Optional rel attribute that defines the relationship of the linked URL as space-separated link types.
   */
  @property({ type: String, reflect: true })
  rel?: string;

  /**
   * Stores the previous tabindex if set by user
   * so it can be restored after disabling
   * @internal
   */
  private prevTabindex = 0;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'link');
    this.addEventListener('click', this.handleNavigation);
    this.addEventListener('keydown', this.handleNavigation);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleNavigation);
    this.removeEventListener('keydown', this.handleNavigation);
  }

  private handleNavigation = (e: MouseEvent | KeyboardEvent): void => {
    if ((e.type === 'click' || (e instanceof KeyboardEvent && e.key === 'Enter')) && this.href) {
      if (this.disabled) return;
      window.open(this.href, this.target, this.rel);
    }
  };

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
   * Sets or removes `aria-disabled` and updates `tabIndex` to reflect
   * the disabled state. When disabled, the element becomes unfocusable;
   * when enabled, the previous `tabIndex` is restored.
   *
   * @param disabled - Whether the element should be disabled
   */
  private setDisabled(disabled: boolean) {
    if (disabled) {
      this.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
    } else {
      if (this.tabIndex === -1) {
        this.tabIndex = this.prevTabindex;
      }
      this.removeAttribute('aria-disabled');
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('disabled')) {
      this.setDisabled(this.disabled);
    }
  }

  public override render() {
    return html`
      <slot></slot>
      ${this.iconName ? html`
        <mdc-icon
          name=${this.iconName}
          size=${this.getIconSize()}
          length-unit="rem"
        ></mdc-icon>
      ` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Link;
