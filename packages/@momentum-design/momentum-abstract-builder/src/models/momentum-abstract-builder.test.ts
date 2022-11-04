import { MomentumAbstractType } from 'momentum-constructor-common';
import { momentumAbtractBuilder } from './momentum-abstract-builder';

const fs = require('fs');
const path = require('path');

const testOutput = path.join(__dirname, '../../dist/_test');

describe('momentum-abstract-builder', () => {
  test('test build icon', () => {
    const output = path.join(testOutput, 'icon');
    momentumAbtractBuilder.build({ output, type: MomentumAbstractType.icon });
    const list = fs.readdirSync(output);
    expect(Object.keys(list).length).toBeGreaterThan(1);
  });

  test('test build iconColored', () => {
    const output = path.join(testOutput, 'iconColored');
    momentumAbtractBuilder.build({ output, type: MomentumAbstractType['icon-colored'] });
    const list = fs.readdirSync(output);
    expect(Object.keys(list).length).toBeGreaterThan(1);
  });

  test('test build iconBrand', () => {
    const output = path.join(testOutput, 'iconBrand');
    momentumAbtractBuilder.build({ output, type: MomentumAbstractType['icon-brand'] });
    const list = fs.readdirSync(output);
    expect(Object.keys(list).length).toBeGreaterThan(1);
  });

  test('test build illustration', () => {
    const output = path.join(testOutput, 'illustration');
    momentumAbtractBuilder.build({ output, type: MomentumAbstractType.illustration });
    const list = fs.readdirSync(output);
    expect(Object.keys(list).length).toBeGreaterThan(1);
  });
});
