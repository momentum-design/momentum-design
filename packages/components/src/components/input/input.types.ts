import type { ValueOf } from '../../utils/types';
import { TYPE } from './input.constants';

type InputType = ValueOf<typeof TYPE>;

export { InputType };
