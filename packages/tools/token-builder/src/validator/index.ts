import { SomeJSONSchema } from 'ajv/dist/types/json-schema';
import fs from 'fs/promises';
import { ValidateFunction } from 'ajv';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import glob from 'glob';
import { join } from 'path';

import Ajv from 'ajv/dist/2019';
import * as draft6MetaSchema from 'ajv/dist/refs/json-schema-draft-06.json';
import { Config, IValidator, SchemaMap, ValidatorMap } from '../common/types';

const ajv = new Ajv();
ajv.addMetaSchema(draft6MetaSchema);
ajv.addFormat('integer', (v) => !!Number.isSafeInteger(parseInt(v, 10)));

const PACKAGE = 'token-builder';

const logger = Logger.child(generateMetadata(PACKAGE, 'token-builder'));

class Validator implements IValidator {
  private readonly dir: string;

  protected config: Config;

  public readonly schemaMap: SchemaMap = [];

  private validatorMap: ValidatorMap = {};

  public constructor(dir: string, config: Config, schemaMap: SchemaMap) {
    this.dir = dir;
    this.config = typeof config === 'string' ? config : structuredClone(config);
    if (schemaMap) {
      this.schemaMap = schemaMap;
      this.validatorMap = this.schemaMap.map((value) => ({
        key: value.fileName,
        schema: value.jsonSchema,
        validator: ajv.compile(value.jsonSchema),
      })).reduce((accum, cur) => ({ ...accum, [cur.key]: { validator: cur.validator, schema: cur.schema } }), {});
    }
  }

  public async validate(): Promise<this> {
    logger.info('Validating source files against defined schemas...');
    const results = await this.iterate(await this.collect());
    this.log(results);
    const hasErrors = results.some((validation) => validation.error);
    if (hasErrors) {
      return Promise.reject(new Error('Validation failed...'));
    }
    logger.info('Validation complete...');
    return Promise.resolve(this);
  }

  public async collect(): Promise<string[]> {
    const configObj = this.config;
    const workingDir = this.dir;
    logger.info(`Active dir is: ${workingDir}`);

    const fileSet = [...new Set(configObj.files.map((file) => file.targets).flat())];
    logger.info(`Operating on targets: ${fileSet} dir: ${workingDir}`);

    const completePathPromises = await
    Promise.all(fileSet.map((path) => new Promise<string[]>((resolve, reject) => {
      glob(`${join(workingDir, path)}`, (err: Error | null, res: string[]) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    })));

    const result = completePathPromises.flat();
    logger.info(`File paths collected: ${result}`);
    return result;
  }

  public async iterate(files: string[]): Promise<ReturnType<typeof Validator.process>[]> {
    const result = await Promise.all(files.map(async (file) => {
      const fileParts = file.split('/');
      const schemaName = fileParts[fileParts.length - 1];
      logger.info(`Gathering JSON data for file: ${file}`);
      const jsonData = JSON.parse(await fs.readFile(file, 'utf8'));
      const schemaForFile = this.validatorMap[schemaName];
      logger.info(`Processing validation against JSON schema for file: ${file}`);
      return Validator.process(jsonData, schemaName, schemaForFile);
    }));
    return result;
  }

  private log(results: ReturnType<typeof Validator.process>[]): void {
    results.forEach((result) => {
      if (result.error) {
        logger.error(result.message);
        logger.error(result.error);
      } else if (result.warn) {
        logger.warn(result.message);
        logger.warn(result.warn);
      } else {
        logger.info(result.message);
      }
    });
  }

  public static process(
    jsonData: unknown,
    schemaName: string,
    schemaForFile?: {
        schema: SomeJSONSchema,
        validator: ValidateFunction,
      },
  ): {
    schema: string,
    validation: boolean,
    warn: string | undefined,
    error: string | undefined,
    message: string | undefined,
  } {
    if (schemaForFile) {
      const validationResult = schemaForFile.validator(jsonData);
      if (validationResult) {
        return {
          schema: schemaName,
          validation: validationResult,
          warn: undefined,
          error: undefined,
          message: `Schema validation passed for file: ${schemaName}`,
        };
      }
      return {
        schema: schemaName,
        validation: validationResult,
        warn: undefined,
        error: `Schema validation error for file: ${schemaName} ${schemaForFile.validator.errors?.length
          ? schemaForFile.validator.errors.map((value) => value.message)?.reduce((str, cur) => str?.concat(cur || ''))
          : ''}`,
        message: `Schema validation failed for file: ${schemaName}`,
      };
    }
    return {
      schema: schemaName,
      validation: false,
      warn: `Schema not implemented for file: ${schemaName}`,
      error: undefined,
      message: `Schema not implemented for file: ${schemaName}`,
    };
  }
}

export default Validator;
