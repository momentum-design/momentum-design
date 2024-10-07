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

export { disableControls };
