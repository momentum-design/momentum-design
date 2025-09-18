import type { CSSResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS } from './banner.constants';
import styles from './banner.styles';
import type { BannerVariant } from './banner.types';
import { getIconNameForVariant } from './banner.utils';

/**
 * `mdc-banner` is a component that allows applications to communicate important messages to users 
 * and requires user action to dismiss them. It supports different message types with appropriate styling 
 * and icons, and provides flexibility for customization through title, subtitle, icons, and actions.
 * 
 * They are designed to be noticeable yet non-intrusive, helping users stay informed without interrupting their workflow.
 *
 * This component supports both structured content via properties and flexible customization via slots:
 * - Use the properties (`title`, `subtitle`, `variant`) for standard banner layouts with automatic icon selection.
 * - Use slots for custom content and complete layout control.
 * - Combine both approaches for maximum flexibility.
 * - Create custom orientations and actions using CSS parts and slots.
 * 
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot content - Complete content override. When used, it replaces all default banner content including icon, title, subtitle, and actions.
 * @slot leading-icon - Custom icon content. Overrides the default variant-based icon.
 * @slot leading-text - Custom text content. Overrides the title and subtitle properties.
 * @slot trailing-actions - Custom action buttons and controls. Use this for dismiss buttons, reset buttons, or any other actions.
 *
 * @tagname mdc-banner
 *
 * @csspart leading - The leading section containing the icon and text.
 * @csspart leading-icon - The icon displayed for variants or custom icon slot.
 * @csspart leading-text - The leading section containing title and subtitle text.
 * @csspart trailing - The trailing section containing action buttons and controls.
 * @csspart leading-title - The title text of the banner.
 * @csspart leading-subtitle - The subtitle text of the banner.
 *
 * @cssproperty --mdc-banner-background-color - Background color of the banner.
 * @cssproperty --mdc-banner-border-color - Border color of the banner.
 * @cssproperty --mdc-banner-icon-color - Color of the icon in the banner.
 * @cssproperty --mdc-banner-elevation-3 - Elevation/shadow of the banner.
 * @cssproperty --mdc-banner-padding - Padding inside the banner.
 * @cssproperty --mdc-banner-gap - Gap between banner elements.
 */
class Banner extends Component {
  /**
   * The type of banner variant.
   * - Can be `custom`, `informational`, `warning`, `error`, or `success`.
   *
   * Note: When using the `custom` variant, provide your own icon via the `leading-icon` slot; otherwise, no icon will be shown.
   * @default 'custom'
   */
  @property({ type: String, reflect: true })
  variant: BannerVariant = DEFAULTS.VARIANT;

  /**
   * Banner title text
   */
  @property({ type: String, reflect: true })
  override title: string = '';

  /**
   * Banner subtitle text
   * Optional supporting text that appears below the title. Only rendered when title is also provided.
   */
  @property({ type: String, reflect: true })
  subtitle?: string;

  /**
   * Renders the icon based on the provided icon name.
   * Used internally to display variant-specific icons.
   *
   * @param iconName - The name of the icon to render
   * @returns Template result containing the icon element, or nothing if no icon name provided
   */
  protected renderIcon(iconName: string) {
    if (!iconName) return nothing;
    return html`
      <mdc-icon
        name="${iconName as IconNames}"
        size="${DEFAULTS.PREFIX_ICON_SIZE}"
        part="leading-icon"
        length-unit="rem"
      ></mdc-icon>
    `;
  }

  /**
   * Generates a template for the title and subtitle text.
   * Returns nothing if no title is provided, ensuring subtitle is only shown when title exists.
   *
   * @returns Template result containing title and optional subtitle elements
   */
  protected getTextTitle() {
    if (!this.title) return nothing;
    return html`
      <mdc-text part="leading-title" type="${TYPE.BODY_LARGE_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}"
        >${this.title}</mdc-text
      >
      ${this.subtitle
        ? html`<mdc-text part="leading-subtitle" type="${TYPE.BODY_MIDSIZE_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}"
            >${this.subtitle}</mdc-text
          >`
        : nothing}
    `;
  }

  public override render() {
    return html`
      <slot name="content">
        <div part="leading">
          <slot name="leading-icon">
            ${this.variant !== DEFAULTS.VARIANT ? this.renderIcon(getIconNameForVariant(this.variant) ?? '') : nothing}
          </slot>
          <slot name="leading-text">
            <div part="leading-text">${this.getTextTitle()}</div>
          </slot>
        </div>
        <div part="trailing">
          <slot name="trailing-actions"></slot>
        </div>
      </slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Banner;
