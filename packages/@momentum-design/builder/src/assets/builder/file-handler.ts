import fs from 'fs-extra';
import glob from 'glob';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import path from 'path';
import CONSTANTS from './constants';

export type FileType = {
  srcPath: string;
  distPath?: string;
  data?: any;
}

export type ReplacePattern = {
  searchValue: string | RegExp,
  replaceValue: string
};

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, `${CONSTANTS.TYPE}-file-handler`));

/**
 * The FileHandler class.
 *
 * Contains file handling utilities necessary for IO operations.
 *
 * @beta
 */
class FileHandler {
  replacePatterns?: Array<ReplacePattern>;

  constructor(replacePatterns?: Array<ReplacePattern>) {
    this.replacePatterns = replacePatterns;
  }

  /**
   * Creates new file path by replacing te existing directory part of the provided
   * `filePath` with the provided `dirPath`
   * @param filePath - filePath to override
   * @param dirPath - dirPath which will replace the existing directory part of the `filePath`
   * @returns
   */
  public replaceDirInPath(filePath: string, dirPath: string): string {
    return path.join(dirPath, path.basename(filePath));
  }

  public sanitiseFileName(filePath: string): string {
    if (!this.replacePatterns?.length) {
      return filePath;
    }
    const fileName = this.replacePatterns.reduce(
      (prev, curr) => prev.replace(curr.searchValue, curr.replaceValue),
      path.basename(filePath),
    );

    return path.join(
      path.dirname(filePath),
      fileName,
    );
  }

  /**
   * Create File objects from a provided `filePaths` array
   * @param filePaths - array of file path strings
   * @param distDir - dist directory, where files should be written to
   * @returns Array of file objects, including `srcPath` and `distPath`
   */
  public createFileObjectsFromPaths(filePaths: Array<string>, distDir: string): Array<FileType> {
    return filePaths.map((path) => {
      // create distPath
      let distPath = this.replaceDirInPath(path, distDir);

      // sanitise the distPath (by running replace on the file name):
      distPath = this.sanitiseFileName(distPath);

      return (
        { srcPath: path, distPath }
      );
    });
  }

  /**
   * Creates a new folder at the specified `dir` if it doesn't exist
   *
   * @param dir - directory to check and create folder if it doesn't exist
   */
  public createFolderIfNotExist(dir: string): void {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Return all files found with the specified glob pattern
   *
   * Use this tool for creating glob patterns:
   * https://www.digitalocean.com/community/tools/glob
   * @param globPattern - pattern to search for files
   * @param cb - callback which will provide `error` & `filePaths` as args
   */
  public getFilePathsInFolder(globPattern: string, cb: (error: Error | null, filePaths: string[]) => void): void {
    glob(globPattern, {}, cb);
  }

  /**
   * Read the specified File (`srcPath`) and return the file including the data
   * @param file - File to read data from
   * @returns Promise, which resolves to the file object with data if successful
   */
  public readFile(file: FileType): Promise<FileType> {
    return new Promise<FileType>((resolve, reject) => {
      fs.readFile(file.srcPath, 'utf-8', (error, data) => {
        if (error) {
          logger.error(`Error while reading file (${file.srcPath}): ${error}`);
          reject(error);
        } else {
          // return file object with the retrieved data:
          resolve({ ...file, data });
        }
      });
    });
  }

  /**
   * Writes the File data to File `distPath`
   *
   * Throws error if file object doesn't have `distPath` defined
   * @param file - File object, including `data` and `distPath`
   * @returns Promise, which resolves to the file object if successful
   */
  public writeFile(file: FileType): Promise<FileType> {
    return new Promise<FileType>((resolve, reject) => {
      if (!file.distPath) {
        const errorMessage = `No distPath provided for file: ${file}`;
        logger.error(errorMessage);
        reject(errorMessage);
        return;
      }

      fs.writeFile(file.distPath, file.data, { flag: 'w', encoding: 'utf-8' }, (error) => {
        if (error) {
          logger.error(`Error while writing file (${file.distPath}): ${error}`);
          reject(error);
        } else {
          // return file object once written:
          resolve(file);
        }
      });
    });
  }

  /**
   * Read multiple files
   * @param files - files to read
   * @returns Promise, which resolves to file array if successful
   */
  public readFiles(files: Array<FileType>): Promise<FileType[]> {
    return Promise.all(files.map(this.readFile));
  }

  /**
   * Write multiple files
   * @param files - files to write
   * @returns Promise, which resolves to file array if successful
   */
  public writeFiles(files: Array<FileType>): Promise<FileType[]> {
    return Promise.all(files.map(this.writeFile));
  }
}

export default FileHandler;
