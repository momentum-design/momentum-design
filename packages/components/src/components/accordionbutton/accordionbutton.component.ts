import type { CSSResult, TemplateResult } from 'lit';
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
import type { Variant } from './accordionbutton.types';
import styles from './accordionbutton.styles';

/**
 * accordionbutton component, which ...
 * @tagname mdc-accordionbutton
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
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
  @property({ type: Number, reflect: true, attribute: 'data-aria-level' }) dataAriaLevel = DEFAULTS.DATA_ARIA_LEVEL;

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

  protected handleHeaderClick(): void {
    if (this.disabled) return;
    this.expanded = !this.expanded;
    this.dispatchHeaderClickEvent();
  }

  private dispatchHeaderClickEvent(): void {
    const event = new CustomEvent('onexpanded', {
      bubbles: true,
      cancelable: true,
      detail: {
        expanded: this.expanded,
      },
    });
    this.dispatchEvent(event);
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
      this.handleHeaderClick();
    }
  }

  protected renderIcon(iconName?: IconNames): TemplateResult | typeof nothing {
    return iconName ? html`<mdc-icon name="${iconName}"></mdc-icon>` : nothing;
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
            ${this.renderIcon(this.expanded ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN)}
          </div>
        </div>
      </div>
    `;
  }

  protected renderBody(): TemplateResult | typeof nothing {
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

  public override render() {
    return html` ${this.renderHeader()} ${this.renderBody()} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AccordionButton;
