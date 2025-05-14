import type AnimationNames from '@momentum-design/animations/dist/types/types';

/** Event mapping for React */
interface Events {
  /** This event is dispatched when the animation is loaded */
  onLoadEvent: Event;
  /** This event is dispatched when all animation loops completed */
  onCompleteEvent: Event;
  /** This event is dispatched when animation loading failed */
  onErrorEvent: Event;
}

type LoopType = `${boolean | number}`;

export type { Events, AnimationNames, LoopType };
