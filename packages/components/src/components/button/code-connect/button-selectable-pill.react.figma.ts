// url=<FIGMA_BUTTON_SELECTABLE_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { iconName } from '../../../../config/code-connect/icon';

const { renderProp } = figma.helpers.react;
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

// `size` is a numeric union on the component, so these stay numbers to render as size={40}.
const size = instance.getEnum('Size', {
  '40px': 40,
  '32px': 32,
  '28px': 28,
  '24px': 24,
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

// mdc-button has no badge prop or slot, so say so rather than render a button that silently drops it.
// The fragment is load-bearing: a bare comment line before the JSX makes Prettier emit `;<Button`, and
// neither `//` nor the `;` is a comment once the snippet is pasted into JSX children.
const badgeNoteOpen = instance.getBoolean('Badge', {
  true: '<>\n{/* badge property is not supported in code */}\n',
  false: '',
});

const badgeNoteClose = instance.getBoolean('Badge', {
  true: '\n</>',
  false: '',
});

// renderProp bakes in its own leading space (' size={40}', ' active') and returns '' when a prop is
// absent, so these join with no separator. Only valid because every value here is a primitive — for an
// instance, renderProp returns ResultSection[], which must be interpolated rather than joined.
const props = [
  renderProp('variant', variant),
  renderProp('size', size),
  renderProp('prefixIcon', prefixIcon),
  renderProp('postfixIcon', postfixIcon),
  renderProp('active', active),
  renderProp('disabled', disabled),
].join('');

export default {
  example: figma.code`${badgeNoteOpen}<Button${props}>${label}</Button>${badgeNoteClose}`,
  imports: ["import { Button } from '@momentum-design/components/dist/react';"],
  id: 'button-selectable-pill',
  metadata: { nestable: true },
};
