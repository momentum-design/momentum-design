// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_POPOVERLIGHT_URL>', {
  props: {},
  example: () => html`<mdc-popoverlight></mdc-popoverlight>`,
  imports: ["import '@momentum-design/components/components/popoverlight';"],
});
