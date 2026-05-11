// AI-Assisted
// @ts-nocheck

/**
 * Unit tests for the animation CSS generator (build-animation-motion-css.js).
 * Tests the pure helper functions in isolation, without file system access.
 */

const {
  resolveRef,
  resolveToken,
  buildKeyframeBlock,
  buildTransitionValue,
} = require('../../scripts/build-animation-motion-css');

describe('Animation CSS generator — unit tests', () => {
  describe('resolveRef', () => {
    it('returns the raw value when ref is not a token reference', () => {
      expect(resolveRef('100ms')).toBe('100ms');
    });

    it('converts a token reference to a CSS var() expression', () => {
      expect(resolveRef('{motion.duration.instant}')).toBe('var(--mds-motion-duration-instant)');
    });

    it('converts a nested token path to a flat CSS var() name', () => {
      expect(resolveRef('{motion.easing.standard}')).toBe('var(--mds-motion-easing-standard)');
    });

    it('returns a var() even for unknown token paths — runtime resolution', () => {
      expect(resolveRef('{motion.duration.unknown}')).toBe('var(--mds-motion-duration-unknown)');
    });
  });

  describe('resolveToken', () => {
    it('converts duration, easing and delay refs to CSS var() expressions', () => {
      const token = {
        type: 'transition',
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        properties: ['opacity'],
      };
      const resolved = resolveToken(token);
      expect(resolved.duration).toBe('var(--mds-motion-duration-instant)');
      expect(resolved.easing).toBe('var(--mds-motion-easing-standard)');
      expect(resolved.delay).toBe('var(--mds-motion-delay-none)');
    });

    it('does not crash for compound tokens that have no duration/easing/delay', () => {
      const token = {
        type: 'transitionCompound',
        animations: ['buttonBackground'],
        composition: 'parallel',
      };
      const resolved = resolveToken(token);
      expect(resolved.duration).toBeUndefined();
      expect(resolved.easing).toBeUndefined();
      expect(resolved.delay).toBeUndefined();
    });
  });

  describe('buildTransitionValue', () => {
    it('builds a single-property transition shorthand', () => {
      const token = {
        duration: '100ms',
        easing: 'ease',
        delay: '0ms',
        properties: ['opacity'],
      };
      expect(buildTransitionValue(token)).toBe('opacity 100ms ease 0ms');
    });

    it('joins multiple properties with a comma', () => {
      const token = {
        duration: '200ms',
        easing: 'ease',
        delay: '0ms',
        properties: ['opacity', 'transform'],
      };
      expect(buildTransitionValue(token)).toBe('opacity 200ms ease 0ms, transform 200ms ease 0ms');
    });
  });

  describe('buildKeyframeBlock', () => {
    it('builds a valid @keyframes block', () => {
      const token = {
        keyframes: [{ propertyName: 'opacity', from: '0', to: '1' }],
      };
      const result = buildKeyframeBlock('mds-animation-fade-in', token);
      expect(result).toContain('@keyframes mds-animation-fade-in');
      expect(result).toContain('from { opacity: 0; }');
      expect(result).toContain('to { opacity: 1; }');
    });

    it('handles multiple keyframe properties', () => {
      const token = {
        keyframes: [
          { propertyName: 'opacity', from: '0', to: '1' },
          { propertyName: 'transform', from: 'scale(0)', to: 'scale(1)' },
        ],
      };
      const result = buildKeyframeBlock('mds-animation-pop-in', token);
      expect(result).toContain('opacity: 0');
      expect(result).toContain('transform: scale(0)');
    });

    it('resolves token references in from/to values to CSS var() expressions', () => {
      const token = {
        keyframes: [
          {
            propertyName: 'background-color',
            from: '{color.background.primary}',
            to: '{color.background.hover}',
          },
        ],
      };
      const result = buildKeyframeBlock('mds-animation-bg-fade', token);
      expect(result).toContain('from { background-color: var(--mds-color-background-primary); }');
      expect(result).toContain('to { background-color: var(--mds-color-background-hover); }');
    });

    it('leaves plain CSS values unchanged in from/to', () => {
      const token = {
        keyframes: [{ propertyName: 'opacity', from: '0', to: '1' }],
      };
      const result = buildKeyframeBlock('mds-animation-fade', token);
      expect(result).toContain('from { opacity: 0; }');
      expect(result).toContain('to { opacity: 1; }');
    });
  });
});
// End AI-Assisted
