import { TransformedToken } from 'style-dictionary';

import { CONSTANTS } from '../../common';

import File from './file';
import FileFixture from './file.fixture';

describe('@momentum-design/token-builder - models.File', () => {
  describe('local', () => {
    let file: File;

    beforeEach(() => {
      file = new File(FileFixture.FIXTURE_CONFIG);
    });

    describe('constructor()', () => {
      it('should create a new instance of File', () => {
        expect(file instanceof File).toBe(true);
      });
    });

    describe('#categories', () => {
      it('should be the categories provided to the File', () => {
        expect(file.categories).toMatchObject(FileFixture.FIXTURE_CONFIG.filters?.categories as Array<string>);
      });

      it('should be an empty array if categories were not provided to the File', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.categories;

        file = new File(config);

        expect(Array.isArray(file.categories)).toBe(true);
        expect(file.categories.length).toBe(0);
      });
    });

    describe('#destination', () => {
      it('should be the destination provided to the File', () => {
        expect(file.destination).toBe(FileFixture.FIXTURE_CONFIG.destination);
      });
    });

    describe('#extension', () => {
      it('should be the extension associated with the format provided to the File', () => {
        const expected = CONSTANTS.FORMATS[FileFixture.FIXTURE_CONFIG.format].EXTENSION;

        expect(file.extension).toBe(expected);
      });
    });

    describe('#file', () => {
      it('should be the destination provided to the File with the appropriate extension ammended', () => {
        expect(file.file).toBe(`${file.destination}.${file.extension}`);
      });
    });

    describe('#format', () => {
      it('should be the format associated with the format provided to the File', () => {
        const expected = CONSTANTS.FORMATS[FileFixture.FIXTURE_CONFIG.format].FORMAT;

        expect(file.format).toBe(expected);
      });
    });

    describe('#filter', () => {
      let token: TransformedToken;

      beforeEach(() => {
        token = {
          value: 'value',
          attributes: {
            category: file.categories[0],
            item: file.items[0],
            type: file.types[0],
          },
          name: 'name',
          path: ['path'],
          original: {
            value: 'value',
          },
          filePath: 'filePath',
          isSource: true,
        };
      });

      it('should be a function', () => {
        expect(typeof file.filter).toBe('function');
      });

      it('should be a function that can filter by category', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.items;
        delete config.filters?.types;

        file = new File(config);

        expect(file.filter(token)).toBe(true);
      });

      it('should be a function that can filter by item', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.categories;
        delete config.filters?.types;

        file = new File(config);

        expect(file.filter(token)).toBe(true);
      });

      it('should be a function that can filter by type', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.categories;
        delete config.filters?.items;

        file = new File(config);

        expect(file.filter(token)).toBe(true);
      });
    });

    describe('#items', () => {
      it('should be the items provided to the File', () => {
        expect(file.items).toMatchObject(FileFixture.FIXTURE_CONFIG.filters?.items as Array<string>);
      });

      it('should be an empty array if items were not provided to the File', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.items;

        file = new File(config);

        expect(Array.isArray(file.items)).toBe(true);
        expect(file.items.length).toBe(0);
      });
    });

    describe('#references', () => {
      it('should be the reference provided to the File', () => {
        expect(file.references).toBe(FileFixture.FIXTURE_CONFIG.references);
      });
    });

    describe('#sdConfig', () => {
      it('should be an Object with a destination that reflects the File\'s file property', () => {
        expect(file.sdConfig.destination).toBe(file.file);
      });

      it('should be an Object with a format that reflects the File\'s format property', () => {
        expect(file.sdConfig.format).toBe(file.format);
      });

      it('should be an Object with a filter that reflects the File\'s filter property', () => {
        expect(JSON.stringify(file.sdConfig.filter)).toBe(JSON.stringify(file.filter));
      });

      it('should be an Object with options containing an outputReferences that reflects the File\'s reference', () => {
        expect(file.sdConfig.options?.outputReferences).toBe(file.references);
      });
    });

    describe('#types', () => {
      it('should be the types provided to the File', () => {
        expect(file.types).toMatchObject(FileFixture.FIXTURE_CONFIG.filters?.types as Array<string>);
      });

      it('should be an empty array if types were not provided to the File', () => {
        const config = structuredClone(FileFixture.FIXTURE_CONFIG);

        delete config.filters?.types;

        file = new File(config);

        expect(Array.isArray(file.types)).toBe(true);
        expect(file.types.length).toBe(0);
      });
    });
  });
});
