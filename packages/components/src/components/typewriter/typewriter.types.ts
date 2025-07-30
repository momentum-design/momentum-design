import type { ValueOf, TypedEvent } from '../../utils/types';
import type { TextType, TagName } from '../text/text.types';

import type Typewriter from './typewriter.component';
import { SPEED } from './typewriter.constants';

type TypewriterSpeed = ValueOf<typeof SPEED> | 'slow' | 'normal' | 'fast' | 'very-slow' | 'very-fast';

interface TextChunk {
  text: string;
  speed?: TypewriterSpeed | number;
  instant?: boolean;
}

type TypewriterChangeEvent = TypedEvent<Typewriter, { content: string; isTyping: boolean }>;
type TypewriterTypingCompleteEvent = TypedEvent<Typewriter, { finalContent: string; totalDuration: number }>;

interface Events {
  onChangeEvent: TypewriterChangeEvent;
  onTypingCompleteEvent: TypewriterTypingCompleteEvent;
}

export type {
  TypewriterSpeed,
  TextType,
  TagName,
  Events,
  TextChunk,
  TypewriterChangeEvent,
  TypewriterTypingCompleteEvent,
};
