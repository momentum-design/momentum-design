// AI-Assisted
import AnimationCssFormat from './animation-css';

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

/** Motion primitive tokens that animation tokens reference via \{motion.*\} refs. */
const MOTION_PRIMITIVE_TOKENS = [
  { path: ['motion', 'duration', 'instant'], original: { value: '100ms' } },
  { path: ['motion', 'duration', 'fast'], original: { value: '200ms' } },
  { path: ['motion', 'duration', 'slow'], original: { value: '500ms' } },
  { path: ['motion', 'easing', 'standard'], original: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' } },
  { path: ['motion', 'easing', 'linear'], original: { value: 'linear' } },
  { path: ['motion', 'delay', 'none'], original: { value: '0ms' } },
];

function makeDictionary(tokens: ReturnType<typeof makeToken>[]) {
  const allTokens = [...MOTION_PRIMITIVE_TOKENS, ...tokens];
  return { allTokens };
}

describe('@momentum-design/token-builder - formats.AnimationCssFormat', () => {
  let format: AnimationCssFormat;

  beforeEach(() => {
    format = new AnimationCssFormat();
  });

  describe('name', () => {
    it('should be the md-animation-css format name', () => {
      expect(format.name).toBe('md-animation-css');
    });
  });

  describe('sdConfig', () => {
    it('should expose a name and formatter', () => {
      expect(format.sdConfig.name).toBe(format.name);
      expect(typeof format.sdConfig.formatter).toBe('function');
    });
  });

  describe('formatter — transition token', () => {
    it('should emit a --mds-transition-* CSS custom property', () => {
      const output = format.formatter({
        dictionary: makeDictionary([TRANSITION_TOKEN]),
        options: { selector: '.mds-animation' },
      } as any);
      expect(output).toContain('--mds-transition-button-background:');
    });

    it('should resolve {token.refs} to var(--mds-*) expressions', () => {
      const output = format.formatter({
        dictionary: makeDictionary([TRANSITION_TOKEN]),
        options: { selector: '.mds-animation' },
      } as any);
      expect(output).toContain('var(--mds-motion-duration-instant)');
      expect(output).toContain('var(--mds-motion-easing-standard)');
      expect(output).not.toContain('{motion.');
    });

    it('should wrap variables in the configured CSS selector', () => {
      const output = format.formatter({
        dictionary: makeDictionary([TRANSITION_TOKEN]),
        options: { selector: '.mds-animation' },
      } as any);
      expect(output).toContain('.mds-animation {');
    });

    it('should use .mds-animation as default selector when none provided', () => {
      const output = format.formatter({
        dictionary: makeDictionary([TRANSITION_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('.mds-animation {');
    });
  });

  describe('formatter — keyframe token', () => {
    it('should emit both a @keyframes block and a --mds-animation-* variable', () => {
      const output = format.formatter({
        dictionary: makeDictionary([KEYFRAME_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('@keyframes mds-animation-button-loading-spin');
      expect(output).toContain('--mds-animation-button-loading-spin:');
    });

    it('should render from/to inside the @keyframes block', () => {
      const output = format.formatter({
        dictionary: makeDictionary([KEYFRAME_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('from { transform: rotate(0deg); }');
      expect(output).toContain('to { transform: rotate(360deg); }');
    });

    it('@keyframes block should appear before the selector block', () => {
      const output = format.formatter({
        dictionary: makeDictionary([KEYFRAME_TOKEN]),
        options: {},
      } as any);
      expect(output.indexOf('@keyframes')).toBeLessThan(output.indexOf('.mds-animation'));
    });
  });

  describe('formatter — transitionCompound token', () => {
    it('should emit a --mds-transition-* variable with resolved var() refs', () => {
      const output = format.formatter({
        dictionary: makeDictionary([COMPOUND_TRANSITION_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('--mds-transition-button-hover:');
      expect(output).toContain('var(--mds-motion-duration-instant)');
    });
  });

  describe('formatter — keyframeCompound token', () => {
    it('should emit a --mds-animation-* variable with resolved var() refs', () => {
      const output = format.formatter({
        dictionary: makeDictionary([COMPOUND_KEYFRAME_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('--mds-animation-spin-pulse:');
      expect(output).toContain('var(--mds-motion-duration-slow)');
    });
  });

  describe('formatter — file header', () => {
    it('should include the do-not-edit header', () => {
      const output = format.formatter({
        dictionary: makeDictionary([TRANSITION_TOKEN]),
        options: {},
      } as any);
      expect(output).toContain('Do not edit directly');
    });
  });
});
// End AI-Assisted
