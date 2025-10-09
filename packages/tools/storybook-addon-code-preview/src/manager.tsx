import React from "react";
import { addons, types } from "storybook/manager-api";

import { Tool } from "./components/Tool";
import { ADDON_ID, TOOL_ID } from "./constants";

addons.setConfig({
  panelPosition: 'bottom',
})

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, (api) => {
  // Register a tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Code Preview",
    match: ({ viewMode }) =>
      !!((viewMode && viewMode.match(/^(story)$/))),
    render: () => <Tool api={api} />,
  });
});

