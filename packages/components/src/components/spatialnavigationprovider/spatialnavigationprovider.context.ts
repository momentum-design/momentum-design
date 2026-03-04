import { createContext } from '@lit/context';

import { TAG_NAME } from './spatialnavigationprovider.constants';
import { SpatialNavigationContextValue } from './spatialnavigationprovider.types';

const SpatialNavigationProviderContext = createContext<SpatialNavigationContextValue>(TAG_NAME);

export default SpatialNavigationProviderContext;
