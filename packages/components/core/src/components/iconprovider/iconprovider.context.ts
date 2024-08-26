import { createContext } from '@lit-labs/context';

import { TAG_NAME } from './iconprovider.constants';

class IconProviderContext {
  public fileExtension?: string;

  public url?: string;

  public lengthUnit?: string;

  // create typed lit context as part of the IconProviderContext
  public static context = createContext<IconProviderContext>(TAG_NAME);
}

export default IconProviderContext;
