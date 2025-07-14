// create a figmaConfig.json file for the Figma plugin
const fs = require('fs');
const path = require('path');

const input = require(path.posix.join('../', process.argv[2]));
const figmaConfig = input();

const outputPath = path.posix.join(__dirname, '../', process.argv[3]);
fs.writeFileSync(outputPath, JSON.stringify(figmaConfig, null, 2), 'utf8');

console.log(`Figma config file created at ${outputPath}`);