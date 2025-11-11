import { Execute, Git } from '../../utils';
import { packagesList } from '../../models/fixtures/packages.fixture';
import GetPackages from './get-packages';
import { Command, PackageCollection } from '../../models';

describe('Get Packages', () => {
  describe('all packages', () => {
    it('should get list of all packages', async () => {
      const results = await Execute.run('yarn md-automation -- --command get-packages');
      expect(results).toBe(JSON.stringify(packagesList));
    });
  });

  describe('specific package', () => {
    it('should get specific packages', async () => {
      const packagesList = ['@momentum-design/figma-plugin-assets-export', '@momentum-design/animations'];
      const results = await Execute.run(
        `yarn md-automation -- --command get-packages --packages ${packagesList.join(' ')}`,
      );
      expect(results).toBe(JSON.stringify(packagesList.sort()));
    });

    it('should not get the package if it does not exist', async () => {
      const packageName = 'tomato';
      const results = await Execute.run(
        `yarn md-automation -- --command get-packages --packages ${packageName}`,
      );
      expect(results).toBe(JSON.stringify([]));
    });
  });

  describe('only changed packages', () => {
    let getAllPackageDetailsSpy: jest.SpyInstance;
    let parseSpy: jest.SpyInstance;
    let listSpy: jest.SpyInstance;

    beforeEach(() => {
      listSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve(
        [
          { commit: 'fake-commit-1' },
          { commit: 'fake-commit-2' },
        ],
      ));
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        changed: '',
        'commit-index': 1,
        dependent: undefined,
        packages: undefined,
        packagesPath: './packages',
        scope: '@momentum-design',
      }));
      getAllPackageDetailsSpy = jest.spyOn(PackageCollection, 'getAllPackageDetails')
        .mockImplementation(() => Promise.resolve(
          [{
            location: 'packages/tools/automation',
            name: '@momentum-design/automation',
          }],
        ));
    });

    it('should get name of specific package with a commit id', async () => {
      const results = await GetPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getAllPackageDetailsSpy).toHaveBeenCalledWith({ scope: '@momentum-design', since: 'fake-commit-2' });
      expect(results).toEqual(JSON.stringify(['@momentum-design/automation']));
    });

    it('should not fetch git list if the changed option is not provided', async () => {
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        scope: '@momentum-design',
      }));
      const results = await GetPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).not.toHaveBeenCalled();
      expect(getAllPackageDetailsSpy).toHaveBeenCalledWith({ scope: '@momentum-design', since: undefined });
      expect(results).toBeDefined();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });

  describe('dist-only filter', () => {
    let getAllPackageDetailsSpy: jest.SpyInstance;
    let parseSpy: jest.SpyInstance;
    let listSpy: jest.SpyInstance;
    let getPackagesWithDistChangesSpy: jest.SpyInstance;

    beforeEach(() => {
      listSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve(
        [
          { commit: 'fake-commit-1' },
          { commit: 'fake-commit-2' },
        ],
      ));
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        changed: '',
        'commit-index': 1,
        dependent: undefined,
        'dist-only': true,
        packages: undefined,
        packagesPath: './packages',
        scope: '@momentum-design',
      }));
      getAllPackageDetailsSpy = jest.spyOn(PackageCollection, 'getAllPackageDetails')
        .mockImplementation(() => Promise.resolve(
          [
            {
              location: 'packages/tools/automation',
              name: '@momentum-design/automation',
            },
            {
              location: 'packages/components',
              name: '@momentum-design/components',
            },
          ],
        ));
      getPackagesWithDistChangesSpy = jest.spyOn(Git, 'getPackagesWithDistChanges')
        .mockImplementation(() => Promise.resolve(['packages/components']));
    });

    it('should filter packages to only those with dist-affecting changes', async () => {
      const results = await GetPackages.execute();
      expect(parseSpy).toHaveBeenCalled();
      expect(listSpy).toHaveBeenCalledWith(1);
      expect(getAllPackageDetailsSpy).toHaveBeenCalledWith({ scope: '@momentum-design', since: 'fake-commit-2' });
      expect(getPackagesWithDistChangesSpy).toHaveBeenCalledWith(
        ['packages/tools/automation', 'packages/components'],
        'fake-commit-2',
      );
      expect(results).toEqual(JSON.stringify(['@momentum-design/components']));
    });

    it('should skip dist filtering when dist-only is false', async () => {
      parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => ({
        changed: '',
        'commit-index': 1,
        dependent: undefined,
        'dist-only': false,
        packages: undefined,
        packagesPath: './packages',
        scope: '@momentum-design',
      }));
      const results = await GetPackages.execute();
      expect(getPackagesWithDistChangesSpy).not.toHaveBeenCalled();
      expect(results).toEqual(JSON.stringify(['@momentum-design/automation', '@momentum-design/components']));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});
