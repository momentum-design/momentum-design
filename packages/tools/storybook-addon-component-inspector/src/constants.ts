export const ADDON_ID = "component-inspector";
export const TOOL_ID = `${ADDON_ID}/tool`;
export const PARAM_KEY = "componentInspector";

/** Storybook global that stores the active inspector mode. */
export const KEY = "component-inspector";

/** Channel events used to stream the legend from the preview to the manager. */
export const EVENTS = {
  UPDATE: `${ADDON_ID}/update`,
  CLEAR: `${ADDON_ID}/clear`,
  REQUEST: `${ADDON_ID}/request`,
};

/** Options offered by the toolbar dropdown, in display order. */
export const MODE_OPTIONS: { id: "off" | "slots" | "parts"; title: string }[] = [
  { id: "off", title: "Inspector Off" },
  { id: "slots", title: "Slot Inspector" },
  { id: "parts", title: "CSS Part Inspector" },
];
