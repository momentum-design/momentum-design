import { Yarn } from '../../utils';
import type { YarnWhyItem } from '../../utils';

import Package from './package';

describe('Package', () => {
  describe('getDependents', () => {
    let whySpy: jest.SpyInstance;

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('terminates with a bounded number of yarn-why calls when a workspace cycle is present', async () => {
      // Simulate a workspace cycle: components ↔ storybook-addon-docs.
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

      const components = new Package({
        name: 'components',
        scope: '@momentum-design',
        packagesPath: 'packages',
      });

      const dependents = await components.getDependents(true);

      // Without the visited-set guard, the cycle would cause `yarn why` to be invoked
      // indefinitely. With the guard, each side of the cycle is queried exactly once.
      expect(whySpy).toHaveBeenCalledTimes(2);
      expect(whySpy.mock.calls.map((call) => call[0]).sort()).toStrictEqual([
        '@momentum-design/components',
        '@momentum-design/storybook-addon-docs',
      ]);

      // The cycle peer is reported as a direct dependent; the start package is reported
      // as a transitive dependent through the peer (since `yarn why` says so). Both
      // appear exactly once.
      expect(dependents.map((pack) => pack.package).sort()).toStrictEqual([
        '@momentum-design/components',
        '@momentum-design/storybook-addon-docs',
      ]);
    });

    it('does not recurse when called non-recursively, regardless of cycles', async () => {
      whySpy = jest.spyOn(Yarn, 'why').mockResolvedValue([
        {
          value: '@momentum-design/storybook-addon-docs@workspace:packages/tools/storybook-addon-docs',
          children: {},
        },
      ]);

      const components = new Package({
        name: 'components',
        scope: '@momentum-design',
        packagesPath: 'packages',
      });

      const dependents = await components.getDependents();

      expect(dependents).toHaveLength(1);
      expect(dependents[0].package).toBe('@momentum-design/storybook-addon-docs');
      expect(whySpy).toHaveBeenCalledTimes(1);
    });

    it('honors a pre-populated visited set passed by the caller', async () => {
      whySpy = jest.spyOn(Yarn, 'why').mockResolvedValue([
        {
          value: '@momentum-design/storybook-addon-docs@workspace:packages/tools/storybook-addon-docs',
          children: {},
        },
      ]);

      const components = new Package({
        name: 'components',
        scope: '@momentum-design',
        packagesPath: 'packages',
      });

      const visited = new Set<string>(['@momentum-design/storybook-addon-docs']);
      const dependents = await components.getDependents(true, visited);

      // The immediate dependent is still returned, but it is not recursed into.
      expect(dependents).toHaveLength(1);
      expect(dependents[0].package).toBe('@momentum-design/storybook-addon-docs');
      expect(whySpy).toHaveBeenCalledTimes(1);
      expect(whySpy).toHaveBeenCalledWith('@momentum-design/components');
    });
  });
});
