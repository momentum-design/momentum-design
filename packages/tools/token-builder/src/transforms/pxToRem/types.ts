import type { TransformedToken } from 'style-dictionary';

export type Token = TransformedToken;

export type Matcher = (token: Token) => boolean;

export type Transformer = (token: Token, options: any) => string;

export type Type = 'name' | 'value';

export interface Config {
  transitive?: boolean;
}
