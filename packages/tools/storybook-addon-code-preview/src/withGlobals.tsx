import { useEffect, useGlobals, useState } from "storybook/preview-api";
import type { Renderer, StoryContext, PartialStoryFn as StoryFunction } from "storybook/internal/types";
import React from 'react';
import { KEY } from "./constants";
import { CodePreviewPanel } from "./components/CodePreviewPanel";

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const codePreviewAddon = globals[KEY];

  const isActive = !!globals[KEY];
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  const [showPanel, setShowPanel] = useState(isActive);

  useEffect(() => {
    if(isInDocs) {
        setShowPanel(false);
    } else {
      if(isActive) {
        setShowPanel(true);
      } else {
        setShowPanel(false);
      }
    }
  }, [codePreviewAddon, isActive, isInDocs]); 

  return <>{StoryFn()}{showPanel && <CodePreviewPanel />}</>;
};