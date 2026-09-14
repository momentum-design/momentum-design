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
