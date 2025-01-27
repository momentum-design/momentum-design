import type { ValueOf } from '../../utils/types';
import { VALIDATION } from './formfieldwrapper.constants';

type ValidationType = ValueOf<typeof VALIDATION>;

export { ValidationType };
