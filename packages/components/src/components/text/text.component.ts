import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontType, ValidTextTags } from './text.types';
import { DEFAULTS } from './text.constants';

/**
 * Text component for creating styled text elements.
 * It is mounted within the ThemeProvider to access color and font tokens.
 *
 * The `type` attribute allows changing the text style.
 * The `tagname` attribute allows changing the tag name of the text element.
 * The default tag name is `p`.
 *
 * The `tagname` attribute should be a valid HTML tag name.
 * If the `tagname` attribute is not a valid HTML tag name, the default tag name will be used.
 *
 * The styling is applied based on the `type` attribute.
 *
 * @tagname mdc-text
 * @slot - Default slot for text content
 */
class Text extends Component {
  /**
   * Specifies the text style to be applied.
   *
   * Acceptable values include:
   *
   * - 'body-small-regular'
   * - 'body-small-medium'
   * - 'body-small-bold'
   * - 'body-midsize-regular'
   * - 'body-midsize-medium'
   * - 'body-midsize-bold'
   * - 'body-large-regular'
   * - 'body-large-medium'
   * - 'body-large-bold'
   * - 'body-small-regular-underline'
   * - 'body-small-medium-underline'
   * - 'body-midsize-regular-underline'
   * - 'body-midsize-medium-underline'
   * - 'body-large-regular-underline'
   * - 'body-large-medium-underline'
   * - 'heading-small-regular'
   * - 'heading-small-medium'
   * - 'heading-small-bold'
   * - 'heading-midsize-regular'
   * - 'heading-midsize-medium'
   * - 'heading-midsize-bold'
   * - 'heading-large-regular'
   * - 'heading-large-medium'
   * - 'heading-large-bold'
   * - 'heading-xlarge-regular'
   * - 'heading-xlarge-medium'
   * - 'heading-xlarge-bold'
   * - 'headline-small-light'
   * - 'headline-small-regular'
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type: FontType | null = null;

  /**
   * Specifies the HTML tag name for the text element. The default tag name is `p`.
   * This attribute is optional. When set, it changes the tag name of the text element.
   *
   * Acceptable values include: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'span', 'div', 'section'.
   *
   * For instance, setting this attribute to `h2` will render the text element as an `h2` element.
   * Note that the styling is determined by the `type` attribute.
   */
  @property({ attribute: 'tagname', reflect: true, type: String })
  public tagname?: ValidTextTags = DEFAULTS.TAGNAME;

  public override render() {
    if (!this.type) {
      console.error('Type attribute is required for mdc-text component');
      return null;
    }

    switch (this.tagname) {
      case 'h1': return html`<h1><slot></slot></h1>`;
      case 'h2': return html`<h2><slot></slot></h2>`;
      case 'h3': return html`<h3><slot></slot></h3>`;
      case 'h4': return html`<h4><slot></slot></h4>`;
      case 'h5': return html`<h5><slot></slot></h5>`;
      case 'h6': return html`<h6><slot></slot></h6>`;
      case 'p': return html`<p><slot></slot></p>`;
      case 'small': return html`<small><slot></slot></small>`;
      case 'div': return html`<div><slot></slot></div>`;
      case 'span': return html`<span><slot></slot></span>`;
      case 'section': return html`<section><slot></slot></section>`;
      default: return html`<p><slot></slot></p>`;
    }
  }

  public static override styles = styles;
}

export default Text;
