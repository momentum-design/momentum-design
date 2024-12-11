const fs = require('fs');
const path = require('path');
const glob = require('glob');

const distCSSFolder = path.posix.join(__dirname, '../dist/css');
const componentsFolder = path.posix.join(distCSSFolder, '/components');

const darkTheme = glob.sync(path.posix.join(distCSSFolder, '/theme/webex/dark-stable.css'));
const lightTheme = glob.sync(path.posix.join(distCSSFolder, '/theme/webex/light-stable.css'));
const effects = glob.sync(path.posix.join(distCSSFolder, '/effect/*.css'));
const elevation = glob.sync(path.posix.join(distCSSFolder, '/elevation/*.css'));
const typography = glob.sync(path.posix.join(distCSSFolder, '/typography/*.css'));

const tokens = [...darkTheme, ...lightTheme, ...typography, ...effects, ...elevation ];

const allTokens = tokens.reduce((acc, token) => {
    return acc + fs.readFileSync(token, 'utf8');
    }
, '');

// remove comments and empty lines
const allTokensWithoutComments = allTokens.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,'');
const allTokensClean = allTokensWithoutComments.replace(/^\s*\n/gm, '');

// create folder if it doesn't exist
if (!fs.existsSync(path.posix.join(componentsFolder))) {
    fs.mkdirSync(path.posix.join(componentsFolder));
}
fs.writeFileSync(path.posix.join(componentsFolder, '/complete.css'), allTokensClean);

