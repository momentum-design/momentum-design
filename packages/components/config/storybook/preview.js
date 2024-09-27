import '@momentum-design/tokens/dist/css/core/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
import '@momentum-design/fonts/dist/css/fonts.css';

import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../../data/custom-elements.json';
import { themes } from './themes';
import { withThemeProvider } from './provider/themeProvider';
import { withIconProvider } from './provider/iconProvider';

setCustomElementsManifest(customElements);

const preview = {
  parameters: {
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: ['best-practice', 'wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
        },
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      controls: { expanded: true },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Components', 'Work In Progress'],
      },
    },
  },
  decorators: [withThemeProvider, withIconProvider],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: themes[0].displayName,
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'globe',
        // Array of plain string values or MenuItem shape (see below)
        items: themes.map((theme) => theme.displayName),
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
