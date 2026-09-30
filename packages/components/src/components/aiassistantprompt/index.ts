import AIAssistantPrompt from './aiassistantprompt.component';
import { TAG_NAME } from './aiassistantprompt.constants';

AIAssistantPrompt.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-aiassistantprompt']: AIAssistantPrompt;
  }
}

export default AIAssistantPrompt;
