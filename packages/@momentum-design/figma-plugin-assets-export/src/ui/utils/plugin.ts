import { ACTIONS } from '../../shared/action-constants';
import type { AssetSetting, Settings } from '../../shared/types';

const requestSettingsFromStorage = (parent: Window) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.GET_SETTINGS } }, '*');
};

const saveSettingsToStorage = (parent: Window, settings: Settings) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.SET_SETTINGS, settings } }, '*');
};

const exportData = (parent: Window, assetSetting: AssetSetting) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.EXPORT, assetSetting } }, '*');
};

const prCreated = (parent: Window, pullRequest: any) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.PR_CREATED, pullRequest } }, '*');
};

export { requestSettingsFromStorage, saveSettingsToStorage, exportData, prCreated };
