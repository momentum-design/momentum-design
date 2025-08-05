import type { TypedEvent } from '../../utils/types';
import type { TextType, TagName } from '../text/text.types';

import type Typewriter from './typewriter.component';

type TypewriterSpeed = 'slow' | 'normal' | 'fast' | 'very-slow' | 'very-fast' | string;

interface TextChunk {
  text: string;
  speed?: TypewriterSpeed;
  instant?: boolean;
}

type TypewriterChangeEvent = TypedEvent<Typewriter, { content: string; isTyping: boolean }>;
type TypewriterTypingCompleteEvent = TypedEvent<Typewriter, { finalContent: string }>;

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
