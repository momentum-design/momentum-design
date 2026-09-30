import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../button';
import '../inputchip';
import '../list';
import '../listitem';
import '../menuitem';
import '../menupopover';
import '../popover';

import { DEFAULTS } from './aiassistantprompt.constants';

const ADD_TRIGGER_ID = 'aiassistantprompt-add-trigger';
const ADJUST_TRIGGER_ID = 'aiassistantprompt-adjust-trigger';
const SOURCES_TRIGGER_ID = 'aiassistantprompt-sources-trigger';
const PROMPT_ID = 'aiassistantprompt-example';
const SUGGESTIONS_ID = 'aiassistantprompt-suggestions';
const MIC_ON_ICON = 'microphone-on-bold';
const MIC_OFF_ICON = 'microphone-muted-bold';

const removeChip = (event: Event) => {
  action('remove')(event);
  (event.target as HTMLElement)?.remove();
};

const toggleMic = (event: Event) => {
  action('onclick')(event);
  const button = event.currentTarget as HTMLElement;
  const isOn = button.getAttribute('prefix-icon') === MIC_ON_ICON;
  button.setAttribute('prefix-icon', isOn ? MIC_OFF_ICON : MIC_ON_ICON);
  button.setAttribute('aria-label', isOn ? 'Start voice input' : 'Stop voice input');
};

const setSuggestionsWidth = (prompt: HTMLElement) => {
  const popover = document.getElementById(SUGGESTIONS_ID);
  if (!popover) {
    return;
  }
  const borderX =
    parseFloat(getComputedStyle(popover).borderLeftWidth) + parseFloat(getComputedStyle(popover).borderRightWidth);
  const width = `${prompt.getBoundingClientRect().width - borderX}px`;
  popover.style.setProperty('--mdc-popover-width', width);
  popover.style.setProperty('--mdc-popover-max-width', width);
};

const showSuggestions = (event: Event) => {
  action('onfocus')(event);
  const prompt = event.currentTarget as HTMLElement;
  setSuggestionsWidth(prompt);
  document.getElementById(SUGGESTIONS_ID)?.setAttribute('visible', '');
};

const hideSuggestions = (event: Event) => {
  action('onblur')(event);
  document.getElementById(SUGGESTIONS_ID)?.removeAttribute('visible');
};

const keepPromptFocused = (event: Event) => {
  event.preventDefault();
};

const headerAndFooter = html`
  <mdc-inputchip
    slot="header"
    label="Today's Tasks"
    clear-aria-label="Remove Today's Tasks"
    @remove="${removeChip}"
  ></mdc-inputchip>
  <mdc-inputchip
    slot="header"
    label="Generate Report"
    clear-aria-label="Remove Generate Report"
    @remove="${removeChip}"
  ></mdc-inputchip>
  <mdc-button
    id="${ADD_TRIGGER_ID}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="plus-bold"
    aria-label="Add to prompt"
  ></mdc-button>
  <mdc-button
    id="${ADJUST_TRIGGER_ID}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="adjust-horizontal-bold"
    aria-label="Add context"
  ></mdc-button>
  <mdc-button
    id="${SOURCES_TRIGGER_ID}"
    slot="footer-right"
    variant="tertiary"
    size="24"
    postfix-icon="arrow-down-bold"
  >
    All sources
  </mdc-button>
  <mdc-button
    slot="footer-right"
    variant="tertiary"
    size="32"
    prefix-icon="${MIC_ON_ICON}"
    aria-label="Stop voice input"
    @click="${toggleMic}"
  ></mdc-button>
  <mdc-button
    slot="footer-right"
    variant="primary"
    size="32"
    prefix-icon="arrow-tail-up-bold"
    aria-label="Send prompt"
    @click="${action('onclick')}"
  ></mdc-button>
`;

const addMenu = html`
  <mdc-menupopover
    triggerID="${ADD_TRIGGER_ID}"
    placement="bottom-start"
    aria-label="Add to prompt"
    @action="${action('onaction')}"
  >
    <mdc-menuitem label="Upload a file"></mdc-menuitem>
    <mdc-menuitem label="Add from Example project"></mdc-menuitem>
    <mdc-menuitem label="Add people"></mdc-menuitem>
  </mdc-menupopover>
`;

const adjustMenu = html`
  <mdc-menupopover
    triggerID="${ADJUST_TRIGGER_ID}"
    placement="bottom-start"
    aria-label="Add context"
    @action="${action('onaction')}"
  >
    <mdc-menuitem label="Model 1"></mdc-menuitem>
    <mdc-menuitem label="Model 2"></mdc-menuitem>
    <mdc-menuitem label="Model 3"></mdc-menuitem>
  </mdc-menupopover>
`;

const sourcesMenu = html`
  <mdc-menupopover
    triggerID="${SOURCES_TRIGGER_ID}"
    placement="bottom-end"
    aria-label="Select sources"
    @action="${action('onaction')}"
  >
    <mdc-menuitem label="All sources"></mdc-menuitem>
    <mdc-menuitem label="Source 1"></mdc-menuitem>
    <mdc-menuitem label="Source 2"></mdc-menuitem>
    <mdc-menuitem label="Source 3"></mdc-menuitem>
  </mdc-menupopover>
`;

const suggestionsMenu = html`
  <mdc-popover
    id="${SUGGESTIONS_ID}"
    triggerID="${PROMPT_ID}"
    trigger="manual"
    placement="top"
    disable-flip
    hide-on-escape
    aria-label="Prompt suggestions"
  >
    <mdc-list>
      <mdc-listitem
        label="Summarize Today's Tasks"
        @mousedown="${keepPromptFocused}"
        @click="${action('onclick')}"
      ></mdc-listitem>
      <mdc-listitem
        label="Draft an Example project update"
        @mousedown="${keepPromptFocused}"
        @click="${action('onclick')}"
      ></mdc-listitem>
      <mdc-listitem
        label="Generate Report recap"
        @mousedown="${keepPromptFocused}"
        @click="${action('onclick')}"
      ></mdc-listitem>
    </mdc-list>
  </mdc-popover>
`;

const render = (args: Args) => html`
  <div style="padding-block-start: 14rem;">
    <mdc-aiassistantprompt
      id="${PROMPT_ID}"
      @input="${action('oninput')}"
      @change="${action('onchange')}"
      @focus="${showSuggestions}"
      @blur="${hideSuggestions}"
      class="${args.class}"
      style="${args.style}"
      name="${args.name}"
      value="${args.value}"
      placeholder="${ifDefined(args.placeholder)}"
      rows="${args.rows}"
      data-aria-label="${ifDefined(args['data-aria-label'])}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
    >
      ${headerAndFooter}
    </mdc-aiassistantprompt>
    ${addMenu} ${adjustMenu} ${sourcesMenu} ${suggestionsMenu}
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/aiassistantprompt',
  tags: ['autodocs'],
  component: 'mdc-aiassistantprompt',
  render,
  argTypes: {
    ...classArgType,
    ...styleArgType,
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['validity', 'willValidate']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    name: 'prompt',
    value: '',
    placeholder: 'Ask about the Example project',
    rows: DEFAULTS.ROWS,
    disabled: false,
    readonly: false,
    'data-aria-label': 'AI assistant prompt',
  },
};
