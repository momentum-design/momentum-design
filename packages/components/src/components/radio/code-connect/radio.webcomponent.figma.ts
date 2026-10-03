// url=<FIGMA_RADIO_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/radio/radio.component.ts
// component=mdc-radio
import figma from 'figma';
import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';

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

export default {
  example: figma.code`${element('mdc-radio', [
    attribute('label', label),
    attribute('help-text', helpText),
    attribute('toggletip-text', toggletipText),
    booleanAttribute('checked', checked),
    booleanAttribute('readonly', readonly),
    booleanAttribute('disabled', disabled),
  ])}`,
  imports: ["import '@momentum-design/components/components/radio';"],
  id: 'radio',
  metadata: { nestable: true },
};
