import { Banner } from "../../../../dist/react";
import figma from "@figma/code-connect";

figma.connect(
  '<FIGMA_BANNER_URL>',
  {
    props: {},
    example: (props) => {
      return <Banner {...props}/>
    },
  },
)
