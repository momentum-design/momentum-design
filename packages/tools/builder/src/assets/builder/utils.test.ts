import * as Utils from './utils';

describe('@momentum-design/builder/utils - utils test', () => {
  describe('getNextCodepoint', () => {
    it('return codepoint', () => {
      const getNextCodepointSpy = jest.spyOn(Utils, 'getNextCodepoint');
      let resultCodepoint = Utils.getNextCodepoint();
      expect(getNextCodepointSpy).toBeCalledTimes(1);
      expect(resultCodepoint).toBe(61697);
      resultCodepoint = Utils.getNextCodepoint();
      expect(getNextCodepointSpy).toBeCalledTimes(2);
      expect(resultCodepoint).toBe(61698);
    });
  });
});
