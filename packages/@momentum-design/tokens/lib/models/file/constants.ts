import type { Scope } from './types';

const FILE_SCOPES: Record<string, Scope> = {
  CATEGORIES: 'categories',
  ITEMS: 'items',
  TYPES: 'types',
};

const CONSTANTS = {
  FILE_SCOPES,
};

export default CONSTANTS;
