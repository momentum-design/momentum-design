import path from 'path';

import { CONSTANTS as COMMON_CONSTANTS } from '../../common';
import Platform, { PlatformSerial } from '../platform';

import CONSTANTS from './constants';
import { Config, Data, Serial } from './types';

class Scope {
  protected data: Data;

  public constructor({ filters, name, platforms, type }: Config) {
    this.data = {
      filters: [],
      name,
      platforms: [],
      type,
    };

    if (Array.isArray(platforms)) {
      this.mountPlatforms(...platforms);
    }

    if (Array.isArray(filters)) {
      this.mountFilters(...filters);
    }
  }

  protected mountFilters(...filters: Array<string>): this {
    filters.forEach((filter) => {
      if (this.filters.includes(filter)) {
        return;
      }

      this.data.filters.push(filter);
    });

    return this;
  }

  public get filters(): Array<string> {
    return [...this.data.filters];
  }

  public get name(): string {
    return this.data.name;
  }

  public get outputPath(): string {
    return path.join(COMMON_CONSTANTS.PATHS.OUTPUT, this.type, this.name);
  }

  public get platforms(): Array<Platform> {
    return [...this.data.platforms];
  }

  public get referenceFilter(): Array<string> {
    return this.filters.length > 0
      ? this.filters.map((filter) => path.join(this.referencePath, filter))
      : [path.join(this.referencePath, Scope.CONSTANTS.REFERENCE_WILDCARD)];
  }

  public get referencePath(): string {
    return path.join(COMMON_CONSTANTS.PATHS.REFERENCE, this.type, this.name);
  }

  public get serial(): Serial {
    return {
      source: this.referenceFilter,
      platforms: this.platforms.reduce((platforms: Record<string, PlatformSerial>, platform: Platform) => ({
        ...platforms,
        [platform.name]: platform.serial,
      }), {}),
    };
  }

  public get type(): string {
    return this.data.type;
  }

  public mountPlatforms(...platforms: Array<Platform>): this {
    platforms.forEach((platform): void => {
      if (this.platforms.includes(platform) || platform instanceof Platform === false) {
        return;
      }

      platform.setScopeOutputPath(this.outputPath);
      this.data.platforms.push(platform);
    });

    return this;
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Scope;
