import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { BUTTON_TYPE, DEFAULTS } from './buttonsimple.constants';
import styles from './buttonsimple.styles';
import type { ButtonSize, ButtonType } from './buttonsimple.types';

/**
 * `mdc-buttonsimple` is a component that can be configured in various ways to suit different use cases.
 * It is used as an internal component and is not intended to be used directly by consumers.
 * Consumers should use the `mdc-button` component instead.
 *
 * @event click - (React: onClick) This event is dispatched when the button is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the button.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the button.
 * @event focus - (React: onFocus) This event is dispatched when the button receives focus.
 *
 * @tagname mdc-buttonsimple
 */
class Buttonsimple extends TabIndexMixin(DisabledMixin(Component)) {
  /**
   * The button's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) active = false;

  /**
   * Indicates whether the button is soft disabled.
   * When set to `true`, the button appears visually disabled but still allows
   * focus, click, and keyboard actions to be passed through.
   *
   * **Important:** When using soft disabled, consumers must ensure that
   * the button behaves like a disabled button, allowing only focus and
   * preventing any interactions (clicks or keyboard actions) from triggering unintended actions.
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled = false;

  /**
   * Simplebutton size is a super set of all the sizes supported by children components.
   * @default 32
   */
  @property({ type: Number, reflect: true }) size: ButtonSize = DEFAULTS.SIZE;

  /**
   * This property defines the ARIA role for the element. By default, it is set to 'button'.
   * Consumers should override this role when:
   * - The element is being used in a context where a different role is more appropriate.
   * - Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.
   * @default button
   */
  @property({ type: String, reflect: true }) override role = DEFAULTS.ROLE;

  /**
   * This property defines the type attribute for the button element.
   * The type attribute specifies the behavior of the button when it is clicked.
   * - **submit**: The button submits the form data to the server.
   * - **reset**: The button resets the form data to its initial state.
   * - **button**: The button does nothing when clicked.
   * @default button
   */
  @property({ reflect: true })
  type: ButtonType = DEFAULTS.TYPE;

  /**
   * @internal
   */
  private prevTabindex = 0;

  /** @internal */
  static formAssociated = true;

  /** @internal */
  private internals: ElementInternals;

  /** @internal */
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  constructor() {
    super();
    /** @internal */
    this.internals = this.attachInternals();
    this.addEventListener('click', this.executeAction.bind(this));
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled(this, this.softDisabled);
    }
    if (changedProperties.has('active')) {
      this.setActive(this, this.active);
    }
  }

  protected executeAction() {
    if (this.type === BUTTON_TYPE.SUBMIT && this.form) {
      this.form.requestSubmit();
    }

    if (this.type === BUTTON_TYPE.RESET && this.form) {
      this.form.reset();
    }
  }

  /**
   * Sets the aria-pressed attribute based on the active state of the button.
   * @param element - The button element
   * @param active - The active state of the element
   */
  protected setActive(element: HTMLElement, active: boolean) {
    if (active) {
      element.setAttribute('aria-pressed', 'true');
    } else {
      element.removeAttribute('aria-pressed');
    }
  }

  /**
   * Sets the soft-disabled attribute for the button.
   * When soft-disabled, the button looks to be disabled but remains focusable and clickable.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The button element.
   * @param softDisabled - The soft-disabled state.
   */
  private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
    if (softDisabled) {
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('aria-disabled');
    }
  }

  /**
   * Sets the disabled attribute for the button.
   * When disabled, the button is not focusable or clickable, and tabindex is set to -1.
   * The previous tabindex is stored and restored when enabled.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The button element.
   * @param disabled - The disabled state.
   */
  private setDisabled(element: HTMLElement, disabled: boolean) {
    if (disabled) {
      element.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
    } else {
      if (this.tabIndex === -1) {
        this.tabIndex = this.prevTabindex;
      }
      element.removeAttribute('aria-disabled');
    }
  }

  private triggerClickEvent() {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    this.dispatchEvent(clickEvent);
  }

  /**
   * In case the button is pressed and the focus is lost while pressing,
   * the pressed class is removed.
   */
  private handleBlur() {
    if (this.classList.contains('pressed')) {
      this.classList.remove('pressed');
    }
  }

  /**
   * Handles the keydown event on the button.
   * If the key is 'Enter' or 'Space', the button is pressed.
   * If the key is 'Enter', the button is pressed. The native HTML button works in the same way.
   * If the key is 'Space', the button's default is prevent to avoid scrolling etc in the host application.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if (['Enter', ' '].includes(event.key)) {
      this.classList.add('pressed');
      if (event.key === 'Enter') {
        this.triggerClickEvent();
      }

      if (event.key === ' ') {
        event.preventDefault();
      }
    }
  }

  /**
   * Handles the keyup event on the button.
   * If the key is 'Enter' or 'Space', the button is clicked.
   * If the key is 'Space', the button is pressed. The native HTML button works in the same way.
   *
   * @param event - The keyboard event.
   */
  private handleKeyUp(event: KeyboardEvent) {
    if (['Enter', ' '].includes(event.key)) {
      this.classList.remove('pressed');
      if (event.key === ' ') {
        this.triggerClickEvent();
      }
    }
  }

  public override render() {
    return html`
      <slot></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Buttonsimple;
