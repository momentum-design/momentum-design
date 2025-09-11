import { createContext } from '@lit/context';

import { TAG_NAME } from './controltypeprovider.constants';
import type { ControlType } from './controltypeprovider.types';

class ControlTypeProviderContext {
  public controlType?: ControlType;

  // create typed lit context as part of the ControlTypeProviderContext
  public static readonly context = createContext<ControlTypeProviderContext>(TAG_NAME);
}

export default ControlTypeProviderContext;
