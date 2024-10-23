import { CSSResult, html, TemplateResult } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DEFAULTS } from './badge.constants';
import styles from './badge.styles';
import { BadgeType, BadgeVariant } from './badge.types';
import '../icon';
import '../text';

/**
 * A badge is a small, visually distinct element that provides additional information
 * or highlights the status of an item.
 * Badges are often used to display notifications, counts,
 * or text in a compact form, making them a useful tool for conveying information quickly
 * without taking up much space.
 *
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
  type: BadgeType = DEFAULTS.TYPE;

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

  @property({ type: Boolean })
  overlay = false;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * If `type` is set to `counter` and if `counter` is greater than `maxCounter`,
   * then it will return a string the maxCounter value as string.
   * Otherwise, it will return a string representation of `counter`.
   * If `counter` is not a number, it will return an empty string.
   */
  private getCounterText(maxCounter: number, counter?: number): string {
    if (counter === undefined || typeof counter !== 'number') {
      return '';
    }
    return counter > maxCounter ? `${maxCounter}+` : `${counter}`;
  }

  /**
   * Method to generate the badge icon and notification template.
   * @param iconName - name of the icon to be used.
   * @param ariaLabel - aria-label attribute for accessibility.
   * @param variant - variant of the badge.
   * @param type - type of the badge.
   * @param overlay - whether the badge should have an overlay.
   * @returns the template result of the icon.
   */
  private getBadgeIcon(
    iconName: string,
    ariaLabel: string | null,
    variant: BadgeVariant,
    type: BadgeType,
    overlay: boolean,
  ): TemplateResult {
    const colorVariant = variant === undefined ? BadgeVariant.SECURE : variant;
    const iconStyles = {
      color: `var(--mds-color-theme-indicator-${colorVariant})`,
    };
    return html`
      <mdc-icon
        name="${ifDefined(iconName)}"
        length-unit="${DEFAULTS.LENGTH_UNIT}"
        size="${type === BadgeType.NOTIFICATION ? 1 : DEFAULTS.ICON_SIZE}" 
        aria-hidden="${ifDefined(ariaLabel ? 'true' : 'false')}"
        aria-label="${ifDefined(ariaLabel || '')}"
        style=${styleMap(iconStyles)}
        class="${classMap({ 'mdc-badge-overlay': overlay })}"
      ></mdc-icon>
    `;
  }

  /**
   * Method to generate the badge text and counter template.
   * @param text - text to be displayed in the badge.
   * @param overlay - whether the badge should have an overlay.
   * @returns the template result of the text.
   */
  private getBadgeText(text: string, overlay: boolean): TemplateResult {
    return html`
      <mdc-text
        type="body-small-medium"
        tagname="span"
        class="mdc-badge-text ${classMap({ 'mdc-badge-overlay': overlay })}"
      >
        ${text}
      </mdc-text>
    `;
  }

  /**
   * Generates the content of the badge based on the type.
   * @returns the template result of the text.
   */
  private getBadgeContentBasedOnType(): TemplateResult {
    const { ariaLabel, counter, iconName, maxCounter, overlay, text, type, variant } = this;
    switch (type) {
      case BadgeType.NOTIFICATION:
        return this.getBadgeIcon(DEFAULTS.ICON_NAME, ariaLabel, variant, type, overlay);
      case BadgeType.ICON:
        return this.getBadgeIcon(iconName || '', ariaLabel, variant, type, overlay);
      case BadgeType.COUNTER: {
        const counterText = this.getCounterText(maxCounter, counter);
        return this.getBadgeText(counterText, overlay);
      }
      case BadgeType.TEXT:
        // All text is limited up to 4 characters only.
        return this.getBadgeText(text?.slice(0, 4) || '', overlay);
      default:
        return html``;
    }
  }

  public override render() {
    return html`
      <div
        class="mdc-badge-container"
        role="${ifDefined(this.ariaLabel ? 'img' : undefined)}"
        aria-label="${this.ariaLabel || ''}"
      >
        ${this.getBadgeContentBasedOnType()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Badge;
