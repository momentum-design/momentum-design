/* eslint-disable no-restricted-syntax */
import { arrow, autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { PreventScrollMixin } from '../../utils/mixins/PreventScrollMixin';
import type { ValueOf } from '../../utils/types';
import type Tooltip from '../tooltip/tooltip.component';

import { COLOR, DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from './popover.constants';
import { PopoverEventManager } from './popover.events';
import { popoverStack } from './popover.stack';
import styles from './popover.styles';
import type { PopoverColor, PopoverPlacement, PopoverTrigger } from './popover.types';
import { PopoverUtils } from './popover.utils';

/**
 * Popover component is a lightweight floating UI element that displays additional content when triggered.
 * It can be used for tooltips, dropdowns, or contextual menus.
 * The popover automatically positions itself based on available space and
 * supports dynamic height adjustments with scrollable content when needed。
 *
 * @dependency mdc-button
 *
 * @tagname mdc-popover
 *
 *
 * @event shown - (React: onShown) This event is dispatched when the popover is shown
 * @event hidden - (React: onHidden) This event is dispatched when the popover is hidden
 * @event created - (React: onCreated) This event is dispatched when the popover is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched when the popover is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-popover-arrow-border-radius - radius of the arrow border
 * @cssproperty --mdc-popover-arrow-border - border of the arrow
 * @cssproperty --mdc-popover-primary-background-color - primary background color of the popover
 * @cssproperty --mdc-popover-border-color - border color of the popover
 * @cssproperty --mdc-popover-inverted-background-color - inverted background color of the popover
 * @cssproperty --mdc-popover-inverted-border-color - inverted border color of the popover
 * @cssproperty --mdc-popover-inverted-text-color - inverted text color of the popover
 * @cssproperty --mdc-popover-elevation-3 - elevation of the popover
 * @cssproperty --mdc-popover-max-width - max width of the popover
 * @cssproperty --mdc-popover-max-height - max height of the popover
 *
 * @slot - Default slot for the popover content
 *
 */
class Popover extends PreventScrollMixin(FocusTrapMixin(Component)) {
  /**
   * The unique ID of the popover.
   */
  @property({ type: String, reflect: true })
  override id: string = '';

  /**
   * The ID of the element that triggers the popover.
   * This attribute is required for the popover to work.
   */
  @property({ type: String, reflect: true })
  triggerID: string = '';

  /**
   * Determines the events that cause the Popover to show.
   * Multiple event names should be separated by spaces.
   * For example to allow both click and hover, use 'click mouseenter' as the trigger.
   * - **click**
   * - **mouseenter**
   * - **focusin**
   * - **manual**
   *
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
  color: PopoverColor = DEFAULTS.COLOR;

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
   * This describes the clipping element(s) or area that overflow will be checked relative to.
   * The default is 'clippingAncestors', which are the overflow ancestors which will cause the
   * element to be clipped.
   *
   * Possible values:
   *  - 'clippingAncestors'
   *  - any css selector
   *
   * @default 'clippingAncestors'
   *
   * @see [Floating UI - boundary](https://floating-ui.com/docs/detectOverflow#boundary)
   */
  @property({ type: String, reflect: true, attribute: 'boundary' })
  boundary: 'clippingAncestors' | string = DEFAULTS.BOUNDARY;

  /**
   * This describes the root boundary that the element will be checked for overflow relative to.
   * The default is 'viewport', which is the area of the page the user can see on the screen.
   *
   * The other string option is 'document', which is the entire page outside the viewport.
   *
   * @default 'viewport'
   *
   * @see [Floating UI - rootBoundary](https://floating-ui.com/docs/detectOverflow#rootboundary)
   */
  @property({ type: String, reflect: true, attribute: 'boundary-root' })
  boundaryRoot: 'viewport' | 'document' = DEFAULTS.BOUNDARY_ROOT;

  /**
   * Virtual padding around the boundary to check for overflow.
   * So the popover will not be placed on top of the edge of the boundary.
   *
   * Default works well for most cases, but you can set this to customise it when necessary.
   *
   * @default undefined
   *
   * @see [Floating UI - padding](https://floating-ui.com/docs/detectOverflow#padding)
   */
  @property({ type: Number, reflect: true, attribute: 'boundary-padding' })
  boundaryPadding?: number;

  /**
   * Determines whether the focus trap is enabled.
   * If true, focus will be restricted to the content within this component.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-trap' })
  focusTrap: boolean = DEFAULTS.FOCUS_TRAP;

  /**
   * Prevent outside scrolling when popover is shown.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-scroll' })
  preventScroll: boolean = DEFAULTS.PREVENT_SCROLL;

  /**
   * The arrow visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-arrow' })
  showArrow: boolean = DEFAULTS.ARROW;

  /**
   * The close button visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-button' })
  closeButton: boolean = DEFAULTS.CLOSE_BUTTON;

  /**
   * Determines whether the popover is interactive.
   * Make sure to set focusTrap to true to keep the focus inside the popover in case necessary.
   * Setting interactive to true will not automatically set focusTrap!
   *
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
   * Propagates the event, when the escape key is pressed (only when pressed inside the popover)
   * If true, the escape key press close the popover and will propagate the keydown event.
   * If false, the escape key press will close the popover but will not propagate the keydown event.
   * (set to false to prevent the event from bubbling up to the document).
   *
   * This only works when `hideOnEscape` is true.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'propagate-event-on-escape' })
  propagateEventOnEscape: boolean = DEFAULTS.PROPAGATE_EVENT_ON_ESCAPE;

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
  appendTo?: string;

  /**
   * aria-label attribute to be set for close button accessibility.
   * @default null
   */
  @property({ type: String, attribute: 'close-button-aria-label', reflect: true })
  closeButtonAriaLabel: string | null = null;

  /**
   * The strategy of the popover.
   * This determines how the popover is positioned in the DOM.
   * - **absolute**: The popover is positioned absolutely relative to the nearest positioned ancestor.
   * - **fixed**: The popover is positioned fixed relative to the viewport.
   *
   * Default as `absolute` is recommended for most cases.
   * In cases where the popover gets clipped by a scrollable container,
   * you can set this to `fixed` to avoid clipping.
   *
   * @default absolute
   * @see [Floating UI - strategy](https://floating-ui.com/docs/computePosition#strategy)
   */
  @property({ type: String, reflect: true, attribute: 'strategy' })
  strategy: 'absolute' | 'fixed' = DEFAULTS.STRATEGY;

  /**
   * Role of the popover
   * @default dialog
   */
  @property({ type: String, reflect: true })
  override role: HTMLElement['role'] = DEFAULTS.ROLE;

  /**
   * aria-labelledby for an interactive popover only, defaults to the trigger component id.
   * Used in nested cases where the triggerComponent isn't the actual button.
   */
  @property({ type: String, reflect: true, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  /**
   * aria-describedby of the popover.
   */
  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
  ariaDescribedby: string | null = null;

  /**
   * Disable setting the aria-expanded attribute on trigger element.
   * Make sure to set this to false when the popover is interactive.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-expanded' })
  disableAriaExpanded: boolean = DEFAULTS.DISABLE_ARIA_EXPANDED;

  /**
   * Disable setting the aria-haspopup attribute on trigger element.
   * Make sure to set this to true when the popover is extended and its role
   * is not 'dialog' or 'alertdialog' i.e. listbox, menu, etc.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-haspopup' })
  disableAriaHasPopup: boolean = DEFAULTS.DISABLE_ARIA_HAS_POPUP;

  /**
   * If a tooltip is connected to the same trigger element,
   * this property will keep the connected tooltip closed if this popover is open.
   * This is useful when you want to show a popover with a tooltip
   * but you don't want the tooltip to be shown at the same time.
   */
  @property({ type: Boolean, reflect: true, attribute: 'keep-connected-tooltip-closed' })
  keepConnectedTooltipClosed: boolean = DEFAULTS.KEEP_CONNECTED_TOOLTIP_CLOSED;

  public arrowElement: HTMLElement | null = null;

  public triggerElement: HTMLElement | null = null;

  /** @internal */
  private triggerElementOriginalStyle: Pick<CSSStyleDeclaration, 'zIndex' | 'position'> = {
    zIndex: '',
    position: '',
  };

  /** @internal */
  private hoverTimer: number | null = null;

  /** @internal */
  private isHovered: boolean = false;

  /** @internal */
  private openDelay: number = 0;

  /** @internal */
  protected closeDelay: number = 0;

  /** @internal */
  private utils: PopoverUtils;

  /** @internal */
  private floatingUICleanupFunction: (() => void) | null = null;

  /** @internal */
  protected shouldSupressOpening: boolean = false;

  /** @internal */
  public backdropElement: HTMLElement | null = null;

  /** @internal */
  private connectedTooltip: Tooltip | null = null;

  constructor() {
    super();
    this.utils = new PopoverUtils(this);
  }

  private storeConnectedTooltip = () => {
    const connectedTooltips = (this.getRootNode() as Document | ShadowRoot).querySelectorAll(
      `mdc-tooltip[triggerID="${this.triggerID}"]`,
    ) as NodeListOf<Tooltip>;

    for (const tooltip of connectedTooltips) {
      if (tooltip !== (this as unknown as Tooltip)) {
        this.connectedTooltip = tooltip;
        return;
      }
    }
    this.connectedTooltip = null;
  };

  private setupTriggerRelatedElement() {
    this.triggerElement = (this.getRootNode() as Document | ShadowRoot).querySelector(`[id="${this.triggerID}"]`);
    this.storeConnectedTooltip();
  }

  private cleanupTrigger = () => {
    const triggers = this.trigger?.split(' ') || [];
    const validTriggers = triggers.filter(trigger =>
      Object.values(TRIGGER).includes(trigger as ValueOf<typeof TRIGGER>),
    );
    let newTrigger = validTriggers.length > 0 ? this.trigger : DEFAULTS.TRIGGER;

    if (newTrigger === 'mouseenter') {
      if (this.interactive) {
        // if the popover is interactive, there is interactive content inside the popover
        // so we can't use the focusin trigger, since after closing with escape key, the
        // popover keeps opening. So we need to use the click trigger instead.
        newTrigger = 'mouseenter click';
      } else {
        // non-interactive popovers with trigger mouseenter (like a tooltip) should also open
        // when focusing to the trigger element
        newTrigger = 'mouseenter focusin';
      }
    }

    this.trigger = newTrigger;
  };

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.utils.setupAppendTo();
    [this.openDelay, this.closeDelay] = this.utils.setupDelay();
    this.setupTriggerRelatedElement();
    this.cleanupTrigger();
    this.setupTriggerListeners();

    this.style.zIndex = `${this.zIndex}`;
    PopoverEventManager.onCreatedPopover(this);
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();

    this.removeAllListeners();
    this.deactivateFocusTrap?.();
    this.deactivatePreventScroll();
    this.utils.removeBackdrop();
    this.floatingUICleanupFunction?.();

    // clean timer if there is one set:
    this.cancelCloseDelay();

    if (this.keepConnectedTooltipClosed) {
      if (this.connectedTooltip) {
        this.connectedTooltip.shouldSupressOpening = false;
      }
    }

    PopoverEventManager.onDestroyedPopover(this);
    popoverStack.remove(this);
  }

  /**
   * Sets up the trigger related event listeners, based on the trigger type.
   * Includes fallback for mouseenter trigger to also handle focusin for non-interactive popovers.
   */
  private setupTriggerListeners = () => {
    if (!this.triggerElement) return;

    if (this.trigger.includes('click')) {
      this.triggerElement.addEventListener('click', this.togglePopoverVisible);
    }
    if (this.trigger.includes('mouseenter')) {
      const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
      hoverBridge?.addEventListener('mouseenter', this.show);
      this.triggerElement.addEventListener('mouseenter', this.handleMouseEnter);
      this.triggerElement.addEventListener('mouseleave', this.handleMouseLeave);
      this.addEventListener('mouseenter', this.cancelCloseDelay);
      this.addEventListener('mouseleave', this.startCloseDelay);
    }
    if (this.trigger.includes('focusin')) {
      this.triggerElement.addEventListener('focusin', this.handleFocusIn);
      if (!this.interactive) {
        this.triggerElement.addEventListener('focusout', this.handleFocusOut);
      }
    }
  };

  /**
   * Removes the trigger related event listeners.
   */
  private removeTriggerListeners = () => {
    // click trigger
    this.triggerElement?.removeEventListener('click', this.togglePopoverVisible);

    // mouseenter trigger
    const hoverBridge = this.renderRoot.querySelector('.popover-hover-bridge');
    hoverBridge?.removeEventListener('mouseenter', this.show);
    this.triggerElement?.removeEventListener('mouseenter', this.handleMouseEnter);
    this.triggerElement?.removeEventListener('mouseleave', this.handleMouseLeave);
    this.removeEventListener('mouseenter', this.cancelCloseDelay);
    this.removeEventListener('mouseleave', this.startCloseDelay);

    // focusin trigger
    this.triggerElement?.removeEventListener('focusin', this.handleFocusIn);
    this.triggerElement?.removeEventListener('focusout', this.handleFocusOut);
  };

  /**
   * Removes all event listeners related to the popover.
   */
  private removeAllListeners = () => {
    this.removeTriggerListeners();

    if (this.hideOnOutsideClick) {
      document.removeEventListener('click', this.onOutsidePopoverClick);
    }

    if (this.hideOnEscape) {
      this.removeEventListener('keydown', this.onEscapeKeydown);
      this.triggerElement?.removeEventListener('keydown', this.onEscapeKeydown);
    }

    if (this.hideOnBlur) {
      this.removeEventListener('focusout', this.onPopoverFocusOut);
    }
  };

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('visible')) {
      const oldValue = (changedProperties.get('visible') as boolean | undefined) || false;
      await this.isOpenUpdated(oldValue, this.visible);
      this.utils.updateAriaExpandedAttribute();
    }

    if (changedProperties.has('trigger')) {
      this.cleanupTrigger();
      this.removeTriggerListeners();
      this.setupTriggerListeners();
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
      changedProperties.has('interactive') ||
      changedProperties.has('aria-label') ||
      changedProperties.has('aria-labelledby')
    ) {
      this.utils.updateAriaLabels();
    }

    if (changedProperties.has('role')) {
      // If the role is changed to an empty string, set it to null
      // to avoid setting an invalid role on the popover element.
      if (this.role === '') {
        this.role = null;
      }
      this.utils.updateAriaModal();
    }

    if (changedProperties.has('disableAriaExpanded')) {
      this.utils.updateAriaExpandedAttribute();
    }
    if (changedProperties.has('interactive') || changedProperties.has('disableAriaHasPopup')) {
      this.utils.updateAriaHasPopupAttribute();
    }

    if (changedProperties.has('focusTrap')) {
      // if focusTrap turned false and the popover is visible, deactivate the focus trap
      if (!this.focusTrap && this.visible) {
        this.deactivateFocusTrap();
      }
    }

    if (changedProperties.has('preventScroll')) {
      // if preventScroll turned false and the popover is visible, deactivate the prevent scroll
      if (!this.preventScroll && this.visible) {
        this.deactivatePreventScroll();
      } else if (this.preventScroll && this.visible) {
        this.activatePreventScroll();
      }
    }
  }

  /**
   * Handles the outside click event to close the popover.
   *
   * @param event - The mouse event.
   */
  protected onOutsidePopoverClick = (event: MouseEvent) => {
    if (popoverStack.peek() !== this) return;

    const path = event.composedPath();
    const insidePopoverClick =
      this.contains(event.target as Node) || path.includes(this.triggerElement!) || path.includes(this);
    const clickedOnBackdrop = this.backdropElement ? path.includes(this.backdropElement) : false;

    if (!insidePopoverClick || clickedOnBackdrop) {
      this.hide();
      PopoverEventManager.onClickOutside(this);
    }
  };

  /**
   * Handles the escape keydown event to close the popover.
   *
   * This method is attached to the document.
   *
   * @param event - The keyboard event.
   */
  private onEscapeKeydown = (event: KeyboardEvent) => {
    if (!this.visible || event.code !== 'Escape') {
      return;
    }

    if (!this.propagateEventOnEscape) {
      // If propagateEventOnEscape is false, we don't want to allow the event to bubble up
      event.stopPropagation();
    }
    event.preventDefault();
    this.hide();
    PopoverEventManager.onEscapeKeyPressed(this);
  };

  /**
   * Handles the popover focus out event.
   *
   * @param event - The focus event.
   */
  private onPopoverFocusOut = (event: FocusEvent) => {
    if (!this.contains(event.relatedTarget as Node)) {
      this.hide();
    }
  };

  /**
   * Handles the popover visibility change and position the popover.
   * Handles the exit event to close the popover.
   *
   * @param oldValue - The old value of the visible property.
   * @param newValue - The new value of the visible property.
   */
  protected async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    if (oldValue === newValue || !this.triggerElement) {
      return;
    }

    if (newValue && !this.shouldSupressOpening) {
      if (popoverStack.peek() !== this) {
        popoverStack.push(this);
      }

      if (this.keepConnectedTooltipClosed) {
        // If this popover gets visible and keepConnectedTooltipsClosed is true,
        // we need to close the connected tooltip.
        if (this.connectedTooltip) {
          this.connectedTooltip.visible = false;
          this.connectedTooltip.shouldSupressOpening = true;
        }
      }

      if (this.backdrop) {
        this.utils.createBackdrop();
        this.triggerElementOriginalStyle = {
          position: this.triggerElement.style.position,
          zIndex: this.triggerElement.style.zIndex,
        };
        this.triggerElement.style.position = 'relative';
        this.triggerElement.style.zIndex = `${this.zIndex}`;
      }

      this.positionPopover();

      if (this.hideOnBlur) {
        this.addEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          this.triggerElement.style.pointerEvents = 'none';
        }
      }
      if (this.hideOnEscape) {
        this.addEventListener('keydown', this.onEscapeKeydown);
        this.triggerElement?.addEventListener('keydown', this.onEscapeKeydown);
      }

      this.activatePreventScroll();

      if (this.hideOnOutsideClick) {
        document.addEventListener('click', this.onOutsidePopoverClick);
      }

      // make sure popover is fully rendered before activating focus trap
      setTimeout(() => {
        if (this.interactive && this.focusTrap) {
          this.activateFocusTrap?.();
          this.setInitialFocus?.();
        }
      }, 0);

      PopoverEventManager.onShowPopover(this);
    } else {
      if (popoverStack.peek() === this) {
        popoverStack.pop();
      }

      // cleanup floating-ui on closing the popover
      this.floatingUICleanupFunction?.();

      if (this.backdrop) {
        this.triggerElement.style.position = this.triggerElementOriginalStyle.position;
        this.triggerElement.style.zIndex = this.triggerElementOriginalStyle.zIndex;
        this.utils.removeBackdrop();
      }

      if (this.hideOnBlur) {
        this.removeEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          this.triggerElement.style.pointerEvents = '';
        }
      }

      if (this.hideOnOutsideClick) {
        document.removeEventListener('click', this.onOutsidePopoverClick);
      }

      if (this.hideOnEscape) {
        this.removeEventListener('keydown', this.onEscapeKeydown);
        this.triggerElement?.removeEventListener('keydown', this.onEscapeKeydown);
      }

      if (this.disableAriaExpanded) {
        this.triggerElement.removeAttribute('aria-expanded');
      }
      // Remove aria-haspopup if the popover is not interactive
      if (!this.interactive) {
        this.triggerElement.removeAttribute('aria-haspopup');
      }

      this.deactivatePreventScroll();
      this.deactivateFocusTrap?.();

      if (this.focusBackToTrigger) {
        this.triggerElement?.focus();
      }

      if (this.keepConnectedTooltipClosed) {
        if (this.connectedTooltip) {
          this.connectedTooltip.shouldSupressOpening = false;
        }
      }
      PopoverEventManager.onHidePopover(this);
    }
  }

  /**
   *  Handles mouse enter event on the trigger element.
   *  This method sets the `isHovered` flag to true and shows the popover
   */
  private handleMouseEnter = () => {
    this.isHovered = true;
    this.show();
  };

  /**
   *  Handles mouse leave event on the trigger element.
   *  This method sets the `isHovered` flag to false and starts the close delay
   *  timer to hide the popover.
   */
  private handleMouseLeave = () => {
    this.isHovered = false;
    this.startCloseDelay();
  };

  /**
   *  Handles focus out event on the trigger element.
   *  This method checks if the popover is not hovered and hides the popover.
   *  If the popover is hovered, it will not hide the popover.
   */
  private handleFocusOut = () => {
    if (!this.isHovered) {
      this.hide();
    }
  };

  /**
   *  Handles focus in event on the trigger element.
   *  This method checks if the trigger element has visible focus or is being hovered.
   */
  private handleFocusIn = () => {
    if (this.triggerElement?.matches(':focus-visible') || this.isHovered) {
      this.show();
    }
  };

  /**
   * Starts the close delay timer.
   * If the popover is not interactive, it will close the popover after the delay.
   */
  private startCloseDelay = () => {
    if (!this.interactive) {
      this.hide();
    } else {
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
      window.clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  };

  /**
   * Shows the popover.
   */
  public show = () => {
    if (this.visible || this.shouldSupressOpening) {
      return;
    }
    this.cancelCloseDelay();

    if (this.openDelay > 0) {
      setTimeout(() => {
        this.visible = true;
      }, this.openDelay);
    } else {
      this.visible = true;
    }
  };

  /**
   * Hides the popover.
   */
  public hide = () => {
    if (this.closeDelay) {
      setTimeout(() => {
        this.visible = false;
      }, this.closeDelay);
    } else {
      this.visible = false;
    }
  };

  /**
   * Toggles the popover visibility.
   */
  public togglePopoverVisible = () => {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  };

  /**
   * Positions the popover based on the trigger element.
   * It also handles the flip, size and arrow placement.
   * It uses the floating-ui/dom library to calculate the position.
   */
  private positionPopover = () => {
    if (!this.triggerElement) return;

    const boundary =
      !this.boundary || this.boundary === 'clippingAncestors'
        ? 'clippingAncestors'
        : Array.from(document.querySelectorAll(this.boundary));
    const rootBoundary = this.boundaryRoot;

    const middleware = [
      shift({
        boundary,
        rootBoundary,
        padding: this.boundaryPadding,
      }),
    ];
    let popoverOffset = this.offset;

    if (this.flip) {
      middleware.push(
        flip({
          boundary,
          rootBoundary,
        }),
      );
    }

    if (this.size) {
      // expose a CSS variable for the available height
      // so that it can be used in other components styles
      const setInternalAvailableHeight = (availableHeight: number) => {
        this.style.setProperty('--mdc-popover-internal-available-height', `${availableHeight}px`);
      };
      const popoverContent = this.renderRoot.querySelector('[part="popover-content"]') as HTMLElement;
      middleware.push(
        size({
          boundary,
          rootBoundary,
          apply({ availableHeight }) {
            if (!popoverContent) return;
            Object.assign(popoverContent.style, {
              maxHeight: `${availableHeight}px`,
              overflowY: 'auto',
            });
            setInternalAvailableHeight(availableHeight);
          },
          padding: 50,
        }),
      );
    }

    if (this.showArrow) {
      this.arrowElement = this.renderRoot.querySelector('.popover-arrow');
      if (this.arrowElement) {
        const arrowLen = this.arrowElement.offsetHeight;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset += arrowOffset;
        middleware.push(arrow({ element: this.arrowElement, padding: 12 }));
      }
    }

    middleware.push(offset(popoverOffset));

    this.floatingUICleanupFunction = autoUpdate(this.triggerElement, this, async () => {
      if (!this.triggerElement) return;

      const { x, y, middlewareData, placement } = await computePosition(this.triggerElement, this, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
      });

      this.utils.updatePopoverStyle(x, y);
      if (middlewareData.arrow && this.arrowElement) {
        this.utils.updateArrowStyle(middlewareData.arrow, placement);
      }
      if (this.trigger.includes('mouseenter') && this.interactive) {
        this.utils.setupHoverBridge(placement);
      }
    });
  };

  /**
   * Finds the closest popover to the passed element in the DOM tree.
   *
   * Useful when need to find the parent popover in a nested popover scenario.
   *
   * @param element - The element to start searching from.
   */
  protected findClosestPopover = (element: Element): Popover | null => {
    let el: Element | null = element;
    while (el && !(el instanceof Popover)) {
      el = el.parentElement;
    }
    return el;
  };

  public override render() {
    return html`
      <div class="popover-hover-bridge"></div>
      ${this.closeButton
        ? html` <mdc-button
            class="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${ifDefined(this.closeButtonAriaLabel) || ''}
            @click="${this.hide}"
          ></mdc-button>`
        : nothing}
      ${this.showArrow ? html`<div class="popover-arrow"></div>` : nothing}
      <div part="popover-content">
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
