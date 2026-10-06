import type { CSSResult, PropertyValues } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { Ref } from 'lit/directives/ref';

import { Component } from '../../models';

import { DEFAULTS, POSE_NAMES } from './animatedbackground.constants';
import styles from './animatedbackground.styles';
import type {
  BackgroundRenderer,
  GradientSettleEventDetail,
  PoseName,
  PoseOffset,
  SetPoseOptions,
} from './animatedbackground.types';
import { DomBackgroundRenderer } from './render/dom-renderer';
import { PoseAnimationController } from './render/pose-animation';
import { prefersReducedMotion, readUpliftColors, selectRenderMode } from './render/token-colors';
import { WebGLBackgroundRenderer } from './render/webgl-renderer';

/**
 * @tagname mdc-animatedbackground
 *
 * Decorative animated gradient background for application viewports.
 *
 * @event gradientsettle - (React: onGradientsettle) Dispatched when a pose transition completes.
 */
class AnimatedBackground extends Component {
  /**
   * Initial pose rendered on mount before any programmatic animation.
   * @default collapsed
   */
  @property({ type: String, attribute: 'initial-pose', reflect: true })
  initialPose: PoseName = DEFAULTS.INITIAL_POSE;

  private readonly surfaceRef: Ref<HTMLDivElement> = createRef();

  private readonly animationController = new PoseAnimationController();

  private renderer: BackgroundRenderer | null = null;

  private renderMode: ReturnType<typeof selectRenderMode> | null = null;

  private resizeObserver?: ResizeObserver;

  private themeObserver?: MutationObserver;

  private reducedMotionQuery?: MediaQueryList;

  private reducedMotionListener?: () => void;

  private rendererInitialized = false;

  public static override styles: Array<CSSResult> = [...Component.styles, styles];

  public override connectedCallback(): void {
    super.connectedCallback();
    this.animationController.onSettle(pose => {
      this.dispatchEvent(
        new CustomEvent<GradientSettleEventDetail>('gradientsettle', {
          bubbles: true,
          detail: { pose },
        }),
      );
    });
    this.setupReducedMotionListener();
    this.setupThemeObserver();
  }

  public override disconnectedCallback(): void {
    this.teardownObservers();
    this.animationController.destroy();
    this.destroyRenderer();
    super.disconnectedCallback();
  }

  /**
   * Plays the wake sequence: hidden → wake → collapsed.
   */
  public wakeUp(): void {
    const motion = this.animationController.getMotionTokens();
    const riseDuration = this.animationController.getEffectiveDuration(motion.durationSustainedMs);
    const moveDuration = this.animationController.getEffectiveDuration(motion.durationExtendedMs);

    if (prefersReducedMotion()) {
      this.animationController.snapTo('collapsed');
      this.dispatchSettle('collapsed');
      return;
    }

    this.animationController.snapTo('hidden');
    requestAnimationFrame(() => {
      this.animationController
        .animateSequence([
          { pose: 'wake', durationMs: riseDuration, easing: motion.easingEntrance },
          { pose: 'collapsed', durationMs: moveDuration, easing: motion.easingStandard },
        ])
        .catch(() => {});
    });
  }

  /**
   * Animates to the expanded pose.
   */
  public expand(): void {
    this.moveTo('expanded');
  }

  /**
   * Animates to the collapsed pose.
   */
  public collapse(): void {
    this.moveTo('collapsed');
  }

  /**
   * Animates to the disabled pose.
   */
  public disable(): void {
    this.moveTo('disabled');
  }

  /**
   * Sets the background pose, optionally with animation.
   */
  public setPose(name: PoseName, options: SetPoseOptions = {}): void {
    const pose = this.getValidatedPose(name);
    const animate = options.animate ?? true;

    if (!animate) {
      this.animationController.snapTo(pose);
      return;
    }

    this.moveTo(pose);
  }

  /**
   * Applies an instant offset from the current named pose anchor.
   */
  public nudge(dx: number, dy: number): void {
    this.animationController.nudge(dx, dy, this.animationController.getCurrentPoseName());
  }

  /**
   * Returns the current design-space pose offset applied to the background.
   */
  public getPoseOffset(): PoseOffset {
    return this.animationController.getCurrentOffset();
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('initialPose') && this.renderer) {
      this.animationController.snapTo(this.getValidatedPose(this.initialPose));
      return;
    }

    if (changedProperties.has('initialPose') || !this.renderer) {
      this.scheduleRendererSync();
    }
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.setupResizeObserver();
    this.scheduleRendererSync();
  }

  protected override render() {
    return html`<div class="surface" ${ref(this.surfaceRef)} aria-hidden="true"></div>`;
  }

  private moveTo(pose: PoseName): void {
    const motion = this.animationController.getMotionTokens();
    const duration = this.animationController.getEffectiveDuration(motion.durationExtendedMs);

    if (prefersReducedMotion()) {
      this.animationController.snapTo(pose);
      this.dispatchSettle(pose);
      return;
    }

    this.animationController.animateTo(pose, duration, motion.easingStandard).catch(() => {});
  }

  private dispatchSettle(pose: PoseName): void {
    this.dispatchEvent(
      new CustomEvent<GradientSettleEventDetail>('gradientsettle', {
        bubbles: true,
        detail: { pose },
      }),
    );
  }

  private getValidatedPose(pose: PoseName): PoseName {
    if (POSE_NAMES.includes(pose)) {
      return pose;
    }

    return DEFAULTS.INITIAL_POSE;
  }

  private scheduleRendererSync(forceRecreate = false): void {
    this.updateComplete
      .then(() => this.syncRenderer(forceRecreate))
      .catch(() => {});
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.renderer?.resize();
    });
    this.resizeObserver.observe(this);
  }

  private setupThemeObserver(): void {
    this.themeObserver = new MutationObserver(() => {
      this.refreshColors();
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private setupReducedMotionListener(): void {
    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotionListener = () => {
      this.scheduleRendererSync(true);
    };
    this.reducedMotionQuery.addEventListener('change', this.reducedMotionListener);
  }

  private teardownObservers(): void {
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;

    this.themeObserver?.disconnect();
    this.themeObserver = undefined;

    if (this.reducedMotionQuery && this.reducedMotionListener) {
      this.reducedMotionQuery.removeEventListener('change', this.reducedMotionListener);
    }

    this.reducedMotionQuery = undefined;
    this.reducedMotionListener = undefined;
  }

  private destroyRenderer(): void {
    this.renderer?.destroy();
    this.renderer = null;
    this.renderMode = null;
  }

  private createRenderer(mode: ReturnType<typeof selectRenderMode>): BackgroundRenderer | null {
    if (mode === 'webgl') {
      try {
        return new WebGLBackgroundRenderer();
      } catch {
        return new DomBackgroundRenderer();
      }
    }

    return new DomBackgroundRenderer();
  }

  private refreshColors(): void {
    const colors = readUpliftColors(this);
    this.renderer?.setColors(colors);
  }

  private async syncRenderer(forceRecreate = false): Promise<void> {
    await this.updateComplete;

    const surface = this.surfaceRef.value;
    if (!surface) {
      return;
    }

    const nextMode = selectRenderMode();
    const modeChanged = forceRecreate || this.renderMode !== nextMode;

    if (modeChanged) {
      this.destroyRenderer();
      this.renderMode = nextMode;
      this.renderer = this.createRenderer(nextMode);

      if (!this.renderer) {
        return;
      }

      try {
        this.renderer.mount(surface);
      } catch {
        this.destroyRenderer();
        this.renderMode = 'dom';
        this.renderer = new DomBackgroundRenderer();
        this.renderer.mount(surface);
      }

      this.animationController.mount(this.renderer, this);
    }

    const colors = readUpliftColors(this);
    this.renderer?.setColors(colors);

    const initialPose = this.getValidatedPose(this.initialPose);

    if (!this.rendererInitialized) {
      this.animationController.snapTo(initialPose);
      this.rendererInitialized = true;
    } else {
      this.renderer?.setPoseOffset(this.animationController.getCurrentOffset());
    }

    this.renderer?.resize();
  }
}

export default AnimatedBackground;
