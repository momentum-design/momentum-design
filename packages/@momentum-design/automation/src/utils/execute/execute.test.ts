import ChildProcess from 'node:child_process';

import Execute from './execute';

describe('@momentum-design/automation - utils.Execute', () => {
  describe('static', () => {
    describe('emit()', () => {
      const value = 'value-example';
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(Execute.logger, 'info');
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to write a provided string', () => {
        Execute.emit(value);

        expect(spy).toHaveBeenCalledWith(value);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should return undefined', () => {
        expect(Execute.emit(value)).toBe(undefined);
      });
    });

    describe('resultsToArray()', () => {
      it('should return the provided string split based on new-line escapes', () => {
        const value = 'example-line-1\nexample-line-2';
        const expected = ['example-line-1', 'example-line-2'];

        expect(Execute.resultsToArray(value)).toMatchObject(expected);
      });
    });

    describe('run()', () => {
      const command = 'command-example';
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(ChildProcess, 'exec').mockImplementation((): any => undefined);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should return a promise', () => {
        expect(Execute.run(command) instanceof Promise).toBe(true);
      });

      it('should attempt to execute the provided command', () => {
        Execute.run(command);

        expect(spy).toHaveBeenCalledWith(command, expect.any(Function));
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
