import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { computePosition, autoUpdate, offset, flip, shift, arrow, size } from '@floating-ui/dom';
import styles from './popover.styles';
import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { popoverStack } from './popover.stack';
import type { PopoverPlacement, PopoverTrigger } from './popover.types';
import type { ModalContainerColor, ModalContainerRole } from '../modalcontainer/modalcontainer.types';
import { COLOR, ROLE } from '../modalcontainer/modalcontainer.constants';
import { DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from './popover.constants';
import { ValueOf } from '../../utils/types';

/**
 * Popover component is a lightweight floating UI element that displays additional content when triggered.
 * It can be used for tooltips, dropdowns, or contextual menus.
 * The popover automatically positions itself based on available space and
 * supports dynamic height adjustments with scrollable content when needed。
 *
 * @dependency mdc-button
 * @dependency mdc-modalcontainer
 *
 * @tagname mdc-popover
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 *
 * @slot - Default slot for modal container
 *
 */
class Popover extends FocusTrapMixin(Component) {
  /**
   * The unique ID of the popover.
   */
  @property({ type: String })
  override id: string = '';

  /**
   * The ID of the element that triggers the popover.
   */
  @property({ type: String })
  triggerID: string = '';

  /**
   * The event that triggers the popover.
   * - **click**
   * - **mouseenter**
   * - **focusin**
   * - **manual**
   * @default click
   */
  @property({ type: String, reflect: true })
  trigger: PopoverTrigger = DEFAULTS.TRIGGER;

  /**
   * The placement of the popover.
   * - **top**
   * - **top-start**
   * - **top-end**
   * - **bottom**
   * - **bottom-start**
   * - **bottom-end**
   * - **left**
   * - **left-start**
   * - **left-end**
   * - **right**
   * - **right-start**
   * - **right-end**
   * @default bottom
   */
  @property({ type: String, reflect: true })
  placement: PopoverPlacement = DEFAULTS.PLACEMENT;

  /**
   * Color of the popover
   * - **tonal**
   * - **contrast**
   * @default tonal
   */
  @property({ type: String, reflect: true })
  color: ModalContainerColor = DEFAULTS.COLOR;

  /**
   * The visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  visible: boolean = DEFAULTS.VISIBLE;

  /**
   * The offset of the popover.
   * @default 4
   */
  @property({ type: Number, reflect: true })
  offset: number = DEFAULTS.OFFSET;

  /**
   * Determines whether the focus trap is enabled.
   * If true, focus will be restricted to the content within this component.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-trap' })
  focusTrap: boolean = DEFAULTS.FOCUS_TRAP;

  /**
   * Prevent outside scrolling when popover show.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-scroll' })
  preventScroll: boolean = DEFAULTS.PREVENT_SCROLL;

  /**
   * The arrow visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, attribute: 'show-arrow' })
  showArrow: boolean = DEFAULTS.ARROW;

  /**
   * The close button visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-button' })
  closeButton: boolean = DEFAULTS.CLOSE_BUTTON;

  /**
   * Determines whether the popover is interactive。
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  interactive: boolean = DEFAULTS.INTERACTIVE;

  /**
   * The delay of the show/hide popover.
   * @default 0,0
   */
  @property({ type: String, reflect: true })
  delay: string = DEFAULTS.DELAY;

  /**
   * Hide popover on escape key press.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-escape' })
  hideOnEscape: boolean = DEFAULTS.HIDE_ON_ESCAPE;

  /**
   * Hide popover on blur.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-blur' })
  hideOnBlur: boolean = DEFAULTS.HIDE_ON_BLUR;

  /**
   * Hide on outside click of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-outside-click' })
  hideOnOutsideClick: boolean = DEFAULTS.HIDE_ON_CLICK_OUTSIDE;

  /**
   * The focus back to trigger after the popover hide.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-back-to-trigger' })
  focusBackToTrigger: boolean = DEFAULTS.FOCUS_BACK;

  /**
   * Determines whether the popover with backdrop.
   * Other than popover and trigger element, the rest of the screen will be covered with a backdrop.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  backdrop: boolean = DEFAULTS.BACKDROP;

  /**
   * Changes the placement of popover to keep it in view when scrolling.
   * @default true
   */
  @property({ type: Boolean, reflect: true })
  flip: boolean = DEFAULTS.FLIP;

  /**
   * Changes the size of popover to keep it in view when scrolling.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  size: boolean = DEFAULTS.SIZE;

  /**
   * The z-index of the popover.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'z-index' })
  zIndex: number = DEFAULTS.Z_INDEX;

  /**
   * Element ID that the popover append to.
   * @default ''
   */
  @property({ type: String, reflect: true })
  appendTo: string = '';

  /**
   * aria-label attribute to be set for close button accessibility.
   * @default null
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

  /**
   * aria-label for an interactive popover only. By default, it will be labelled by the triggerComponent.
   * Only required in the unusual circumstance where the popover label cannot match the trigger.
   * @default null
   */
  @property({ type: String, attribute: 'data-aria-label', reflect: true })
  override ariaLabel: string | null = null;

  /**
   * aria-labelledby for an interactive popover only, defaults to the trigger component id.
   * Used in nested cases where the triggerComponent isn't the actual button.
   * @default null
   */
  @property({ type: String, attribute: 'data-aria-labelledby', reflect: true })
  ariaLabelledby: string | null = null;

  /**
   * role attribute to be set for popover accessibility.
   * @default dialog
   */
  @property({ type: String, attribute: 'data-role', reflect: true })
  override role: ModalContainerRole = DEFAULTS.ROLE;

  /**
   * `aria-describedby` for an interactive popover. It should reference an element inside the popover
   * that provides additional descriptive information. This is useful when the popover contains
   * explanatory content, such as help text or tooltips.
   * @default null
   */
  @property({ type: String, attribute: 'data-aria-describedby', reflect: true })
  ariaDescribedby: string | null = null;

  /** @internal */
  private triggerElement: HTMLElement | null = null;

  /** @internal */
  private popoverElement: HTMLElement | null = null;

  /** @internal */
  private arrowElement: HTMLElement | null = null;

  /** @internal */
  private hoverTimer: number | null = null;

  /** @internal */
  private isTriggerClicked: boolean = false;

  /** @internal */
  private openDelay: number = 0;

  /** @internal */
  private closeDelay: number = 0;

  /** @internal */
  private arrowPixelChange: boolean = false;

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.popoverElement = this.renderRoot.querySelector('.popover-container');
    await this.setupAppendTo();
    await this.setupDelay();
    await this.setupTrigger();
    await this.setupAccessibility();
    this.onCreatedPopover();

    if (this.visible) {
      await this.positionPopover();
      await this.handleCreatePopoverFirstUpdate();
    }
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();
    await this.removeEventListeners();
    this.onDestroyedPopover();
    popoverStack.remove(this);
  }

  /**
   * If the `appendTo` property is set, finds the corresponding
   * DOM element by its ID, and appends this popover as a child of that element.
   */
  private async setupAppendTo() {
    if (this.appendTo) {
      const appendToElement = document.getElementById(this.appendTo);
      if (appendToElement) {
        appendToElement.appendChild(this);
      }
    }
  }

  /**
   * Sets up the hover bridge for the popover.
   * The hover bridge is used to prevent the popover from closing when the mouse is over the popover.
   */
  private async setupHoverBridge() {
    const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge') as HTMLElement;
    Object.assign(hoverBridge.style, {
      top: '',
      left: '',
      right: '',
      bottom: '',
    });
    const bridgeSize = `calc(${this.showArrow ? '0.75rem + ' : ''}${this.offset}px)`;
    const modalContainer = this.shadowRoot?.querySelector('mdc-modalcontainer') as HTMLElement;
    const popoverHeight = modalContainer.offsetHeight || 0;
    const popoverWidth = modalContainer.offsetWidth || 0;

    if (hoverBridge) {
      const side = this.placement.split('-')[0];
      switch (side) {
        case 'top':
          hoverBridge.style.height = bridgeSize;
          hoverBridge.style.bottom = `calc(-1 * (${bridgeSize}))`;
          hoverBridge.style.left = '50%';
          hoverBridge.style.width = `${popoverWidth}px`;
          break;
        case 'left':
          hoverBridge.style.height = `${popoverHeight}px`;
          hoverBridge.style.width = bridgeSize;
          hoverBridge.style.right = `calc(-1.5 * (${bridgeSize}))`;
          break;
        case 'right':
          hoverBridge.style.height = `${popoverHeight}px`;
          hoverBridge.style.width = bridgeSize;
          hoverBridge.style.left = `calc(-0.5 * (${bridgeSize}))`;
          break;
        case 'bottom':
        default:
          hoverBridge.style.height = bridgeSize;
          hoverBridge.style.top = `calc(-1 * (${bridgeSize}))`;
          hoverBridge.style.left = '50%';
          hoverBridge.style.width = `${popoverWidth}px`;
          break;
      }
    }
  }

  /**
   * Parses the delay string and sets the open and close delay values.
   */
  private async setupDelay() {
    try {
      const [openDelay, closeDelay] = this.delay.split(',').map((delay) => {
        const parsed = parseInt(delay, 10);
        if (Number.isNaN(parsed) || parsed < 0) {
          throw new Error(`Invalid delay value: ${delay}`);
        }
        return parsed;
      });
      this.openDelay = openDelay;
      this.closeDelay = closeDelay;
    } catch (error) {
      this.delay = '0,0';
      this.openDelay = 0;
      this.closeDelay = 0;
    }
  }

  /**
   * Sets up the accessibility attributes for the popover.
   */
  private async setupAccessibility() {
    if (this.interactive) {
      if (!this.ariaLabel) {
        this.ariaLabel = this.triggerElement?.ariaLabel || this.triggerElement?.textContent || '';
      }
      this.popoverElement?.setAttribute('aria-label', this.ariaLabel);
      if (!this.ariaLabelledby) {
        this.ariaLabelledby = this.triggerElement?.id || '';
      }
      this.popoverElement?.setAttribute('aria-labelledby', this.ariaLabelledby);
    }
  }

  /**
   * Sets up the trigger event listeners based on the trigger type.
   */
  private async setupTrigger() {
    if (!this.triggerID) return;

    this.triggerElement = document.getElementById(this.triggerID);
    if (!this.triggerElement) return;

    if (this.trigger === 'mouseenter') {
      if (this.interactive) {
        // if the popover is interactive, there is interactive content inside the popover
        // so we can't use the focusin trigger, since after closing with escape key, the
        // popover keeps opening. So we need to use the click trigger instead.
        this.trigger = 'mouseenter click';
      } else {
        // non-interactive popovers with trigger mouseenter (like a tooltip) should also open
        // when focusing to the trigger element
        this.trigger = 'mouseenter focusin';
      }
    }

    if (this.trigger.includes('click')) {
      this.triggerElement.addEventListener('click', this.togglePopover);
    }
    if (this.trigger.includes('mouseenter')) {
      const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
      this.triggerElement.addEventListener('mouseenter', this.showPopover);
      this.triggerElement.addEventListener('mouseleave', this.startCloseDelay);
      this.popoverElement?.addEventListener('mouseenter', this.cancelCloseDelay);
      this.popoverElement?.addEventListener('mouseleave', this.startCloseDelay);
      hoverBridge?.addEventListener('mouseenter', this.cancelCloseDelay);
    }
    if (this.trigger.includes('focusin')) {
      this.triggerElement.addEventListener('focusin', this.showPopover);
    }
    this.addEventListener('focus-trap-exit', this.hidePopover);
  }

  /**
   * Removes the trigger event listeners.
   */
  private async removeEventListeners() {
    if (!this.triggerElement) return;
    const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
    this.triggerElement.removeEventListener('click', this.togglePopover);
    this.triggerElement.removeEventListener('mouseenter', this.showPopover);
    this.triggerElement.removeEventListener('mouseleave', this.hidePopover);
    this.popoverElement?.removeEventListener('mouseenter', this.cancelCloseDelay);
    this.popoverElement?.removeEventListener('mouseleave', this.startCloseDelay);
    this.triggerElement.removeEventListener('focusin', this.showPopover);
    hoverBridge?.removeEventListener('mouseenter', this.cancelCloseDelay);

    this.removeEventListener('focus-trap-exit', this.hidePopover);
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('visible')) {
      const oldValue = changedProperties.get('visible') as boolean;
      await this.isOpenUpdated(oldValue, this.visible);
    }
    if (changedProperties.has('placement')) {
      this.setAttribute(
        'placement',
        Object.values(POPOVER_PLACEMENT).includes(this.placement) ? this.placement : DEFAULTS.PLACEMENT,
      );
    }
    if (changedProperties.has('delay')) {
      await this.setupDelay();
    }
    if (changedProperties.has('trigger')) {
      const triggers = this.trigger.split(' ');
      const validTriggers = triggers.filter((trigger) =>
        Object.values(TRIGGER).includes(trigger as ValueOf<typeof TRIGGER>));

      this.setAttribute('trigger', validTriggers.length > 0 ? this.trigger : DEFAULTS.TRIGGER);
      await this.removeEventListeners();
      await this.setupTrigger();
    }
    if (changedProperties.has('color')) {
      this.setAttribute('color', Object.values(COLOR).includes(this.color) ? this.color : DEFAULTS.COLOR);
    }
    if (changedProperties.has('role')) {
      this.setAttribute('role', Object.values(ROLE).includes(this.role) ? this.role : DEFAULTS.ROLE);
    }
    if (changedProperties.has('zIndex')) {
      this.setAttribute('z-index', `${this.zIndex}`);
    }
    if (changedProperties.has('appendTo')) {
      await this.setupAppendTo();
    }
    if (
      changedProperties.has('interactive')
      || changedProperties.has('ariaLabel')
      || changedProperties.has('ariaLabelledby')
    ) {
      await this.setupAccessibility();
    }
  }

  /**
   * Handles the outside click event to close the popover.
   *
   * @param event - The mouse event.
   */
  private onOutsidePopoverClick = (event: MouseEvent) => {
    if (popoverStack.peek() !== this) return;

    let insidePopoverClick = false;
    const path = event.composedPath();
    insidePopoverClick = this.contains(event.target as Node) || path.includes(this.triggerElement!);
    const backdropElement = this.renderRoot.querySelector('.popover-backdrop');
    const clickedOnBackdrop = backdropElement ? path.includes(backdropElement) : false;

    if (!insidePopoverClick || clickedOnBackdrop) {
      this.hidePopover();
    }
  };

  /**
   * Handles the escape keydown event to close the popover.
   *
   * @param event - The keyboard event.
   */
  private onEscapeKeydown = async (event: KeyboardEvent) => {
    if (!this.visible || event.code !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.hidePopover();
  };

  /**
   * Handles the popover focus out event.
   *
   * @param event - The focus event.
   */
  private onPopoverFocusOut = async (event: FocusEvent) => {
    if (!this.contains(event.relatedTarget as Node)) {
      this.hidePopover();
    }
  };

  /**
   * Handles the popover visibility change and position the popover.
   * Handles the exit event to close the popover.
   *
   * @param oldValue - The old value of the visible property.
   * @param newValue - The new value of the visible property.
   */
  private async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    if (oldValue === newValue) {
      return;
    }

    if (newValue) {
      this.enabledFocusTrap = this.focusTrap;
      this.enabledPreventScroll = this.preventScroll;

      if (this.backdrop && this.triggerElement) {
        const popoverBackdrop = this.renderRoot.querySelector('.popover-backdrop') as HTMLElement;
        popoverBackdrop.style.zIndex = `${this.zIndex - 1}`;
        this.triggerElement.style.zIndex = `${this.zIndex}`;
      }

      await this.positionPopover();
      await this.handleCreatePopoverFirstUpdate();
      await this.setupHoverBridge();

      if (this.hideOnBlur) {
        this.popoverElement?.addEventListener('focusout', this.onPopoverFocusOut);
      }
      if (this.hideOnOutsideClick) {
        document.addEventListener('click', this.onOutsidePopoverClick);
      }
      if (this.hideOnEscape) {
        document.addEventListener('keydown', this.onEscapeKeydown);
      }

      this.triggerElement?.setAttribute('aria-expanded', 'true');
      if (this.interactive) {
        this.triggerElement?.setAttribute(
          'aria-haspopup',
          this.triggerElement.getAttribute('aria-haspopup') || 'dialog',
        );
      }
    } else {
      if (this.hideOnBlur) {
        this.popoverElement?.removeEventListener('blur', this.onPopoverFocusOut);
      }
      if (this.hideOnOutsideClick) {
        document.removeEventListener('click', this.onOutsidePopoverClick);
      }
      if (this.hideOnEscape) {
        document.removeEventListener('keydown', this.onEscapeKeydown);
      }

      this.deactivateFocusTrap?.();
      this.triggerElement?.removeAttribute('aria-expanded');
      if (this.interactive) {
        this.triggerElement?.removeAttribute('aria-haspopup');
      }
      if (this.focusBackToTrigger) {
        this.triggerElement?.focus();
      }
    }
  }

  /**
   * Starts the close delay timer.
   * If the popover is not interactive, it will close the popover after the delay.
   */
  private startCloseDelay = async () => {
    if (!this.interactive) {
      this.hidePopover();
    } else {
      if (this.isTriggerClicked) return;
      this.hoverTimer = window.setTimeout(() => {
        this.visible = false;
      }, this.closeDelay);
    }
  };

  /**
   * Cancels the close delay timer.
   */
  private cancelCloseDelay = () => {
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  };

  /**
   * Shows the popover.
   */
  public showPopover = async () => {
    this.cancelCloseDelay();
    setTimeout(() => {
      this.visible = true;
      this.onShowPopover();
    }, this.openDelay);
    if (popoverStack.peek() !== this) {
      popoverStack.push(this);
    }
  };

  /**
   * Hides the popover.
   */
  public hidePopover = () => {
    if (popoverStack.peek() === this) {
      setTimeout(() => {
        this.visible = false;
        this.onHidePopover();
        this.isTriggerClicked = false;
      }, this.closeDelay);
      popoverStack.pop();
    }
  };

  /**
   * Toggles the popover visibility.
   */
  public togglePopover = async () => {
    if (this.isTriggerClicked) {
      this.hidePopover();
    } else {
      await this.showPopover();
      this.isTriggerClicked = true;
    }
  };

  /**
   * Sets the focusable elements inside the popover.
   */
  private async handleCreatePopoverFirstUpdate() {
    if (this.visible && this.interactive) {
      this.setFocusableElements?.();
      await this.updateComplete;
      this.setInitialFocus?.();
    }
  }

  /**
   * Positions the popover based on the trigger element.
   * It also handles the flip, size and arrow placement.
   * It uses the floating-ui/dom library to calculate the position.
   */
  private async positionPopover() {
    if (!this.triggerElement || !this.popoverElement) return;

    const middleware = [shift()];
    let popoverOffset = this.offset;

    if (this.flip) {
      middleware.push(flip());
    }

    if (this.size) {
      const popoverContent = this.popoverElement.querySelector('.popover-content') as HTMLElement;
      middleware.push(
        size({
          apply({ availableHeight }) {
            if (!popoverContent) return;
            Object.assign(popoverContent.style, {
              maxHeight: `${availableHeight}px`,
            });
          },
          padding: 25,
        }),
      );
    }

    if (this.showArrow) {
      this.arrowElement = this.renderRoot.querySelector('.popover-arrow');
      if (this.arrowElement) {
        const arrowLen = this.arrowElement.offsetHeight;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset = arrowOffset + this.offset;
        middleware.push(arrow({ element: this.arrowElement, padding: 12 }));
      }
    }

    middleware.push(offset(popoverOffset));

    autoUpdate(this.triggerElement, this.popoverElement, async () => {
      if (!this.triggerElement || !this.popoverElement) return;

      const { x, y, middlewareData, placement } = await computePosition(this.triggerElement, this.popoverElement, {
        placement: this.placement,
        middleware,
      });

      this.updatePopoverStyle(x, y);
      if (middlewareData.arrow && this.arrowElement) {
        this.updateArrowStyle(middlewareData.arrow, placement);
      }
    });
  }

  /**
   * Updates the popover style based on the x and y position.
   *
   * @param x - The x position.
   * @param y - The y position.
   */
  private updatePopoverStyle(x: number, y: number): void {
    if (!this.popoverElement) return;

    Object.assign(this.popoverElement.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  /**
   * Updates the arrow style based on the arrow data and placement.
   *
   * @param arrowData - The arrow data x and y.
   * @param placement - The placement of the popover.
   */
  private updateArrowStyle(arrowData: { x?: number; y?: number }, placement: string): void {
    if (!this.arrowElement) return;

    const side = placement.split('-')[0];
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side] as 'top' | 'bottom' | 'left' | 'right';

    const { x: arrowX, y: arrowY } = arrowData;
    const rect = this.arrowElement.getBoundingClientRect();
    const parent = this.arrowElement.offsetParent?.getBoundingClientRect();

    if (!this.arrowPixelChange) {
      const pixelDiff = parent?.[staticSide] ? 12 + (rect[staticSide] - parent[staticSide]) : 0;
      if (Math.round(pixelDiff) === 1) {
        this.arrowPixelChange = true;
      } else {
        this.arrowPixelChange = false;
      }
    }

    const arrowPixelDiff = this.arrowPixelChange ? 0.5 : 0;
    this.arrowElement.setAttribute('data-side', side);

    Object.assign(this.arrowElement.style, {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      [staticSide]: `${-this.arrowElement.offsetHeight / 2 - arrowPixelDiff}px`,
    });
  }

  /**
   * Custom event that is fired when the popover is shown.
   */
  private onShowPopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-show', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  /**
   * Custom event that is fired when the popover is hidden.
   */
  private onHidePopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-hide', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  /**
   * Custom event that is fired when the popover is created.
   */
  private onCreatedPopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-created', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  /**
   * Custom event that is fired when the popover is destroyed.
   */
  private onDestroyedPopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-destroyed', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  public override render() {
    return html`
      ${this.backdrop && this.visible ? html`<div class="popover-backdrop"></div>` : nothing}
      <mdc-modalcontainer
        class="popover-container"
        elevation="3"
        color=${this.color}
        aria-modal=${ifDefined(this.interactive ? 'true' : undefined)}
        ?visible=${this.visible}
        role=${this.role}
        ${this.interactive ? html` aria-describedby=${ifDefined(this.ariaDescribedby)} ` : nothing}
        style="z-index: ${this.zIndex};"
        data-color=${this.color}
      >
        <div class="popover-hover-bridge"></div>
        ${this.closeButton
    ? html` <mdc-button
              class="popover-close"
              prefix-icon="cancel-bold"
              variant="tertiary"
              size="20"
              aria-label=${ifDefined(this.closeButtonAriaLabel)}
              @click="${this.hidePopover}"
            ></mdc-button>`
    : nothing}
        ${this.showArrow ? html`<div class="popover-arrow"></div>` : nothing}
        <div class="popover-content" part="popover-content">
          <slot></slot>
        </div>
      </mdc-modalcontainer>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
