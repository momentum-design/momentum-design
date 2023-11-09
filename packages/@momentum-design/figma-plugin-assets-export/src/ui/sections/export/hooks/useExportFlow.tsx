/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { exportData, prCreated } from '../../../utils/plugin';
import type { AssetSetting, GitSetting, Mode, InputSetting, AssetChunks } from '../../../../shared/types';
import type { ExportStatus } from '../../../types';
import Github from '../../../models/github';

type Props = {
  assetSetting?: AssetSetting
  exportStatus: ExportStatus;
  setExportStatus: React.Dispatch<React.SetStateAction<ExportStatus>>;
  gitConfig?: GitSetting;
  mode?: Mode,
  inputConfig?: InputSetting;
  assetChunks?: AssetChunks;
};

/**
 * Hook managing the export flow, from starting to complete
 * @param assetSetting - selected settings object, sent to the plugin once the export starts
 * @param setExportStatus - setExportStatus dispatch, which will set the export status based on callbacks
 * @returns several export properties and callbacks necessary for the flow
 */
const useExportFlow = ({
  assetSetting,
  setExportStatus,
  exportStatus,
  gitConfig,
  mode,
  inputConfig,
  assetChunks,
}: Props) => {
  const [exportError, setExportError] = useState<Error>();
  const [exportMeta, setExportMeta] = useState<any>();
  const githubRef = React.useRef<Github>();

  useEffect(() => {
    if (gitConfig) {
      githubRef.current = new Github(gitConfig, mode, inputConfig);
    }
  }, [gitConfig, mode, inputConfig]);

  const onExportComplete = (response: any) => {
    setExportStatus('Complete');
    prCreated(parent, response);
    setExportMeta(response);
  };

  const onExportFailure = (e: any) => {
    setExportStatus('Failure');
    setExportError(e);
  };

  const onExportStart = () => {
    if (assetSetting) {
      setExportMeta(null);
      setExportError(undefined);
      setExportStatus('Clicked');
      exportData(parent, assetSetting);
    }
  };

  useEffect(() => {
    if (exportStatus === 'Calculating Changes In Progress' && githubRef.current) {
      githubRef.current.generateChanges(assetChunks).then((changes) => {
        setExportStatus('Exporting to Github In Progress');
        githubRef.current?.pullRequest(changes)
          .then((response) => {
            if (!response) {
              onExportFailure(
                new Error(
                  `No response after creating PR. 
                Likely no changes to commit, which is not creating a PR.`,
                ),
              );
              return;
            }
            onExportComplete(response);
          })
          .catch((e) => {
            onExportFailure(e);
          });
      })
        .catch((e) => {
          onExportFailure(e);
        });
    }
  }, [exportStatus]);

  return { exportError, exportMeta, onExportStart };
};

export { useExportFlow };
