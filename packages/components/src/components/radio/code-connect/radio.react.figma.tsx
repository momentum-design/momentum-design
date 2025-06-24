import React from "react";
import { Radio } from "../../../../dist/react";
import figma from "@figma/code-connect";

figma.connect(
  Radio,
  '<FIGMA_RADIO_URL>',
  {
    props: {
      toggletipText: figma.boolean('Info Button', {
        true: "This is a toggletip text for the info button.",
        false: undefined,
      }),
    },
    example: (props) => {
    return <Radio {...props}/>
    },
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
