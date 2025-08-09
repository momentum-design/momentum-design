import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type SideNavigation from './sidenavigation.component';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
interface Events {
  onActiveChangeEvent: TypedCustomEvent<SideNavigation, { navId: string; active: boolean }>;
}

export type { SideNavigationVariant, Events };
