// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_LISTHEADER_URL>', {
  props: {},
  example: () => html`<mdc-listheader></mdc-listheader>`,
  imports: ["import '@momentum-design/components/components/listheader';"],
});
