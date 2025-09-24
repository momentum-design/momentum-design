import { Announcementdialog } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ANNOUNCEMENTDIALOG_URL>', {
  props: {},
  example: props => {
    return <Announcementdialog {...props} />;
  },
});
