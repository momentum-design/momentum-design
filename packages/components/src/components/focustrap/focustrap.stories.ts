// AI-Assisted
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <div>
    <mdc-button>Before 1</mdc-button>
    <mdc-button>Before 2</mdc-button>
    <mdc-focustrap
      ?trap-disabled="${args.trapDisabled}"
      ?restore-focus-disabled="${args.restoreFocusDisabled}"
      ?auto-focus="${args.autoFocus}"
      .shouldFocusTrapWrap="${args.shouldFocusTrapWrap}"
      class="${args.class}"
      style="
        margin: 1rem;
        padding: 1rem;
        border: 1px solid var(--mds-color-theme-outline-primary-normal);
        display: flex;
        flex-direction: column;
        gap: 1rem"
    >
      <p>Focus trap</p>
      <mdc-input placeholder="First input"></mdc-input>
      <mdc-input placeholder="Second input"></mdc-input>
      <mdc-button appearance="primary">Button</mdc-button>
      <mdc-linkbutton>Link</mdc-linkbutton>
    </mdc-focustrap>
    <mdc-button>After</mdc-button>
  </div>
`;

const meta: Meta = {
  title: 'Components/focustrap',
  tags: ['autodocs'],
  component: 'mdc-focustrap',
  render,
  argTypes: {
    trapDisabled: {
      control: 'boolean',
      description: 'When true, focus trapping is disabled. When false (default), keyboard focus is trapped.',
    },
    restoreFocusDisabled: {
      control: 'boolean',
      description:
        'When true, focus is NOT restored to the previously focused element when the trap is deactivated. When false (default), focus is restored.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'When true, the first focusable element receives focus automatically when the trap is activated.',
    },
    shouldFocusTrapWrap: {
      control: 'boolean',
      description: 'When true (default), Tab wraps from the last focusable element back to the first and vice versa.',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: true,
  },
};

export const WithAutoFocus: StoryObj = {
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: true,
    shouldFocusTrapWrap: true,
  },
};

export const WithoutWrap: StoryObj = {
  args: {
    trapDisabled: false,
    restoreFocusDisabled: false,
    autoFocus: false,
    shouldFocusTrapWrap: false,
  },
};

// End AI-Assisted
