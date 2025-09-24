const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const illustrationsFolder = path.dirname(require.resolve('@momentum-design/illustrations/dist/manifest.json'));
const root = process.cwd();
const playwrightPublicDist = path.join(root, 'config', 'playwright', 'public', 'dist', 'illustrations');
const storybookPublicDist = path.join(root, 'config', 'storybook', 'public', 'illustrations');

const copyFolderToDest = (srcDir, destDir) => {
  try {
    fse.copySync(srcDir, destDir, { overwrite: true });
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === 'playwright') {
  copyFolderToDest(illustrationsFolder, playwrightPublicDist);
  console.log(chalk.gray('Illustrations have been copied successfully to Playwright public!'));
  return;
}

if (process.argv[2] === 'storybook') {
  copyFolderToDest(illustrationsFolder, storybookPublicDist);
  console.log(chalk.gray('Illustrations have been copied successfully to Storybook public!'));
  return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));
