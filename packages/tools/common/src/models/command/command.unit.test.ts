import Command from './command';
import CONSTANTS from './constants';
import Fixture from './command.fixture';
import type { FixtureOptions, FixtureParams } from './command.fixture';

describe('@momentum-design/common - Command', () => {
  const originalArgs = [...process.argv];

  beforeEach(() => {
    process.argv.push(...Fixture.FIXTURE.CLI);
  });

  afterEach(() => {
    process.argv = originalArgs;
  });

  describe('constructor', () => {
    let command: Command<FixtureOptions, FixtureParams>;

    beforeEach(() => {
      command = new Fixture(Fixture.FIXTURE.OPTIONS);
    });

    it('should create a new instance of Command', () => {
      expect(command instanceof Command);
    });

    it('should create a Command class object with the options param as a property', () => {
      expect(command.options).toMatchObject(Fixture.FIXTURE.OPTIONS);
    });

    it('should create a Command class object with interpreted args as params', () => {
      expect(command.params).toMatchObject(Fixture.FIXTURE.PARAMS);
    });

    it('should create a Command class object with cleaned args as params', () => {
      const extraArgName = 'extra';
      const extraArg = [`--${extraArgName}`, 'extra-value'];

      process.argv.push(...extraArg);

      command = new Fixture(Fixture.FIXTURE.OPTIONS);

      expect(command.params[extraArgName]).toBeUndefined();
    });
  });

  describe('static', () => {
    describe('CONSTANTS', () => {
      it('should be an object matching the local constants', () => {
        expect(Command.CONSTANTS).toMatchObject(CONSTANTS);
      });
    });
  });
});
