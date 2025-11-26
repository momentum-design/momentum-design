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
 * An accordion button is a vertically stacked component with a clickable header and expandable/collapsible body section.
 * The entire header is clickable to toggle the visibility of the body content.
 *
 * ### Header contains
 * - Optional prefix icon
 * - Header text (default H3, customizable via `data-aria-level`)
 * - Expand/collapse arrow icon (visual indicator)
 *
 * ### Body contains:
 * - Default slot for any content
 *
 * The accordion button supports different border styles through the `variant` attribute and different spacing through the `size` attribute.
 * An accordion button can be disabled, which prevents the header from being clickable.
 *
 * ## When to use
 * - Use `mdc-accordionbutton` for simple clickable headers without additional controls.
 * - Use `mdc-accordion` instead if you need extra controls (chips, badges, icons) in the header.
 *
 * ## Accessibility
 * - Adjust `data-aria-level` based on heading hierarchy in your page.
 * - Note: Screen readers may lose focus when toggling if accordion button is expanded by default.
 *
 * @tagname mdc-accordionbutton
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot default - The default slot contains the body section of the accordion. User can place anything inside this body slot.
 *
 * @event shown - (React: onShown) This event is triggered when the accordion button is toggled (expanded or collapsed).
 *
 * @cssproperty --mdc-accordionbutton-border-color - The border color of the accordion button.
 * @cssproperty --mdc-accordionbutton-hover-color - The hover background color of the accordion button header.
 * @cssproperty --mdc-accordionbutton-active-color - The active background color of the accordion button header.
 * @cssproperty --mdc-accordionbutton-disabled-color - The disabled text color of the accordion button.
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
   * Controls the spacing and padding of the accordion. 
   * - Small provides 1rem (16px) padding, large provides 1.5rem (24px) padding.
   * @default 'small'
   */
  @property({ type: String, reflect: true }) size: Size = DEFAULTS.SIZE;

  /**
   * Visual style variant of the accordion. 
   * - Default includes borders, borderless removes all border styling.
   * @default 'default'
   */
  @property({ type: String, reflect: true }) variant: Variant = DEFAULTS.VARIANT;

  /**
   * Specifies the heading level for accessibility purposes.
   * Should match the heading hierarchy of the page (e.g., 2 for H2, 3 for H3).
   * @default 3
   */
  @property({ type: Number, reflect: true, attribute: 'data-aria-level' }) dataAriaLevel: number =
    DEFAULTS.DATA_ARIA_LEVEL;

  /**
   * Controls whether the accordion body content is visible.
   * - When true, the body section is shown; when false, it is hidden.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) expanded: boolean = DEFAULTS.EXPANDED;

  /**
   * Text content displayed in the accordion header.
   */
  @property({ type: String, reflect: true, attribute: 'header-text' }) headerText?: string;

  /**
   * Icon displayed at the start of the accordion header, before the header text.
   * Must be a valid icon name.
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
