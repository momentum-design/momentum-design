import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import '../button';
import { ARIA_LIVE_VALUES } from './screenreaderannouncer.constants';

const render = (args: Args) => html`
  <mdc-button @click="${() => {
    const screenreaderannouncer = document.querySelector('mdc-screenreaderannouncer');
    if (screenreaderannouncer) {
      screenreaderannouncer.announcement = args.announcement;
    }
  }}">Announce ${args.announcement}
  </mdc-button>
  <mdc-screenreaderannouncer
    data-aria-live="${args['data-aria-live']}"
    delay="${args.delay}"
    timeout="${args.timeout}">
  </mdc-screenreaderannouncer>
`;

const meta: Meta = {
  title: 'Components/screenreaderannouncer',
  tags: ['autodocs'],
  component: 'mdc-screenreaderannouncer',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    announcement: {
      control: 'text',
    },
    delay: {
      control: 'number',
    },
    timeout: {
      control: 'number',
    },
    'data-aria-live': {
      control: 'select',
      options: Object.values(ARIA_LIVE_VALUES),
    },
  },
};

export default meta;

const defaultArgs = {
  announcement: 'Momentum Design Components',
  'data-aria-live': ARIA_LIVE_VALUES.POLITE,
  delay: 150,
  timeout: 20_000,
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
  },
};
