import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { DIALOG_ROLE, DIALOG_SIZE, DEFAULTS, DIALOG_VARIANT } from './dialog.constants';
import '../link';
import '../button';
import '../popover';
import '../tooltip';
import '../list';
import '../listitem';
import '../textarea';

const createDialog = (args: Args, content: TemplateResult, onClose: () => void) =>
  html`<mdc-dialog
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
    variant="${args.variant}"
    ?focus-trap="${args['focus-trap']}"
    @shown="${action('onshown')}"
    @hidden="${action('onhidden')}"
    @close="${onClose}"
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

const createTriggerWithTooltip = (triggerID: string, text: String, toggleVisibility: () => void) => html`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${toggleVisibility}" id="${triggerID}">${text}</mdc-button>
    <mdc-tooltip id="tooltip" triggerId="${triggerID}" placement="top"> Open a dialog </mdc-tooltip>
  </div>
`;

const dialogBodyContent = (toggleVisibility?: () => void, customHeader = false) => html`
  ${customHeader && html` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${toggleVisibility}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${toggleVisibility}">Primary</mdc-button>
`;

const dialogWithPopoverContent = (toggleVisibility: () => void) => html`
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
    <mdc-popover
      id="popover"
      placement="bottom"
      trigger="click"
      triggerId="popover-trigger"
      focus-trap
      interactive
      hide-on-escape
      focus-back-to-trigger
      hide-on-outside-click
    >
      <div class="popover-content">
        <p>This is the content of the popover.</p>
        <mdc-button @click="${toggleVisibility}">Close Popover</mdc-button>
      </div>
    </mdc-popover>
    <mdc-button id="popover-trigger">Toggle Popover</mdc-button>
    <mdc-tooltip id="tooltip" triggerId="tooltip-trigger" placement="top"> This is a tooltip </mdc-tooltip>
    <mdc-button id="tooltip-trigger">Hover me for tooltip</mdc-button>
  </div>
`;

const dialogWithIframeContent = () => html`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`;

const dialogWithTextarea = () => html`
  <div slot="dialog-body">
    <p>This is the body content of the dialog with a textarea. Try out pressing Tab to see the Focus Trap in action.</p>
    <mdc-textarea label="Type something here..." rows="4" cols="50"></mdc-textarea>
    <mdc-button>This is a mdc-button after the Textarea</mdc-button>
  </div>
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
    ${createDialog(args, dialogBodyContent(toggleVisibility), onClose)}
  `;
};

const renderWithCustomHeader = (args: Args) => {
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
    ${createDialog(args, dialogBodyContent(toggleVisibility, true), onClose)}
  `;
};

const renderSaveCancelBtns = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  const onClose = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.removeAttribute('visible');
  };

  const showConfirmAlert = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to cancel?')) {
      toggleVisibility();
    }
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(
      args,
      html`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${showConfirmAlert}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${toggleVisibility}">Save</mdc-button>
      `,
      onClose,
    )}
  `;
};

const renderNoFooter = (args: Args) => {
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
    ${createDialog(
      args,
      html` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,
      onClose,
    )}
  `;
};

const renderWithPopover = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  const onClose = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.removeAttribute('visible');
  };
  return html`
    ${createTriggerWithTooltip(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(args, dialogWithPopoverContent(toggleVisibility), onClose)}
  `;
};

const renderDialogWithinDialog = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  const toggleVisibilityNested = () => {
    const nestedDialog = document.getElementById('nested-dialog') as HTMLElement;
    nestedDialog.toggleAttribute('visible');
  };
  const onClose = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.removeAttribute('visible');
  };
  const onCloseNested = () => {
    const nestedDialog = document.getElementById('nested-dialog') as HTMLElement;
    nestedDialog.removeAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)}
    ${createDialog(
      args,
      html`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
          <mdc-button id="nested-dialog-trigger" @click=${toggleVisibilityNested}>Open Nested Dialog</mdc-button>
          <mdc-dialog
            id="nested-dialog"
            triggerId="nested-dialog-trigger"
            aria-label="nested-dialog"
            size="small"
            close-button-aria-label="Close nested dialog"
            header-text="Nested Dialog Header"
            description-text="This is a nested dialog description."
            @close="${onCloseNested}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,
      onClose,
    )}
  `;
};

const renderDialogWithTextarea = (args: Args) => {
  const toggleVisibility = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  };
  const onClose = () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.removeAttribute('visible');
  };
  return html`
    ${createTrigger(args.triggerId, 'Click me!', toggleVisibility)} ${createDialog(args, dialogWithTextarea(), onClose)}
  `;
};

const renderDialogWithIframe = (args: Args) => {
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
    ${createDialog(args, dialogWithIframeContent(), onClose)}
  `;
};

const dialogListContent = (textPassedToListHeader: string, ariaLabel: string) => html`
  <mdc-list aria-label="${ariaLabel}">
    ${textPassedToListHeader
      ? html`<mdc-listheader slot="list-header" header-text="${textPassedToListHeader}"></mdc-listheader>`
      : ''}
    <mdc-listitem @click=${action('onclick')} label="List Item 1">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${action('onclick')} label="List Item 2">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
    <mdc-listitem @click=${action('onclick')} label="List Item 3">
      <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
      <span slot="secondary-label ">This is a long secondary label</span>
      <mdc-button slot="trailing-controls" variant="secondary">Label</mdc-button>
      <mdc-toggle slot="trailing-controls" data-aria-label="mock label"></mdc-toggle>
    </mdc-listitem>
  </mdc-list>
`;

const renderDialogWithList = (args: Args) => html`
  ${createTrigger(args.triggerId, 'Click me!', () => {
    const dialog = document.getElementById(args.id) as HTMLElement;
    dialog.toggleAttribute('visible');
  })}
  ${createDialog(
    args,
    html`
      <div slot="dialog-body" style="width: 100%">
        <p>This is the body content of the dialog.</p>
        ${dialogListContent(args.textPassedToListHeader, args['aria-label'])}
      </div>
    `,
    () => {
      const dialog = document.getElementById(args.id) as HTMLElement;
      dialog.removeAttribute('visible');
    },
  )}
`;

const meta: Meta = {
  title: 'Components/dialog',
  tags: ['autodocs'],
  component: 'mdc-dialog',
  render,

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
      options: Object.values(DIALOG_SIZE),
    },
    visible: {
      control: 'boolean',
    },
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
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const medium: StoryObj = {
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const large: StoryObj = {
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const xlarge: StoryObj = {
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties,
  },
};

export const fullscreen: StoryObj = {
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
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
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `,
};

export const MountUnmount: StoryObj = {
  render: (args: Args) => {
    const onClose = () => {
      const dialog = document.getElementById(args.id) as HTMLElement;
      dialog.removeAttribute('visible');
    };
    return html`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${args.mountDialog ? createDialog(args, dialogBodyContent(), onClose) : ''}
    `;
  },
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
    mountDialog: true,
    visible: true,
  },
};

// with popover
export const WithPopover: StoryObj = {
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0],
  },
};

export const DialogWithinDialog: StoryObj = {
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0],
  },
};

export const DialogWithIframe: StoryObj = {
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0],
  },
};

export const DialogWithList: StoryObj = {
  render: renderDialogWithList,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1],
  },
};

export const DialogWithTextarea: StoryObj = {
  render: renderDialogWithTextarea,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[1],
  },
};
