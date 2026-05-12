import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type SideNavigation from './sidenavigation.component';
import { SUBMENU_TYPES, VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
type SideNavigationSubmenuType = ValueOf<typeof SUBMENU_TYPES>;
type SideNavigationActiveChangeEvent = TypedCustomEvent<SideNavigation, { navId: string; active: boolean }>;
type SideNavigationToggleEvent = TypedCustomEvent<SideNavigation, { expanded: boolean }>;
interface Events {
  onActiveChangeEvent: SideNavigationActiveChangeEvent;
  onToggleEvent: SideNavigationToggleEvent;
}

export type { SideNavigationVariant, SideNavigationSubmenuType, Events };
