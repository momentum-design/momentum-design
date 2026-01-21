import { createContext } from '@lit/context';

import { TAG_NAME } from './textoverflowobserverprovider.constants';
import type { ContextType } from './textoverflowobserverprovider.types';

const TextOverflowObserverProviderContext = createContext<ContextType>(TAG_NAME);

export default TextOverflowObserverProviderContext;
