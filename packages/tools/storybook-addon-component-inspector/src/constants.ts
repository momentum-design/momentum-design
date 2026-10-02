export const ADDON_ID = "component-inspector";
export const TOOL_ID = `${ADDON_ID}/tool`;
export const PARAM_KEY = "componentInspector";

/** Storybook global that stores whether the inspector is turned on. */
export const KEY = "component-inspector";

/** Channel events used to stream the legend from the preview to the manager. */
export const EVENTS = {
  UPDATE: `${ADDON_ID}/update`,
  CLEAR: `${ADDON_ID}/clear`,
  REQUEST: `${ADDON_ID}/request`,
};
