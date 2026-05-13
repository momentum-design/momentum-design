import AnimationScssFormat from './animation-scss';
import { makeToken, makeDictionary } from '../animation/animation.fixture';

const TRANSITION_TOKEN = makeToken(
  'buttonBackground',
  'transition',
  'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
  'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
);

const KEYFRAME_TOKEN = makeToken(
  'buttonLoadingSpin',
  'keyframe',
  '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-button-loading-spin',
  '500ms linear 0ms infinite mds-animation-button-loading-spin',
  {
    keyframes: [{ propertyName: 'transform', from: 'rotate(0deg)', to: 'rotate(360deg)' }],
  },
);

const COMPOUND_TRANSITION_TOKEN = makeToken(
  'buttonHover',
  'transitionCompound',
  'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none},'
  + ' border-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
  'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,'
  + ' border-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
);

const COMPOUND_KEYFRAME_TOKEN = makeToken(
  'spinPulse',
  'keyframeCompound',
  '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-spin,'
  + ' {motion.duration.slow} {motion.easing.standard} {motion.delay.none} infinite mds-animation-pulse',
  '500ms linear 0ms infinite mds-animation-spin,'
  + ' 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms infinite mds-animation-pulse',
);

describe('@momentum-design/token-builder - formats.AnimationScssFormat', () => {
  let format: AnimationScssFormat;

  beforeEach(() => {
    format = new AnimationScssFormat();
  });

  describe('sdConfig', () => {
    it('should expose a name and formatter', () => {
      expect(format.name).toBe('md-animation-scss');
      expect(format.sdConfig.name).toBe(format.name);
      expect(typeof format.sdConfig.formatter).toBe('function');
    });
  });

  describe('formatter — transition token', () => {
    let output: string;

    beforeEach(() => {
      output = format.formatter({ dictionary: makeDictionary([TRANSITION_TOKEN]) } as any);
    });

    it('should emit a $mds-transition-* SCSS variable', () => {
      expect(output).toContain('$mds-transition-button-background:');
    });

    it('should output resolved scalar values (not token references)', () => {
      expect(output).toContain('100ms');
      expect(output).toContain('cubic-bezier(0.4, 0, 0.2, 1)');
      expect(output).not.toContain('var(--');
      expect(output).not.toContain('{motion.');
    });

    it('should NOT wrap variables in a class selector', () => {
      expect(output).not.toContain('.mds-animation');
      expect(output).not.toContain('{');
    });

    it('should emit variables at file level (not indented)', () => {
      const varLine = output.split('\n').find((l) => l.includes('$mds-transition-button-background'));
      expect(varLine).toBeDefined();
      expect(varLine!.startsWith('$')).toBe(true);
    });

    it('should include the do-not-edit header', () => {
      expect(output).toContain('Do not edit directly');
    });
  });

  describe('formatter — keyframe token', () => {
    let output: string;

    beforeEach(() => {
      output = format.formatter({ dictionary: makeDictionary([KEYFRAME_TOKEN]) } as any);
    });

    it('should emit a @keyframes block', () => {
      expect(output).toContain('@keyframes mds-animation-button-loading-spin');
    });

    it('should emit a $mds-animation-* SCSS variable for the animation shorthand', () => {
      expect(output).toContain('$mds-animation-button-loading-spin:');
    });

    it('should resolve refs in the animation shorthand to scalar values', () => {
      expect(output).toContain('500ms');
      expect(output).not.toContain('var(--');
    });

    it('@keyframes block should appear before variable declarations', () => {
      expect(output.indexOf('@keyframes')).toBeLessThan(output.indexOf('$mds-animation-'));
    });
  });

  describe('formatter — transitionCompound token', () => {
    it('should emit a $mds-transition-* SCSS variable with resolved values', () => {
      const output = format.formatter({ dictionary: makeDictionary([COMPOUND_TRANSITION_TOKEN]) } as any);
      expect(output).toContain('$mds-transition-button-hover:');
      expect(output).toContain('100ms');
      expect(output).not.toContain('var(--');
    });
  });

  describe('formatter — keyframeCompound token', () => {
    it('should emit a $mds-animation-* SCSS variable with resolved values', () => {
      const output = format.formatter({ dictionary: makeDictionary([COMPOUND_KEYFRAME_TOKEN]) } as any);
      expect(output).toContain('$mds-animation-spin-pulse:');
      expect(output).toContain('500ms');
      expect(output).not.toContain('var(--');
    });
  });
});
