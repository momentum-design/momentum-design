import { addons } from 'storybook/manager-api';

import momentum from './MomentumStorybookTheme';

addons.setConfig({
  bottomPanelHeight: '500',
  panelPosition: 'bottom',
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  theme: momentum,
});
