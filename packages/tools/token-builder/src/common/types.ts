import { SomeJSONSchema } from 'ajv/dist/types/json-schema';
import { ValidateFunction } from 'ajv';
import CONSTANTS from './constants';

export type Format = keyof typeof CONSTANTS.FORMATS;

export type Transform = keyof typeof CONSTANTS.TRANSFORMS;

export type Filter = Array<string>;

export interface Filters {
  categories?: Filter;
  items?: Filter;
  types?: Filter;
}

export interface ConfigFile {
  destination: string;
  filters?: Filters;
  cssSelector?: string;
  outputReferences?: boolean;
  showFileHeader?: boolean;
  scssThemeable?: boolean;
  iosAccessControl?: string;
  iosImport?: string | Array<string>;
  iosObjectType?: string;
  targets: Array<string>;
}

export interface Config {
  files: Array<ConfigFile>;
  formats: Array<Format>;
  prefix: string;
  transforms?: Array<Transform>;
  schemaFiles?: Array<string>;
  strict?: boolean;
  iosWebexPath?: string;
  basePxFontSize?: number;
  shadow?: boolean;
}

export type SchemaMap = {fileName: string, jsonSchema: SomeJSONSchema}[]

export type ValidatorMap = {
  [key: string]: {
    schema: SomeJSONSchema,
    validator: ValidateFunction
  }
}

export interface IValidator {
  schemaMap: SchemaMap;
  validate: () => Promise<IValidator>
}
