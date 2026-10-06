// url=<FIGMA_BUTTON_SELECTABLE_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { iconName } from '../../../../config/code-connect/icon';

const { renderProp } = figma.helpers.react;
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

// `size` is a numeric union on the component, so these stay numbers to render as size={64}.
const size = instance.getEnum('Size', {
  '64px': 64,
  '52px': 52,
  '40px': 40,
  '32px': 32,
  '28px': 28,
  '24px': 24,
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

// renderProp bakes in its own leading space (' size={64}', ' active') and returns '' when a prop is
// absent, so these join with no separator. Only valid because every value here is a primitive — for an
// instance, renderProp returns ResultSection[], which must be interpolated rather than joined.
const props = [
  renderProp('variant', variant),
  renderProp('size', size),
  renderProp('prefixIcon', prefixIcon),
  renderProp('active', active),
  renderProp('disabled', disabled),
].join('');

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

export default {
  example: figma.code`${badgeNoteOpen}<Button${props} />${badgeNoteClose}`,
  imports: ["import { Button } from '@momentum-design/components/dist/react';"],
  id: 'button-selectable-icon',
  metadata: { nestable: true },
};
