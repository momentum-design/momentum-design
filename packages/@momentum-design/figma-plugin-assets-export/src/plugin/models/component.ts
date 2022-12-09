/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { CONSTANTS } from '../constants';
import { normaliseObject } from '../utils/object';
import type { Asset, AssetSetting } from '../../shared/types';

type ReplacementMap = { [key: string]: string | undefined }

class Component {
  node: ComponentNode;

  destination: string;

  assetSetting: AssetSetting;

  variants: Record<string, string>;

  constructor(node: ComponentNode, destination: string, assetSetting: AssetSetting) {
    this.node = node;
    this.destination = destination;
    this.assetSetting = assetSetting;
    this.variants = normaliseObject(this.node.variantProperties);
  }

  get replacementMap(): ReplacementMap {
    const setOrComponentName = this.node.parent?.type === 'COMPONENT_SET' ? this.node.parent.name : this.node.name;
    const rtl = this.variants?.[CONSTANTS.FIGMA_VARIANTS.RTL] === 'true' ? 'rtl' : undefined;
    const sf = this.variants?.[CONSTANTS.FIGMA_VARIANTS.SF_ALTERNATIVE] === 'true' ? 'sf' : undefined;

    const result = {
      [CONSTANTS.REPLACE_TERMS.COMPONENT_NAME]: this.node.name,
      [CONSTANTS.REPLACE_TERMS.PARENT_NAME]: this.node.parent?.name,
      [CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME]: setOrComponentName,
      [CONSTANTS.REPLACE_TERMS.WEIGHT]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.WEIGHT],
      [CONSTANTS.REPLACE_TERMS.COLOR]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.COLOR],
      [CONSTANTS.REPLACE_TERMS.RTL]: rtl,
      [CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE]: sf,
    };

    return result;
  }

  get assetName() {
    let name = '';
    const { fileName, exportSettings } = this.assetSetting.input.asset;
    const nameParts = fileName.parts.reduce((filtered: Array<string>, part) => {
      const namePart = this.replacementMap[part];
      if (namePart) {
        filtered.push(namePart);
      }

      return filtered;
    }, []);

    name += nameParts.join(fileName.separator);
    const suffixParts = fileName.suffix.parts;
    suffixParts.forEach((suffixPart) => {
      const suffix = this.replacementMap?.[suffixPart];
      if (suffix) {
        name += fileName.suffix.separator;
        name += suffix;
      }
    });
    // hacky but required for legacy support
    // going forward we need to just use the color type
    if (name.endsWith('-black')) {
      name = name.replace('-black', '');
    }
    name += '.';
    name += exportSettings.format.toLowerCase();
    return name;
  }

  get asset(): Promise<Asset> {
    return new Promise((resolve, reject) => {
      this.node
        .exportAsync(this.assetSetting.input.asset.exportSettings)
        .then((uint8Array: Uint8Array) => {
          resolve({
            path: `${this.destination ? `${this.destination}/` : ''}${this.assetName}`,
            data: String.fromCharCode.apply(null, uint8Array as any),
          });
        })
        .catch((err) => {
          figma.notify(err, { error: true });
          reject(err);
        });
    });
  }
}

export default Component;
