import { createContext } from '@lit/context';

import { TAG_NAME } from './controltypeprovider.constants';
import type { ControlType } from './controltypeprovider.types';

const ControlTypeProviderContext = createContext<ControlType>(TAG_NAME);

export default ControlTypeProviderContext;
