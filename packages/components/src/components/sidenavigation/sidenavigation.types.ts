import type { ValueOf } from '../../utils/types';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
interface Events {
    onClickEvent: MouseEvent;
    onFocusEvent: FocusEvent;
}

export type { SideNavigationVariant, Events };
