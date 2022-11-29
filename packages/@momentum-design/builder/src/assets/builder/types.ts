import type { BuilderConfig } from '../../models';
import type { SVGOConfig } from './transformer';

export type FileType = 'svg';

export interface Config extends BuilderConfig {
    buildName: string;
    srcDir: string;
    distDir: string;
    srcType: FileType;
    distType: FileType;
    svgoConfig: SVGOConfig
    templatePath: string;
}
