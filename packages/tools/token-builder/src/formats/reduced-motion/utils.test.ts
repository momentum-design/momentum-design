import { buildReducedMotionAnimationBlock } from './utils';
import { makeDictionary, makeToken } from '../animation/animation.fixture';

describe('@momentum-design/token-builder - formats.reducedMotion.utils', () => {
  describe('buildReducedMotionAnimationBlock', () => {
    it('should emit none for transition and animation shorthand variables', () => {
      const dictionary = makeDictionary([
        makeToken(
          'backgroundColor',
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
      expect(output).toContain('--mds-transition-background-color: none;');
      expect(output).toContain('--mds-animation-button-loading-spin: none;');
    });
  });
});
