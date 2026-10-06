import type { TypedCustomEvent } from '../../utils/types';

import type AnimatedBackground from './animatedbackground.component';

export type PoseName = 'hidden' | 'wake' | 'collapsed' | 'expanded' | 'disabled';

export type RenderMode = 'webgl' | 'dom';

export type GradientLayerName = 'ambient' | 'midtone' | 'expressive';

export type CubicBezier = readonly [number, number, number, number];

export interface PoseOffset {
  x: number;
  y: number;
}

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface UpliftColorSet {
  base: RgbaColor;
  ambient: RgbaColor[];
  midtone: RgbaColor[];
  expressive: RgbaColor[];
}

export interface SetPoseOptions {
  animate?: boolean;
}

export interface GradientSettleEventDetail {
  pose: PoseName;
}

export type GradientSettleEvent = TypedCustomEvent<AnimatedBackground, GradientSettleEventDetail>;

export interface Events {
  onGradientsettleEvent: GradientSettleEvent;
}

export interface MotionTokens {
  durationSustainedMs: number;
  durationExtendedMs: number;
  easingEntrance: CubicBezier;
  easingStandard: CubicBezier;
}

export interface AnimationStep {
  pose: PoseName;
  durationMs: number;
  easing: CubicBezier;
}

export interface TransitionState {
  from: PoseOffset;
  to: PoseOffset;
  start: number;
  duration: number;
  easing: CubicBezier;
}

export interface BackgroundRenderer {
  mount(container: HTMLElement): void;
  destroy(): void;
  resize(): void;
  setPoseOffset(offset: PoseOffset): void;
  setColors(colors: UpliftColorSet): void;
}
