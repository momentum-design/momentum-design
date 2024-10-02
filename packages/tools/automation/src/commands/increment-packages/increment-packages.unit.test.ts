import { Git } from '../../utils';
import {
  packagesList,
  patchVersionIncrementList,
  minorVersionIncrementList,
} from '../../models/fixtures/packages.fixture';
import IncrementPackages from './increment-packages';
import { Command, Package } from '../../models';
import GetPackages from '../get-packages';

describe('Increment Packages', () => {
  const minor = [0, 1, 0];
  const patch = [0, 0, 1];

  describe('getStepFromPullRequestTitlePrefix', () => {
    let getStepFromPRTitlePrefixSpy: jest.SpyInstance;

    beforeEach(() => {
      getStepFromPRTitlePrefixSpy = jest.spyOn(IncrementPackages, 'getStepFromPullRequestTitlePrefix');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return the minor bump array for feat in prefix', () => {
      const titlePrefix = 'feat';
      const step = IncrementPackages.getStepFromPullRequestTitlePrefix(titlePrefix, minor, patch);
      expect(getStepFromPRTitlePrefixSpy).toHaveBeenCalledWith(titlePrefix, minor, patch);
      expect(step).toBe(minor);
    });

    it('should return the patch bump array for other prefixes', () => {
      const titlePrefix = 'invalid';
      const step = IncrementPackages.getStepFromPullRequestTitlePrefix(titlePrefix, minor, patch);
      expect(getStepFromPRTitlePrefixSpy).toHaveBeenCalledWith(titlePrefix, minor, patch);
      expect(step).toBe(patch);
    });
  });

  describe('increment all package versions', () => {
    let parseSpy: jest.SpyInstance;
    let listSpy: jest.SpyInstance;
    let getTitlePrefixSpy: jest.SpyInstance;
    let getPackagesProcessSpy: jest.SpyInstance;

    beforeEach(() => {
      listSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve([{ commit: 'fake-commit-1' }]));
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        'commit-index': 1,
        packagesPath: './packages',
        scope: '@momentum-design',
        minor,
        patch,
        dryRun: true,
      }));
      getPackagesProcessSpy = jest.spyOn(GetPackages, 'process').mockImplementation(() => Promise.resolve({
        collection: packagesList.map(
          (item) => new Package({
            name: item.split('/')[1],
            scope: item.split('/')[0],
          }),
        ),
      } as any));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should increment list of all packages by patch', async () => {
      getTitlePrefixSpy = jest.spyOn(Git, 'getPullRequestTitlePrefix').mockImplementation(() => Promise.resolve('fix'));
      const results = await IncrementPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getTitlePrefixSpy).toHaveBeenCalled();
      expect(getPackagesProcessSpy).toHaveBeenCalled();
      const resultArray = results
        .split('\n')
        .map((eachPackage) => eachPackage.trim())
        .filter((eachPackage) => !!eachPackage);
      expect(resultArray).toEqual(patchVersionIncrementList);
    });

    it('should increment list of all packages by minor', async () => {
      getTitlePrefixSpy = jest
        .spyOn(Git, 'getPullRequestTitlePrefix')
        .mockImplementation(() => Promise.resolve('feat'));
      const results = await IncrementPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getTitlePrefixSpy).toHaveBeenCalled();
      expect(getPackagesProcessSpy).toHaveBeenCalled();
      const resultArray = results
        .split('\n')
        .map((eachPackage) => eachPackage.trim())
        .filter((eachPackage) => !!eachPackage);
      expect(resultArray).toEqual(minorVersionIncrementList);
    });
  });

  describe('increment specific package versions', () => {
    let parseSpy: jest.SpyInstance;
    let listSpy: jest.SpyInstance;
    let getTitlePrefixSpy: jest.SpyInstance;
    let getPackagesProcessSpy: jest.SpyInstance;

    beforeEach(() => {
      listSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve([{ commit: 'fake-commit-1' }]));
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        'commit-index': 1,
        package: '@momentum-design/brand-visuals @momentum-design/token-builder',
        packagesPath: './packages',
        scope: '@momentum-design',
        minor,
        patch,
        dryRun: true,
      }));
      getPackagesProcessSpy = jest.spyOn(GetPackages, 'process').mockImplementation(() => Promise.resolve({
        collection: ['@momentum-design/brand-visuals', '@momentum-design/token-builder'].map(
          (item) => new Package({
            name: item.split('/')[1],
            scope: item.split('/')[0],
          }),
        ),
      } as any));
      getTitlePrefixSpy = jest.spyOn(Git, 'getPullRequestTitlePrefix').mockImplementation(() => Promise.resolve('fix'));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should increment version for specific packages by patch', async () => {
      const packagesList = ['@momentum-design/brand-visuals', '@momentum-design/token-builder'];
      const packageVersionIncrementString = packagesList
        .map((packageName: string) => `${packageName}: 0.0.0 => 0.0.1`)
        .join('\n');
      const results = await IncrementPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getTitlePrefixSpy).toHaveBeenCalled();
      expect(getPackagesProcessSpy).toHaveBeenCalled();
      expect(results.trim()).toEqual(packageVersionIncrementString);
    });

    it('should increment version for specific packages by minor', async () => {
      getTitlePrefixSpy = jest
        .spyOn(Git, 'getPullRequestTitlePrefix')
        .mockImplementation(() => Promise.resolve('feat'));
      const packagesList = ['@momentum-design/brand-visuals', '@momentum-design/token-builder'];
      const packageVersionIncrementString = packagesList
        .map((packageName: string) => `${packageName}: 0.0.0 => 0.1.0`)
        .join('\n');
      const results = await IncrementPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getTitlePrefixSpy).toHaveBeenCalled();
      expect(getPackagesProcessSpy).toHaveBeenCalled();
      expect(results.trim()).toEqual(packageVersionIncrementString);
    });

    it('should not increment the package if it does not exist', async () => {
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        'commit-index': 1,
        package: 'tomato',
        packagesPath: './packages',
        scope: '@momentum-design',
        minor,
        patch,
        dryRun: true,
      }));
      getPackagesProcessSpy = jest.spyOn(GetPackages, 'process').mockImplementation(() => Promise.resolve({
        collection: [],
      }) as any);

      const results = await IncrementPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getTitlePrefixSpy).toHaveBeenCalled();
      expect(getPackagesProcessSpy).toHaveBeenCalled();
      expect(results).toEqual('');
    });
  });
});
