import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './avatar.styles';
import { Component } from '../../models';
import { AvatarType } from './avatar.types';
import '../presence';

/**
 * @slot - This is a default/unnamed slot
 *
 * @tagname mdc-avatar
 */
class Avatar extends Component {
  @property({ type: String })
  src?: string;

  @property({ type: String })
  alt?: string;

  @property({ type: String })
  initials?: string;

  @property({ type: Number })
  counter?: number;

  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
  }

  photoTemplate() {
    return html`
      <mdc-button class="container">
        <img
          class="photo"
          src="${ifDefined(this.src)}"
          alt="${ifDefined(this.alt)}"
        />
        <mdc-presence class="presence" type="active" size="xx_large"></mdc-presence>
      </mdc-button>
    `;
  }

  iconTemplate() {
    return html`
    <mdc-button class="container">
      <mdc-icon
        class="icon"
        name="${ifDefined(this.iconName)}"
        size="3"
      ></mdc-icon>
      <mdc-presence class="presence" type="active" size="xx_large"></mdc-presence>
      </mdc-button>
    `;
  }

  textTemplate(type: string) {
    let content = '';
    if (type === 'text' && this.initials) {
      content = this.initials.toUpperCase().slice(0, 2);
    }
    if (type === 'counter' && this.counter) {
      if (this.counter > 99) {
        content = '99+';
      } else {
        content = this.counter.toString();
      }
    }
    return html`
      <mdc-button class="container">
        <mdc-text>${content}</mdc-text>
        <mdc-presence class="presence" type="active" size="xx_large"></mdc-presence>
      </mdc-button>
    `;
  }

  private getTypeBasedOnInputs(): AvatarType {
    if (this.src && this.alt) {
      return 'photo';
    }
    if (this.initials) {
      return 'text';
    }
    if (this.iconName) {
      return 'icon';
    }
    if (this.counter) {
      return 'counter';
    }
    return 'icon';
  }

  public override render() {
    let content;
    const type = this.getTypeBasedOnInputs();
    switch (type) {
      case 'photo':
        return this.photoTemplate();
      case 'icon':
        return this.iconTemplate();
      case 'text':
      case 'counter':
        return this.textTemplate(type);
      default:
        content = html`
          <span class="initials">${this.initials}</span>
        `;
        break;
    }
    return html`${content}`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Avatar;
