import { Yarn } from '../../utils';
import type { YarnWhyItem } from '../../utils';

import Package from '../package';

import PackageCollection from './package-collection';

describe('PackageCollection', () => {
  describe('getDependents', () => {
    let whySpy: jest.SpyInstance;

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('shares a single visited set across all top-level packages to break cyclic graphs', async () => {
      // Simulate the cycle: components ↔ storybook-addon-docs. Both are top-level entries
      // in the collection (as would happen when both appear in the changed-packages list).
      const whyResponses: Record<string, Array<YarnWhyItem>> = {
        '@momentum-design/components': [
          {
            value: '@momentum-design/storybook-addon-docs@workspace:packages/tools/storybook-addon-docs',
            children: {},
          },
        ],
        '@momentum-design/storybook-addon-docs': [
          {
            value: '@momentum-design/components@workspace:packages/components',
            children: {},
          },
        ],
      };

      whySpy = jest
        .spyOn(Yarn, 'why')
        .mockImplementation((packageName: string) => Promise.resolve(whyResponses[packageName] ?? []));

      const collection = new PackageCollection({ packagesPath: 'packages' });
      collection.mount(
        new Package({ name: 'components', scope: '@momentum-design', packagesPath: 'packages' }),
        new Package({ name: 'storybook-addon-docs', scope: '@momentum-design', packagesPath: 'packages' }),
      );

      await collection.getDependents(true);

      // With a shared visited set, each package is yarn-why-d at most once across the
      // entire collection-level traversal: 2 top-level calls and no further recursion.
      expect(whySpy).toHaveBeenCalledTimes(2);
      expect(whySpy.mock.calls.map((call) => call[0]).sort()).toStrictEqual([
        '@momentum-design/components',
        '@momentum-design/storybook-addon-docs',
      ]);
      expect(collection.packageNames.sort()).toStrictEqual([
        '@momentum-design/components',
        '@momentum-design/storybook-addon-docs',
      ]);
    });
  });
});
