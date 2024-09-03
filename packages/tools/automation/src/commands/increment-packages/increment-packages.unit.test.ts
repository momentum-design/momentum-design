import { Execute } from '../../utils';
import { packageVersionIncrementList } from '../../models/fixtures/packages.fixture';

describe('Increment Packages', () => {
  describe('all packages', () => {
    it('should increment list of all packages', async () => {
      const results = await Execute.run('yarn md-automation -- --command increment-packages --dryRun');
      const resultArray = results.split('\n')
        .map((eachPackage) => eachPackage.trim())
        .filter((eachPackage) => !!eachPackage);
      expect(resultArray).toEqual(packageVersionIncrementList);
    });
  });

  describe('specific package', () => {
    it('increment version for specific packages', async () => {
      const packagesList = ['@momentum-design/brand-visuals', '@momentum-design/token-builder'];
      const packageVersionIncrementString = packagesList.map(
        (packageName: string) => `${packageName}: 0.0.0 => 0.0.1`,
      ).join('\n');
      const results = await Execute.run(
        `yarn md-automation -- --command increment-packages --dryRun --packages ${packagesList.join(' ')}`,
      );
      expect(results.trim()).toEqual(packageVersionIncrementString);
    });

    it('should not increment the package if it does not exist', async () => {
      const results = await Execute.run(
        'yarn md-automation -- --command increment-packages --dryRun --packages tomato',
      );
      expect(results).toEqual('');
    });
  });
});
