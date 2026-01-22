import { createContext } from '@lit/context';

import { TAG_NAME } from './overflowobserver.constants';
import type { ContextType } from './overflowobserver.types';

const OverflowObserverContext = createContext<ContextType>(TAG_NAME);

export default OverflowObserverContext;
