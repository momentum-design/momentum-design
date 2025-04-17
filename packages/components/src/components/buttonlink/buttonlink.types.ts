import type { ValueOf } from '../../utils/types';
import { BUTTON_LINK_TYPE_INTERNAL } from './buttonlink.constants';

type ButtonLinkTypeInternal = ValueOf<typeof BUTTON_LINK_TYPE_INTERNAL>;
interface Events {
    onClickEvent: MouseEvent;
}

export type { Events, ButtonLinkTypeInternal };
