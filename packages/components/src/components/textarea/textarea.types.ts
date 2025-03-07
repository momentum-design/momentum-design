import type { ValueOf } from '../../utils/types';
import { AUTO_COMPLETE, WRAP } from './textarea.constants';

type WrapType = ValueOf<typeof WRAP>;

type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;

export { WrapType, AutoCompleteType };
