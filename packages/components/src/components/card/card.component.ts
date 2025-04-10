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
 * format that is visually appealing.
 *
 * @tagname mdc-card
 *
 * @slot body - This slot is for passing the text content for the card
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Card extends IconNameMixin(Component) {
  @property({ type: String, attribute: 'card-title' })
  cardTitle: string = '';

  @property({ type: String })
  subtitle: string = '';

  @property({ type: String, attribute: 'image-src' })
  imageSrc: string = '';

  @property({ type: String, attribute: 'image-alt' })
  imageAlt: string = '';

  @property({ type: String })
  variant: CardVariant = DEFAULTS.VARIANT;

  @property({ type: String, reflect: true })
  orientation: CardOrientation = DEFAULTS.ORIENTATION;

  @property({ type: String, attribute: 'title-tag-name' })
  titleTagName: TagNameType = DEFAULTS.TAGNAME;

  @property({ type: String, attribute: 'subtitle-tag-name' })
  subtitleTagName: TagNameType = DEFAULTS.TAGNAME;

  protected renderImage() {
    if (!this.imageSrc) {
      return nothing;
    }
    return html`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}"/>`;
  }

  protected renderIcon() {
    return this.iconName ? html`<mdc-icon part="icon"
      size="${DEFAULTS.ICON_SIZE}" 
      length-unit="${DEFAULTS.ICON_LENGTH_UNIT}" 
      name="${this.iconName}"></mdc-icon>`
      : nothing;
  }

  protected renderTitle() {
    return html`<div part="title">
    <mdc-text part="title" type="${DEFAULTS.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
    ${this.subtitle ? html`<mdc-text part="subtitle"
       type="${DEFAULTS.SUBTITLE_TYPE}" 
       tagname="${this.subtitleTagName}">${this.subtitle}</mdc-text>` : nothing}
    </div>`;
  }

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
        <slot name="slot1"></slot>
        <slot name="body"></slot>
        <slot name="slot2"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Card;
