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

const MOCK_CEM = {
  modules: [
    {
      declarations: [
        {
          tagName: 'mdc-button',
          cssCustomStates: [{ name: 'loading', description: 'Active when loading.' }],
        },
        {
          tagName: 'mdc-checkbox',
          cssCustomStates: [{ name: 'checked', description: 'Active when checked.' }],
        },
      ],
    },
  ],
};

describe('Component motion CSS generator — unit tests', () => {
  describe('stateToSelector', () => {
    it('returns empty string for :noState', () => {
      expect(stateToSelector(':noState', 'mdc-button', MOCK_CEM)).toBe('');
    });

    it('maps a component custom state to :state(name) when found in CEM', () => {
      expect(stateToSelector('loading', 'mdc-button', MOCK_CEM)).toBe(':state(loading)');
      expect(stateToSelector('checked', 'mdc-checkbox', MOCK_CEM)).toBe(':state(checked)');
    });

    it('maps native pseudo-classes to :name syntax', () => {
      expect(stateToSelector('hover', 'mdc-button', MOCK_CEM)).toBe(':hover');
      expect(stateToSelector('focus-visible', 'mdc-button', MOCK_CEM)).toBe(':focus-visible');
      expect(stateToSelector('active', 'mdc-button', MOCK_CEM)).toBe(':active');
      expect(stateToSelector('disabled', 'mdc-button', MOCK_CEM)).toBe(':disabled');
    });

    it('falls back to native pseudo-class even without CEM', () => {
      expect(stateToSelector('hover', 'mdc-button', null)).toBe(':hover');
    });

    it('throws for unknown states not in CEM or NATIVE_PSEUDO_CLASSES', () => {
      expect(() => stateToSelector('unknown-state', 'mdc-button', MOCK_CEM)).toThrow('Unknown state "unknown-state"');
    });

    it('throws when no CEM and state is not a native pseudo-class', () => {
      expect(() => stateToSelector('loading', 'mdc-button', null)).toThrow('Unknown state "loading"');
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
      expect(buildSelector('mdc-button', ':host', [], MOCK_CEM)).toBe('mdc-button');
    });

    it('handles undefined states gracefully', () => {
      expect(buildSelector('mdc-button', ':host', undefined, MOCK_CEM)).toBe('mdc-button');
    });

    it('builds a native pseudo-class selector on :host', () => {
      expect(buildSelector('mdc-button', ':host', ['hover'], MOCK_CEM)).toBe('mdc-button:hover');
    });

    it('builds a custom state selector on :host', () => {
      expect(buildSelector('mdc-button', ':host', ['loading'], MOCK_CEM)).toBe('mdc-button:state(loading)');
    });

    it('builds a ::part selector with no state', () => {
      expect(buildSelector('mdc-button', 'prefix-icon', [], MOCK_CEM)).toBe('mdc-button::part(prefix-icon)');
    });

    it('builds a ::part selector with a custom state', () => {
      expect(buildSelector('mdc-button', 'prefix-icon', ['loading'], MOCK_CEM)).toBe(
        'mdc-button:state(loading)::part(prefix-icon)',
      );
    });

    it('builds a selector with multiple states', () => {
      expect(buildSelector('mdc-button', ':host', ['hover', 'focus-visible'], MOCK_CEM)).toBe(
        'mdc-button:hover:focus-visible',
      );
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
