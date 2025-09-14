import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, type API } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { ADDON_ID, KEY, TOOL_ID } from "../constants";
import { TypeIcon } from "@storybook/icons";
import { Global, styled } from 'storybook/theming';
import CodePreviewPanel from "./CodePreviewPanel";
import { createPortal } from "react-dom";
import { SNIPPET_RENDERED } from "storybook/internal/docs-tools";

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
}));

export const Tool = memo(function MyAddonSelector({ api }: { api: API }) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();
  const [codeSource, setCodeSource] = React.useState<string>('');

  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];

  useEffect(() => {
      return api.on(SNIPPET_RENDERED, (args: any) => {
          setCodeSource(args.source);
      });
  }, [api]);

  const toggle = useCallback(() => {
    updateGlobals({
      [KEY]: !isActive,
    });
  }, [isActive]);

  useEffect(() => {
    // Ensure the addon panel is at the bottom when the tool is active
    api.togglePanelPosition('bottom');
    // Register a shortcut to toggle the addon
    api.setAddonShortcut(ADDON_ID, {
      label: "Toggle Code [C]",
      defaultShortcut: ["C"],
      actionName: "code",
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
        title="Toggle Code Preview"
        onClick={toggle}
      >
        <TypeIcon />
        <IconButtonLabel>{isActive ? 'Hide Code' : 'Show Code'}</IconButtonLabel>
      </IconButton>

      {/* styling override for 50/50 split in Canvas: */}
      <Global styles={{
          ['#storybook-preview-wrapper']: {
            display: isActive ? 'flex !important' : 'grid',
            placeItems: isActive ? 'unset !important' : 'center',
          },
          ['iframe']: { 
            width: isActive ? '50% !important' : '100%',
           },
        }}></Global>
      {/* Portaling the CodePreviewPanel into Canvas:  */}
      {isActive && createPortal(<CodePreviewPanel codeSource={codeSource} channel={api.getChannel()} />, document.querySelector('#storybook-preview-wrapper')!)}
    </>
  );
});
