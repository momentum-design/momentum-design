// url=<FIGMA_BUTTON_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';
import { iconName } from '../../../../config/code-connect/icon';

const instance = figma.selectedInstance;

const labelLayer = instance.findText('label');
const label = labelLayer.type === 'TEXT' ? labelLayer.textContent : '';

// Both icon layers are named "placeholder", so findInstance cannot tell them apart. The instance-swap
// properties address them unambiguously, and the BOOLEAN beside each one gates whether it renders.
const leadingIcon = iconName(instance.getInstanceSwap('Leading Icon Type'));
const trailingIcon = iconName(instance.getInstanceSwap('Trailing Icon Type'));

const prefixIcon = instance.getBoolean('Leading Icon', {
  true: leadingIcon,
  false: undefined,
});

const postfixIcon = instance.getBoolean('Trailing Icon', {
  true: trailingIcon,
  false: undefined,
});

// Figma folds the inverted colour scheme into Type; the component splits it into variant + inverted.
const variant = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  'Inverted Primary': 'primary',
  'Inverted Secondary': 'secondary',
  'Inverted Tertiary': 'tertiary',
});

const inverted = instance.getEnum('Type', {
  Primary: undefined,
  Secondary: undefined,
  Tertiary: undefined,
  'Inverted Primary': true,
  'Inverted Secondary': true,
  'Inverted Tertiary': true,
});

const size = instance.getEnum('Size', {
  '40px': '40',
  '32px': '32',
  '28px': '28',
  '24px': '24',
});

const color = instance.getEnum('Color', {
  Default: 'default',
  Positive: 'positive',
  Negative: 'negative',
  Accent: 'accent',
  Promotional: 'promotional',
  Overlay: 'overlay',
});

// Rest, Hover, Pressed and Focused are rendered states with no API surface; only Disabled is a prop.
const disabled = instance.getEnum('State', {
  Rest: undefined,
  Hover: undefined,
  Pressed: undefined,
  Focused: undefined,
  Disabled: true,
});

// mdc-button has no badge attribute or slot, so say so rather than render a button that silently drops it.
const badgeNote = instance.getBoolean('Badge', {
  true: '<!-- badge property is not supported in code -->\n',
  false: '',
});

export default {
  example: figma.code`${badgeNote}${element(
    'mdc-button',
    [
      attribute('variant', variant),
      attribute('size', size),
      attribute('color', color),
      attribute('prefix-icon', prefixIcon),
      attribute('postfix-icon', postfixIcon),
      booleanAttribute('inverted', inverted),
      booleanAttribute('disabled', disabled),
    ],
    label,
  )}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-pill',
  metadata: { nestable: true },
};
