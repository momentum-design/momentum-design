import Platform, { PlatformSerial } from '../platform';

export interface Config {
  filters?: Array<string>;
  name: string;
  platforms?:Array<Platform>;
  type: string;
}

export interface Data {
  filters: Array<string>;
  name: string;
  platforms: Array<Platform>;
  type: string;
}

export interface Serial {
  source: Array<string>;
  platforms: Record<string, PlatformSerial>;
}
