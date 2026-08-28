import { MIDTONE_1_ALPHA, TOKEN_VARS } from '../animatedbackground.constants';
import type { GradientLayerName, RgbaColor, UpliftColorSet } from '../animatedbackground.types';

interface ParsedCssColor {
  r: number;
  g: number;
  b: number;
}

function parseCssColor(raw: string): ParsedCssColor | null {
  const value = raw.trim();
  if (!value) {
    return null;
  }

  if (value.startsWith('#')) {
    let hex = value;

    if (value.length === 4) {
      hex = `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
    } else if (value.length >= 7) {
      hex = value.slice(0, 7);
    }

    return {
      r: parseInt(hex.slice(1, 3), 16) / 255,
      g: parseInt(hex.slice(3, 5), 16) / 255,
      b: parseInt(hex.slice(5, 7), 16) / 255,
    };
  }

  const match = value.match(/^rgba?\(([^)]+)\)$/);
  if (!match) {
    return null;
  }

  const parts = match[1].split(',').map(part => part.trim());
  const rgb = parts.slice(0, 3).map(channel => {
    const number = Number(channel);
    return number > 1 ? number / 255 : number;
  });

  if (rgb.length !== 3 || rgb.some(channel => Number.isNaN(channel))) {
    return null;
  }

  return { r: rgb[0], g: rgb[1], b: rgb[2] };
}

function readLayerColors(
  style: CSSStyleDeclaration,
  layer: GradientLayerName,
  varNames: readonly string[],
): RgbaColor[] {
  return varNames.map((varName, index) => {
    const parsed = parseCssColor(style.getPropertyValue(varName));
    const alpha = layer === 'midtone' && index === 1 ? MIDTONE_1_ALPHA : 1;

    if (!parsed) {
      return { r: 0, g: 0, b: 0, a: alpha };
    }

    return { r: parsed.r, g: parsed.g, b: parsed.b, a: alpha };
  });
}

export function readUpliftColors(element: HTMLElement): UpliftColorSet {
  const style = getComputedStyle(element);
  const baseParsed = parseCssColor(style.getPropertyValue(TOKEN_VARS.base));

  return {
    base: baseParsed
      ? { r: baseParsed.r, g: baseParsed.g, b: baseParsed.b, a: 1 }
      : { r: 0, g: 0, b: 0, a: 1 },
    ambient: readLayerColors(style, 'ambient', TOKEN_VARS.ambient),
    midtone: readLayerColors(style, 'midtone', TOKEN_VARS.midtone),
    expressive: readLayerColors(style, 'expressive', TOKEN_VARS.expressive),
  };
}

export function colorsToUniformArray(colors: RgbaColor[], premultiplyIndices: number[] = []): Float32Array {
  const values = new Float32Array(colors.length * 4);

  colors.forEach((color, index) => {
    const offset = index * 4;
    const premultiply = premultiplyIndices.includes(index);

    if (premultiply) {
      values[offset] = color.r * color.a;
      values[offset + 1] = color.g * color.a;
      values[offset + 2] = color.b * color.a;
      values[offset + 3] = color.a;
      return;
    }

    values[offset] = color.r;
    values[offset + 1] = color.g;
    values[offset + 2] = color.b;
    values[offset + 3] = color.a;
  });

  return values;
}

export function isWebGL2Available(): boolean {
  if (typeof document === 'undefined') {
    return false;
  }

  const canvas = document.createElement('canvas');
  return Boolean(canvas.getContext('webgl2'));
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function selectRenderMode(): 'webgl' | 'dom' {
  if (prefersReducedMotion() || !isWebGL2Available()) {
    return 'dom';
  }

  return 'webgl';
}
