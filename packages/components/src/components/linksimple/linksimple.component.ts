import { PropertyValues, CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

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
 *
 * @csspart anchor - The anchor element that wraps the linksimple content.
 */
class Linksimple extends DataAriaLabelMixin(DisabledMixin(Component)) {
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
  href?: string;

  /**
   * Optional target: _blank, _self, _parent, _top and _unfencedTop
   * @default _self
   */
  @property({ type: String, reflect: true })
  target = '_self';

  /**
   * Optional rel attribute that defines the relationship of the linked URL as space-separated link types.
   */
  @property({ type: String, reflect: true })
  rel?: string;

  /**
   * Optional download attribute to instruct browsers to download the linked resource.
   */
  @property({ type: String, reflect: true })
  download?: string;

  /**
   * Optional ping attribute that defines a space-separated list of URLs to be notified if the link is followed.
   */
  @property({ type: String, reflect: true })
  ping?: string;

  /**
   * Optional hreflang attribute specifying the language of the linked resource.
   */
  @property({ type: String, reflect: true })
  hreflang?: string;

  /**
   * Optional type attribute indicating the MIME type of the linked resource.
   */
  @property({ type: String, reflect: true })
  type?: string;

  /**
   * Optional referrerpolicy attribute specifying how much referrer information to send.
   */
  @property({ type: String, reflect: true })
  referrerpolicy?: string;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this.handleNavigation.bind(this));
    this.addEventListener('keydown', this.handleNavigation.bind(this));
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleNavigation.bind(this));
    this.removeEventListener('keydown', this.handleNavigation.bind(this));
  }

  protected handleNavigation(e: MouseEvent | KeyboardEvent): void {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
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
    } else {
      this.removeAttribute('aria-disabled');
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('disabled')) {
      this.setDisabled(this.disabled);
    }
  }

  /**
   * Protected method to render the anchor content.
   * Override this method to customize the content inside the anchor tag.
   * @internal
   */
  protected renderAnchorContent() {
    return html`<slot></slot>`;
  }

  public override render() {
    return html`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${ifDefined(this.href)}"
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
        ${this.renderAnchorContent()}
      </a>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];

  static override shadowRootOptions = { ...Component.shadowRootOptions, delegatesFocus: true };
}

export default Linksimple;
