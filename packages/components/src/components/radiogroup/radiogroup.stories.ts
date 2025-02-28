import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../radio';
import '../button';

const render = (args: Args) => html`
  <mdc-radiogroup 
  name="${args.name}"
  label="${args.label}"
  help-text="${args['help-text']}"
  data-aria-label="${args['data-aria-label']}"
  required-label="${args['required-label']}"
  >
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radiogroup>`;

const meta: Meta = {
  title: 'Work In Progress/radio-group',
  tags: ['autodocs'],
  component: 'mdc-radiogroup',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    'help-text': {
      control: { type: 'text' },
    },
    'data-aria-label': {
      control: 'text',
    },
    'required-label': {
      control: 'text',
    },
    ...hideControls(['help-text-type', 'disabled']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through '
     + 'challenging situations.',
    name: 'team-captain-with-experience',
    'required-label': 'required',
    'data-aria-label': 'Team Captain',
  },
};

export const RadioGroupWithDescription: StoryObj = {
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through '
     + 'challenging situations.',
    name: 'team-captain-with-experience',
  },
};

export const RadioGroupWithoutDescription: StoryObj = {
  args: {
    label: 'Select your team captain',
    name: 'team-captain',
  },
};

export const RadioGroupInForm = () => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({ name: 'course-plan', value: selectedValue });
  };

  return html`
    <form @submit=${handleSubmit}>
      <mdc-radiogroup
        name="course-plan"
        label="Select your course plan"
        help-text="Choose a plan that best suits your needs"
      >
        <mdc-radio value="standard" data-aria-label="Standard Plan" label="Standard Plan">
        </mdc-radio>
        <mdc-radio value="premium" data-aria-label="Premium Plan" label="Premium Plan">
        </mdc-radio>
        <mdc-radio
          value="enterprise"
          checked
          data-aria-label="Enterprise Plan"
          label="Enterprise Plan">
        </mdc-radio>
      </mdc-radiogroup>
      <br/>
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  `;
};
