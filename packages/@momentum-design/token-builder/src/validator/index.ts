import fs from 'fs/promises';
import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import glob from 'glob';
import { join } from 'path';
import { Config, IValidator, SchemaMap, ValidatorMap } from '../common/types';
import { SCHEMA_MAP } from './schemas';

const ajv = new Ajv();

const PACKAGE = 'token-builder';

const logger = Logger.child(generateMetadata(PACKAGE, 'token-builder'));

class Validator implements IValidator {
  private readonly dir: string;

  protected config: Config;

  public readonly schemaMap: SchemaMap = [];

  private validatorMap: ValidatorMap = {};

  public constructor(dir: string, config: Config, schemaMap?: SchemaMap) {
    this.dir = dir;
    this.config = typeof config === 'string' ? config : structuredClone(config);
    if (schemaMap) {
      this.schemaMap = schemaMap;
      this.schemaMap.forEach((value) => {
        this.validatorMap[value.fileName] = {
          schema: value.jsonSchema,
          validator: ajv.compile(value.jsonSchema),
        };
      });
    } else {
      this.validatorMap = SCHEMA_MAP as ValidatorMap;
    }
  }

  public async validate(): Promise<this> {
    logger.info('Validating source files against defined schemas...');
    this.log(await this.iterate(await this.collect()));
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
        logger.error(result.error);
      } else if (result.warn) {
        logger.warn(result.warn);
      } else {
        logger.info(result.message);
      }
    });
  }

  public static process<T>(
    jsonData: unknown,
    schemaName: string,
    schemaForFile?: {
        schema: JSONSchemaType<T>,
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
        error: schemaForFile.validator.errors?.length
          ? schemaForFile.validator.errors.map((value) => value.message)?.reduce((str, cur) => str?.concat(cur || ''))
          : '',
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
