import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { DEFAULTS, VARIANT } from './progressbar.constants';

const render = (args: Args) => html`
  <mdc-progressbar
    value="${args.value}"
    variant="${args.variant}"
    label="${args.label}"
    ?error="${args.error}"
    help-text="${args['help-text']}"
    data-aria-label="${args['data-aria-label']}"
  ></mdc-progressbar>
`;

const meta: Meta = {
  title: 'Components/progressbar',
  tags: ['autodocs'],
  component: 'mdc-progressbar',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    value: {
      control: 'text',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: Object.values(VARIANT),
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls([
      'help-text-type',
      'required',
      'name',
      'disabled',
      'validation-message',
      'toggletip-text',
      'toggletip-placement',
      'info-icon-aria-label',
    ]),
    ...disableControls([
      '--mdc-progressbar-default-background-color',
      '--mdc-progressbar-default-active-background-color',
      '--mdc-progressbar-success-background-color',
      '--mdc-progressbar-error-background-color',
      '--mdc-progressbar-height',
      '--mdc-progressbar-border-radius',
      '--mdc-progressbar-label-color',
      '--mdc-progressbar-label-lineheight',
      '--mdc-progressbar-label-fontsize',
      '--mdc-progressbar-label-fontweight',
      '--mdc-progressbar-help-text-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar',
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[false, true].map(error =>
          (error ? [100] : [0, 25, 50, 75, 100]).map(
            value => html`
              <mdc-progressbar
                value="${value}"
                variant="${VARIANT.DEFAULT}"
                label="Label"
                ?error="${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `,
          ),
        )}
      </div>
      <div>
        <h3>Inline Variant</h3>
        ${[false, true].map(error =>
          (error ? [100] : [0, 25, 50, 75, 100]).map(
            value => html`
              <mdc-progressbar
                value="${value}"
                variant="${VARIANT.INLINE}"
                label="Label"
                ?error="${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `,
          ),
        )}
      </div>
    </div>
  `,
};
