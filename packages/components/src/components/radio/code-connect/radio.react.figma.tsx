import { Radio } from '../../../../dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_RADIO_URL>', {
  props: {
    label: figma.boolean('Label', {
      true: figma.textContent('Label'),
      false: undefined,
    }),
    helpText: figma.boolean('Helper Text', {
      // TODO: Update this to use figma.textContent when available
      true: 'Helper text',
      false: undefined,
    }),
    toggletipText: figma.boolean('Info Button', {
      true: 'This is a toggletip text to let the info button appear.',
      false: undefined,
    }),
    readonly: figma.enum('State', {
      Rest: undefined,
      Hover: undefined,
      Pressed: undefined,
      Focused: undefined,
      'Read Only': true,
      Disabled: undefined,
    }),
    disabled: figma.enum('State', {
      Rest: undefined,
      Hover: undefined,
      Pressed: undefined,
      Focused: undefined,
      'Read Only': undefined,
      Disabled: true,
    }),
  },
  example: props => {
    return <Radio {...props} />;
  },
});
