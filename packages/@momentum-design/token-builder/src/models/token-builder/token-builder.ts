import fs from 'fs/promises';
import StyleDictionary from 'style-dictionary';

import {
  Logger,
  generateMetadata,
  RecordEventProperties,
  RecordContextPrefix,
  RecordSourcePrefix,
  RecordEventName,
  RecordBusinessPrefix,
} from '@momentum-design/telemetry';
import { CONSTANTS, Config as ExternalConfig } from '../../common';
import { Elevation as ElevationTransform } from '../../transforms';
import Dictionary from '../dictionary';

import type { Config } from './types';
import Validator from '../../validator';

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
      .then(async () => new Validator(this.config.input, this.config.config as ExternalConfig).validate())
      .then(() => {
        const configObj = this.config.config as ExternalConfig;

        if (configObj.transforms) {
          configObj.transforms.filter((transform) => Object.keys(CONSTANTS.LOCAL_TRANSFORMS).includes(transform))
            .forEach((transformKey) => {
              const transformName = CONSTANTS.TRANSFORMS[transformKey];
              let transform: ElevationTransform;

              switch (transformName) {
                case CONSTANTS.LOCAL_TRANSFORMS.MD_ELEVATION:
                  transform = new ElevationTransform();

                  StyleDictionary.registerTransform(transform.sdConfig);
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
