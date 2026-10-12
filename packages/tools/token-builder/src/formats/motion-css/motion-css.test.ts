import MotionCssFormat from './motion-css';

describe('@momentum-design/token-builder - formats.MotionCssFormat', () => {
  let format: MotionCssFormat;

  beforeEach(() => {
    format = new MotionCssFormat();
  });

  describe('sdConfig', () => {
    it('should expose a name and formatter', () => {
      expect(format.name).toBe('md-motion-css');
      expect(format.sdConfig.name).toBe(format.name);
      expect(typeof format.sdConfig.formatter).toBe('function');
    });
  });
});
