/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { Button } from '../../components';
import type { AssetChunks, AssetSetting, GitSetting } from '../../../shared/types';
import type { ExportStatus } from '../../types';

import Github from '../../models/github';

interface Props {
  exportStatus: ExportStatus;
  selectedAssetSetting?: AssetSetting;
  assetChunks?: AssetChunks;
  gitConfig?: GitSetting;
  handleClick: () => void;
  onExportComplete: (response: any) => void,
  onExportFailure: (error: any) => void;
}

function ExportButton({
  assetChunks,
  exportStatus,
  gitConfig,
  onExportComplete,
  onExportFailure,
  handleClick,
}: Props) {
  useEffect(() => {
    if (exportStatus === 'inprogress' && gitConfig) {
      const github = new Github(gitConfig);
      if (github) {
        github
          .pullRequest(assetChunks)
          .then((response) => {
            onExportComplete(response);
          })
          .catch((e) => {
            onExportFailure(e);
          });
      }
    }
  }, [exportStatus]);

  return (
    <Button
      disabled={exportStatus === 'inprogress' || exportStatus === 'clicked' || gitConfig === undefined}
      onClick={handleClick}
    >
      Export
    </Button>
  );
}

export default ExportButton;
