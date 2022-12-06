/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Document from './models/document';
import type { Config } from './types';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, { themeColors: true, height: 500, width: 350 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  // used to distinguish between different post message types, sent from UI:
  if (msg.type === 'export') {
    // hard coded config, should be replaced by settings in UI:
    const config: Config = {
      mapPagesToFolder: [
        { page: '✅ Alerts', folder: 'core' },
        // { page: 'Colored Icons', folder: 'colored' },
        // { page: 'Brand Icons', folder: 'brand' },
      ],
      fileName: {
        parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL', 'WEIGHT'],
        separator: '-',
      },
      exportSettings: {
        format: 'SVG',
        contentsOnly: true,
        useAbsoluteBounds: false,
      },
    };
    const document = new Document(figma.root, config);

    const assets = await document.getAssetsFromPages();
    console.log(assets);
    figma.notify('Exported successfully!');
  }
};
