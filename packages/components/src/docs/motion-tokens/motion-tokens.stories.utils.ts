export function kebabCase(value: string): string {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export interface CubicBezierPoints {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface EasingGraphGeometry {
  path: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  control1: { x: number; y: number };
  control2: { x: number; y: number };
}

const EASING_GRAPH_SIZE = 100;
const EASING_GRAPH_PADDING = 10;
const EASING_GRAPH_PLOT = EASING_GRAPH_SIZE - EASING_GRAPH_PADDING * 2;

export function parseCubicBezier(value: string): CubicBezierPoints | null {
  const match = value.match(
    /cubic-bezier\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/i,
  );

  if (!match) {
    return null;
  }

  return {
    x1: Number(match[1]),
    y1: Number(match[2]),
    x2: Number(match[3]),
    y2: Number(match[4]),
  };
}

function mapEasingPointToSvg(time: number, progress: number): { x: number; y: number } {
  return {
    x: EASING_GRAPH_PADDING + time * EASING_GRAPH_PLOT,
    y: EASING_GRAPH_PADDING + (1 - progress) * EASING_GRAPH_PLOT,
  };
}

export function buildEasingGraphGeometry(value: string): EasingGraphGeometry | null {
  const bezier = parseCubicBezier(value);

  if (!bezier) {
    return null;
  }

  const start = mapEasingPointToSvg(0, 0);
  const control1 = mapEasingPointToSvg(bezier.x1, bezier.y1);
  const control2 = mapEasingPointToSvg(bezier.x2, bezier.y2);
  const end = mapEasingPointToSvg(1, 1);

  return {
    path: `M ${start.x} ${start.y} C ${control1.x} ${control1.y} ${control2.x} ${control2.y} ${end.x} ${end.y}`,
    start,
    end,
    control1,
    control2,
  };
}

export const RESET_CLASS = 'is-resetting';
export const FADING_OUT_CLASS = 'is-fading-out';
export const FADING_IN_CLASS = 'is-fading-in';
export const FADING_IN_VISIBLE_CLASS = 'is-fading-in-visible';

export const ANIMATION_HOLD_MS = 2000;
export const ANIMATION_CYCLING_CLASS = 'is-cycling';
export const ANIMATION_ACTIVE_CLASS = 'is-active';

export type LayoutPlaybackMode = 'reverse' | 'sequence';

type AnimationPhase = 'forward' | 'hold' | 'reverse' | 'exit';

interface AnimationCycleState {
  mode: LayoutPlaybackMode;
  phase: AnimationPhase;
  completedProperties: Set<string>;
  activeProperties: string[];
  exitProperties?: string[];
  holdTimeoutId?: ReturnType<typeof setTimeout>;
}

const animationCycleStates = new WeakMap<HTMLElement, AnimationCycleState>();

function normalizeTransitionProperty(propertyName: string, demoProperties: string[]): string | null {
  if (demoProperties.includes(propertyName)) {
    return propertyName;
  }

  if (demoProperties.includes('border-color') && /^border(-[a-z]+)?-color$/.test(propertyName)) {
    return 'border-color';
  }

  return null;
}

function getAnimationTarget(card: HTMLElement): HTMLElement | null {
  const target = card.querySelector('[data-animation-target]');

  return target instanceof HTMLElement ? target : null;
}

function setPlayButtonDisabled(card: HTMLElement, disabled: boolean): void {
  const button = card.querySelector('.motionTokensAnimationPlayButton');

  if (!(button instanceof HTMLElement)) {
    return;
  }

  if (disabled) {
    button.setAttribute('disabled', '');
    return;
  }

  button.removeAttribute('disabled');
}

function clearAnimationCycle(card: HTMLElement): void {
  const state = animationCycleStates.get(card);

  if (state?.holdTimeoutId) {
    clearTimeout(state.holdTimeoutId);
  }

  animationCycleStates.delete(card);
}

function completeAnimationCycle(card: HTMLElement): void {
  clearAnimationCycle(card);
  card.classList.remove(ANIMATION_CYCLING_CLASS, ANIMATION_ACTIVE_CLASS);
  card.removeAttribute('data-animation-phase');
  setPlayButtonDisabled(card, false);
}

function getMaxTransitionDurationMs(target: HTMLElement): number {
  const { transitionDuration } = getComputedStyle(target);

  return transitionDuration
    .split(',')
    .map(value => {
      const trimmed = value.trim();

      if (!trimmed || trimmed === 'none') {
        return 0;
      }

      if (trimmed.endsWith('ms')) {
        return Number.parseFloat(trimmed);
      }

      return Number.parseFloat(trimmed) * 1000;
    })
    .reduce((max, value) => Math.max(max, Number.isNaN(value) ? 0 : value), 0);
}

function beginAnimationHold(card: HTMLElement, onHoldComplete: () => void): void {
  const state = animationCycleStates.get(card);

  if (!state) {
    return;
  }

  state.phase = 'hold';
  card.setAttribute('data-animation-phase', 'hold');
  state.holdTimeoutId = setTimeout(onHoldComplete, ANIMATION_HOLD_MS);
}

function runInstantForwardHold(card: HTMLElement, onHoldComplete: () => void): void {
  beginAnimationHold(card, onHoldComplete);
}

function startAnimationCycle(
  card: HTMLElement,
  mode: LayoutPlaybackMode,
  forwardProperties: string[],
): void {
  clearAnimationCycle(card);
  card.classList.add(ANIMATION_CYCLING_CLASS);
  card.setAttribute('data-animation-phase', 'forward');
  animationCycleStates.set(card, {
    mode,
    phase: 'forward',
    completedProperties: new Set(),
    activeProperties: forwardProperties,
  });
  setPlayButtonDisabled(card, true);
  card.classList.add(ANIMATION_ACTIVE_CLASS);
}

function beginExitPhase(card: HTMLElement, exitProperties: string[]): void {
  const state = animationCycleStates.get(card);

  if (!state) {
    return;
  }

  const target = getAnimationTarget(card);

  state.phase = 'exit';
  state.completedProperties.clear();
  state.activeProperties = exitProperties;

  requestAnimationFrame(() => {
    card.setAttribute('data-animation-phase', 'exit');
    target?.getBoundingClientRect();

    requestAnimationFrame(() => {
      card.classList.remove(ANIMATION_ACTIVE_CLASS);
      target?.getBoundingClientRect();
    });
  });
}

function handlePhaseTransitionComplete(card: HTMLElement): void {
  const state = animationCycleStates.get(card);

  if (!state || state.phase === 'hold') {
    return;
  }

  if (state.phase === 'forward') {
    if (state.mode === 'reverse') {
      beginAnimationHold(card, () => {
        state.phase = 'reverse';
        card.setAttribute('data-animation-phase', 'reverse');
        card.classList.remove(ANIMATION_ACTIVE_CLASS);
      });
      return;
    }

    beginAnimationHold(card, () => {
      if (!state.exitProperties) {
        completeAnimationCycle(card);
        return;
      }

      beginExitPhase(card, state.exitProperties);
    });
    return;
  }

  if (state.phase === 'reverse' || state.phase === 'exit') {
    completeAnimationCycle(card);
  }
}

function trackTransitionEnd(
  card: HTMLElement,
  event: TransitionEvent,
  properties: string[],
): void {
  const normalizedProperty = normalizeTransitionProperty(event.propertyName, properties);

  if (!normalizedProperty) {
    return;
  }

  const state = animationCycleStates.get(card);

  if (!state || state.phase === 'hold') {
    return;
  }

  state.completedProperties.add(normalizedProperty);

  if (!properties.every(property => state.completedProperties.has(property))) {
    return;
  }

  state.completedProperties.clear();
  handlePhaseTransitionComplete(card);
}

export function playAnimationToken(event: Event, properties: string[]): void {
  const button = event.currentTarget as HTMLElement;
  const card = button.closest('[data-animation-card]');

  if (!(card instanceof HTMLElement) || card.classList.contains(ANIMATION_CYCLING_CLASS)) {
    return;
  }

  const target = getAnimationTarget(card);

  if (!target) {
    return;
  }

  startAnimationCycle(card, 'reverse', properties);

  requestAnimationFrame(() => {
    if (getMaxTransitionDurationMs(target) === 0) {
      runInstantForwardHold(card, () => {
        const state = animationCycleStates.get(card);

        if (!state) {
          return;
        }

        state.phase = 'reverse';
        card.setAttribute('data-animation-phase', 'reverse');
        card.classList.remove(ANIMATION_ACTIVE_CLASS);
      });
    }
  });
}

export function playLayoutAnimation(
  event: Event,
  playback: LayoutPlaybackMode,
  entranceProperties: string[],
  exitProperties?: string[],
): void {
  if (playback === 'reverse') {
    playAnimationToken(event, entranceProperties);
    return;
  }

  const button = event.currentTarget as HTMLElement;
  const card = button.closest('[data-animation-card]');

  if (!(card instanceof HTMLElement) || card.classList.contains(ANIMATION_CYCLING_CLASS)) {
    return;
  }

  const target = getAnimationTarget(card);

  if (!target || !exitProperties) {
    return;
  }

  startAnimationCycle(card, 'sequence', entranceProperties);
  const state = animationCycleStates.get(card);

  if (state) {
    state.exitProperties = exitProperties;
  }

  requestAnimationFrame(() => {
    if (getMaxTransitionDurationMs(target) === 0) {
      runInstantForwardHold(card, () => {
        if (!exitProperties) {
          completeAnimationCycle(card);
          return;
        }

        beginExitPhase(card, exitProperties);

        requestAnimationFrame(() => {
          if (getMaxTransitionDurationMs(target) === 0) {
            completeAnimationCycle(card);
          }
        });
      });
    }
  });
}

export function handleAnimationTokenTransitionEnd(event: TransitionEvent, properties: string[]): void {
  if (event.target !== event.currentTarget) {
    return;
  }

  const target = event.currentTarget as HTMLElement;
  const card = target.closest('[data-animation-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  trackTransitionEnd(card, event, properties);
}

export function handleLayoutAnimationTransitionEnd(
  event: TransitionEvent,
  _playback: LayoutPlaybackMode,
  entranceProperties: string[],
  exitProperties?: string[],
): void {
  if (event.target !== event.currentTarget) {
    return;
  }

  const target = event.currentTarget as HTMLElement;
  const card = target.closest('[data-animation-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  const state = animationCycleStates.get(card);

  if (!state) {
    handleAnimationTokenTransitionEnd(event, entranceProperties);
    return;
  }

  const properties =
    state.phase === 'exit' && exitProperties ? exitProperties : state.activeProperties;

  trackTransitionEnd(card, event, properties);
}

export function replayEnter(element: HTMLElement, className = 'is-active'): void {
  element.classList.remove(FADING_OUT_CLASS, FADING_IN_CLASS, FADING_IN_VISIBLE_CLASS);
  element.classList.add(RESET_CLASS);
  element.classList.remove(className);
  element.getBoundingClientRect();
  element.classList.remove(RESET_CLASS);
  element.classList.add(className);
}

export function beginDurationFadeIn(card: HTMLElement): void {
  card.classList.add(RESET_CLASS);
  card.classList.remove('is-active', FADING_OUT_CLASS);
  card.classList.add(FADING_IN_CLASS);
  card.getBoundingClientRect();
  card.classList.remove(RESET_CLASS);

  requestAnimationFrame(() => {
    card.classList.add(FADING_IN_VISIBLE_CLASS);
  });
}

export function completeDurationFadeIn(card: HTMLElement): void {
  card.classList.remove(FADING_IN_CLASS, FADING_IN_VISIBLE_CLASS);
}

export function replayExit(element: HTMLElement, className = 'is-active'): void {
  element.classList.add(RESET_CLASS, className);
  element.getBoundingClientRect();
  element.classList.remove(RESET_CLASS, className);
}
