import React, { memo, useCallback, useMemo } from "react";
import { useStorybookState, type API } from "storybook/manager-api";
import { IconButton } from "storybook/internal/components";
import { GithubIcon } from "@storybook/icons";
import { GITHUB_TOOL_ID } from "../constants";

export const GitHubTool = memo(function GitHubToolSelector({ api }: { api: API }) {
  const state = useStorybookState();
  
  // Get the current story information
  const currentStory = state.storyId && state.index ? state.index[state.storyId] : null;
  
  // Extract component name from title (shared logic)
  const componentName = useMemo(() => {
    if (!currentStory || !('title' in currentStory)) return '';
    const title = currentStory.title || '';
    return title.includes('/') 
      ? title.split('/').pop() || ''
      : title.toLowerCase().replace(/\s+/g, '-');
  }, [currentStory]);
  
  // Generate dynamic GitHub URL based on the current story
  const githubUrl = useMemo(() => {
    if (!currentStory) return null;
    
    const baseRepoUrl = 'https://github.com/momentum-design/momentum-design';
    
    // Handle docs (MDX files)
    if (currentStory.type === 'docs') {
      if ('importPath' in currentStory && currentStory.importPath?.endsWith('.mdx')) {
        const mdxPath = currentStory.importPath.replace('./src/', 'packages/components/src/');
        return `${baseRepoUrl}/blob/main/${mdxPath}`;
      }
      
      // For docs pages generated from stories, fall back to the component directory
      if (componentName) {
        return `${baseRepoUrl}/tree/main/packages/components/src/components/${componentName}`;
      }
      
      return `${baseRepoUrl}/tree/main/packages/components/src/docs`;
    }
    
    // Handle stories
    if (currentStory.type === 'story' && componentName) {
      return `${baseRepoUrl}/tree/main/packages/components/src/components/${componentName}`;
    }
    
    return `${baseRepoUrl}/tree/main/packages/components`;
  }, [currentStory, componentName]);
  
  const openGitHub = useCallback(() => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  }, [githubUrl]);

  const getButtonTitle = useCallback(() => {
    if (!currentStory) return 'View source on GitHub';
    
    if (currentStory.type === 'docs' && 'importPath' in currentStory && currentStory.importPath?.endsWith('.mdx')) {
      const fileName = currentStory.importPath.split('/').pop()?.replace('.mdx', '') || 'documentation';
      return `View ${fileName} source on GitHub`;
    }
    
    return `View ${componentName || 'component'} source on GitHub`;
  }, [currentStory, componentName]);

  if (!githubUrl || !currentStory) {
    return null;
  }

  return (
    <IconButton
      key={GITHUB_TOOL_ID}
      title={getButtonTitle()}
      onClick={openGitHub}
      style={{ marginLeft: '8px' }}
    >
      <GithubIcon />
    </IconButton>
  );
});