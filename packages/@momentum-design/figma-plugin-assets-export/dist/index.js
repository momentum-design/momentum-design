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
    PR_CREATED: "pr_created"
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
    STATE: "STATE"
  };
  var FIGMA_VARIANTS = {
    WEIGHT: "weight",
    COLOR: "color",
    RTL: "right to left",
    SF_ALTERNATIVE: "sf alternative",
    STATE: "state"
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
      var _a, _b, _c, _d, _e, _f, _g;
      const setOrComponentName = ((_a = this.node.parent) == null ? void 0 : _a.type) === "COMPONENT_SET" ? this.node.parent.name : this.node.name;
      const rtl = ((_b = this.variants) == null ? void 0 : _b[CONSTANTS.FIGMA_VARIANTS.RTL]) === "true" ? "rtl" : void 0;
      const sf = ((_c = this.variants) == null ? void 0 : _c[CONSTANTS.FIGMA_VARIANTS.SF_ALTERNATIVE]) === "true" ? "sf" : void 0;
      const result = {
        [CONSTANTS.REPLACE_TERMS.COMPONENT_NAME]: this.node.name,
        [CONSTANTS.REPLACE_TERMS.PARENT_NAME]: (_d = this.node.parent) == null ? void 0 : _d.name,
        [CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME]: setOrComponentName,
        [CONSTANTS.REPLACE_TERMS.WEIGHT]: (_e = this.variants) == null ? void 0 : _e[CONSTANTS.FIGMA_VARIANTS.WEIGHT],
        [CONSTANTS.REPLACE_TERMS.STATE]: (_f = this == null ? void 0 : this.variants) == null ? void 0 : _f[CONSTANTS.FIGMA_VARIANTS.STATE],
        [CONSTANTS.REPLACE_TERMS.COLOR]: (_g = this.variants) == null ? void 0 : _g[CONSTANTS.FIGMA_VARIANTS.COLOR],
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
      name += ".";
      name += exportSettings.format.toLowerCase();
      return name;
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
    excludeComponents(componentNodes) {
      const { exclude } = this.assetSetting.input;
      if (!exclude) {
        return componentNodes;
      }
      return componentNodes.filter(
        (n) => {
          var _a;
          return !(((_a = normaliseObject(n.variantProperties)) == null ? void 0 : _a[exclude.byVariant]) === "true");
        }
      );
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
      const chunkSize = 500;
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
      icons: {
        name: "Icons",
        description: {
          name: "Icons",
          url: "https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/icons",
          urlText: "Momentum icons package"
        },
        input: {
          mapPagesToFolder: [
            { page: "\u2705", folder: "core" },
            { page: "Colored Icons", folder: "colored" },
            { page: "Brand Icons", folder: "brand" }
          ],
          exclude: {
            byVariant: "sf alternative"
          },
          asset: {
            fileName: {
              parts: ["SET_OR_COMPONENT_NAME", "SF_ALTERNATIVE", "RTL"],
              separator: "-",
              suffix: {
                parts: ["WEIGHT", "STATE"],
                separator: "_"
              }
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
            githubOwner: "momentum-design",
            gitRepo: "momentum-design",
            gitBranch: `automation-icons-${new Date().toISOString().replace(/\.|:/g, "-")}`,
            prTitle: `Automated Icons Export ${new Date().toISOString()}`,
            prCommitMsg: `feat(assets/icons): Export ${new Date().toISOString()}`,
            prMessage: `feat(assets/icons): Export ${new Date().toISOString()}`,
            gitRepoFilePath: "packages/@momentum-design/icons",
            gitDistPath: "src"
          }
        }
      },
      illustrations: {
        name: "Illustrations",
        description: {
          name: "Illustrations",
          url: "https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/illustrations",
          urlText: "Momentum illustrations package"
        },
        input: {
          mapPagesToFolder: [
            { page: "\u2705", folder: "" }
          ],
          exclude: {
            byVariant: "sf alternative"
          },
          asset: {
            fileName: {
              parts: ["SET_OR_COMPONENT_NAME", "SF_ALTERNATIVE", "RTL"],
              separator: "-",
              suffix: {
                parts: ["COLOR"],
                separator: "-"
              }
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
            githubOwner: "momentum-design",
            gitRepo: "momentum-design",
            gitBranch: `automation-illustrations-${new Date().toISOString().replace(/\.|:/g, "-")}`,
            prTitle: `Automated Illustrations Export ${new Date().toISOString()}`,
            prCommitMsg: `feat(assets/illustrations): Export ${new Date().toISOString()}`,
            prMessage: `feat(assets/illustrations): Export ${new Date().toISOString()}`,
            gitRepoFilePath: "packages/@momentum-design/illustrations",
            gitDistPath: "src"
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
    var _a, _b;
    if (msg.type === ACTIONS.EXPORT) {
      const document = new document_default(figma.root, msg.assetSetting);
      const assetChunks = yield document.getAssetChunksFromPages();
      figma.ui.postMessage({ type: "assets", data: assetChunks }, { origin: "*" });
      figma.ui.postMessage({ type: "export" }, { origin: "*" });
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
      figma.notify(`Pull Request: ${(_b = (_a = msg.pullRequest) == null ? void 0 : _a.data) == null ? void 0 : _b.url}`);
    }
  });
})();
