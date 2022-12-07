import { ACTIONS } from '../../shared/action-constants';

const requestSettingsFromStorage = (parent: Window) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.GET_SETTINGS } }, '*');
};

const saveSettingsToStorage = (parent: Window, settings: any) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.SET_SETTINGS, settings } }, '*');
};

const exportData = (parent: Window, settings: any) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.EXPORT, settings } }, '*');
};

const restoreSettings = (parent: Window) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.RESTORE_SETTINGS } }, '*');
};

export { requestSettingsFromStorage, saveSettingsToStorage, exportData, restoreSettings };
