import path from 'path';
import fs from 'fs/promises';

export const fileToJson = async (relativePath: string) => {
  const output = await fs.readFile(path.join(process.cwd(), relativePath)).then(
    (buffer: any) => buffer.toString(),
  ).then(
    (stringBuffer: string) => JSON.parse(stringBuffer),
  );

  return output;
};
