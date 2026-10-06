// url=<FIGMA_BUTTON_SELECTABLE_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=mdc-button
import figma from 'figma';

import { attribute, booleanAttribute, element } from '../../../../config/code-connect/html';
import { iconName } from '../../../../config/code-connect/icon';

const instance = figma.selectedInstance;

// The set declares two instance swaps, one per Selected state; the second has a double-space key
// (`Icon    Type`) that Figma normalises to the same name, leaving it shadowed and unaddressable.
// The reachable one returns the same value in both Selected states, which is correct here: the
// component derives the filled icon from `active` itself. Unlike the selectable pill the icon is not
// gated by a BOOLEAN — an icon button always renders one.
const prefixIcon = iconName(instance.getInstanceSwap('Icon Type'));

// This set offers no Primary and no Color, so neither is emitted — the component defaults apply.
const variant = instance.getEnum('Type', {
  Secondary: 'secondary',
  Tertiary: 'tertiary',
});

const size = instance.getEnum('Size', {
  '64px': '64',
  '52px': '52',
  '40px': '40',
  '32px': '32',
  '28px': '28',
  '24px': '24',
});

// `active` is what makes this set selectable; the component also swaps the icon to its filled variant
// on its own while active, so the snippet keeps the icon name the design shows.
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
  example: figma.code`${badgeNote}${element('mdc-button', [
    attribute('variant', variant),
    attribute('size', size),
    attribute('prefix-icon', prefixIcon),
    booleanAttribute('active', active),
    booleanAttribute('disabled', disabled),
  ])}`,
  imports: ["import '@momentum-design/components/components/button';"],
  id: 'button-selectable-icon',
  metadata: { nestable: true },
};
