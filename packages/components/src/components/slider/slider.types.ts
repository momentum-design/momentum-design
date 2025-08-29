import { Slider } from '../..';
import { OverrideEventTarget, TypedCustomEvent } from '../../utils/types';

type SliderChangeEvent = TypedCustomEvent<Slider>;

interface Events {
  onInputEvent: OverrideEventTarget<InputEvent, Slider>;
  onChangeEvent: SliderChangeEvent;
}

export type { Events };
