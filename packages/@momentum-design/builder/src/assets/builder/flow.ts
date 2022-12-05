import { Logger, generateMetadata } from '@momentum-design/telemetry';
import path from 'path';
import CONSTANTS from './constants';
import FileHandler from './file-handler';
import type { FlowType, Formats, FileType } from './types';
import { createTransformer } from './transformer/factory';

const logger = Logger.child(generateMetadata(CONSTANTS.PACKAGE, `${CONSTANTS.TYPE}-flow`));

/**
 * The Flow class.
 *
 * Contains flow properties and methods like reading, transforming and writing files
 *
 * @beta
 */
class Flow {
  /**
   * Id of the flow
   */
  id: string;

  /**
   * Target glob pattern (= where to read files from)
   */
  target: string;

  /**
   * Destination string (= where to write files to)
   */
  destination: string;

  /**
   * Format to transform to
   */
  format: Formats;

  /**
   * Array of files, storing paths and data
   */
  files: Array<FileType>;

  /**
   * Instance of filehandler, useful for file handling methods
   */
  fileHandler: FileHandler;

  public constructor(flowData: FlowType) {
    this.id = flowData.id;
    this.target = path.join(process.cwd(), flowData.target);
    this.destination = path.join(process.cwd(), flowData.destination);
    this.format = flowData.format;
    this.files = [];

    this.fileHandler = new FileHandler(flowData.fileNameReplacePatterns);
  }

  /**
   * Get file paths and read files
   *
   * @returns Promise of this
   */
  public read(): Promise<this> {
    return new Promise((resolve, reject) => {
      logger.debug(`Started read step of flow '${this.id}'.`);
      this.fileHandler.getFilePathsInFolder(this.target, (error, filePaths) => {
        if (error) {
          logger.error(`Error while parsing files in '${this.target}': ${error}`);
          reject(error);
        }

        // create file objects array with srcPath & distPaths:
        const fileObjects = this.fileHandler.createFileObjectsFromPaths(filePaths, this.destination);

        this.fileHandler
          .readFiles(fileObjects)
          .then((filesWithData) => {
            this.files = filesWithData;
            logger.debug(`Finished read step of flow '${this.id}'.`);
            resolve(this);
          })
          .catch((error) => {
            logger.error(`Error while reading files: ${error}`);
            reject(error);
          });
      });
    });
  }

  /**
   * Transforming the files data with the help of `createTransformer` factory
   */
  public async transform(): Promise<void> {
    logger.debug(`Started transform step of flow '${this.id}'.`);

    const transformer = createTransformer(this.format);
    this.files = await transformer.run(this.files);

    logger.debug(`Finished transform step of flow '${this.id}'.`);
  }

  /**
   * Creates the destination folder if it doesn't exist and writes the files
   *
   * @returns Promise of array of files
   */
  public write(): Promise<this> {
    logger.debug(`Started write step of flow '${this.id}'.`);
    this.fileHandler.createFolderIfNotExist(this.destination);
    return this.fileHandler.writeFiles(this.files).then(() => {
      logger.debug(`Finished write step of flow '${this.id}'.`);
      return this;
    });
  }
}

export default Flow;
