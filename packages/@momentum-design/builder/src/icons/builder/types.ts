import type { BuilderConfig } from '../../models';
import type { SVGOConfig } from './transformer';

export type FileType = 'svg' | 'css' | 'scss' | 'woff' | 'woff2' | 'data';

export interface Config extends BuilderConfig {
    buildName: string;
    srcDir: string;
    distDir: string;
    srcType: FileType;
    distType: FileType;
    svgoConfig: SVGOConfig
    templatePath: string;
}
