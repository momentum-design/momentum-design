import fs from 'fs-extra';
import glob from 'glob';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import path from 'path';

export type File = {
  srcPath: string;
  distPath?: string;
  data?: any;
}

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, 'icons-file-handler'));

/**
 * The FileHandler class.
 *
 * @alpha
 */
class FileHandler {
  /**
   * Creates new file path by replacing te existing directory part of the provided
   * `filePath` with the provided `dirPath`
   * @param filePath - filePath to override
   * @param dirPath - dirPath which will replace the existing directory part of the `filePath`
   * @returns
   */
  public replaceDirInPath(filePath: string, dirPath: string) {
    return path.join(dirPath, path.basename(filePath));
  }

  public createFolderIfNotExist(dir: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  public getFilePathsInFolder(folderPattern: string, cb: (error: Error | null, filePaths: string[]) => void) {
    glob(folderPattern, {}, cb);
  }

  public readFile(file: File) {
    return new Promise<File>((resolve, reject) => {
      fs.readFile(file.srcPath, 'utf-8', (error, data) => {
        if (error) {
          logger.error(`Error while reading file (${file.srcPath}): ${error}`);
          reject(error);
        } else {
          // return file object with the retrieved data & distPath:
          resolve({ ...file, data });
        }
      });
    });
  }

  public writeFile(file: File) {
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

  public readFiles(files: Array<File>) {
    return Promise.all(files.map(this.readFile));
  }

  public writeFiles(files: Array<File>) {
    return Promise.all(files.map(this.writeFile));
  }
}

export default FileHandler;
