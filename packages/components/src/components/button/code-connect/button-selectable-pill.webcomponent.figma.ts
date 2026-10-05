// url=<FIGMA_BUTTON_SELECTABLE_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';
import { iconName } from '../../../../config/code-connect/icon';

const instance = figma.selectedInstance;

const labelLayer = instance.findText('label');
const label = labelLayer.type === 'TEXT' ? labelLayer.textContent : '';

// The set declares two instance swaps per side; the second has a double-space key (`Leading Icon  Type`)
// that Figma normalises to the same name, leaving it shadowed and unaddressable — looking it up errors.
// The reachable one returns the same value in both Selected states, which is correct here: the component
// derives the filled icon from `active` itself.
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

// This set offers no Primary and no Color, so neither is emitted — the component defaults apply.
const variant = instance.getEnum('Type', {
  Secondary: 'secondary',
  Tertiary: 'tertiary',
});

const size = instance.getEnum('Size', {
  '40px': '40',
  '32px': '32',
  '28px': '28',
  '24px': '24',
});

// `active` is what makes this set selectable; the component also swaps the icons to their filled
// variant on its own while active, so the snippet keeps the icon name the design shows.
const active = instance.getEnum('Selected', {
  True: true,
  False: undefined,
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
      attribute('prefix-icon', prefixIcon),
      attribute('postfix-icon', postfixIcon),
      booleanAttribute('active', active),
      booleanAttribute('disabled', disabled),
    ],
    label,
  )}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-selectable-pill',
  metadata: { nestable: true },
};
