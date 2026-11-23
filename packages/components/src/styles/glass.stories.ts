import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../components/text';
import './glass.css';
import './glass.stories.styles.css';

/** The docs addon renders knowledge-base markdown; styles have no component folder to read it from. */
const markdown = [
  '---',
  'title: Glass',
  'summary: Shared stylesheet for the Momentum glass surface — a gradient hairline outline and a translucent fill with a radial highlight.',
  'tier: 3',
  '---',
  '',
  '## Overview',
  '',
  'Glass is a shared stylesheet, not a component. There is no `mdc-glass` element to render — you',
  'import the stylesheet once and apply the classes to any element you already have, whether that is',
  'a Momentum component, a plain `div`, or markup from another library.',
  '',
  '| Class |',
  '| --- |',
  '| `mdc-glass-border` |',
  '| `mdc-glass-overlay-background` |',
  '',
  '### When to use',
  '',
  '- Use `mdc-glass-overlay-background` for a surface that floats over video, imagery, or another',
  '  non-uniform backdrop and should let it show through.',
  '- Use `mdc-glass-border` to separate such a surface from what is behind it. The outline token is a',
  '  gradient, so it is painted by a masked pseudo-element rather than a `border`.',
  '- Use the two together for a full glass panel; they are independent and compose on the same',
  '  element, one using `::before` and the other `::after`.',
  '',
  '### When not to use',
  '',
  '- Do not use `mdc-glass-border` where a solid outline is wanted. Use a `border` with',
  '  `--mds-color-theme-outline-secondary-normal` instead.',
  '',
  '## Guidelines',
  '',
  '### Developer usage',
  '',
  '```js',
  "import '@momentum-design/components/styles/glass.css';",
  '```',
  '',
  '```html',
  '<div class="mdc-glass-border mdc-glass-overlay-background">Glass surface</div>',
  '```',
  '',
  'Override the fill, the blur, the outline colour, and the corner radius through their custom',
  'properties. Set them on the element so both classes pick up the same value:',
  '',
  '| Custom property | Default |',
  '| --- | --- |',
  '| `--mdc-glass-background` | `--mds-color-theme-background-glass-heavy` |',
  '| `--mdc-glass-backdrop-filter` | `--mds-effect-backdrop-filter-blur20` |',
  '| `--mdc-glass-border-color` | `--mds-color-theme-outline-glass-normal` |',
  '| `--mdc-glass-border-radius` | `--mds-radius-theme-lg` |',
  '',
  '```css',
  '.panel.mdc-glass-overlay-background {',
  '  --mdc-glass-background: var(--mds-color-theme-background-glass-light);',
  '}',
  '```',
  '',
  'A Momentum theme stylesheet must be loaded for the colour tokens to resolve.',
].join('\n');

const meta: Meta = {
  title: 'Styles/Glass',
  tags: ['autodocs'],
  parameters: {
    glassContainer: false,
    actions: { disable: true },
    a11y: { disable: true },
    docs: {
      markdown,
      description: {
        story: html`<mdc-text tagname="p">
          Glass only shows its character against what sits behind it, so pick the Dark Fluid or Light Fluid theme to see
          it on its intended backdrop. Resize the canvas to watch the surface pick up a different part of the
          background.
        </mdc-text>`,
      },
    },
  },
};

export default meta;

const BACKGROUNDS = [
  'var(--mds-color-theme-background-glass-normal)',
  'var(--mds-color-theme-background-glass-active)',
  'var(--mds-color-theme-background-glass-light)',
  'var(--mds-color-theme-background-glass-medium)',
  'var(--mds-color-theme-background-glass-heavy)',
];

const BACKDROP_FILTERS = [
  'unset',
  'var(--mds-effect-backdrop-filter-blur20)',
  'var(--mds-effect-backdrop-filter-blur200)',
  'var(--mds-effect-backdrop-filter-blur800)',
];

const BORDER_COLORS = ['var(--mds-color-theme-outline-glass-normal)', 'var(--mds-color-theme-outline-input-normal)'];

const BORDER_RADII = [
  'var(--mds-radius-theme-none)',
  'var(--mds-radius-theme-2xs)',
  'var(--mds-radius-theme-xs)',
  'var(--mds-radius-theme-sm)',
  'var(--mds-radius-theme-md)',
  'var(--mds-radius-theme-lg)',
  'var(--mds-radius-theme-full)',
];

export const Example: StoryObj = {
  argTypes: {
    background: {
      control: 'select',
      options: BACKGROUNDS,
      description: 'Token assigned to `--mdc-glass-background`.',
    },
    backdropFilter: {
      control: 'select',
      options: BACKDROP_FILTERS,
      description: 'Token assigned to `--mdc-glass-backdrop-filter`.',
    },
    borderColor: {
      control: 'select',
      options: BORDER_COLORS,
      description: 'Token assigned to `--mdc-glass-border-color`.',
    },
    borderRadius: {
      control: 'select',
      options: BORDER_RADII,
      description: 'Token assigned to `--mdc-glass-border-radius`.',
    },
  },
  args: {
    background: 'var(--mds-color-theme-background-glass-heavy)',
    backdropFilter: 'var(--mds-effect-backdrop-filter-blur20)',
    borderColor: 'var(--mds-color-theme-outline-glass-normal)',
    borderRadius: 'var(--mds-radius-theme-lg)',
  },
  render: args => html`
    <div class="glassStoryCenter">
      <div
        class="glassStoryPanel glassStoryPanel__large mdc-glass-border mdc-glass-overlay-background"
        style="--mdc-glass-background: ${args.background};
               --mdc-glass-backdrop-filter: ${args.backdropFilter};
               --mdc-glass-border-color: ${args.borderColor};
               --mdc-glass-border-radius: ${args.borderRadius}"
      >
        Glass surface
      </div>
    </div>
  `,
};

export const Layers: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => html`
    <div class="glassStoryRow">
      <div class="glassStoryPanel mdc-glass-border">Border only</div>
      <div class="glassStoryPanel mdc-glass-overlay-background">Background only</div>
      <div class="glassStoryPanel mdc-glass-border mdc-glass-overlay-background">Both</div>
    </div>
  `,
};
