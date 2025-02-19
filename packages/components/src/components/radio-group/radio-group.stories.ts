import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../radio';
import '../button';

const render = (args: Args) => html`
  <mdc-radio-group 
  name="${args.name}"
  header-text="${args['header-text']}"
  description-text="${args['description-text']}">
    <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
    <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
    <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
    <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
    <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
    <mdc-radio label="Thor" value="Thor"></mdc-radio>
  </mdc-radio-group>`;

const meta: Meta = {
  title: 'Work In Progress/radio-group',
  tags: ['autodocs'],
  component: 'mdc-radio-group',
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
    'header-text': {
      control: { type: 'text' },
    },
    'description-text': {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Select your team captain',
    name: 'team-captain',
  },
};

export const RadioGroupWithDescription: StoryObj = {
  args: {
    'header-text': 'Select your team captain',
    'description-text': 'The team captain should have previous experience leading the team through '
     + 'challenging situations.',
    name: 'team-captain-with-experience',
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
      <mdc-radio-group name="course-plan" header-text="Select your course plan">
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
      </mdc-radio-group>
      <br/>
      <mdc-button type="submit">Submit</mdc-button>
    </form>
  `;
};
