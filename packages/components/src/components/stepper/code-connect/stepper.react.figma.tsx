import { Stepper } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_STEPPER_URL>', {
  props: {},
  example: props => {
    return <Stepper {...props} />;
  },
});
