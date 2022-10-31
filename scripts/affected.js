#!/usr/bin/env node

import yargs from 'yargs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { exec } = require('node:child_process');

const args = yargs(process.argv.slice(2)).options({
  command: { type: 'string' },
  ref: { type: 'string' }
}).parseSync();

exec(`yarn workspaces list ${args.ref ? `--since=${args.ref}` : ''} --json`, (error, output) => {
  if (error) {
    console.error(error);
  }
  console.log(`find affected output:\n${output}`);
  const result = output
    .split('\n')
    .filter((out) => !!out).map((out) => JSON.parse(out).name)
    .filter((parsed) => parsed.startsWith('@momentum-design')) // should we do the tasks on root as well ?
    .toString();

  exec(`yarn workspaces foreach --from '{${result}}' run ${args.command}`, (error, output) => {
    if (error) {
      console.error(error);
    }
    console.log(`run ${args.command} on affected:\n${output}`);
  });
});
