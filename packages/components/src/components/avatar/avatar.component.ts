import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './avatar.styles';
import { Component } from '../../models';
import { AvatarType } from './avatar.types';
import { DEFAULTS, LENGTH_UNIT } from './avatar.constants';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-avatar
 * @tagname mdc-avatar
 */
class Avatar extends Component {
  @property({ type: String, reflect: true })
  type?: AvatarType = DEFAULTS.TYPE;

  @property({ type: String })
  alt?: string;

  @property({ type: String })
  src?: string;

  /**
   * Scale of the avatar
   */
  @property({ type: Number })
  scale?: number = DEFAULTS.SCALE;

  /**
   * Updates the size by setting the width and height
   */
  private updateSize() {
    if (this.scale) {
      const value = `${this.scale}${LENGTH_UNIT}`;
      this.style.width = value;
      this.style.height = value;
    }
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('scale')) {
      this.updateSize();
    }
  }

  photoTemplate() {
    return html`
      <img
        src="${ifDefined(this.src)}"
        alt="${ifDefined(this.alt)}"
      />
    `;
  }

  public override render() {
    let content;
    if (this.type === 'photo') {
      content = this.photoTemplate();
    } else {
      content = html``;
    }
    return html`${content}`;
  }

  public static override styles = styles;
}

export default Avatar;
