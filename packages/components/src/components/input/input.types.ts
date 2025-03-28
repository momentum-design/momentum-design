import type { ValueOf } from '../../utils/types';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, INPUT_TYPE } from './input.constants';

type AutoCapitalizeType = ValueOf<typeof AUTO_CAPITALIZE>;
type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;
type InputType = ValueOf<typeof INPUT_TYPE>;

export { AutoCapitalizeType, AutoCompleteType, InputType };
