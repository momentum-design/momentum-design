import { CSSResult, html, PropertyValues, TemplateResult } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { TYPE as FONT_TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TYPE as BADGE_TYPE, ICON_NAMES_LIST, DEFAULTS, ICON_VARIANT, ICON_STATE } from './badge.constants';
import styles from './badge.styles';
import type { IconNames } from '../icon/icon.types';
import type { IconVariant, BadgeType } from './badge.types';
/**
 * The `mdc-badge` component is a versatile UI element used to
 * display dot, icons, counters, success, warning and error type badge.
 *
 * Supported badge types:
 * - `dot`: Displays a dot notification badge with a blue color.
 * - `icon`: Displays a badge with a specified icon using the `icon-name` attribute.
 * - `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,
 * it shows `maxCounter+`. The maximum value of the counter is 999 and anything above that will be set to `999+`.
 * - `success`: Displays a success badge with a check circle icon and green color.
 * - `warning`: Displays a warning badge with a warning icon and yellow color.
 * - `error`: Displays a error badge with a error legacy icon and red color.
 *
 * For `icon`, `success`, `warning` and `error` types, the `mdc-icon` component is used to render the icon.
 *
 * For the `counter` type, the `mdc-text` component is used to render the counter value.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-badge
 */
class Badge extends Component {
  /**
   * Type of the badge
   * Can be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.
   */
  @property({ type: String, reflect: true })
  type?: BadgeType;

  /**
   * Name of the icon (= filename).
   *
   * If no `icon-name` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: IconNames;

  /**
   * Type of the variant can be `primary` or `secondary`.
   * It defines the background and foreground color of the icon.
   * @default primary
   */
  @property({ type: String, reflect: true })
  variant: IconVariant = DEFAULTS.VARIANT;

  /**
   * Counter is the number which can be provided in the badge.
   */
  @property({ type: Number })
  counter?: number;

  /**
   * The maximum number can be set up to 999, anything above that will be rendered as _999+_.
   * The max counter can be `9`, `99` or `999`.
   * @default 99
   */
  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  /**
   * Overlay is to add a thin outline to the badge.
   * This will help distinguish between the badge and the button,
   * where the badge will be layered on top of a button.
   * @default false
   */
  @property({ type: Boolean })
  overlay = false;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
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
    if (counter === undefined || typeof counter !== 'number' || maxCounter === 0) {
      return '';
    }
    if (counter > maxCounter) {
      return `${maxCounter}+`;
    }
    // At any given time, the max limit should not cross 999.
    if (maxCounter > DEFAULTS.MAX_COUNTER_LIMIT || counter > DEFAULTS.MAX_COUNTER_LIMIT) {
      return `${DEFAULTS.MAX_COUNTER_LIMIT}+`;
    }
    return counter.toString();
  }

  /**
   * Method to generate the badge icon.
   * @param iconName - the name of the icon from the icon set
   * @param backgroundClassPostfix - postfix for the class to style the badge icon.
   * @returns the template result of the icon.
   */
  private getBadgeIcon(iconName: string, backgroundClassPostfix: string): TemplateResult {
    return html`
      <mdc-icon
        class="mdc-badge-icon ${classMap({
    'mdc-badge-overlay': this.overlay,
    [`mdc-badge-icon__${backgroundClassPostfix}`]: true,
  })}"
        name="${ifDefined(iconName as IconNames)}"
        size="${DEFAULTS.ICON_SIZE}"
      ></mdc-icon>
    `;
  }

  /**
   * Method to generate the badge dot template.
   * @returns the template result of the dot with mdc-badge-dot class.
   */
  private getBadgeDot(): TemplateResult {
    return html`<div class="mdc-badge-dot ${classMap({ 'mdc-badge-overlay': this.overlay })}"></div>`;
  }

  /**
   * Method to generate the badge text and counter template.
   * @returns the template result of the text.
   */
  private getBadgeCounterText(): TemplateResult {
    return html`
      <mdc-text
        type="${FONT_TYPE.BODY_SMALL_MEDIUM}"
        tagname="${VALID_TEXT_TAGS.DIV}"
        class="mdc-badge-text ${classMap({ 'mdc-badge-overlay': this.overlay })}"
      >
        ${this.getCounterText(this.maxCounter, this.counter)}
      </mdc-text>
    `;
  }

  /**
   * Method to set the role based on the aria-label provided.
   * If the aria-label is provided, the role of the element will be 'img'.
   * Otherwise, the role will be null.
   */
  private setRoleByAriaLabel(): void {
    if (this.ariaLabel) {
      this.role = 'img';
    } else {
      this.role = null;
    }
  }

  /**
   * Generates the badge content based on the badge type.
   * Utilizes various helper methods to create the appropriate badge template based on the
   * current badge type. Supports 'dot', 'icon', 'counter', 'success', 'warning', and 'error'
   * types, returning the corresponding template result for each type.
   * @returns the TemplateResult for the current badge type.
   */
  private getBadgeContentBasedOnType(): TemplateResult {
    if (this.variant && !Object.values(ICON_VARIANT).includes(this.variant)) {
      this.variant = DEFAULTS.VARIANT;
    }
    const { iconName, type, variant } = this;
    switch (type) {
      case BADGE_TYPE.ICON:
        return this.getBadgeIcon(iconName || '', variant);
      case BADGE_TYPE.COUNTER:
        return this.getBadgeCounterText();
      case BADGE_TYPE.SUCCESS:
        return this.getBadgeIcon(ICON_NAMES_LIST.SUCCESS_ICON_NAME, ICON_STATE.SUCCESS);
      case BADGE_TYPE.WARNING:
        return this.getBadgeIcon(ICON_NAMES_LIST.WARNING_ICON_NAME, ICON_STATE.WARNING);
      case BADGE_TYPE.ERROR:
        return this.getBadgeIcon(ICON_NAMES_LIST.ERROR_ICON_NAME, ICON_STATE.ERROR);
      case BADGE_TYPE.DOT:
      default:
        this.type = BADGE_TYPE.DOT;
        return this.getBadgeDot();
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
