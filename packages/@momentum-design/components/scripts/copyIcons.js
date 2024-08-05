
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const iconsFolder = path.dirname(require.resolve('@momentum-design/icons/dist/manifest.json'));
const root = process.cwd();
const playwrightPublicDist = path.join(root, 'config', 'playwright', 'public', 'dist', 'icons');
const storybookPublicDist = path.join(root, 'config', 'storybook', 'public', 'icons');

const copyFolderToDest = (srcDir, destDir) => {
    try {
        fse.copySync(srcDir, destDir, { overwrite: true })
    } catch (err) {
        console.error(err)
    }
}

if (process.argv[2] === 'playwright') {
    copyFolderToDest(iconsFolder, playwrightPublicDist);
    console.log(chalk.gray('Icons have been copied successfully to Playwright public!'));
    return;
}

if (process.argv[2] === 'storybook') {
    copyFolderToDest(iconsFolder, storybookPublicDist);
    console.log(chalk.gray('Icons have been copied successfully to Storybook public!'));
    return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));