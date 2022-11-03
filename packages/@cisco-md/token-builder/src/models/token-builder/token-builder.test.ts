import fs from 'fs/promises';
import StyleDictionary from 'style-dictionary';

import { Config } from '../../common';
import TokenBuilder from './token-builder';
import TokenBuilderFixture from './token-builder.fixture';

describe('@cisco-md/token-builder - models.TokenBuilder', () => {
  describe('local', () => {
    let tokenBuilder: TokenBuilder;

    beforeEach(() => {
      tokenBuilder = new TokenBuilder(TokenBuilderFixture.FIXTURE_CONFIG);
    });

    describe('constructor()', () => {
      it('should create a new instance of TokenBuilder', () => {
        expect(tokenBuilder instanceof TokenBuilder).toBe(true);
      });
    });

    describe('initialize()', () => {
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(fs, 'readFile').mockImplementation(
          () => Promise.resolve(Buffer.from(JSON.stringify(TokenBuilderFixture.FIXTURE_CONFIG))),
        );
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should resolve to itself if the provided config is an Object', async () => {
        const received = await tokenBuilder.initialize();

        expect(received).toBe(tokenBuilder);
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should attempt to read the provided config file path', async () => {
        const config = structuredClone(TokenBuilderFixture.FIXTURE_CONFIG);

        config.config = 'path-example';
        tokenBuilder = new TokenBuilder(config);

        await tokenBuilder.initialize();

        expect(spy).toHaveBeenCalledWith(config.config);
      });

      it('should assign read value to the config property as an Object', async () => {
        const config = structuredClone(TokenBuilderFixture.FIXTURE_CONFIG);

        config.config = 'path-example';
        tokenBuilder = new TokenBuilder(config);

        await tokenBuilder.initialize();
        await tokenBuilder.initialize();

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('build()', () => {
      let buildSpy: jest.SpyInstance;
      let dictionaryTemplate: { buildAllPlatforms: () => any };
      let extendSpy: jest.SpyInstance;
      let initializeSpy: jest.SpyInstance;

      beforeEach(() => {
        dictionaryTemplate = {
          buildAllPlatforms: () => undefined,
        };

        extendSpy = jest.spyOn(StyleDictionary, 'extend').mockImplementation((): any => dictionaryTemplate);
        buildSpy = jest.spyOn(dictionaryTemplate, 'buildAllPlatforms').mockImplementation(() => undefined);
        initializeSpy = jest.spyOn(tokenBuilder, 'initialize').mockImplementation(() => Promise.resolve(tokenBuilder));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should call initialize', async () => {
        await tokenBuilder.build();

        expect(initializeSpy).toHaveBeenCalledTimes(1);
      });

      it('should create style dictionaries for each platform within the TokenBuilder', async () => {
        await tokenBuilder.build();

        const configObj = TokenBuilderFixture.FIXTURE_CONFIG.config as Config;

        expect(extendSpy).toHaveBeenCalledTimes(configObj.files.length);
      });

      it('should attempt to build the generated style dictionaries', async () => {
        await tokenBuilder.build();

        const configObj = TokenBuilderFixture.FIXTURE_CONFIG.config as Config;

        expect(buildSpy).toHaveBeenCalledTimes(configObj.files.length);
      });

      it('should resolve to itself', async () => {
        const received = await tokenBuilder.build();

        expect(received).toBe(tokenBuilder);
      });
    });
  });

  describe('static', () => {
    describe('build', () => {
      let buildSpy: jest.SpyInstance;
      let dictionaryTemplate: { buildAllPlatforms: () => any };
      let extendSpy: jest.SpyInstance;

      beforeEach(() => {
        dictionaryTemplate = {
          buildAllPlatforms: () => undefined,
        };

        extendSpy = jest.spyOn(StyleDictionary, 'extend').mockImplementation((): any => dictionaryTemplate);
        buildSpy = jest.spyOn(dictionaryTemplate, 'buildAllPlatforms').mockImplementation(() => undefined);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should create style dictionaries for each platform within the TokenBuilder', async () => {
        await TokenBuilder.build(TokenBuilderFixture.FIXTURE_CONFIG);

        const configObj = TokenBuilderFixture.FIXTURE_CONFIG.config as Config;

        expect(extendSpy).toHaveBeenCalledTimes(configObj.files.length);
      });

      it('should attempt to build the generated style dictionaries', async () => {
        await TokenBuilder.build(TokenBuilderFixture.FIXTURE_CONFIG);

        const configObj = TokenBuilderFixture.FIXTURE_CONFIG.config as Config;

        expect(buildSpy).toHaveBeenCalledTimes(configObj.files.length);
      });
    });
  });
});
