/**
 * To automatically disable controls in storybook
 * @param keys - Array of keys to disable
 * @returns Object which can be destructured in argTypes
 */
const disableControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach((key) => {
    objectReturnValue[key] = {
      control: false,
    };
  });
  return objectReturnValue;
};

/**
 * To automatically hide controls in storybook
 * @param keys - Array of keys to hide
 * @returns Object which can be destructured in argTypes
 */
const hideControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach((key) => {
    objectReturnValue[key] = {
      table: { disable: true },
    };
  });
  return objectReturnValue;
};

/**
 * To make the controls readonly
 * @param keys - Array of keys to set as readonly
 * @returns Object which can be destructured in argTypes
 */
const readOnlyControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach((key) => {
    objectReturnValue[key] = {
      table: { readonly: true },
    };
  });
  return objectReturnValue;
};

export { disableControls, hideControls, readOnlyControls };
