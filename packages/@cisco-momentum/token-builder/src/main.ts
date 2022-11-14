import yargs from 'yargs';

import { Logger, generateMetadata } from '@cisco-momentum/telemetry';

import { TokenBuilder } from './models';

const logger = Logger.child(generateMetadata('token-builder', 'main.ts'));

const main = (): void => {
  logger.info('hello');
  logger.record('record');
  const args = yargs(process.argv.slice(2)).options({
    config: { type: 'string' },
    input: { type: 'string' },
    output: { type: 'string' },
  }).parseSync();

  const { config, input, output } = args;

  if (!config) {
    throw new Error('argument "config" must be defined');
  }

  if (!input) {
    throw new Error('argument "input" must be defined');
  }

  if (!output) {
    throw new Error('argument "output" must be defined');
  }

  TokenBuilder.build({ config, input, output });
};

main();
