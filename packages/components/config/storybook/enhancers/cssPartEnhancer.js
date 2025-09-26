/**
 * Enhances the argTypes by disabling the controls for CSS shadow part names
 * @param context - The story context
 * @returns The enhanced argTypes
 */
export const cssPartEnhancer = context => {
  const inferred = context?.argTypes || context?.parameters?.argTypes || {};
  Object.keys(inferred).forEach(key => {
    if (inferred[key].name.startsWith('Shadow Part Name: ')) {
      inferred[key] = {
        ...inferred[key],
        control: false, // disables the control
      };
    }
  });
  return inferred;
};
