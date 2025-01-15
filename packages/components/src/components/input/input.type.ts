import type { ValueOf } from '../../utils/types';
import { TYPE, VALIDATION } from './input.constants';

type ValidationType = ValueOf<typeof VALIDATION>;
type InputType = ValueOf<typeof TYPE>;

export { ValidationType, InputType };
