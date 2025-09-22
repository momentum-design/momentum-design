import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { invert } from 'lodash';
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import illustrationManifest from '@momentum-design/illustrations/dist/manifest.json';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';
import { DIALOG_ROLE, DEFAULTS as DIALOG_DEFAULTS } from '../dialog/dialog.constants';

import { ANNOUNCEMENT_DIALOG_SIZE, DEFAULTS } from './announcementdialog.constants';

import '../link';
import '../button';

const createAnnouncementDialog = (args: Args, content?: TemplateResult, onClose?: () => void) =>
  html`<mdc-announcementdialog
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
    aria-labelledby="${ifDefined(args['aria-labelledby'])}"
    aria-label="${ifDefined(args['aria-label'])}"
    ?should-focus-trap-wrap=${args['should-focus-trap-wrap']}
    size="${args.size}"
    ?visible="${args.visible}"
    ?focus-trap="${args['focus-trap']}"
    illustration="${ifDefined(args.illustration)}"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
    @close="${onClose}"
  >
    ${content}
    <mdc-text slot="description-container" type="body-large-regular">
      Introduction sentence.
      <br />
      Feature description.
      <br />
      Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
      instructional or technical.
      <br />
      Max 8 lines of copy with or without breaks.
    </mdc-text>
  </mdc-announcementdialog>`;

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

const dialogBodyContent = (toggleVisibility?: () => void) => html`
  <mdc-button slot="footer-button-secondary" @click="${toggleVisibility}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${toggleVisibility}">Primary</mdc-button>
`;

const render = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };

  const onClose = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.removeAttribute('visible');
  };

  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createAnnouncementDialog(args, dialogBodyContent(toggleVisibility), onClose)}
  `;
};

const meta: Meta = {
  title: 'Widgets/announcementdialog',
  tags: ['autodocs'],
  component: 'mdc-announcementdialog',
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
    'header-tag-name': {
      control: 'text',
    },
    'should-focus-trap-wrap': {
      control: 'boolean',
    },
    'focus-trap': {
      control: 'boolean',
    },
    role: {
      control: 'select',
      options: Object.values(DIALOG_ROLE),
    },
    size: {
      control: 'select',
      options: Object.values(ANNOUNCEMENT_DIALOG_SIZE),
    },
    visible: {
      control: 'boolean',
    },
    illustration: {
      control: 'select',
      options: Object.values(invert(illustrationManifest)),
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    ...textControls([
      '--mdc-announcementdialog-illustration-background-color',
      '--mdc-dialog-primary-background-color',
      '--mdc-dialog-border-color',
      '--mdc-dialog-header-text-color',
      '--mdc-dialog-description-text-color',
      '--mdc-dialog-elevation-3',
      '--mdc-dialog-width',
      '--mdc-dialog-height',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    size: DEFAULTS.SIZE,
    'header-text': 'Dialog Header',
    'header-tag-name': DIALOG_DEFAULTS.HEADER_TAG_NAME,
    illustration: 'onezerox-better-threetwozero-onboarding-tertiary',
    visible: false,
    'close-button-aria-label': 'Close dialog',
    role: DIALOG_DEFAULTS.ROLE,
    id: 'dialog',
    triggerId: 'dialog-trigger-btn',
    'z-index': DIALOG_DEFAULTS.Z_INDEX,
    '--mdc-dialog-height': '30rem',
  },
};
