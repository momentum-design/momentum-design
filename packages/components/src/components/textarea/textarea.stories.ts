import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../button';
import '../icon';

const render = (args: Args) => html`<mdc-textarea
    @input="${action('oninput')}"
    @change="${action('onchange')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    label="${args.label}"
    help-text-type="${args['help-text-type']}"
    help-text="${args['help-text']}"
    placeholder="${args.placeholder}"
    name="${args.name}"
    class="${args.class}"
    style="${args.style}"
    required-label="${args['required-label']}"
    ?disabled="${args.disabled}"
    ?readonly="${args.readonly}"
    ?cancel-button="${args['cancel-button']}"
    ?resize-button="${args['resize-button']}"
    data-aria-label="${ifDefined(args['data-aria-label'])}"
    maxlength="${ifDefined(args.maxlength)}"
    minlength="${ifDefined(args.minlength)}"
    autocapitalize="${args.autocapitalize}"
    ?autofocus="${args.autofocus}"
    autocomplete="${args.autocomplete}"
    dirname="${ifDefined(args.dirname)}"
    clear-aria-label="${ifDefined(args['clear-aria-label'])}" 
    max-character-limit="${ifDefined(args['max-character-limit'])}"
  ></mdc-textarea>`;

const meta: Meta = {
  title: 'Work In Progress/textarea',
  tags: ['autodocs'],
  component: 'mdc-textarea',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'cancel-button': true,
    label: 'Label',
    'help-text': 'Help text',
    'max-character-limit': 75,
    placeholder: 'Placeholder',
  },
};
