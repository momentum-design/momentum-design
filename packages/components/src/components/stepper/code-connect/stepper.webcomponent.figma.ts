// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_STEPPER_URL>', {
  props: {},
  example: () => html`<mdc-stepper></mdc-stepper>`,
  imports: ["import '@momentum-design/components/components/stepper';"],
});
