import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { TextType } from '../text/text.types';

import { DEFAULTS } from './banner.constants';
import styles from './banner.styles';
import type { BannerVariant } from './banner.types';
import { getIconNameForVariant } from './banner.utils';

/**
 * `mdc-banner` is a container to display short, critical messages that require user action.
 * It typically appears at the top of a page or section and provides contextual information, updates, or alerts.
 * Banners are designed to be noticeable but non-intrusive, helping users stay informed without interrupting their workflow.
 * 
 * The component supports both structured content via properties and flexible customization via slots:
 * - Use properties (title, subtitle, variant) for standard banner layouts
 * - Use slots for custom content and complete layout control
 * - Combine both approaches for maximum flexibility
 * - Create custom orientations and actions using CSS parts and slots
 * 
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot content - Complete content override. When used, replaces all default banner content including icon, title, subtitle, and actions.
 * @slot leading-icon - Custom icon content. Overrides the default variant-based icon.
 * @slot leading-title - Custom title content. Overrides the title property.
 * @slot leading-subtitle - Custom subtitle content. Overrides the subtitle property.
 * @slot trailing-actions - Custom action buttons and controls. Use this for dismiss buttons, reset buttons, or any other actions.
 *
 * @tagname mdc-banner
 *
 * @csspart leading - The leading section containing the icon.
 * @csspart content - The center content section containing title and subtitle text.
 * @csspart trailing - The trailing section containing action buttons and controls.
 * @csspart banner-leading-icon - The icon displayed for variants or custom icon slot.
 * @csspart leading-title - The title text of the banner.
 * @csspart leading-subtitle - The subtitle text of the banner.
 *
 * @cssproperty --mdc-banner-background-color - Background color of the banner.
 * @cssproperty --mdc-banner-border-color - Border color of the banner.
 * @cssproperty --mdc-banner-text-color - Color of the text in the banner.
 * @cssproperty --mdc-banner-icon-color - Color of the icon in the banner.
 * @cssproperty --mdc-banner-elevation-3 - Elevation/shadow of the banner.
 * @cssproperty --mdc-banner-padding - Padding inside the banner.
 * @cssproperty --mdc-banner-gap - Gap between banner elements.
 */
class Banner extends Component {
  /**
   * Type of banner variant
   * - Can be `custom`, `informational`, `warning`, `error` or `success`.
   * 
   * Note: When using `custom` variant, provide your own icon via the `leading-icon` slot, else no icon will be shown.
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
   */
  @property({ type: String, reflect: true })
  subtitle?: string;

  /**
   * Renders the icon based on the provided icon name.
   *
   * @param iconName - The name of the icon to render.
   */
  protected renderIcon(iconName: string) {
    if(!iconName) return nothing;
    return html`
      <mdc-icon
        name="${iconName as IconNames}"
        size="${DEFAULTS.PREFIX_ICON_SIZE}"
        part="banner-leading-icon"
      ></mdc-icon>
    `;
  }

  /**
   * Generates a template for a text slot with the specified content.
   *
   * @param slotName - The name of the slot to be used.
   * @param type - The type of the text element.
   * @param content - The text content to be displayed within the slot.
   * @returns A TemplateResult containing a slot with an `mdc-text` element.
   */
  protected getText(slotName: string, type: TextType, content?: string): TemplateResult {
    return html`
      <slot name="${slotName}">
        ${content
          ? html`<mdc-text part="${slotName}" type="${type}" tagname="${VALID_TEXT_TAGS.SPAN}">${content}</mdc-text>`
          : nothing}
      </slot>
    `;
  }

  /**
   * Renders the leading section with icon
   */
  private renderLeading() {
    return html`
      <slot name="leading-icon">
        ${this.variant !== DEFAULTS.VARIANT 
          ? this.renderIcon(getIconNameForVariant(this.variant) ?? '')
          : nothing}
      </slot>
    `;
  }

  /**
   * Renders the center content section with title and subtitle
   */
  private renderContent() {
    return html`
      <div part="content">
        ${this.getText('leading-title', TYPE.BODY_LARGE_REGULAR, this.title)}
        ${this.getText('leading-subtitle', TYPE.BODY_MIDSIZE_REGULAR, this.subtitle)}
      </div>
    `;
  }

  public override render() {
    return html`
      <slot name="content">
        <div part="leading">
          ${this.renderLeading()}
        </div>
        ${this.renderContent()}
        <div part="trailing">
          <slot name="trailing-actions"></slot>
        </div>
      </slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Banner;
