// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_COMBOBOX_URL>', {
  props: {},
  example: () => html`<mdc-combobox></mdc-combobox>`,
  imports: ["import '@momentum-design/components/components/combobox';"],
});
