
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const root = process.cwd();
const fontsFolder = path.join(root, '..', 'assets', 'fonts', 'dist');
const playwrightPublicDist = path.join(root, 'config', 'playwright', 'public', 'dist', 'fonts');
const storybookPublicDist = path.join(root, 'config', 'storybook', 'public', 'fonts');

const copyFolderToDest = (srcDir, destDir) => {
    try {
        fse.copySync(srcDir, destDir, { overwrite: true })
    } catch (err) {
        console.error(err)
    }
}

if (process.argv[2] === 'playwright') {
    copyFolderToDest(fontsFolder, playwrightPublicDist);
    console.log(chalk.gray('Fonts have been copied successfully to Playwright public!'));
    return;
}

if (process.argv[2] === 'storybook') {
    copyFolderToDest(fontsFolder, storybookPublicDist);
    console.log(chalk.gray('Fonts have been copied successfully to Storybook public!'));
    return;
}

console.log(chalk.red('No type has been provided. Use "playwright" or "storybook" as a argument!'));