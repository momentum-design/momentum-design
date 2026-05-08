// AI-Assisted
// @ts-nocheck

/**
 * Unit tests for the component motion CSS generator (build-component-motion-css.js).
 * Tests the pure helper functions in isolation, without file system access.
 */

const {
  stateToSelector,
  resolveAnimation,
  buildSelector,
  buildCSSRule,
} = require('../../scripts/build-component-motion-css');

const MOCK_ANIMATIONS = {
  buttonHover: {
    type: 'transitionCompound',
    animations: ['buttonBackground', 'buttonBorder'],
    composition: 'parallel',
  },
  buttonPress: {
    type: 'transitionCompound',
    animations: ['buttonBackground', 'buttonIcon'],
    composition: 'parallel',
  },
  buttonLoadingSpin: {
    type: 'keyframe',
    duration: '{motion.duration.slow}',
    easing: '{motion.easing.linear}',
    delay: '{motion.delay.none}',
    iterationCount: 'infinite',
    keyframes: [{ propertyName: 'transform', from: 'rotate(0deg)', to: 'rotate(360deg)' }],
  },
  buttonLoadingSpinPulse: {
    type: 'keyframeCompound',
    animations: ['buttonLoadingSpin'],
  },
  buttonFocusRing: {
    type: 'transition',
    properties: ['box-shadow', 'outline'],
    duration: '{motion.duration.instant}',
    easing: '{motion.easing.standard}',
    delay: '{motion.delay.none}',
  },
};

describe('Component motion CSS generator — unit tests', () => {
  describe('stateToSelector', () => {
    it('maps native pseudo-classes to :name syntax', () => {
      expect(stateToSelector('hover')).toBe(':hover');
      expect(stateToSelector('focus-visible')).toBe(':focus-visible');
      expect(stateToSelector('active')).toBe(':active');
      expect(stateToSelector('disabled')).toBe(':disabled');
    });

    it('maps custom state names to :state(name) syntax', () => {
      expect(stateToSelector('loading')).toBe(':state(loading)');
      expect(stateToSelector('open')).toBe(':state(open)');
      expect(stateToSelector('my-custom-state')).toBe(':state(my-custom-state)');
    });
  });

  describe('resolveAnimation', () => {
    it('returns animation cssProp and var() for keyframe types', () => {
      const result = resolveAnimation('buttonLoadingSpin', MOCK_ANIMATIONS);
      expect(result.cssProp).toBe('animation');
      expect(result.cssVar).toBe('var(--mds-animation-button-loading-spin)');
    });

    it('returns animation cssProp and var() for keyframeCompound types', () => {
      const result = resolveAnimation('buttonLoadingSpinPulse', MOCK_ANIMATIONS);
      expect(result.cssProp).toBe('animation');
      expect(result.cssVar).toBe('var(--mds-animation-button-loading-spin-pulse)');
    });

    it('returns transition cssProp and var() for transition types', () => {
      const result = resolveAnimation('buttonHover', MOCK_ANIMATIONS);
      expect(result.cssProp).toBe('transition');
      expect(result.cssVar).toBe('var(--mds-transition-button-hover)');
    });

    it('returns transition cssProp and var() for simple transition types', () => {
      const result = resolveAnimation('buttonFocusRing', MOCK_ANIMATIONS);
      expect(result.cssProp).toBe('transition');
      expect(result.cssVar).toBe('var(--mds-transition-button-focus-ring)');
    });

    it('throws when referencing an unknown animation token', () => {
      expect(() => resolveAnimation('nonExistent', MOCK_ANIMATIONS)).toThrow(
        'Animation token not found: "nonExistent"',
      );
    });
  });

  describe('buildSelector', () => {
    it('builds a bare element selector when no state and part is :host', () => {
      expect(buildSelector('mdc-button', ':host', [])).toBe('mdc-button');
    });

    it('handles undefined states gracefully', () => {
      expect(buildSelector('mdc-button', ':host', undefined)).toBe('mdc-button');
    });

    it('builds a native pseudo-class selector on :host', () => {
      expect(buildSelector('mdc-button', ':host', ['hover'])).toBe('mdc-button:hover');
    });

    it('builds a custom state selector on :host', () => {
      expect(buildSelector('mdc-button', ':host', ['loading'])).toBe('mdc-button:state(loading)');
    });

    it('builds a ::part selector with no state', () => {
      expect(buildSelector('mdc-button', 'prefix-icon', [])).toBe('mdc-button::part(prefix-icon)');
    });

    it('builds a ::part selector with a custom state', () => {
      expect(buildSelector('mdc-button', 'prefix-icon', ['loading'])).toBe(
        'mdc-button:state(loading)::part(prefix-icon)',
      );
    });

    it('builds a selector with multiple states', () => {
      expect(buildSelector('mdc-button', ':host', ['hover', 'focus-visible'])).toBe('mdc-button:hover:focus-visible');
    });
  });

  describe('buildCSSRule', () => {
    it('builds a complete CSS rule', () => {
      const rule = buildCSSRule('mdc-button:hover', 'transition', 'var(--mds-transition-button-hover)');
      expect(rule).toBe('mdc-button:hover {\n  transition: var(--mds-transition-button-hover);\n}');
    });
  });
});
// End AI-Assisted
