import yargs from 'yargs';

import Packages from './packages/index.js'

import { emit } from './utils.js';
import CONSTANTS from './constants.js';

const packages = async () => {
  const {
    changed,
    dependents,
    increment,
    packages,
  } = yargs(process.argv.slice(2)).options({
    changed: {
      alias: 'c',
      describe: 'use changed packages since the provided git ref',
      type: 'string',
    },
    dependents: {
      alias: 'd',
      describe: 'use dependent packages of the target packages',
      type: 'boolean',
    },
    increment: {
      alias: 'i',
      describe: 'increment the target packages by the provided versions: [major, minor, patch]',
      type: 'array',
    },
    packages: {
      alias: 'p',
      describe: 'use provided packages as the target packages',
      type: 'array',
    },
  }).parseSync();

  const formattedIncrement = (increment && Array.isArray(increment) && increment.length === 3)
    && { major: increment[0], minor: increment[1], patch: increment[2] }
  

  const packagesObj = new Packages({
    changed: changed?.length > 0 ? changed : changed?.length === 0,
    dependents,
    increment: formattedIncrement,
    packageScope: CONSTANTS.PACKAGE_SCOPE,
    packagesPath: CONSTANTS.PACKAGES_PATH,
    packages,
  });

  const targets = await packagesObj.getTargets();

  emit(JSON.stringify(targets));
};

packages();
