import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS } from './badge.constants';
import styles from './badge.styles';
import type { BadgeType, BadgeVariant } from './badge.types';

/**
 * @tagname mdc-badge
 */
class Badge extends Component {
  /**
   * Type of the badge
   * Can be `notification`, `icon`, `counter` and `text`
   *
   * Default: `notification`
   */
  @property({ type: String, reflect: true })
  type?: BadgeType = DEFAULTS.TYPE;

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

  /**
   * badge variant
   */
  @property({ type: String })
  variant?: BadgeVariant;

  @property({ type: Number })
  counter?: number;

  @property({ type: Number, attribute: 'max-counter' })
  maxCounter?: number;

  @property({ type: Boolean })
  overlay?: boolean;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  private getBadgeContentBasedOnType() {
    switch (this.type) {
      default:
        return html``;
    }
  }

  public override render() {
    return html`
      <div class="mdc-badge-container">
        ${this.getBadgeContentBasedOnType()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Badge;
