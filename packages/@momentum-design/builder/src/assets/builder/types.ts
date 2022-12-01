import type { Config as SVGOConfigType } from 'svgo';
import type { BuilderConfig } from '../../models';
import CONSTANTS from './constants';
import type { ReplacePattern } from './file-handler';

export type SVGOConfig = SVGOConfigType;

interface OptimizedSVGFormat {
    type: typeof CONSTANTS.FORMATS.OPTIMISED_SVG,
    config: SVGOConfig
}

interface CSSFormat {
    type: typeof CONSTANTS.FORMATS.CSS,
    // TODO: add CSS config type:
    config: any
}

export type Formats = OptimizedSVGFormat | CSSFormat;

export interface FlowType {
    id: string;
    target: string;
    destination: string;
    fileNameReplacePatterns?: Array<ReplacePattern>;
    format: Formats,
}

/**
 * @beta
 */
export interface Config extends BuilderConfig {
    buildName: string;
    flows: Array<FlowType>,
}
