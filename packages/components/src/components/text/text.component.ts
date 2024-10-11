import { html } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './text.styles';
import { Component } from '../../models';
import type { FontType } from './text.types';
import { DEFAULTS } from './text.constants';
import { isValidTag } from './text.utils';

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
 */
class Text extends Component {
  /**
   * Text Type - defines how the text should be rendered
   *
   * Possible values:
   *
   * 'body-small-regular'
    | 'body-small-medium'
    | 'body-small-bold'
    | 'body-midsize-regular'
    | 'body-midsize-medium'
    | 'body-midsize-bold'
    | 'body-large-regular'
    | 'body-large-medium'
    | 'body-large-bold'
    | 'body-small-regular-underline'
    | 'body-small-medium-underline'
    | 'body-midsize-regular-underline'
    | 'body-midsize-medium-underline'
    | 'body-large-regular-underline'
    | 'body-large-medium-underline'
    | 'heading-small-regular'
    | 'heading-small-medium'
    | 'heading-small-bold'
    | 'heading-midsize-regular'
    | 'heading-midsize-medium'
    | 'heading-midsize-bold'
    | 'heading-large-regular'
    | 'heading-large-medium'
    | 'heading-large-bold'
    | 'heading-xlarge-regular'
    | 'heading-xlarge-medium'
    | 'heading-xlarge-bold'
    | 'headline-small-light'
    | 'headline-small-regular';
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type: FontType = DEFAULTS.TYPE;

  /**
   * Tag name of the text element. Default is `p`. This is an optional attribute.
   * Setting this attribute will change the tag name of the text element.
   *
   * For example, setting this attribute to `h2` will render the text element as a `h2` element.
   * However, the styling is applied based on the `type` attribute.
   */
  @property({ attribute: 'tagname', reflect: true, type: String })
  public tagname?: string = DEFAULTS.TAG_NAME;

  constructor() {
    super();
    if (this.tagname && isValidTag(this.tagname)) {
      this.tagname = this.tagname.toLowerCase();
    }
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);
  }

  public override render() {
    if (!this.type) {
      return null;
    }

    return html`<h3 class=${this.type}><slot></slot></h3>`;
  }

  public static override styles = styles;
}

export default Text;
