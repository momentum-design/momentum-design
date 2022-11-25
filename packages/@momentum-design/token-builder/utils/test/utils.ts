import path from 'path';
import fs from 'fs/promises';

const fileToJson = async (relativePath: string) => {
  const output = await fs.readFile(path.join(process.cwd(), relativePath)).then(
    (buffer: any) => buffer.toString(),
  ).then(
    (stringBuffer: string) => JSON.parse(stringBuffer),
  );

  return output;
};

const cssToString = async (relativePath: string) => await fs.readFile(path.join(process.cwd(), relativePath))

export {
  fileToJson,
  cssToString,
};
