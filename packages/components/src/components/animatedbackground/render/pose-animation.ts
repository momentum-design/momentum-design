import { MOTION_FALLBACKS, MOTION_VARS, POSES } from '../animatedbackground.constants';
import type {
  AnimationStep,
  BackgroundRenderer,
  CubicBezier,
  MotionTokens,
  PoseName,
  PoseOffset,
  TransitionState,
} from '../animatedbackground.types';

import { prefersReducedMotion } from './token-colors';

const REDUCED_MOTION_DURATION_MS = 1;

function parseDurationMs(raw: string, fallback: number): number {
  const value = raw.trim();
  if (!value) {
    return fallback;
  }

  if (value.endsWith('ms')) {
    const parsed = Number(value.slice(0, -2));
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
  }

  if (value.endsWith('s')) {
    const parsed = Number(value.slice(0, -1));
    return Number.isFinite(parsed) && parsed >= 0 ? parsed * 1000 : fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function parseCubicBezier(raw: string, fallback: CubicBezier): CubicBezier {
  const match = raw.trim().match(/^cubic-bezier\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\s*\)$/i);

  if (!match) {
    return fallback;
  }

  const values = match.slice(1, 5).map(part => Number(part.trim()));
  if (values.some(value => Number.isNaN(value))) {
    return fallback;
  }

  return [values[0], values[1], values[2], values[3]];
}

export function readMotionTokens(host: HTMLElement): MotionTokens {
  const style = getComputedStyle(host);

  return {
    durationSustainedMs: parseDurationMs(
      style.getPropertyValue(MOTION_VARS.durationSustained),
      MOTION_FALLBACKS.durationSustainedMs,
    ),
    durationExtendedMs: parseDurationMs(
      style.getPropertyValue(MOTION_VARS.durationExtended),
      MOTION_FALLBACKS.durationExtendedMs,
    ),
    easingEntrance: parseCubicBezier(
      style.getPropertyValue(MOTION_VARS.easingEntrance),
      MOTION_FALLBACKS.easingEntrance,
    ),
    easingStandard: parseCubicBezier(
      style.getPropertyValue(MOTION_VARS.easingStandard),
      MOTION_FALLBACKS.easingStandard,
    ),
  };
}

function bezierCoordinate(t: number, p1: number, p2: number): number {
  const inverse = 1 - t;
  return 3 * inverse * inverse * t * p1 + 3 * inverse * t * t * p2 + t * t * t;
}

function bezierDerivative(t: number, p1: number, p2: number): number {
  const inverse = 1 - t;
  return 3 * inverse * inverse * p1 + 6 * inverse * t * (p2 - p1) + 3 * t * t * (1 - p2);
}

export function cubicBezier(progress: number, curve: CubicBezier): number {
  let t = progress;

  for (let i = 0; i < 6; i += 1) {
    const derivative = bezierDerivative(t, curve[0], curve[2]);
    if (Math.abs(derivative) < 1e-6) {
      break;
    }

    t = Math.max(0, Math.min(1, t - (bezierCoordinate(t, curve[0], curve[2]) - progress) / derivative));
  }

  return bezierCoordinate(t, curve[1], curve[3]);
}

function poseToOffset(pose: PoseName): PoseOffset {
  return { ...POSES[pose] };
}

function lerpOffset(from: PoseOffset, to: PoseOffset, progress: number): PoseOffset {
  return {
    x: from.x + (to.x - from.x) * progress,
    y: from.y + (to.y - from.y) * progress,
  };
}

export class PoseAnimationController {
  private renderer: BackgroundRenderer | null = null;

  private motionHost: HTMLElement | null = null;

  private currentPoseName: PoseName = 'collapsed';

  private currentOffset: PoseOffset = poseToOffset('collapsed');

  private nudgeOffset: PoseOffset = { x: 0, y: 0 };

  private transition: TransitionState | null = null;

  private animationFrame = 0;

  private settleTimer = 0;

  private settleCallback?: (pose: PoseName) => void;

  private sequencePromise: Promise<void> | null = null;

  private sequenceResolve?: () => void;

  public mount(renderer: BackgroundRenderer, motionHost: HTMLElement): void {
    this.renderer = renderer;
    this.motionHost = motionHost;
  }

  public destroy(): void {
    this.cancelPending();
    this.renderer = null;
    this.motionHost = null;
  }

  public onSettle(callback: (pose: PoseName) => void): void {
    this.settleCallback = callback;
  }

  public getCurrentPoseName(): PoseName {
    return this.currentPoseName;
  }

  public getCurrentOffset(now = performance.now()): PoseOffset {
    if (!this.transition) {
      return this.getRenderedOffset();
    }

    const raw = Math.min(1, (now - this.transition.start) / this.transition.duration);
    const eased = cubicBezier(raw, this.transition.easing);
    const interpolated = lerpOffset(this.transition.from, this.transition.to, eased);

    return {
      x: interpolated.x + this.nudgeOffset.x,
      y: interpolated.y + this.nudgeOffset.y,
    };
  }

  public snapTo(pose: PoseName): void {
    this.cancelPending();
    this.currentPoseName = pose;
    this.nudgeOffset = { x: 0, y: 0 };
    this.currentOffset = poseToOffset(pose);
    this.applyOffset(this.currentOffset);
  }

  public animateTo(pose: PoseName, durationMs: number, easing: CubicBezier): Promise<void> {
    return this.animateSequence([{ pose, durationMs, easing }]);
  }

  public animateSequence(steps: AnimationStep[]): Promise<void> {
    if (this.sequencePromise) {
      this.cancelPending();
    }

    this.sequencePromise = this.runSequence(steps);

    return this.sequencePromise.finally(() => {
      this.sequencePromise = null;
    });
  }

  public nudge(dx: number, dy: number, anchorPose: PoseName): void {
    this.cancelPending();
    this.currentPoseName = anchorPose;
    this.nudgeOffset = { x: dx, y: dy };
    this.currentOffset = poseToOffset(anchorPose);
    this.applyOffset(this.getRenderedOffset());
  }

  public getMotionTokens(): MotionTokens {
    if (!this.motionHost) {
      return {
        durationSustainedMs: MOTION_FALLBACKS.durationSustainedMs,
        durationExtendedMs: MOTION_FALLBACKS.durationExtendedMs,
        easingEntrance: MOTION_FALLBACKS.easingEntrance,
        easingStandard: MOTION_FALLBACKS.easingStandard,
      };
    }

    return readMotionTokens(this.motionHost);
  }

  public getEffectiveDuration(durationMs: number): number {
    return prefersReducedMotion() ? REDUCED_MOTION_DURATION_MS : durationMs;
  }

  private getRenderedOffset(): PoseOffset {
    return {
      x: this.currentOffset.x + this.nudgeOffset.x,
      y: this.currentOffset.y + this.nudgeOffset.y,
    };
  }

  private async runSequence(steps: AnimationStep[]): Promise<void> {
    if (steps.length === 0) {
      return;
    }

    const reducedMotion = prefersReducedMotion();

    if (reducedMotion) {
      const finalPose = steps[steps.length - 1].pose;
      this.snapTo(finalPose);
      this.dispatchSettle(finalPose);
      return;
    }

    await this.runSteps(steps, 0);
  }

  private async runSteps(steps: AnimationStep[], index: number): Promise<void> {
    if (index >= steps.length) {
      return;
    }

    const step = steps[index];
    const isLast = index === steps.length - 1;
    const durationMs = this.getEffectiveDuration(step.durationMs);

    await this.runTransition(step.pose, durationMs, step.easing);

    if (isLast) {
      this.dispatchSettle(step.pose);
    }

    await this.runSteps(steps, index + 1);
  }

  private runTransition(pose: PoseName, durationMs: number, easing: CubicBezier): Promise<void> {
    return new Promise(resolve => {
      this.clearSettleTimer();

      const now = performance.now();
      const from = this.getCurrentOffset(now);
      const to = poseToOffset(pose);

      this.currentPoseName = pose;
      this.nudgeOffset = { x: 0, y: 0 };

      if (durationMs <= 0) {
        this.transition = null;
        this.currentOffset = to;
        this.applyOffset(this.getRenderedOffset());
        resolve();
        return;
      }

      this.transition = {
        from,
        to,
        start: now,
        duration: durationMs,
        easing,
      };

      this.sequenceResolve = resolve;
      this.scheduleFrame();
    });
  }

  private scheduleFrame(): void {
    if (this.animationFrame) {
      return;
    }

    this.animationFrame = requestAnimationFrame(now => {
      this.animationFrame = 0;
      this.renderFrame(now);
    });
  }

  private renderFrame(now: number): void {
    if (!this.transition) {
      return;
    }

    const offset = this.getCurrentOffset(now);
    this.applyOffset(offset);

    if (now >= this.transition.start + this.transition.duration) {
      this.currentOffset = { ...this.transition.to };
      this.transition = null;
      this.applyOffset(this.getRenderedOffset());

      if (this.sequenceResolve) {
        const resolve = this.sequenceResolve;
        this.sequenceResolve = undefined;
        resolve();
      }

      return;
    }

    this.scheduleFrame();
  }

  private applyOffset(offset: PoseOffset): void {
    this.renderer?.setPoseOffset(offset);
  }

  private dispatchSettle(pose: PoseName): void {
    this.settleCallback?.(pose);
  }

  private clearSettleTimer(): void {
    if (this.settleTimer) {
      window.clearTimeout(this.settleTimer);
      this.settleTimer = 0;
    }
  }

  private cancelPending(): void {
    this.clearSettleTimer();

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = 0;
    }

    if (this.transition) {
      const now = performance.now();
      this.currentOffset = this.getCurrentOffset(now);
      this.transition = null;
    }

    if (this.sequenceResolve) {
      const resolve = this.sequenceResolve;
      this.sequenceResolve = undefined;
      resolve();
    }
  }
}
