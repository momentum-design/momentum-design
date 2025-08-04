import { Accordiongroup } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ACCORDIONGROUP_URL>', {
  props: {},
  example: props => {
    return <Accordiongroup {...props} />;
  },
});
