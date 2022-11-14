import fs from 'fs/promises';
import path from 'path';

import { Yarn } from '../../utils';

import CONSTANTS from './constants';
import type { Config, Version } from './types';

class Package {
  protected config: Config;

  protected data: any;

  constructor(config: any = {}) {
    this.config = structuredClone(config);
    this.data = {
      definition: {},
    };
  }

  public get definition(): any {
    return structuredClone(this.data.definition);
  }

  public get definitionSerial(): string {
    return `${JSON.stringify(this.definition, null, 2)}\n`;
  }

  public get definitionFilePath(): string {
    return path.join(this.path, Package.CONSTANTS.DEFINITION_FILE);
  }

  public get name(): string {
    return this.config.name;
  }

  public get package(): string {
    return `${this.scope}/${this.name}`;
  }

  public get path(): string {
    return path.join(this.config.packagesPath, this.package);
  }

  public get scope(): string {
    return this.config.scope;
  }

  public getDependents(recursive?: boolean): Promise<Array<Package>> {
    const { packagesPath } = this.config;

    return Yarn.why(this.package)
      .then((whyList) => whyList.filter((item) => item.value.startsWith(this.scope)))
      .then((whyList) => Package.generateConfigFromYarnWhy(...whyList))
      .then((configs) => configs.map((config) => new Package({
        ...config,
        packagesPath,
      })))
      .then((packages) => {
        // console.log(`dependents for ${this.package}`, packages);
        if (!recursive) {
          return Promise.resolve(packages);
        }

        return Promise.all(packages.map((pack) => pack.getDependents(recursive)))
          .then((dependentsMatrix) => {
            const flatDependents = dependentsMatrix.flat(Infinity) as Array<Package>;

            return [...new Set(flatDependents)];
          }).then((dependents) => [...new Set([...packages, ...dependents])]);
      });
  }

  public incrementVersion({ major, minor, patch }: Version): this {
    const [prevMajor, prevMinor, prevPatch] = this.definition.version
      ? this.definition.version.split('.').map((value: string) => parseInt(value, 10))
      : [0, 0, 0];

    const nextVersion = [
      prevMajor + major || 0,
      prevMinor + minor || 0,
      prevPatch + patch || 0,
    ];

    this.data.definition.version = nextVersion.join('.');

    return this;
  }

  public readDefinition(): Promise<this> {
    return fs.readFile(this.definitionFilePath)
      .then((buffer) => buffer.toString(Package.CONSTANTS.DEFINITION_FILE_ENCODING))
      .then((data) => JSON.parse(data))
      .then((definition) => {
        this.data.definition = definition;

        return Yarn.show(this.package);
      })
      .then((version) => {
        this.data.definition.version = [version.major, version.minor, version.patch].join('.');

        return this;
      });
  }

  public writeDefinition(): Promise<this> {
    return fs.writeFile(this.definitionFilePath, this.definitionSerial)
      .then(() => this);
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  public static generateConfigFromYarnWhy(...whyList: Array<any>): Array<Partial<Config>> {
    const packageNames = whyList.map((dependent) => `@${dependent.value.split('@')[1]}`);

    return packageNames.map((packageName) => {
      const [scope, name] = packageName.split('/');
      return { name, scope };
    });
  }
}

export default Package;
