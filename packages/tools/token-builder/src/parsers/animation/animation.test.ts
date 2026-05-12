// AI-Assisted
import AnimationParser from './animation';

const PARSER_INPUT = {
  transition: JSON.stringify({
    animation: {
      buttonBackground: {
        description: 'Button background transition',
        type: 'transition',
        properties: ['background-color'],
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
      },
    },
  }),
  multiPropTransition: JSON.stringify({
    animation: {
      buttonBorder: {
        description: 'Button border and shadow',
        type: 'transition',
        properties: ['border-color', 'box-shadow'],
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
      },
    },
  }),
  keyframe: JSON.stringify({
    animation: {
      buttonLoadingSpin: {
        description: 'Spinning keyframe',
        type: 'keyframe',
        keyframes: [{ propertyName: 'transform', from: 'rotate(0deg)', to: 'rotate(360deg)' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.linear}',
        delay: '{motion.delay.none}',
        iterationCount: 'infinite',
      },
    },
  }),
  transitionCompound: JSON.stringify({
    animation: {
      buttonBackground: {
        description: 'Background',
        type: 'transition',
        properties: ['background-color'],
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
      },
      buttonBorder: {
        description: 'Border',
        type: 'transition',
        properties: ['border-color', 'box-shadow'],
        duration: '{motion.duration.instant}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
      },
      buttonHover: {
        description: 'Hover compound',
        type: 'transitionCompound',
        animations: ['buttonBackground', 'buttonBorder'],
        composition: 'parallel',
      },
    },
  }),
  keyframeCompound: JSON.stringify({
    animation: {
      spin: {
        description: 'Spin',
        type: 'keyframe',
        keyframes: [{ propertyName: 'transform', from: 'rotate(0deg)', to: 'rotate(360deg)' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.linear}',
        delay: '{motion.delay.none}',
        iterationCount: 'infinite',
      },
      pulse: {
        description: 'Pulse',
        type: 'keyframe',
        keyframes: [{ propertyName: 'opacity', from: '1', to: '0.4' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        iterationCount: 'infinite',
      },
      spinPulse: {
        description: 'Spin + pulse compound',
        type: 'keyframeCompound',
        animations: ['spin', 'pulse'],
      },
    },
  }),
  keyframeWithFillMode: JSON.stringify({
    animation: {
      fadeIn: {
        description: 'Fade in',
        type: 'keyframe',
        keyframes: [{ propertyName: 'opacity', from: '0', to: '1' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        fillMode: 'forwards',
      },
    },
  }),
  keyframeCompoundWithFillMode: JSON.stringify({
    animation: {
      enter: {
        description: 'Enter',
        type: 'keyframe',
        keyframes: [{ propertyName: 'opacity', from: '0', to: '1' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        iterationCount: '1',
        fillMode: 'forwards',
      },
      exit: {
        description: 'Exit',
        type: 'keyframe',
        keyframes: [{ propertyName: 'opacity', from: '1', to: '0' }],
        duration: '{motion.duration.slow}',
        easing: '{motion.easing.standard}',
        delay: '{motion.delay.none}',
        fillMode: 'backwards',
      },
      enterExit: {
        description: 'Enter then exit compound',
        type: 'keyframeCompound',
        animations: ['enter', 'exit'],
      },
    },
  }),
};

describe('@momentum-design/token-builder - parsers.AnimationParser', () => {
  let parser: AnimationParser;

  beforeEach(() => {
    parser = new AnimationParser();
  });

  describe('pattern', () => {
    it('should match motion/animation.json paths', () => {
      expect(parser.pattern.test('src/motion/animation.json')).toBe(true);
      expect(parser.pattern.test('/abs/path/motion/animation.json')).toBe(true);
    });

    it('should not match unrelated paths', () => {
      expect(parser.pattern.test('src/motion/complete.json')).toBe(false);
      expect(parser.pattern.test('src/core/color.json')).toBe(false);
    });
  });

  describe('parser — transition token', () => {
    it('should inject a value string composed from properties, duration, easing and delay', () => {
      const result = parser.parser({ contents: PARSER_INPUT.transition, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.buttonBackground.value).toBe(
        'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
      );
    });

    it('should build a comma-separated list for multi-property transitions', () => {
      const result = parser.parser({ contents: PARSER_INPUT.multiPropTransition, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.buttonBorder.value).toBe(
        'border-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none},'
        + ' box-shadow {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
      );
    });
  });

  describe('parser — keyframe token', () => {
    it('should inject a value string including duration, easing, delay, iterationCount and keyframe name', () => {
      const result = parser.parser({ contents: PARSER_INPUT.keyframe, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.buttonLoadingSpin.value).toBe(
        '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-button-loading-spin',
      );
    });

    it('should include fillMode in the value when present', () => {
      const result = parser.parser({ contents: PARSER_INPUT.keyframeWithFillMode, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.fadeIn.value).toBe(
        '{motion.duration.slow} {motion.easing.standard} {motion.delay.none} forwards mds-animation-fade-in',
      );
    });
  });

  describe('parser — transitionCompound token', () => {
    it('should expand compound by concatenating the parts of each referenced primitive', () => {
      const result = parser.parser({ contents: PARSER_INPUT.transitionCompound, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.buttonHover.value).toBe(
        'background-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none},'
        + ' border-color {motion.duration.instant} {motion.easing.standard} {motion.delay.none},'
        + ' box-shadow {motion.duration.instant} {motion.easing.standard} {motion.delay.none}',
      );
    });
  });

  describe('parser — keyframeCompound token', () => {
    it('should expand compound to a comma-separated animation shorthand list', () => {
      const result = parser.parser({ contents: PARSER_INPUT.keyframeCompound, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.spinPulse.value).toBe(
        '{motion.duration.slow} {motion.easing.linear} {motion.delay.none} infinite mds-animation-spin,'
        + ' {motion.duration.slow} {motion.easing.standard} {motion.delay.none} infinite mds-animation-pulse',
      );
    });

    it('should include fillMode from each referenced keyframe in compound expansion', () => {
      const result = parser.parser({ contents: PARSER_INPUT.keyframeCompoundWithFillMode, filePath: 'motion/animation.json' }) as any;
      expect(result.animation.enterExit.value).toBe(
        '{motion.duration.slow} {motion.easing.standard} {motion.delay.none} 1 forwards mds-animation-enter,'
        + ' {motion.duration.slow} {motion.easing.standard} {motion.delay.none} backwards mds-animation-exit',
      );
    });
  });

  describe('parser — error handling', () => {
    it('should throw when a compound references an unknown animation name', () => {
      const badInput = JSON.stringify({
        animation: {
          bad: {
            description: 'Bad compound',
            type: 'transitionCompound',
            animations: ['doesNotExist'],
            composition: 'parallel',
          },
        },
      });
      expect(() => parser.parser({ contents: badInput, filePath: 'motion/animation.json' })).toThrow(
        'AnimationParser: compound token "bad" references unknown animation "doesNotExist".',
      );
    });
  });

  describe('static register()', () => {
    it('should call registerParser on the provided StyleDictionary instance', () => {
      const mockSD = { registerParser: jest.fn() };
      AnimationParser.register(mockSD as any);
      expect(mockSD.registerParser).toHaveBeenCalledTimes(1);
      const arg = mockSD.registerParser.mock.calls[0][0];
      expect(arg.pattern).toEqual(new AnimationParser().pattern);
      expect(typeof arg.parse).toBe('function');
    });
  });
});
// End AI-Assisted
