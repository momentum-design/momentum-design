import { Accordion } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ACCORDION_URL>', {
  props: {},
  example: props => {
    return <Accordion {...props} />;
  },
});
