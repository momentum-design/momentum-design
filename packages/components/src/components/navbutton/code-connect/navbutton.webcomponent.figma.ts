// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_NAVBUTTON_URL>', {
  props: {},
  example: () => html`<mdc-navbutton></mdc-navbutton>`,
  imports: ["import '@momentum-design/components/components/navbutton';"],
});
