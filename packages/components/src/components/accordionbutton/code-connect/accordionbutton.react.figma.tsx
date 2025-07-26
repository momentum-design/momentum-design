import { Accordionbutton } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ACCORDIONBUTTON_URL>', {
  props: {},
  example: props => {
    return <Accordionbutton {...props} />;
  },
});
