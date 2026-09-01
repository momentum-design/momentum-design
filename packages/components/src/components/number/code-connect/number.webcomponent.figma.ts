// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_NUMBER_URL>', {
  props: {},
  example: () => html`<mdc-number></mdc-number>`,
  imports: ["import '@momentum-design/components/components/number';"],
});