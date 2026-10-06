import type { AssetRequest, LoadedAsset } from './asset-loader.types';

export const requiresConfiguredProvider = false;

export const loadAsset = async ({ name }: AssetRequest): Promise<LoadedAsset> =>
  import(`@momentum-design/brand-visuals/dist/ts/${name}.ts`).then(module => module.default());
