import path from 'path';

import { CONSTANTS } from '../../common';
import File from '../file';

import Platform from './platform';
import PlatformFixture from './platform.fixture';

describe('@cisco-md/token-builder - models.Platform', () => {
  describe('local', () => {
    let platform: Platform;

    beforeEach(() => {
      platform = new Platform(PlatformFixture.FIXTURE_CONFIG);
    });

    describe('constructor()', () => {
      it('should create a new instance of Platform', () => {
        expect(platform instanceof Platform).toBe(true);
      });
    });

    describe('#file', () => {
      it('should be a File instance', () => {
        expect(platform.file instanceof File).toBe(true);
      });

      it('should be a File with a destination property that matches the Platform\'s provided file destination', () => {
        expect(platform.file.destination).toBe(PlatformFixture.FIXTURE_CONFIG.file.destination);
      });

      it('should be a File with a filters property that matches the Platform\'s provided file filters', () => {
        const { filters } = PlatformFixture.FIXTURE_CONFIG.file;

        expect(platform.file.categories).toMatchObject(filters.categories as Array<string>);
        expect(platform.file.items).toMatchObject(filters.items as Array<string>);
        expect(platform.file.types).toMatchObject(filters.types as Array<string>);
      });

      it('should be a File with a format property that matches the Platform\'s format property', () => {
        expect(platform.file.format).toBe(CONSTANTS.FORMATS[platform.format].FORMAT);
      });
    });

    describe('#format', () => {
      it('should be the format provided to the Platform', () => {
        expect(platform.format).toBe(PlatformFixture.FIXTURE_CONFIG.format);
      });
    });

    describe('#group', () => {
      it('should be the group associated with the format provided to the Platform', () => {
        expect(platform.group).toBe(CONSTANTS.FORMATS[platform.format].GROUP);
      });
    });

    describe('#output', () => {
      it('should be a path built from the provided output, the group, and an ammended "/" character', () => {
        expect(platform.output).toBe(path.join(PlatformFixture.FIXTURE_CONFIG.output, platform.group, '/'));
      });
    });

    describe('#prefix', () => {
      it('should be the prefix provided to the Platform', () => {
        expect(platform.prefix).toBe(PlatformFixture.FIXTURE_CONFIG.prefix);
      });
    });

    describe('#sdConfig', () => {
      it('should be an Object with a prefix that reflects the Platform\'s prefix property', () => {
        expect(platform.sdConfig.prefix).toBe(platform.prefix);
      });

      it('should be an Object with a transformGroup that reflects the Platform\'s group property', () => {
        expect(platform.sdConfig.transformGroup).toBe(platform.group);
      });

      it('should be an Object with a buildPath that reflects the Platform\'s output property', () => {
        expect(platform.sdConfig.buildPath).toBe(platform.output);
      });

      it('should be an Object with a files Array that includes the Platform\'s file property\'s sdConfig', () => {
        expect(JSON.stringify(platform.sdConfig.files)).toBe(JSON.stringify([platform.file.sdConfig]));
      });
    });
  });
});
