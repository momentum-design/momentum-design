import Command from './command';
import type { Options, Params } from './types';

export type CommandFixtureProcessOutput = Array<string>;

const JOIN_CHARACTER: string = '\n';

const OPTIONS: Options = {
  bol: {
    alias: 'b',
    default: true,
    describe: 'boolean example',
    type: 'boolean',
  },
  nbr: {
    alias: 'n',
    default: 10,
    describe: 'number example',
    type: 'number',
  },
  str: {
    alias: 's',
    default: 'example-string',
    describe: 'string example',
    type: 'string',
  },
};

const PARAMS: Params = {
  bol: true,
  str: 'example-string',
  nbr: 10,
};

const CLI: typeof process.argv = [
  'EXECUTABLE',
  Command.CONSTANTS.COMMANDS_SEPARATOR,
  ...Object.keys(PARAMS).reduce((output, key) => [
    ...output,
    `--${key}`,
    PARAMS[key],
  ], [] as Array<string>),
];

const FIXTURE_CONSTANTS = {
  CLI,
  JOIN_CHARACTER,
  OPTIONS,
  PARAMS,
};

export type FixtureOptions = typeof OPTIONS;

export type FixtureParams = typeof PARAMS;

class CommandFixture extends Command<FixtureOptions, FixtureParams> {
  public prepare(results: CommandFixtureProcessOutput): Promise<string> {
    return Promise.resolve(results.join(CommandFixture.FIXTURE.JOIN_CHARACTER));
  }

  public process(): Promise<CommandFixtureProcessOutput> {
    return Promise.resolve(
      Object.values(CommandFixture.FIXTURE.PARAMS)
        .map((value) => `${value}`),
    );
  }

  public static get FIXTURE(): typeof FIXTURE_CONSTANTS {
    return structuredClone(FIXTURE_CONSTANTS);
  }
}

export default CommandFixture;
