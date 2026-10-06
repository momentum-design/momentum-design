const spacing = require('../core/spacing.json');
const border = require('../core/border.json');
const radius = require('../core/radius.json');
const size = require('../core/size.json');

const expectDimensionScale = (scale, keys) => {
  expect(Object.keys(scale)).toEqual(keys);
  keys.forEach((key) => {
    expect(scale[key].type).toBe('dimension');
    expect(typeof scale[key].value).toBe('string');
    expect(scale[key].value.length).toBeGreaterThan(0);
  });
};

describe('core dimension tokens', () => {
  it('publishes the spacing scale', () => {
    expectDimensionScale(spacing.spacing, ['0', '4', '8', '12', '16', '24', '32', '48', '64']);
  });

  it('publishes the border width scale', () => {
    expectDimensionScale(border.border.width, ['1', '2']);
  });

  it('publishes the radius scale', () => {
    expectDimensionScale(radius.radius, ['0', '2', '4', '8', '12', '14', '16', '20', 'full']);
  });

  it('publishes the size scale', () => {
    expectDimensionScale(size.size, [
      '4', '8', '12', '14', '16', '20', '24', '28', '32', '36',
      '40', '44', '48', '52', '56', '64', '72', '88', '100', '124',
    ]);
  });
});
