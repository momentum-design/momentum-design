import { useEffect } from 'react';
import { Asset } from '../../shared/types';
import { requestSettingsFromStorage } from '../utils/plugin';

const useWindowMessage = (setSettings: any, setAssets: any, setExporting: any, setStorage: any) => {
  useEffect(() => {
    window.onmessage = (e: {
      data: {
        pluginMessage: {
          type: string;
          data: Asset[] | any;
        };
      };
    }) => {
      if (e.data.pluginMessage?.type === 'settings') {
        setSettings(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === 'assets') {
        setAssets(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === 'storage') {
        setStorage(e.data.pluginMessage.data);
      } else if (e.data.pluginMessage?.type === 'export') {
        setExporting('inprogress');
      }
    };
    // eslint-disable-next-line no-restricted-globals
    requestSettingsFromStorage(parent);
  }, []);
};

export { useWindowMessage };
