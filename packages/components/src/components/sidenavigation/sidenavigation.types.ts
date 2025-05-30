import type { ValueOf } from '../../utils/types';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
interface Events {
    onActiveChangeEvent: Event;
}

export type { SideNavigationVariant, Events };
