import Main from './main';
import CONSTANTS from './constants';

describe('@momentum-design/builder = Main', () => {
  let main: Main;

  beforeEach(() => {
    main = new Main();
  });

  describe('constructor()', () => {
    it('assigns its configuration to itself', () => {
      expect(main.options).toMatchObject(Main.CONSTANTS.OPTIONS);
    });
  });

  describe('scoped', () => {
    describe('prepare()', () => {
      it('should resolve to a string', () => {
        const input = ['a', 'b', 'c'];
        const expected = input.join('\n\n');

        expect(main.prepare(input)).resolves.toBe(expected);
      });
    });
  });

  describe('static', () => {
    describe('constants', () => {
      it('should return the local constants', () => {
        expect(Main.CONSTANTS).toMatchObject(CONSTANTS);
      });

      it('should be immutable', () => {
        const mutable = Main.CONSTANTS;

        mutable.COMMANDS.DEFINITION = 'example-constant';

        expect(Main.CONSTANTS.COMMANDS.DEFINITION).not.toBe(mutable.COMMANDS.DEFINITION);
      });
    });
  });
});
