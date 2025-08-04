import { PropertyValues, CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';

import { DEFAULTS } from './linksimple.constants';
import styles from './linksimple.styles';

/**
 * `mdc-linksimple` is a lightweight link component that can be used to navigate
 * within the application or to an external URL. It does not have any predefined default size.
 *
 * The `children` of the `mdc-linksimple` component can be customized to suit
 * different use cases, including text, icons, or other inline content. For the child to be an icon,
 * the `mdc-icon` component should be used to render.
 *
 * @tagname mdc-linksimple
 *
 * @event click - (React: onClick) Fired when the user activates the buttonLink using a mouse or assistive technology.
 * @event keydown - (React: onKeyDown) Fired when the user presses a key while the buttonLink has focus.
 * @event focus - (React: onFocus) Fired when the buttonLink receives keyboard or mouse focus.
 * @event blur - (React: onBlur) Fired when the buttonLink loses keyboard or mouse focus.
 *
 * @cssproperty --mdc-link-border-radius - Border radius of the link.
 * @cssproperty --mdc-link-color-active - Color of the link’s child content in the active state.
 * @cssproperty --mdc-link-color-disabled - Color of the link’s child content in the disabled state.
 * @cssproperty --mdc-link-color-hover - Color of the link’s child content in the hover state.
 * @cssproperty --mdc-link-color-normal - Color of the link’s child content in the normal state.
 * @cssproperty --mdc-link-inverted-color-active - Color of the inverted link’s child content in the active state.
 * @cssproperty --mdc-link-inverted-color-disabled - Color of the inverted link’s child content in the disabled state.
 * @cssproperty --mdc-link-inverted-color-hover - Color of the inverted link’s child content in the hover state.
 * @cssproperty --mdc-link-inverted-color-normal - Color of the inverted link’s child content in the normal state.
 */
class Linksimple extends DisabledMixin(TabIndexMixin(Component)) {
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
   * Href for navigation. The URL that the hyperlink points to
   */
  @property({ type: String, reflect: true })
  href = '#';

  /**
   * Optional target: _blank, _self, _parent, _top and _unfencedTop
   */
  @property({ type: String, reflect: true })
  target = '_self';

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
    this.addEventListener('click', this.handleNavigation.bind(this));
    this.addEventListener('keydown', this.handleNavigation.bind(this));
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleNavigation.bind(this));
    this.removeEventListener('keydown', this.handleNavigation.bind(this));
  }

  private handleNavigation(e: MouseEvent | KeyboardEvent): void {
    if ((e.type === 'click' || (e instanceof KeyboardEvent && e.key === 'Enter')) && this.href) {
      if (this.disabled) return;
      window.open(this.href, this.target, this.rel);
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
    return html` <slot></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Linksimple;
