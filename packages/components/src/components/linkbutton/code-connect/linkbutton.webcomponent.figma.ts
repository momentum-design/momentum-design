// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_LINKBUTTON_URL>', {
  props: {},
  example: () => html`<mdc-linkbutton></mdc-linkbutton>`,
  imports: ["import '@momentum-design/components/components/linkbutton';"],
});