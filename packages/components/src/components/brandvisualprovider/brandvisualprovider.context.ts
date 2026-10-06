import { createContext } from '@lit/context';

import { TAG_NAME } from './brandvisualprovider.constants';
import type { BrandVisualSet, CacheStrategy } from './brandvisualprovider.types';

class BrandVisualProviderContext {
  public brandVisualSet?: BrandVisualSet;

  public fileExtension?: string;

  public url?: string;

  public cacheName?: string;

  public cacheStrategy?: CacheStrategy;

  // create typed lit context as part of the BrandVisualProviderContext
  public static readonly context = createContext<BrandVisualProviderContext>(TAG_NAME);
}

export default BrandVisualProviderContext;
