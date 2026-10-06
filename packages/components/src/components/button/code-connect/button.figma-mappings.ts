// Figma-to-code mappings shared by the four Button component sets (Pill, Icon, Selectable/Pill,
// Selectable/Icon). The Figma keys are the design vocabulary; the values come from
// button.constants.ts, so a renamed or removed constant fails `yarn components analyze:syntax`
// rather than silently publishing a snippet the component no longer accepts.
//
// Matches `**/*.figma*`, so src/tsconfig.json excludes it from the published dist build.
import type { InstanceHandle } from 'figma';

import { iconName } from '../../../../config/code-connect/icon';
import { BUTTON_COLORS, BUTTON_VARIANTS, ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from '../button.constants';

// Numbers, not strings: React renders `size={40}` and `attribute()` renders `size="40"` from the same
// value, so both labels read one map.
const PILL_SIZES = {
  '40px': PILL_BUTTON_SIZES[40],
  '32px': PILL_BUTTON_SIZES[32],
  '28px': PILL_BUTTON_SIZES[28],
  '24px': PILL_BUTTON_SIZES[24],
} as const;

// Both icon sets offer these; only the plain Icon set also offers 20px.
const COMMON_ICON_SIZES = {
  '64px': ICON_BUTTON_SIZES[64],
  '52px': ICON_BUTTON_SIZES[52],
  ...PILL_SIZES,
} as const;

const BADGE_NOTE = 'badge property is not supported in code';

/** Figma folds the inverted colour scheme into Type; the component splits it into variant + inverted. */
export const readVariant = (instance: InstanceHandle) =>
  instance.getEnum('Type', {
    Primary: BUTTON_VARIANTS.PRIMARY,
    Secondary: BUTTON_VARIANTS.SECONDARY,
    Tertiary: BUTTON_VARIANTS.TERTIARY,
    'Inverted Primary': BUTTON_VARIANTS.PRIMARY,
    'Inverted Secondary': BUTTON_VARIANTS.SECONDARY,
    'Inverted Tertiary': BUTTON_VARIANTS.TERTIARY,
  });

export const readInverted = (instance: InstanceHandle) =>
  instance.getEnum('Type', {
    Primary: undefined,
    Secondary: undefined,
    Tertiary: undefined,
    'Inverted Primary': true,
    'Inverted Secondary': true,
    'Inverted Tertiary': true,
  });

/** The selectable sets offer no Primary and no Color, so neither is emitted — the defaults apply. */
export const readSelectableVariant = (instance: InstanceHandle) =>
  instance.getEnum('Type', {
    Secondary: BUTTON_VARIANTS.SECONDARY,
    Tertiary: BUTTON_VARIANTS.TERTIARY,
  });

export const readColor = (instance: InstanceHandle) =>
  instance.getEnum('Color', {
    Default: BUTTON_COLORS.DEFAULT,
    Positive: BUTTON_COLORS.POSITIVE,
    Negative: BUTTON_COLORS.NEGATIVE,
    Accent: BUTTON_COLORS.ACCENT,
    Promotional: BUTTON_COLORS.PROMOTIONAL,
    Overlay: BUTTON_COLORS.OVERLAY,
  });

export const readPillSize = (instance: InstanceHandle) => instance.getEnum('Size', PILL_SIZES);

export const readIconSize = (instance: InstanceHandle) =>
  instance.getEnum('Size', { ...COMMON_ICON_SIZES, '20px': ICON_BUTTON_SIZES[20] });

/** The selectable icon set stops at 24px; only the plain icon set offers 20px. */
export const readSelectableIconSize = (instance: InstanceHandle) => instance.getEnum('Size', COMMON_ICON_SIZES);

/**
 * `active` is what makes the selectable sets selectable. The component swaps the icon to its filled
 * variant on its own while active, so the snippet keeps the icon name the design shows.
 */
export const readActive = (instance: InstanceHandle) => instance.getEnum('Selected', { True: true, False: undefined });

/** Rest, Hover, Pressed and Focused are rendered states with no API surface; only Disabled is a prop. */
export const readDisabled = (instance: InstanceHandle) =>
  instance.getEnum('State', {
    Rest: undefined,
    Hover: undefined,
    Pressed: undefined,
    Focused: undefined,
    Disabled: true,
  });

export const readLabel = (instance: InstanceHandle) => {
  const layer = instance.findText('label');

  return layer.type === 'TEXT' ? layer.textContent : '';
};

/**
 * Both icon layers are named "placeholder", so findInstance cannot tell them apart. The instance-swap
 * properties address them unambiguously, and the BOOLEAN beside each one gates whether it renders.
 *
 * The selectable sets declare a second swap per side whose key has a double space (`Leading Icon  Type`)
 * that Figma normalises to the same name, leaving it shadowed and unaddressable — looking it up errors.
 * The reachable one returns the same value in both Selected states, which is what the component wants.
 */
export const readLeadingIcon = (instance: InstanceHandle) =>
  instance.getBoolean('Leading Icon', {
    true: iconName(instance.getInstanceSwap('Leading Icon Type')),
    false: undefined,
  });

export const readTrailingIcon = (instance: InstanceHandle) =>
  instance.getBoolean('Trailing Icon', {
    true: iconName(instance.getInstanceSwap('Trailing Icon Type')),
    false: undefined,
  });

/** The icon sets are not gated by a BOOLEAN — an icon button always renders one. */
export const readIcon = (instance: InstanceHandle) => iconName(instance.getInstanceSwap('Icon Type'));

/** mdc-button has no badge attribute or slot, so say so rather than render a button that drops it. */
export const readBadgeNote = (instance: InstanceHandle) =>
  instance.getBoolean('Badge', { true: `<!-- ${BADGE_NOTE} -->\n`, false: '' });

/**
 * The fragment is load-bearing: a bare comment line before the JSX makes Prettier emit `;<Button`, and
 * neither `//` nor the `;` is a comment once the snippet is pasted into JSX children.
 */
export const readBadgeNoteJsx = (instance: InstanceHandle) => ({
  open: instance.getBoolean('Badge', { true: `<>\n{/* ${BADGE_NOTE} */}\n`, false: '' }),
  close: instance.getBoolean('Badge', { true: '\n</>', false: '' }),
});
