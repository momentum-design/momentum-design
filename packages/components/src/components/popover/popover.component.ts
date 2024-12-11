import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { computePosition, autoUpdate, offset, flip, shift, arrow } from '@floating-ui/dom';
import type { Placement } from '@floating-ui/utils';
import styles from './popover.styles';
import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';

/**
 * popover component, which .
 *
 * @dependency mdc-button
 *
 * @tagname mdc-popover
 */
class Popover extends FocusTrapMixin(Component) {
  /**
   * The ID of the element that triggers the popover.
   */
  @property({ type: String })
  triggerID?: string;

  /**
   * The event that triggers the popover.
   */
  @property({ type: String, reflect: true })
  trigger: string = 'click';

  /**
   * The placement of the popover.
   */
  @property({ type: String, reflect: true })
  placement: Placement = 'bottom';

  /**
   * The background color of the popover.
   */
  @property({ type: Boolean, attribute: 'inverted-color' })
  invertedColor = false;

  /**
   * The visibility of the popover.
   */
  @property({ type: Boolean, reflect: true })
  visible = false;

  /**
   * The offset of the popover.
   */
  @property({ type: Number, reflect: true })
  offset: number = 4;

  /**
   * The arrow visibility of the popover.
   */
  @property({ type: Boolean, attribute: 'show-arrow' })
  showArrow = false;

  /**
   * The close button visibility of the popover.
   */
  @property({ type: Boolean, attribute: 'close-button', reflect: true })
  closeButton = false;

  /**
   * The interactive visibility of the popover.
   */
  @property({ type: Boolean, reflect: true })
  interactive = false;

  /**
   * The delay of the show/hide popover.
   */
  @property({ type: Number, reflect: true })
  delay: number = 0;

  /**
   * The focus trap of the popover.
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-trap' })
  focusTrap = false;

  /**
   * Prevent scroll when popover show..
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-scroll' })
  preventScroll = false;

  /**
   * The hide on escape of the popover.
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-escape' })
  hideOnEscape = false;

  /**
   * The hide on blur of the popover.
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-blur' })
  hideOnBlur = false;

  /**
   * The hide on blur of the popover.
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-outside-click' })
  hideOnOutsideClick = false;

  /**
   * The hide on blur of the popover.
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-back-to-trigger' })
  focusBackToTrigger = false;

  /**
   * The hide on click of the popover.
   */
  @property({ type: Number, reflect: true, attribute: 'set-index' })
  setIndex = 1000;

  /**
   * The hide on click of the popover.
   */
  @property({ type: Boolean, reflect: true })
  appendTo = false;

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

  @property({ type: String })
  override role: string | null = null;

  @property({ type: String, attribute: 'aria-describeby' })
  ariaDecribeBy: string | null = null;

  private triggerElement: HTMLElement | null = null;

  private popoverElement: HTMLElement | null = null;

  private arrowElement: HTMLElement | null = null;

  override connectedCallback() {
    super.connectedCallback();
    this.setupTrigger();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }

  private setupTrigger() {
    if (!this.triggerID) return;

    this.triggerElement = document.getElementById(this.triggerID);
    if (!this.triggerElement) return;

    if (this.trigger.includes('click')) {
      this.triggerElement.addEventListener('click', this.togglePopover.bind(this));
    }
    if (this.trigger.includes('hover')) {
      this.triggerElement.addEventListener('mouseenter', this.showPopover.bind(this));
      this.triggerElement.addEventListener('mouseleave', this.hidePopover.bind(this));
    }
    // if (this.trigger.includes('focus')) {
    //   this.triggerElement.addEventListener('focus', this.showPopover.bind(this));
    //   this.triggerElement.addEventListener('blur', this.hidePopover.bind(this));
    // }
    this.addEventListener('focus-trap-exit', this.hidePopover.bind(this));
  }

  removeEventListeners() {
    if (!this.triggerElement) return;

    this.triggerElement.removeEventListener('click', this.togglePopover.bind(this));
    this.triggerElement.removeEventListener('mouseenter', this.showPopover.bind(this));
    this.triggerElement.removeEventListener('mouseleave', this.hidePopover.bind(this));
    this.triggerElement.removeEventListener('focus', this.showPopover.bind(this));
    this.triggerElement.removeEventListener('blur', this.hidePopover.bind(this));

    this.removeEventListener('focus-trap-exit', this.hidePopover.bind(this));
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.popoverElement = this.renderRoot.querySelector('#popover-container');

    if (this.visible) {
      await this.positionPopover();
      await this.handleCreatePopperFirstUpdate();
    }
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('visible')) {
      const oldValue = changedProperties.get('visible') as boolean;
      await this.isOpenUpdated(oldValue, this.visible);
    }
  }

  onOutsidePopoverClick = (event: MouseEvent) => {
    let insidePopoverClick = false;
    const path = event.composedPath();
    insidePopoverClick = this.contains(event.target as Node) || path.includes(this.triggerElement!);
    if (!insidePopoverClick) {
      this.visible = false;
    }
  };

  onWindowBlurEvent = () => {
    if (this.visible) {
      this.visible = false;
    }
  };

  onEscapeKeydown = async (event: KeyboardEvent) => {
    if (!this.visible || event.code !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.visible = false;
    await this.updateComplete;
    this.triggerElement?.focus();
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
        this.triggerElement?.setAttribute('aria-haspopup', 'true');
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

  async showPopover() {
    this.visible = true;
  }

  hidePopover() {
    this.visible = false;
  }

  async togglePopover() {
    this.visible = !this.visible;
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

    const middleware = [flip(), shift()];
    let popoverOffset = this.offset;

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
      [staticSide]: `${-this.arrowElement.offsetHeight / 1.9}px`,
    });
  }

  public override render() {
    return html`
        <div 
        id='popover-container' 
        class='popover-container'  
        ?visible="${this.visible}" 
        ?inverted="${this.invertedColor}"
        aria-label=${ifDefined(this.ariaLabel ?? undefined)}
        aria-labelledby=${ifDefined(this.ariaLabelledBy ?? undefined)}
        role=${ifDefined(this.role ?? undefined)}
        aria-describedby=${ifDefined(this.ariaDecribeBy ?? undefined)}
        aria-modal=${ifDefined(this.interactive ? 'true' : undefined)}
        style="z-index: ${this.setIndex};"
        >
          ${this.closeButton
    ? html` <mdc-button 
              class="popover-close" 
              prefix-icon="cancel-bold" 
              variant="tertiary" 
              size="20" 
              @click="${this.hidePopover}"></mdc-button>`
    : nothing}
          ${this.showArrow ? html`<div id="popover-arrow" class="popover-arrow"></div>` : nothing}
          <div class="popover-content">
            <slot></slot>
          </div>
        </div>
      `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Popover;
