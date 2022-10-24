export interface TokenFileConfig {
  categories: Array<string>;
    filters?: Array<string>;
    items?: Array<string>;
    name: string;
    types?: Array<string>;
}

export interface TokenPlatformConfig {
  group: string;
  name: string;
  extension: string;
  format: string;
}

export interface TokenConfig {
  files: Array<TokenFileConfig>;
  name: string;
  platforms: Array<TokenPlatformConfig>;
  type: string;
}

export interface Arguments {
  build?: Array<string | number>;
}
