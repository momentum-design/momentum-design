// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_CONNECTOR_URL>', {
  props: {},
  example: () => html`<mdc-connector></mdc-connector>`,
  imports: ["import '@momentum-design/components/components/connector';"],
});
