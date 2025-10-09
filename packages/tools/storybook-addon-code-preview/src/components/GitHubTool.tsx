import React, { memo, useCallback, useMemo } from "react";
import { useStorybookState, type API } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { GithubIcon } from "@storybook/icons";
import { GITHUB_TOOL_ID } from "../constants";
import { styled } from "storybook/theming";

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
}));

export const GitHubTool = memo(function GitHubToolSelector({ api }: { api: API }) {
  const state = useStorybookState();
  
  // Get the current story information
  const currentStory = state.storyId && state.index ? state.index[state.storyId] : null;

  if (!currentStory) {
    return null;
  }
  
  // Extract component name from story title
  const componentName = useMemo(() => {
    if (!('title' in currentStory)) return '';
    const title = currentStory.title || '';
    return title.includes('/') 
      ? title.split('/').pop() || ''
      : title.toLowerCase().replace(/\s+/g, '-');
  }, [currentStory]);
  
  // Generate GitHub URL for story components
  const githubUrl = useMemo(() => {
    const baseRepoUrl = 'https://github.com/momentum-design/momentum-design';
    
    if (componentName) {
      return `${baseRepoUrl}/tree/main/packages/components/src/components/${componentName}`;
    }
    
    return `${baseRepoUrl}/tree/main/packages/components`;
  }, [componentName]);
  
  const openGitHub = useCallback(() => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  }, [githubUrl]);

  return (
    <IconButton
      key={GITHUB_TOOL_ID}
      title={`View ${componentName || 'component'} source on GitHub`}
      onClick={openGitHub}
    >
      <GithubIcon />
      <IconButtonLabel>View Source</IconButtonLabel>
    </IconButton>
  );
});