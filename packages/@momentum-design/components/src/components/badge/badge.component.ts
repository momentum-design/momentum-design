import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';
import { Component } from '../../models';
import { DEFAULTS, WARNING_ICON_NAME } from './badge.constants';
import styles from './badge.styles';
import type { BadgeType } from './badge.types';

/**
 * @slot - This is a default/unnamed slot
 *
 * @summary This is MyElement
 *
 * @tag mdc-badge
 * @tagname mdc-badge
 */
class Badge extends Component {
  /**
   * Type of the badge
   * Can be `regular`, `icon`, `text` or `warning`
   *
   * Default: `regular`
   */
  @property({ type: String, reflect: true })
  type?: BadgeType = DEFAULTS.TYPE;

  /**
   * Scale of the badge (works in combination with length unit)
   *
   * Default: `1`
   */
  @property({ type: Number })
  scale?: number = DEFAULTS.SCALE;

  /**
   * Length unit attribute for scale
   *
   * Default: `rem`
   */
  @property({ type: String, attribute: 'length-unit' })
  lengthUnit?: string = DEFAULTS.LENGTH_UNIT;

  /**
   * If `type` is set to `icon`, attribute `iconName` can
   * be used to choose which icon should be shown
   *
   * If no `iconName` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  /**
   * If `type` is set to `text`, attribute `text` can
   * be used to pass in any text to be displayed in the badge.
   */
  @property({ type: String })
  text?: string;

  private updateSize() {
    // if (this.scale && this.lengthUnit) {
    //   const value = `${this.scale}${this.lengthUnit}`;
    //   this.style.height = value;
    //   if (this.type !== 'text') {
    //     this.style.width = value;
    //   }
    // }
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has('scale') || changedProperties.has('lengthUnit')) {
      this.updateSize();
    }
  }

  iconTemplate() {
    return html`<div class="mdc-badge-icon-container">
      <mdc-icon name="${this.iconName}" scale="100" length-unit="%"></mdc-icon>
    </div>`;
  }

  textTemplate() {
    return html`${this.text}`;
  }

  warningTemplate() {
    return html` <mdc-icon name="${WARNING_ICON_NAME}" class="mdc-badge-warning"></mdc-icon> `;
  }

  public override render() {
    let content;
    const size = `${this.scale}${this.lengthUnit}`;
    let sizeStyles: StyleInfo = { width: size, height: size };

    switch (this.type) {
      case 'regular':
        content = html``;
        break;
      case 'icon':
        content = this.iconTemplate();
        break;
      case 'text':
        content = this.textTemplate();
        // make width flexible when text -> only set the height:
        sizeStyles = { height: sizeStyles.height };
        break;
      case 'warning':
        content = this.warningTemplate();
        break;
      default:
        content = html``;
        break;
    }

    return html`<div class="mdc-badge-container" style=${styleMap(sizeStyles)}>${content}</div>`;
  }

  public static override styles = styles;
}

export default Badge;
