import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from 'storybook/actions';
import '.';
import { html } from 'lit';

import { describeStory, hideControls } from '../../../config/storybook/utils';
import { TAB_SIZES, TAB_VARIANTS } from '../tab/tab.constants';
import '../badge';
import '../tab';
import '../dialog';
import '../button';
import '../popover';
import { ROLE } from '../../utils/roles';

const render = (args: Args) =>
  html` <mdc-tablist
      @change="${action('onchange')}"
      active-tab-id="${args['active-tab-id']}"
      data-aria-label=${args['data-aria-label']}
    >
      <mdc-tab
        size=${args.tabsize}
        variant=${args.tabvariant}
        text="Calls"
        icon-name="audio-call-bold"
        tab-id="calls-tab"
        aria-controls="calls-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${args.tabsize}
        variant=${args.tabvariant}
        text="Videos"
        icon-name="video-bold"
        tab-id="videos-tab"
        aria-controls="videos-panel"
      >
        <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
      </mdc-tab>
      <mdc-tab
        size=${args.tabsize}
        variant=${args.tabvariant}
        text="Music"
        icon-name="file-music-bold"
        tab-id="music-tab"
        aria-controls="music-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${args.tabsize}
        variant=${args.tabvariant}
        text="Documents"
        icon-name="document-bold"
        tab-id="documents-tab"
        aria-controls="documents-panel"
      >
      </mdc-tab>
      <mdc-tab
        size=${args.tabsize}
        variant=${args.tabvariant}
        text="Meetings"
        icon-name="calendar-month-bold"
        tab-id="meetings-tab"
        aria-controls="meetings-panel"
      >
      </mdc-tab>
    </mdc-tablist>

    <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
    <div id="calls-panel" role="tabpanel" hidden>
      <p>Calls panel</p>
    </div>
    <div id="videos-panel" role="tabpanel" hidden>
      <p>Videos panel</p>
    </div>
    <div id="music-panel" role="tabpanel" hidden>
      <p>Music panel</p>
    </div>
    <div id="documents-panel" role="tabpanel" hidden>
      <p>Documents panel</p>
    </div>
    <div id="meetings-panel" role="tabpanel" hidden>
      <p>Meetings panel</p>
    </div>
    <!-- End of example markup for the tab panels -->`;

const meta: Meta = {
  title: 'Components/tablist',
  tags: ['autodocs'],
  component: 'mdc-tablist',
  render,

  argTypes: {
    'active-tab-id': {
      control: 'select',
      description: 'ID of the active tab. Defaults to the first tab if not provided.',
      options: ['calls-tab', 'videos-tab', 'music-tab', 'documents-tab', 'meetings-tab'],
    },
    'data-aria-label': {
      control: 'text',
    },
    tabvariant: {
      control: 'select',
      description: 'Set the variant of tab inside the tablist',
      options: Object.values(TAB_VARIANTS),
    },
    tabsize: {
      control: 'select',
      description: 'Set the size of tabs inside the tablist',
      options: Object.values(TAB_SIZES),
    },
    ...hideControls(['itemsStore']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
    tabsize: TAB_SIZES[32],
    tabvariant: 'line',
  },
};

export const TablistWithPanels: StoryObj = {
  parameters: {
    ...describeStory(
      html` <b>Note:</b> This logic of updating the tab panels based on the active tab has been added only on this
        storybook example. <code>mdc-tablist</code> component does not control this logic. This implementation has to be
        added on the consumer's side`,
      true,
    ),
  },
  render: args => {
    const updateTabPanel = (event: CustomEvent) => {
      const activeTab = document.querySelector(`mdc-tab[tab-id="${event.detail.tabId}"]`);
      const panelId = activeTab?.getAttribute('aria-controls');
      const panels = document.querySelectorAll('[role="tabpanel"]');
      panels.forEach(panelElement => {
        const el = panelElement as HTMLElement;
        el.hidden = el.id !== panelId;
      });
    };
    return html` <mdc-tablist
        @change="${updateTabPanel}"
        active-tab-id="${args['active-tab-id']}"
        data-aria-label=${args['data-aria-label']}
      >
        <mdc-tab
          size=${args.tabsize}
          variant=${args.tabvariant}
          text="Calls"
          icon-name="audio-call-bold"
          tab-id="calls-tab"
          aria-controls="calls-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${args.tabsize}
          variant=${args.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel"
        >
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab
          size=${args.tabsize}
          variant=${args.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${args.tabsize}
          variant=${args.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel"
        >
        </mdc-tab>
        <mdc-tab
          size=${args.tabsize}
          variant=${args.tabvariant}
          text="Meetings"
          icon-name="calendar-month-bold"
          tab-id="meetings-tab"
          aria-controls="meetings-panel"
        >
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
      <div id="calls-panel" role="tabpanel" hidden>
        <p>Calls panel</p>
      </div>
      <div id="videos-panel" role="tabpanel" hidden>
        <p>Videos panel</p>
      </div>
      <div id="music-panel" role="tabpanel" hidden>
        <p>Music panel</p>
      </div>
      <div id="documents-panel" role="tabpanel">
        <p>Documents panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" hidden>
        <p>Meetings panel</p>
      </div>
      <!-- End of example markup for the tab panels -->`;
  },
  args: {
    tabvariant: 'glass',
    tabsize: TAB_SIZES[32],
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
  },
};

export const TablistWithButtons: StoryObj = {
  render: () => html`
    <div role="${ROLE.MAIN}">
      <mdc-tablist active-tab-id="tab-2" data-aria-label="Tablist with a lot of tabs">
        ${new Array(100)
          .fill(undefined)
          .map((_, i) => html`<mdc-tab text="Tab #${i + 1}" tab-id="tab-${i + 1}"></mdc-tab>`)}
      </mdc-tablist>
    </div>
  `,
  ...describeStory(
    html`<p role="${ROLE.REGION}">
      When the tabs overflow the available space, arrow buttons appear at the left and right ends of the tablist. These
      buttons allow users to scroll through the tabs horizontally. The arrow buttons are automatically shown or hidden
      based on the scroll position.
    </p>`,
  ),
};

export const TablistInsideDialog: StoryObj = {
  parameters: {
    ...describeStory(
      html`<p>
        A <code>mdc-tablist</code> inside an <code>mdc-dialog</code> with <code>focus-trap</code> enabled. Use
        <kbd>Tab</kbd> to navigate between the tabs and interactive elements inside the dialog.
      </p>`,
      true,
    ),
  },
  render: () => {
    const dialogId = 'tablist-dialog';

    const toggleVisibility = () => {
      const dialog = document.getElementById(dialogId) as HTMLElement;
      dialog?.toggleAttribute('visible');
    };

    const onClose = () => {
      const dialog = document.getElementById(dialogId) as HTMLElement;
      dialog?.removeAttribute('visible');
    };

    const updateTabPanel = (event: CustomEvent) => {
      const dialog = document.getElementById(dialogId);
      const activeTab = dialog?.querySelector(`mdc-tab[tab-id="${event.detail.tabId}"]`);
      const panelId = activeTab?.getAttribute('aria-controls');
      const panels = dialog?.querySelectorAll('[role="tabpanel"]');
      panels?.forEach(panelElement => {
        const el = panelElement as HTMLElement;
        el.hidden = el.id !== panelId;
      });
    };

    return html`
      <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
        <mdc-button @click="${toggleVisibility}" id="tablist-dialog-trigger">Open Dialog</mdc-button>
      </div>

      <mdc-dialog
        id="${dialogId}"
        header-text="Tabbed Dialog"
        close-button-aria-label="Close dialog"
        triggerId="tablist-dialog-trigger"
        focus-trap
        @close="${onClose}"
      >
        <div slot="dialog-body">
          <mdc-tablist @change="${updateTabPanel}" active-tab-id="calls-tab" data-aria-label="Media types">
            <mdc-tab text="Calls" icon-name="audio-call-bold" tab-id="calls-tab" aria-controls="dialog-calls-panel">
            </mdc-tab>
            <mdc-tab text="Videos" icon-name="video-bold" tab-id="videos-tab" aria-controls="dialog-videos-panel">
            </mdc-tab>
            <mdc-tab
              text="Documents"
              icon-name="document-bold"
              tab-id="documents-tab"
              aria-controls="dialog-documents-panel"
            >
            </mdc-tab>
          </mdc-tablist>

          <div id="dialog-calls-panel" role="tabpanel">
            <p>Calls panel content.</p>
            <mdc-button>Action in Calls</mdc-button>
          </div>
          <div id="dialog-videos-panel" role="tabpanel" hidden>
            <p>Videos panel content.</p>
            <mdc-button>Action in Videos</mdc-button>
          </div>
          <div id="dialog-documents-panel" role="tabpanel" hidden>
            <p>Documents panel content.</p>
            <mdc-button>Action in Documents</mdc-button>
          </div>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${onClose}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${onClose}">Confirm</mdc-button>
      </mdc-dialog>
    `;
  },
};
