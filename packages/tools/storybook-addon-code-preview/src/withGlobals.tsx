import { useGlobals } from "storybook/preview-api";
import { Source, SourceContainer } from '@storybook/addon-docs/blocks';
import type { Renderer, StoryContext, PartialStoryFn as StoryFunction } from "storybook/internal/types";
import React from 'react';
import { KEY } from "./constants";
// import { CodePreviewPanel } from "./components/CodePreviewPanel";

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const isCodePreviewAddonActive = !!globals[KEY];

  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";
  const isActive = isCodePreviewAddonActive && !isInDocs;

  return <>
    {StoryFn()}
    {isActive && (
      <SourceContainer channel={context.channel}>
        <Source></Source>
      </SourceContainer>
    )}
    </>;
};