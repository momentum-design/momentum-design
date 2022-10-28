import yargs from 'yargs';

import { Build } from './commands';
import type { Arguments } from './common';

const run = (args: Arguments): void => {
  if (args.build) {
    const build = new Build(...args.build as Array<string>);

    build.run();

    return;
  }

  throw new Error('provided arguments are not valid');
};

const args = yargs(process.argv.slice(2)).options({
  build: { type: 'array' },
}).parseSync();

run(args);
