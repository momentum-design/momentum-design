import fs from 'fs/promises';
import path from 'path';

import CONSTANTS from './constants';

/**
 * Json class used for performing operations involving JSON Objects.
 *
 * @beta
 */
class Json {
  /**
   * Read a file as json at the provided target path.
   *
   * @param target - Path to the file to attempt to read as json.
   * @param encoding - Buffer encoding for the target file.
   * @returns - Promise resolving in a json object read from the target file.
   */
  public static read(target: string, encoding: BufferEncoding = Json.CONSTANTS.FILE_ENCODING): Promise<any> {
    const completeTarget = path.join(process.cwd(), target);

    return fs.readFile(completeTarget)
      .then((buffer: Buffer) => buffer.toString(encoding))
      .then((data: string) => JSON.parse(data))
      .catch(() => Promise.reject(new Error(
        `unable to read or parse file at path "${completeTarget}" as json`,
      )));
  }

  /**
   * Write the provided data to the target path formatted as json.
   *
   * @remarks
   * This method also ammends an additional `\n` character to the end of the provided data as a string in order to
   * follow our "new line at end-of-file" rule.
   *
   * @param target - Destination file for the provided json object to be written to.
   * @param data - Data to write to the target destination.
   * @param tabSpacing - Spacing to use for indents within the output file.
   * @returns - Promise that resolves once the file is successfully written.
   */
  public static write(target: string, data: any, tabSpacing: number = Json.CONSTANTS.TAB_SPACING): Promise<void> {
    const completeTarget = path.join(process.cwd(), target);

    return fs.writeFile(completeTarget, `${JSON.stringify(data, null, tabSpacing)}\n`)
      .catch(() => Promise.reject(new Error(`unable to write file to path "${completeTarget}"`)));
  }

  /**
   * Constants associated with this class.
   */
  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Json;
