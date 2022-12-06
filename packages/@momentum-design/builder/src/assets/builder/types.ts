import { FontOptions } from 'svg2ttf';
import { SvgIcons2FontOptions } from 'svgicons2svgfont';
import type { Config as SVGOConfigType } from 'svgo';
import type { BuilderConfig } from '../../models';
import CONSTANTS from './constants';

export type SVGOConfig = SVGOConfigType;

/**
 * SVG Format Type
 *
 * @beta
 */
interface OptimizedSVGFormat {
  type: typeof CONSTANTS.FORMATS.OPTIMISED_SVG;
  config: SVGOConfig;
}

/**
 * CSS Format Type (WIP)
 *
 * @beta
 */
interface CSSFormat {
  type: typeof CONSTANTS.FORMATS.CSS;
  // TODO: add CSS config type:
  config: any;
}

/**
 * SVG Font Format
 *
 * @beta
 */
export interface SVGFontFormat {
  type: typeof CONSTANTS.FORMATS.SVG_FONT;
  config: SvgIcons2FontOptions;
}

/**
 * TTF Font Format
 *
 * @beta
 */
export interface TTFFormat {
  type: typeof CONSTANTS.FORMATS.TTF;
  config: FontOptions;
}

/**
 * File Type
 *
 * @beta
 */
export type FileType = {
  srcPath: string;
  distPath?: string;
  data?: any;
};

/**
 * Glyph Icon Type used in SVG Font
 *
 * @beta
 */
export type GlyphIconData = {
  name: string;
  srcPath: string;
  codepoint: number;
  codepointHexa: string;
  unicode: string;
}

/**
 * Replace pattern, used for modifying the file name
 *
 * @beta
 */
export type ReplacePattern = {
  searchValue: string | RegExp;
  replaceValue: string;
};

/**
 * Allowed Formats, which can be transformed to
 *
 * @beta
 */
export type Formats = OptimizedSVGFormat | CSSFormat | SVGFontFormat | TTFFormat;

/**
 * Flow type
 *
 * Describing how the flows should be defined in the config
 *
 * Note: Provided `fileNameReplacePatterns` will run `replace` on the file name
 * in order (like replace with first pattern -\> replace with second pattern -\> ...)
 * @beta
 */
export interface FlowType {
  id: string;
  target: string;
  destination: string;
  fileNameReplacePatterns?: Array<ReplacePattern>;
  format: Formats;
}

/**
 * Config type
 *
 * @beta
 */
export interface Config extends BuilderConfig {
  buildName: string;
  flows: Array<FlowType>;
}
