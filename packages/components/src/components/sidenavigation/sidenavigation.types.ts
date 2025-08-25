import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type SideNavigation from './sidenavigation.component';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
type SideNavigationActiveChangeEvent = TypedCustomEvent<SideNavigation, { navId: string; active: boolean }>;
type SideNavigationToggleEvent = TypedCustomEvent<SideNavigation, { expanded: boolean }>;
interface Events {
  onActiveChangeEvent: SideNavigationActiveChangeEvent;
  onToggleEvent: SideNavigationToggleEvent;
}

export type { SideNavigationVariant, Events };
