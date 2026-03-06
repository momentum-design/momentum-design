import { Verticaltablist } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_VERTICALTABLIST_URL>', {
  props: {},
  example: props => {
    return <Verticaltablist {...props} />;
  },
});
