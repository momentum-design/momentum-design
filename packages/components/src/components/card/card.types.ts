import type { ValueOf } from '../../utils/types';
import { VARIANTS, ORIENTATIONS } from './card.constants';

type CardVariant = ValueOf<typeof VARIANTS>;

type CardOrientation = ValueOf<typeof ORIENTATIONS>;

export { CardVariant, CardOrientation };
