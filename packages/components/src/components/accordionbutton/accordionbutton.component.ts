import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { v4 as uuidv4 } from 'uuid';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { ROLE } from '../../utils/roles';
import type { Size } from '../accordiongroup/accordiongroup.types';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS, ICON_NAME } from './accordionbutton.constants';
import type { IconName, Variant } from './accordionbutton.types';
import styles from './accordionbutton.styles';

/**
 * An accordion button contains a header and body section with optional slots inside the heading which are focusable.
 *
 * The header section contains:
 * - Prefix Icon
 * - Header Text
 *
 * The body section contains:
 * - Default slot - User can place any content inside the body section.
 *
 * The accordion button can be expanded or collapsed. The visibility of the body section can be controlled by `expanded` attribute. <br/>
 * There are two types of variants based on that the border styling of the accordion gets reflected. <br/>
 * There are two sizes of accordion, one is small and the other is large.
 * Small size has a padding of 1rem (16px) and large size has a padding of 1.5rem (24px) for the body section of accordion.
 *
 * By default, the header text in the accordion heading is of H3 with an aria-level of '3'.
 * If this accordion is placed on any other level in the entire webpage, then do adjust the aria-level number based on that.
 *
 * An accordion can be disabled, and when it's disabled, the header section will not be clickable.
 *
 * If you do need any controls on your accordion heading, then it's advised to use `accordion` component.
 *
 * If an accordion button is expanded by default, then the screen reader might loose focus when toggling the visibilty of the accordion button.
 *
 * @tagname mdc-accordionbutton
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot default - The default slot contains the body section of the accordion. User can place anything inside this body slot.
 *
 * @event shown - (React: onShown) This event is triggered when the accordion button is expanded.
 *
 * @cssproperty --mdc-accordionbutton-border-color - The border color of the accordion button.
 * @cssproperty --mdc-accordionbutton-hover-color - The hover color of the accordion button.
 * @cssproperty --mdc-accordionbutton-active-color - The active color of the accordion button.
 * @cssproperty --mdc-accordionbutton-disabled-color - The disabled color of the accordion button.
 *
 * @csspart body-section - The body section of the accordion button.
 * @csspart header-button-section - The header button section of the accordion button.
 * @csspart header-section - The header section of the accordion button.
 * @csspart leading-header - The leading header of the accordion button.
 * @csspart trailing-header - The trailing header of the accordion button.
 * @csspart trailing-header__icon - The trailing header icon of the accordion button.
 */
class AccordionButton extends DisabledMixin(Component) {
  /**
   * The size of the accordion item.
   * @default 'small'
   */
  @property({ type: String, reflect: true }) size: Size = DEFAULTS.SIZE;

  /**
   * The variant of the accordion item. Based on the variant, the styling of the accordion gets changed.
   * @default 'default'
   */
  @property({ type: String, reflect: true }) variant: Variant = DEFAULTS.VARIANT;

  /**
   * The aria level of the accordion component.
   * @default 3
   */
  @property({ type: Number, reflect: true, attribute: 'data-aria-level' }) dataAriaLevel: number =
    DEFAULTS.DATA_ARIA_LEVEL;

  /**
   * The visibility of the accordion button.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) expanded: boolean = DEFAULTS.EXPANDED;

  /**
   * The header text of the accordion item.
   */
  @property({ type: String, reflect: true, attribute: 'header-text' }) headerText?: string;

  /**
   * The leading icon that is displayed before the header text.
   */
  @property({ type: String, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  /** @internal */
  private headSectionId = `head-section-${uuidv4()}`;

  /** @internal */
  protected bodySectionId = `body-section-${uuidv4()}`;

  /**
   * Handles the click event of the header section.
   * If the accordion is disabled, it will not toggle the expanded state.
   * It will dispatch the `shown` event with the current expanded state.
   */
  protected handleHeaderClick(): void {
    if (this.disabled) return;
    this.expanded = !this.expanded;
    this.dispatchHeaderClickEvent();
  }

  /**
   * Dispatches the `shown` event with the current expanded state.
   * The event is cancelable and bubbles.
   * The event detail contains the current expanded state.
   */
  private dispatchHeaderClickEvent(): void {
    const event = new CustomEvent('shown', {
      bubbles: true,
      cancelable: true,
      detail: {
        expanded: this.expanded,
      },
    });
    this.dispatchEvent(event);
  }

  /**
   * Handles the keydown event of the component.
   * If the key pressed is either Enter or Space, it calls the handleHeaderClick method.
   * This allows keyboard users to toggle the accordion button using these keys.
   * @param event - The KeyboardEvent fired.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
      this.handleHeaderClick();
    }
  }

  protected renderIcon(iconName?: IconNames): TemplateResult | typeof nothing {
    return iconName ? html`<mdc-icon name="${iconName}" length-unit="rem" size="1"></mdc-icon>` : nothing;
  }

  protected renderHeadingText(): TemplateResult | typeof nothing {
    return this.headerText
      ? html`<mdc-text id="${this.headSectionId}" type="${TYPE.BODY_LARGE_REGULAR}" tagname=${VALID_TEXT_TAGS.SPAN}
          >${this.headerText}</mdc-text
        >`
      : nothing;
  }

  protected renderHeader(): TemplateResult {
    return html`
      <div
        part="header-section"
        class="mdc-focus-ring"
        @click="${this.handleHeaderClick}"
        @keydown="${this.handleKeyDown}"
        role="${ROLE.HEADING}"
        aria-level="${this.dataAriaLevel}"
        tabindex="${this.disabled ? -1 : 0}"
      >
        <div
          part="header-button-section"
          role="${ROLE.BUTTON}"
          aria-expanded="${this.expanded}"
          aria-controls="${this.bodySectionId}"
        >
          <div part="leading-header">${this.renderIcon(this.prefixIcon)} ${this.renderHeadingText()}</div>
          <div part="trailing-header">
            <div part="trailing-header__icon">${this.renderIcon(this.getArrowIconName())}</div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Returns the icon name based on the expanded state.
   * If the accordion button is disabled, it always returns the arrow down icon.
   * Otherwise, it returns the arrow up icon if the accordion button is expanded, otherwise the arrow down icon.
   * @returns The icon name based on the expanded state.
   */
  protected getArrowIconName(): IconName {
    if (this.disabled) {
      return ICON_NAME.ARROW_DOWN;
    }
    return this.expanded ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN;
  }

  protected renderBody(): TemplateResult | typeof nothing {
    // When disabled, then the body section should not be visible,
    // even if the expanded attribute is set true.
    if (this.disabled) {
      return nothing;
    }
    if (this.expanded) {
      return html`<div
        id="${this.bodySectionId}"
        aria-labelledby="${this.headSectionId}"
        part="body-section"
        role="${ROLE.REGION}"
      >
        <slot></slot>
      </div>`;
    }
    return nothing;
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`);
    }
    if (changedProperties.has('dataAriaLevel') && !this.dataAriaLevel) {
      this.dataAriaLevel = DEFAULTS.DATA_ARIA_LEVEL;
    }
    if (changedProperties.has('size') && !this.size) {
      this.size = DEFAULTS.SIZE;
    }
    if (changedProperties.has('variant') && !this.variant) {
      this.variant = DEFAULTS.VARIANT;
    }
  }

  public override render() {
    return html` ${this.renderHeader()} ${this.renderBody()} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AccordionButton;
