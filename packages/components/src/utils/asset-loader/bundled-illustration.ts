import type { AssetRequest, LoadedAsset } from './asset-loader.types';

export const loadAsset = async ({ name }: AssetRequest): Promise<LoadedAsset> =>
  import(`@momentum-design/illustrations/dist/ts/${name}.ts`).then(module => module.default());
