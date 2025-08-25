/**
 * AUTO-GENERATED FILE CREATOR
 *
 * This script reads all `.png` files inside `pngFixtures/`,
 * converts them into base64 data URLs, and writes them into
 * `imageFixtures.ts` for use in Storybook + Playwright tests.
 *
 * Run with: `yarn generate:image-fixtures`
 */

const fs = require('fs');
const path = require('path');

const inputFolder = path.resolve(__dirname, './pngFixtures');
const outputFile = path.resolve(__dirname, './imageFixtures.ts');

// Get all PNG files
const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.png'));
const dataUrls = {};

files.forEach(file => {
  const filePath = path.join(inputFolder, file);
  const buffer = fs.readFileSync(filePath);
  const base64 = buffer.toString('base64');
  const key = file.replace(/\.png$/, '');

  dataUrls[key] = `data:image/png;base64,${base64}`;
});

// Generate TS file content
const output = `/**
 * AUTO-GENERATED FILE – DO NOT EDIT
 * Run \`yarn generate:image-fixtures\` to regenerate.
 */

export const imageFixtures = ${JSON.stringify(dataUrls, null, 2)} as const;
`;

// Write to file
fs.writeFileSync(outputFile, output, 'utf8');

console.log(`✅ Generated imageFixtures.ts with ${files.length} image(s).`);
