const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const root = process.cwd();
const playwrightPublicDist = path.join(root, 'playwright-temp', 'brandvisuals', 'index.ts');
const playwrightPublicAssets = path.join(root, 'config', 'playwright', 'public', 'dist', 'brandvisuals');
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
  const brandvisualsExampleFile = require.resolve(
    '@momentum-design/brand-visuals/dist/ts/webex-symbol-common-color-gradient.ts',
  );

  copyToDest(brandvisualsExampleFile, playwrightPublicDist);
  console.log(chalk.gray('Brandvisual Example File has been copied successfully to Playwright public!'));

  // the whole set is also served, so the BrandVisualProvider url mode can be tested against
  // real assets rather than the single file the dynamic import is rewritten to
  const brandvisualsFolder = path.dirname(require.resolve('@momentum-design/brand-visuals/dist/manifest.json'));
  copyToDest(brandvisualsFolder, playwrightPublicAssets);
  console.log(chalk.gray('Brandvisuals have been copied successfully to Playwright public!'));
  return;
}

if (process.argv[2] === 'storybook') {
  const brandvisualsFolder = path.dirname(require.resolve('@momentum-design/brand-visuals/dist/manifest.json'));

  copyToDest(brandvisualsFolder, storybookPublicDist);
  console.log(chalk.gray('Brandvisuals have been copied successfully to Storybook public!'));
  return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));
