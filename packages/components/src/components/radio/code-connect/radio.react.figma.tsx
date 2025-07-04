import { Radio } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_RADIO_URL>', {
  props: {
    toggletipText: figma.boolean('Info Button', {
      true: 'This is a toggletip text to let the info button appear.',
      false: undefined,
    }),
  },
  example: props => {
    return <Radio {...props} />;
  },
});
