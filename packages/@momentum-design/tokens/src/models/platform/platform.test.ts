import path from 'path';

import File from '../file/fixture';

import Platform from './platform';

describe('models.Platform', () => {
  describe('static', () => {
    describe('constructor()', () => {
      const files = [new File()];
      const group = 'group';
      const name = 'name';
      const platform = new Platform({ files, group, name });

      it('should construct a new Platform instance', () => {
        expect(platform instanceof Platform).toBe(true);
      });
    });
  });

  describe('scoped', () => {
    const file = new File();
    const files = [file];
    const group = 'group';
    const name = 'name';

    let platform: Platform;

    beforeEach(() => {
      platform = new Platform({ files, group, name });
    });

    describe('#files', () => {
      it('should match the provided files', () => {
        expect(platform.files).toMatchObject(files);
      });

      it('should be immutable', () => {
        const initial = platform.files;
        const value = 'value';

        initial.push(value);

        expect(platform.files.includes(value)).toBe(false);
      });
    });

    describe('#group', () => {
      it('should match the provided group', () => {
        expect(platform.group).toBe(group);
      });
    });

    describe('#name', () => {
      it('should match the provided name', () => {
        expect(platform.name).toBe(name);
      });
    });

    describe('#outputPath', () => {
      it('should join the scoped output path with its name, followed by a forward slash', () => {
        const scopeOutputPath = './test/example';

        platform.setScopeOutputPath(scopeOutputPath);

        expect(platform.outputPath).toBe(path.join(scopeOutputPath, name, '/'));
      });
    });

    describe('#scopeOutputPath', () => {
      it('should throw an error if the scopeOutputPath was never updated', () => {
        expect(() => platform.scopeOutputPath).toThrow();
      });
    });

    describe('#serial', () => {
      const scopeOutputPath = './test/example';

      beforeEach(() => {
        platform.setScopeOutputPath(scopeOutputPath);
      });

      it('should return the appropriate build path', () => {
        expect(platform.serial.buildPath).toBe(path.join(scopeOutputPath, name, '/'));
      });

      it('should return the appropriate format', () => {
        expect(platform.serial.transformGroup).toBe(group);
      });

      it('should return the appropriate file serials', () => {
        const serialFile = platform.serial.files.pop();
        expect(serialFile?.destination).toBe(file.serial.destination);
        expect(serialFile?.format).toBe(file.serial.format);
      });
    });

    describe('mountFiles()', () => {
      it('should mount all provided files', () => {
        const initial = platform.files.length;
        const moreFiles = [new File(), new File()];

        platform.mountFiles(...moreFiles);

        expect(platform.files.length).toBe(initial + moreFiles.length);
        expect(platform.files.includes(moreFiles[0])).toBe(true);
        expect(platform.files.includes(moreFiles[1])).toBe(true);
      });

      it('should return itself', () => {
        expect(platform.mountFiles()).toBe(platform);
      });
    });

    describe('setScopeOutputPath', () => {
      it('should set the scope output path value', () => {
        const scopeOutputPath = 'example';
        platform.setScopeOutputPath(scopeOutputPath);

        expect(platform.scopeOutputPath).toBe(scopeOutputPath);
      });

      it('should return itself', () => {
        expect(platform.setScopeOutputPath('example')).toBe(platform);
      });
    });
  });
});
