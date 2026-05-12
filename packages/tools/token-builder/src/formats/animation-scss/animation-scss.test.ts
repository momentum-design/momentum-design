// AI-Assisted
import AnimationScssFormat from './animation-scss';

/** Minimal mock of an SD TransformedToken for animation use. */
function makeToken(
  name: string,
  type: string,
  originalValue: string,
  extra: Record<string, unknown> = {},
) {
  return {
    path: ['animation', name],
    original: { type, value: originalValue, ...extra },
  };
}

const TRANSITION_TOKEN = makeToken(
  'buttonBackground',
  'transition',
  'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
);

const KEYFRAME_TOKEN = makeToken(
  'buttonLoadingSpin',
  'keyframe',
  '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-button-loading-spin',
  {
    keyframes: [{ propertyName: 'transform', from: 'rotate(0deg)', to: 'rotate(360deg)' }],
  },
);

const COMPOUND_TRANSITION_TOKEN = makeToken(
  'buttonHover',
  'transitionCompound',
  'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none},'
  + ' border-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
);

const COMPOUND_KEYFRAME_TOKEN = makeToken(
  'spinPulse',
  'keyframeCompound',
  '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-spin,'
  + ' {motion.duration.slow} {motion.easing.standard} {motion.delay.none} infinite mds-animation-pulse',
);

function makeDictionary(tokens: ReturnType<typeof makeToken>[]) {
  return { allTokens: tokens };
}

describe('@momentum-design/token-builder - formats.AnimationScssFormat', () => {
  let format: AnimationScssFormat;

  beforeEach(() => {
    format = new AnimationScssFormat();
  });

  describe('name', () => {
    it('should be the md-animation-scss format name', () => {
      expect(format.name).toBe('md-animation-scss');
    });
  });

  describe('sdConfig', () => {
    it('should expose a name and formatter', () => {
      expect(format.sdConfig.name).toBe(format.name);
      expect(typeof format.sdConfig.formatter).toBe('function');
    });
  });

  describe('formatter — transition token', () => {
    it('should emit a $mds-transition-* SCSS variable', () => {
      const output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
      expect(output).toContain('$mds-transition-button-background:');
    });

    it('should resolve {token.refs} to $mds-* SCSS variables (not var())', () => {
      const output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
      expect(output).toContain('$mds-motion-duration-instant');
      expect(output).toContain('$mds-motion-easing-standard');
      expect(output).not.toContain('var(--');
      expect(output).not.toContain('{motion.');
    });

    it('should NOT wrap variables in a class selector', () => {
      const output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
      expect(output).not.toContain('.mds-animation');
      expect(output).not.toContain('{');
    });

    it('should emit variables at file level (not indented)', () => {
      const output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
      const varLine = output.split('\n').find((l) => l.includes('$mds-transition-button-background'));
      expect(varLine).toBeDefined();
      expect(varLine!.startsWith('$')).toBe(true);
    });
  });

  describe('formatter — keyframe token', () => {
    it('should emit a @keyframes block', () => {
      const output = format.formatter({ dictionary: makeDictionary([KEYFRAME_TOKEN]) } as any);
      expect(output).toContain('@keyframes mds-animation-button-loading-spin');
    });

    it('should emit a $mds-animation-* SCSS variable for the animation shorthand', () => {
      const output = format.formatter({ dictionary: makeDictionary([KEYFRAME_TOKEN]) } as any);
      expect(output).toContain('$mds-animation-button-loading-spin:');
    });

    it('should resolve refs in the animation shorthand to $mds-* variables', () => {
      const output = format.formatter({ dictionary: makeDictionary([KEYFRAME_TOKEN]) } as any);
      expect(output).toContain('$mds-motion-duration-slow');
      expect(output).not.toContain('var(--');
    });

    it('@keyframes block should appear before variable declarations', () => {
      const output = format.formatter({ dictionary: makeDictionary([KEYFRAME_TOKEN]) } as any);
      expect(output.indexOf('@keyframes')).toBeLessThan(output.indexOf('$mds-animation-'));
    });
  });

  describe('formatter — transitionCompound token', () => {
    it('should emit a $mds-transition-* SCSS variable with $mds-* refs', () => {
      const output = format.formatter({ dictionary: makeDictionary([COMPOUND_TRANSITION_TOKEN]) } as any);
      expect(output).toContain('$mds-transition-button-hover:');
      expect(output).toContain('$mds-motion-duration-instant');
      expect(output).not.toContain('var(--');
    });
  });

  describe('formatter — keyframeCompound token', () => {
    it('should emit a $mds-animation-* SCSS variable with $mds-* refs', () => {
      const output = format.formatter({ dictionary: makeDictionary([COMPOUND_KEYFRAME_TOKEN]) } as any);
      expect(output).toContain('$mds-animation-spin-pulse:');
      expect(output).toContain('$mds-motion-duration-slow');
      expect(output).not.toContain('var(--');
    });
  });

  describe('formatter — file header', () => {
    it('should include the do-not-edit header', () => {
      const output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
      expect(output).toContain('Do not edit directly');
    });
  });
});
// End AI-Assisted
