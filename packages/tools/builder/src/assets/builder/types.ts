import * as svg2ttf from 'svg2ttf';
import * as svgicons2svgfont from 'svgicons2svgfont';
import type { Config as SVGOConfigType } from 'svgo';
import * as ttf2woff from 'ttf2woff';
import type { BuilderConfig } from '../../models';
import CONSTANTS from './constants';

export type SVGOConfig = SVGOConfigType;

/**
 * SVG Format Type
 *
 * @beta
 */
export interface OptimizedSVGFormat {
  type: typeof CONSTANTS.FORMATS.OPTIMISED_SVG;
  config: SVGOConfig;
}

/**
 * CSS Format Type (WIP)
 *
 * @beta
 */
export interface CSSFormat {
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
  config: svgicons2svgfont.SvgIcons2FontOptions & { fontName: string };
}

/**
 * TTF Font Format
 *
 * @beta
 */
export interface TTFFormat {
  type: typeof CONSTANTS.FORMATS.TTF;
  config: svg2ttf.FontOptions & { fontName: string };
}

/**
 * WOFF Font Format
 *
 * @beta
 */
export interface WOFFFormat {
  type: typeof CONSTANTS.FORMATS.WOFF;
  config: ttf2woff.Options & { fontName: string };
}

/**
 * WOFF2 Font Format
 *
 * @beta
 */
export interface WOFF2Format {
  type: typeof CONSTANTS.FORMATS.WOFF2;
  config: { fontName: string };
}

/**
 * Manifest Format
 *
 * @beta
 */
export interface ManifestFormat {
  type: typeof CONSTANTS.FORMATS.MANIFEST;
  config: { fileName: string };
}

/**
 * Swift Format
 *
 * @beta
 */
export interface SwiftFormat {
  type: typeof CONSTANTS.FORMATS.SWIFT;
  config: { fileName: string; hbsPath: string };
}

/**
 * Types Format
 *
 * @beta
 */
export interface TypesFormat {
  type: typeof CONSTANTS.FORMATS.TYPES;
  config: { fileName: string; hbsPath: string, name: string, manifestPath: string };
}

/**
 * SvgGlyphs Format
 *
 * @beta
 */
export interface SvgGlyphsFormat {
  type: typeof CONSTANTS.FORMATS.SVG_GLYPHS;
  config: { fileName: string };
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
};

/**
 * Replace pattern, used for modifying the file name
 *
 * @beta
 */
export type ReplacePattern = {
  searchValue: string | RegExp;
  replaceValue: string;
};

export type Encoding = {
  write: string;
  read: string;
};

/**
 * Allowed Formats, which can be transformed to
 *
 * @beta
 */
export type Formats = (
  | OptimizedSVGFormat
  | CSSFormat
  | SVGFontFormat
  | TTFFormat
  | WOFFFormat
  | WOFF2Format
  | ManifestFormat
  | SwiftFormat
  | SvgGlyphsFormat
  | TypesFormat
) & {
  encoding?: Encoding;
};

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
  copyOnly?: boolean;
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
