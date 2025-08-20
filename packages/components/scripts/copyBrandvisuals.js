const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const brandvisualsFolder = path.dirname(require.resolve('@momentum-design/brand-visuals/dist/manifest.json'));
const brandvisualsExampleFile = require.resolve(
  '@momentum-design/brand-visuals/dist/logos/ts/webex-logo-lockup-dark-color-gradient-horizontal.ts',
);

const root = process.cwd();
const playwrightPublicDist = path.join(root, 'playwright-temp', 'brandvisuals', 'index.ts');
const storybookPublicDist = path.join(root, 'config', 'storybook', 'public', 'brandvisuals');

const copyToDest = (srcDir, destDir) => {
  try {
    fse.copySync(srcDir, destDir, { overwrite: true });
  } catch (err) {
    console.error(err);
  }
};

// only copy one brand visuals file to use for all screenshots etc
if (process.argv[2] === 'playwright') {
  copyToDest(brandvisualsExampleFile, playwrightPublicDist);
  console.log(chalk.gray('Brandvisual Example File has been copied successfully to Playwright public!'));
  return;
}

if (process.argv[2] === 'storybook') {
  copyToDest(brandvisualsFolder, storybookPublicDist);
  console.log(chalk.gray('Brandvisuals have been copied successfully to Storybook public!'));
  return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));
