// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ACCORDION_URL>', {
  props: {},
  example: () => html`<mdc-accordion></mdc-accordion>`,
  imports: ["import '@momentum-design/components/components/accordion';"],
});
