import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '.';
import { html } from 'lit';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { TAB_VARIANTS } from '../tab/tab.constants';
import '../badge';

const render = (args: Args) => html`
<mdc-tablist
  @change="${action('onchange')}"
  @keyup="${action('onkeyup')}"
  @keydown="${action('onkeydown')}"
  active-tabid="${args['active-tabid']}"
  aria-label="Media types">
  <mdc-tab
    variant=${args.tabvariant}
    text="Photos"
    icon-name="add-photo-bold"
    tabid="photos-tab"
    aria-controls="photos-panel">
  </mdc-tab>
  <mdc-tab variant=${args.tabvariant}
    text="Videos"
    icon-name="video-bold"
    tabid="videos-tab"
    aria-controls="videos-panel">
    <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
  </mdc-tab>
  <mdc-tab variant=${args.tabvariant}
    text="Music"
    icon-name="file-music-bold"
    tabid="music-tab"
    aria-controls="music-panel">
  </mdc-tab>
  <mdc-tab
    variant=${args.tabvariant}
    text="Documents"
    icon-name="document-bold"
    tabid="documents-tab"
    aria-controls="documents-panel">
  </mdc-tab>
  <mdc-tab
    variant=${args.tabvariant}
    text="Downloads"
    icon-name="cloud-download-bold"
    tabid="downloads-tab"
    aria-controls="downloads-panel">
  </mdc-tab>
</mdc-tablist>

<!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
  <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab" hidden>
    <p>Photos panel</p>
  </div>
  <div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
    <p>Videos panel</p>
  </div>
  <div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
    <p>Music panel</p>
  </div>
  <div id="documents-panel" role="tabpanel" aria-labelledby="documents-tab" hidden>
    <p>Documents panel</p>
  </div>
  <div id="downloads-panel" role="tabpanel" aria-labelledby="downloads-tab" hidden>
    <p>Downloads panel</p>
  </div>
<!-- End of example markup for the tab panels -->`;

const meta: Meta = {
  title: 'Work in Progress/tablist',
  tags: ['autodocs'],
  component: 'mdc-tablist',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'active-tabid': {
      control: 'text',
      description: 'ID of the active tab, defaults to the first tab if not provided',
    },
    tabvariant: {
      control: 'select',
      description: 'Set the variant of tab inside the tablist',
      options: Object.values(TAB_VARIANTS),
    },
    ...hideControls([
      'tabvariant',
      'activeTabId',
      'tabsContainer',
      'tabs',
      'isRtl',
      'handleFocus',
      'setActiveTab',
      'focusTab',
      'handleKeydown',
      'handleArrowButtonVisibility',
      'scrollTabs',
    ]),
    ...disableControls([
      '--mdc-tablist-gap',
      '--mdc-tablist-width',
      '--mdc-container-button-padding',
      'change',
      'Default',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    tabvariant: 'line',
  },
};

export const ActiveTabAttributeSet: StoryObj = {
  args: {
    tabvariant: 'glass',
    'active-tabid': 'documents-tab',
  },
};
