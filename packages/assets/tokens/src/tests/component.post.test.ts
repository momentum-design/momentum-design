// AI-Assisted
// @ts-nocheck

/**
 * Post-build tests for component motion tokens.
 *
 * Validates that dist/css/motion/component.css is correctly generated
 * from src/motion/component.json and src/motion/animation.json.
 *
 * Also validates cross-file referential integrity:
 * - Every animation name in component.json must exist in animation.json
 */

const nodePath = require('path');
const fs = require('fs');
const kebabCase = require('lodash/kebabCase');
const { stateToSelector } = require('../../scripts/build-component-motion-css');

const distBase = nodePath.join(__dirname, '../../dist');
const srcBase = nodePath.join(__dirname, '../motion');

const CSS_FILE = nodePath.join(distBase, 'css/motion/component.css');
const SRC_COMPONENT = nodePath.join(srcBase, 'component.json');
const SRC_ANIMATION = nodePath.join(srcBase, 'animation.json');

describe('Component motion tokens (post-build)', () => {
  let css;
  let componentSource;
  let animationSource;

  beforeAll(() => {
    css = fs.readFileSync(CSS_FILE, 'utf8');
    componentSource = JSON.parse(fs.readFileSync(SRC_COMPONENT, 'utf8')).component;
    animationSource = JSON.parse(fs.readFileSync(SRC_ANIMATION, 'utf8')).animation;
  });

  it('CSS output file should exist', () => {
    expect(fs.existsSync(CSS_FILE)).toBe(true);
  });

  it('CSS output should contain the do-not-edit header', () => {
    expect(css).toContain('Do not edit directly');
  });

  it('every component entry should produce a CSS rule in the output', () => {
    Object.entries(componentSource).forEach(([componentName, entries]) => {
      entries.forEach((entry) => {
        const { part, state, animation } = entry;
        const stateStr = (state || []).map(stateToSelector).join('');
        const hostSelector = `${componentName}${stateStr}`;
        const partSelector = `${componentName}${stateStr}::part(${part})`;
        const selector = part === ':host' ? hostSelector : partSelector;
        expect(css).toContain(selector);

        const token = animationSource[animation];
        const isKeyframe = token && (token.type === 'keyframe' || token.type === 'keyframeCompound');
        const cssVar = isKeyframe
          ? `var(--mds-animation-${kebabCase(animation)})`
          : `var(--mds-transition-${kebabCase(animation)})`;
        expect(css).toContain(cssVar);
      });
    });
  });

  // ── Referential integrity ────────────────────────────────────────────────────

  it('every animation name in component.json must exist in animation.json', () => {
    Object.values(componentSource).forEach((entries) => {
      entries.forEach((entry) => {
        expect(animationSource).toHaveProperty(entry.animation, expect.anything());
      });
    });
  });

  it('total rule count in CSS should match total entry count in source', () => {
    const totalEntries = Object.values(componentSource).reduce((sum, entries) => sum + entries.length, 0);
    // Each entry produces one rule block starting with the selector line
    const ruleCount = (css.match(/^[a-z]/gm) || []).length;
    expect(ruleCount).toBe(totalEntries);
  });

  it('no CSS declaration should have an empty or unresolved value', () => {
    const declLines = css.split('\n').filter((l) => l.trim().match(/^(animation|transition):/));
    expect(declLines.length).toBeGreaterThan(0);
    declLines.forEach((line) => {
      // Must have a non-empty value after the colon
      expect(line).toMatch(/(animation|transition):\s*.+;/);
      // Value must be a well-formed var() call
      const varCalls = line.match(/var\([^)]*\)/g) || [];
      varCalls.forEach((call) => {
        expect(call).toMatch(/^var\(--[\w-]+\)$/);
      });
    });
  });

  it('no declarations should use an incorrect CSS property prefix', () => {
    const declLines = css.split('\n').filter((l) => l.trim().match(/^(animation|transition):/));
    declLines.forEach((line) => {
      // animation lines must reference --mds-animation-*, transition lines --mds-transition-*
      if (line.trim().startsWith('animation:')) {
        expect(line).toContain('var(--mds-animation-');
      } else {
        expect(line).toContain('var(--mds-transition-');
      }
    });
  });
});
// End AI-Assisted
