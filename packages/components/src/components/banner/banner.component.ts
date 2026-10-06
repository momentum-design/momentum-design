import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS, MOTION_PHASE } from './banner.constants';
import styles from './banner.styles';
import type { BannerVariant, MotionPhase } from './banner.types';
import { getIconNameForVariant } from './banner.utils';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * @tagname mdc-banner
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event hidden - (React: onHidden) Dispatched after the exit animation completes; consumer should unmount the host.
 *
 * @slot content - Complete content override. When used, it replaces all default banner content including icon, label, secondary label, and actions.
 * @slot leading-icon - Custom icon content. Overrides the default variant-based icon.
 * @slot leading-text - Custom text content. Overrides the label and secondaryLabel properties.
 * @slot trailing-actions - Custom action buttons and controls. Use this for dismiss buttons, reset buttons, or any other actions.
 *
 * @csspart leading - The leading section containing the icon and text.
 * @csspart leading-icon - The icon displayed for variants or custom icon slot.
 * @csspart leading-text - The leading section containing label and secondary label text.
 * @csspart trailing - The trailing section containing action buttons and controls.
 * @csspart leading-label - The label text of the banner.
 * @csspart leading-secondary-label - The secondary label text of the banner.
 *
 * @cssproperty --mdc-banner-background-color - Background color of the banner.
 * @cssproperty --mdc-banner-border-color - Border color of the banner.
 * @cssproperty --mdc-banner-border-width - Border width of the banner.
 * @cssproperty --mdc-banner-icon-color - Color of the icon in the banner.
 * @cssproperty --mdc-banner-elevation - Elevation/shadow of the banner.
 * @cssproperty --mdc-banner-padding - Padding inside the banner.
 * @cssproperty --mdc-banner-gap - Gap between banner elements.
 */
class Banner extends Component {
  /**
   * The type of banner variant.
   * - Can be `custom`, `informational`, `warning`, `error`, or `success`.
   *
   * Note: When using the `custom` variant, provide your own icon via the `leading-icon` slot; otherwise, no icon will be shown.
   * @default 'custom'
   */
  @property({ type: String, reflect: true })
  variant: BannerVariant = DEFAULTS.VARIANT;

  /**
   * Banner label text
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Banner secondary label text
   *
   * Note: Optional supporting text that appears below the label. Only rendered when label is also provided.
   */
  @property({ type: String, reflect: true, attribute: 'secondary-label' })
  secondaryLabel?: string;

  /**
   * Controls banner visibility. Must be `true` on mount. Set to `false` to play the exit animation
   * before dispatching `hidden`.
   * @default true
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = DEFAULTS.OPEN;

  @property({ type: String, attribute: 'data-motion-phase', reflect: true })
  private motionPhase: MotionPhase = MOTION_PHASE.ENTERING;

  /** @internal */
  private reducedMotionQuery?: MediaQueryList;

  /** @internal */
  private exitTimer?: number;

  /** @internal */
  private enterTimer?: number;

  /** @internal */
  private hiddenDispatched = false;

  /** @internal */
  private getBannerInner(): HTMLElement | null {
    return this.renderRoot.querySelector('.banner-inner');
  }

  /** @internal */
  private handleTransitionEnd = (event: TransitionEvent): void => {
    if (event.target !== this.getBannerInner()) {
      return;
    }

    if (this.motionPhase === MOTION_PHASE.EXITING && event.propertyName === 'grid-template-rows') {
      this.finishExit();
      return;
    }

    if (this.motionPhase === MOTION_PHASE.ENTERING && event.propertyName === 'grid-template-rows') {
      this.clearEnterTimer();
      this.motionPhase = MOTION_PHASE.VISIBLE;
    }
  };

  public override connectedCallback(): void {
    super.connectedCallback();
    this.hiddenDispatched = false;
    this.reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    this.addEventListener('transitionend', this.handleTransitionEnd);

    if (!this.open) {
      console.warn('mdc-banner: mounting with open="false" is not supported.');
      this.motionPhase = MOTION_PHASE.EXITING;
      this.finishExit();
      return;
    }

    this.startEntering();
  }

  public override disconnectedCallback(): void {
    this.clearExitTimer();
    this.clearEnterTimer();
    this.removeEventListener('transitionend', this.handleTransitionEnd);
    super.disconnectedCallback();
  }

  public override willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);

    if (!changedProperties.has('open')) {
      return;
    }

    const previousOpen = changedProperties.get('open') as boolean | undefined;

    if (previousOpen === true && this.open === false) {
      this.startExit();
    }
  }

  /** @internal */
  private clearExitTimer(): void {
    if (this.exitTimer !== undefined) {
      window.clearTimeout(this.exitTimer);
      this.exitTimer = undefined;
    }
  }

  /** @internal */
  private clearEnterTimer(): void {
    if (this.enterTimer !== undefined) {
      window.clearTimeout(this.enterTimer);
      this.enterTimer = undefined;
    }
  }

  /** @internal */
  private getTransitionDurationMs(property: string, element: HTMLElement = this): number {
    const transitionProperty = getComputedStyle(element).transitionProperty.split(',');
    const durations = getComputedStyle(element).transitionDuration.split(',');
    const parsedDurations = durations.map((duration, index) => {
      const appliesToProperty =
        transitionProperty[index]?.trim() === property ||
        transitionProperty[index]?.trim() === 'all' ||
        transitionProperty.length === 1;

      if (!appliesToProperty) {
        return 0;
      }

      const trimmed = duration.trim();

      if (trimmed.endsWith('ms')) {
        return Number.parseFloat(trimmed);
      }

      if (trimmed.endsWith('s')) {
        return Number.parseFloat(trimmed) * 1000;
      }

      return 0;
    });

    return Math.max(0, ...parsedDurations);
  }

  /** @internal */
  private scheduleExitComplete(): void {
    this.clearExitTimer();
    requestAnimationFrame(() => {
      if (this.motionPhase !== MOTION_PHASE.EXITING) {
        return;
      }

      const delay = this.getTransitionDurationMs('grid-template-rows', this.getBannerInner() ?? this);

      if (delay === 0) {
        this.finishExit();
        return;
      }

      this.exitTimer = window.setTimeout(() => {
        if (this.motionPhase === MOTION_PHASE.EXITING) {
          this.finishExit();
        }
      }, delay);
    });
  }

  /** @internal */
  private scheduleEnterComplete(): void {
    this.clearEnterTimer();
    requestAnimationFrame(() => {
      if (this.motionPhase !== MOTION_PHASE.ENTERING) {
        return;
      }

      const delay = this.getTransitionDurationMs('grid-template-rows', this.getBannerInner() ?? this);

      if (delay === 0) {
        this.motionPhase = MOTION_PHASE.VISIBLE;
        return;
      }

      this.enterTimer = window.setTimeout(() => {
        if (this.motionPhase === MOTION_PHASE.ENTERING) {
          this.motionPhase = MOTION_PHASE.VISIBLE;
        }
      }, delay);
    });
  }

  /** @internal */
  private prefersReducedMotion(): boolean {
    return this.reducedMotionQuery?.matches ?? window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  /** @internal */
  private areMotionTokensAvailable(): boolean {
    return Boolean(getComputedStyle(this).getPropertyValue('--mds-transition-slide-entrance').trim());
  }

  /** @internal */
  private shouldSkipMotionAnimation(): boolean {
    return this.prefersReducedMotion() || !this.areMotionTokensAvailable();
  }

  /** @internal */
  private dispatchHidden(): void {
    this.dispatchEvent(
      new CustomEvent('hidden', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  /** @internal */
  private finishExit(): void {
    if (this.hiddenDispatched) {
      return;
    }

    this.hiddenDispatched = true;
    this.clearExitTimer();
    this.clearEnterTimer();
    this.dispatchHidden();
  }

  /** @internal */
  private startEntering(): void {
    if (this.shouldSkipMotionAnimation()) {
      this.motionPhase = MOTION_PHASE.VISIBLE;
      return;
    }

    this.motionPhase = MOTION_PHASE.ENTERING;
    this.scheduleEnterComplete();
  }

  /** @internal */
  private startExit(): void {
    if (this.motionPhase === MOTION_PHASE.EXITING) {
      return;
    }

    if (this.shouldSkipMotionAnimation()) {
      this.motionPhase = MOTION_PHASE.EXITING;
      this.finishExit();
      return;
    }

    this.motionPhase = MOTION_PHASE.EXITING;
    this.scheduleExitComplete();
  }

  /**
   * @internal
   * Renders the icon based on the provided icon name.
   *
   * @param iconName - The name of the icon to render
   * @returns Template result containing the icon element, or nothing if no icon name provided
   */
  private renderIcon(iconName: IconNames | null): TemplateResult | typeof nothing {
    if (!iconName) return nothing;
    return html`
      <mdc-icon name="${iconName}" size="${DEFAULTS.PREFIX_ICON_SIZE}" part="leading-icon" length-unit="rem"></mdc-icon>
    `;
  }

  /**
   * @internal
   * Generates a template for the label and secondary label text.
   * Returns nothing if no label is provided, ensuring secondary label is only shown when label exists.
   *
   * @returns Template result containing label and optional secondary label elements
   */
  private getTextLabel(): TemplateResult | typeof nothing {
    if (!this.label) return nothing;
    return html`
      <mdc-text
        part="leading-label"
        type="${this.secondaryLabel ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_MEDIUM}"
        tagname="${VALID_TEXT_TAGS.SPAN}"
        >${this.label}</mdc-text
      >
      ${this.secondaryLabel
        ? html`<mdc-text
            part="leading-secondary-label"
            type="${TYPE.BODY_MIDSIZE_REGULAR}"
            tagname="${VALID_TEXT_TAGS.SPAN}"
            >${this.secondaryLabel}</mdc-text
          >`
        : nothing}
    `;
  }

  public override render() {
    return html`
      <div class="banner-inner">
        <div class="banner-content">
          <slot name="content">
            <div part="leading">
              <slot name="leading-icon">
                ${this.variant !== DEFAULTS.VARIANT ? this.renderIcon(getIconNameForVariant(this.variant)) : nothing}
              </slot>
              <slot name="leading-text">
                <div part="leading-text">${this.getTextLabel()}</div>
              </slot>
            </div>
            <div part="trailing">
              <slot name="trailing-actions"></slot>
            </div>
          </slot>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Banner;
