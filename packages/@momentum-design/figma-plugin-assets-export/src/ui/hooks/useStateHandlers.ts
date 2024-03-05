import { useState } from 'react';
import type { AssetChunks, Settings } from '../../shared/types';
import type { ExportStatus, StorageStatus } from '../types';

const useStateHandlers = () => {
  const [settings, setSettings] = useState<Settings>();
  const [assetChunks, setAssetChunks] = useState<AssetChunks>([[]]);
  const [exportStatus, setExportStatus] = useState<ExportStatus>('');
  const [storageStatus, setStorageStatus] = useState<StorageStatus>('');
  const [gTagAsset, setGTagAsset] = useState<any[]>([]);
  const [gTagAssetUpdate, setGTagAssetUpdate] = useState<boolean>(false);

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
    gTagAssetUpdate,
    setGTagAssetUpdate,
  };
};

export { useStateHandlers };
