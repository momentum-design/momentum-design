/* eslint-disable no-restricted-syntax */
import { arrow, autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { BackdropMixin } from '../../utils/mixins/BackdropMixin';
import { FocusTrapMixin } from '../../utils/mixins/focus/FocusTrapMixin';
import { PreventScrollMixin } from '../../utils/mixins/PreventScrollMixin';
import type { ValueOf } from '../../utils/types';
import type Tooltip from '../tooltip/tooltip.component';
import { Timers } from '../../utils/controllers/Timers';
import { ACTIONS, KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';
import { DepthManager, StackChange, StackedOverlayComponent } from '../../utils/controllers/DepthManager';

import { COLOR, DEFAULTS, POPOVER_PLACEMENT, TIMEOUTS, TRIGGER } from './popover.constants';
import { PopoverEventManager } from './popover.events';
import styles from './popover.styles';
import type {
  PopoverBoundaryRoot,
  PopoverColor,
  PopoverPlacement,
  PopoverStrategy,
  PopoverTrigger,
} from './popover.types';
import { PopoverUtils } from './popover.utils';

/**
 * Popover is generic overlay which can be triggered by any actionable element.
 *
 * It can be used for tooltips, dropdowns, menus or any showing any other contextual content.
 *
 * The popover automatically positions itself based on available space and
 * supports dynamic height adjustments with scrollable content when needed.
 * It uses [Floating UI](https://floating-ui.com/) for maintaining the position of the popover.
 *
 * ## Limitations
 *
 * ### On trigger for multiple popovers
 *
 * A component (button, etc.) can trigger more than one popover, but only one of them should change the
 * aria-expanded and aria-haspopup attributes on the trigger.
 *
 * To prevent unexpected attribute changes on the trigger `disable-aria-expanded` attribute must be set on all linked
 * Popovers except one.
 *
 * ### React Popover with append-to attribute
 *
 * React mounts the popover based on the virtual DOM, but when the append-to attribute is set, the popover removes itself
 * and mounts to the specified element. React will not know about the move and will not know about the
 * newly created mdc-popoverportal element either. This throws a `NotFoundError` error when the Popover is directly
 * added/removed by React, for example:
 *
 * ```tsx
 * const SomeComponent = () => {
 *    const [isOpen, setIsOpen] = useState(false);
 *    return (<div>
 *      {isOpen && <Popover append-to="some-element-id">...</mdc-popover>}
 *    </div>);
 * }
 * ```
 * As a workaround Popover need to wrap with any other element/component, for example:
 * ```tsx
 * const SomeComponent = () => {
 *    const [isOpen, setIsOpen] = useState(false);
 *    return (<div>
 *      {isOpen && <div>
 *        <Popover append-to="some-element-id">...</mdc-popover>
 *      <div>}
 *    </div>);
 * }
 * ```
 * Note the wrapper <div> around the Popover component (React.Fragment does not work).
 *
 * @dependency mdc-button
 *
 * @tagname mdc-popover
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
 * @cssproperty --mdc-popover-width - width of the popover
 *
 * @slot - Default slot for the popover content
 *
 * @csspart popover-close - The close button of the popover.
 * @csspart popover-content - The content of the popover.
 * @csspart popover-hover-bridge - The hover bridge of the popover.
 */
class Popover extends KeyToActionMixin(BackdropMixin(PreventScrollMixin(FocusTrapMixin(Component)))) {
  /** track the depth of the popover for z-index calculation
   * @internal
   */
  protected depthManager = new DepthManager(this);

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
  boundaryRoot: PopoverBoundaryRoot = DEFAULTS.BOUNDARY_ROOT;

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
   * Element ID the backdrop will be a append to (if `backdrop` is true).
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  override backdropAppendTo?: string;

  /**
   * Set this property to false to make the backdrop a dimmed visible backdrop (if `backdrop` is true).
   * This is useful for cases where the popovers backdrop should get dimmed.
   *
   * @default true - default is to have a invisible backdrop
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-backdrop-invisible' })
  override isBackdropInvisible?: boolean = DEFAULTS.IS_BACKDROP_INVISIBLE;

  /**
   * Changes the placement of popover to keep it in view when scrolling.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-flip' })
  disableFlip: boolean = DEFAULTS.DISABLE_FLIP;

  /**
   * Changes the size of popover to keep it in view when scrolling.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  size: boolean = DEFAULTS.SIZE;

  /**
   * The internal z-index of the popovere.
   * @internal
   */
  private internalZIndex?: number;

  /**
   * The effective z-index of the popover.
   *
   * If no explicit `z-index` value is provided, then it automatically calculated
   * to ensure proper stacking order among multiple overlays.
   */
  @property({ type: Number, reflect: true, attribute: 'z-index' })
  get zIndex() {
    if (!Number.isInteger(this.internalZIndex)) {
      return this.depthManager.getHostZIndex();
    }
    return this.internalZIndex!;
  }

  set zIndex(value: number) {
    this.internalZIndex = value;
  }

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
  @property({ type: String, reflect: true })
  strategy: PopoverStrategy = DEFAULTS.STRATEGY;

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
   * Disable setting the `aria-expanded` attribute on trigger element.
   *
   * Note, when `disable-aria-expanded` is true
   *  - when its value change after first update to
   *    - `true`: popover will not remove the `aria-expanded` to avoid conflicts when there are more than one popover
   *      registered to the same trigger
   *      - `false`: check `aria-expanded` value and update it if necessary.
   *  - aria-haspopup will be disabled as well
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-expanded' })
  disableAriaExpanded: boolean = DEFAULTS.DISABLE_ARIA_EXPANDED;

  /**
   * Controls the visibility of a connected tooltip when this popover is open.
   * - If set to `true`, the tooltip remains open alongside the popover.
   * - If set to `false`, the tooltip will be closed when the popover opens.
   * Useful for scenarios where both a popover and a tooltip are linked to the same trigger element.
   */
  @property({ type: Boolean, reflect: true, attribute: 'keep-connected-tooltip-open' })
  keepConnectedTooltipOpen: boolean = DEFAULTS.KEEP_CONNECTED_TOOLTIP_OPEN;

  /**
   * Whether to update the position of the Popover on every animation frame if required.
   * While optimized for performance, it should be used sparingly and with caution.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'animation-frame' })
  animationFrame: boolean = DEFAULTS.ANIMATION_FRAME;

  public arrowElement: HTMLElement | null = null;

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
  protected shouldSuppressOpening: boolean = false;

  /** @internal */
  private get connectedTooltip() {
    const connectedTooltips = (this.getRootNode() as Document | ShadowRoot).querySelectorAll(
      `mdc-tooltip[triggerID="${this.triggerID}"]`,
    ) as NodeListOf<Tooltip>;

    return Array.from(connectedTooltips).find(t => t !== (this as unknown as Tooltip));
  }

  /**
   * Get trigger element on-demand
   * It is necessary because trigger might appear later in the DOM, or it could be replaced completely.
   */
  public get triggerElement(): HTMLElement | null {
    return (this.getRootNode() as Document | ShadowRoot).querySelector(`[id="${this.triggerID}"]`) as HTMLElement;
  }

  /** @internal */
  private timers = new Timers(this);

  constructor() {
    super();
    this.show = this.show.bind(this);

    this.utils = new PopoverUtils(this);
    this.parseTrigger();
    [this.openDelay, this.closeDelay] = this.utils.setupDelay();
  }

  /** @internal */
  private parseTrigger = () => {
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

    PopoverEventManager.onCreatedPopover(this);
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.utils.setupAppendTo();

    this.setupTriggerListeners();
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();

    this.removeAllListeners();
    this.deactivateFocusTrap?.();
    this.deactivatePreventScroll();

    this.moveElementBackAfterBackdropRemoval(this.triggerElement);
    this.removeBackdrop();

    this.floatingUICleanupFunction?.();

    if (!this.keepConnectedTooltipOpen) {
      if (this.connectedTooltip) {
        this.connectedTooltip.shouldSuppressOpening = false;
      }
    }
    this.utils.cleanupAppendTo();
    PopoverEventManager.onDestroyedPopover(this);
  }

  /**
   * Sets up the trigger related event listeners, based on the trigger type.
   * Includes fallback for mouseenter trigger to also handle focusin for non-interactive popovers.
   *
   * We are using capture phase for to make sure we capture trigger events even when they are not propagated during the
   * bubble phase (e.g.: buttons in list item)
   * @internal
   */
  private setupTriggerListeners = () => {
    if (this.trigger.includes('click')) {
      document.addEventListener('click', this.togglePopoverVisible, { capture: true });
      if (this.hideOnBlur) {
        document.addEventListener('focusout', this.handleFocusOut, { capture: true });
      }
    }
    if (this.trigger.includes('mouseenter')) {
      const hoverBridge = this.renderRoot.querySelector('div[part="popover-hover-bridge"]');
      hoverBridge?.addEventListener('mouseenter', this.show);
      document.addEventListener('mouseenter', this.handleMouseEnter, { capture: true });
      document.addEventListener('mouseleave', this.handleMouseLeave, { capture: true });
      this.addEventListener('mouseenter', this.cancelCloseDelay);
      this.addEventListener('mouseleave', this.startCloseDelay);
    }
    if (this.trigger.includes('focusin')) {
      document.addEventListener('focusin', this.handleFocusIn, { capture: true });
      if (!this.interactive) {
        document.addEventListener('focusout', this.handleFocusOut, { capture: true });
      }
    }
  };

  /**
   * Removes the trigger related event listeners.
   * @internal
   */
  private removeTriggerListeners = () => {
    // click trigger
    document.removeEventListener('click', this.togglePopoverVisible, { capture: true });
    // mouseenter trigger
    const hoverBridge = this.renderRoot.querySelector('div[part="popover-hover-bridge"]');
    hoverBridge?.removeEventListener('mouseenter', this.show);
    document.removeEventListener('mouseenter', this.handleMouseEnter, { capture: true });
    document.removeEventListener('mouseleave', this.handleMouseLeave, { capture: true });
    this.removeEventListener('mouseenter', this.cancelCloseDelay);
    this.removeEventListener('mouseleave', this.startCloseDelay);

    // focusin trigger
    document.removeEventListener('focusin', this.handleFocusIn, { capture: true });
    document.removeEventListener('focusout', this.handleFocusOut, { capture: true });
  };

  /**
   * Removes all event listeners related to the popover.
   * @internal
   */
  private removeAllListeners = () => {
    this.removeTriggerListeners();

    if (this.hideOnOutsideClick) {
      document.removeEventListener('click', this.onOutsidePopoverClick, { capture: true });
    }

    if (this.hideOnEscape) {
      this.removeEventListener('keydown', this.onEscapeKeydown);
      document.removeEventListener('keydown', this.onEscapeKeydown);
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
      this.parseTrigger();
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

    if (changedProperties.has('appendTo')) {
      if (this.appendTo) {
        this.utils.setupAppendTo();
      } else {
        this.utils.cleanupAppendTo();
      }
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
   * @internal
   */
  protected onOutsidePopoverClick = (event: MouseEvent) => {
    if (!this.depthManager.isHostOnTop()) return;

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
   * @internal
   */
  private onEscapeKeydown = (event: KeyboardEvent) => {
    if (!this.visible || this.getActionForKeyEvent(event) !== ACTIONS.ESCAPE || !this.depthManager.isHostOnTop()) {
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
   * @internal
   */
  private onPopoverFocusOut = (event: FocusEvent) => {
    if (!this.contains(event.relatedTarget as Node)) {
      this.hide();
    }
  };

  /** @internal */
  onComponentStackChanged(changed: StackChange): void {
    if (changed === 'removed') {
      this.hide();
    } else if (changed === 'moved') {
      this.requestUpdate('zIndex');
    }
  }

  /**
   * Handles the popover visibility change and position the popover.
   * Handles the exit event to close the popover.
   *
   * @param oldValue - The old value of the visible property.
   * @param newValue - The new value of the visible property.
   */
  protected async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    const { triggerElement } = this;
    if (oldValue === newValue || !triggerElement) {
      return;
    }

    if (newValue && !this.shouldSuppressOpening) {
      if (this.depthManager.pushHost()) {
        // request update to trigger zIndex recalculation
        this.requestUpdate('zIndex');
      }

      if (!this.keepConnectedTooltipOpen) {
        // If this popover gets visible and keepConnectedTooltipsClosed is true,
        // we need to close the connected tooltip.
        if (this.connectedTooltip) {
          this.connectedTooltip.visible = false;
          this.connectedTooltip.shouldSuppressOpening = true;
        }
      }

      // create backdrop if it doesn't exist
      if (this.backdrop && !this.backdropElement) {
        this.createBackdrop('popover');
        this.keepElementAboveBackdrop(triggerElement);
      }

      this.positionPopover();

      if (this.hideOnBlur) {
        this.addEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          triggerElement.style.pointerEvents = 'none';
        }
      }
      if (this.hideOnEscape) {
        this.addEventListener('keydown', this.onEscapeKeydown);
        document.addEventListener('keydown', this.onEscapeKeydown);
      }

      this.activatePreventScroll();

      if (this.hideOnOutsideClick) {
        document.addEventListener('click', this.onOutsidePopoverClick, { capture: true });
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
      this.depthManager.popHost();

      // cleanup floating-ui on closing the popover
      this.floatingUICleanupFunction?.();

      if (this.backdrop) {
        this.moveElementBackAfterBackdropRemoval(triggerElement);
        this.removeBackdrop();
      }

      if (this.hideOnBlur) {
        this.removeEventListener('focusout', this.onPopoverFocusOut);
        if (this.trigger === 'click') {
          triggerElement.style.pointerEvents = '';
        }
      }

      if (this.hideOnOutsideClick) {
        document.removeEventListener('click', this.onOutsidePopoverClick, { capture: true });
      }

      if (this.hideOnEscape) {
        this.removeEventListener('keydown', this.onEscapeKeydown);
        document.removeEventListener('keydown', this.onEscapeKeydown);
      }

      this.deactivatePreventScroll();
      this.deactivateFocusTrap?.();

      if (this.focusBackToTrigger) {
        triggerElement?.focus();
      }

      if (!this.keepConnectedTooltipOpen) {
        if (this.connectedTooltip) {
          this.connectedTooltip.shouldSuppressOpening = false;
        }
      }
      PopoverEventManager.onHidePopover(this);
    }
  }

  /**
   * Handles mouse enter event on the trigger element.
   * This method sets the `isHovered` flag to true and shows the popover
   * @internal
   */
  private handleMouseEnter = (event: Event) => {
    if (!this.isEventFromTrigger(event)) return;

    this.isHovered = true;
    this.show();
  };

  /**
   * Handles mouse leave event on the trigger element.
   * This method sets the `isHovered` flag to false and starts the close delay
   * timer to hide the popover.
   * @internal
   */
  private handleMouseLeave = (event: Event) => {
    if (!this.isEventFromTrigger(event)) return;

    this.isHovered = false;
    this.startCloseDelay();
  };

  /**
   * Closes based on hideOnBlur property or hover state.
   * @internal
   */
  private handleFocusOut = (event: Event) => {
    if (!this.isEventFromTrigger(event)) return;

    if (this.hideOnBlur) {
      const { relatedTarget } = event as FocusEvent;
      // Don't hide if focus moves within the component
      if (!this.contains(relatedTarget as Node)) {
        this.hide();
      }
      return;
    }

    if (!this.isHovered) {
      this.hide();
    }
  };

  /**
   * Handles focus in event on the trigger element.
   * This method checks if the trigger element has visible focus or is being hovered.
   * @internal
   */
  private handleFocusIn = (event: Event) => {
    if (!this.isEventFromTrigger(event)) return;

    if (
      this.triggerElement?.matches(':focus-visible') ||
      this.triggerElement?.shadowRoot?.querySelector('.mdc-focus-ring')?.matches(':focus-visible') ||
      this.isHovered
    ) {
      this.show();
    }
  };

  /**
   * Cancels the open delay timer.
   * @internal
   */
  private cancelOpenDelay = () => {
    this.timers.clearTimeout(TIMEOUTS.OPEN);
  };

  /**
   * Starts the close delay timer.
   * If the popover is not interactive, it will close the popover after the delay.
   * @internal
   */
  private startCloseDelay = () => {
    this.cancelOpenDelay();

    if (!this.interactive) {
      this.hide();
    } else {
      const callback = () => {
        this.visible = false;
      };
      if (this.closeDelay > 0) {
        this.timers.setTimeout(TIMEOUTS.HOVER, callback, this.closeDelay);
      } else {
        this.timers.clearTimeout(TIMEOUTS.HOVER);
        callback();
      }
    }
  };

  /**
   * Cancels the close delay timer.
   * @internal
   */
  private cancelCloseDelay = () => {
    this.timers.clearTimeout(TIMEOUTS.HOVER);
    this.timers.clearTimeout(TIMEOUTS.CLOSE);
  };

  /**
   * Shows the popover.
   */
  public show() {
    if (this.shouldSuppressOpening) {
      return;
    }

    this.cancelCloseDelay();

    if (this.visible) {
      return;
    }

    const callback = () => {
      this.visible = true;
    };

    if (this.openDelay > 0) {
      this.timers.setTimeout(TIMEOUTS.OPEN, callback, this.openDelay);
    } else {
      this.timers.clearTimeout(TIMEOUTS.OPEN);
      callback();
    }
  }

  /**
   * Hides the popover.
   */
  public hide = () => {
    this.cancelOpenDelay();

    const callback = () => {
      this.visible = false;
    };
    if (this.closeDelay > 0) {
      this.timers.setTimeout(TIMEOUTS.CLOSE, callback, this.closeDelay);
    } else {
      this.timers.clearTimeout(TIMEOUTS.CLOSE);
      callback();
    }
  };

  /**
   * Toggles the popover visibility.
   */
  public togglePopoverVisible = (event: Event) => {
    if (!this.isEventFromTrigger(event)) return;

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
   * @internal
   */
  private positionPopover = () => {
    const { triggerElement } = this;
    if (!triggerElement) return;

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

    if (!this.disableFlip) {
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
      this.arrowElement = this.renderRoot.querySelector('div[part="popover-arrow"]');
      if (this.arrowElement) {
        const arrowLen = this.arrowElement.offsetHeight;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset += arrowOffset;
        middleware.push(arrow({ element: this.arrowElement, padding: 12 }));
      }
    }

    middleware.push(offset(popoverOffset));

    this.floatingUICleanupFunction = autoUpdate(
      triggerElement,
      this,
      async () => {
        const { triggerElement } = this;

        if (!triggerElement) return;

        const adjustedPlacement = this.adjustPlacementForRtl(this.placement);
        const { x, y, middlewareData, placement } = await computePosition(triggerElement, this, {
          placement: adjustedPlacement,
          middleware,
          strategy: this.strategy,
        });

        this.utils.updatePopoverStyle(x, y);
        if (middlewareData.arrow && this.arrowElement) {
          this.utils.updateArrowStyle(middlewareData.arrow, placement);
        }
        if (this.trigger.includes('mouseenter')) {
          this.utils.setupHoverBridge(placement);
        }
      },
      {
        animationFrame: this.animationFrame,
      },
    );
  };

  protected isEventFromTrigger(event: Event): boolean {
    if (!this.triggerID) return false;

    if (event.composed) {
      return event.composedPath().some(el => (el as HTMLElement)?.id === this.triggerID);
    }
    return (event.target as HTMLElement)?.id === this.triggerID;
  }

  /**
   * Detects if the current layout is in RTL (right-to-left) mode.
   * @returns True if RTL, false if LTR
   * @internal
   */
  protected isRtl(): boolean {
    return window.getComputedStyle(this).direction === 'rtl';
  }

  /**
   * Adjusts the placement for RTL layouts by flipping left/right directions.
   * @param placement - The original placement value
   * @returns The adjusted placement for RTL or original placement for LTR
   * @internal
   */
  protected adjustPlacementForRtl(placement: PopoverPlacement): PopoverPlacement {
    if (!this.isRtl()) {
      return placement;
    }
    switch (placement) {
      case POPOVER_PLACEMENT.LEFT:
        return POPOVER_PLACEMENT.RIGHT;
      case POPOVER_PLACEMENT.LEFT_START:
        return POPOVER_PLACEMENT.RIGHT_START;
      case POPOVER_PLACEMENT.LEFT_END:
        return POPOVER_PLACEMENT.RIGHT_END;
      case POPOVER_PLACEMENT.RIGHT:
        return POPOVER_PLACEMENT.LEFT;
      case POPOVER_PLACEMENT.RIGHT_START:
        return POPOVER_PLACEMENT.LEFT_START;
      case POPOVER_PLACEMENT.RIGHT_END:
        return POPOVER_PLACEMENT.LEFT_END;
      default:
        return placement;
    }
  }

  public override render() {
    this.style.zIndex = `${this.zIndex}`;
    return html`
      <div part="popover-hover-bridge"></div>
      ${this.closeButton
        ? html` <mdc-button
            part="popover-close"
            prefix-icon="cancel-bold"
            variant="tertiary"
            size="20"
            aria-label=${ifDefined(this.closeButtonAriaLabel) || ''}
            @click="${this.hide}"
          ></mdc-button>`
        : nothing}
      ${this.showArrow ? html`<div class="popover-arrow" part="popover-arrow"></div>` : nothing}
      <div part="popover-content">
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
