import fs from 'fs/promises';
import path from 'path';
import StyleDictionary, { Config } from 'style-dictionary';

import type { TokenConfig } from '../../common';

import Build from './build';

describe('commands.Build', () => {
  let tokenConfig: TokenConfig;
  let styleDictionaryConfig: Config;

  beforeEach(() => {
    tokenConfig = {
      files: [{ filters: ['filter'], categories: ['category'], items: ['item'], name: 'name', types: ['type'] }],
      name: 'name',
      platforms: [{ group: 'group', name: 'name', extension: 'extension', format: 'format' }],
      type: 'type',
    };

    styleDictionaryConfig = {
      source: ['reference/type/name/filter'],
      platforms: {
        name: {
          buildPath: 'dist/type/name/name/',
          transformGroup: 'group',
          files: [{ destination: 'name.extension', format: 'format' }],
        },
      },
    };
  });

  describe('static', () => {
    describe('constructor', () => {
      it('should construct a new Build instance', () => {
        const build = new Build('example');

        expect(build instanceof Build).toBe(true);
      });
    });

    describe('buildStyleDictionaryConfig()', () => {
      it('should generate a matching style dictionary config', () => {
        expect(Build.buildStyleDictionaryConfig(tokenConfig)).toMatchObject([styleDictionaryConfig]);
      });
    });

    describe('buildStyleDictionaryConfigs()', () => {
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(Build, 'buildStyleDictionaryConfig');
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should pass each item into Build.buildStyleDictionaryConfig()', () => {
        const tokenConfigA = structuredClone(tokenConfig);
        const tokenConfigB = structuredClone(tokenConfig);

        Build.buildStyleDictionaryConfigs(tokenConfigA, tokenConfigB);

        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(tokenConfigA);
        expect(spy).toHaveBeenCalledWith(tokenConfigB);
      });

      it('should return an array of the provided token configs as style dictionary configs', () => {
        expect(Array.isArray(Build.buildStyleDictionaryConfigs(tokenConfig))).toBe(true);
      });
    });

    describe('buildTokens()', () => {
      let spy: jest.SpyInstance;

      afterEach(() => {
        jest.resetAllMocks();
      });

      it('should call the provided dictionaries\' buildAllPlatforms method', () => {
        const dictionary = StyleDictionary.extend(styleDictionaryConfig);

        spy = jest.spyOn(dictionary, 'buildAllPlatforms').mockImplementation((): any => undefined);

        Build.buildTokens(dictionary);

        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should support multiple dictionaries in one functional call', () => {
        const dictionary = StyleDictionary.extend(styleDictionaryConfig);

        spy = jest.spyOn(dictionary, 'buildAllPlatforms').mockImplementation((): any => undefined);

        Build.buildTokens(dictionary, dictionary);

        expect(spy).toHaveBeenCalledTimes(2);
      });
    });

    describe('createDictionaries', () => {
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(StyleDictionary, 'extend').mockImplementation((): any => undefined);
      });

      afterEach(() => {
        jest.resetAllMocks();
      });

      it('should call the StyleDictionary.extend for each provided StyleDictionary.Core', () => {
        const configA = structuredClone(styleDictionaryConfig);
        const configB = structuredClone(styleDictionaryConfig);
        Build.createDictionaries(configA, configB);

        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(configA);
        expect(spy).toHaveBeenCalledWith(configB);
      });

      it('should return the same amount of style dictionaries as provided configs as an Array', () => {
        expect(Build.createDictionaries(styleDictionaryConfig, styleDictionaryConfig).length).toBe(2);
      });
    });

    describe('readTokenConfig()', () => {
      const bufferString = JSON.stringify({ value: 'value' });
      const dataBuffer = Buffer.from(bufferString, 'utf-8');
      const location = 'location';

      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(fs, 'readFile').mockImplementation(
          (): Promise<Buffer> => Promise.resolve(dataBuffer),
        );
      });

      afterEach(() => {
        jest.resetAllMocks();
      });

      it('should call readFile with the provided location combined with the local directory', () => {
        Build.readTokenConfig(location);

        expect(spy).toHaveBeenCalledWith(path.join(process.cwd(), location));
      });

      it('should attempt to convert the read buffer to a string', async () => {
        const dataSpy = jest.spyOn(dataBuffer, 'toString');

        await Build.readTokenConfig(location);

        expect(dataSpy).toHaveBeenCalledTimes(1);

        jest.restoreAllMocks();
      });

      it('should return a JavaScript Object', async () => {
        const final = await Build.readTokenConfig(location);

        expect(typeof final).toBe('object');
      });
    });

    describe('readTokenConfigs()', () => {
      const locationA = 'location-a';
      const locationB = 'location-b';
      const locations = [locationA, locationB];

      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(Build, 'readTokenConfig').mockImplementation(
          () => Promise.resolve(structuredClone(tokenConfig)),
        );
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should call Build.readTokenConfig for each provided location', async () => {
        await Build.readTokenConfigs(...locations);

        expect(spy).toHaveBeenCalledTimes(locations.length);
        expect(spy).toHaveBeenCalledWith(locationA);
        expect(spy).toHaveBeenCalledWith(locationB);
      });
    });
  });

  describe('scoped', () => {
    describe('run()', () => {
      const locationA = 'location-a';
      const locationB = 'location-b';
      const locations = [locationA, locationB];

      let build: Build;
      let buildStyleDictionaryConfigsSpy: jest.SpyInstance;
      let buildTokensSpy: jest.SpyInstance;
      let createDictionariesSpy: jest.SpyInstance;
      let dictionary: StyleDictionary.Core;
      let readTokenConfigsSpy: jest.SpyInstance;

      beforeEach(() => {
        build = new Build(...locations);
        dictionary = StyleDictionary.extend(styleDictionaryConfig);

        buildStyleDictionaryConfigsSpy = jest.spyOn(Build, 'buildStyleDictionaryConfigs').mockImplementation(
          (...values) => values.map(() => styleDictionaryConfig),
        );

        buildTokensSpy = jest.spyOn(Build, 'buildTokens').mockImplementation(() => undefined);

        createDictionariesSpy = jest.spyOn(Build, 'createDictionaries').mockImplementation(
          (...values) => values.map(() => dictionary),
        );

        readTokenConfigsSpy = jest.spyOn(Build, 'readTokenConfigs').mockImplementation(
          (...values) => Promise.all(values.map(() => Promise.resolve(tokenConfig))),
        );
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to read on provided token locations', async () => {
        await build.run();

        expect(readTokenConfigsSpy).toHaveBeenCalledTimes(1);
        expect(readTokenConfigsSpy).toHaveBeenCalledWith(...locations);
      });

      it('should attempt to build style dictionary configs', async () => {
        await build.run();

        expect(buildStyleDictionaryConfigsSpy).toHaveBeenCalledTimes(1);
        expect(buildStyleDictionaryConfigsSpy).toHaveBeenCalledWith(tokenConfig, tokenConfig);
      });

      it('should attempt to create dictionary configs', async () => {
        await build.run();

        expect(createDictionariesSpy).toHaveBeenCalledTimes(1);
        expect(createDictionariesSpy).toHaveBeenCalledWith(styleDictionaryConfig, styleDictionaryConfig);
      });

      it('should attempt to build the tokens', async () => {
        await build.run();

        expect(buildTokensSpy).toHaveBeenCalledTimes(1);
        expect(buildTokensSpy).toHaveBeenCalledWith(dictionary, dictionary);
      });
    });
  });
});
