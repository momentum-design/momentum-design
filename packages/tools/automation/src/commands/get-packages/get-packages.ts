import { Command, Package, PackageCollection } from '../../models';
import { Git } from '../../utils';
import { ListItem } from '../../utils/yarn/types';

import CONSTANTS from './constants';
import type { Config, Options } from './types';

class GetPackages extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(GetPackages.CONSTANTS.OPTIONS);

    return GetPackages.process(config)
      .then((results) => JSON.stringify(results.packageNames));
  }

  public static process(config: Config): Promise<PackageCollection> {
    const { changed, dependent, packages, packagesPath, scope } = config;
    const distOnly = config['dist-only'];
    const packageCollection = new PackageCollection({ packagesPath });
    let promise: Promise<string | undefined>;

    if (typeof changed === 'string' && changed.length === 0) {
      promise = Git.list(config['commit-index'])
        .then((gitList) => gitList[config['commit-index']].commit);
    } else {
      promise = Promise.resolve(changed);
    }

    return promise.then(
      (parsedChanged) => {
        // Filter by dist-affecting changes if flag is set
        if (distOnly && parsedChanged) {
          return PackageCollection.getAllPackageDetails({ scope, since: parsedChanged })
            .then(async (allPackageDetails) => {
              let packageDetails = packages?.length
                ? allPackageDetails.filter(
                  (eachPackage: ListItem) => packages.find((name) => name === eachPackage.name),
                )
                : allPackageDetails;

              const packagePaths = packageDetails.map((pkg) => pkg.location);
              const pathsWithDistChanges = await Git.getPackagesWithDistChanges(packagePaths, parsedChanged);

              packageDetails = packageDetails.filter(
                (pkg) => pathsWithDistChanges.includes(pkg.location),
              );

              return packageDetails;
            });
        }

        return PackageCollection.getAllPackageDetails({ scope, since: parsedChanged })
          .then((allPackageDetails) => {
            const packageDetails = packages?.length
              ? allPackageDetails.filter((eachPackage: ListItem) => packages.find((name) => name === eachPackage.name))
              : allPackageDetails;
            return packageDetails;
          });
      },
    ).then(
      (packageDetails) => {
        const finalPackages = packageDetails.map((eachPackage: ListItem) => {
          const [scope, name] = eachPackage.name.split('/');

          return new Package({
            name,
            scope,
            packagesPath: eachPackage.location,
          });
        });

        packageCollection.mount(...finalPackages);

        if (dependent) {
          return packageCollection.getDependents(true);
        }

        return Promise.resolve(packageCollection);
      },
    );
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default GetPackages;
