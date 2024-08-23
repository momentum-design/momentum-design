import { Yarn } from '../../utils';
import { ListItem } from '../../utils/yarn/types';

import Package from '../package';

import type { Config, Data, PackageListDetails } from './types';

class PackageCollection {
  protected config: Config;

  protected data: Data;

  public constructor(config: Config) {
    this.config = structuredClone(config);
    this.data = {
      collection: [],
    };
  }

  public get collection(): Array<Package> {
    return [...this.data.collection];
  }

  public get packageNames(): Array<string> {
    return this.collection.map((pack) => pack.package);
  }

  public clean(): this {
    this.data.collection.length = 0;

    return this;
  }

  public getDependents(recursive?: boolean): Promise<this> {
    return Promise.all(this.collection.map((pack) => pack.getDependents(recursive)))
      .then((packages) => {
        const flattenedResults = packages.flat(Infinity) as Array<Package>;
        const cleanedResults = [...new Set(flattenedResults)];
        this.mount(...cleanedResults);

        return this;
      });
  }

  public getPackage(pack: Partial<Package>): Package | undefined {
    return this.collection.find((item) => item.package === pack.package);
  }

  public hasPackage(pack: Partial<Package>): boolean {
    return !!this.getPackage(pack);
  }

  public mount(...packages: Array<Package>): this {
    packages.forEach((pack) => {
      if (this.hasPackage(pack)) {
        return;
      }

      this.data.collection.push(pack);
    });

    return this;
  }

  public unmount(...packages: Array<Package>): this {
    packages.forEach((pack) => {
      if (!this.hasPackage(pack)) {
        return;
      }

      const foundPackage = this.getPackage(pack) as Package;
      const { collection } = this.data;

      collection.splice(collection.indexOf(foundPackage), 1);
    });

    return this;
  }

  public static getAllPackageDetails(details: PackageListDetails): Promise<Array<ListItem>> {
    return Yarn.list(details.since)
      .then((list) => details.scope ? list.filter(({ name }) => name.includes(details?.scope ?? '')) : list);
  }
}

export default PackageCollection;
