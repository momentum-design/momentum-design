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

/**
 * The Assets Builder class.
 *
 * Contains initialising and processing functions and makes use of
 * several utilities, like `FileHandler` & `Transformer` utils.
 */
class Builder extends CoreBuilder {
  /**
   * Constructor of Builder Class
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

  /**
   * Transform method which will determine the transform
   * 
   * This is still WIP, more transforms will be added 
   */
  public transform(): void {
    if (this.config.srcType === 'svg' && this.config.distType === 'svg' && this.config.svgoConfig) {
      this.files = this.transformer.optimizeSVGFiles(this.files, this.config.svgoConfig);
    }
  }

  /**
   * Initialize method, which will run first and read files
   * @returns Promise
   */
  public override initialize(): Promise<this> {
    logger.info(`Started '${this.config.buildName}'`);
    return new Promise((resolve, reject) => {
      this.fileHandler.getFilePathsInFolder(`${this.config.srcDir}/**/*.*`, (error, filePaths) => {
        if (error) {
          logger.error(`Error while parsing files in '${this.config.srcDir}': ${error}`);
          reject(error);
        }

        // create file objects array with srcPath & distPaths:
        this.files = this.fileHandler.createFileObjectsFromPaths(filePaths, this.config.distDir);

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

  /**
   * Process method, which will run after initialize.
   * This contains transformations and will write the transformed data to dist
   * @returns Promise
   */
  public override process(): Promise<this> {
    this.transform();

    return new Promise((resolve, reject) => {
      // create dist folder before writing files:
      this.fileHandler.createFolderIfNotExist(this.config.distDir);

      // write files to dist folder:
      this.fileHandler.writeFiles(this.files).then(() => {
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
