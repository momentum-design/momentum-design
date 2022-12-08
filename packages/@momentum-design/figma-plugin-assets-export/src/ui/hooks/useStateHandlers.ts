import { useState } from 'react';
import { AssetChunks } from '../../shared/types';

const useStateHandlers = () => {
  const [settings, setSettings] = useState<any>();
  const [assets, setAssets] = useState<AssetChunks>([[]]);
  const [exporting, setExporting] = useState<'clicked' | 'inprogress' | 'failure' | 'complete' | ''>('');
  const [storage, setStorage] = useState<'inprogress' | 'failure' | 'complete' | ''>('');

  return { settings, setSettings, assets, setAssets, exporting, setExporting, storage, setStorage };
};

export { useStateHandlers };
