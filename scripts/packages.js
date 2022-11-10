import yargs from 'yargs';
import { exec } from 'node:child_process';

/**
 * Emit an output directly to the CLI.
 *
 * @param {string} output details to be emitted when this method is called.
 * @returns {void}
 */
const emit = (output) => process.stdout.write(output);

/**
 * Remove duplicates from a provided array of packages.
 *
 * @param {Array<string>} packages List of packages to remove duplications from.
 * @returns {Array<string>} Packages with all duplications removed.
 */
const removeDuplicatePackages = (packages) => packages.filter((item, index, self) => self.indexOf(item) === index);

/**
 * Convert a `yarn list` command output into a collection of packages.
 *
 * @param {string} results Output from running `yarn list`.
 * @returns {Array<string>} An array of packages based on the provided `yarn list` results.
 */
const getPackagesFromYarnList = (results) => results.split('\n')
  .filter((line) => !!line)
  .map((line) => JSON.parse(line).name)
  .filter((name) => name.startsWith('@cisco-momentum'));

/**
 * Convert a `yarn why` command output into a collection of packages.
 *
 * @param {string} results Output from running `yarn why`.
 * @returns {Array<string>} An array of packages based on the provided `yarn why` results.
 */
const getPackagesFromYarnWhy = (results) => results.split('\n')
  .filter((line) => !!line)
  .map((line) => `@${JSON.parse(line).value.split('@')[1]}`)
  .filter((name) => name.startsWith('@cisco-momentum'));

/**
 * Get all packages scoped within this project.
 *
 * @returns {Array<string>} All packages scoped within this project.
 */
const getAllPackages = () => new Promise((resolve, reject) => {
  exec('yarn workspaces list --json', (error, results) => {
    if (error) {
      reject(error);
    }

    const packages = getPackagesFromYarnList(results);

    resolve(packages);
  });
});

/**
 * Get a list of changed packages since the provided ref.
 *
 * @param {string} [ref] The git ref to use when filtering changes.
 * @returns {Array<string>} Packages that have changed since the provided ref.
 */
const getChangedPackages = (ref) => new Promise((resolve, reject) => {
  exec(`yarn workspaces list ${ref ? `--since=${ref}` : ''} --json`, (error, results) => {
    if (error) {
      reject(error);
    }

    const packages = getPackagesFromYarnList(results);

    resolve(packages);
  });
});

/**
 * Get a list of all packages that depend on the provided target packages.
 *
 * @param {Array<string>} targetPackages Packages to find dependent packages of.
 * @returns {Array<string>} Packages that depend on the provided target packages.
 */
const getDependentPackages = (targetPackages) => {
  const whys = targetPackages.map((targetPackage) => new Promise((resolve, reject) => {
    exec(`yarn why ${targetPackage} --json`, (error, results) => {
      if (error) {
        reject(error);
      }

      const packages = getPackagesFromYarnWhy(results);

      resolve(packages);
    });
  }));

  return Promise.all(whys)
    .then((packageGroups) => packageGroups.reduce((packages, packageGroup) => [
      ...packages,
      ...packageGroup,
    ], []));
};

/**
 * Main executor for this script.
 *
 * @returns {void}
 */
const main = () => {
  const { all, changed, dependent, ref } = yargs(process.argv.slice(2)).options({
    all: { type: 'boolean' },
    changed: { type: 'boolean' },
    dependent: { type: 'boolean' },
    ref: { type: 'string' },
  }).parseSync();

  const promises = [];

  if (all) {
    promises.push(getAllPackages());
  }

  if (changed) {
    if (dependent) {
      promises.push(
        getChangedPackages(ref),
        getChangedPackages(ref).then((changed) => getDependentPackages(changed)),
      );
    } else {
      promises.push(getChangedPackages(ref));
    }
  }

  return Promise.all(promises)
    .then((packageGroups) => packageGroups.reduce((packages, packageGroup) => [
      ...packages,
      ...packageGroup
    ], []))
    .then((packages) => removeDuplicatePackages(packages))
    .then((packages) => JSON.stringify(packages))
    .then((output) => emit(output));
};

main().catch(() => process.exit(1));
