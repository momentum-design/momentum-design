import { CSSResult, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DEFAULTS } from './badge.constants';
import styles from './badge.styles';
import type { BadgeType, BadgeVariant } from './badge.types';
import '../icon';
import '../text';

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
  variant: BadgeVariant = DEFAULTS.VARIANT;

  @property({ type: Number })
  counter?: number;

  @property({ type: Number, attribute: 'max-counter' })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  @property({ type: String })
  overlay = false;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  private getIconTypeBadgeHtml(): TemplateResult {
    return html`
      <mdc-icon
        name="${ifDefined(this.iconName)}"
        aria-hidden="${ifDefined(this.ariaLabel ? 'true' : 'false')}"
        aria-label="${ifDefined(this.ariaLabel || '')}"
      ></mdc-icon>
    `;
  }

  private getCounterToDisplay(counter: number, maxCounter: number): string {
    return counter > maxCounter ? `${maxCounter}+` : `${counter}`;
  }

  private getCounterTypeBadgeHtml(): TemplateResult {
    if (this.counter === undefined || typeof this.counter !== 'number') {
      return html``;
    }
    const counterToDisplay = this.getCounterToDisplay(this.counter, this.maxCounter);
    return html`
      <mdc-text>${counterToDisplay}</mdc-text>
    `;
  }

  private getBadgeContentBasedOnType() {
    switch (this.type) {
      case 'notification':
        return html`<span class="mdc-badge-base"></span>`;
      case 'icon':
        return this.getIconTypeBadgeHtml();
      case 'counter':
        return this.getCounterTypeBadgeHtml();
      case 'text':
        // All text is limited up to 4 characters only.
        return html`<mdc-text>${this.text?.slice(0, 4)}</mdc-text>`;
      default:
        return html``;
    }
  }

  private getBadgeBackgroundColor(): string {
    return ['icon', 'notification']
      .includes(this.type || '') ? `var(--mds-color-theme-indicator-${this.variant})` : 'initial';
  }

  public override render() {
    return html`
      <div
        class="mdc-badge-container"
        role="${ifDefined(this.ariaLabel ? 'img' : undefined)}"
        style="background-color: ${this.getBadgeBackgroundColor()};"
        aria-label="${this.ariaLabel || ''}"
      >
        ${this.getBadgeContentBasedOnType()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Badge;
