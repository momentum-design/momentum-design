import type { Config as SVGOConfigType } from 'svgo';
import type { BuilderConfig } from '../../models';

export type SVGOConfig = SVGOConfigType;

export type FileType = 'svg';

/**
 * @beta
 */
export interface Config extends BuilderConfig {
    buildName: string;
    srcDir: string;
    distDir: string;
    srcType: FileType;
    distType: FileType;
    svgoConfig: SVGOConfig;
    templatePath: string;
}
