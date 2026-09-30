// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_AIASSISTANTPROMPT_URL>', {
  props: {},
  example: () => html`<mdc-aiassistantprompt></mdc-aiassistantprompt>`,
  imports: ["import '@momentum-design/components/components/aiassistantprompt';"],
});
