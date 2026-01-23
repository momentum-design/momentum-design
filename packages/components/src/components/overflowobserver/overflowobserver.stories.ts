import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import './overflowobserver.e2e-test.utils';
import '../button';
import '../buttongroup';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import type OverflowObserverE2EUtil from './overflowobserver.e2e-test.utils';

const meta: Meta = {
  title: 'Components/overflowobserver',
  tags: ['autodocs'],
  component: 'mdc-overflowobserver',
  parameters: {},
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render: () => {
    const setObserving = (observing: boolean) => {
      const element = document.querySelector<OverflowObserverE2EUtil>('mdc-overflowobserver-e2e');

      if (observing) {
        element?.observeText();
      } else {
        element?.unobserveText();
      }
    };

    const setTextOverflow = (overflow: boolean) => {
      const element = document.querySelector<OverflowObserverE2EUtil>('mdc-overflowobserver-e2e');

      if (overflow) {
        element?.setAttribute('overflowing', '');
      } else {
        element?.removeAttribute('overflowing');
      }
    };

    return html`
      <div style="display: flex; gap: .5rem; margin-bottom: 1rem;">
        <mdc-buttongroup>
          <mdc-button @click=${() => setObserving(true)}>Observe Text</mdc-button>
          <mdc-button @click=${() => setObserving(false)}>Unobserve Text</mdc-button>
        </mdc-buttongroup>
        <mdc-buttongroup>
          <mdc-button @click=${() => setTextOverflow(true)}>width: 50px</mdc-button>
          <mdc-button @click=${() => setTextOverflow(false)}>width: auto</mdc-button>
        </mdc-buttongroup>
      </div>

      <mdc-overflowobserver>
        <mdc-overflowobserver-e2e></mdc-overflowobserver-e2e>
      </mdc-overflowobserver>
    `;
  },
};
