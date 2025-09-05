import { action } from '@storybook/addon-actions';
import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-slider
    @input="${action('input')}"
    @change="${action('change')}"
    min="${args.min}"
    max="${args.max}"
    step="${args.step}"
    value="${args.value}"
    value-start="${args['value-start']}"
    value-end="${args['value-end']}"
    ?range="${args.range}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    leading-icon="${args['leading-icon']}"
    trailing-icon="${args['trailing-icon']}"
    label="${args.label}"
    label-start="${args['label-start']}"
    label-end="${args['label-end']}"
    value-label="${args['value-label']}"
    value-label-start="${args['value-label-start']}"
    value-label-end="${args['value-label-end']}"
    start-aria-label="${args['start-aria-label']}"
    start-aria-valuetext="${args['start-aria-valuetext']}"
    end-aria-label="${args['end-aria-label']}"
    end-aria-valuetext="${args['end-aria-valuetext']}"
    name="${args.name}"
    name-start="${args['name-start']}"
    name-end="${args['name-end']}"
    data-aria-valuetext="${args['data-aria-valuetext']}"
    data-aria-label="${args['data-aria-label']}"
  ></mdc-slider>
`;

const meta: Meta = {
  title: 'Work In Progress/slider',
  tags: ['autodocs'],
  component: 'mdc-slider',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number', if: { arg: 'range', eq: false } },
    'value-start': { control: 'number', if: { arg: 'range', eq: true } },
    'value-end': { control: 'number', if: { arg: 'range', eq: true } },
    range: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'soft-disabled': { control: 'boolean' },
    'leading-icon': { control: 'text' },
    'trailing-icon': { control: 'text' },
    label: { control: 'text' },
    'label-start': { control: 'text' },
    'label-end': { control: 'text' },
    'value-label': { control: 'text', if: { arg: 'range', eq: false } },
    'value-label-start': { control: 'text', if: { arg: 'range', eq: true } },
    'value-label-end': { control: 'text', if: { arg: 'range', eq: true } },
    'start-aria-label': { control: 'text', if: { arg: 'range', eq: true } },
    'start-aria-valuetext': { control: 'text', if: { arg: 'range', eq: true } },
    'end-aria-label': { control: 'text', if: { arg: 'range', eq: true } },
    'end-aria-valuetext': { control: 'text', if: { arg: 'range', eq: true } },
    name: { control: 'text', if: { arg: 'range', eq: false } },
    'name-start': { control: 'text', if: { arg: 'range', eq: true } },
    'name-end': { control: 'text', if: { arg: 'range', eq: true } },
    'data-aria-valuetext': { control: 'text', if: { arg: 'range', eq: false } },
    'data-aria-label': { control: 'text' },
    ...textControls([
      '--mdc-slider-thumb-color',
      '--mdc-slider-thumb-border-color',
      '--mdc-slider-thumb-size',
      '--mdc-slider-input-size',
      '--mdc-slider-tick-size',
      '--mdc-slider-track-height',
      '--mdc-slider-tick-color',
      '--mdc-slider-progress-color',
      '--mdc-slider-track-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    range: false,
    disabled: false,
    'soft-disabled': false,
    'leading-icon': 'placeholder-bold',
    'trailing-icon': 'placeholder-bold',
    label: 'Volume',
    'label-start': 'Min',
    'label-end': 'Max',
    'value-label': '',
    'value-label-start': '',
    'value-label-end': '',
    'start-aria-label': '',
    'start-aria-valuetext': '',
    'end-aria-label': '',
    'end-aria-valuetext': '',
    name: '',
    'name-start': '',
    'name-end': '',
    'data-aria-valuetext': '',
    'data-aria-label': '',
    class: '',
    style: '',
  },
};

export const SliderWithTicks: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 5,
    value: 20,
    'label-start': 'Start',
    'label-end': 'End',
    label: 'Steps',
  },
};

export const DisabledSlider: StoryObj = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true,
    label: 'Disabled',
  },
};

export const SliderWithIcons: StoryObj = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    'leading-icon': 'speaker-muted-bold',
    'trailing-icon': 'speaker-bold',
    label: 'Volume',
  },
};

export const SoftDisabledSlider: StoryObj = {
  args: {
    min: 0,
    max: 100,
    value: 30,
    label: 'Timeline with labels',
    'label-start': '00:00',
    'label-end': '03:00',
    'value-label': `00:30`,
    'soft-disabled': true,
  },
};

export const RangeSlider: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
  },
};

export const RangeSliderWithTicks: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 12,
    'value-start': 38,
    'value-end': 90,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
  },
};

export const DisabledRangeSlider: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    disabled: true,
  },
};

export const SoftDisabledRangeSlider: StoryObj = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    'value-start': 20,
    'value-end': 80,
    range: true,
    label: 'Range',
    'label-start': 'Min',
    'label-end': 'Max',
    'soft-disabled': true,
  },
};
