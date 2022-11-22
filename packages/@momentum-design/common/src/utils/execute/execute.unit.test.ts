import ChildProcess from 'node:child_process';

import Execute from './execute';

describe('@momentum-design/common - Execute', () => {
  describe('static', () => {
    describe('emit()', () => {
      let writeSpy: jest.SpyInstance;

      beforeEach(() => {
        writeSpy = jest.spyOn(process.stdout, 'write');
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to write the provided value', () => {
        const value = 'example-value';

        Execute.emit(value);

        expect(writeSpy).toHaveBeenCalledTimes(1);
        expect(writeSpy).toHaveBeenCalledWith(value);
      });
    });

    describe('run()', () => {
      let execSpy: jest.SpyInstance;

      beforeEach(() => {
        execSpy = jest.spyOn(ChildProcess, 'exec').mockImplementation();
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should return a Promise', () => {
        expect(Execute.run('example') instanceof Promise).toBe(true);
      });

      it('should attempt to execute the provided command', () => {
        const command = 'example-command';

        Execute.run(command);

        expect(execSpy).toHaveBeenCalledTimes(1);
        expect(execSpy).toHaveBeenCalledWith(command, expect.any(Function));
      });
    });
  });
});
