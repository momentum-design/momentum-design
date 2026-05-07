// AI-Assisted
// @ts-nocheck

/**
 * Unit tests for the animation CSS generator (build-animation-css.js).
 * Tests the pure helper functions in isolation, without file system access.
 */

const {
  resolveRef,
  resolveToken,
  buildKeyframeBlock,
  buildTransitionValue,
} = require('../../scripts/build-animation-css');

const MOCK_TOKENS = {
  motion: {
    duration: {
      instant: { value: '100ms' },
      fast: { value: '200ms' },
    },
    easing: {
      standard: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    },
    delay: {
      none: { value: '0ms' },
    },
  },
};

describe('Animation CSS generator — unit tests', () => {
  describe('resolveRef', () => {
    it('returns the raw value when ref is not a token reference', () => {
      expect(resolveRef('100ms', MOCK_TOKENS)).toBe('100ms');
    });

    it('resolves a valid token reference to its value', () => {
      expect(resolveRef('{motion.duration.instant}', MOCK_TOKENS)).toBe('100ms');
    });

    it('throws when the token path does not exist', () => {
      expect(() => resolveRef('{motion.duration.unknown}', MOCK_TOKENS)).toThrow(
        'Unresolved token reference: "{motion.duration.unknown}"',
      );
    });
  });

  describe('resolveToken', () => {
    it('resolves duration, easing and delay refs on a token', () => {
      const token = {
        type: 'transition',
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        properties: ['opacity'],
      };
      const resolved = resolveToken(token, MOCK_TOKENS);
      expect(resolved.duration).toBe('100ms');
      expect(resolved.easing).toBe('cubic-bezier(0.4, 0, 0.2, 1)');
      expect(resolved.delay).toBe('0ms');
    });

    it('does not crash for compound tokens that have no duration/easing/delay', () => {
      const token = {
        type: 'transitionCompound',
        animations: ['buttonBackground'],
        composition: 'parallel',
      };
      const resolved = resolveToken(token, MOCK_TOKENS);
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
  });
});
// End AI-Assisted
