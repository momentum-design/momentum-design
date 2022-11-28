/* eslint-disable no-redeclare */

import path from 'path';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';

import { Builder as CoreBuilder } from '../../models';
import CONSTANTS from './constants';
import FileHandler, { File } from './file-handler';
import type { Config } from './types';
import Transformer from './transformer';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, CONSTANTS.TYPE));

interface Builder {
  config: Config
  files: Array<File>;
  fileHandler: FileHandler;
  transformer: Transformer;
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
    const { buildName, srcDir, distDir, srcType, distType, ...other } = config;
    super({ ...other, type: CONSTANTS.TYPE });

    this.config.buildName = buildName;
    this.config.srcDir = path.join(process.cwd(), srcDir);
    this.config.distDir = path.join(process.cwd(), distDir);
    this.config.srcType = srcType;
    this.config.distType = distType;

    this.files = [];

    this.fileHandler = new FileHandler();
    this.transformer = new Transformer();
  }

  public fillFilesWithPaths(filePaths: Array<string>, distDir: string): Array<Pick<File, 'srcPath' | 'distPath'>> {
    return filePaths.map((path) => (
      { srcPath: path, distPath: this.fileHandler.replaceDirInPath(path, distDir) }
    ));
  }

  public writeFiles(): Promise<File[]> {
    // create dist folder if it doesn't exist before writing files:
    this.fileHandler.createFolderIfNotExist(this.config.distDir);

    return this.fileHandler.writeFiles(this.files); // write all files
  }

  public transform(): void {
    if (this.config.srcType === 'svg' && this.config.distType === 'svg' && this.config.svgoConfig) {
      this.files = this.transformer.optimizeSVGFiles(this.files, this.config.svgoConfig);
    }
  }

  public override initialize(): Promise<this> {
    logger.info(`Started '${this.config.buildName}'`);
    return new Promise((resolve, reject) => {
      this.fileHandler.getFilePathsInFolder(`${this.config.srcDir}/**/*.*`, (error, filePaths) => {
        if (error) {
          logger.error(`Error while parsing files in '${this.config.srcDir}': ${error}`);
          reject(error);
        }

        // fill file array with srcPath & distPaths:
        this.files = this.fillFilesWithPaths(filePaths, this.config.distDir);

        this.fileHandler.readFiles(this.files).then((filesWithData) => {
          // override files array with filesWithData array:
          this.files = filesWithData;
          resolve(this);
        }).catch((error) => {
          logger.error(`Error while reading files: ${error}`);
        });
      });
    });
  }

  public override process(): Promise<this> {
    this.transform();

    return new Promise((resolve, reject) => {
      this.writeFiles().then(() => {
        logger.info(`Finished '${this.config.buildName}' successfully`);
        resolve(this);
      }).catch((error) => {
        logger.error(`Error while writing files: ${error}`);
        reject(error);
      });
    });
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
