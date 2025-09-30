/**
 * Enhances the argTypes by adding text controls for CSS properties
 * @param context - The story context
 * @returns The enhanced argTypes
 */
export const cssPropertyEnhancer = context => {
  const inferred = context?.argTypes || context?.parameters?.argTypes || {};
  Object.keys(inferred).forEach(key => {
    if (inferred[key].name.startsWith('--mdc-')) {
      inferred[key] = {
        ...inferred[key],
        control: {
          type: 'text', // text controls for CSS properties
        },
      };
    }
  });
  return inferred;
};
