// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_ANCHORPOPOVER_URL>', {
  props: {},
  example: () => html`<mdc-anchorpopover></mdc-anchorpopover>`,
  imports: ["import '@momentum-design/components/components/anchorpopover';"],
});
