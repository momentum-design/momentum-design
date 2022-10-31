import File from './file';
import CONSTANTS from './constants';

describe('models/File', () => {
  const categories = ['category'];
  const extension = 'ext';
  const format = 'format';
  const items = ['item'];
  const name = 'name';
  const types = ['types'];

  let file: File;

  beforeEach(() => {
    file = new File({ categories, extension, format, items, name, types });
  });

  describe('static', () => {
    describe('constructor()', () => {
      const file = new File({ categories, extension, format, items, name, types });

      it('should construct a new File instance', () => {
        expect(file instanceof File).toBe(true);
      });
    });

    describe('#CONSTANTS', () => {
      it('should match the local constants file', () => {
        expect(File.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const value = File.CONSTANTS.FILE_SCOPES.ITEMS;
        const constants = File.CONSTANTS;
        constants.FILE_SCOPES.ITEMS = 'types';

        expect(File.CONSTANTS.FILE_SCOPES.ITEMS).toBe(value);
      });
    });
  });

  describe('scoped', () => {
    describe('#categories', () => {
      it('should match the provided categories', () => {
        expect(file.categories).toMatchObject(categories);
      });

      it('should be immutable', () => {
        const initial = file.categories;
        const value = 'value';

        initial.push(value);

        expect(file.categories.includes(value)).toBe(false);
      });
    });

    describe('#destination', () => {
      it('should be a file name followed by its extension', () => {
        expect(file.destination).toBe(`${name}.${extension}`);
      });
    });

    describe('#extension', () => {
      it('should match the provided extension', () => {
        expect(file.extension).toBe(extension);
      });
    });

    describe('#format', () => {
      it('should match the provided format', () => {
        expect(file.format).toBe(format);
      });
    });

    describe('#items', () => {
      it('should match the provided items', () => {
        expect(file.items).toMatchObject(items);
      });

      it('should be immutable', () => {
        const initial = file.items;
        const value = 'value';

        initial.push(value);

        expect(file.items.includes(value)).toBe(false);
      });
    });

    describe('#name', () => {
      it('should match the provided format', () => {
        expect(file.name).toBe(name);
      });
    });

    describe('#serial', () => {
      it('should return the appropriate destination', () => {
        expect(file.serial.destination).toBe(`${name}.${extension}`);
      });

      it('should return the appropriate format', () => {
        expect(file.serial.format).toBe(format);
      });

      it('should return a useable filter function', () => {
        expect(typeof file.filter).toBe('function');
      });
    });

    describe('#types', () => {
      it('should match the provided types', () => {
        expect(file.types).toMatchObject(types);
      });

      it('should be immutable', () => {
        const initial = file.types;
        const value = 'value';

        initial.push(value);

        expect(file.types.includes(value)).toBe(false);
      });
    });
  });
});
