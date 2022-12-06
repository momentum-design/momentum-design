/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Document from './models/document';

figma.showUI(__html__, { themeColors: true, height: 500, width: 500 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // used to distinguish between different post message types, sent from UI:
  if (msg.type === 'export') {
    // hard coded allowList, should be replaced by settings in UI:
    const allowList = ['christoph', 'test'];
    const document = new Document(figma.root, allowList);

    // just to test that it works as expected:
    figma.notify(document.pages[0].data.toString());
  }
};
