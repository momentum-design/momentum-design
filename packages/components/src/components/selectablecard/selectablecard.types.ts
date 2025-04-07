import type { ValueOf } from '../../utils/types';
import { SELECTION_TYPE, ROLE } from './selectablecard.constants';

type SelectionType = ValueOf<typeof SELECTION_TYPE>;
type RoleType = ValueOf<typeof ROLE>;

export { SelectionType, RoleType };
