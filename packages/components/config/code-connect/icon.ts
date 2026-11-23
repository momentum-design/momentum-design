// Shared helper for Web Components and React Code Connect templates that map a Figma icon onto an
// `IconNames` value. Lives outside src/ so it is never compiled into the published dist bundle.
import type { ErrorHandle, InstanceHandle } from 'figma';

// Every Momentum icon asset is named `<base>-<weight>`. Figma splits that in two: the base is the
// swapped instance's layer name, the weight is a variant on the swapped instance itself.
const ICON_WEIGHTS = {
  Bold: 'bold',
  Regular: 'regular',
  Light: 'light',
  Filled: 'filled',
} as const;

/**
 * Resolves the `IconNames` value for an instance-swap icon property, or undefined when the property
 * is unset or the swapped instance exposes no recognised `Weight` variant.
 */
export const iconName = (handle: InstanceHandle | ErrorHandle | undefined): string | undefined => {
  if (handle?.type !== 'INSTANCE') {
    return undefined;
  }

  const weight = handle.getEnum('Weight', ICON_WEIGHTS);

  return weight === undefined ? undefined : `${handle.name}-${weight}`;
};
