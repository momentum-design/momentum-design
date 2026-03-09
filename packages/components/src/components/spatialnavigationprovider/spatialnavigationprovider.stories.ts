import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import '../avatarbutton';

import { spatialNavigationStoryWrapper } from './spatialnavigationprovider.stories.utils';

const meta: Meta = {
  title: 'Providers/Spatial Navigation Provider',
  tags: ['autodocs'],
  component: 'mdc-spatialnavigationprovider',
  argTypes: {},
};

export default meta;

export const Example: StoryObj = spatialNavigationStoryWrapper({
  render: () => html` <mdc-avatarbutton initials="MD"></mdc-avatarbutton> `,
});
