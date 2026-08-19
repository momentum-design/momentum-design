import { StatusMessage } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_STATUSMESSAGE_URL>', {
  props: {},
  example: props => <StatusMessage {...props} />,
});
