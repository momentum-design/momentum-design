// url=<FIGMA_RADIO_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/radio/radio.component.ts
// component=Radio
import figma from 'figma';

const { renderProp } = figma.helpers.react;
const instance = figma.selectedInstance;

const labelLayer = instance.findText('Label');

const label = instance.getBoolean('Label', {
  true: labelLayer.type === 'TEXT' ? labelLayer.textContent : undefined,
  false: undefined,
});

// "Body Text" sits inside the `.Core - Helper Text` instance, so the lookup has to cross that boundary.
const helpTextLayer = instance.findText('Body Text', { traverseInstances: true });

const helpText = instance.getBoolean('Helper Text', {
  true: helpTextLayer.type === 'TEXT' ? helpTextLayer.textContent : undefined,
  false: undefined,
});

// The design has no text layer for the toggletip; any non-empty value renders the info button.
const toggletipText = instance.getBoolean('Info Button', {
  true: 'This is a toggletip text to let the info button appear.',
  false: undefined,
});

const checked = instance.getEnum('Type', {
  Unselected: undefined,
  Selected: true,
});

const readonly = instance.getEnum('State', {
  Rest: undefined,
  Hover: undefined,
  Pressed: undefined,
  Focused: undefined,
  'Read Only': true,
  Disabled: undefined,
});

const disabled = instance.getEnum('State', {
  Rest: undefined,
  Hover: undefined,
  Pressed: undefined,
  Focused: undefined,
  'Read Only': undefined,
  Disabled: true,
});

// renderProp bakes in its own leading space (' label="x"', ' disabled') and returns '' when a prop is
// absent, so these join with no separator. Only valid because every value here is a primitive — for an
// instance, renderProp returns ResultSection[], which must be interpolated rather than joined.
const props = [
  renderProp('label', label),
  renderProp('helpText', helpText),
  renderProp('toggletipText', toggletipText),
  renderProp('checked', checked),
  renderProp('readonly', readonly),
  renderProp('disabled', disabled),
].join('');

export default {
  example: figma.code`<Radio${props} />`,
  imports: ["import { Radio } from '@momentum-design/components/dist/react';"],
  id: 'radio',
  metadata: { nestable: true },
};
