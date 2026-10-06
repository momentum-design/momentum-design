import type { AssetLoadingOptions, AssetRequest, AssetSource } from './asset-loader.types';

let options: AssetLoadingOptions | undefined;

/** Configure trusted asset sources before registering or rendering components. */
export const configureAssetLoading = (configuration: AssetLoadingOptions): void => {
  options = configuration;
};

export const resolveAssetSource = ({ family, name }: AssetRequest): AssetSource => {
  if (!options) {
    throw new Error('External asset loading has not been configured.');
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    throw new Error('Invalid asset name.');
  }
  const source = options.resolveAsset({ family, name });
  if (!source || !['svg', 'png'].includes(source.format) || (source.format === 'png' && family !== 'brandvisual')) {
    throw new Error('Invalid asset source or format.');
  }
  return source;
};
