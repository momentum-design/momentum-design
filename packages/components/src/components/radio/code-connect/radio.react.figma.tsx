import React from "react";
import { Radio } from "../../../../dist/react";
import figma from "@figma/code-connect";

figma.connect(
  Radio,
  '<FIGMA_RADIO_URL>',
  {
    props: {
    },
    example: (props) => <Radio {...props} />,
    links: [
      {
        name: "Storybook",
        url: "https://momentum-design.github.io/momentum-design/storybook-static/index.html?path=/story/components-radio--example"
      },
      {
        name: "NPM",
        url: "https://www.npmjs.com/package/@momentum-design/components"
      }
    ]
  },
)
