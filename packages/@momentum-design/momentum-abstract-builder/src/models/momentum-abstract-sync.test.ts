import { momentumAbstractSync } from './momentum-abstract-sync';
import { CONSTANTS } from '../common/index';

describe('momentum-abstract-sync', () => {
  test('test has local momentum-absract version', () => {
    const myPackage = require(CONSTANTS.packageJsonPath); // eslint-disable-line
    expect(myPackage.dependencies && myPackage.dependencies['momentum-abstract'] !== null).toBe(true);
  });

  test('test verison compare: if need update 1.0.0 to 1.2.1', () => {
    expect(momentumAbstractSync.ifNeedUpdate('1.0.0', '1.2.1')).toBe(true);
  });

  test('test verison compare: if need update 1.2.2 to 1.2.10', () => {
    expect(momentumAbstractSync.ifNeedUpdate('1.2.2', '1.2.10')).toBe(true);
  });

  test('test verison compare: if need update 1.2.1 to 1.2.1', () => {
    expect(momentumAbstractSync.ifNeedUpdate('1.2.1', '1.2.1')).toBe(false);
  });

  test('test verison compare: if need update 1.2.10 to 1.2.1', () => {
    expect(momentumAbstractSync.ifNeedUpdate('1.2.10', '1.2.1')).toBe(false);
  });
});
