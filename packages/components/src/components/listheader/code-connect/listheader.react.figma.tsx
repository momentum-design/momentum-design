import { Listheader } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_LISTHEADER_URL>', {
  props: {},
  example: props => {
    return <Listheader {...props} />;
  },
});
