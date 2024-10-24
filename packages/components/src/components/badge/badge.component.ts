import { CSSResult, html, PropertyValues, TemplateResult } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { BADGE_TYPE, BADGE_VARIANT, DEFAULTS } from './badge.constants';
import styles from './badge.styles';

/**
 * A badge is a small, visually distinct element that provides additional information
 * or highlights the status of an item.
 * Badges are often used to display notifications, counts, making them a useful tool for
 * conveying information quickly without taking up much space.
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-badge
 */
class Badge extends Component {
  /**
   * Type of the badge
   * Can be `notification`, `icon` and `counter`
   *
   * Default: `notification`
   */
  @property({ type: String, reflect: true })
  type = DEFAULTS.TYPE;

  /**
   * If `type` is set to `icon`, attribute `iconName` can
   * be used to choose which icon should be shown
   *
   * If no `iconName` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  /**
   * badge variant
   */
  @property({ type: String })
  variant = DEFAULTS.VARIANT;

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
   * @param maxCounter - the maximum limit which can be displayed on the badge
   * @param counter - the number to be displayed on the badge
   * @returns the string representation of the counter
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
   * @param variant - variant of the badge.
   * @returns the template result of the icon.
   */
  private getBadgeIcon(
    iconName: string,
    variant: string,
  ): TemplateResult {
    return html`
      <mdc-icon
        name="${ifDefined(iconName)}"
        length-unit="${DEFAULTS.LENGTH_UNIT}"
        size="${DEFAULTS.ICON_SIZE}"
        style="${styleMap({ color: this.getColorThemeByVariant(variant) })}"
      ></mdc-icon>
    `;
  }

  /**
   * Method to generate the badge text and counter template.
   * @param maxCounter - the maximum limit which can be displayed on the badge
   * @param overlay - whether the badge should have an overlay.
   * @param counter - the number to be displayed on the badge
   * @returns the template result of the text.
   */
  private getBadgeText(maxCounter: number, overlay: boolean, counter?: number): TemplateResult {
    return html`
      <mdc-text
        type="body-small-medium"
        tagname="div"
        style="${styleMap({ backgroundColor: this.getColorThemeByVariant() })}"
        class="mdc-badge-text ${classMap({ 'mdc-badge-overlay': overlay })}"
      >
        ${this.getCounterText(maxCounter, counter)}
      </mdc-text>
    `;
  }

  /**
   * Given a variant, it returns the color theme variable string.
   * If no variant is given, it will return the default SECURE color theme variable string.
   * @param variant - the variant to get the color theme variable string
   * @returns the color theme variable string
   */
  private getColorThemeByVariant(variant?: string): string {
    if (variant && Object.values(BADGE_VARIANT).includes(variant)) {
      return `var(--mds-color-theme-indicator-${variant})`;
    }
    return `var(--mds-color-theme-indicator-${BADGE_VARIANT.SECURE})`;
  }

  private setRoleByAriaLabel(): void {
    if (this.ariaLabel) {
      this.role = 'img';
    } else {
      this.role = null;
    }
  }

  /**
   * Method to generate the badge notification template.
   * @param overlay - whether the badge should have an overlay.
   * @param variant - variant of the badge.
   * @returns the template result of the notification.
   */
  private getBadgeNotification(overlay: boolean, variant: string): TemplateResult {
    return html`
      <div
        class="mdc-badge-notification ${classMap({ 'mdc-badge-overlay': overlay })}"
        style="${styleMap({ backgroundColor: this.getColorThemeByVariant(variant) })}"
      ></div>`;
  }

  /**
   * Generates the content of the badge based on the type.
   * @returns the template result of the text.
   */
  private getBadgeContentBasedOnType(): TemplateResult {
    const { counter, iconName, maxCounter, overlay, type, variant } = this;
    switch (type) {
      case BADGE_TYPE.NOTIFICATION:
        return this.getBadgeNotification(overlay, variant);
      case BADGE_TYPE.ICON:
        return this.getBadgeIcon(iconName || '', variant);
      case BADGE_TYPE.COUNTER:
        return this.getBadgeText(maxCounter, overlay, counter);
      default:
        return html``;
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('ariaLabel')) {
      this.setRoleByAriaLabel();
    }
  }

  public override render() {
    return this.getBadgeContentBasedOnType();
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Badge;
