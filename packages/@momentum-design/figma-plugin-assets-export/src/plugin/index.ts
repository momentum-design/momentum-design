/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { ACTIONS } from '../shared/action-constants';

import Document from './models/document';
import Storage from './models/storage';

const storage = new Storage();

figma.on('run', async () => {
  const settings = await storage.getSettings();
  if (!settings) {
    await storage.setSettings(storage.initialSettings);
  }
});

figma.skipInvisibleInstanceChildren = true;
figma.showUI(__html__, { themeColors: true, height: 550, width: 450 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  // used to distinguish between different post message types, sent from UI:
  if (msg.type === ACTIONS.EXPORT) {
    const document = new Document(figma.root, msg.assetSetting);

    const assetChunks = await document.getAssetChunksFromPages();

    figma.ui.postMessage({ type: 'assets', data: assetChunks }, { origin: '*' });

    figma.ui.postMessage({ type: 'export' }, { origin: '*' });
  }

  if (msg.type === ACTIONS.SET_SETTINGS) {
    figma.ui.postMessage({ type: 'storage', data: 'inprogress' }, { origin: '*' });

    await storage.setSettings(msg.settings);

    figma.ui.postMessage({ type: 'storage', data: 'complete' }, { origin: '*' });
  }

  if (msg.type === ACTIONS.GET_SETTINGS) {
    // get settings from local storage
    const settings = await storage.getSettings();
    // sending settings from storage back to UI:
    figma.ui.postMessage({ type: 'settings', data: settings }, { origin: '*' });
  }

  if (msg.type === ACTIONS.PR_CREATED) {
    figma.notify(`Pull Request: ${msg.pullRequest?.data?.url}`);
  }
};
