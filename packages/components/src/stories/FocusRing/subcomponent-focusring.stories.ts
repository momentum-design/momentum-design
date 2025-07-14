import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { hideControls } from '../../../config/storybook/utils';
import './subcomponent-focusring.stories.docs.mdx';
import '../../components/button';
import '../../components/avatarbutton';
import '../../components/tab';
import '../../components/badge';
import '../../components/link';
import '../../components/input';
import '../../components/radio';
import '../../components/checkbox';
import '../../components/toggle';

const meta: Meta = {
  title: 'Internal/focusring',
  parameters: {
    badges: ['stable'],
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
    a11y: { disable: true },
  },
};

export default meta;

export const Example: StoryObj = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `,
};

export const FocusRingWithinHost: StoryObj = {
  argTypes: {
    ...hideControls(['shape']),
  },
  render: () =>
    html` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`,
};
