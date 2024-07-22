import { normaliseObject } from './object';

describe('#normaliseObject', () => {
  it('should return empty for an null object', () => {
    expect(normaliseObject(null)).toEqual({});
  });

  it('should convert keys to lowercase', () => {
    expect(normaliseObject({ TEST: 'test', objName: 'OBJ Name' })).toEqual({ test: 'test', objname: 'obj name' });
  });

  it('should convert values to lowercase', () => {
    expect(normaliseObject({ test: 'TEST' })).toEqual({ test: 'test' });
  });
});
