import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const Demo: React.FC = () => (
  <div style={{ padding: 16, border: '1px dashed #ccc', borderRadius: 6 }}>
    Demo component. Switch to the <strong>Docs</strong> tab to see the addon
    in action.
  </div>
);

const meta: Meta<typeof Demo> = {
  title: 'Demo/demo',
  tags: ['autodocs'],
  component: Demo,
};

export default meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {};
