import type { ValueOf } from '../../utils/types';
import type { TextType, TagName } from '../text/text.types';

import { SPEED } from './typewriter.constants';

type TypewriterSpeed = ValueOf<typeof SPEED> | 'slow' | 'normal' | 'fast' | 'very-slow' | 'very-fast';

interface TextChunk {
  text: string;
  speed?: TypewriterSpeed | number;
  instant?: boolean;
}

interface Events {
  onChangeEvent: CustomEvent<void>;
  onTypingCompleteEvent: CustomEvent<void>;
}

export type { TypewriterSpeed, TextType, TagName, Events, TextChunk };
