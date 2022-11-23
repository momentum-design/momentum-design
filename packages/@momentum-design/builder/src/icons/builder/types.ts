import type { BuilderConfig } from '../../models';

export interface Config extends BuilderConfig {
    srcDir: string;
    distDir: string;
}
