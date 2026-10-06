import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls } from '../../../config/storybook/utils';
import '../button';

const render = (args: Args) =>
  html` <mdc-staticcheckbox
    ?checked="${args.checked}"
    ?indeterminate="${args.indeterminate}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?soft-disabled="${args['soft-disabled']}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-staticcheckbox>`;

const meta: Meta = {
  title: 'Components/decorator/staticcheckbox',
  tags: ['autodocs'],
  component: 'mdc-staticcheckbox',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
  },
  parameters: {
    actions: { disable: true },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
  },
};

export const Motion: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Toggle and hover the checkbox to observe background, border, scale, and icon fade motion. Use Storybook
        <code>mds-motion</code> / <code>mds-animation</code> body classes or OS reduced motion to verify instant state
        changes.
      </p>
      <mdc-staticcheckbox id="staticcheckbox-motion-demo">Option</mdc-staticcheckbox>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-button id="staticcheckbox-motion-toggle" variant="secondary" size="28">Toggle checked</mdc-button>
        <mdc-button id="staticcheckbox-motion-indeterminate" variant="secondary" size="28"
          >Toggle indeterminate</mdc-button
        >
      </div>
    </div>
  `,
  decorators: [
    story => {
      queueMicrotask(() => {
        const checkbox = document.getElementById('staticcheckbox-motion-demo') as HTMLElement | null;
        const toggleButton = document.getElementById('staticcheckbox-motion-toggle');
        const indeterminateButton = document.getElementById('staticcheckbox-motion-indeterminate');

        toggleButton?.addEventListener('click', () => {
          if (!checkbox) return;
          checkbox.toggleAttribute('checked');
          if (checkbox.hasAttribute('checked')) {
            checkbox.removeAttribute('indeterminate');
          }
        });

        indeterminateButton?.addEventListener('click', () => {
          if (!checkbox) return;
          if (checkbox.hasAttribute('indeterminate')) {
            checkbox.removeAttribute('indeterminate');
          } else {
            checkbox.setAttribute('indeterminate', '');
            checkbox.removeAttribute('checked');
          }
        });
      });

      return story();
    },
  ],
  ...hideAllControls(),
};
