// AI-Assisted
import { CSSResult, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/focus/FocusTrapMixin';

import { DEFAULTS } from './focustrap.constants';
import styles from './focustrap.styles';

/**
 * @tagname mdc-focustrap
 *
 * @event focus-trap-activated - (React: onFocusTrapActivated) Fired when the focus trap is activated.
 * @event focus-trap-deactivated - (React: onFocusTrapDeactivated) Fired when the focus trap is deactivated.
 *
 * @slot default - Default slot – place any focusable content here.
 */
class FocusTrap extends FocusTrapMixin(Component) {
  /**
   * When `true`, disables keyboard focus trapping inside this component.
   * When `false` (default), focus will be trapped.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'trap-disabled' })
  trapDisabled: boolean = DEFAULTS.TRAP_DISABLED;

  /**
   * Implements the abstract `focusTrap` required by `FocusTrapMixin`.
   * Kept in sync with the public `trapDisabled` property (inverted).
   * @internal
   */
  protected focusTrap: boolean = true;

  /**
   * When `true`, disables restoring focus to the previously focused element
   * when `trapDisabled` is set to `true` or the component is disconnected from the DOM.
   * When `false` (default), focus will be restored.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'restore-focus-disabled' })
  restoreFocusDisabled: boolean = DEFAULTS.RESTORE_FOCUS_DISABLED;

  /**
   * When `true`, the first focusable element inside the container receives focus
   * automatically when focus trapping is enabled (when `trapDisabled` is `false`).
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'auto-focus' })
  autoFocus: boolean = DEFAULTS.AUTO_FOCUS;

  /** @internal – the element that had focus before the trap was activated */
  private previouslyFocusedElement: HTMLElement | null = null;

  override disconnectedCallback() {
    const shouldRestoreFocus = !this.trapDisabled;

    this.deactivateFocusTrap();

    if (shouldRestoreFocus) {
      this.restorePreviousFocus();
    }

    super.disconnectedCallback();
  }

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('trapDisabled')) {
      // Keep focusTrap in sync with trapDisabled (inverted)
      this.focusTrap = !this.trapDisabled;

      if (!this.trapDisabled) {
        this.previouslyFocusedElement = (document.activeElement as HTMLElement) ?? null;
        this.activateFocusTrap();

        if (this.autoFocus) {
          // Slotted children (e.g. mdc-input) may not have completed their own first render yet
          // at this point, so findFocusable() would find nothing. Defer to the next animation
          // frame, by which time all pending Lit updates have flushed.
          requestAnimationFrame(() => {
            if (this.autoFocus && !this.trapDisabled) {
              this.setInitialFocus();
            }
          });
        }

        this.dispatchEvent(new CustomEvent('focus-trap-activated', { bubbles: true, composed: true }));
      } else {
        this.deactivateFocusTrap();
        this.restorePreviousFocus();
        this.dispatchEvent(new CustomEvent('focus-trap-deactivated', { bubbles: true, composed: true }));
      }
    }
  }

  /**
   * Restores focus to the element that was focused before the trap was activated,
   * if `restoreFocusDisabled` is false.
   */
  private restorePreviousFocus() {
    if (!this.restoreFocusDisabled && this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus({ preventScroll: true });
    }
    this.previouslyFocusedElement = null;
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FocusTrap;
// End AI-Assisted
