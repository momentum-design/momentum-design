import File, { FileSerial } from '../file';

export interface Config {
  files?: Array<File>
  group: string;
  name: string;
  scopeOutputPath?: string;
}

export interface Data {
  files: Array<File>;
  group: string;
  name: string;
  scopeOutputPath?: string;
}

export interface Serial {
  buildPath: string;
  transformGroup: string;
  files: Array<FileSerial>
}
