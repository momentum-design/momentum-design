import { AnchorPopover } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ANCHORPOPOVER_URL>', {
  props: {},
  example: props => {
    return <AnchorPopover {...props} />;
  },
});
