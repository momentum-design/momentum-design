import Package from '../package';

export interface Config {
  packagesPath: string;
}

export interface Data {
  collection: Array<Package>
}
