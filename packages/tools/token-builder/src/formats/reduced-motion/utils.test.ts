import { buildReducedMotionAnimationBlock, buildReducedMotionMotionCoreBlock } from './utils';
import { makeDictionary, makeToken } from '../animation/animation.fixture';

describe('@momentum-design/token-builder - formats.reducedMotion.utils', () => {
  describe('buildReducedMotionMotionCoreBlock', () => {
    it('should emit a media query with zeroed duration, delay, and stagger variables', () => {
      const dictionary = {
        allTokens: [
          { name: 'mds-motion-duration-fast', path: ['motion', 'duration', 'fast'], original: {} },
          { name: 'mds-motion-easing-standard', path: ['motion', 'easing', 'standard'], original: {} },
          { name: 'mds-motion-delay-short', path: ['motion', 'delay', 'short'], original: {} },
          { name: 'mds-motion-stagger-normal', path: ['motion', 'stagger', 'normal'], original: {} },
        ],
      };

      const output = buildReducedMotionMotionCoreBlock('.mds-motion', dictionary as never);

      expect(output).toContain('@media (prefers-reduced-motion: reduce)');
      expect(output).toContain('.mds-motion {');
      expect(output).toContain('--mds-motion-duration-fast: 0ms;');
      expect(output).toContain('--mds-motion-delay-short: 0ms;');
      expect(output).toContain('--mds-motion-stagger-normal: 0ms;');
      expect(output).not.toContain('--mds-motion-easing-standard');
    });
  });

  describe('buildReducedMotionAnimationBlock', () => {
    it('should emit none for transition and animation shorthand variables', () => {
      const dictionary = makeDictionary([
        makeToken(
          'buttonBackground',
          'transition',
          'background-color 100ms ease 0ms',
          'background-color 100ms ease 0ms',
        ),
        makeToken(
          'buttonLoadingSpin',
          'keyframe',
          '500ms linear 0ms infinite mds-animation-button-loading-spin',
          '500ms linear 0ms infinite mds-animation-button-loading-spin',
        ),
      ]);

      const output = buildReducedMotionAnimationBlock('.mds-animation', dictionary as never);

      expect(output).toContain('@media (prefers-reduced-motion: reduce)');
      expect(output).toContain('.mds-animation {');
      expect(output).toContain('--mds-transition-button-background: none;');
      expect(output).toContain('--mds-animation-button-loading-spin: none;');
    });
  });
});
