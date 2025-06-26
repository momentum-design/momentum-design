import type { ValueOf } from '../../utils/types';

import { SPINNER_SIZES, SPINNER_VARIANT } from './spinner.constants';

type SpinnerSize = ValueOf<typeof SPINNER_SIZES>;

type SpinnerVariant = ValueOf<typeof SPINNER_VARIANT>;

export type { SpinnerSize, SpinnerVariant };
