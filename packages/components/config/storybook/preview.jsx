import React from 'react';
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/components/complete.css';
import { Title, Subtitle, Description } from '@storybook/addon-docs/blocks';
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
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
        </>
      ),
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
    controls: {
      disableSaveFromUI: true,
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    codePreview: {
      languages: [
        {
          id: 'lit',
          label: 'Lit',
          format: 'html',
          type: 'base',
          status: 'active',
        },
        {
          id: 'react',
          label: 'React (WIP)',
          format: 'jsx',
          type: 'inherit',
          status: 'wip',
        },
      ],
      initialLanguageId: 'lit',
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Consumption',
          'Styling',
          'Attributes',
          'Components',
          ['Docs', 'Accessibility', 'Example'],
          'Widgets',
          ['Docs', 'Accessibility', 'Example'],
          'Work In Progress',
          ['Docs', 'Accessibility', 'Example'],
          'Internal',
          ['Docs', 'Accessibility', 'Example'],
        ],
        locales: 'en-US',
      },
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
