import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { IconNameMixin } from '../../utils/mixins/IconNameMixin';
import { ROLE } from '../../utils/roles';
import type { IconNames } from '../icon/icon.types';
import { TYPE as FONT_TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import {
  DEFAULTS,
  ICON_NAMES_LIST,
  ICON_VARIANT,
  MOTION_PHASE,
  PULSE_STEP,
  TYPE as BADGE_TYPE,
} from './badge.constants';
import styles from './badge.styles';
import type { BadgeType, IconVariant, MotionPhase, PulseStep } from './badge.types';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * @tagname mdc-badge
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event hidden - (React: onHidden) Dispatched after the exit fade-out completes and the badge is fully hidden.
 *
 * @cssproperty --mdc-badge-primary-foreground-color - The foreground color of the primary badge.
 * @cssproperty --mdc-badge-primary-background-color - The background color of the primary badge.
 * @cssproperty --mdc-badge-secondary-foreground-color - The foreground color of the secondary badge.
 * @cssproperty --mdc-badge-secondary-background-color - The background color of the secondary badge.
 * @cssproperty --mdc-badge-success-foreground-color - The foreground color of the success badge.
 * @cssproperty --mdc-badge-success-background-color - The background color of the success badge.
 * @cssproperty --mdc-badge-warning-foreground-color - The foreground color of the warning badge.
 * @cssproperty --mdc-badge-warning-background-color - The background color of the warning badge.
 * @cssproperty --mdc-badge-error-foreground-color - The foreground color of the error badge.
 * @cssproperty --mdc-badge-error-background-color - The background color of the error badge.
 * @cssproperty --mdc-badge-overlay-background-color - The background color of the badge overlay.
 * @cssproperty --mdc-badge-dot-width - The width of the dot badge. Default is 0.75rem (12px).
 * @cssproperty --mdc-badge-dot-height - The height of the dot badge. Default is 0.75rem (12px).
 *
 * @csspart badge-dot - The dot notification badge.
 * @csspart badge-icon - The icon badge.
 * @csspart badge-overlay - The overlay badge.
 * @csspart badge-text - The text badge.
 */
class Badge extends IconNameMixin(Component) {
  /**
   * Type of the badge
   * Can be `dot` (notification) , `icon`, `counter`, `success`, `warning` or `error`.
   */
  @property({ type: String, reflect: true })
  type?: BadgeType;

  /**
   * Type of the variant can be `primary` or `secondary`.
   * It defines the background and foreground color of the icon.
   * @default primary
   */
  @property({ type: String, reflect: true })
  variant: IconVariant = DEFAULTS.VARIANT;

  /**
   * Counter is the number which can be provided in the badge.
   */
  @property({ type: Number })
  counter?: number;

  /**
   * The maximum number can be set up to 999, anything above that will be rendered as _999+_.
   * The max counter can be `9`, `99` or `999`.
   * @default 99
   */
  @property({ type: Number, attribute: 'max-counter', reflect: true })
  maxCounter: number = DEFAULTS.MAX_COUNTER;

  /**
   * Overlay is to add a thin outline to the badge.
   * This will help distinguish between the badge and the button,
   * where the badge will be layered on top of a button.
   * @default false
   */
  @property({ type: Boolean })
  overlay: boolean = DEFAULTS.OVERLAY;

  /**
   * Controls badge visibility. When set to `false`, the badge plays its exit animation
   * before dispatching `hidden`.
   * @default true
   */
  @property({ type: Boolean, reflect: true })
  visible: boolean = true;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ type: String, attribute: 'data-motion-phase', reflect: true })
  private motionPhase: MotionPhase = MOTION_PHASE.HIDDEN;

  @property({ type: String, attribute: 'data-pulse-step', reflect: true })
  private pulseStep: PulseStep | '' = '';

  @state()
  private lastFingerprint = '';

  @state()
  private pendingFingerprint: string | null = null;

  @state()
  private renderType?: BadgeType;

  @state()
  private pendingEntranceFingerprint: string | null = null;

  /** @internal */
  private exitReason: 'hide' | 'typeSwitch' | null = null;

  /** @internal */
  private reducedMotionQuery?: MediaQueryList;

  /** @internal */
  private exitTimer?: number;

  /** @internal */
  private pulseTimer?: number;

  /** @internal */
  private handleTransitionEnd = (event: TransitionEvent): void => {
    if (event.target !== this) {
      return;
    }

    if (this.motionPhase === MOTION_PHASE.EXITING && event.propertyName === 'opacity') {
      this.finishExit();
      return;
    }

    if (this.motionPhase === MOTION_PHASE.ENTERING && event.propertyName === 'opacity') {
      this.motionPhase = MOTION_PHASE.VISIBLE;
      return;
    }

    if (this.motionPhase === MOTION_PHASE.UPDATING && event.propertyName === 'transform') {
      this.advancePulseStep();
    }
  };

  public override connectedCallback(): void {
    super.connectedCallback();
    this.reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    this.addEventListener('transitionend', this.handleTransitionEnd);
    this.renderType = this.type ?? BADGE_TYPE.DOT;
    this.syncMotionState();
  }

  public override disconnectedCallback(): void {
    this.clearExitTimer();
    this.clearPulseTimer();
    this.removeEventListener('transitionend', this.handleTransitionEnd);
    super.disconnectedCallback();
  }

  private clearExitTimer(): void {
    if (this.exitTimer !== undefined) {
      window.clearTimeout(this.exitTimer);
      this.exitTimer = undefined;
    }
  }

  private clearPulseTimer(): void {
    if (this.pulseTimer !== undefined) {
      window.clearTimeout(this.pulseTimer);
      this.pulseTimer = undefined;
    }
  }

  private getTransitionDurationMs(property: string): number {
    const transitionProperty = getComputedStyle(this).transitionProperty.split(',');
    const durations = getComputedStyle(this).transitionDuration.split(',');
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

  private scheduleExitComplete(): void {
    this.clearExitTimer();
    requestAnimationFrame(() => {
      if (this.motionPhase !== MOTION_PHASE.EXITING) {
        return;
      }
      const delay = this.getTransitionDurationMs('opacity');
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

  private prefersReducedMotion(): boolean {
    return this.reducedMotionQuery?.matches ?? window.matchMedia(REDUCED_MOTION_QUERY).matches;
  }

  private areMotionTokensAvailable(): boolean {
    return Boolean(getComputedStyle(this).getPropertyValue('--mds-transition-fade-in').trim());
  }

  private shouldSkipMotionAnimation(): boolean {
    return this.prefersReducedMotion() || !this.areMotionTokensAvailable();
  }

  private schedulePulseStepComplete(): void {
    this.clearPulseTimer();
    requestAnimationFrame(() => {
      if (this.motionPhase !== MOTION_PHASE.UPDATING) {
        return;
      }

      const delay = this.getTransitionDurationMs('transform');
      if (delay === 0) {
        this.advancePulseStep();
        return;
      }

      this.pulseTimer = window.setTimeout(() => {
        if (this.motionPhase === MOTION_PHASE.UPDATING) {
          this.advancePulseStep();
        }
      }, delay);
    });
  }

  private advancePulseStep(): void {
    this.clearPulseTimer();

    if (this.motionPhase !== MOTION_PHASE.UPDATING) {
      return;
    }

    if (this.pulseStep === PULSE_STEP.SHRINK) {
      this.pulseStep = PULSE_STEP.GROW;
      this.schedulePulseStepComplete();
      return;
    }

    if (this.pulseStep === PULSE_STEP.GROW) {
      this.finishUpdatePulse();
    }
  }

  private getCounterText(maxCounter: number, counter?: number): string {
    if (counter === undefined || typeof counter !== 'number' || maxCounter === 0) {
      return '';
    }
    if (counter > maxCounter) {
      return `${maxCounter}+`;
    }
    if (maxCounter > DEFAULTS.MAX_COUNTER_LIMIT || counter > DEFAULTS.MAX_COUNTER_LIMIT) {
      return `${DEFAULTS.MAX_COUNTER_LIMIT}+`;
    }
    return counter.toString();
  }

  private getDisplayFingerprint(): string {
    const type = this.type ?? BADGE_TYPE.DOT;
    const counterText = this.getCounterText(this.maxCounter, this.counter);
    return `${type}|${this.variant}|${this.iconName ?? ''}|${counterText}`;
  }

  private hasContent(): boolean {
    const type = this.type ?? BADGE_TYPE.DOT;

    switch (type) {
      case BADGE_TYPE.COUNTER:
        if (this.counter === undefined || typeof this.counter !== 'number' || this.counter <= 0) {
          return false;
        }
        return this.getCounterText(this.maxCounter, this.counter) !== '';
      case BADGE_TYPE.ICON:
        return Boolean(this.iconName);
      case BADGE_TYPE.DOT:
      case BADGE_TYPE.SUCCESS:
      case BADGE_TYPE.WARNING:
      case BADGE_TYPE.ERROR:
        return true;
      default:
        return false;
    }
  }

  private shouldShow(): boolean {
    return this.hasContent() && this.visible;
  }

  private isValidBadgeType(type?: BadgeType | string): type is BadgeType {
    return Object.values(BADGE_TYPE).includes(type as BadgeType);
  }

  private dispatchHidden(): void {
    this.dispatchEvent(
      new CustomEvent('hidden', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private syncRenderType(): void {
    this.renderType = this.type ?? BADGE_TYPE.DOT;
  }

  private finishExit(): void {
    if (this.motionPhase === MOTION_PHASE.HIDDEN) {
      return;
    }

    this.clearExitTimer();
    this.clearPulseTimer();

    if (this.exitReason === 'typeSwitch' && this.pendingEntranceFingerprint !== null) {
      const fingerprint = this.pendingEntranceFingerprint;
      this.exitReason = null;
      this.pendingEntranceFingerprint = null;
      this.syncRenderType();
      this.startEntering(fingerprint);
      return;
    }

    this.exitReason = null;
    this.pendingEntranceFingerprint = null;
    this.motionPhase = MOTION_PHASE.HIDDEN;
    this.pulseStep = '';
    this.lastFingerprint = '';
    this.pendingFingerprint = null;
    this.dispatchHidden();
  }

  private startExit(reason: 'hide' | 'typeSwitch' = 'hide'): void {
    if (this.motionPhase === MOTION_PHASE.EXITING) {
      if (reason === 'typeSwitch') {
        this.exitReason = 'typeSwitch';
      }
      return;
    }

    if (this.motionPhase === MOTION_PHASE.HIDDEN) {
      return;
    }

    this.exitReason = reason;
    this.clearPulseTimer();
    this.pulseStep = '';
    this.pendingFingerprint = null;

    if (reason === 'hide') {
      this.pendingEntranceFingerprint = null;
    }

    if (this.shouldSkipMotionAnimation()) {
      this.finishExit();
      return;
    }

    this.motionPhase = MOTION_PHASE.EXITING;
    this.scheduleExitComplete();
  }

  private startEntering(fingerprint: string): void {
    this.lastFingerprint = fingerprint;

    if (this.shouldSkipMotionAnimation()) {
      this.motionPhase = MOTION_PHASE.VISIBLE;
      this.pulseStep = '';
      return;
    }

    this.motionPhase = MOTION_PHASE.ENTERING;
    this.pulseStep = '';
  }

  private startUpdatePulse(): void {
    if (this.shouldSkipMotionAnimation()) {
      this.motionPhase = MOTION_PHASE.VISIBLE;
      this.pulseStep = '';
      this.pendingFingerprint = null;
      return;
    }

    this.clearPulseTimer();
    this.motionPhase = MOTION_PHASE.UPDATING;
    this.pulseStep = '';
    requestAnimationFrame(() => {
      if (this.motionPhase === MOTION_PHASE.UPDATING) {
        this.pulseStep = PULSE_STEP.SHRINK;
        this.schedulePulseStepComplete();
      }
    });
  }

  private finishUpdatePulse(): void {
    if (this.pendingFingerprint !== null) {
      this.lastFingerprint = this.pendingFingerprint;
      this.pendingFingerprint = null;
      this.startUpdatePulse();
      return;
    }

    this.motionPhase = MOTION_PHASE.VISIBLE;
    this.pulseStep = '';
  }

  private syncMotionState(changedProperties?: PropertyValues): void {
    const fingerprint = this.getDisplayFingerprint();
    const shouldShow = this.shouldShow();

    if (changedProperties?.has('type') && changedProperties.get('type') !== undefined) {
      if (!shouldShow) {
        this.syncRenderType();
        this.pendingEntranceFingerprint = null;
        if (this.motionPhase !== MOTION_PHASE.HIDDEN && this.motionPhase !== MOTION_PHASE.EXITING) {
          this.startExit('hide');
        }
        return;
      }

      const wasShowing =
        this.motionPhase === MOTION_PHASE.VISIBLE ||
        this.motionPhase === MOTION_PHASE.ENTERING ||
        this.motionPhase === MOTION_PHASE.UPDATING;

      if (!wasShowing) {
        this.syncRenderType();
        this.startEntering(fingerprint);
        return;
      }

      this.pendingEntranceFingerprint = fingerprint;
      this.startExit('typeSwitch');
      return;
    }

    if (!shouldShow) {
      this.pendingEntranceFingerprint = null;
      if (this.motionPhase !== MOTION_PHASE.HIDDEN && this.motionPhase !== MOTION_PHASE.EXITING) {
        this.startExit('hide');
      }
      return;
    }

    if (this.motionPhase === MOTION_PHASE.HIDDEN || this.motionPhase === MOTION_PHASE.EXITING) {
      if (this.motionPhase === MOTION_PHASE.HIDDEN) {
        this.syncRenderType();
      }
      this.startEntering(fingerprint);
      return;
    }

    if (
      (this.motionPhase === MOTION_PHASE.VISIBLE || this.motionPhase === MOTION_PHASE.UPDATING) &&
      fingerprint !== this.lastFingerprint
    ) {
      if (this.motionPhase === MOTION_PHASE.UPDATING) {
        this.pendingFingerprint = fingerprint;
      } else {
        this.lastFingerprint = fingerprint;
        this.startUpdatePulse();
      }
    }
  }

  private getBadgeIcon(iconName: string): TemplateResult {
    return html`
      <mdc-icon
        part="badge-icon ${this.overlay ? 'badge-overlay' : ''}"
        name="${ifDefined(iconName as IconNames)}"
        size="${DEFAULTS.ICON_SIZE}"
      ></mdc-icon>
    `;
  }

  private getBadgeDot(): TemplateResult {
    return html`<div part="badge-dot ${this.overlay ? 'badge-overlay' : ''}"></div>`;
  }

  private getBadgeCounterText(): TemplateResult {
    return html`
      <mdc-text
        type="${FONT_TYPE.BODY_SMALL_MEDIUM}"
        tagname="${VALID_TEXT_TAGS.DIV}"
        part="badge-text ${this.overlay ? 'badge-overlay' : ''}"
      >
        ${this.getCounterText(this.maxCounter, this.counter)}
      </mdc-text>
    `;
  }

  private setRoleByAriaLabel(): void {
    if (this.ariaLabel) {
      this.role = ROLE.IMG;
    } else {
      this.role = null;
    }
  }

  public override willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);

    if (
      changedProperties.has('type') ||
      changedProperties.has('variant') ||
      changedProperties.has('counter') ||
      changedProperties.has('maxCounter') ||
      changedProperties.has('iconName') ||
      changedProperties.has('visible')
    ) {
      this.syncMotionState(changedProperties);
    }
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('ariaLabel')) {
      this.setRoleByAriaLabel();
    }
  }

  public override render() {
    if (this.variant && !Object.values(ICON_VARIANT).includes(this.variant)) {
      this.variant = DEFAULTS.VARIANT;
    }
    const { iconName } = this;
    const activeType = this.renderType ?? this.type;
    switch (activeType) {
      case BADGE_TYPE.ICON:
        return this.getBadgeIcon(iconName || '');
      case BADGE_TYPE.COUNTER:
        return this.getBadgeCounterText();
      case BADGE_TYPE.SUCCESS:
        return this.getBadgeIcon(ICON_NAMES_LIST.SUCCESS_ICON_NAME);
      case BADGE_TYPE.WARNING:
        return this.getBadgeIcon(ICON_NAMES_LIST.WARNING_ICON_NAME);
      case BADGE_TYPE.ERROR:
        return this.getBadgeIcon(ICON_NAMES_LIST.ERROR_ICON_NAME);
      case BADGE_TYPE.DOT:
        if (!this.type) {
          this.type = BADGE_TYPE.DOT;
        }
        return this.getBadgeDot();
      default:
        if (!this.isValidBadgeType(activeType)) {
          this.type = BADGE_TYPE.DOT;
          this.renderType = BADGE_TYPE.DOT;
        }
        return this.getBadgeDot();
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Badge;
