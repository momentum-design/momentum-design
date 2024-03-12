import { useState } from 'react';
import type { AssetChunks, Settings } from '../../shared/types';
import type { ExportStatus, StorageStatus } from '../types';

const useStateHandlers = () => {
  const [settings, setSettings] = useState<Settings>();
  const [assetChunks, setAssetChunks] = useState<AssetChunks>([[]]);
  const [exportStatus, setExportStatus] = useState<ExportStatus>('');
  const [storageStatus, setStorageStatus] = useState<StorageStatus>('');
  const [gTagAsset, setGTagAsset] = useState<any[]>([]);

  return {
    settings,
    setSettings,
    assetChunks,
    setAssetChunks,
    exportStatus,
    setExportStatus,
    storageStatus,
    setStorageStatus,
    gTagAsset,
    setGTagAsset,
  };
};

export { useStateHandlers };
