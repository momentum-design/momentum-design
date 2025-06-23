// @ts-ignore
import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_RADIO_URL>', {
  props: {},
  example: () => html`<mdc-radio></mdc-radio>`,
  links: [
    {
      name: "Storybook",
      url: "https://momentum-design.github.io/momentum-design/storybook-static/index.html?path=/story/components-radio--example"
    },
    {
      name: "NPM",
      url: "https://www.npmjs.com/package/@momentum-design/components"
    }
  ],
  imports: ["import '@momentum-design/components/components/radio';"],
});