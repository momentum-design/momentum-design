import type BrandVisualNames from '@momentum-design/brand-visuals/dist/types/types';

import type { TypedCustomEvent } from '../../utils/types';

import type Brandvisual from './brandvisual.component';

interface Events {
  onLoadEvent: TypedCustomEvent<Brandvisual, { name: BrandVisualNames }>;
  onErrorEvent: TypedCustomEvent<Brandvisual, { error: Error }>;
}

interface imageProps {
  alt?: string;
}

export type { BrandVisualNames, imageProps, Events };
