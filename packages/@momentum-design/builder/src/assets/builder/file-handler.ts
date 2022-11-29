import fs from 'fs-extra';
import glob from 'glob';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import path from 'path';
import CONSTANTS from './constants';

export type File = {
  srcPath: string;
  distPath?: string;
  data?: any;
}

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

  /**
   * Create File objects from a provided `filePaths` array
   * @param filePaths - array of file path strings
   * @param distDir - dist directory, where files should be written to
   * @returns Array of file objects, including `srcPath` and `distPath`
   */
  public createFileObjectsFromPaths(filePaths: Array<string>, distDir: string): Array<File> {
    return filePaths.map((path) => (
      { srcPath: path, distPath: this.replaceDirInPath(path, distDir) }
    ));
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
  public readFile(file: File): Promise<File> {
    return new Promise<File>((resolve, reject) => {
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
  public writeFile(file: File): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      if (!file.distPath) {
        const errorMessage = `No distPath provided for file: ${file}`;
        logger.error(errorMessage);
        reject(new Error(errorMessage));
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
  public readFiles(files: Array<File>): Promise<File[]> {
    return Promise.all(files.map(this.readFile));
  }

  /**
   * Write multiple files
   * @param files - files to write
   * @returns Promise, which resolves to file array if successful
   */
  public writeFiles(files: Array<File>): Promise<File[]> {
    return Promise.all(files.map(this.writeFile));
  }
}

export default FileHandler;
