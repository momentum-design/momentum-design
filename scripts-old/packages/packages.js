import Git from '../git/index.js';
import Yarn from '../yarn/index.js';
import Package from '../package/index.js';

class Packages {
  #config;

  #data;

  constructor(config = {}) {
    this.#config = structuredClone(config);
    this.#data = {
      packages: {},
    };
  }

  get changed() {
    return this.#data.packages.changed ? [...this.#data.packages.changed] : undefined;
  }

  get collection() {
    return this.#data.packages.collection ? [...this.#data.packages.collection] : undefined;
  }

  get dependents() {
    return this.#data.packages.dependents ? [...this.#data.packages.dependents] : undefined;
  }

  get packagesPath() {
    return this.#config.packagesPath;
  }

  get targets() {
    const output = [];

    if (this.dependents) {
      output.push(...this.dependents);
    }

    if (this.changed) {
      output.push(...this.changed);
    }

    return output.length > 0 ? output : this.collection;
  }

  async initialize() {
    await this.getCollection();
    await this.getChanged();
    await this.getDependents();
    await this.increment();

    return this;
  }

  async getCollection() {
    const packageNames = this.#config.packages
      ? structuredClone(this.#config.packages)
      : await Yarn.list({ packageScope: this.#config.packageScope });

    this.#data.packages.collection = await Promise.all(packageNames.map(async (packageName) => {
      const pack = new Package({
        name: packageName,
        packagesPath: this.packagesPath
      });

      return await pack.initialize();
    }));

    return this.collection;
  }

  async getChanged(ref = this.#config.changed) {
    if (!this.#config.changed) {
      return this.changed;
    }

    if (!this.collection) {
      await this.getCollection();
    }

    let computedRef = ref;

    if (typeof computedRef !== 'string') {
      const commits = await Git.getCommits();
      computedRef = commits[1].commit;
    }

    const allChanged = await Yarn.list({ ref: computedRef, packageScope: this.#config.packageScope });
    const changed = allChanged.filter((packageName) => !!this.collection.find(
      (pack) => pack.completeName === packageName),
    );

    this.#data.packages.changed = await Promise.all(changed.map(async (packageName) => {
      const pack = new Package({
        name: packageName,
        packagesPath: this.packagesPath
      });

      return await pack.initialize();
    }));

    return this.changed;
  }

  async getDependents() {
    if (!this.#config.dependents) {
      return this.dependents;
    }

    if (!this.collection) {
      await this.getCollection();
    }

    if (this.#config.changed) {
      await this.getChanged();
    }

    const allDependents = await Promise.all(this.targets.reduce(async (collection, pack) => (
      [
      ...collection,
      ...pack.dependents,
    ], [])));

    const targetNames = this.targets.map((target) => target.completeName);
    const uniqueDependents = allDependents.filter((dependent) => !targetNames.includes(dependent.completeName));

    this.#data.packages.dependents = uniqueDependents;
  }

  async getTargets({ style } = {}) {
    await this.initialize();

    switch (style) {
      case 'names':
        return this.targets.map((target) => target.name);

      case 'objects':
        return this.targets;

      default:
        return this.targets.map((target) => target.completeName);
    }
  }

  async increment(version = this.#config.increment) {
    if (!version) {
      return this;
    }

    await Promise.all(this.targets.map(async (target) => await target.increment(version)));

    return this;
  };
}

export default Packages;
