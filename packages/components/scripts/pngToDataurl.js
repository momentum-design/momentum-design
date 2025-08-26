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

const inputFolder = path.resolve(__dirname, '../config/playwright/setup/pngFixtures');
const outputFile = path.resolve(__dirname, '../config/playwright/setup/utils/imageFixtures.ts');

// Load existing fixtures if any
let existingFixtures = {};
if (fs.existsSync(outputFile)) {
  try {
    const content = fs.readFileSync(outputFile, 'utf8');
    const match = content.match(/export const imageFixtures = (.*) as const;/s);
    if (match) {
      existingFixtures = JSON.parse(match[1]);
    }
  } catch {
    console.warn('⚠️ Could not parse existing imageFixtures.ts, try again...');
  }
}

// Get PNG files
const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.png'));
const newFixtures = { ...existingFixtures };
let changed = false;

files.forEach(file => {
  const key = file.replace(/\.png$/, '');
  if (!(key in newFixtures)) {
    // Only read + encode if this file is not already in fixtures
    const filePath = path.join(inputFolder, file);
    const buffer = fs.readFileSync(filePath);
    const base64 = buffer.toString('base64');
    newFixtures[key] = `data:image/png;base64,${base64}`;
    changed = true;
  }
});

// Remove fixtures for deleted files
Object.keys(newFixtures).forEach(key => {
  if (!files.includes(`${key}.png`)) {
    delete newFixtures[key];
    changed = true;
  }
});

if (changed) {
  const output = `/**
 * AUTO-GENERATED FILE – DO NOT EDIT
 * Run \`yarn generate:image-fixtures\` to regenerate.
 */

export const imageFixtures = ${JSON.stringify(newFixtures, null, 2)} as const;
`;
  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`✅ Updated imageFixtures.ts with ${Object.keys(newFixtures).length} image(s).`);
} else {
  console.log('ℹ️ No changes detected, imageFixtures.ts is up-to-date.');
}