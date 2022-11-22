import fs from 'fs/promises';
import path from 'path';

import Json from './json';

describe('@momentum-design/common - Json', () => {
  describe('static', () => {
    const obj = { a: 1, b: 'two', c: true };
    const str = JSON.stringify(obj, null, Json.CONSTANTS.TAB_SPACING);
    const buf = Buffer.from(str, Json.CONSTANTS.FILE_ENCODING);
    const target = 'example/target.json';

    describe('read', () => {
      let parseSpy: jest.SpyInstance;
      let readSpy: jest.SpyInstance;
      let toStringSpy: jest.SpyInstance;

      beforeEach(() => {
        readSpy = jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve(buf));
        parseSpy = jest.spyOn(JSON, 'parse').mockImplementation(() => obj);
        toStringSpy = jest.spyOn(buf, 'toString').mockImplementation(() => str);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to read the file at the provided target amended to the local run directory', () => {
        const completeTarget = path.join(process.cwd(), target);

        return Json.read(target)
          .then(() => {
            expect(readSpy).toHaveBeenCalledTimes(1);
            expect(readSpy).toHaveBeenCalledWith(completeTarget);
          });
      });

      it('should convert the read buffer to a string with the default encoding when none is provided', () => (
        Json.read(target)
          .then(() => {
            expect(toStringSpy).toHaveBeenCalledTimes(1);
            expect(toStringSpy).toHaveBeenCalledWith(Json.CONSTANTS.FILE_ENCODING);
          })
      ));

      it('should convert the read buffer to a string with the provided encoding', () => {
        const encoding = 'ascii';

        return Json.read(target, encoding)
          .then(() => {
            expect(toStringSpy).toHaveBeenCalledTimes(1);
            expect(toStringSpy).toHaveBeenCalledWith(encoding);
          });
      });

      it('should attempt to convert the read buffer into a JSON object', () => (
        Json.read(target)
          .then(() => {
            expect(parseSpy).toHaveBeenCalledTimes(1);
            expect(parseSpy).toHaveBeenCalledWith(str);
          })
      ));
    });

    describe('write', () => {
      let writeSpy: jest.SpyInstance;
      let stringifySpy: jest.SpyInstance;

      beforeEach(() => {
        writeSpy = jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());
        stringifySpy = jest.spyOn(JSON, 'stringify').mockImplementation(() => `${str}\n`);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to write the file at the provided complete target', () => {
        const completeTarget = path.join(process.cwd(), target);

        return Json.write(target, obj)
          .then(() => {
            expect(writeSpy).toHaveBeenCalledTimes(1);
            expect(writeSpy).toHaveBeenCalledWith(completeTarget, expect.anything());
          });
      });

      it('should attempt to stringify the data provided', () => (
        Json.write(target, obj)
          .then(() => {
            expect(stringifySpy).toHaveBeenCalledTimes(1);
            expect(stringifySpy).toHaveBeenCalledWith(obj, null, Json.CONSTANTS.TAB_SPACING);
          })
      ));

      it('should allow for tab spacing to be overwritten', () => {
        const tabSpacing = 4;

        return Json.write(target, obj, tabSpacing)
          .then(() => {
            expect(stringifySpy).toBeCalledTimes(1);
            expect(stringifySpy).toHaveBeenCalledWith(obj, null, tabSpacing);
          });
      });
    });
  });
});
