import { createContext } from '@lit/context';

import { TAG_NAME } from './illustrationprovider.constants';
import type { IllustrationSet, CacheStrategy } from './illustrationprovider.types';

class IllustrationProviderContext {
  public illustrationSet?: IllustrationSet;

  public fileExtension?: string;

  public url?: string;

  public cacheName?: string;

  public cacheStrategy?: CacheStrategy;

  // create typed lit context as part of the IllustrationProviderContext
  public static readonly context = createContext<IllustrationProviderContext>(TAG_NAME);
}

export default IllustrationProviderContext;
