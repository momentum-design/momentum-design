import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, type API } from "storybook/manager-api";
import { IconButton, TooltipLinkList, WithTooltip } from "storybook/internal/components";
import { SearchIcon } from "@storybook/icons";

import { ADDON_ID, KEY, MODE_OPTIONS, TOOL_ID } from "../constants";
import type { InspectorMode } from "../types";
import { InspectorLegend } from "./InspectorLegend";

const MODE_ORDER: InspectorMode[] = MODE_OPTIONS.map((option) => option.id);

/**
 * Toolbar dropdown that selects the component inspector mode: off, slot
 * inspector or CSS part inspector. While a mode other than "off" is selected,
 * simply hovering any matching element in the story reveals its slot / part
 * overlay — no modifier key is required.
 */
export const Tool = memo(function ComponentInspectorTool({ api }: { api: API }) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();

  const isLocked = KEY in storyGlobals;
  const mode = (globals[KEY] as InspectorMode | undefined) ?? "off";

  const setMode = useCallback(
    (next: InspectorMode) => {
      updateGlobals({ [KEY]: next });
    },
    [updateGlobals],
  );

  const cycleMode = useCallback(() => {
    const nextIndex = (MODE_ORDER.indexOf(mode) + 1) % MODE_ORDER.length;
    setMode(MODE_ORDER[nextIndex]!);
  }, [mode, setMode]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: "Cycle Component Inspector mode [I]",
      defaultShortcut: ["I"],
      actionName: "inspect",
      showInMenu: true,
      action: cycleMode,
    });
  }, [cycleMode, api]);

  const activeOption = MODE_OPTIONS.find((option) => option.id === mode) ?? MODE_OPTIONS[0]!;

  return (
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnOutsideClick
        tooltip={({ onHide }) => (
          <TooltipLinkList
            links={MODE_OPTIONS.map((option) => ({
              id: option.id,
              title: option.title,
              active: option.id === mode,
              onClick: () => {
                setMode(option.id);
                onHide();
              },
            }))}
          />
        )}
      >
        <IconButton key={TOOL_ID} active={mode !== "off"} disabled={isLocked} title="Component Inspector">
          <SearchIcon />
          {activeOption.title}
        </IconButton>
      </WithTooltip>
      {mode !== "off" && <InspectorLegend />}
    </>
  );
});
