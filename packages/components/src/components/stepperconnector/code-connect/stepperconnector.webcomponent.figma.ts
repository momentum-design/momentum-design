// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_CONNECTOR_URL>', {
  props: {},
  example: () => html`<mdc-stepperconnector></mdc-stepperconnector>`,
  imports: ["import '@momentum-design/components/components/stepperconnector';"],
});
