// AI-Assisted
// @ts-nocheck

/**
 * Post-build tests for animation tokens.
 *
 * NOTE: Unlike motion.post.test.ts, this test only validates CSS output.
 * animation.json is processed by a custom Node script (build-animation-css.js),
 * not Style Dictionary — so there are no SCSS, XML, Swift, or JSON platform outputs.
 * Native platform outputs (Android/iOS) will be addressed in a future PR.
 */

const nodePath = require('path');
const fs = require('fs');

const distBase = nodePath.join(__dirname, '../../dist');
const srcBase = nodePath.join(__dirname, '../motion');

const CSS_FILE = nodePath.join(distBase, 'css/motion/animation.css');
const SRC_FILE = nodePath.join(srcBase, 'animation.json');

describe('Animation tokens (post-build)', () => {
  let css;
  let source;

  beforeAll(() => {
    css = fs.readFileSync(CSS_FILE, 'utf8');
    source = JSON.parse(fs.readFileSync(SRC_FILE, 'utf8')).animation;
  });

  it('CSS output file should exist', () => {
    expect(fs.existsSync(CSS_FILE)).toBe(true);
  });

  it('CSS output should use the correct .mds-motion selector', () => {
    expect(css).toContain('.mds-motion {');
  });

  it('CSS output should contain the do-not-edit header', () => {
    expect(css).toContain('Do not edit directly');
  });

  it('transition tokens should emit --mds-transition-* variables', () => {
    const transitionTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'transition' || t.type === 'compoundTransitions',
    );
    expect(transitionTokens.length).toBeGreaterThan(0);
    transitionTokens.forEach(([name]) => {
      const kebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      expect(css).toContain(`--mds-transition-${kebab}:`);
    });
  });

  it('keyframe tokens should emit --mds-animation-* variables', () => {
    const keyframeTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'keyframe' || t.type === 'compoundKeyframes',
    );
    expect(keyframeTokens.length).toBeGreaterThan(0);
    keyframeTokens.forEach(([name]) => {
      const kebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      expect(css).toContain(`--mds-animation-${kebab}:`);
    });
  });

  it('keyframe tokens should have matching @keyframes block', () => {
    const keyframeTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'keyframe',
    );
    expect(keyframeTokens.length).toBeGreaterThan(0);
    keyframeTokens.forEach(([name]) => {
      const kebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      expect(css).toContain(`@keyframes mds-animation-${kebab}`);
    });
  });

  it('@keyframes name in variable value should match the @keyframes block name', () => {
    const keyframeTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'keyframe',
    );
    keyframeTokens.forEach(([name]) => {
      const kebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const kfName = `mds-animation-${kebab}`;
      // The variable value should start with the keyframe name
      const varLineMatch = css.match(new RegExp(`--mds-animation-${kebab}:\\s*([^;]+);`));
      expect(varLineMatch).not.toBeNull();
      expect(varLineMatch[1].trim()).toMatch(new RegExp(`^${kfName}\\b`));
    });
  });

  it('no CSS variable should have an empty or unresolved value', () => {
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    expect(varLines.length).toBeGreaterThan(0);
    varLines.forEach((line) => {
      // Should not be empty after the colon
      expect(line).toMatch(/--[\w-]+:\s*.+;/);
      // Should not contain unresolved token refs
      expect(line).not.toContain('{motion.');
    });
  });

  it('total CSS variable count should match total token count in source', () => {
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    const sourceTokenCount = Object.keys(source).length;
    expect(varLines.length).toBe(sourceTokenCount);
  });

  it('no variables should use incorrect prefix (mds-motion-)', () => {
    // Ensure we don't accidentally emit core motion token names
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    varLines.forEach((line) => {
      expect(line.trim()).not.toMatch(/^--mds-motion-/);
    });
  });
});
// End AI-Assisted
