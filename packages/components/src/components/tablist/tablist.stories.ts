import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '.';
import { html } from 'lit';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { TAB_VARIANTS } from '../tab/tab.constants';
import '../badge';
import '../tab';

const render = (args: Args) => html`
<mdc-tablist
  @change="${action('onchange')}"
  active-tab-id="${args['active-tab-id']}"
  data-aria-label=${args['data-aria-label']}>
  <mdc-tab
    variant=${args.tabvariant}
    text="Calls"
    icon-name="audio-call-bold"
    tab-id="calls-tab"
    aria-controls="calls-panel">
  </mdc-tab>
  <mdc-tab variant=${args.tabvariant}
    text="Videos"
    icon-name="video-bold"
    tab-id="videos-tab"
    aria-controls="videos-panel">
    <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
  </mdc-tab>
  <mdc-tab variant=${args.tabvariant}
    text="Music"
    icon-name="file-music-bold"
    tab-id="music-tab"
    aria-controls="music-panel">
  </mdc-tab>
  <mdc-tab
    variant=${args.tabvariant}
    text="Documents"
    icon-name="document-bold"
    tab-id="documents-tab"
    aria-controls="documents-panel">
  </mdc-tab>
  <mdc-tab
    variant=${args.tabvariant}
    text="Meetings"
    icon-name="calendar-month-bold"
    tab-id="meetings-tab"
    aria-controls="meetings-panel">
  </mdc-tab>
</mdc-tablist>

<!-- The following is an example of the markup for the tab panels.
This markup is not part of the component and is only provided for context. -->
  <div id="calls-panel" role="tabpanel" aria-labelledby="calls-tab" hidden>
    <p>Calls panel</p>
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
  <div id="meetings-panel" role="tabpanel" aria-labelledby="meetings-tab" hidden>
    <p>Meetings panel</p>
  </div>
<!-- End of example markup for the tab panels -->`;

const meta: Meta = {
  title: 'Components/tablist',
  tags: ['autodocs'],
  component: 'mdc-tablist',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'active-tab-id': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    tabvariant: {
      control: 'select',
      description: 'Set the variant of tab inside the tablist',
      options: Object.values(TAB_VARIANTS),
    },
    ...hideControls([
      'tabvariant',
    ]),
    ...disableControls([
      '--mdc-tablist-gap',
      '--mdc-tablist-width',
      '--mdc-tablist-arrow-button-margin',
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
    'active-tab-id': 'documents-tab',
    'data-aria-label': 'Media types',
  },
};
