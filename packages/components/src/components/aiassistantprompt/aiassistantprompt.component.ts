import type { CSSResult, PropertyValueMap } from 'lit';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';

import { DEFAULTS } from './aiassistantprompt.constants';
import styles from './aiassistantprompt.styles';

/**
 * @tagname mdc-aiassistantprompt
 *
 * @event input - (React: onInput) Dispatched when the prompt value changes on each keystroke.
 * @event change - (React: onChange) Dispatched when the prompt value is committed (on blur).
 * @event focus - (React: onFocus) Dispatched when the textarea receives focus.
 * @event blur - (React: onBlur) Dispatched when the textarea loses focus.
 *
 * @slot header - Content rendered above the typeable area, inside the prompt chrome.
 * @slot footer-left - Left-aligned footer content inside the prompt chrome.
 * @slot footer-right - Right-aligned footer content inside the prompt chrome.
 *
 * @csspart container - The bordered prompt chrome that wraps header, textarea, and footer.
 * @csspart header - The header region above the textarea.
 * @csspart textarea - The native textarea element.
 * @csspart footer - The footer region below the textarea.
 * @csspart footer-left - The left-aligned column of the footer.
 * @csspart footer-right - The right-aligned column of the footer.
 *
 * @cssproperty --mdc-aiassistantprompt-width - Width of the prompt.
 * @cssproperty --mdc-aiassistantprompt-text-color - Text color of the textarea.
 * @cssproperty --mdc-aiassistantprompt-background-color - Background color of the prompt chrome.
 * @cssproperty --mdc-aiassistantprompt-border-color - Border color of the prompt chrome.
 * @cssproperty --mdc-aiassistantprompt-text-font-size - Font size of the textarea.
 * @cssproperty --mdc-aiassistantprompt-text-line-height - Line height of the textarea.
 * @cssproperty --mdc-aiassistantprompt-container-padding - Padding inside the prompt chrome.
 * @cssproperty --mdc-aiassistantprompt-region-gap - Gap between header, textarea, and footer.
 * @cssproperty --mdc-aiassistantprompt-border-radius - Border radius of the prompt chrome.
 */
class AIAssistantPrompt extends FormInternalsMixin(DataAriaLabelMixin(Component)) {
  /**
   * Placeholder text shown when the textarea is empty.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * Visible number of text lines.
   * @default 1
   */
  @property({ type: Number, reflect: true }) rows: number = DEFAULTS.ROWS;

  /**
   * Disables the textarea.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Makes the textarea read-only.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * @internal
   */
  @query('textarea')
  protected override inputElement!: HTMLTextAreaElement;

  /** @internal */
  formResetCallback(): void {
    this.value = '';
    this.requestUpdate();
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    this.value = state;
  }

  private handleRegionSlotChange(
    event: Event,
    attribute: 'data-has-header' | 'data-has-footer-left' | 'data-has-footer-right',
  ): void {
    const slot = event.target as HTMLSlotElement;
    const hasContent = slot.assignedNodes({ flatten: true }).some(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return Boolean(node.textContent?.trim());
      }
      return node.nodeType === Node.ELEMENT_NODE;
    });
    this.toggleAttribute(attribute, hasContent);
  }

  private handleHeaderSlotChange(event: Event): void {
    this.handleRegionSlotChange(event, 'data-has-header');
  }

  private handleFooterLeftSlotChange(event: Event): void {
    this.handleRegionSlotChange(event, 'data-has-footer-left');
  }

  private handleFooterRightSlotChange(event: Event): void {
    this.handleRegionSlotChange(event, 'data-has-footer-right');
  }

  private handleContainerPointerDown(event: PointerEvent): void {
    if (this.disabled || this.readonly) {
      return;
    }

    const path = event.composedPath();
    const clickedHeaderOrFooter = path.some(node => {
      if (!(node instanceof HTMLElement)) {
        return false;
      }
      const part = node.getAttribute('part');
      return part === 'header' || part === 'footer' || part === 'footer-left' || part === 'footer-right';
    });

    if (clickedHeaderOrFooter || event.target === this.inputElement) {
      return;
    }

    this.inputElement?.focus();
  }

  private updateValue(): void {
    this.value = this.inputElement.value;
    this.internals.setFormValue(this.inputElement.value);
  }

  private onChange(event: Event): void {
    this.updateValue();
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  protected override updated(changedProperties: PropertyValueMap<AIAssistantPrompt> | Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('value')) {
      this.internals.setFormValue(this.value);
      this.setValidity();
    }
  }

  public override render() {
    return html`
      <div class="mdc-focus-ring" part="container" @pointerdown=${this.handleContainerPointerDown}>
        <div part="header">
          <slot name="header" @slotchange=${this.handleHeaderSlotChange}></slot>
        </div>
        <textarea
          part="textarea"
          name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          placeholder=${ifDefined(this.placeholder)}
          rows=${this.rows}
          aria-label=${ifDefined(this.dataAriaLabel ?? undefined)}
          @input=${this.updateValue}
          @change=${this.onChange}
        ></textarea>
        <div part="footer">
          <div part="footer-left">
            <slot name="footer-left" @slotchange=${this.handleFooterLeftSlotChange}></slot>
          </div>
          <div part="footer-right">
            <slot name="footer-right" @slotchange=${this.handleFooterRightSlotChange}></slot>
          </div>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default AIAssistantPrompt;
