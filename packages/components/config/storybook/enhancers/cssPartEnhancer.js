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
