import React from "react";
import { addons, types } from "storybook/manager-api";

import { Tool } from "./components/Tool";
import { ADDON_ID, TOOL_ID } from "./constants";

// Register the addon and its toolbar mode dropdown.
addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Component Inspector",
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Tool api={api} />,
  });
});
