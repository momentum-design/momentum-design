import fs from 'fs/promises';
import path from 'path';

import Yarn from '../yarn/index.js';

import CONSTANTS from './constants.js';

class Package {
  #config;

  #data;

  constructor(config = {}) {
    this.#config = structuredClone(config);
    this.#data = {
      dependents: [],
      definition: {},
    };
  }

  get definition() {
    return structuredClone(this.#data.definition);
  }

  get definitionFile() {
    return path.join(this.path, CONSTANTS.DEFINITION_FILE);
  }

  get definitionSerial() {
    return `${JSON.stringify(this.definition, null, 2)}\n`;
  }

  get dependents() {
    return this.#data.dependents.length > 0 ? [...this.#data.dependents] : undefined;
  }

  get completeName() {
    return this.#config.name;
  }

  get name() {
    return this.#config.name.split('/')[1];
  }

  get path() {
    return path.join(process.cwd(), this.#config.packagesPath, this.scope, this.name);
  }

  get scope() {
    return this.#config.name.split('/')[0];
  }

  get version() {
    if (!this.#data.definition.version) {
      return undefined;
    }

    const [major, minor, patch] = this.#data.definition.version.split('.').map((section) => parseInt(section));

    return { major, minor, patch };
  }

  set version({ major, minor, patch } = {}) {
    this.#data.definition.version = [major, minor, patch].join('.');
  }

  async initialize() {
    await this.getDependents();
    await this.getDefinition();

    return this;
  }

  async getDefinition() {
    return await fs.readFile(path.join(this.path, Package.CONSTANTS.DEFINITION_FILE))
      .then((buffer) => buffer.toString('utf-8'))
      .then((data) => JSON.parse(data))
      .then((definition) => {
        this.#data.definition = definition;
      });
  }

  async getDependents() {
    if (this.dependents) {
      return this.dependents;
    }

    return await Yarn.why(this.completeName)
      .then(async (list) => {
        this.#data.dependents = await Promise.all(list.map(async (packageName) => {
          const pack = new Package({
            name: packageName,
            packagesPath: this.#config.packagesPath,
          });

          return await pack.initialize();
        }));

        return this.dependents;
      });
  }

  async increment({ major = 0, minor = 0, patch = 0 } = {}) {
    if (Object.values(this.definition).length === 0) {
      await this.getDefinition();
    }

    if (typeof major !== 'number' || typeof minor !== 'number' || typeof patch !== 'number') {
      throw new Error('params "major", "minor", "patch" must be of type "number" or "undefined"');
    }

    this.version = {
      major: (this.version?.major ?? 0) + major,
      minor: (this.version?.minor ?? 0) + minor,
      patch: (this.version?.patch ?? 0) + patch,
    };

    await this.setDefinition();
  }

  async setDefinition(definitionSerial = this.definitionSerial) {
    return await fs.writeFile(this.definitionFile, definitionSerial);
  }

  static get CONSTANTS() {
    return structuredClone(CONSTANTS);
  }
}

export default Package;
