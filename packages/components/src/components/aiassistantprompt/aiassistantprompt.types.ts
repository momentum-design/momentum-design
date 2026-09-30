import type { OverrideEventTarget, TypedCustomEvent } from '../../utils/types';

import type AIAssistantPrompt from './aiassistantprompt.component';

type AIAssistantPromptInputEvent = OverrideEventTarget<InputEvent, AIAssistantPrompt>;
type AIAssistantPromptChangeEvent = TypedCustomEvent<AIAssistantPrompt>;
type AIAssistantPromptFocusEvent = OverrideEventTarget<FocusEvent, AIAssistantPrompt>;
type AIAssistantPromptBlurEvent = OverrideEventTarget<FocusEvent, AIAssistantPrompt>;

interface Events {
  onInputEvent: AIAssistantPromptInputEvent;
  onChangeEvent: AIAssistantPromptChangeEvent;
  onFocusEvent: AIAssistantPromptFocusEvent;
  onBlurEvent: AIAssistantPromptBlurEvent;
}

export type {
  Events,
  AIAssistantPromptInputEvent,
  AIAssistantPromptChangeEvent,
  AIAssistantPromptFocusEvent,
  AIAssistantPromptBlurEvent,
};
