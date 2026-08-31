import type { Decorator, Meta, StoryFn, StoryObj } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { html } from 'lit';

import '.';
import './motionprovider.stories.styles.css';
import '../button';
import '../buttonsimple';
import '../accordionbutton';
import '../tab';
import '../tablist';
import '../menupopover';
import '../menuitem';
import '../divider';
import '../dialog';
import { hideAllControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

const MENU_TRIGGER_ID = 'motion-demo-menu-trigger';
const DIALOG_TRIGGER_ID = 'motion-demo-dialog-trigger';
const DIALOG_ID = 'motion-demo-dialog';

const stripBodyMotionClasses: Decorator = Story => {
  document.querySelector('body.sb-show-main')?.classList.remove('mds-motion', 'mds-animation');

  return Story();
};

const openDialog = (): void => {
  document.getElementById(DIALOG_ID)?.setAttribute('visible', '');
};

const closeDialog = (): void => {
  document.getElementById(DIALOG_ID)?.removeAttribute('visible');
};

const render: StoryFn = (args, { updateArgs }) => {
  const motionMode = args.motionEnabled ? 'full' : 'reduce';

  return html`
    <div class="motionDemo">
      
      <h1>Motion Provider Demo</h1>
      <mdc-motionprovider motion="${motionMode}">
        <div class="motionDemoSections">
          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Button</h3>
            <p class="motionDemoSectionHint">Hover or focus for token-based hover transitions.</p>
            <div class="motionDemoRow">
              <mdc-button color="positive" icon-start="plus-bold">Primary</mdc-button>
              <mdc-button variant="secondary" color="negative" icon-start="settings-bold">Secondary</mdc-button>
              <mdc-button variant="tertiary" color="accent" icon-start="settings-bold">Tertiary</mdc-button>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Accordion</h3>
            <p class="motionDemoSectionHint">Expand and collapse to see fade and height transitions.</p>
            <div role="${ROLE.MAIN}">
              <mdc-accordionbutton header-text="Accordion panel" prefix-icon="info-circle-bold">
                <h3>This is a heading for this accordion component.</h3>
                <p>Token-based expand and collapse motion runs when this panel opens and closes. This is a paragraph for this accordion component.</p>
              </mdc-accordionbutton>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Tab list Primary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${args['active-tab-id']}"
              @change=${(event: CustomEvent<{ tabId: string }>) => {
                action('onchange')(event);
                updateArgs({ 'active-tab-id': event.detail.tabId });
              }}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold"></mdc-tab>
            </mdc-tablist>
            <h3 class="motionDemoSectionTitle">Tab list Secondary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${args['active-tab-id']}"
              @change=${(event: CustomEvent<{ tabId: string }>) => {
                action('onchange')(event);
                updateArgs({ 'active-tab-id': event.detail.tabId });
              }}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold" variant="line"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold" variant="line"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold" variant="line"></mdc-tab>
            </mdc-tablist>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Menu popover</h3>
            <p class="motionDemoSectionHint">Open the menu to see slide entrance and exit transitions.</p>
            <mdc-button id="${MENU_TRIGGER_ID}">Open menu</mdc-button>
            <mdc-menupopover triggerID="${MENU_TRIGGER_ID}" placement="bottom-start" aria-label="Demo menu">
              <mdc-menuitem label="New"></mdc-menuitem>
              <mdc-menuitem label="Open"></mdc-menuitem>
              <mdc-divider></mdc-divider>
              <mdc-menuitem label="Save"></mdc-menuitem>
            </mdc-menupopover>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Dialog</h3>
            <p class="motionDemoSectionHint">Open the dialog to see backdrop and content fade transitions.</p>
            <mdc-button id="${DIALOG_TRIGGER_ID}" @click=${openDialog}>Open dialog</mdc-button>
            <mdc-dialog
              id="${DIALOG_ID}"
              triggerID="${DIALOG_TRIGGER_ID}"
              header-text="Motion demo"
              description-text="Dialog fade transitions use motion tokens."
              size="medium"
              @close=${closeDialog}
            >
              <div slot="dialog-body">
                <p>Use the Motion toggle to compare backdrop and content fade transitions.</p>
              </div>
              <mdc-button slot="footer-button-primary" @click=${closeDialog}>Done</mdc-button>
            </mdc-dialog>
          </section>
        </div>
      </mdc-motionprovider>
    </div>
  `;
};

const meta: Meta = {
  title: 'Providers/Motion Provider',
  tags: ['autodocs'],
  component: 'mdc-motionprovider',
  decorators: [stripBodyMotionClasses],
  render,
  argTypes: {
    motionEnabled: {
      control: 'boolean',
      description: 'When off, the provider uses `motion="reduce"` and token-based motion is disabled.',
    },
    'active-tab-id': {
      control: false,
    },
    ...hideAllControls(true),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    motionEnabled: true,
    'active-tab-id': 'calls-tab',
  },
};
