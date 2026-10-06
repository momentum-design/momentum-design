import type { Decorator, Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../button';

import { DEFAULTS, POSE_NAMES } from './animatedbackground.constants';
import type { PoseName } from './animatedbackground.types';

type AnimatedBackgroundElement = HTMLElement & {
  wakeUp: () => void;
  expand: () => void;
  collapse: () => void;
  disable: () => void;
};

const DEMO_HEIGHT = '720px';
const DEMO_WIDTH = '1280px';

const trigger =
  (method: keyof Pick<AnimatedBackgroundElement, 'wakeUp' | 'expand' | 'collapse' | 'disable'>) =>
  (event: Event) => {
    const root = (event.currentTarget as HTMLElement).closest('[data-demo-root]');
    const host = root?.querySelector('mdc-animatedbackground') as AnimatedBackgroundElement | null;
    host?.[method]();
  };

const withReducedMotionMedia: Decorator = Story => {
  const originalMatchMedia = window.matchMedia.bind(window);

  window.matchMedia = ((query: string) => {
    if (query.includes('prefers-reduced-motion')) {
      return {
        matches: true,
        media: query,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => true,
        onchange: null,
      } as unknown as MediaQueryList;
    }

    return originalMatchMedia(query);
  }) as typeof window.matchMedia;

  return Story();
};

const renderStatic = (args: Args) => html`
  <div
    style="position: relative; width: 100%; height: ${DEMO_HEIGHT}; max-width: ${DEMO_WIDTH}; margin: 0 auto; overflow: hidden;"
  >
    <mdc-animatedbackground
      initial-pose="${args.initialPose}"
      class="${args.class}"
      style="${args.style}"
    ></mdc-animatedbackground>
    <div
      style="position: relative; z-index: 1; padding: 24px; color: var(--mds-color-theme-text-primary-normal, #fff); pointer-events: none;"
    >
      <p style="margin: 0 0 8px; font: 600 16px/1.3 system-ui, sans-serif;">mdc-animatedbackground</p>
      <p style="margin: 0; opacity: 0.75; font: 14px/1.4 system-ui, sans-serif;">Settled ${args.initialPose} pose.</p>
    </div>
  </div>
`;

const renderInteractiveDemo = (args: Args) => html`
  <div
    data-demo-root
    style="position: relative; width: 100%; height: ${DEMO_HEIGHT}; max-width: ${DEMO_WIDTH}; margin: 0 auto; overflow: hidden;"
  >
    <mdc-animatedbackground
      initial-pose="${args.initialPose}"
      class="${args.class}"
      style="${args.style}"
      @gradientsettle="${action('gradientsettle')}"
    ></mdc-animatedbackground>
    <div
      style="position: relative; z-index: 1; padding: 24px; color: var(--mds-color-theme-text-primary-normal, #fff);"
    >
      <p style="margin: 0 0 8px; font: 600 16px/1.3 system-ui, sans-serif;">mdc-animatedbackground</p>
      <p style="margin: 0 0 16px; opacity: 0.75; font: 14px/1.4 system-ui, sans-serif;">
        Initial pose: ${args.initialPose}. Use the controls to trigger programmatic animations.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; pointer-events: auto;">
        <mdc-button @click=${trigger('wakeUp')}>Wake up</mdc-button>
        <mdc-button @click=${trigger('expand')}>Expand</mdc-button>
        <mdc-button @click=${trigger('collapse')}>Collapse</mdc-button>
        <mdc-button @click=${trigger('disable')}>Disable</mdc-button>
      </div>
    </div>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/animatedbackground',
  tags: ['autodocs'],
  component: 'mdc-animatedbackground',
  parameters: {
    docs: {
      description: {
        component:
          'Decorative uplift gradient background with programmatic pose animations. See the **Interactive Demo** story to trigger Wake up, Expand, Collapse, and Disable.',
      },
    },
  },
  argTypes: {
    initialPose: {
      control: 'select',
      options: POSE_NAMES,
      description:
        'Pose rendered on mount before any programmatic animation. Does not update when methods are called.',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render: renderStatic,
  args: {
    initialPose: DEFAULTS.INITIAL_POSE,
  },
  parameters: {
    docs: {
      description: {
        story: 'Static reference at the default `collapsed` resting pose.',
      },
    },
  },
};

export const InteractiveDemo: StoryObj = {
  render: renderInteractiveDemo,
  args: {
    initialPose: 'hidden' satisfies PoseName,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Primary documentation demo. Use the **Wake up**, **Expand**, **Collapse**, and **Disable** buttons to trigger the public animation API. Inspect `gradientsettle` in the Actions panel.',
      },
    },
  },
};

export const DomFallback: StoryObj = {
  decorators: [withReducedMotionMedia],
  render: renderStatic,
  args: {
    initialPose: 'expanded',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses a Storybook-only reduced-motion media patch so the component selects the DOM/SVG fallback renderer.',
      },
    },
  },
};

export const ReducedMotion: StoryObj = {
  decorators: [withReducedMotionMedia],
  render: renderInteractiveDemo,
  args: {
    initialPose: 'hidden',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo under reduced motion. Animations snap instantly to their target poses with no transition.',
      },
    },
  },
};
