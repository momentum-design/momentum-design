import fs from 'fs/promises';
import path from 'path';
import StyleDictionary, { Config, Core } from 'style-dictionary';

import { TokenConfig } from '../../common';
import { File, Platform, Scope } from '../../models';

class Build {
  public configFileLocations: Array<string>;

  public constructor(...configFileLocations: Array<string>) {
    this.configFileLocations = [...configFileLocations];
  }

  public run(): Promise<void> {
    return Build.readTokenConfigs(...this.configFileLocations)
      .then((tokenConfigs) => {
        const styleDictionaryConfigs = Build.buildStyleDictionaryConfigs(...tokenConfigs);
        const dictionaries = Build.createDictionaries(...styleDictionaryConfigs);

        Build.buildTokens(...dictionaries);
      });
  }

  public static buildStyleDictionaryConfig(tokenConfig: TokenConfig): Array<Config> {
    return tokenConfig.files.map((file) => new Scope({
      filters: file.filters,
      name: tokenConfig.name,
      platforms: tokenConfig.platforms.map((platform) => new Platform({
        group: platform.group,
        name: platform.name,
        files: [
          new File({
            categories: file.categories,
            extension: platform.extension,
            format: platform.format,
            items: file.items,
            name: file.name,
            types: file.types,
          }),
        ],
      })),
      type: tokenConfig.type,
    }).serial);
  }

  public static buildStyleDictionaryConfigs(...tokenConfigs: Array<TokenConfig>): Array<Config> {
    return tokenConfigs.reduce((styleDictionaryConfigs: Array<Config>, styleDictionaryConfig) => ([
      ...styleDictionaryConfigs,
      ...Build.buildStyleDictionaryConfig(styleDictionaryConfig),
    ]), []);
  }

  public static buildTokens(...dictionaries: Array<Core>): void {
    dictionaries.forEach((dictionary) => dictionary.buildAllPlatforms());
  }

  public static createDictionaries(...configs: Array<Config>): Array<Core> {
    return configs.map((config) => StyleDictionary.extend(config));
  }

  public static readTokenConfig(location: string): Promise<TokenConfig> {
    const destination = path.join(process.cwd(), location);

    return fs.readFile(destination)
      .then((data) => data.toString())
      .then((string): TokenConfig => JSON.parse(string));
  }

  public static readTokenConfigs(...locations: Array<string>): Promise<Array<TokenConfig>> {
    return Promise.all(locations.map((location) => Build.readTokenConfig(location)));
  }
}

export default Build;
