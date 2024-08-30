const values = require('./value.json');
const expectedColors = require('./mappingTable');

// Validate the 'SystemColorXXX' format in descriptions
const validateSystemColorPrefix = (description, tokenName) => {
    const expectedPrefix = `SystemColor${tokenName}`;
    return description.startsWith(expectedPrefix);
};

describe('High Contrast Colors', () => {
  test('Black high contrast tokens should match expected values and descriptions', () => {
    const blackColors = values.color.highcontrast.black;
    const expectedBlackColors = expectedColors.black;
    
    Object.keys(expectedBlackColors).forEach(key => {
      expect(blackColors[key].value).toBe(expectedBlackColors[key].value);
      expect(blackColors[key].description).toBe(expectedBlackColors[key].description);
      // Validate that the description starts with 'SystemColor' followed by the token name
      const tokenName = key;
      expect(validateSystemColorPrefix(blackColors[key].description, tokenName)).toBe(true);
    });
  });

  test('White high contrast tokens should match expected values and descriptions', () => {
    const whiteColors = values.color.highcontrast.white;
    const expectedWhiteColors = expectedColors.white;
    
    Object.keys(expectedWhiteColors).forEach(key => {
      expect(whiteColors[key].value).toBe(expectedWhiteColors[key].value);
      expect(whiteColors[key].description).toBe(expectedWhiteColors[key].description);
      // Validate that the description starts with 'SystemColor' followed by the token name
      const tokenName = key;
      expect(validateSystemColorPrefix(whiteColors[key].description, tokenName)).toBe(true);
    });
  });
});
