const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const animationFolder = path.dirname(require.resolve('@momentum-design/animations/dist/manifest.json'));
const animationExampleFile = require.resolve('@momentum-design/animations/dist/lottie/webex_logo_loop.json');

const root = process.cwd();
const playwrightPublicDist = path.join(root, 'playwright-temp', 'assets', 'animations', 'animation.json');
const storybookPublicDist = path.join(root, 'config', 'storybook', 'public', 'animations');

const copyFolderToDest = (srcDir, destDir) => {
  try {
    fse.copySync(srcDir, destDir, { overwrite: true, recursive: true });
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === 'playwright') {
  copyFolderToDest(animationExampleFile, playwrightPublicDist);
  console.log(chalk.gray('Icons have been copied successfully to Playwright public!'));
  return;
}

if (process.argv[2] === 'storybook') {
  copyFolderToDest(animationFolder, storybookPublicDist);
  console.log(chalk.gray('Icons have been copied successfully to Storybook public!'));
  return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));
