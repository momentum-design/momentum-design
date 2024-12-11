import fs from 'fs-extra';
import glob from 'glob';
import { Logger, generateMetadata } from '@momentum-design/telemetry';
import path from 'path';
import CONSTANTS from './constants';
import type { Encoding, FileType, ReplacePattern } from './types';

const logger = Logger.child(generateMetadata(CONSTANTS.PACKAGE, `${CONSTANTS.TYPE}-file-handler`));

/**
 * The FileHandler class.
 *
 * Contains file handling utilities necessary for IO operations.
 *
 * @beta
 */
class FileHandler {
  /**
   * Array of ReplacePatterns, needed for the file name sanitize
   */
  replacePatterns?: Array<ReplacePattern>;

  /**
   * Encoding the file is read with.
   */
  encoding: Encoding = { write: 'utf-8', read: 'utf-8' };

  constructor(replacePatterns?: Array<ReplacePattern>, encoding?: Encoding) {
    this.replacePatterns = replacePatterns;
    this.encoding = encoding || { write: 'utf-8', read: 'utf-8' };
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

  /**
   * Sanitizes the filename part of the provided file path, if replacePatterns are defined
   *
   * Note: The replace functions with the provided replacePatterns will be executed in series
   *
   * @param filePath - file path to sanitize
   * @returns sanitize file path
   */
  public sanitizeFileName(filePath: string): string {
    if (!this.replacePatterns?.length) {
      return filePath;
    }

    // using regexp and g to replace all occurrences of the searchValue with the replaceValue
    const fileName = this.replacePatterns.reduce(
      (prev, curr) => prev.replace(new RegExp(curr.searchValue, 'g'), curr.replaceValue),
      path.basename(filePath),
    );

    return path.join(path.dirname(filePath), fileName);
  }

  /**
   * Create File objects from a provided `filePaths` array
   *
   * Sanitizes the file names with the defined replace patterns
   *
   * @param filePaths - array of file path strings
   * @param distDir - dist directory, where files should be written to
   * @returns Array of file objects, including `srcPath` and `distPath`
   */
  public createFileObjectsFromPaths(filePaths: Array<string>, distDir: string): Array<FileType> {
    return filePaths.map((filePath) => {
      // create distPath
      let distPath = this.replaceDirInPath(filePath, distDir);

      // sanitise the distPath (by running replace on the file name):
      distPath = this.sanitizeFileName(distPath);

      return { srcPath: filePath, distPath };
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
    glob(globPattern, { windowsPathsNoEscape: true }, cb);
  }

  /**
   * Read the specified File (`srcPath`) and return the file including the data
   * @param file - File to read data from
   * @returns Promise, which resolves to the file object with data if successful
   */
  public async readFile(file: FileType, encoding: string): Promise<FileType> {
    return new Promise<FileType>((resolve, reject) => {
      fs.readFile(file.srcPath, encoding, (error, data) => {
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
  public async writeFile(file: FileType, encoding: string): Promise<FileType> {
    return new Promise<FileType>((resolve, reject) => {
      if (!file.distPath) {
        const errorMessage = `No distPath provided for file: ${file}`;
        logger.error(errorMessage);
        reject(errorMessage);
        return;
      }

      fs.writeFile(file.distPath, file.data, { flag: 'w', encoding }, (error) => {
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
   * Copies the file from `srcPath` to `distPath`
   *
   * @param file - File object, including `srcPath` and `distPath`
   * @returns Promise, which resolves to the file object if successful
   */
  public async copyFile(file: FileType) {
    return new Promise<FileType>((resolve, reject) => {
      if (!file.distPath) {
        const errorMessage = `No distPath provided for file: ${file}`;
        logger.error(errorMessage);
        reject(errorMessage);
        return;
      }

      fs.copyFile(file.srcPath, file.distPath, (error) => {
        if (error) {
          logger.error(`Error while copying file (${file.distPath}): ${error}`);
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
  public async readFiles(files: Array<FileType>): Promise<FileType[]> {
    return Promise.all(files.map((file) => this.readFile(file, this.encoding.read)));
  }

  /**
   * Write multiple files
   * @param files - files to write
   * @returns Promise, which resolves to file array if successful
   */
  public async writeFiles(files: Array<FileType>): Promise<FileType[]> {
    return Promise.all(files.map((file) => this.writeFile(file, this.encoding.write)));
  }

  /**
   * Copies multiple files
   * @param files - files to copy
   * @returns Promise, which resolves to file array if successful
   */
  public async copyFiles(files: Array<FileType>): Promise<FileType[]> {
    return Promise.all(files.map((file) => this.copyFile(file)));
  }
}

export default FileHandler;
