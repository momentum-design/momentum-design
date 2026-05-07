import { getCustomElements } from '@storybook/web-components';

/**
 * Enhances the argTypes by injecting info rows for CSS Custom States declared via `@cssstate` in the component's JSDoc.
 * @param context - The story context
 * @returns The enhanced argTypes
 */
export const cssCustomStateEnhancer = context => {
  const inferred = context?.argTypes ?? {};

  const tagName = context?.component;
  if (!tagName) return inferred;

  const manifest = context?.parameters?.customElementsManifest ?? getCustomElements();
  if (!manifest?.modules) return inferred;

  const declaration = manifest.modules
    .flatMap(mod => mod.declarations ?? [])
    .find(dec => dec.tagName === tagName && Array.isArray(dec.cssCustomStates) && dec.cssCustomStates.length);

  if (!declaration) return inferred;

  for (const state of declaration.cssCustomStates) {
    const key = `cssstate-${state.name}`;
    inferred[key] = {
      name: `":state(${state.name})"`,
      description: state.description || `Exposed when the element is in the "${state.name}" state.`,
      control: false,
      table: {
        category: 'CSS Custom States',
        type: { summary: ':state()' },
      },
    };
  }

  return inferred;
};

