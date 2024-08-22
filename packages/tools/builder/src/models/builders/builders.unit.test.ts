import Builder from '../builder';
import type { BuilderConfig } from '../builder';

import Builders from './builders';
import CONSTANTS from './constants';
import type { Config } from './types';

describe('@momentum-design/builder - Builders', () => {
  let config: Config;
  let builders: Builders;

  beforeEach(() => {
    config = {
      builders: [
        Builder,
      ],
      definitionPath: 'example-definition-path',
    };
    builders = new Builders(config);
  });

  describe('constructor()', () => {
    it('should extend Builder', () => {
      expect(builders instanceof Builder).toBe(true);
    });

    it('should create a new data.builders array', () => {
      expect(Array.isArray(builders.data.builders)).toBe(true);
      expect(builders.data.builders.length).toBe(0);
    });

    it('should mount all provided builders within the configuration of the Builders class object', () => {
      expect(builders.config.builders.includes(Builder)).toBe(true);
    });
  });

  describe('local', () => {
    describe('builders', () => {
      it('should reflect data.builders', () => {
        expect(builders.builders).toMatchObject(builders.data.builders);
      });

      it('should be immutable to the original value', () => {
        const mutable = builders.builders;

        mutable.push(new Builder({ definitionPath: 'example-definition-path' }));

        expect(mutable).not.toMatchObject(builders.builders);
      });
    });

    describe('generateBuilders()', () => {
      let definitions: Array<BuilderConfig>;

      beforeEach(() => {
        definitions = [
          { definitionPath: 'example-path-a', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-b', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-c', type: Builder.CONSTANTS.UNKNOWN_TYPE },
        ];

        builders.config.definitions = [...definitions];
      });

      it('should mount a new builder to data.builders for every definition provided', () => {
        builders.generateBuilders();

        expect(builders.data.builders.length === definitions.length).toBe(true);
      });

      it('should construct Builder class Objects based on the Builder type', () => {
        builders.generateBuilders();

        builders.data.builders.forEach((builder) => {
          expect(builder instanceof Builder).toBe(true);
        });
      });

      it('should return the Builders class Object instance', () => {
        expect(builders.generateBuilders()).toBe(builders);
      });
    });

    describe('initialize()', () => {
      let generateBuildersSpy: jest.SpyInstance;

      beforeEach(() => {
        generateBuildersSpy = jest.spyOn(builders, 'generateBuilders').mockImplementation(() => builders);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should call generateBuilders', () => (
        builders.initialize()
          .then(() => {
            expect(generateBuildersSpy).toHaveBeenCalledTimes(1);
          })
      ));

      it('should return the Builders class Object instance', () => {
        expect(builders.initialize()).resolves.toBe(builders);
      });

      it('should call initialize on each builder mounted in data.buidlers', () => {
        const definitions = [
          { definitionPath: 'example-path-a', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-b', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-c', type: Builder.CONSTANTS.UNKNOWN_TYPE },
        ];

        const spies: Array<jest.SpyInstance> = [];

        builders.data.builders = definitions.map((definition) => {
          const builder = new Builder(definition);

          const spy = jest.spyOn(builder, 'initialize').mockImplementation(() => Promise.resolve(builder));

          spies.push(spy);

          return builder;
        });

        builders.initialize()
          .then(() => {
            spies.forEach((spy) => {
              expect(spy).toHaveBeenCalledTimes(1);
            });
          });
      });
    });

    describe('process()', () => {
      it('should return the Builders class Object instance', () => {
        expect(builders.process()).resolves.toBe(builders);
      });

      it('should call initialize on each builder mounted in data.buidlers', () => {
        const definitions = [
          { definitionPath: 'example-path-a', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-b', type: Builder.CONSTANTS.UNKNOWN_TYPE },
          { definitionPath: 'example-path-c', type: Builder.CONSTANTS.UNKNOWN_TYPE },
        ];

        const spies: Array<jest.SpyInstance> = [];

        builders.data.builders = definitions.map((definition) => {
          const builder = new Builder(definition);

          const spy = jest.spyOn(builder, 'process').mockImplementation(() => Promise.resolve(builder));

          spies.push(spy);

          return builder;
        });

        builders.process()
          .then(() => {
            spies.forEach((spy) => {
              expect(spy).toHaveBeenCalledTimes(1);
            });
          });
      });
    });
  });

  describe('static', () => {
    describe('constants', () => {
      it('should return the local constants', () => {
        expect(Builders.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const mutable = Builders.CONSTANTS;

        mutable.UNKNOWN_TYPE = 'example-constant';

        expect(Builders.CONSTANTS.UNKNOWN_TYPE).not.toBe(mutable.UNKNOWN_TYPE);
      });
    });

    describe('type', () => {
      it('should reflect the constants type', () => {
        expect(Builders.type).toBe(CONSTANTS.TYPE);
      });
    });
  });
});
