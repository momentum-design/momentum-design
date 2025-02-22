import { createContext } from '@lit/context';

import { TAG_NAME } from './iconprovider.constants';

class IconProviderContext {
  public fileExtension?: string;

  public url?: string;

  public lengthUnit?: string;

  public size?: number;

  public cacheName?: string;

  public cacheStrategy?: 'in-memory-cache' | 'web-cache-api';

  // create typed lit context as part of the IconProviderContext
  public static readonly context = createContext<IconProviderContext>(TAG_NAME);
}

export default IconProviderContext;
