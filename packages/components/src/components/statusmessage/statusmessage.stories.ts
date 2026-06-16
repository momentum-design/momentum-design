// AI-Assisted
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';

import '.';
import { STATUSMESSAGE_SEVERITY } from './statusmessage.constants';
import type { StatusMessageSeverity } from './statusmessage.types';

const render = (args: Args) => html`
  <mdc-statusmessage severity="${args.severity}" message="${args.message}"></mdc-statusmessage>
`;

const meta: Meta = {
  title: 'Components/statusmessage',
  tags: ['autodocs'],
  component: 'mdc-statusmessage',
  render,
  argTypes: {
    severity: {
      control: 'select',
      options: Object.values(STATUSMESSAGE_SEVERITY),
    },
    message: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls([
      'defaultSlotNodes',
      'hasDefaultSlotContent',
      'renderIcon',
      'renderMessage',
      'updateDefaultSlotContent',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    severity: STATUSMESSAGE_SEVERITY.DEFAULT,
    message: 'Status message',
  },
};

export const Severities: StoryObj = {
  render: () => html`
    <div style="display: grid; gap: 0.75rem;">
      ${(Object.values(STATUSMESSAGE_SEVERITY) as StatusMessageSeverity[]).map(
        (severity: StatusMessageSeverity) =>
          html`<mdc-statusmessage severity="${severity}" message="${severity} status message"></mdc-statusmessage>`,
      )}
    </div>
  `,
  ...hideAllControls(),
};

export const SlottedMessage: StoryObj = {
  render: () => html`
    <mdc-statusmessage severity="warning" message="This attribute message is not rendered">
      Slotted status message
    </mdc-statusmessage>
  `,
  ...hideAllControls(),
};

export const CustomIcon: StoryObj = {
  render: () => html`
    <mdc-statusmessage severity="priority" message="Status message with a custom icon">
      <mdc-icon slot="icon" name="info-badge-filled"></mdc-icon>
    </mdc-statusmessage>
  `,
  ...hideAllControls(),
};
// End AI-Assisted
