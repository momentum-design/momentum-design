import { LitElement, html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { DEFAULTS } from '../../components/card/card.constants';
import type { CardOrientation, CardVariant } from '../../components/card/card.types';
import type { TagName as TagNameType } from '../../components/text/text.types';
import type { IconNames } from '../../components/icon/icon.types';

import type { Constructor } from './index.types';

export interface CardComponentMixinInterface {
  cardTitle: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  variant: CardVariant;
  orientation: CardOrientation;
  titleTagName: TagNameType;
  subtitleTagName: TagNameType;
  iconName?: IconNames;

  renderIcon: () => TemplateResult;
  renderImage: () => TemplateResult;
  renderTitle: () => TemplateResult;
}

export const CardComponentMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    /**
   * The title of the card - part of header section
   * @default ''
   */
  @property({ type: String, attribute: 'card-title' })
  cardTitle = '';

  /**
   * The subtitle of the card - part of header section
   * @default ''
   */
  @property({ type: String })
  subtitle = '';

  /**
   * The image source URL to render on the card
   * @default ''
   */
  @property({ type: String, attribute: 'image-src' })
  imageSrc = '';

  /**
   * The image alt for accessibility support
   * @default ''
   */
  @property({ type: String, attribute: 'image-alt' })
  imageAlt = '';

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
     * Name of the icon (= filename).
     *
     * If no `icon-name` is provided, no icon will be rendered.
     */
     @property({ type: String, attribute: 'icon-name' })
     iconName?: IconNames;

     /**
   * Renders the image on the card if image source is provided
   * @returns The image element
   */
     renderImage() {
       if (!this.imageSrc) {
         return nothing;
       }
       return html`<img part="image" src="${this.imageSrc}" alt="${this.imageAlt}"/>`;
     }

     /**
    * Renders the icon on the card if icon name is provided
    * @returns The icon element
    */
     renderIcon() {
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
     renderTitle() {
       return html`<div part="title">
        <mdc-text part="title" type="${DEFAULTS.TITLE_TYPE}" tagname="${this.titleTagName}">${this.cardTitle}</mdc-text>
        ${this.subtitle ? html`<mdc-text part="subtitle"
            type="${DEFAULTS.SUBTITLE_TYPE}" 
            tagname="${this.subtitleTagName}">${this.subtitle}</mdc-text>` : nothing}
        </div>`;
     }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<CardComponentMixinInterface> & T;
};
