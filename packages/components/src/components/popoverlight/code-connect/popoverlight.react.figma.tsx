import { Popoverlight } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_POPOVERLIGHT_URL>', {
  props: {},
  example: props => {
    return <Popoverlight {...props} />;
  },
});
