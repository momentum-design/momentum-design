// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_RADIO_URL>', {
  props: {},
  example: () => html`<mdc-radio></mdc-radio>`,
  imports: ["import '@momentum-design/components/components/radio';"],
});
