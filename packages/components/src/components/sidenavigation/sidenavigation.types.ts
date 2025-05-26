import type { ValueOf } from '../../utils/types';
import { VARIANTS } from './sidenavigation.constants';

type SideNavigationVariant = ValueOf<typeof VARIANTS>;
interface Events {
    onClickEvent: MouseEvent;
    onKeyDownEvent: KeyboardEvent;
    onKeyUpEvent: KeyboardEvent;
    onFocusEvent: FocusEvent;
    onActiveChangeEvent: Event;
}

export type { SideNavigationVariant, Events };
