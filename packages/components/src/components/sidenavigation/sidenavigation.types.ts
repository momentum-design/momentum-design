import type { ValueOf } from '../../utils/types';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;

export type { SideNavigationVariant };
