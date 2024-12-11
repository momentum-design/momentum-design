import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';

import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../../dist/custom-elements.json';
import { themes } from './themes';
import { withThemeProvider } from './provider/themeProvider';
import { withIconProvider } from './provider/iconProvider';

function refactorCustomElements(customElements) {
  const toCamelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  customElements.modules.forEach((module) => {
    module.declarations.forEach((declaration) => {
      const attributesMap = new Set(declaration?.attributes?.map((attr) => toCamelCase(attr.name)));
      // Filter members based on attributesMap
      const filteredMembers = declaration.members.filter((member) => !attributesMap.has(member.name));
      Object.assign(declaration, { members: filteredMembers });
    });
  });

  return customElements;
}

const refactoredCustomElements = refactorCustomElements(customElements);

setCustomElementsManifest(refactoredCustomElements);

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
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    badgesConfig: {
      wip: {
        styles: {
          backgroundColor: '#30240D',
          borderColor: '#D6B220',
          color: '#FFFFFFF2',
        },
        title: 'Work In Progress',
        tooltip: {
          title: 'This Component is Work In Progress',
          desc: 'Keep an eye on the Release history for updates or provide feedback.',
          links: [
            { title: 'Release history', href: 'https://github.com/momentum-design/momentum-design/releases' },
            {
              title: 'Leave feedback',
              href: 'https://github.com/momentum-design/momentum-design/issues',
            },
          ],
        },
      },
      stable: {
        styles: {
          backgroundColor: '#416116',
          borderColor: '#93C437',
          color: '#FFFFFFF2',
        },
        title: 'Stable',
        tooltip: {
          title: 'This Component is Stable',
          desc: 'Ready for use.',
          links: [
            { title: 'Consumption guide', href: 'https://momentum-design.github.io/momentum-design/en/components/' },
            { title: 'Release history', href: 'https://github.com/momentum-design/momentum-design/releases' },
            {
              title: 'Leave feedback',
              href: 'https://github.com/momentum-design/momentum-design/issues',
            },
          ],
        },
      },
      deprecated: {
        styles: {
          backgroundColor: '#4F0E10',
          borderColor: '#FC8B98',
          color: '#FFFFFFF2',
        },
        title: 'Deprecated',
        tooltip: {
          title: 'This Component is Deprecated',
          desc: 'Check the Release history for more information about deprecation or provide feedback.',
          links: [
            { title: 'Release history', href: 'https://github.com/momentum-design/momentum-design/releases' },
            {
              title: 'Leave feedback',
              href: 'https://github.com/momentum-design/momentum-design/issues',
            },
          ],
        },
      },
    },
    controls: {
      disableSaveFromUI: true,
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Consumption', 'Styling', 'Components', 'Work In Progress'],
      },
    },
    direction: 'ltr',
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
