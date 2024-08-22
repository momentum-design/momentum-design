import Definition from './definition';
import CONSTANTS from './constants';

describe('@momentum-design/builder - Definition', () => {
  let definition: Definition;

  beforeEach(() => {
    definition = new Definition();
  });

  describe('constructor()', () => {
    it('assigns its configuration to itself', () => {
      expect(definition.options).toMatchObject(Definition.CONSTANTS.OPTIONS);
    });
  });

  describe('scoped', () => {
    describe('prepare()', () => {
      it('returns empty string', () => (
        definition.prepare()
          .then((results) => {
            expect(results).toBe('');
          })
      ));
    });
  });

  describe('static', () => {
    describe('constants', () => {
      it('should return the local constants', () => {
        expect(Definition.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const mutable = Definition.CONSTANTS;

        mutable.HEADER = 'example-constant';

        expect(Definition.CONSTANTS.HEADER).not.toBe(mutable.HEADER);
      });
    });
  });
});
