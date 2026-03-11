import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { hideControls } from '../../../config/storybook/utils';
import type Radio from '../radio/radio.component';

import type RadioGroup from './radiogroup.component';
import '../radio';
import '../button';

const render = (args: Args) =>
  html` <div role="main">
    <mdc-radiogroup
      name="${args.name}"
      label="${args.label}"
      help-text="${args['help-text']}"
      help-text-type="${args['help-text-type']}"
      ?required="${args.required}"
    >
      <mdc-radio label="Black Widow" value="black-widow"></mdc-radio>
      <mdc-radio label="Captain America" value="captain-america"></mdc-radio>
      <mdc-radio label="Hawkeye" value="hawkeye"></mdc-radio>
      <mdc-radio label="The hulk" value="the-hulk"></mdc-radio>
      <mdc-radio label="Iron Man" value="iron-man"></mdc-radio>
      <mdc-radio label="Thor" value="Thor"></mdc-radio>
    </mdc-radiogroup>
  </div>`;

const meta: Meta = {
  title: 'Components/radiogroup',
  tags: ['autodocs'],
  component: 'mdc-radiogroup',
  render,

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
    'help-text-type': {
      control: 'select',
      options: Object.values(VALIDATION),
    },
    required: {
      control: 'boolean',
    },
    ...hideControls([
      'disabled',
      'info-icon-aria-label',
      'isRadio',
      'Slot Name: "toggletip"',
      'toggletip-placement',
      'toggletip-strategy',
      'toggletip-text',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    'help-text-type': VALIDATION.DEFAULT,
    name: 'team-captain-with-experience',
    required: true,
  },
};

export const RadioGroupWithDescription: StoryObj = {
  args: {
    label: 'Select your team captain',
    'help-text': 'The team captain should have previous experience leading the team through challenging situations.',
    name: 'team-captain-with-experience',
  },
};

export const RadioGroupWithoutDescription: StoryObj = {
  args: {
    label: 'Select your team captain',
    name: 'team-captain',
  },
};

export const RadioGroupInFormWithHelpTextValidation = () => {
  const validateRadioGroup = (form: HTMLFormElement): boolean => {
    const radioGroup = form.querySelector('mdc-radiogroup[name="course-plan"]') as RadioGroup;
    const radios = Array.from(form.querySelectorAll('mdc-radio[name="course-plan"]')) as Radio[];
    const selected = radios.find(radio => radio.checked);
    if (!selected) {
      radioGroup?.setAttribute('help-text', 'Please select a course plan');
      radioGroup?.setAttribute('help-text-type', 'error');
      return false;
    }
    radioGroup?.setAttribute('help-text', 'Looks good!');
    radioGroup?.setAttribute('help-text-type', 'success');
    return true;
  };
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!validateRadioGroup(form)) {
      return;
    }
    const formData = new FormData(form);
    const selectedValue = formData.get('course-plan');
    action('Form Submitted')({ name: 'course-plan', value: selectedValue });
  };

  const handleReset = (event: Event) => {
    const form = event.target as HTMLFormElement;
    const radioGroup = form.querySelector('mdc-radiogroup[name="course-plan"]') as RadioGroup;
    radioGroup?.setAttribute('help-text', 'Choose a plan that best suits your needs');
    radioGroup?.setAttribute('help-text-type', 'default');
  };

  return html`
    <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
      <div role="main">
        <mdc-radiogroup
          name="course-plan"
          label="Select your course plan"
          help-text="Choose a plan that best suits your needs"
          required
        >
          <mdc-radio value="standard" name="course-plan" label="Standard Plan"> </mdc-radio>
          <mdc-radio value="premium" name="course-plan" label="Premium Plan"> </mdc-radio>
          <mdc-radio value="enterprise" name="course-plan" label="Enterprise Plan"> </mdc-radio>
        </mdc-radiogroup>
      </div>
      <br />
      <div style="display: flex; gap: 0.25rem;">
        <mdc-button type="submit" size="24">Submit</mdc-button>
        <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
      </div>
    </form>
  `;
};
