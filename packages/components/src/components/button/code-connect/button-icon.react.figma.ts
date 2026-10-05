// url=<FIGMA_BUTTON_ICON_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { iconName } from '../../../../config/code-connect/icon';

const { renderProp } = figma.helpers.react;
const instance = figma.selectedInstance;

// Unlike the pill set, this icon is not gated by a BOOLEAN — an icon button always renders one.
const prefixIcon = iconName(instance.getInstanceSwap('Icon Type'));

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

// `size` is a numeric union on the component, so these stay numbers to render as size={64}.
const size = instance.getEnum('Size', {
  '64px': 64,
  '52px': 52,
  '40px': 40,
  '32px': 32,
  '28px': 28,
  '24px': 24,
  '20px': 20,
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

// renderProp bakes in its own leading space (' size={64}', ' disabled') and returns '' when a prop is
// absent, so these join with no separator. Only valid because every value here is a primitive — for an
// instance, renderProp returns ResultSection[], which must be interpolated rather than joined.
const props = [
  renderProp('variant', variant),
  renderProp('size', size),
  renderProp('color', color),
  renderProp('prefixIcon', prefixIcon),
  renderProp('inverted', inverted),
  renderProp('disabled', disabled),
].join('');

// mdc-button has no badge prop or slot, so say so rather than render a button that silently drops it.
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
  id: 'button-icon',
  metadata: { nestable: true },
};
