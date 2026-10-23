const dark = require('../charting/dark.json');
const light = require('../charting/light.json');
const expected = require('./charting-aliases.json');

const collect = (node, prefix = []) => {
  if (node && typeof node === 'object' && typeof node.value === 'string' && typeof node.type === 'string') {
    return [{ path: prefix.join('.'), value: node.value }];
  }

  return Object.entries(node).flatMap(([key, value]) => collect(value, [...prefix, key]));
};

describe('Charting token sources', () => {
  const darkTokens = collect(dark);
  const lightTokens = collect(light);

  it('has the same 146 paths in dark and light', () => {
    expect(darkTokens).toHaveLength(146);
    expect(lightTokens.map((token) => token.path)).toEqual(darkTokens.map((token) => token.path));
  });

  it('matches the captured Figma alias fixture', () => {
    const actual = darkTokens.map((token, index) => ({
      path: token.path,
      dark: token.value,
      light: lightTokens[index].value,
    }));

    expect(actual).toEqual(expected);
  });

  it('uses charting paths and primitive color aliases', () => {
    [...darkTokens, ...lightTokens].forEach((token) => {
      expect(token.path.includes('highlight.background')).toBe(false);
      expect(token.value).toMatch(/^\{color\.(core|decorative)\.[^}]+\}$/);
    });
  });
});
