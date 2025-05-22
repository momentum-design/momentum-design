import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html, TemplateResult } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { DIALOG_ROLE, DIALOG_SIZE, DEFAULTS, DIALOG_VARIANT } from './dialog.constants';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import '../link';

const createDialog = (args: Args, content: TemplateResult) => html`<mdc-dialog
  class="${args.class}"
  style="${args.style}"
  id="${args.id}"
  z-index="${args['z-index']}"
  close-button-aria-label="${args['close-button-aria-label']}"
  header-text="${args['header-text']}"
  description-text="${args['description-text']}"
  header-tag-name="${args['header-tag-name']}"
  description-tag-name="${args['description-tag-name']}"
  role="${args.role}"
  triggerId="${args.triggerId}"
  aria-labelledby="${args['aria-labelledby']}"
  aria-label="${args['aria-label']}"
  size="${args.size}"
  ?visible="${args.visible}"
  variant="${args.variant}"
  @shown="${action('onshown')}"
  @hidden="${action('onhidden')}"
>
  ${content}
</mdc-dialog>`;

const createTrigger = (triggerID: string, text: String, toggleVisibility: () => void) => html`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${toggleVisibility}" id="${triggerID}">${text}</mdc-button>
  </div>
`;

const dialogBodyContent = (toggleVisibility: () => void, customHeader = false) => html`
${customHeader && html`
  <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
`}
<div slot="dialog-body">
  <p>This is the body content of the dialog.</p>
</div>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary" @click="${toggleVisibility}">Secondary</mdc-button>
<mdc-button slot="footer-button-primary" @click="${toggleVisibility}">Primary</mdc-button>
`;

const render = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, dialogBodyContent(toggleVisibility))}
  `;
};

const renderWithCustomHeader = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, dialogBodyContent(toggleVisibility, true))}
  `;
};

const renderSaveCancelBtns = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  const showConfirmAlert = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to cancel?')) {
      toggleVisibility();
    }
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, html`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${showConfirmAlert}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${toggleVisibility}">Save</mdc-button>
    `)}
  `;
};

const renderNoFooter = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, html`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `;
};

const meta: Meta = {
  title: 'Components/dialog',
  tags: ['autodocs'],
  component: 'mdc-dialog',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    id: {
      control: 'text',
    },
    triggerId: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(DIALOG_VARIANT),
    },
    'z-index': {
      control: 'number',
    },
    'aria-labelledby': {
      control: 'text',
    },
    'aria-label': {
      control: 'text',
    },
    'close-button-aria-label': {
      control: 'text',
    },
    'header-text': {
      control: 'text',
    },
    'description-text': {
      control: 'text',
    },
    'header-tag-name': {
      control: 'text',
    },
    'description-tag-name': {
      control: 'text',
    },
    role: {
      control: 'select',
      options: Object.values(DIALOG_ROLE),
    },
    size: {
      control: 'select',
      options: Object.values(DIALOG_SIZE),
    },
    visible: {
      control: 'boolean',
    },
    ...disableControls([
      '--mdc-dialog-primary-background-color',
      '--mdc-dialog-border-color',
      '--mdc-dialog-header-text-color',
      '--mdc-dialog-description-text-color',
      '--mdc-dialog-elevation-3',
      '--mdc-dialog-width',
    ]),
    ...hideControls([
      'shouldWrapFocus',
    ]),
  },
};

export default meta;

const commonProperties = {
  id: 'dialog',
  'z-index': DEFAULTS.Z_INDEX,
  role: DEFAULTS.ROLE,
  triggerId: 'dialog-trigger-btn',
  'close-button-aria-label': 'Close dialog',
  visible: false,
  variant: DEFAULTS.VARIANT,
};

const headerDescriptionProperties = {
  'header-text': 'Dialog Header',
  'description-text': 'This is a dialog description. It is only present if the header is present.',
  'header-tag-name': DEFAULTS.HEADER_TAG_NAME,
  'description-tag-name': DEFAULTS.DESCRIPTION_TAG_NAME,
};

export const Example: StoryObj = {
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const small: StoryObj = {
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const medium: StoryObj = {
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const large: StoryObj = {
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const withoutHeader: StoryObj = {
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0],
  },
};

export const withoutHeaderOrFooter: StoryObj = {
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0],
  },
};

export const withSaveCancelButtons: StoryObj = {
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
  },
};

export const withCustomHeader: StoryObj = {
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
  },
};

export const WithoutTriggerElement: StoryObj = {
  render: (args: Args) => html`
  <p>Toggle the visible property to show/hide the dialog</p>
  <mdc-dialog
    id="dialog"
    aria-label="dialog"
    size="small"
    variant="default"
    close-button-aria-label="Close dialog"
    ?visible="${args.visible}"
    z-index="100"
    role="dialog"
    header-text="Dialog Header"
    description-text="This is a dialog description. It is only present if the header is present."
    header-tag-name="h2"
    description-tag-name="p"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `,
};
