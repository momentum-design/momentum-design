import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideAllControls, hideControls, textControls } from '../../../config/storybook/utils';
import '../divider';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import '../optgroup';
import '../option';
import '../tooltip';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

import type Select from './select.component';

const helpTextTypes = Object.values(VALIDATION).filter((type: string) => type !== 'priority');

const wrapWithDiv = (htmlString: TemplateResult) => html`
  <div style="height: 100%; width: 20rem; display: flex; flex-direction: column; justify-content: center;">
    ${htmlString}
  </div>
`;

const render = (args: Args) =>
  wrapWithDiv(html`
    <mdc-select
      @change="${action('onchange')}"
      @click="${action('onclick')}"
      @input="${action('oninput')}"
      @keydown="${action('onkeydown')}"
      @focus="${action('onfocus')}"
      label="${args.label}"
      ?required="${args.required}"
      help-text-type="${args['help-text-type']}"
      help-text="${args['help-text']}"
      data-aria-label="${args['data-aria-label']}"
      toggletip-text="${args['toggletip-text']}"
      toggletip-placement="${args['toggletip-placement']}"
      info-icon-aria-label="${args['info-icon-aria-label']}"
      placement="${args.placement}"
      name="${args.name}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      ?readonly="${args.readonly}"
      boundary="${args.boundary}"
      strategy="${args.strategy}"
      popover-z-index="${args['popover-z-index']}"
      backdrop-append-to="${args['backdrop-append-to']}"
      ?auto-focus-on-mount="${args['auto-focus-on-mount']}"
    >
      ${args.children}
    </mdc-select>
  `);

const meta: Meta = {
  title: 'Components/select/select',
  tags: ['autodocs'],
  component: 'mdc-select',
  render,
  parameters: {
    badges: ['stable'],
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
    placeholder: {
      control: 'text',
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
    'auto-focus-on-mount': {
      control: 'boolean',
    },
    placement: {
      control: 'select',
      options: ['bottom-start', 'top-start'],
    },
    'soft-disabled': {
      control: 'boolean',
    },
    ...hideControls(['id', 'value', 'validity', 'validation-message', 'willValidate', 'default', 'itemsStore']),
    ...textControls([
      '--mdc-select-background-color',
      '--mdc-select-background-color-hover',
      '--mdc-select-background-color-active',
      '--mdc-select-background-color-disabled',
      '--mdc-select-text-color',
      '--mdc-select-text-color-selected',
      '--mdc-select-text-color-disabled',
      '--mdc-select-border-color',
      '--mdc-select-border-color-disabled',
      '--mdc-select-border-color-success',
      '--mdc-select-border-color-warning',
      '--mdc-select-border-color-error',
      '--mdc-select-width',
      '--mdc-select-listbox-height',
      '--mdc-select-listbox-width',
    ]),
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
    placement: 'bottom-start',
    children: html`<mdc-selectlistbox>
      <mdc-option value="london" label="London, UK"></mdc-option>
      <mdc-option selected value="losangeles" label="Los Angeles, CA"></mdc-option>
      <mdc-option value="newyork" label="New York, NY"></mdc-option>
      <mdc-option value="phoenix" label="Phoenix, AZ"></mdc-option>
      <mdc-option value="seattle" label="Seattle, WA"></mdc-option>
    </mdc-selectlistbox>`,
  },
};

export const SelectWithSecondaryLabel: StoryObj = {
  args: {
    label: 'Options and secondary labels',
    placeholder: 'Select an option',
    children: html`<mdc-selectlistbox>
      <mdc-option label="Option 1" secondary-label="Secondary Label 1"></mdc-option>
      <mdc-option label="Option 2" secondary-label="Secondary Label 2"></mdc-option>
      <mdc-option label="Option 3" secondary-label="Secondary Label 3"></mdc-option>
      <mdc-option label="Option 4" secondary-label="Secondary Label 4"></mdc-option>
    </mdc-selectlistbox>`,
  },
};

export const SelectWithGroups: StoryObj = {
  args: {
    label: 'Options with groups',
    children: html`<mdc-selectlistbox>
      <mdc-optgroup label="Fruit">
        <mdc-option value="apple" label="Apples"></mdc-option>
        <mdc-option value="banana" label="Bananas"></mdc-option>
        <mdc-option value="cherry" label="Cherries"></mdc-option>
        <mdc-option value="damson" label="Damsons"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Vegetables">
        <mdc-option value="artichoke" label="Artichokes"></mdc-option>
        <mdc-option value="broccoli" label="Broccoli"></mdc-option>
        <mdc-option value="cabbage" label="Cabbages"></mdc-option>
      </mdc-optgroup>
      <mdc-divider></mdc-divider>
      <mdc-optgroup label="Fish">
        <mdc-option value="tuna" label="Tuna"></mdc-option>
        <mdc-option value="salmon" label="Salmon"></mdc-option>
      </mdc-optgroup>
    </mdc-selectlistbox>`,
  },
  render: (args: Args) => html` <div style="height: 35rem;">${render(args)}</div> `,
};

export const SelectWithLongOptionText: StoryObj = {
  args: {
    label: 'Options with long text',
    placeholder: 'Select one color',
    children: html`<mdc-selectlistbox>
      <mdc-option label="Red"></mdc-option>
      <mdc-option label="Yellow" id="trigger-option"></mdc-option>
      <mdc-option id="option-1" label="White and Black are the biggest colors on the spectrum"></mdc-option>
      <mdc-option label="Green"></mdc-option>
    </mdc-selectlistbox>`,
  },
  render: (args: Args) => html`
    ${render(args)}
    <mdc-tooltip triggerid="option-1" show-arrow> White and Black are the biggest colors on the spectrum </mdc-tooltip>
  `,
};

export const SelectWithIconOptions: StoryObj = {
  args: {
    label: 'You are in a meeting',
    placeholder: 'Select an option',
    children: html`<mdc-selectlistbox>
      <mdc-option prefix-icon="alert-bold" label="Mute notifications"></mdc-option>
      <mdc-option prefix-icon="apps-bold" label="Add apps"></mdc-option>
      <mdc-option prefix-icon="stored-info-bold" label="View direct message policy"></mdc-option>
      <mdc-option prefix-icon="calendar-day-bold" label="Meeting capabilities"></mdc-option>
      <mdc-option prefix-icon="exit-room-bold" label="Leave"></mdc-option>
    </mdc-selectlistbox>`,
  },
};

export const SelectWithStates: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-rows: repeat(3, 1fr);  gap: 2rem;">
      <mdc-select
        help-text-type="${VALIDATION.SUCCESS}"
        help-text="The correct number of Infinity Stones has been selected."
        label="How many Infinity Stones exist?"
        required
      >
        <mdc-selectlistbox>
          <mdc-option value="six" selected label="Six"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text="Selecting this number may cause a security risk because it is not properly setup."
        help-text-type="${VALIDATION.WARNING}"
        label="Select phone number"
        required
      >
        <mdc-selectlistbox>
          <mdc-option selected value="456-198-0253" label="456-198-0253"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
      <mdc-select
        help-text-type="${VALIDATION.ERROR}"
        help-text="You must select the total number of Infinity Stones."
        label="How many Infinity Stones exist?"
        placeholder="Select the total number of Infinity Stones"
        required
      ></mdc-select>
      <mdc-select help-text="This is a disabled text." label="Label" placeholder="Selected text" disabled></mdc-select>
      <mdc-select help-text="This is a readonly text." label="Label" placeholder="Selected text" readonly></mdc-select>
    </div>
  `,
  ...hideAllControls(),
};

export const SelectWithForm: StoryObj = {
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedStones = formData.get('stone-count');
      const selectedAvengers = formData.get('avengers-name');
      action('Form Submitted')({
        value: {
          selectedStones,
          selectedAvengers,
        },
      });
    };

    return html`
      <form @submit=${handleSubmit}>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
            @change=${action('avengers select onchange')}
            @input=${action('avengers select oninput')}
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
            @change=${action('stones select onchange')}
            @input=${action('stones select oninput')}
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  ...hideAllControls(),
};

export const SelectWithFormHelpTextValidation: StoryObj = {
  render: args => {
    const validateSelects = (form: HTMLFormElement, args: any): boolean => {
      const avengerSelect = form.querySelector('mdc-select[name="avengers-name"]') as Select;
      const stoneSelect = form.querySelector('mdc-select[name="stone-count"]') as Select;
      const avengerValue = avengerSelect.value;
      const stoneValue = stoneSelect.value;
      let valid = true;
      if (args.required && (!avengerValue || avengerValue === '')) {
        avengerSelect.setAttribute('help-text', 'Please select your favorite Avenger');
        avengerSelect.setAttribute('help-text-type', 'error');
        valid = false;
      } else {
        avengerSelect.setAttribute('help-text', 'Looks good!');
        avengerSelect.setAttribute('help-text-type', 'success');
      }
      if (args.required && (!stoneValue || stoneValue === '')) {
        stoneSelect.setAttribute('help-text', 'Please select the Infinity Stone count');
        stoneSelect.setAttribute('help-text-type', 'error');
        valid = false;
      } else {
        stoneSelect.setAttribute('help-text', 'Looks good!');
        stoneSelect.setAttribute('help-text-type', 'success');
      }
      return valid;
    };

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateSelects(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedStones = formData.get('stone-count');
      const selectedAvengers = formData.get('avengers-name');
      action('Form Submitted')({
        value: {
          selectedStones,
          selectedAvengers,
        },
      });
    };

    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const avengerSelect = form.querySelector('mdc-select[name="avengers-name"]') as Select;
      const stoneSelect = form.querySelector('mdc-select[name="stone-count"]') as Select;
      avengerSelect.setAttribute('help-text', args['help-text'] || '');
      avengerSelect.setAttribute('help-text-type', args['help-text-type'] || 'default');
      stoneSelect.setAttribute('help-text', args['help-text'] || '');
      stoneSelect.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };

    return html`
      <form @submit=${handleSubmit} @reset=${handleReset} novalidate>
        <fieldset style="display: flex; flex-direction: column; gap: 1rem; height: 20rem; width: 20rem;">
          <mdc-select
            name="avengers-name"
            placeholder="Select the avenger"
            label="Who is your favorite Avenger?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="ironman" label="Iron Man"></mdc-option>
              <mdc-option value="captainamerica" label="Captain America"></mdc-option>
              <mdc-option value="thor" label="Thor"></mdc-option>
              <mdc-option value="hulk" selected label="Hulk"></mdc-option>
              <mdc-option value="blackwidow" label="Black Widow"></mdc-option>
              <mdc-option value="hawkeye" label="Hawkeye"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <mdc-select
            name="stone-count"
            placeholder="Select the count"
            label="How many Infinity Stones exist?"
            required
          >
            <mdc-selectlistbox>
              <mdc-option value="two" label="Two"></mdc-option>
              <mdc-option value="three" label="Three"></mdc-option>
              <mdc-option value="four" label="Four"></mdc-option>
              <mdc-option value="five" label="Five"></mdc-option>
              <mdc-option value="six" label="Six"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
          <div style="display: flex; gap: 3rem; margin-top: 1rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `;
  },
  args: {
    required: true,
    'help-text': '',
    'help-text-type': 'default',
  },
  ...hideAllControls(),
};

export const SelectWithDynamicOptions: StoryObj = {
  render: () => {
    const options = Array.from({ length: 10 }, (_, i) => html`<mdc-option label="Option ${i + 1}"></mdc-option>`);
    let extraOption: TemplateResult | null = null;

    setTimeout(() => {
      extraOption = html`<mdc-option label="Delayed Option"></mdc-option>`;
      const select = document.querySelector('mdc-select[label="Select option"] mdc-selectlistbox');
      if (select) {
        const option = document.createElement('mdc-option');
        option.setAttribute('label', 'Delayed Option');
        select.appendChild(option);
      }
    }, 2000);

    return wrapWithDiv(html`
      <mdc-select placeholder="Select an option" label="Select option">
        <mdc-selectlistbox> ${options} ${extraOption} </mdc-selectlistbox>
      </mdc-select>
    `);
  },
  argTypes: {
    ...disableControls(['readonly', 'name', 'data-aria-label', 'disabled', 'required', 'help-text-type', 'help-text']),
  },
  ...hideAllControls(),
};

export const SelectWithChangingSelectedAfterMount: StoryObj = {
  render: () => {
    const handleClick = () => {
      const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
      if (selectListbox) {
        const options = selectListbox.querySelectorAll('mdc-option');
        options.forEach((option, idx) => {
          if (idx === 0) {
            option.removeAttribute('selected');
          }
          if (idx === 1) {
            option.setAttribute('selected', '');
          }
        });
      }
    };

    const handleClickRemove = () => {
      const selectListbox = document.querySelector('mdc-select[label="Select an option"] mdc-selectlistbox');
      if (selectListbox) {
        const options = selectListbox.querySelectorAll('mdc-option');
        options.forEach(option => {
          option.removeAttribute('selected');
        });
      }
    };

    return wrapWithDiv(html`
      <mdc-button @click=${handleClick}>Change Selected to Option 2</mdc-button>
      <mdc-button @click=${handleClickRemove}>Remove Selected</mdc-button>
      <mdc-select
        label="Select an option"
        placeholder="Select an option"
        @change="${action('onchange')}"
        @click="${action('onclick')}"
        @input="${action('oninput')}"
        @keydown="${action('onkeydown')}"
        @focus="${action('onfocus')}"
      >
        <mdc-selectlistbox>
          <mdc-option selected label="Option 1" secondary-label="Secondary Label 1" value="option1"></mdc-option>
          <mdc-option label="Option 2" secondary-label="Secondary Label 2" value="option2"></mdc-option>
          <mdc-option label="Option 3" secondary-label="Secondary Label 3" value="option3"></mdc-option>
          <mdc-option label="Option 4" secondary-label="Secondary Label 4" value="option4"></mdc-option>
        </mdc-selectlistbox>
      </mdc-select>
    `);
  },
  ...hideAllControls(),
};
