// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_NUMBER_URL>', {
  props: {},
  example: () => html`<mdc-numberinput></mdc-numberinput>`,
  imports: ["import '@momentum-design/components/components/numberinput';"],
});