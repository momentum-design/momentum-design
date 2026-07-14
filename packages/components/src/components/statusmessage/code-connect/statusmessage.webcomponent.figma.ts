// AI-Assisted
// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_STATUSMESSAGE_URL>', {
  props: {},
  example: () => html`<mdc-statusmessage></mdc-statusmessage>`,
  imports: ["import '@momentum-design/components/components/statusmessage';"],
});
// End AI-Assisted
