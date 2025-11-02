import { Navbutton } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_NAVBUTTON_URL>', {
  props: {},
  example: props => {
    return <Navbutton {...props} />;
  },
});
