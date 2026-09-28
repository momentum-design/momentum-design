import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../button';
import '../inputchip';

import { DEFAULTS } from './aiassistantprompt.constants';

const headerAndFooter = html`
  <mdc-inputchip
    slot="header"
    label="Alex Example"
    icon-name="contact-card-bold"
    clear-aria-label="Remove Alex Example"
    @remove="${action('remove')}"
  ></mdc-inputchip>
  <mdc-inputchip
    slot="header"
    label="Example project"
    icon-name="folder-bold"
    clear-aria-label="Remove Example project"
    @remove="${action('remove')}"
  ></mdc-inputchip>
  <mdc-button
    slot="footer-left"
    variant="tertiary"
    size="32"
    prefix-icon="attachment-bold"
    aria-label="Attach a file"
    @click="${action('onclick')}"
  ></mdc-button>
  <mdc-button
    slot="footer-left"
    variant="tertiary"
    size="32"
    prefix-icon="plus-bold"
    aria-label="Add context"
    @click="${action('onclick')}"
  ></mdc-button>
  <mdc-button slot="footer-right" variant="tertiary" size="32" @click="${action('onclick')}">Ask</mdc-button>
  <mdc-button
    slot="footer-right"
    variant="tertiary"
    size="32"
    prefix-icon="microphone-bold"
    aria-label="Start voice input"
    @click="${action('onclick')}"
  ></mdc-button>
  <mdc-button
    slot="footer-right"
    variant="primary"
    size="32"
    prefix-icon="send-bold"
    aria-label="Send prompt"
    @click="${action('onclick')}"
  ></mdc-button>
`;

const render = (args: Args) => html`
  <mdc-aiassistantprompt
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    class="${args.class}"
    style="${args.style}"
    name="${args.name}"
    value="${args.value}"
    placeholder="${ifDefined(args.placeholder)}"
    rows="${args.rows}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
  >
    ${headerAndFooter}
  </mdc-aiassistantprompt>
`;

const meta: Meta = {
  title: 'Work In Progress/aiassistantprompt',
  tags: ['autodocs'],
  component: 'mdc-aiassistantprompt',
  render,
  argTypes: {
    ...classArgType,
    ...styleArgType,
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['validity', 'willValidate']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    name: 'prompt',
    value: '',
    placeholder: 'Ask about the Example project',
    rows: DEFAULTS.ROWS,
    disabled: false,
    readonly: false,
    'data-aria-label': 'AI assistant prompt',
  },
};
