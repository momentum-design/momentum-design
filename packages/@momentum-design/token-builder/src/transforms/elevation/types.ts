import type { TransformedToken } from 'style-dictionary';

export type Token = TransformedToken;

export type Matcher = (token: Token) => boolean;

export type Transformer = (token: Token) => any;

export type Type = 'attribute' | 'name' | 'value';

export interface Config {
  transitive?: boolean;
}
