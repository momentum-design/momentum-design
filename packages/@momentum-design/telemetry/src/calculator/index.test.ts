import {
  ENGINEERING_BASE_TIME_MEASUREMENT,
  ENGINEERING_TIME_FACTOR,
  UNIT,
  DESIGN_BASE_TIME_MEASUREMENT,
  DESIGN_TIME_FACTOR,
  PACKAGE_FOCUS,
  calculateApproximateValue,
} from './index';

describe('calculator', () => {
  describe('constants', () => {
    it('should validate all the constants are set to the values we expect', () => {
      expect(UNIT).toEqual('SECONDS');
      expect(ENGINEERING_BASE_TIME_MEASUREMENT).toEqual(14400);
      expect(ENGINEERING_TIME_FACTOR).toEqual(120);
      expect(DESIGN_BASE_TIME_MEASUREMENT).toEqual(0);
      expect(DESIGN_TIME_FACTOR).toEqual(60);
      expect(PACKAGE_FOCUS).toEqual(['@momentum-design/tokens']);
    });
  });

  describe('caclulateApproximateValue', () => {
    it('should return null if the package does not match a calculator result', () => {
      expect(calculateApproximateValue('test', 100)).toBeFalsy();
    });
    it('should calculate the approximate time saved', () => {
      expect(calculateApproximateValue('@momentum-design/tokens', 5)).toEqual({
        engineering: {
          SECONDS: 15000,
          DAYS: 1,
        },
        design: {
          SECONDS: 300,
          DAYS: 2,
        },
      });
    });
  });
});
