import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, type API } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { SearchIcon } from "@storybook/icons";

import { ADDON_ID, KEY, TOOL_ID } from "../constants";
import { InspectorLegend } from "./InspectorLegend";

/**
 * Toolbar button that turns the component inspector overlay on and off.
 *
 * While active, hold `Shift` (slots) or `Meta` (shadow parts) inside the story
 * to reveal the overlay. Turning it off tears the inspector down completely.
 */
export const Tool = memo(function ComponentInspectorTool({ api }: { api: API }) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();

  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];

  const toggle = useCallback(() => {
    updateGlobals({ [KEY]: !isActive });
  }, [isActive, updateGlobals]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: "Toggle Component Inspector [I]",
      defaultShortcut: ["I"],
      actionName: "inspect",
      showInMenu: true,
      action: toggle,
    });
  }, [toggle, api]);

  return (
    <>
      <IconButton
        key={TOOL_ID}
        active={isActive}
        disabled={isLocked}
        title="Toggle Component Inspector"
        onClick={toggle}
      >
        <SearchIcon />
        {isActive ? "Hide Inspector" : "Show Inspector"}
      </IconButton>
      {isActive && <InspectorLegend />}
    </>
  );
});
