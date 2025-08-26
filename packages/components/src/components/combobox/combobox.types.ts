import type { ValueOf } from '../../utils/types';
import type { PopoverPlacement } from '../popover/popover.types';

import { ICON_NAME } from './combobox.constants';

interface Events {}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type IconName = ValueOf<typeof ICON_NAME>;

export type { Events, IconName, Placement };
