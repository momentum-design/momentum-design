import { Slider } from '../..';
import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import { THUMBSTATE } from './slider.constants';

type SliderChangeEvent = TypedCustomEvent<Slider>;
type ThumbStateType = ValueOf<typeof THUMBSTATE>;

interface Events {
  onInputEvent: OverrideEventTarget<InputEvent, Slider>;
  onChangeEvent: SliderChangeEvent;
}

export type { Events, ThumbStateType };
