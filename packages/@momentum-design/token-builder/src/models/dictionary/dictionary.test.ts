import path from 'path';

import Platform from '../platform';

import Dictionary from './dictionary';
import DictionaryFixture from './dictionary.fixture';

describe('@momentum-design/token-builder - models.Dictionary', () => {
  describe('local', () => {
    let dictionary: Dictionary;

    beforeEach(() => {
      dictionary = new Dictionary(DictionaryFixture.FIXTURE_CONFIG);
    });

    describe('constructor()', () => {
      it('should create a new instance of Dictionary', () => {
        expect(dictionary instanceof Dictionary).toBe(true);
      });
    });

    describe('#formats', () => {
      it('should be the format provided to the Dictionary', () => {
        expect(dictionary.formats).toMatchObject(DictionaryFixture.FIXTURE_CONFIG.formats);
      });
    });

    describe('#input', () => {
      it('should be the input provided to the Dictionary', () => {
        expect(dictionary.input).toBe(DictionaryFixture.FIXTURE_CONFIG.input);
      });
    });

    describe('#output', () => {
      it('should be the output provided to the Dictionary', () => {
        expect(dictionary.output).toBe(DictionaryFixture.FIXTURE_CONFIG.output);
      });
    });

    describe('#platforms', () => {
      let platforms: Record<string, Platform>;

      beforeEach(() => {
        platforms = dictionary.platforms;
      });

      it('should be an Object of Platform instances', () => {
        Object.values(platforms).forEach((platform) => {
          expect(platform instanceof Platform).toBe(true);
        });
      });

      it('should be an Object of Platform instances containing a matching files', () => {
        Object.values(platforms).forEach((platform) => {
          const {
            categories,
            items,
            types,
          } = DictionaryFixture.FIXTURE_CONFIG.file.filters as Record<string, Array<string>>;

          expect(platform.file.categories).toMatchObject(categories);
          expect(platform.file.items).toMatchObject(items);
          expect(platform.file.types).toMatchObject(types);
        });
      });

      it('should be an Object that includes Platforms with mapped formats', () => {
        dictionary.formats.forEach((format) => {
          const platform = Object.values(platforms).find((platform) => platform.format === format);

          expect(platform instanceof Platform).toBe(true);
        });
      });

      it('should be an Object of Platforms with a matching output', () => {
        Object.values(platforms).forEach((platform) => {
          expect(platform.output).toBe(path.join(dictionary.output, platform.group, '/'));
        });
      });

      it('should be an Object of Platforms with a matching prefix', () => {
        Object.values(platforms).forEach((platform) => {
          expect(platform.prefix).toBe(dictionary.prefix);
        });
      });
    });

    describe('#prefix', () => {
      it('should be the prefix provided to the Dictionary', () => {
        expect(dictionary.prefix).toBe(DictionaryFixture.FIXTURE_CONFIG.prefix);
      });
    });

    describe('#sdConfig', () => {
      it('should be an Object with a source that matches the Dictionary\'s targets', () => {
        expect(dictionary.sdConfig.source).toMatchObject(dictionary.targets);
      });

      it('should be an Object with its platforms value as the Dictionary\'s platforms as configs', () => {
        const serializedPlatforms = Object.entries(dictionary.platforms).reduce((platforms, [key, value]) => ({
          ...platforms,
          [key]: value.sdConfig,
        }), {});

        const expected = JSON.stringify(serializedPlatforms);

        expect(JSON.stringify(dictionary.sdConfig.platforms)).toBe(expected);
      });
    });

    describe('#targets', () => {
      it('should be the file targets provided to the Dictionary with the provided input prepended', () => {
        const expected = DictionaryFixture.FIXTURE_CONFIG.file.targets.map(
          (target) => path.join(dictionary.input, target),
        );

        expect(dictionary.targets).toMatchObject(expected);
      });
    });
  });
});
