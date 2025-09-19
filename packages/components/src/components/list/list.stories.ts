import { action } from 'storybook/actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { createRef, ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';

import '../avatar';
import '../avatarbutton';
import '../badge';
import '../button';
import '../checkbox';
import '../divider';
import '../icon';
import '../listitem';
import '../listheader';
import '../text';
import '../toggle';
import '../select';
import '../selectlistbox';
import '../option';
import type List from '.';

const fakeUserNamesList = [
  'Maria Simpson',
  'Diana Rees',
  'Fiona Wallace',
  'Abigail Reid',
  'Theresa Miller',
  'Andrea Wright',
  'Natalie Hunter',
  'Bernadette Carr',
  'Samantha Robertson',
  'Deirdre Clark',
];

const render = (args: Args) =>
  html` <mdc-list aria-label="${args['aria-label']}" loop="${args.loop}" initial-focus="${args['initial-focus']}">
    ${args.textPassedToListHeader
      ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
      : ''}
    ${repeat(
      fakeUserNamesList,
      name =>
        html`<mdc-listitem @click="${action('onclick')}" label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
          <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
          <mdc-avatar
            slot="leading-controls"
            initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
          ></mdc-avatar>
          <mdc-button
            slot="trailing-controls"
            color="positive"
            prefix-icon="data-range-selection-bold"
            aria-label="mock label"
          ></mdc-button>
          <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
          <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
        </mdc-listitem> `,
    )}
  </mdc-list>`;

const meta: Meta = {
  title: 'Components/list',
  tags: ['autodocs'],
  component: 'mdc-list',
  render,

  argTypes: {
    textPassedToListHeader: {
      control: 'text',
      description: 'Text to be rendered in the list header component. This is a control in storybook only.',
    },
    'aria-label': {
      control: 'text',
    },
    ...disableControls(['default', 'list-header']),
    ...hideControls(['itemsStore']),
    loop: {
      control: 'select',
      options: ['true', 'false'],
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
  },
};

export const ListWithDivider: StoryObj = {
  render: args => html`
    <mdc-list aria-label="${args['aria-label']}">
      ${args.textPassedToListHeader
        ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
        : ''}
      <mdc-listitem @click=${action('onclick')} label="List Item 1"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 2"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 3"></mdc-listitem>
      <mdc-divider></mdc-divider>
      <mdc-listitem @click=${action('onclick')} label="List Item 4"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 5"></mdc-listitem>
      <mdc-listitem @click=${action('onclick')} label="List Item 6"></mdc-listitem>
    </mdc-list>
  `,
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
  },
};

export const ScrollableListWithSelect: StoryObj = {
  render: args => html`
    <mdc-list aria-label="${args['aria-label']}" style="height: 200px; overflow-y: auto;" id="scrollable-list">
      ${args.textPassedToListHeader
        ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
        : ''}
      ${repeat(
        fakeUserNamesList,
        name =>
          html`<mdc-listitem @click="${action('onclick')}" label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
            <mdc-select
              slot="leading-controls"
              style="--mdc-select-width: 200px;"
              boundary="scrollable-list"
              strategy="fixed"
              backdrop-append-to="scrollable-list"
            >
              <mdc-selectlistbox>
                <mdc-option value="option1" label="Option 1" disabled></mdc-option>
                <mdc-option value="option2" label="Option 2"></mdc-option>
                <mdc-option value="option3" label="Option 3"></mdc-option>
                <mdc-option value="option4" label="Option 4" disabled></mdc-option>
                <mdc-option value="option5" label="Option 5"></mdc-option>
                <mdc-option value="option6" label="Option 6" disabled></mdc-option>
                <mdc-option value="option6" label="Option 7" soft-disabled></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <mdc-avatar
              slot="leading-controls"
              initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
            ></mdc-avatar>
          </mdc-listitem> `,
      )}
    </mdc-list>
  `,
  args: {
    textPassedToListHeader: 'Scrollable Participants List',
    'aria-label': 'View all participants',
  },
};

export const ListWithRemovalElements: StoryObj = {
  render: args => {
    const handleRemoveItem = (event: Event) => {
      const button = event.target as HTMLElement;
      const listItem = button.closest('mdc-listitem');
      if (listItem) {
        listItem.remove();
      }
    };

    const removeLast = (event: Event) => {
      const button = event.target as HTMLElement;
      const items = [...button.closest('mdc-list')!.querySelectorAll('mdc-listitem')];

      items[items.length - 1]?.remove();
    };

    return html`
      <mdc-list aria-label="${args['aria-label']}">
        ${args.textPassedToListHeader
          ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
          : ''}
        ${repeat(
          fakeUserNamesList,
          name =>
            html`<mdc-listitem @click="${action('onclick')}" label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls" @click="${handleRemoveItem}"> Remove </mdc-button>
              <mdc-button slot="trailing-controls" @click="${removeLast}"> Remove Last </mdc-button>
            </mdc-listitem> `,
        )}
      </mdc-list>
    `;
  },
};

export const InitialFocusAtBottom: StoryObj = {
  args: {
    textPassedToListHeader: 'Participants List',
    'aria-label': 'View all participants',
    'initial-focus': fakeUserNamesList.length - 1,
  },
};

export const ExpandingList: StoryObj = {
  render: args => {
    const listRef = createRef<List>();

    const addItem = () => {
      const newItem = document.createElement('mdc-listitem');
      newItem.setAttribute('variant', LISTITEM_VARIANTS.INSET_PILL);
      newItem.setAttribute('label', `List Item ${(listRef.value?.children.length || 0) + 1}`);

      const btn1 = document.createElement('mdc-button');
      btn1.setAttribute('slot', 'trailing-controls');
      btn1.textContent = 'Action';

      const btn2 = document.createElement('mdc-button');
      btn2.setAttribute('slot', 'trailing-controls');
      btn2.textContent = 'Action 2';

      newItem.append(btn1, btn2);
      listRef.value?.append(newItem);
    };

    return html`
      <mdc-list aria-label="${args['aria-label']}" ${ref(listRef)}>
        ${args.textPassedToListHeader
          ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
          : ''}
        ${repeat(
          fakeUserNamesList.slice(0, 4),
          name =>
            html`<mdc-listitem label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
              <mdc-avatar
                slot="leading-controls"
                initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
              ></mdc-avatar>
              <mdc-button slot="trailing-controls">Action</mdc-button>
              <mdc-button slot="trailing-controls">Action 2</mdc-button>
            </mdc-listitem> `,
        )}
      </mdc-list>
      <mdc-button style="margin-top: 16px;" @click="${addItem}">Add Item</mdc-button>
    `;
  },
};

export const ScrollingList: StoryObj = {
  render: args =>
    html`<mdc-list
      style="height: 400px; overflow-y: auto; padding: 0.25rem"
      aria-label="${args['aria-label']}"
      loop="${args.loop}"
      initial-focus="${args['initial-focus']}"
    >
      ${args.textPassedToListHeader
        ? html`<mdc-listheader slot="list-header" header-text="${args.textPassedToListHeader}"></mdc-listheader>`
        : ''}
      ${repeat(
        new Array(5)
          .fill(0)
          .map(() => [...fakeUserNamesList])
          .flat(),
        item => item,
        name =>
          html`<mdc-listitem @click="${action('onclick')}" label="${name}" variant="${LISTITEM_VARIANTS.INSET_PILL}">
            <mdc-checkbox slot="leading-controls" data-aria-label="mock label"></mdc-checkbox>
            <mdc-avatar
              slot="leading-controls"
              initials="${[name.split(' ')[0][0], name.split(' ')[1][0]].join('')}"
            ></mdc-avatar>
            <mdc-button
              slot="trailing-controls"
              color="positive"
              prefix-icon="data-range-selection-bold"
              aria-label="mock label"
            ></mdc-button>
            <mdc-button slot="trailing-controls" variant="tertiary">Learn More</mdc-button>
            <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
          </mdc-listitem>`,
      )}
    </mdc-list>`,
};
