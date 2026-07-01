// AI-Assisted
// @ts-nocheck
const nodePath = require('path');
const fs = require('fs');

const distBase = nodePath.join(__dirname, '../../dist');

const PLATFORM_FILES = {
  css: nodePath.join(distBase, 'css/motion/complete.css'),
  scss: nodePath.join(distBase, 'scss/motion/complete.scss'),
  json: nodePath.join(distBase, 'json/motion/complete.json'),
  jsonMinimal: nodePath.join(distBase, 'json-minimal/motion/complete.json'),
  xml: nodePath.join(distBase, 'resources/motion/complete.xml'),
  swift: nodePath.join(distBase, 'ios/motion/complete.swift'),
};

const TOKEN_COUNT_PATTERNS = {
  css: /--mds-motion-/g,
  scss: /\$mds-motion-/g,
  xml: /<string name="/g,
  swift: /public static let /g,
};

const countLeaves = (obj) => {
  let count = 0;
  Object.values(obj).forEach((val) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      count += countLeaves(val);
    } else {
      count += 1;
    }
  });
  return count;
};

describe('Motion tokens (post-build)', () => {
  it('all platform output files should exist', () => {
    Object.entries(PLATFORM_FILES).forEach(([, filePath]) => {
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('all platform outputs should have the same token count', () => {
    const counts = {};

    // CSS
    const css = fs.readFileSync(PLATFORM_FILES.css, 'utf8');
    counts.css = (css.match(TOKEN_COUNT_PATTERNS.css) || []).length;

    // SCSS
    const scss = fs.readFileSync(PLATFORM_FILES.scss, 'utf8');
    counts.scss = (scss.match(TOKEN_COUNT_PATTERNS.scss) || []).length;

    // JSON-minimal
    const jsonMinimal = JSON.parse(fs.readFileSync(PLATFORM_FILES.jsonMinimal, 'utf8'));
    counts.jsonMinimal = countLeaves(jsonMinimal);

    // JSON full (count by "name" field)
    const jsonFull = fs.readFileSync(PLATFORM_FILES.json, 'utf8');
    counts.json = (jsonFull.match(/"name":/g) || []).length;

    // Android XML
    const xml = fs.readFileSync(PLATFORM_FILES.xml, 'utf8');
    counts.xml = (xml.match(TOKEN_COUNT_PATTERNS.xml) || []).length;

    // iOS Swift
    const swift = fs.readFileSync(PLATFORM_FILES.swift, 'utf8');
    counts.swift = (swift.match(TOKEN_COUNT_PATTERNS.swift) || []).length;

    const uniqueCounts = [...new Set(Object.values(counts))];
    expect(uniqueCounts).toHaveLength(1);
    expect(uniqueCounts[0]).toBeGreaterThan(0);
  });

  it('CSS output should have correct selector', () => {
    const css = fs.readFileSync(PLATFORM_FILES.css, 'utf8');
    expect(css).toContain('.mds-motion {');
  });

  it('CSS variables should use mds-motion prefix', () => {
    const css = fs.readFileSync(PLATFORM_FILES.css, 'utf8');
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    varLines.forEach((line) => {
      expect(line.trim()).toMatch(/^--mds-motion-/);
    });
  });

  it('no platform output should have empty values', () => {
    const jsonMinimal = JSON.parse(fs.readFileSync(PLATFORM_FILES.jsonMinimal, 'utf8'));
    const checkNoEmpty = (obj, prefix = '') => {
      Object.entries(obj).forEach(([key, val]) => {
        const fullPath = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'object' && val !== null) {
          checkNoEmpty(val, fullPath);
        } else {
          expect(val).not.toBe('');
          expect(val).not.toBeNull();
          expect(val).not.toBeUndefined();
        }
      });
    };
    checkNoEmpty(jsonMinimal);
  });
});
// End AI-Assisted
