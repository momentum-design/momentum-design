// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_BANNER_URL>', {
  props: {},
  example: () => html`<mdc-banner></mdc-banner>`,
  imports: ["import '@momentum-design/components/components/banner';"],
});