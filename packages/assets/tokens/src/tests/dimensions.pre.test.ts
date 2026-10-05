const dimension = require('../core/dimension.json');
const stableSpacing = require('../theme/stable/spacing.json');
const stableBorder = require('../theme/stable/border.json');
const stableRadius = require('../theme/stable/radius.json');
const stableSize = require('../theme/stable/size.json');

const expectDimensionScale = (scale, keys) => {
  expect(Object.keys(scale)).toEqual(keys);
  keys.forEach((key) => {
    expect(scale[key].type).toBe('dimension');
    expect(typeof scale[key].value).toBe('string');
    expect(scale[key].value.length).toBeGreaterThan(0);
  });
};

describe('core dimension tokens', () => {
  it('publishes one core dimension scale', () => {
    expectDimensionScale(dimension.dimension, [
      '0', '1', '2', '4', '8', '12', '16', '20', '24', '28', '32', '36',
      '40', '44', '48', '52', '64', '72', '88', '100', '124', 'full',
    ]);
  });

  it('publishes Momentum spacing roles', () => {
    expectDimensionScale(stableSpacing.spacing, [
      'pad-none', 'pad-block', 'pad-inline',
      'gap-none', 'gap-tight', 'gap', 'gap-wide', 'gap-loose', 'gap-ultraloose',
    ]);
  });

  it('publishes Momentum border roles', () => {
    expectDimensionScale(stableBorder.border, ['default', 'emphasis']);
  });

  it('publishes Momentum radius roles', () => {
    expectDimensionScale(stableRadius.radius, [
      'none', 'subtle', 'small', 'medium', 'large', 'pill', 'full',
    ]);
  });

  it('publishes Momentum size roles by magnitude band', () => {
    expect(Object.keys(stableSize.size)).toEqual(['sm', 'md', 'lg', 'xl']);
    expect(Object.keys(stableSize.size.sm)).toEqual(['4', '8', '12']);
    expect(Object.keys(stableSize.size.md)).toEqual(['16', '20', '24', '28', '32']);
    expect(Object.keys(stableSize.size.lg)).toEqual(['40', '52', '64']);
    expect(Object.keys(stableSize.size.xl)).toEqual(['72', '88', '100', '124']);
  });
});
