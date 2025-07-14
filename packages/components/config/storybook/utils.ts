/**
 * To automatically disable controls in storybook
 * @param keys - Array of keys to disable
 * @returns Object which can be destructured in argTypes
 */
const disableControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach(key => {
    objectReturnValue[key] = {
      control: false,
    };
  });
  return objectReturnValue;
};

/**
 * Returns an object to hide all controls in Storybook.
 * This will hide all controls for the specified story,
 * to globally hide all interactive controls.
 */
const hideAllControls = () => ({
  parameters: {
    controls: {
      disable: true,
    },
  },
});

/**
 * To automatically hide controls in storybook
 * @param keys - Array of keys to hide
 * @returns Object which can be destructured in argTypes
 */
const hideControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach(key => {
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
  keys.forEach(key => {
    objectReturnValue[key] = {
      table: { readonly: true },
    };
  });
  return objectReturnValue;
};

/**
 * To automatically set text controls in storybook
 * @param keys - Array of keys to set as text controls
 * @returns Object which can be destructured in argTypes
 */
const textControls = (keys: Array<string>) => {
  const objectReturnValue: Record<string, any> = {};
  keys.forEach(key => {
    objectReturnValue[key] = {
      control: {
        type: 'text',
      },
    };
  });
  return objectReturnValue;
};

export { disableControls, hideControls, hideAllControls, readOnlyControls, textControls };
