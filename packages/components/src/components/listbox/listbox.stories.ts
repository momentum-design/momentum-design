import '.';

import type { Meta, StoryObj, Args } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { disableControls, hideAllControls, hideControls } from '../../../config/storybook/utils';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

import '../option';
import '../optgroup';
import '../divider';
import ListBox from './listbox.component';
//
// import type Select from './select.component';

const helpTextTypes = Object.values(VALIDATION).filter((type: string) => type !== 'priority');

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${htmlString}
  </div>
`;

const render = (args: Args) =>
  wrapWithDiv(html`
    <mdc-listbox
      @change="${action('onchange')}"
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @focus="${action('onfocus')}"
      label="${args.label}"
      ?required="${args.required}"
      help-text-type="${args['help-text-type']}"
      help-text="${args['help-text']}"
      height="${args.height}"
      data-aria-label="${args['data-aria-label']}"
      toggletip-text="${args['toggletip-text']}"
      toggletip-placement="${args['toggletip-placement']}"
      name="${args.name}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      ?readonly="${args.readonly}"
    >
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-listbox>
  `);

const meta: Meta = {
  title: 'Work In Progress/listbox',
  tags: ['autodocs'],
  component: 'mdc-listbox',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    'help-text-type': {
      control: 'select',
      description: `The type of help text. It can be ${helpTextTypes.map((type: string) => `'${type}'`).join(', ')}.`,
      options: helpTextTypes,
    },
    'info-icon-aria-label': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    'toggletip-text': {
      control: 'text',
    },
    'toggletip-placement': {
      control: 'select',
      options: Object.values(POPOVER_PLACEMENT),
    },
    height: {
      control: 'text',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    ...hideControls(['id', 'value', 'validity', 'validation-message', 'willValidate', 'default']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    label: 'Headquarters location',
    required: true,
    placeholder: 'Select your headquarters location',
    disabled: false,
    readonly: false,
    'help-text': 'Select Help Text',
    'help-text-type': '',
    'data-aria-label': 'Select label',
    height: 'auto',
    placement: 'bottom-start',
  },
};

export const ListboxWithSecondaryLabel: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-listbox label="Select an option" placeholder="Select an option">
        <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
      </mdc-listbox>
    `),
  ...hideAllControls(),
};

export const ListboxWithGroups: StoryObj = {
  render: () => html`
    <div style="height: 35rem;">
      <mdc-listbox label="Select an option from the list of groups" data-aria-label="Select an option">
        <mdc-optgroup label="Fruit">
          <mdc-option value="apple" label="Apples"></mdc-option>
          <mdc-option value="banana" label="Bananas"></mdc-option>
          <mdc-option value="cherry" label="Cherries"></mdc-option>
          <mdc-option value="damson" label="Damsons"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Vegetables" disabled>
          <mdc-option value="artichoke" label="Artichokes"></mdc-option>
          <mdc-option value="broccoli" label="Broccoli"></mdc-option>
          <mdc-option value="cabbage" label="Cabbages"></mdc-option>
        </mdc-optgroup>
        <mdc-divider></mdc-divider>
        <mdc-optgroup label="Fish">
          <mdc-option value="tuna" label="Tuna"></mdc-option>
          <mdc-option value="salmon" label="Salmon"></mdc-option>
        </mdc-optgroup>
      </mdc-listbox>
    </div>
  `,
  ...hideAllControls(),
};

export const ListboxWithLongOptionText: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-listbox placeholder="Select a color" label="Select one color">
        <mdc-option label="Red"></mdc-option>
        <mdc-option label="Yellow"></mdc-option>
        <mdc-option
          label="White and Black are the biggest colors on the spectrum"
          tooltip-text="White and Black are the biggest colors on the spectrum"
          tooltip-placement="bottom"
        ></mdc-option>
        <mdc-option label="Green"></mdc-option>
      </mdc-listbox>
    `),
  ...hideAllControls(),
};

export const ListboxWithIconOptions: StoryObj = {
  render: () =>
    wrapWithDiv(html`
      <mdc-listbox placeholder="Select an option" label="You are in a meeting">
        <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
        <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
        <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
        <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
        <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
      </mdc-listbox>
    `),
  ...hideAllControls(),
};

export const ListboxWithFixedHeight = {
  args: {
    height: '18rem',
    placeholder: 'Select an option',
    label: 'Select option',
  },
  render: (args: Args) =>
    wrapWithDiv(html`
      <mdc-listbox placeholder="${args.placeholder}" label="${args.label}" style="--mdc-listbox-max-height: 30rem">
        ${Array.from({ length: 1000 }, (_, i) => html`<mdc-option label="Option Label ${i + 1}"></mdc-option>`)}
      </mdc-listbox>
    `),
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text']),
  },
};

export const ListboxWithDynamicOptions: StoryObj = {
  render: () => {
    const options = Array.from({ length: 10 }, (_, i) => html`<mdc-option label="Option ${i + 1}"></mdc-option>`);
    let extraOption: TemplateResult | null = null;

    setTimeout(() => {
      extraOption = html`<mdc-option label="Delayed Option"></mdc-option>`;
      const listbox = document.querySelector('mdc-listbox[label="Select option"]');
      if (listbox) {
        const option = document.createElement('mdc-option');
        option.setAttribute('label', 'Delayed Option');
        listbox.appendChild(option);
      }
    }, 2000);

    return wrapWithDiv(html`
      <mdc-listbox placeholder="Select an option" label="Select option"> ${options} ${extraOption || ''} </mdc-listbox>
    `);
  },
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text']),
  },
  ...hideAllControls(),
};

export const ListboxWithChangingSelectedAfterMount: StoryObj = {
  render: () => {
    const handleClick = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach((option, idx) => {
          if (idx === 0) {
            option.removeAttribute('selected');
          }
          if (idx === 1) {
            option.setAttribute('selected', '');
          }
        });
        listBox.updateState();
      }
    };

    const handleClickRemove = () => {
      const listBox = document.querySelector('mdc-listbox[label="Select an option"]') as ListBox;
      if (listBox) {
        const options = listBox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
        listBox.updateState();
      }
    };

    return wrapWithDiv(html`
      <mdc-button @click=${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${handleClickRemove}>Remove Selected</mdc-button>
      <mdc-listbox
        label="Select an option"
        placeholder="Select an option"
        @change="${action('onchange')}"
        @click="${action('onclick')}"
        @keydown="${action('onkeydown')}"
        @focus="${action('onfocus')}"
      >
        <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
        <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
        <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
        <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
      </mdc-listbox>
    `);
  },
  ...hideAllControls(),
};
