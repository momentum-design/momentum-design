import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../components/button';
import '../components/text';
import './gradient-border.css';
import './gradient-border.stories.styles.css';

/** The docs addon renders knowledge-base markdown; styles have no component folder to read it from. */
const markdown = [
  '---',
  'title: Gradient Border',
  'summary: Shared stylesheet for the Momentum AI hint border — a gradient ring that can travel around any element.',
  'tier: 3',
  '---',
  '',
  '## Overview',
  '',
  'Gradient Border is a shared stylesheet, not a component. There is no `mdc-gradient-border` element',
  'to render — you import the stylesheet once and apply the classes to any element you already have,',
  'whether that is a Momentum component, a plain `div`, or markup from another library.',
  '',
  '| Class | |',
  '| --- | --- |',
  '| `mdc-gradient-border-primary` | Draws the ring with the primary linear gradient. |',
  '| `mdc-gradient-border-secondary` | Draws the ring with the secondary conic gradient. |',
  '| `mdc-gradient-border-animated` | Makes the gradient travel around the ring. |',
  '',
  '### When to use',
  '',
  '- Use a gradient border to mark a surface as AI assisted, so the gradient is read as a hint about',
  '  where the content came from rather than as decoration.',
  '- Reach for `mdc-gradient-border-primary` when the ring should be solid the whole way round, and for',
  '  `mdc-gradient-border-secondary` when it should taper into a comet tail instead.',
  '- Add `mdc-gradient-border-animated` while the assistant is working. The travelling gradient is a',
  '  progress cue, so remove the class once the result has settled. Set',
  '  `--mdc-gradient-border-iteration-count: 1` instead when the work is short enough to be covered by',
  '  a single turn.',
  '',
  '### When not to use',
  '',
  '- Do not use it where a solid outline is wanted. Use a `border` with',
  '  `--mds-color-theme-outline-secondary-normal` instead.',
  '- Do not use it to convey status such as error, warning, or success. Those have their own outline',
  '  tokens and are not gradients.',
  '',
  '## Guidelines',
  '',
  '### Accessibility',
  '',
  'The ring is decorative, so it carries no accessible name — announce the AI state through the',
  'content or a live region instead. The animation is suppressed under `prefers-reduced-motion`, and',
  'in forced-colors mode the ring falls back to a solid `CanvasText` outline because angular',
  'gradients are not painted there.',
  '',
  '### Developer usage',
  '',
  '```js',
  "import '@momentum-design/components/dist/styles/gradient-border.css';",
  '```',
  '',
  '```html',
  '<div class="mdc-gradient-border-primary mdc-gradient-border-animated">AI generated</div>',
  '```',
  '',
  'The ring is drawn by a masked pseudo-element, which leaves `box-shadow` free for the focus ring and',
  'keeps translucent and glass surfaces underneath untinted. It uses `border-radius: inherit`, so set',
  'the radius on the element itself rather than on the ring.',
  '',
  'Override the thickness, the colours, and the animation through their custom properties:',
  '',
  '| Custom property | Default |',
  '| --- | --- |',
  '| `--mdc-gradient-border-width` | `0.125rem` |',
  '| `--mdc-gradient-border-stops` | the `--mds-color-theme-ai-hint-*-gradient-*` tokens of the variant |',
  '| `--mdc-gradient-border-start-angle` | `90deg` on primary, `180deg` on secondary |',
  '| `--mdc-gradient-border-duration` | `6s` |',
  '| `--mdc-gradient-border-iteration-count` | `infinite` |',
  '',
  '```css',
  '.panel.mdc-gradient-border-primary {',
  '  --mdc-gradient-border-width: 0.25rem;',
  '  --mdc-gradient-border-duration: 2s;',
  '}',
  '```',
  '',
  '`--mdc-gradient-border-stops` is spliced into the variant’s gradient function — `linear-gradient()`',
  'for primary, `conic-gradient()` for secondary — so a replacement list has to suit that function. On',
  'secondary, repeat the first colour last to close the ring without a seam unless, as with the AI hint',
  'tokens, both ends are already transparent. A Momentum theme stylesheet must be loaded for the colour',
  'tokens to resolve.',
  '',
  '`--mdc-gradient-border-start-angle` rotates where those stops begin. The animation is added on top',
  'of it, so it positions a static ring and sets the starting point of an animated one. A single turn',
  'therefore ends on the angle it began at and needs no `animation-fill-mode`.',
  '',
  '### Browser support',
  '',
  'Everything that paints the ring is behind `@supports (mask-composite: exclude)`. Engines without',
  'the unprefixed mask render the element unchanged rather than with a broken outline. Engines without',
  'the Properties and Values API animate nothing and hold the first frame.',
].join('\n');

const meta: Meta = {
  title: 'Styles/Gradient Border',
  tags: ['autodocs'],
  parameters: {
    actions: { disable: true },
    a11y: { disable: true },
    docs: {
      markdown,
      description: {
        story: html`<mdc-text tagname="p">
          The ring marks a surface as AI assisted. Toggle the animation to see the travelling gradient used while an
          assistant is working.
        </mdc-text>`,
      },
    },
  },
};

export default meta;

export const Example: StoryObj = {
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      description: 'Picks between the `mdc-gradient-border-primary` and `mdc-gradient-border-secondary` classes.',
    },
    animated: {
      control: 'boolean',
      description: 'Adds the `mdc-gradient-border-animated` class.',
    },
    width: {
      control: 'select',
      options: ['0.0625rem', '0.125rem', '0.25rem', '0.5rem'],
      description: 'Thickness assigned to `--mdc-gradient-border-width`.',
    },
    duration: {
      control: 'select',
      options: ['1s', '3s', '6s', '12s'],
      description: 'Length of one turn, assigned to `--mdc-gradient-border-duration`.',
    },
    iterationCount: {
      control: 'select',
      options: ['1', '2', '3', 'infinite'],
      description: 'Turns to play, assigned to `--mdc-gradient-border-iteration-count`.',
    },
  },
  args: {
    variant: 'primary',
    animated: true,
    width: '0.125rem',
    duration: '6s',
    iterationCount: 'infinite',
  },
  render: args => html`
    <div class="gradientBorderStoryCenter">
      <div
        class="gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-${args.variant} ${args.animated
          ? 'mdc-gradient-border-animated'
          : ''}"
        style="--mdc-gradient-border-width: ${args.width};
               --mdc-gradient-border-duration: ${args.duration};
               --mdc-gradient-border-iteration-count: ${args.iterationCount}"
      >
        AI generated
      </div>
    </div>
  `,
};

export const Variants: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => html`
    <div class="gradientBorderStoryRow">
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary">Primary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-primary mdc-gradient-border-animated">
        Primary animated
      </div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary">Secondary</div>
      <div class="gradientBorderStoryPanel mdc-gradient-border-secondary mdc-gradient-border-animated">
        Secondary animated
      </div>
      <div class="gradientBorderStoryPanel gradientBorderStoryPanel__round mdc-gradient-border-secondary">Circle</div>
    </div>
  `,
};

/** A one-shot animation only plays on mount, so the story needs a way to run it again. */
const replay = ({ currentTarget }: Event) => {
  const panel = (currentTarget as HTMLElement).parentElement?.querySelector('.gradientBorderStoryPanel');
  panel?.classList.remove('mdc-gradient-border-animated');

  // Re-adding in the same frame is coalesced away, so wait for a frame to be painted without it.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => panel?.classList.add('mdc-gradient-border-animated'));
  });
};

export const SingleTurn: StoryObj = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: html`<mdc-text tagname="p">
          The ring starts at 135° and makes exactly one turn. Because a turn is a full 360°, it lands back on its
          starting angle and holds there.
        </mdc-text>`,
      },
    },
  },
  render: () => html`
    <div class="gradientBorderStoryCenter gradientBorderStoryCenter__stacked">
      <div
        class="gradientBorderStoryPanel gradientBorderStoryPanel__large mdc-gradient-border-secondary mdc-gradient-border-animated"
        style="--mdc-gradient-border-start-angle: 135deg;
               --mdc-gradient-border-duration: 3s;
               --mdc-gradient-border-iteration-count: 1"
      >
        One turn from 135°
      </div>
      <mdc-button variant="secondary" @click="${replay}">Replay</mdc-button>
    </div>
  `,
};
