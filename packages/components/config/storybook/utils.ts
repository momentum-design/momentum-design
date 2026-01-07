import type { TemplateResult } from 'lit';

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
 * To add description to storybook.
 *
 * @param storyDescription - Description to add to storybook
 * @param onlyStoryDescription - Boolean value for story description only, so that other parameters will not be overwritten.
 * @returns either:
 *  - if onlyStoryDescription is true, then we return only the story description.
 *  - else we will return the parameter story description.
 */
const describeStory = (storyDescription: TemplateResult | string, onlyStoryDescription?: boolean) => {
  const docs = {
    docs: {
      description: {
        story: storyDescription,
      },
    },
  };
  return onlyStoryDescription ? docs : { parameters: { ...docs } };
};

/**
 * Returns an object to hide all controls in Storybook.
 * This will hide all controls for the specified story,
 * to globally hide all interactive controls.
 *
 * @param onlyControls - Boolean value for controls only, so that other parameters will not be overwritten.
 * @returns either:
 *  - if onlyControls is true, then we disable only the controls by returning only controls disable to true.
 *  - else we will return the parameter controls.
 */
const hideAllControls = (onlyControls?: boolean) => {
  const controls = {
    controls: {
      disable: true,
    },
  };
  return onlyControls
    ? controls
    : {
        parameters: {
          ...controls,
        },
      };
};

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

export { disableControls, describeStory, hideControls, hideAllControls, readOnlyControls };
