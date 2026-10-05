// url=<FIGMA_BUTTON_PILL_URL>
// source=https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/button/button.component.ts
// component=Button
import figma from 'figma';

import { iconName } from '../../../../config/code-connect/icon';

const { renderProp } = figma.helpers.react;
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

// `size` is a numeric union on the component, so these stay numbers to render as size={40}.
const size = instance.getEnum('Size', {
  '40px': 40,
  '32px': 32,
  '28px': 28,
  '24px': 24,
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

// renderProp bakes in its own leading space (' size={40}', ' disabled') and returns '' when a prop is
// absent, so these join with no separator. Only valid because every value here is a primitive — for an
// instance, renderProp returns ResultSection[], which must be interpolated rather than joined.
const props = [
  renderProp('variant', variant),
  renderProp('size', size),
  renderProp('color', color),
  renderProp('prefixIcon', prefixIcon),
  renderProp('postfixIcon', postfixIcon),
  renderProp('inverted', inverted),
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
  example: figma.code`${badgeNoteOpen}<Button${props}>${label}</Button>${badgeNoteClose}`,
  imports: ["import { Button } from '@momentum-design/components/dist/react';"],
  id: 'button-pill',
  metadata: { nestable: true },
};
