import { AIAssistantPrompt } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_AIASSISTANTPROMPT_URL>', {
  props: {},
  example: props => {
    return <AIAssistantPrompt {...props} />;
  },
});
