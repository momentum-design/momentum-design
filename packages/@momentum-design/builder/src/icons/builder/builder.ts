/* eslint-disable no-redeclare */
import glob from 'glob';
import path from 'path';
import { Builder as CoreBuilder } from '../../models';
import CONSTANTS from './constants';
import type { Config } from './types';

interface Builder {
    config: Config
    filePaths: Array<any>;
}

class Builder extends CoreBuilder {
  /**
   * Construct a new icons Builder.
   *
   * @remarks
   * This method has not been fully implemented.
   *
   * @param config - Configuration Object to be mounted to this Builder.
   */
  public constructor(config: Config) {
    const { srcDir, distDir, ...other } = config;
    super({ ...other, type: 'icons' });

    this.config.srcDir = srcDir;
    this.config.distDir = distDir;
    this.filePaths = [];
  }

  public override initialize(): Promise<this> {
    const fullInputDir = path.join(process.cwd(), this.config.srcDir);

    return new Promise((resolve, reject) => {
      glob(`${fullInputDir}/**/*.*`, {}, (er, files) => {
        this.filePaths = files;
        if (er) {
          reject(er);
        }
        resolve(this);
      });
    });
  }

  public override process(): Promise<this> {
    // icons transform
    console.log(this.filePaths);

    // const fullDistDir = path.join(process.cwd(), this.config.distDir);

    // TODO: add optimize (SVGO) & transforms (CSS, SCSS, Fonts, etc.) here
    return Promise.resolve(this);
  }

  /**
   * Constants associated with this Builder.
   */
  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  /**
   * Type of this Builder.
   */
  public static override get type(): string {
    return Builder.CONSTANTS.TYPE;
  }
}

export default Builder;
