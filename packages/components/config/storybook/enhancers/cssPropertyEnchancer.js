export const cssPropertyEnhancer = context => {
  const inferred = context?.argTypes || context?.parameters?.argTypes || {};
  Object.keys(inferred).forEach(key => {
    if (inferred[key].name.startsWith(`--${context.component}`)) {
      inferred[key] = {
        ...inferred[key],
        control: {
          type: 'text',
        },
      };
    }
  });
  return inferred;
};
