// AI-Assisted
// @ts-nocheck

/**
 * Post-build tests for animation tokens.
 *
 * NOTE: Native platform outputs (Android/iOS) will be addressed in a future PR.
 */

const nodePath = require('path');
const fs = require('fs');

const { kebabCase: toKebabCase } = require('lodash');

const distBase = nodePath.join(__dirname, '../../dist');
const srcBase = nodePath.join(__dirname, '../motion');

const CSS_FILE = nodePath.join(distBase, 'css/motion/animation.css');
const CORE_CSS_FILE = nodePath.join(distBase, 'css/motion/complete.css');
const SRC_FILE = nodePath.join(srcBase, 'animation.json');

describe('Animation tokens (post-build)', () => {
  let css;
  let coreCss;
  let source;

  beforeAll(() => {
    css = fs.readFileSync(CSS_FILE, 'utf8');
    coreCss = fs.readFileSync(CORE_CSS_FILE, 'utf8');
    source = JSON.parse(fs.readFileSync(SRC_FILE, 'utf8')).animation;
  });

  it('CSS output file should exist', () => {
    expect(fs.existsSync(CSS_FILE)).toBe(true);
  });

  it('CSS output should use the correct .mds-animation selector', () => {
    expect(css).toContain('.mds-animation {');
  });

  it('CSS output should contain the do-not-edit header', () => {
    expect(css).toContain('Do not edit directly');
  });

  it('transition tokens should emit --mds-transition-* variables', () => {
    const transitionTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'transition' || t.type === 'transitionCompound',
    );
    expect(transitionTokens.length).toBeGreaterThan(0);
    transitionTokens.forEach(([name]) => {
      expect(css).toContain(`--mds-transition-${toKebabCase(name)}:`);
    });
  });

  it('keyframe tokens should emit --mds-animation-* variables', () => {
    const keyframeTokens = Object.entries(source).filter(
      ([, t]) => t.type === 'keyframe' || t.type === 'keyframeCompound',
    );
    expect(keyframeTokens.length).toBeGreaterThan(0);
    keyframeTokens.forEach(([name]) => {
      expect(css).toContain(`--mds-animation-${toKebabCase(name)}:`);
    });
  });

  it('keyframe tokens should have matching @keyframes block', () => {
    const keyframeTokens = Object.entries(source).filter(([, t]) => t.type === 'keyframe');
    expect(keyframeTokens.length).toBeGreaterThan(0);
    keyframeTokens.forEach(([name]) => {
      expect(css).toContain(`@keyframes mds-animation-${toKebabCase(name)}`);
    });
  });

  it('@keyframes name in variable value should match the @keyframes block name', () => {
    const keyframeTokens = Object.entries(source).filter(([, t]) => t.type === 'keyframe');
    keyframeTokens.forEach(([name]) => {
      const kfName = `mds-animation-${toKebabCase(name)}`;
      const varLineMatch = css.match(new RegExp(`--mds-animation-${toKebabCase(name)}:\\s*([^;]+);`));
      expect(varLineMatch).not.toBeNull();
      // The keyframe name must be last in the animation shorthand
      expect(varLineMatch[1].trim()).toMatch(new RegExp(`\\b${kfName}$`));
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
      // Every var() reference must be well-formed: var(--identifier)
      const varCalls = line.match(/var\([^)]*\)/g) || [];
      varCalls.forEach((call) => {
        expect(call).toMatch(/^var\(--[\w-]+\)$/);
      });
    });
  });

  it('total CSS variable count should match total token count in source', () => {
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    const sourceTokenCount = Object.keys(source).length;
    expect(varLines.length).toBe(sourceTokenCount);
  });

  it('no variables should use incorrect prefix (mds-motion-)', () => {
    const varLines = css.split('\n').filter((l) => l.trim().startsWith('--'));
    varLines.forEach((line) => {
      expect(line.trim()).not.toMatch(/^--mds-motion-/);
    });
  });

  it('every {motion.*} ref in animation.json must resolve to a var in complete.css', () => {
    const TOKEN_REF_PATTERN = /^\{(.+)\}$/;
    const fields = ['duration', 'easing', 'delay'];

    Object.values(source).forEach((token) => {
      fields
        .filter((field) => !!token[field])
        .forEach((field) => {
          const match = token[field].match(TOKEN_REF_PATTERN);
          if (!match) return;
          const varName = `--mds-${match[1].replace(/\./g, '-')}`;
          expect(coreCss).toContain(`${varName}:`);
        });
    });
  });
});
// End AI-Assisted
