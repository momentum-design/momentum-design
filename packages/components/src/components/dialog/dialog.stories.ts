import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html, TemplateResult } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { DIALOG_ROLE, DIALOG_SIZE, DEFAULTS } from './dialog.constants';
import { disableControls, hideControls } from '../../../config/storybook/utils';

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

const render = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, html`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <div
        slot="dialog-footer"
        style="
          display: flex;
        "
      >
        <mdc-button variant="secondary" @click="${toggleVisibility}">Cancel</mdc-button>
        <mdc-button variant="primary" @click="${toggleVisibility}">Confirm</mdc-button>
      </div>`)}
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
  title: 'Work In Progress/dialog',
  tags: ['autodocs'],
  component: 'mdc-dialog',
  render,
  parameters: {
    badges: ['wip'],
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
    ]),
    ...hideControls([
      'ariaLabelledById',
      'triggerElement',
      'enabledPreventScroll',
      'enabledFocusTrap',
      'shouldWrapFocus',
    ]),
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DEFAULTS.ROLE,
    size: DEFAULTS.SIZE,
    triggerId: 'dialog-trigger-btn',
    'header-text': 'Dialog Header',
    'description-text': 'This is a dialog description. It is only present if the header is present.',
    'header-tag-name': DEFAULTS.HEADER_TAG_NAME,
    'description-tag-name': DEFAULTS.DESCRIPTION_TAG_NAME,
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};

export const small: StoryObj = {
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DEFAULTS.ROLE,
    size: DIALOG_SIZE[0],
    triggerId: 'dialog-trigger-btn',
    'header-text': 'Dialog Header',
    'description-text': 'This is a dialog description. It is only present if the header is present.',
    'header-tag-name': DEFAULTS.HEADER_TAG_NAME,
    'description-tag-name': DEFAULTS.DESCRIPTION_TAG_NAME,
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};

export const medium: StoryObj = {
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DEFAULTS.ROLE,
    size: DIALOG_SIZE[1],
    triggerId: 'dialog-trigger-btn',
    'header-text': 'Dialog Header',
    'description-text': 'This is a dialog description. It is only present if the header is present.',
    'header-tag-name': DEFAULTS.HEADER_TAG_NAME,
    'description-tag-name': DEFAULTS.DESCRIPTION_TAG_NAME,
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};

export const large: StoryObj = {
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DEFAULTS.ROLE,
    size: DIALOG_SIZE[2],
    triggerId: 'dialog-trigger-btn',
    'header-text': 'Dialog Header',
    'description-text': 'This is a dialog description. It is only present if the header is present.',
    'header-tag-name': DEFAULTS.HEADER_TAG_NAME,
    'description-tag-name': DEFAULTS.DESCRIPTION_TAG_NAME,
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};

export const withoutHeader: StoryObj = {
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DEFAULTS.ROLE,
    size: DIALOG_SIZE[0],
    triggerId: 'dialog-trigger-btn',
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};

export const withoutHeaderOrFooter: StoryObj = {
  render: renderNoFooter,
  args: {
    id: 'dialog',
    'z-index': DEFAULTS.Z_INDEX,
    role: DIALOG_ROLE[1],
    size: DIALOG_SIZE[0],
    triggerId: 'dialog-trigger-btn',
    'close-button-aria-label': 'Close dialog',
    visible: false,
  },
};
