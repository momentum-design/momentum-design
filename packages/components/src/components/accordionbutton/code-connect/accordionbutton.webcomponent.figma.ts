// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ACCORDIONBUTTON_URL>', {
  props: {},
  example: () => html`<mdc-accordionbutton></mdc-accordionbutton>`,
  imports: ["import '@momentum-design/components/components/accordionbutton';"],
});
