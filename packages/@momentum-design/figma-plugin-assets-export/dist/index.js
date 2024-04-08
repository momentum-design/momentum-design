"use strict";
(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/shared/action-constants.ts
  var ACTIONS = {
    GET_SETTINGS: "storage_get_settings",
    SET_SETTINGS: "storage_set_settings",
    EXPORT: "export",
    PR_CREATED: "pr_created",
    G_TAG: "tag_detector",
    G_TAG_LINK: "tag_link"
  };

  // src/plugin/constants.ts
  var DOCUMENT = {
    VALID_CHILD_TYPES: ["PAGE"]
  };
  var SEARCH_CRITERIA = ["COMPONENT"];
  var REPLACE_TERMS = {
    COMPONENT_NAME: "COMPONENT_NAME",
    PARENT_NAME: "PARENT_NAME",
    SET_OR_COMPONENT_NAME: "SET_OR_COMPONENT_NAME",
    SF_ALTERNATIVE: "SF_ALTERNATIVE",
    RTL: "RTL",
    WEIGHT: "WEIGHT",
    COLOR: "COLOR",
    STATE: "STATE",
    SIZE: "SIZE",
    THEME: "THEME",
    TYPE: "TYPE",
    ORIENTATION: "ORIENTATION",
    PRODUCT: "PRODUCT"
  };
  var FIGMA_VARIANTS = {
    WEIGHT: "weight",
    COLOR: "color",
    RTL: "right to left",
    SF_ALTERNATIVE: "sf alternative",
    STATE: "state",
    SIZE: "size",
    THEME: "theme",
    TYPE: "type",
    ORIENTATION: "orientation",
    PRODUCT: "product"
  };
  var CONSTANTS = {
    DOCUMENT,
    SEARCH_CRITERIA,
    REPLACE_TERMS,
    FIGMA_VARIANTS
  };

  // src/plugin/utils/object.ts
  var normaliseObject = (object) => {
    if (!object) {
      return {};
    }
    return Object.keys(object).reduce((acc, key) => {
      const lowerCaseKey = key.toLowerCase();
      const lowerCaseValue = object[key].toLowerCase();
      acc[lowerCaseKey] = lowerCaseValue;
      return acc;
    }, {});
  };

  // src/plugin/models/component.ts
  var Component = class {
    constructor(node, destination, assetSetting) {
      this.node = node;
      this.destination = destination;
      this.assetSetting = assetSetting;
      this.variants = normaliseObject(this.node.variantProperties);
    }
    get replacementMap() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const setOrComponentName = ((_a = this.node.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? this.node.parent.name : this.node.name;
      const rtl = ((_b = this.variants) == null ? void 0 : _b[CONSTANTS.FIGMA_VARIANTS.RTL]) === "true" ? "rtl" : void 0;
      const sf = ((_c = this.variants) == null ? void 0 : _c[CONSTANTS.FIGMA_VARIANTS.SF_ALTERNATIVE]) === "true" ? "sf" : void 0;
      const size = ((_d = this.variants) == null ? void 0 : _d[CONSTANTS.FIGMA_VARIANTS.SIZE]) === "default" ? void 0 : (_e = this.variants) == null ? void 0 : _e[CONSTANTS.FIGMA_VARIANTS.SIZE];
      const result = {
        [CONSTANTS.REPLACE_TERMS.COMPONENT_NAME]: this.node.name,
        [CONSTANTS.REPLACE_TERMS.PARENT_NAME]: (_f = this.node.parent) == null ? void 0 : _f.name,
        [CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME]: setOrComponentName,
        [CONSTANTS.REPLACE_TERMS.WEIGHT]: (_g = this.variants) == null ? void 0 : _g[CONSTANTS.FIGMA_VARIANTS.WEIGHT],
        [CONSTANTS.REPLACE_TERMS.STATE]: (_h = this == null ? void 0 : this.variants) == null ? void 0 : _h[CONSTANTS.FIGMA_VARIANTS.STATE],
        [CONSTANTS.REPLACE_TERMS.COLOR]: (_i = this.variants) == null ? void 0 : _i[CONSTANTS.FIGMA_VARIANTS.COLOR],
        [CONSTANTS.REPLACE_TERMS.THEME]: (_j = this.variants) == null ? void 0 : _j[CONSTANTS.FIGMA_VARIANTS.THEME],
        [CONSTANTS.REPLACE_TERMS.TYPE]: (_k = this.variants) == null ? void 0 : _k[CONSTANTS.FIGMA_VARIANTS.TYPE],
        [CONSTANTS.REPLACE_TERMS.ORIENTATION]: (_l = this.variants) == null ? void 0 : _l[CONSTANTS.FIGMA_VARIANTS.ORIENTATION],
        [CONSTANTS.REPLACE_TERMS.PRODUCT]: (_m = this.variants) == null ? void 0 : _m[CONSTANTS.FIGMA_VARIANTS.PRODUCT],
        [CONSTANTS.REPLACE_TERMS.SIZE]: size,
        [CONSTANTS.REPLACE_TERMS.RTL]: rtl,
        [CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE]: sf
      };
      return result;
    }
    get assetName() {
      let name = "";
      const { fileName, exportSettings } = this.assetSetting.input.asset;
      const nameParts = fileName.parts.reduce((filtered, part) => {
        const namePart = this.replacementMap[part];
        if (namePart) {
          filtered.push(namePart);
        }
        return filtered;
      }, []);
      name += nameParts.join(fileName.separator);
      const suffixParts = fileName.suffix.parts;
      suffixParts.forEach((suffixPart) => {
        var _a;
        const suffix = (_a = this.replacementMap) == null ? void 0 : _a[suffixPart];
        if (suffix) {
          name += fileName.suffix.separator;
          name += suffix;
        }
      });
      if (name.endsWith("-black")) {
        name = name.replace("-black", "");
      }
      if (fileName.replaceNumbers) {
        name = name.replace(/[0-9]/g, (digit) => this.convertDigitToWord(digit));
      }
      if (fileName.replaceDots) {
        name = name.replace(/\./g, "");
      }
      name += ".";
      name += exportSettings.format;
      return name.toLowerCase();
    }
    get asset() {
      return new Promise((resolve, reject) => {
        this.node.exportAsync(this.assetSetting.input.asset.exportSettings).then((uint8Array) => {
          resolve({
            path: `${this.destination ? `${this.destination}/` : ""}${this.assetName}`,
            data: String.fromCharCode.apply(null, uint8Array)
          });
        }).catch((err) => {
          figma.notify(err, { error: true });
          reject(err);
        });
      });
    }
    convertDigitToWord(digit) {
      const digitMap = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
      };
      return digitMap[digit];
    }
  };
  var component_default = Component;

  // src/plugin/models/page.ts
  var Page = class {
    constructor(node, destination, assetSetting) {
      this.node = node;
      this.destination = destination;
      this.assetSetting = assetSetting;
    }
    get assets() {
      return Promise.all(this.components.map((component) => component.asset));
    }
    isNodeContainingImage(node) {
      const rectangleNodes = node.findAllWithCriteria({ types: ["RECTANGLE"] });
      return rectangleNodes.filter((node2) => node2.fills.filter((fill) => fill.type === "IMAGE").length > 0).length > 0;
    }
    excludeComponents(componentNodes) {
      const { exclude } = this.assetSetting.input;
      if (!exclude) {
        return componentNodes;
      }
      let returnValue;
      let lastComponentNodeItIsGoingThrough;
      try {
        returnValue = componentNodes.filter((n) => {
          var _a, _b;
          lastComponentNodeItIsGoingThrough = (_a = n.parent) == null ? void 0 : _a.name;
          if (this.isNodeContainingImage(n)) {
            return false;
          }
          return !(((_b = normaliseObject(n.variantProperties)) == null ? void 0 : _b[exclude.byVariant]) === "true");
        });
      } catch (e) {
        throw new Error(
          `Error while filtering components by variant property "${exclude.byVariant}". 
        Component: ${lastComponentNodeItIsGoingThrough}. 
        Error: ${e}`
        );
      }
      return returnValue;
    }
    get components() {
      const componentNodes = this.node.findAllWithCriteria({
        types: CONSTANTS.SEARCH_CRITERIA
      });
      const filteredComponents = this.excludeComponents(componentNodes);
      return filteredComponents.map((node) => new component_default(node, this.destination, this.assetSetting));
    }
  };
  var page_default = Page;

  // src/shared/export-constants.ts
  var DEFAULTS = {
    CHUNK_SIZE: 500
  };

  // src/plugin/models/document.ts
  var Document = class {
    constructor(rootNode, assetSetting) {
      this.node = rootNode;
      this.assetSetting = assetSetting;
    }
    getDestination(name, mapPagesToFolder) {
      const object = mapPagesToFolder.find((map) => name.toLowerCase().includes(map.page.toLowerCase()));
      return object == null ? void 0 : object.folder;
    }
    get pages() {
      const pagesTemp = [];
      if ("children" in this.node) {
        for (const child of this.node.children) {
          if (CONSTANTS.DOCUMENT.VALID_CHILD_TYPES.includes(child.type)) {
            const destination = this.getDestination(child.name, this.assetSetting.input.mapPagesToFolder);
            if (destination || destination === "") {
              pagesTemp.push(new page_default(child, destination, this.assetSetting));
            }
          }
        }
      }
      return pagesTemp;
    }
    createChunks(array) {
      const chunkSize = DEFAULTS.CHUNK_SIZE;
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    }
    getAssetChunksFromPages() {
      return __async(this, null, function* () {
        if (!this.pages.length) {
          return [[]];
        }
        const assets = [];
        yield Promise.all(
          this.pages.map(
            (page) => page.assets.then((data) => {
              assets.push(...data);
            })
          )
        );
        return this.createChunks(assets);
      });
    }
  };
  var document_default = Document;

  // src/shared/settings-constants.ts
  var INITIAL_SETTINGS = {
    auth: {
      githubPersonalToken: "<YourClassicPersonalAccessTokenHere>"
    },
    assets: {
      typeOfAsset: {
        name: "<type of asset>",
        mode: "ADD",
        description: {
          name: "<Name of git repo>",
          url: "<URL of the git repo only for informational purpose>",
          urlText: "<url text>"
        },
        input: {
          mapPagesToFolder: [
            { page: "<substring of page>", folder: "<folder-name>" }
          ],
          exclude: {
            byVariant: "<variant which should be excluded>"
          },
          asset: {
            fileName: {
              parts: ["SET_OR_COMPONENT_NAME", "SF_ALTERNATIVE", "RTL"],
              separator: "-",
              suffix: {
                parts: ["WEIGHT", "STATE", "SIZE"],
                separator: "_"
              },
              replaceNumbers: true,
              replaceDots: true
            },
            exportSettings: {
              format: "SVG",
              contentsOnly: true,
              useAbsoluteBounds: false
            }
          }
        },
        output: {
          git: {
            githubOwner: "<owner-name>",
            gitRepo: "<repo-name>",
            gitBranch: `automation-assets-${new Date().toISOString().replace(/\.|:/g, "-")}`,
            prTitle: `Automated Assets Export ${new Date().toISOString()}`,
            prCommitMsg: `feat(assets): Export ${new Date().toISOString()}`,
            prMessage: `feat(assets): Export ${new Date().toISOString()}`,
            gitRepoFilePath: "<path where assets should be exported to>"
          }
        }
      }
    }
  };
  var CONSTANTS2 = {
    INITIAL_SETTINGS
  };

  // src/plugin/models/storage.ts
  var settingsKey = "settings";
  var Storage = class {
    constructor() {
      this.initialSettings = CONSTANTS2.INITIAL_SETTINGS;
      this.api = figma.clientStorage;
    }
    setSettings(data) {
      return __async(this, null, function* () {
        return this.api.setAsync(settingsKey, data);
      });
    }
    getSettings() {
      return __async(this, null, function* () {
        return this.api.getAsync(settingsKey);
      });
    }
  };
  var storage_default = Storage;

  // src/plugin/index.ts
  var storage = new storage_default();
  figma.on("run", () => __async(void 0, null, function* () {
    const settings = yield storage.getSettings();
    if (!settings) {
      yield storage.setSettings(storage.initialSettings);
    }
  }));
  figma.skipInvisibleInstanceChildren = true;
  figma.showUI(__html__, { themeColors: true, height: 550, width: 450 });
  figma.ui.onmessage = (msg) => __async(void 0, null, function* () {
    var _a, _b, _c;
    if (msg.type === ACTIONS.EXPORT) {
      const document = new document_default(figma.root, msg.assetSetting);
      const assetChunks = yield document.getAssetChunksFromPages();
      figma.ui.postMessage({ type: "assets", data: assetChunks }, { origin: "*" });
      figma.ui.postMessage({ type: "export" }, { origin: "*" });
    }
    if (msg.type === ACTIONS.G_TAG) {
      const document = new document_default(figma.root, msg.assetSetting);
      const assetChunks = yield document.getAssetChunksFromPages();
      figma.ui.postMessage({ type: "tagAssets", data: assetChunks }, { origin: "*" });
    }
    if (msg.type === ACTIONS.G_TAG_LINK) {
      const document = new document_default(figma.root, msg.assetSetting);
      (_a = document == null ? void 0 : document.pages) == null ? void 0 : _a.map((page) => {
        if (page.destination === msg.page) {
          figma.currentPage = page.node;
        }
      });
      const node = figma.currentPage.findAll((node2) => node2.name === msg.nodeName);
      figma.viewport.zoom = 2;
      figma.currentPage.selection = node;
      figma.viewport.scrollAndZoomIntoView([node[0]]);
      figma.closePlugin();
    }
    if (msg.type === ACTIONS.SET_SETTINGS) {
      figma.ui.postMessage({ type: "storage", data: "inprogress" }, { origin: "*" });
      yield storage.setSettings(msg.settings);
      figma.ui.postMessage({ type: "storage", data: "complete" }, { origin: "*" });
    }
    if (msg.type === ACTIONS.GET_SETTINGS) {
      const settings = yield storage.getSettings();
      figma.ui.postMessage({ type: "settings", data: settings }, { origin: "*" });
    }
    if (msg.type === ACTIONS.PR_CREATED) {
      figma.notify(`Pull Request: ${(_c = (_b = msg.pullRequest) == null ? void 0 : _b.data) == null ? void 0 : _c.url}`);
    }
  });
})();
