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
import { DEFAULTS } from './popover.constants';

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
  override id = '';

  /**
   * The ID of the element that triggers the popover.
   */
  @property({ type: String })
  triggerID?: string;

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
  visible = false;

  /**
   * The offset of the popover.
   * @default 4
   */
  @property({ type: Number, reflect: true })
  offset: number = DEFAULTS.OFFSET;

  /**
   * The show arrow visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, attribute: 'show-arrow' })
  showArrow = false;

  /**
   * The close button visibility of the popover.
   * @default false
   */
  @property({ type: Boolean, attribute: 'close-button', reflect: true })
  closeButton = false;

  /**
   * Determines whether the popover is interactive。
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  interactive = false;

  /**
   * The delay of the show/hide popover.
   * @default 0,0
   */
  @property({ type: String, reflect: true })
  delay: string = DEFAULTS.DELAY;

  /**
   * Determines whether the popover is focus trap.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-trap' })
  focusTrap = false;

  /**
   * Prevent outside scrolling when popover show.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-scroll' })
  preventScroll = false;

  /**
   * Hide popover on escape key press.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-escape' })
  hideOnEscape = false;

  /**
   * Hide popover on blur.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-blur' })
  hideOnBlur = false;

  /**
   * Hide on outside click of the popover.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-outside-click' })
  hideOnOutsideClick = false;

  /**
   * The focus back to trigger after the popover hide.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-back-to-trigger' })
  focusBackToTrigger = false;

  /**
   * Determines whether the backdrop is .
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  backdrop = false;

  /**
   * Changes the placement of popover to keep it in view.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  flip = false;

  /**
   * Changes the size of popover to keep it in view.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  size = false;

  /**
   * The z-index of the popover.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'set-index' })
  setIndex = 1000;

  /**
   * Element ID that the popover append to.
   * @default ''
   */
  @property({ type: String, reflect: true })
  appendTo = '';

  /**
   * Aria-label attribute to be set for close button accessibility
   * @default null
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

  /**
   * Aria-label attribute to be set for popover accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Aria-labelledby attribute to be set for popover accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledBy: string | null = null;

  /**
   * Role attribute to be set for popover accessibility
   * @default dialog
   */
  @property({ type: String })
  override role: ModalContainerRole = DEFAULTS.ROLE;

  /**
   * Aria-describedby attribute to be set for popover accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-describeby' })
  ariaDecribeBy: string | null = null;

  /** @internal */
  private triggerElement: HTMLElement | null = null;

  /** @internal */
  private popoverElement: HTMLElement | null = null;

  /** @internal */
  private arrowElement: HTMLElement | null = null;

  /** @internal */
  private hoverTimer: number | null = null;

  /** @internal */
  private openDelay: number = 0;

  /** @internal */
  private closeDelay: number = 0;

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.popoverElement = this.renderRoot.querySelector('.popover-container');
    this.setupAppendTo();
    this.setupDelay();
    this.setupTrigger();
    this.onCreatedPopper();

    if (this.visible) {
      await this.positionPopover();
      await this.handleCreatePopperFirstUpdate();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
    this.onDestroyedPopper();
    popoverStack.remove(this);
  }

  /**
  * This method checks if the `appendTo` property is set, finds the corresponding
  * DOM element by its ID, and appends the component (`this`) as a child of that element.
  */  private setupAppendTo() {
    if (this.appendTo) {
      const appendToElement = document.getElementById(this.appendTo);
      if (appendToElement) {
        appendToElement.appendChild(this);
      }
    }
  }

  private setupDelay() {
    try {
      const [openDelay, closeDelay] = this.delay
        .split(',')
        .map((delay) => {
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

  private setupTrigger() {
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
      this.triggerElement.addEventListener('click', this.togglePopover.bind(this));
    }
    if (this.trigger.includes('mouseenter')) {
      this.triggerElement.addEventListener('mouseenter', this.showPopover.bind(this));
      this.triggerElement.addEventListener('mouseleave', this.startCloseDelay.bind(this));
      this.popoverElement?.addEventListener('mouseenter', this.cancelCloseDelay.bind(this));
      this.popoverElement?.addEventListener('mouseleave', this.startCloseDelay.bind(this));
    }
    if (this.trigger.includes('focusin')) {
      this.triggerElement.addEventListener('focusin', this.showPopover.bind(this));
    }
    this.addEventListener('focus-trap-exit', this.hidePopover.bind(this));
  }

  removeEventListeners() {
    if (!this.triggerElement) return;

    this.triggerElement.removeEventListener('click', this.togglePopover.bind(this));
    this.triggerElement.removeEventListener('mouseenter', this.showPopover.bind(this));
    this.triggerElement.removeEventListener('mouseleave', this.hidePopover.bind(this));
    this.popoverElement?.removeEventListener('mouseenter', this.cancelCloseDelay.bind(this));
    this.popoverElement?.removeEventListener('mouseleave', this.startCloseDelay.bind(this));
    this.triggerElement.removeEventListener('focusin', this.showPopover.bind(this));

    this.removeEventListener('focus-trap-exit', this.hidePopover.bind(this));
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('visible')) {
      const oldValue = changedProperties.get('visible') as boolean;
      await this.isOpenUpdated(oldValue, this.visible);
    }
  }

  private onOutsidePopoverClick = (event: MouseEvent) => {
    if (popoverStack.peek() !== this) return;

    let insidePopoverClick = false;
    const path = event.composedPath();
    insidePopoverClick = this.contains(event.target as Node) || path.includes(this.triggerElement!);
    if (!insidePopoverClick) {
      this.hidePopover();
    }
  };

  private onWindowBlurEvent = () => {
    if (this.visible) {
      this.hidePopover();
    }
  };

  private onEscapeKeydown = async (event: KeyboardEvent) => {
    if (!this.visible || event.code !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.hidePopover();
  };

  private async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    if (oldValue === newValue) {
      return;
    }

    if (newValue) {
      this.enableFocusTrap = this.focusTrap;
      this.enablePreventScroll = this.preventScroll;

      await this.positionPopover();
      await this.handleCreatePopperFirstUpdate();

      if (this.hideOnBlur) {
        window.addEventListener('blur', this.onWindowBlurEvent);
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
        window.removeEventListener('blur', this.onWindowBlurEvent);
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

  private startCloseDelay = async () => {
    if (!this.interactive) {
      this.hidePopover();
    } else {
      this.hoverTimer = window.setTimeout(() => {
        this.visible = false;
      }, this.closeDelay);
    }
  };

  private cancelCloseDelay = () => {
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  };

  public async showPopover() {
    this.cancelCloseDelay();
    setTimeout(() => {
      this.visible = true;
      this.onShowPopover();
    }, this.openDelay);
    popoverStack.push(this);
  }

  public hidePopover() {
    if (popoverStack.peek() === this) {
      setTimeout(() => {
        this.visible = false;
        this.onHidePopover();
      }, this.closeDelay);
      popoverStack.pop();
    }
  }

  async togglePopover() {
    if (this.visible) {
      this.hidePopover();
    } else {
      await this.showPopover();
    }
  }

  private async handleCreatePopperFirstUpdate() {
    if (this.visible && this.interactive) {
      this.setFocusableElements?.();
      await this.updateComplete;
      this.setInitialFocus?.();
    }
  }

  private async positionPopover() {
    if (!this.triggerElement || !this.popoverElement) return;

    const middleware = [shift()];
    let popoverOffset = this.offset;

    if (this.flip) {
      middleware.push(flip());
    }

    if (this.size) {
      const popoverContent = this.popoverElement.querySelector('.popover-content') as HTMLElement;
      middleware.push(size({
        apply({ availableHeight }) {
          if (!popoverContent) return;
          Object.assign(popoverContent.style, {
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 25,
      }));
    }

    if (this.showArrow) {
      this.arrowElement = this.renderRoot.querySelector('#popover-arrow');
      if (this.arrowElement) {
        const arrowLen = 16;
        const arrowOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        popoverOffset = this.offset + arrowOffset;
        middleware.push(arrow({ element: this.arrowElement }));
      }
    }

    middleware.push(offset(popoverOffset));

    autoUpdate(this.triggerElement, this.popoverElement, async () => {
      if (!this.triggerElement || !this.popoverElement) return;

      const { x, y, middlewareData, placement } = await computePosition(
        this.triggerElement,
        this.popoverElement,
        {
          placement: this.placement,
          middleware,
        },
      );

      this.updatePopoverStyle(x, y);
      if (middlewareData.arrow && this.arrowElement) {
        this.updateArrowStyle(middlewareData.arrow, placement);
      }
    });
  }

  private updatePopoverStyle(x: number, y: number): void {
    if (!this.popoverElement) return;

    Object.assign(this.popoverElement.style, {
      left: `${x}px`,
      top: `${y}px`,
      position: 'absolute',
    });
  }

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

    this.arrowElement.setAttribute('data-side', side);

    Object.assign(this.arrowElement.style, {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      [staticSide]: `${-this.arrowElement.offsetHeight / 1.95}px`,
    });
  }

  private onShowPopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-show', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  private onHidePopover = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-hide', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  private onCreatedPopper = () => {
    this.dispatchEvent(
      new CustomEvent('popover-on-created', {
        detail: { show: this.visible },
        composed: true,
        bubbles: true,
      }),
    );
  };

  private onDestroyedPopper = () => {
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
          id=${this.id} 
          class='popover-container'
          elevation='3'
          color=${this.color}
          aria-modal=${ifDefined(this.interactive ? 'true' : undefined)}
          ?visible=${this.visible}
          rolse=${this.role}
          style='z-index: ${this.setIndex};'
          data-color=${this.color}
        >
          ${this.closeButton
    ? html` <mdc-button 
              class="popover-close" 
              prefix-icon="cancel-bold" 
              variant="tertiary" 
              size="20" 
              aria-label=${ifDefined(this.closeButtonAriaLabel)}
              @click="${this.hidePopover}"></mdc-button>`
    : nothing}
          ${this.showArrow ? html`<div id="popover-arrow" class="popover-arrow" 
            style="z-index: ${this.setIndex};"></div>` : nothing}
          <div class="popover-content" part="popover-content">
            <slot></slot>
          </div>
        </mdc-modalcontainer>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
