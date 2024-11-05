import { CSSResult, html, PropertyValues, TemplateResult } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { FONT_TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { BADGE_TYPE, ICON_NAMES_LIST, DEFAULTS, ICON_VARIANT, ICON_STATE } from './badge.constants';
import styles from './badge.styles';

/**
 * The `mdc-badge` component is a versatile UI element used to
 * display dot, icons, counters, success, warning and error type badge.
 *
 * Supported badge types:
 * - `dot`: Displays a dot notification badge with a blue color.
 * - `icon`: Displays a badge with a specified icon using the `icon-name` attribute.
 * - `counter`: Displays a badge with a counter value. If the counter exceeds the `max-counter`,
 * it shows `maxCounter+`. The maximum value of the counter is 999 and anything about that will be set to `999+`.
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
  type?: string;

  /**
   * Name of the icon (= filename).
   *
   * If no `icon-name` is provided, no icon will be rendered.
   */
  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  /**
   * Type of the variant can be `primary` or `secondary`.
   * It defines the background and foreground color of the icon.
   */
  @property({ type: String, reflect: true })
  variant = DEFAULTS.VARIANT;

  /**
   * Counter is the number which can be provided in the badge.
   */
  @property({ type: Number })
  counter?: number;

  /**
   * The maximum number can be set up to 999, anything about that will be rendered as _999+_.
   * The max counter can be `9`, `99` or `999`.
   */
  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  /**
   * Overlay is to add a thin outline to the badge.
   * This will help distinguish between the badge and the button,
   * where the badge will be layered on top of a button.
   */
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
   * @param overlay - boolean indicating whether the badge should have an overlay.
   * @param iconVariant - the variant of the icon badge.
   * @param type - the type of the badge.
   * @returns the template result of the icon.
   */
  private getBadgeIcon(iconName: string, overlay: boolean, iconVariant: string, type?: string): TemplateResult {
    return html`
      <mdc-icon
        class="mdc-badge-icon ${classMap(this.getIconClasses(overlay, iconVariant, type))}"
        name="${ifDefined(iconName)}"
        length-unit="${DEFAULTS.LENGTH_UNIT}"
        size="${DEFAULTS.ICON_SIZE}"
      ></mdc-icon>
    `;
  }

  /**
   * Method to generate the badge dot template.
   * @param overlay - boolean indicating whether the badge should have an overlay.
   * @returns the template result of the dot with mdc-badge-dot class.
   */
  private getBadgeDot(overlay: boolean): TemplateResult {
    return html`<div class="mdc-badge-dot ${classMap({ 'mdc-badge-overlay': overlay })}"></div>`;
  }

  /**
   * This method generates the CSS classes for the badge icon.
   * @param overlay - boolean indicating whether the badge should have an overlay.
   * @param iconVariant - the variant of the icon badge.
   * @param type - the type of the badge.
   * @returns - an object containing the CSS classes for the icon.
   */
  private getIconClasses(overlay: boolean, iconVariant: string, type?: string): { [key: string]: boolean } {
    const overLayClass = { 'mdc-badge-overlay': overlay };
    const variantTypes = type === BADGE_TYPE.ICON ? ICON_VARIANT : ICON_STATE;
    const iconVariantType = Object.values(variantTypes).includes(iconVariant) ? iconVariant : DEFAULTS.VARIANT;
    const backgroundClass = { [`mdc-badge-icon__${iconVariantType}`]: true };
    return {
      ...overLayClass,
      ...backgroundClass,
    };
  }

  /**
   * Method to generate the badge text and counter template.
   * @param maxCounter - the maximum limit which can be displayed on the badge
   * @param overlay - whether the badge should have an overlay.
   * @param counter - the number to be displayed on the badge
   * @returns the template result of the text.
   */
  private getBadgeCounterText(maxCounter: number, overlay: boolean, counter?: number): TemplateResult {
    return html`
      <mdc-text
        type="${FONT_TYPE.BODY_SMALL_MEDIUM}"
        tagname="${VALID_TEXT_TAGS.DIV}"
        class="mdc-badge-text ${classMap({ 'mdc-badge-overlay': overlay })}"
      >
        ${this.getCounterText(maxCounter, counter)}
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
      this.variant = ICON_VARIANT.PRIMARY;
    }
    const { counter, iconName, maxCounter, overlay, type, variant } = this;
    switch (type) {
      case BADGE_TYPE.ICON:
        return this.getBadgeIcon(iconName || '', overlay, variant, type);
      case BADGE_TYPE.COUNTER:
        return this.getBadgeCounterText(maxCounter, overlay, counter);
      case BADGE_TYPE.SUCCESS:
        return this.getBadgeIcon(ICON_NAMES_LIST.SUCCESS_ICON_NAME, overlay, ICON_STATE.SUCCESS);
      case BADGE_TYPE.WARNING:
        return this.getBadgeIcon(ICON_NAMES_LIST.WARNING_ICON_NAME, overlay, ICON_STATE.WARNING);
      case BADGE_TYPE.ERROR:
        return this.getBadgeIcon(ICON_NAMES_LIST.ERROR_ICON_NAME, overlay, ICON_STATE.ERROR);
      case BADGE_TYPE.DOT:
      default:
        this.type = BADGE_TYPE.DOT;
        return this.getBadgeDot(overlay);
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
