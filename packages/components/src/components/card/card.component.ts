import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './card.styles';
import { Component } from '../../models';
import type { CardOrientation, CardVariant } from './card.types';
import { DEFAULTS } from './card.constants';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import type { TagName as TagNameType } from '../text/text.types';

/**
 * The card component allows users to organize information in a structured and tangible
 * format that is visually appealing. `mdc-card` is a static component that supports
 * the following features:
 * - Image
 * - Header
 *    - Icon
 *    - Title
 *    - Subtitle
 * - Body
 *
 * The card can either be vertically or horizontally oriented.
 *
 * There are 2 variants for the card that represent the border styling - 'border' and 'ghost'.
 *
 * **Note**: This is a static card (without interactible elements).
 * Make sure to pass only non-interactable elements within the slots.
 *
 * @tagname mdc-card
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 *
 */
class Card extends IconNameMixin(Component) {
  /**
   * The title of the card - part of header section
   * @default ''
   */
  @property({ type: String, attribute: 'card-title' })
  cardTitle: string = '';

  /**
   * The subtitle of the card - part of header section
   * @default ''
   */
  @property({ type: String })
  subtitle: string = '';

  /**
   * The image source URL to render on the card
   * @default ''
   */
  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  /**
   * The image alt for accessibility support
   * @default ''
   */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt: string = '';

  /**
   * The variant of the card. It can either be set to 'border' or 'ghost'
   * @default 'border'
   */
  @property({ type: String })
  variant: CardVariant = DEFAULTS.VARIANT;

  /**
   * The orientation of the card. It can either be set to 'vertical' or 'horizontal'
   * @default 'vertical'
   */
  @property({ type: String, reflect: true })
  orientation: CardOrientation = DEFAULTS.ORIENTATION;

  /**
   * The tag name for the card title. It supports all the types that `msc-text` supports
   * @default 'span'
   */
  @property({ type: String, attribute: 'title-tag-name' })
  titleTagName: TagNameType = DEFAULTS.TAGNAME;

  /**
   * The tag name for the subtitle. It supports all the types that `msc-text` supports
   * @default 'span'
   */
  @property({ type: String, attribute: 'subtitle-tag-name' })
  subtitleTagName: TagNameType = DEFAULTS.TAGNAME;

  /**
   * Renders the image on the card if image source is provided
   * @returns The image element
   */
  protected renderImage() {
    if (!this.imageSrc) {
      return nothing;
    }
    return html`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}"/>`;
  }

  /**
   * Renders the icon on the card if icon name is provided
   * @returns The icon element
   */
  protected renderIcon() {
    return this.iconName ? html`<mdc-icon part="icon"
      size="${DEFAULTS.ICON_SIZE}" 
      length-unit="${DEFAULTS.ICON_LENGTH_UNIT}" 
      name="${this.iconName}"></mdc-icon>`
      : nothing;
  }

  /**
   * Renders the title and subtitle on the card
   * @returns The title and subtitle elements
   */
  protected renderTitle() {
    return html`<div part="title">
    <mdc-text part="title" type="${DEFAULTS.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
    ${this.subtitle ? html`<mdc-text part="subtitle"
       type="${DEFAULTS.SUBTITLE_TYPE}" 
       tagname="${this.subtitleTagName}">${this.subtitle}</mdc-text>` : nothing}
    </div>`;
  }

  /**
   * Renders the header of the card if title is provided
   * @returns The header element
   */
  protected renderHeader() {
    if (!this.cardTitle) {
      return nothing;
    }
    return html`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
    </div>`;
  }

  public override render() {
    return html`
    ${this.renderImage()}
      <div part="body">
      ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Card;
