import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import '../button';
import '../text';
import { ARIA_LIVE_VALUES, DEFAULTS } from './screenreaderannouncer.constants';

const render = (args: Args) => html`
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <mdc-text type="body-midsize-regular">
      Click following button for Screen Reader to announce '${args.announcement}'
    </mdc-text>
    <mdc-button
      @click="${() => {
        const screenreaderannouncer = document.querySelector('mdc-screenreaderannouncer');
        if (screenreaderannouncer) {
          screenreaderannouncer.setAttribute('announcement', args.announcement);
        }
      }}"
      >Announce</mdc-button
    >
  </div>
  <mdc-screenreaderannouncer
    data-aria-live="${args['data-aria-live']}"
    delay="${args.delay}"
    identity="${args.identity}"
    timeout="${args.timeout}"
  >
  </mdc-screenreaderannouncer>
  <mdc-text type="body-midsize-regular"
    >Note: SR may read the announcement twice in storybook. Click on 'Open canvas in new tab' in Storybook, to read it
    once.</mdc-text
  >
`;

const renderWithIdentity = (args: Args) => html`
  <div
    id="announcements-container"
    style="
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  "
  ></div>
  ${render(args)}
`;

const meta: Meta = {
  title: 'Components/screenreaderannouncer',
  tags: ['autodocs'],
  component: 'mdc-screenreaderannouncer',
  render,

  argTypes: {
    announcement: {
      control: 'text',
    },
    'data-aria-live': {
      control: 'select',
      options: Object.values(ARIA_LIVE_VALUES),
    },
    delay: {
      control: 'number',
    },
    identity: {
      control: 'text',
    },
    timeout: {
      control: 'number',
    },
  },
};

export default meta;

const defaultArgs = {
  announcement: 'Momentum Design Components',
  'data-aria-live': DEFAULTS.ARIA_LIVE,
  delay: DEFAULTS.DELAY,
  identity: '',
  timeout: DEFAULTS.TIMEOUT,
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
  },
};

export const WithIdentity: StoryObj = {
  render: renderWithIdentity,
  args: {
    ...defaultArgs,
    identity: 'announcements-container',
  },
};
