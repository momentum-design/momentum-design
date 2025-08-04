// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ACCORDIONGROUP_URL>', {
  props: {},
  example: () => html`<mdc-accordiongroup></mdc-accordiongroup>`,
  imports: ["import '@momentum-design/components/components/accordiongroup';"],
});
