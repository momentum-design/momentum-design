import { Linkbutton } from "../../../../dist/react";
import figma from "@figma/code-connect";

figma.connect(
  '<FIGMA_LINKBUTTON_URL>',
  {
    props: {},
    example: (props) => {
      return <Linkbutton {...props}/>
    },
  },
)
