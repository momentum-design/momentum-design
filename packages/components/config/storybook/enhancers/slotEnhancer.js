/**
 * Enhances the argTypes by disabling the controls for slot names
 * @param context - The story context
 * @returns The enhanced argTypes
 */
export const slotEnhancer = context => {
  const inferred = context?.argTypes || context?.parameters?.argTypes || {};
  Object.keys(inferred).forEach(key => {
    if (inferred[key].name === 'default' || inferred[key].name.startsWith('Slot Name: ')) {
      inferred[key] = {
        ...inferred[key],
        control: false, // disables the control
      };
    }
  });
  return inferred;
};
