import { Number } from "../../../../dist/react";
import figma from "@figma/code-connect";

figma.connect(
  '<FIGMA_NUMBER_URL>',
  {
    props: {},
    example: (props) => {
      return <Number {...props}/>
    },
  },
)
