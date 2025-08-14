import { Slider } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_SLIDER_URL>', {
  props: {},
  example: props => {
    return <Slider {...props} />;
  },
});
