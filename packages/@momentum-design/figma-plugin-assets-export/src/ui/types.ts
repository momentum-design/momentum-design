import { CONSTANTS } from './constants';

export type AssetsType = typeof CONSTANTS.ASSET_TYPES[keyof typeof CONSTANTS.ASSET_TYPES];
