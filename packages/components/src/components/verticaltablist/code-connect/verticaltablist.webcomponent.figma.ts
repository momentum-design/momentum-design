// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_VERTICALTABLIST_URL>', {
  props: {},
  example: () => html`<mdc-verticaltablist></mdc-verticaltablist>`,
  imports: ["import '@momentum-design/components/components/verticaltablist';"],
});
