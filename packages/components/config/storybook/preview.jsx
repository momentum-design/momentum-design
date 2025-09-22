import React from 'react';
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';
import { Title, Subtitle, Description } from '@storybook/blocks';
import { setCustomElementsManifest } from '@storybook/web-components';

import customElements from '../../dist/custom-elements.json';

import { themes } from './themes';
import { withThemeProvider } from './provider/themeProvider';
import { withIconProvider } from './provider/iconProvider';
import { withIllustrationProvider } from './provider/illustrationProvider';
import { withCssPropertyProvider } from './provider/cssPropertyProvider';

const cssProperties = [];

function collectCssProperties(declaration) {
  if (declaration.cssProperties) {
    declaration.cssProperties.forEach(property => {
      if (!cssProperties.includes(property.name)) {
        cssProperties.push(property.name);
      }
    });
  }
}

function refactorCustomElements(customElements) {
  const toCamelCase = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

  customElements.modules.forEach(module => {
    module.declarations.forEach(declaration => {
      // Collect CSS properties
      collectCssProperties(declaration);

      // modify css parts to start with Part Name:
      const mappedParts = declaration.cssParts?.map(part => ({
        ...part,
        name: `Shadow Part Name: "${part.name}"`,
      }));

      const mappedEvents = declaration.events?.map(event => ({
        ...event,
        name: `Event Name: "${event.name}"`,
      }));

      const attributesMap = new Set(declaration?.attributes?.map(attr => toCamelCase(attr.name)));
      // Filter members based on attributesMap
      const filteredMembers = declaration.members?.filter?.(member => !attributesMap.has(member.name)) ?? [];
      Object.assign(declaration, { members: filteredMembers, cssParts: mappedParts, events: mappedEvents });
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
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
        </>
      ),
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
        },
      },
      internal: {
        styles: {
          backgroundColor: '#0D2C3D',
          borderColor: '#1D9BF0',
          color: '#FFFFFFF2',
        },
        title: 'Internal',
        tooltip: {
          title: 'This Component is Internal',
          desc: 'This component is not intended for direct consumption.',
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
      storySort: (story1, story2) => globalThis['storybook-multilevel-sort:storySort'](story1, story2),
    },
    direction: 'ltr',
  },
  decorators: [withCssPropertyProvider(cssProperties), withThemeProvider, withIconProvider, withIllustrationProvider],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: themes[0].displayName,
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'globe',
        // Array of plain string values or MenuItem shape (see below)
        items: themes.map(theme => theme.displayName),
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
