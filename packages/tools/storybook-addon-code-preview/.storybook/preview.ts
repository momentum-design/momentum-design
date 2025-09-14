import type { Preview } from "@storybook/react-vite";
import { themes } from "./themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    codePreview: {
      languages: [{
        id: 'lit',
        label: 'Lit',
        format: 'html',
        type: 'base',
        status: 'active'
      }, 
      {
        id: 'react',
        label: 'React (WIP)',
        format: 'jsx',
        type: 'inherit',
        status: 'wip'
      }],
      initialLanguageId: 'lit',
    }
  },
  initialGlobals: {
    background: { value: "light" },
  },
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
