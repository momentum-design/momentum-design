import { Json } from '@momentum-design/common';

import Builder from './builder';
import CONSTANTS from './constants';
import type { Config } from './types';

describe('@momentum-design/builder - Builder', () => {
  let config: Config;
  let builder: Builder;

  beforeEach(() => {
    config = {
      definitionPath: 'example-definition-path',
      type: 'example-type',
    };

    builder = new Builder(config);
  });

  describe('constructor', () => {
    it('should mount the provided config to a locally scoped property', () => {
      expect(builder.config).toMatchObject(config);
    });

    it('should be immutable', () => {
      config.definitionPath = 'example-new-definition-path';

      expect(builder.config).not.toMatchObject(config);
    });
  });

  describe('abstract', () => {
    describe('initialize()', () => {
      it('should reject', () => {
        expect(builder.initialize()).rejects.toEqual(expect.anything());
      });
    });

    describe('process()', () => {
      it('should reject', () => {
        expect(builder.initialize()).rejects.toEqual(expect.anything());
      });
    });
  });

  describe('local', () => {
    describe('type', () => {
      it('should reflect the value provided to the constructor within the config', () => {
        expect(builder.type).toBe(config.type);
      });

      it('should be the unknown type when the value is not provided within the config', () => {
        builder = new Builder({ definitionPath: config.definitionPath });

        expect(builder.type).toBe(Builder.CONSTANTS.UNKNOWN_TYPE);
      });
    });

    describe('build()', () => {
      let readSpy: jest.SpyInstance;
      let initializeSpy: jest.SpyInstance;
      let processSpy: jest.SpyInstance;

      beforeEach(() => {
        readSpy = jest.spyOn(builder, 'read').mockImplementation(() => Promise.resolve(builder));
        initializeSpy = jest.spyOn(builder, 'initialize').mockImplementation(() => Promise.resolve(builder));
        processSpy = jest.spyOn(builder, 'process').mockImplementation(() => Promise.resolve(builder));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to call read', () => (
        builder.build()
          .then(() => {
            expect(readSpy).toHaveBeenCalledTimes(1);
          })
      ));

      it('should attempt to call initialize', () => (
        builder.build()
          .then(() => {
            expect(initializeSpy).toHaveBeenCalledTimes(1);
          })
      ));

      it('should attempt to call process', () => (
        builder.build()
          .then(() => {
            expect(processSpy).toHaveBeenCalledTimes(1);
          })
      ));
    });

    describe('read()', () => {
      const readData = { a: 1, b: 'two', c: 3 };
      let readSpy: jest.SpyInstance;

      beforeEach(() => {
        readSpy = jest.spyOn(Json, 'read').mockImplementation(() => Promise.resolve(readData));
      });

      it('should attempt to read the provided target', () => {
        const target = 'example-target';

        return builder.read(target)
          .then(() => {
            expect(readSpy).toHaveBeenCalledTimes(1);
            expect(readSpy).toHaveBeenCalledWith(target);
          });
      });

      it('should assign the read config object to the current config', () => (
        builder.read()
          .then(() => {
            expect(builder.config).toMatchObject(readData);
          })
      ));
    });
  });

  describe('static', () => {
    describe('constants', () => {
      it('should return the local constants', () => {
        expect(Builder.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const mutable = Builder.CONSTANTS;

        mutable.UNKNOWN_TYPE = 'example-constant';

        expect(Builder.CONSTANTS.UNKNOWN_TYPE).not.toBe(mutable.UNKNOWN_TYPE);
      });
    });

    describe('type', () => {
      it('should reflect the constants type', () => {
        expect(Builder.type).toBe(CONSTANTS.UNKNOWN_TYPE);
      });
    });
  });
});
