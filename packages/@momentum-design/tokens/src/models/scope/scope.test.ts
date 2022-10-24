import path from 'path';

import { CONSTANTS as COMMON_CONSTANTS } from '../../common';
import Platform from '../platform/fixture';

import Scope from './scope';
import CONSTANTS from './constants';

describe('models.Scope', () => {
  const filters = ['filter'];
  const name = 'name';
  const platform = new Platform();
  const platforms = [platform];
  const type = 'type';
  let scope: Scope;

  beforeEach(() => {
    scope = new Scope({ filters, name, platforms, type });
  });

  describe('static', () => {
    describe('constructor()', () => {
      it('should construct a new Scope instance', () => {
        expect(scope instanceof Scope).toBe(true);
      });
    });

    describe('#CONSTANTS', () => {
      it('should match the local constants file', () => {
        expect(Scope.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const value = Scope.CONSTANTS.REFERENCE_WILDCARD;
        const constants = Scope.CONSTANTS;
        constants.REFERENCE_WILDCARD = 'example';

        expect(Scope.CONSTANTS.REFERENCE_WILDCARD).toBe(value);
      });
    });
  });

  describe('scoped', () => {
    describe('#filters', () => {
      it('should match the provided filters', () => {
        expect(scope.filters).toMatchObject(filters);
      });

      it('should be immutable', () => {
        const initial = scope.filters;
        const value = 'value';

        initial.push(value);

        expect(scope.filters.includes(value)).toBe(false);
      });
    });

    describe('#name', () => {
      it('should match the provided name', () => {
        expect(scope.name).toBe(name);
      });
    });

    describe('#outputPath', () => {
      it('should be a joined path between the default output path, the type, and the name', () => {
        expect(scope.outputPath).toBe(path.join(COMMON_CONSTANTS.PATHS.OUTPUT, type, name));
      });
    });

    describe('#platforms', () => {
      it('should match the provided platforms', () => {
        expect(scope.platforms).toMatchObject(platforms);
      });

      it('should be immutable', () => {
        const initial = scope.platforms;
        const value = new Platform();

        initial.push(value);

        expect(scope.platforms.includes(value)).toBe(false);
      });
    });

    describe('#referenceFilter', () => {
      it('should be an array including the reference filter if no filters were defined', () => {
        scope = new Scope({ name, platforms, type });

        expect(scope.referenceFilter).toMatchObject([path.join(
          COMMON_CONSTANTS.PATHS.REFERENCE,
          type,
          name,
          CONSTANTS.REFERENCE_WILDCARD,
        )]);
      });

      it('should be an array including the reference and all filters when a filter is present', () => {
        expect(scope.referenceFilter).toMatchObject([path.join(
          COMMON_CONSTANTS.PATHS.REFERENCE,
          type,
          name,
          filters[0],
        )]);
      });
    });

    describe('#referencePath', () => {
      it('should be a path inclusive of the reference, type, and name', () => {
        expect(scope.referencePath).toBe(path.join(COMMON_CONSTANTS.PATHS.REFERENCE, type, name));
      });
    });

    describe('#type', () => {
      it('should match the provided type', () => {
        expect(scope.type).toBe(type);
      });
    });

    describe('mountPlatforms', () => {
      it('should not mount platforms that are already mounted', () => {
        const initial = scope.platforms.length;

        scope.mountPlatforms(platform);

        expect(scope.platforms.length).toBe(initial);
      });

      it('should set the scope output path of each mounted platform', () => {
        const newPlatform = new Platform();

        expect(() => newPlatform.scopeOutputPath).toThrow();

        scope.mountPlatforms(newPlatform);

        expect(newPlatform.scopeOutputPath).toBe(scope.outputPath);
      });

      it('should mount all provided platforms', () => {
        const initial = platform.files.length;
        const morePlatforms = [new Platform(), new Platform()];

        scope.mountPlatforms(...morePlatforms);

        expect(scope.platforms.length).toBe(initial + morePlatforms.length);
        expect(scope.platforms.includes(morePlatforms[0])).toBe(true);
        expect(scope.platforms.includes(morePlatforms[1])).toBe(true);
      });

      it('should return itself', () => {
        expect(scope.mountPlatforms()).toBe(scope);
      });
    });
  });
});
