import { Builder, Builders } from '../../models';
import type { BuilderConfig, BuildersConfig } from '../../models';

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
      let builder: Builder;
      let builderConfig: BuilderConfig;
      let builders: Builders;
      let buildersConfig: BuildersConfig;

      beforeEach(() => {
        builderConfig = { definitionPath: 'example-definition-path' };
        buildersConfig = { builders: [Builder], definitionPath: 'example-definition-path' };
        builder = new Builder(builderConfig);
        builders = new Builders(buildersConfig);

        builders.data.builders.push(builder);
      });

      it('should output the global header', () => (
        definition.prepare(builders)
          .then((results) => {
            expect(results.includes(Definition.CONSTANTS.HEADER)).toBe(true);
          })
      ));

      it('should output details based on the type of each builder built', () => (
        definition.prepare(builders)
          .then((results) => {
            expect(results.includes(builder.type)).toBe(true);
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
