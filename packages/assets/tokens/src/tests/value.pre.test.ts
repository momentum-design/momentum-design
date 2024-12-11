const values = require('../core/value.json');
const expectedColors = require('./mappingTable');

// Validate the 'SystemColorXXX' format in descriptions
const validateSystemColorPrefix = (description, tokenName) => {
  const expectedPrefix = `SystemColor${tokenName}`;
  return description.startsWith(expectedPrefix);
};

describe('High Contrast Colors', () => {
  it('Black high contrast tokens should match expected values and descriptions', () => {
    const blackColors = values.color.highcontrast.black;
    const expectedBlackColors = expectedColors.black;

    Object.keys(expectedBlackColors).forEach((key) => {
      expect(blackColors[key].value).toBe(expectedBlackColors[key].value);
      expect(validateSystemColorPrefix(blackColors[key].description, key)).toBe(true);
    });
  });

  it('White high contrast tokens should match expected values and descriptions', () => {
    const whiteColors = values.color.highcontrast.white;
    const expectedWhiteColors = expectedColors.white;

    Object.keys(expectedWhiteColors).forEach((key) => {
      expect(whiteColors[key].value).toBe(expectedWhiteColors[key].value);
      expect(validateSystemColorPrefix(whiteColors[key].description, key)).toBe(true);
    });
  });
});
