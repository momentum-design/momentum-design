import fs from 'fs/promises';
import StyleDictionary from 'style-dictionary';
import { registerTransforms } from '@tokens-studio/sd-transforms';

import {
  Logger,
  generateMetadata,
  RecordEventProperties,
  RecordContextPrefix,
  RecordSourcePrefix,
  RecordEventName,
  RecordBusinessPrefix,
} from '@momentum-design/telemetry';
import { SomeJSONSchema } from 'ajv/dist/types/json-schema';
import { CONSTANTS, Config as ExternalConfig } from '../../common';
import { ElevationTransform, PxToRemTransform } from '../../transforms';
import { IOSWebexFormat, JsonMinimalFormat } from '../../formats';
import Dictionary from '../dictionary';

import type { Config } from './types';
import Validator from '../../validator';
import { SCHEMA_MAP } from '../../schemas';

const PACKAGE = 'token-builder';

const logger = Logger.child(generateMetadata(PACKAGE, 'token-builder'));

class TokenBuilder {
  protected config: Config;

  public constructor(config: Config) {
    this.config = typeof config === 'string' ? config : structuredClone(config);
  }

  public build(): Promise<this> {
    logger.info('Executing build...');
    return this.initialize()
      .then(async () => {
        logger.info('Initializing validation...');
        const configObj = this.config.config as ExternalConfig;
        if (configObj.strict === false) {
          logger.warn('strict mode disabled...skipping validation...');
          return Promise.resolve();
        }
        let schemaMap;
        if (configObj.schemaFiles) {
          // TODO: this could be hardened up, but as of now, it's unused
          // so delaying the value add here
          logger.info('Building files for schema validator...');
          schemaMap = await Promise.all(configObj.schemaFiles.map(async (value) => ({
            fileName: value.split('/').pop() || '',
            jsonSchema: await fs.readFile(value, 'utf8') as unknown as SomeJSONSchema,
          })));
        } else {
          schemaMap = SCHEMA_MAP;
        }
        return new Validator(this.config.input, this.config.config as ExternalConfig, schemaMap).validate();
      })
      .then(() => {
        const configObj = this.config.config as ExternalConfig;
        registerTransforms(StyleDictionary, {
          expand: { composition: true, typography: true, border: true, shadow: configObj.shadow ?? true },
          excludeParentKeys: false,
          'ts/color/modifiers': {
            format: 'hex',
          },
        });

        configObj.formats.forEach((format) => {
          if (CONSTANTS.FORMATS[format]?.TRANSFORMS) {
            // eslint-disable-next-line max-len, max-len
            CONSTANTS.FORMATS[format].TRANSFORMS?.filter((transform) => Object.keys(CONSTANTS.LOCAL_TRANSFORMS).includes(transform))
              .forEach((transformKey) => {
                const transformName = CONSTANTS.TRANSFORMS[transformKey];
                let transform: ElevationTransform | PxToRemTransform;
                switch (transformName) {
                  case CONSTANTS.LOCAL_TRANSFORMS.MD_ELEVATION:
                    transform = new ElevationTransform();
                    StyleDictionary.registerTransform(transform.sdConfig);
                    break;
                  case CONSTANTS.LOCAL_TRANSFORMS.PX_TO_REM:
                    transform = new PxToRemTransform();
                    StyleDictionary.registerTransform(transform.sdConfig);
                    break;
                  default:
                }
              });
          }
        });

        if (configObj.formats) {
          configObj.formats.filter((format) => Object.keys(CONSTANTS.LOCAL_FORMATS).includes(format))
            .forEach((formatKey) => {
              const formatName = CONSTANTS.FORMATS[formatKey].NAME;

              let format: JsonMinimalFormat | IOSWebexFormat;

              switch (formatName) {
                case CONSTANTS.LOCAL_FORMATS.MD_JSON_MINIMAL.NAME:
                  format = new JsonMinimalFormat();

                  StyleDictionary.registerFormat(format.sdConfig);
                  break;

                case CONSTANTS.LOCAL_FORMATS.IOS_WEBEX.NAME:
                  format = new IOSWebexFormat(configObj.iosWebexPath);

                  StyleDictionary.registerFormat(format.sdConfig);
                  break;
                default:
              }
            });
        }

        const { input, output } = this.config;
        const dictionaries = configObj.files.map((file) => new Dictionary({
          file,
          formats: [...configObj.formats],
          input,
          output,
          prefix: configObj.prefix,
          transforms: configObj.transforms,
        }));

        const sdDictionaries = dictionaries.map((dictionary) => StyleDictionary.extend(dictionary.sdConfig));

        sdDictionaries.forEach((sdDictionary) => sdDictionary.buildAllPlatforms());

        configObj.formats.forEach((format) => {
          logger.record({
            // eslint-disable-next-line max-len
            eventInput: `${RecordSourcePrefix.Raw}_${RecordBusinessPrefix.Engineering}_${PACKAGE}_${RecordContextPrefix.Usage}_${RecordEventName.Build}`,
            eventProperties: {
              [RecordEventProperties.OutputFormat]: format,
              [RecordEventProperties.FileCount]: configObj.files.length,
            },
          });
        });

        return this;
      }).catch((err: Error) => {
        logger.error(`${err.name} ::::: message: ${err.message} ::::: stack: ${err.stack}`);
        throw err;
      });
  }

  public initialize(): Promise<this> {
    if (typeof this.config.config === 'object') {
      return Promise.resolve(this);
    }

    logger.info('Reading files...');

    return fs.readFile(this.config.config as string)
      .then((buffer: Buffer) => buffer.toString(CONSTANTS.FILE_ENCODING))
      .then((data: string) => JSON.parse(data))
      .then((json: ExternalConfig) => {
        this.config.config = json;

        return this;
      })
      .catch(() => {
        throw new Error(`TokenBuilder.initialize() - unable to read and parse data from "${this.config.config}"`);
      });
  }

  public static build(config: Config): Promise<TokenBuilder> {
    const tokenBuilder = new TokenBuilder(config);

    return tokenBuilder.build();
  }
}

export default TokenBuilder;
