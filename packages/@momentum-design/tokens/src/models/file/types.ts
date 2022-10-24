import { TransformedToken } from 'style-dictionary';

export type Scope = 'categories' | 'items' | 'types';

export interface Config {
  categories: Array<string>;
  extension: string;
  format: string;
  items?: Array<string>;
  name: string;
  types?: Array<string>;
}

export interface Data {
  categories: Array<string>;
  extension: string;
  format: string;
  items: Array<string>;
  name: string;
  types: Array<string>;
}

export interface Serial {
  destination: string;
  format: string;
  filter: ((token: TransformedToken) => boolean);
}
