import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { computePosition, autoUpdate, offset, flip, shift, arrow, size } from '@floating-ui/dom';
import styles from './popover.styles';
import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { popoverStack } from './popover.stack';
import type { PopoverPlacement, PopoverTrigger } from './popover.types';
import type { ModalContainerColor } from '../modalcontainer/modalcontainer.types';
import { COLOR } from '../modalcontainer/modalcontainer.constants';
import { DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from './popover.constants';
import { ValueOf } from '../../utils/types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DataAriaDescribedbyMixin } from '../../utils/mixins/DataAriaDescribedbyMixin';
import { DataAriaLabelledbyMixin } from '../../utils/mixins/DataAriaLabelledbyMixin';
import { PopoverEventManager } from './popover.events';
import { PopoverUtils } from './popover.utils';

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
class Popover extends DataAriaLabelMixin(DataAriaLabelledbyMixin(DataAriaDescribedbyMixin(FocusTrapMixin(Component)))) {
  /**
   * The unique ID of the popover.
   */
  @property({ type: String })
  override id: string = '';

  /**
   * The ID of the element that triggers the popover.
   * This attribute is required for the popover to work.
   */
  @property({ type: String })
  triggerID: string = '';

  /**
   * Determines the events that cause the Popover to show.
   * Multiple event names should be separated by spaces.
   * For example to allow both click and hover, use 'click mouseenter' as the trigger.
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
  @property({ type: String, reflect: true, attribute: 'append-to' })
  appendTo: string = '';

  /**
   * aria-label attribute to be set for close button accessibility.
   * @default null
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

  /**
   * Role of the popover
   * @default dialog
   */
  @property({ type: String, reflect: true, attribute: 'data-role' })
  dataRole: HTMLElement['role'] = DEFAULTS.ROLE;

  public arrowElement: HTMLElement | null = null;

  public triggerElement: HTMLElement | null = null;

  public containerElement: HTMLElement | null = null;

  public utils: PopoverUtils;

  /** @internal */
  private hoverTimer: number | null = null;

  /** @internal */
  private isTriggerClicked: boolean = false;

  /** @internal */
  private openDelay: number = 0;

  /** @internal */
  private closeDelay: number = 0;

  constructor() {
    super();
    this.utils = new PopoverUtils(this);
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.containerElement = this.renderRoot.querySelector('.popover-container');
    this.utils.setupAppendTo();
    [this.openDelay, this.closeDelay] = this.utils.setupDelay();
    this.setupTriggerListener();
    this.utils.setupAccessibility();
    PopoverEventManager.onCreatedPopover(this);

    if (this.visible) {
      await this.positionPopover();
      await this.handleCreatePopoverFirstUpdate();
    }
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
    PopoverEventManager.onDestroyedPopover(this);
    popoverStack.remove(this);
  }

  /**
   * Sets up the trigger event listeners based on the trigger type.
   */
  private setupTriggerListener() {
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
      this.triggerElement.addEventListener('click', this.togglePopoverVisible);
    }
    if (this.trigger.includes('mouseenter')) {
      const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
      this.triggerElement.addEventListener('mouseenter', this.showPopover);
      this.triggerElement.addEventListener('mouseleave', this.startCloseDelay);
      this.containerElement?.addEventListener('mouseenter', this.cancelCloseDelay);
      this.containerElement?.addEventListener('mouseleave', this.startCloseDelay);
      hoverBridge?.addEventListener('mouseenter', this.cancelCloseDelay);
    }
    if (this.trigger.includes('focusin')) {
      this.triggerElement.addEventListener('focusin', this.showPopover);
      if (!this.interactive) {
        this.triggerElement.addEventListener('focusout', this.hidePopover);
      }
    }
    this.addEventListener('focus-trap-exit', this.hidePopover);
  }

  /**
   * Removes the trigger event listeners.
   */
  private removeEventListeners() {
    if (!this.triggerElement) return;
    const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
    this.triggerElement.removeEventListener('click', this.togglePopoverVisible);
    this.triggerElement.removeEventListener('mouseenter', this.showPopover);
    this.triggerElement.removeEventListener('mouseleave', this.hidePopover);
    this.containerElement?.removeEventListener('mouseenter', this.cancelCloseDelay);
    this.containerElement?.removeEventListener('mouseleave', this.startCloseDelay);
    this.triggerElement.removeEventListener('focusin', this.showPopover);
    this.triggerElement.removeEventListener('focusout', this.hidePopover);
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
      [this.openDelay, this.closeDelay] = this.utils.setupDelay();
    }
    if (changedProperties.has('trigger')) {
      const triggers = this.trigger.split(' ');
      const validTriggers = triggers.filter((trigger) =>
        Object.values(TRIGGER).includes(trigger as ValueOf<typeof TRIGGER>));

      this.setAttribute('trigger', validTriggers.length > 0 ? this.trigger : DEFAULTS.TRIGGER);
      this.removeEventListeners();
      this.setupTriggerListener();
    }
    if (changedProperties.has('color')) {
      this.setAttribute('color', Object.values(COLOR).includes(this.color) ? this.color : DEFAULTS.COLOR);
    }
    if (changedProperties.has('zIndex')) {
      this.setAttribute('z-index', `${this.zIndex}`);
    }
    if (changedProperties.has('append-to')) {
      this.utils.setupAppendTo();
    }
    if (
      changedProperties.has('interactive')
      || changedProperties.has('data-aria-label')
      || changedProperties.has('data-aria-labelledby')
    ) {
      this.utils.setupAccessibility();
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
  private onEscapeKeydown = (event: KeyboardEvent) => {
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
  private onPopoverFocusOut = (event: FocusEvent) => {
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
    if (oldValue === newValue || !this.triggerElement) {
      return;
    }

    if (newValue) {
      this.enabledFocusTrap = this.focusTrap;
      this.enabledPreventScroll = this.preventScroll;

      if (this.backdrop) {
        const popoverBackdrop = this.renderRoot.querySelector('.popover-backdrop') as HTMLElement;
        popoverBackdrop.style.zIndex = `${this.zIndex - 1}`;
        this.triggerElement.style.zIndex = `${this.zIndex}`;
      }

      this.positionPopover();
      await this.handleCreatePopoverFirstUpdate();

      if (this.hideOnBlur) {
        this.containerElement?.addEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          this.triggerElement.style.pointerEvents = 'none';
        }
      }
      if (this.hideOnOutsideClick) {
        document.addEventListener('click', this.onOutsidePopoverClick);
      }
      if (this.hideOnEscape) {
        document.addEventListener('keydown', this.onEscapeKeydown);
      }

      this.triggerElement.setAttribute('aria-expanded', 'true');
      if (this.interactive) {
        this.triggerElement.setAttribute(
          'aria-haspopup',
          this.triggerElement.getAttribute('aria-haspopup') || 'dialog',
        );
      }
    } else {
      if (this.hideOnBlur) {
        this.containerElement?.removeEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          this.triggerElement.style.pointerEvents = '';
        }
      }
      if (this.hideOnOutsideClick) {
        document.removeEventListener('click', this.onOutsidePopoverClick);
      }
      if (this.hideOnEscape) {
        document.removeEventListener('keydown', this.onEscapeKeydown);
      }

      this.deactivateFocusTrap?.();
      this.triggerElement.removeAttribute('aria-expanded');
      if (this.interactive) {
        this.triggerElement.removeAttribute('aria-haspopup');
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
  private startCloseDelay = () => {
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
  public showPopover = () => {
    this.cancelCloseDelay();
    setTimeout(() => {
      this.visible = true;
      PopoverEventManager.onShowPopover(this);
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
        PopoverEventManager.onHidePopover(this);
        this.isTriggerClicked = false;
      }, this.closeDelay);
      popoverStack.pop();
    }
  };

  /**
   * Toggles the popover visibility.
   */
  public togglePopoverVisible = () => {
    if (this.isTriggerClicked) {
      this.hidePopover();
    } else {
      this.showPopover();
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
  private positionPopover() {
    if (!this.triggerElement || !this.containerElement) return;

    const middleware = [shift()];
    let popoverOffset = this.offset;

    if (this.flip) {
      middleware.push(flip());
    }

    if (this.size) {
      const popoverContent = this.containerElement.querySelector('[part="popover-content"]') as HTMLElement;
      middleware.push(
        size({
          apply({ availableHeight }) {
            if (!popoverContent) return;
            Object.assign(popoverContent.style, {
              maxHeight: `${availableHeight}px`,
            });
          },
          padding: 50,
        }),
      );
    }

    if (this.showArrow) {
      this.arrowElement = this.renderRoot.querySelector('.popover-arrow');
      if (this.arrowElement) {
        const arrowLen = 18;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset = arrowOffset + this.offset;
        middleware.push(arrow({ element: this.arrowElement, padding: 12 }));
      }
    }

    middleware.push(offset(popoverOffset));

    autoUpdate(this.triggerElement, this.containerElement, async () => {
      if (!this.triggerElement || !this.containerElement) return;

      const { x, y, middlewareData, placement } = await computePosition(this.triggerElement, this.containerElement, {
        placement: this.placement,
        middleware,
      });

      this.utils.updatePopoverStyle(x, y);
      if (middlewareData.arrow && this.showArrow) {
        this.utils.updateArrowStyle(middlewareData.arrow, placement);
      }
      if (this.trigger.includes('mouseenter')) {
        this.utils.setupHoverBridge(placement);
      }
    });
  }

  public override render() {
    return html`
      ${this.backdrop && this.visible ? html`<div class="popover-backdrop"></div>` : nothing}
      <mdc-modalcontainer
        class="popover-container"
        elevation="3"
        color=${this.color}
        ?data-aria-modal=${this.interactive}
        data-role="${ifDefined(this.dataRole)}"
        data-aria-label="${ifDefined(this.interactive ? this.dataAriaLabel : undefined)}"
        data-aria-labelledby="${ifDefined(this.interactive ? this.dataAriaLabelledby : undefined)}"
        data-aria-describedby="${ifDefined(this.interactive ? this.dataAriaDescribedby : undefined)}"
        style="z-index: ${this.zIndex};"
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
        <div part="popover-content">
          <slot></slot>
        </div>
      </mdc-modalcontainer>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
