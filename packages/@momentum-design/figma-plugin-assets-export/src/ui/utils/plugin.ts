import { ACTIONS } from "../../shared/action-constants";
import type { AssetSetting, Settings } from "../../shared/types";

const requestSettingsFromStorage = (parent: Window) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.GET_SETTINGS } }, "*");
};

const saveSettingsToStorage = (parent: Window, settings: Settings) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.SET_SETTINGS, settings } }, "*");
};

const exportData = (parent: Window, assetSetting: AssetSetting) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.EXPORT, assetSetting } }, "*");
};

const prCreated = (parent: Window, pullRequest: any) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.PR_CREATED, pullRequest } }, "*");
};

const gTagDetector = (parent: Window, assetSetting: any) => {
  parent.postMessage({ pluginMessage: { type: ACTIONS.G_TAG, assetSetting } }, "*");
};

const linkRedirect = (parent: Window, assetSetting: any, path: string) => {
  const page = path?.split("/")[0] || "",
    nodeName = path?.split("/")[1]?.split(".")[0] || "";
  parent.postMessage({ pluginMessage: { type: ACTIONS.G_TAG_LINK, assetSetting, page, nodeName } }, "*");
};

export { requestSettingsFromStorage, saveSettingsToStorage, exportData, prCreated, gTagDetector, linkRedirect };
