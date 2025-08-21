import type AnimationNames from '@momentum-design/animations/dist/types/types';

import type { TypedCustomEvent } from '../../utils/types';

import type Animation from './animation.component';

/** Event mapping for React */
interface Events {
  /** This event is dispatched when the animation is loaded */
  onLoadEvent: TypedCustomEvent<Animation, {name: AnimationNames}>;
  /** This event is dispatched when all animation loops completed */
  onCompleteEvent: TypedCustomEvent<Animation, {name: AnimationNames}>;
  /** This event is dispatched when animation loading failed */
  onErrorEvent: TypedCustomEvent<Animation, {error: Error}>;
}

type LoopType = `${boolean | number}`;

export type { Events, AnimationNames, LoopType };
