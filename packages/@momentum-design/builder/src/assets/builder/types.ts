import type { Config as SVGOConfigType } from 'svgo';
import type { BuilderConfig } from '../../models';
import CONSTANTS from './constants';

export type SVGOConfig = SVGOConfigType;

interface OptimizedSVGFormat {
    type: typeof CONSTANTS.FORMATS.OPTIMISED_SVG,
    config: SVGOConfig
}

export type Formats = OptimizedSVGFormat;

export interface FlowType {
    id: string;
    target: string;
    destination: string;
    format: Formats,
}

/**
 * @beta
 */
export interface Config extends BuilderConfig {
    flows: Array<FlowType>,
}
