/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { exportData, prCreated } from '../../../utils/plugin';
import type { AssetSetting } from '../../../../shared/types';
import type { ExportStatus } from '../../../types';

/**
 * Hook managing the export flow, from starting to complete
 * @param assetSetting - selected settings object, sent to the plugin once the export starts
 * @param setExportStatus - setExportStatus dispatch, which will set the export status based on callbacks
 * @returns several export properties and callbacks necessary for the flow
 */
const useExportFlow = (
  setExportStatus: React.Dispatch<React.SetStateAction<ExportStatus>>,
  assetSetting?: AssetSetting,
) => {
  const [exportError, setExportError] = useState<Error>();
  const [exportMeta, setExportMeta] = useState<any>();

  const onExportComplete = (response: any) => {
    setExportStatus('complete');
    prCreated(parent, response);
    setExportMeta(response);
  };

  const onExportFailure = (e: any) => {
    setExportStatus('failure');
    setExportError(e);
  };

  const onExportStart = () => {
    if (assetSetting) {
      setExportMeta(null);
      setExportError(undefined);
      setExportStatus('clicked');
      exportData(parent, assetSetting);
    }
  };

  return { exportError, exportMeta, onExportStart, onExportComplete, onExportFailure };
};

export { useExportFlow };
