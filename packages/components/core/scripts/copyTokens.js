const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const complete = require.resolve('@momentum-design/tokens/dist/css/core/complete.css');
const dark = require.resolve('@momentum-design/tokens/dist/css/theme/webex/dark-stable.css');
const light = require.resolve('@momentum-design/tokens/dist/css/theme/webex/light-stable.css');

const root = process.cwd();
const playwrightPublicDist = path.join(root, 'config', 'playwright', 'public', 'dist');


const copyToFolder = (src, destFolder) => {
    const dest = path.join(destFolder, path.basename(src));
    fs.copyFile(src, dest, (err) => {
        if (err) throw err;
    });
}

copyToFolder(complete, playwrightPublicDist);
copyToFolder(dark, playwrightPublicDist);
copyToFolder(light, playwrightPublicDist);

console.log(chalk.gray('Tokens have been copied successfully!'));