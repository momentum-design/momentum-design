import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import '../button';
import '../checkbox';

const render = (args: Args) => html`
  <mdc-checkboxgroup
    header-text="${args['header-text']}"
    data-aria-label="${args['data-aria-label']}"
  >
    <mdc-checkbox label="Black Widow"></mdc-checkbox>
    <mdc-checkbox label="Captain America"></mdc-checkbox>
    <mdc-checkbox label="Hawkye"></mdc-checkbox>
    <mdc-checkbox label="The Hulk"></mdc-checkbox>
    <mdc-checkbox label="Iron Man"></mdc-checkbox>
    <mdc-checkbox label="Thor"></mdc-checkbox>
  </mdc-checkboxgroup>
`;

const meta: Meta = {
  title: 'Work In Progress/checkboxgroup',
  tags: ['autodocs'],
  render,
  component: 'mdc-checkboxgroup',
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'header-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Select your Avengers team',
  },
};

export const List: StoryObj = {
  args: {
    'data-aria-label': 'Select a member from the list',
  },
};

export const FormField: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({ value: selectedValues });
    };

    return html`
      <form @submit=${handleSubmit}>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mdc-checkboxgroup header-text="Super powers (check all that apply)">
            <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Mind control" value="mind-control" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super genius" value="super-genius" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
            <mdc-checkbox label="Weather control" value="weather-control" name="super-power"></mdc-checkbox>
          </mdc-checkboxgroup>
          <mdc-button type="submit">Submit</mdc-button>
        </div>
      </form>
  `;
  },
  argTypes: {
    ...disableControls(['header-text']),
  },
};
