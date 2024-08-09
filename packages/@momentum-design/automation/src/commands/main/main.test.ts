import { Execute } from '../../utils';
import { figmaPackage, packagesList, packageVersionIncrementList } from './main.fixture';

describe('Main', () => {
  describe('run on all packages', () => {
    it('get list of all existing packages', async () => {
      const results = await Execute.run('yarn md-automation -- --command get-packages');
      expect(results).toBe(JSON.stringify(packagesList));
    });

    it('increment version count for all packages', async () => {
      const results = await Execute.run('yarn md-automation -- --command increment-packages --dryRun');
      const resultArray = results.split('\n')
        .map((eachPackage) => eachPackage.trim())
        .filter((eachPackage) => !!eachPackage);
      expect(resultArray).toEqual(packageVersionIncrementList);
    });
  });

  describe('run on a specific package', () => {
    it('get a specific package', async () => {
      const results = await Execute.run(`yarn md-automation -- --command get-packages --packages ${figmaPackage}`);
      expect(results).toBe(JSON.stringify([figmaPackage]));
    });

    it('increment version count for a specific packages', async () => {
      const packageVersionIncrementString = `${figmaPackage}: 0.0.0 => 0.0.1`;
      const results = await Execute.run(
        `yarn md-automation -- --command increment-packages --dryRun --packages ${figmaPackage}`,
      );
      expect(results.trim()).toEqual(packageVersionIncrementString);
    });
  });
});
