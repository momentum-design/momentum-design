// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_SLIDER_URL>', {
  props: {},
  example: () => html`<mdc-slider></mdc-slider>`,
  imports: ["import '@momentum-design/components/components/slider';"],
});
