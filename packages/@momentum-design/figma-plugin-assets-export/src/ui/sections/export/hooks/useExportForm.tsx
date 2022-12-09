/* eslint-disable no-restricted-globals */
import React, { useState, useMemo } from 'react';
import type { AssetSetting, ExportAuth, GitSetting } from '../../../../shared/types';

/**
 * Hook, managing the export form, including
 * changes of the input fields `title`, `branch` & `message`
 * @param selectedAssetSetting - current asset setting
 * @returns object, including the current title, branch, message, gitconfig and callbacks
 */
const useExportForm = (auth: ExportAuth, selectedAssetSetting?: AssetSetting) => {
  const [title, setTitle] = useState(`Asset Automation ${new Date().toISOString()}`);
  const [branch, setBranch] = useState(`automation-${new Date().toISOString().replace(/\.|:/g, '-')}`);
  const [message, setMessage] = useState(`feat(assets): Asset Automation ${new Date().toISOString()}`);

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const handleBranchChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setBranch(event.currentTarget.value);
  };

  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  const gitConfig = useMemo((): GitSetting | undefined => {
    const gitPartOfSettings = selectedAssetSetting?.output.git;
    if (!gitPartOfSettings) {
      return undefined;
    }

    return {
      ...gitPartOfSettings,
      githubPersonalToken: auth.githubPersonalToken,
      prTitle: title,
      prMessage: message,
      gitBranch: branch,
    };
  }, [selectedAssetSetting, title, branch, message]);

  return { title, branch, message, gitConfig, handleTitleChange, handleBranchChange, handleMessageChange };
};

export { useExportForm };
