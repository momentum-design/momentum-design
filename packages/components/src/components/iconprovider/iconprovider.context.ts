import { createContext } from '@lit/context';

import { TAG_NAME } from './iconprovider.constants';
import type { IconSet, CacheStrategy } from './iconprovider.types';

class IconProviderContext {
  public iconSet?: IconSet;

  public fileExtension?: string;

  public url?: string;

  public lengthUnit?: string;

  public size?: number;

  public cacheName?: string;

  public cacheStrategy?: CacheStrategy;

  // create typed lit context as part of the IconProviderContext
  public static readonly context = createContext<IconProviderContext>(TAG_NAME);
}

export default IconProviderContext;
