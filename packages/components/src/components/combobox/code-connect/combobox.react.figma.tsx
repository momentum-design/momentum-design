import { Combobox } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_COMBOBOX_URL>', {
  props: {},
  example: props => {
    return <Combobox {...props} />;
  },
});
