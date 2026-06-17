import type { Preview } from '@storybook/react-vite';
import { setupDocs } from '../src';

const markdown = import.meta.glob('../src/stories/fixtures/*.component.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

setupDocs({
  markdown,
  // The fixture path is `.../fixtures/<name>.component.md`; key by `<name>`.
  keyFromPath: (path) => {
    const match = path.match(/\/([^/]+)\.component\.md$/);
    return match?.[1];
  },
  // Test stories use a flat title like `Demo/<name>`; key by the last segment.
  keyFromMeta: (meta) => {
    const title = typeof meta.title === 'string' ? meta.title : undefined;
    return title?.split('/').pop();
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
