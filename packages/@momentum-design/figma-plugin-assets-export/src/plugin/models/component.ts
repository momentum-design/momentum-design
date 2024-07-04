/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { Buffer } from 'buffer';
import { CONSTANTS } from '../constants';
import { normaliseObject } from '../utils/object';
import type { Asset, AssetSetting } from '../../shared/types';

type ReplacementMap = { [key: string]: string | undefined };

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
    const size = this.variants?.[CONSTANTS.FIGMA_VARIANTS.SIZE] === 'default'
      ? undefined
      : this.variants?.[CONSTANTS.FIGMA_VARIANTS.SIZE];

    const result = {
      [CONSTANTS.REPLACE_TERMS.COMPONENT_NAME]: this.node.name,
      [CONSTANTS.REPLACE_TERMS.PARENT_NAME]: this.node.parent?.name,
      [CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME]: setOrComponentName,
      [CONSTANTS.REPLACE_TERMS.WEIGHT]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.WEIGHT],
      [CONSTANTS.REPLACE_TERMS.STATE]: this?.variants?.[CONSTANTS.FIGMA_VARIANTS.STATE],
      [CONSTANTS.REPLACE_TERMS.COLOR]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.COLOR],
      [CONSTANTS.REPLACE_TERMS.THEME]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.THEME],
      [CONSTANTS.REPLACE_TERMS.TYPE]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.TYPE],
      [CONSTANTS.REPLACE_TERMS.ORIENTATION]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.ORIENTATION],
      [CONSTANTS.REPLACE_TERMS.PRODUCT]: this.variants?.[CONSTANTS.FIGMA_VARIANTS.PRODUCT],
      [CONSTANTS.REPLACE_TERMS.SIZE]: size,
      [CONSTANTS.REPLACE_TERMS.RTL]: rtl,
      [CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE]: sf,
    };

    return result;
  }

  get assetName() {
    let name = '';
    const { fileName } = this.assetSetting.input.asset;
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

    if (fileName.replaceNumbers) {
      name = name.replace(/[0-9]/g, (digit) => this.convertDigitToWord(digit));
    }

    if (fileName.replaceDots) {
      name = name.replace(/\./g, '');
    }

    return name.toLowerCase();
  }

  get asset(): Promise<Asset> {
    return new Promise((resolve, reject) => {
      const { exportSettings, exportSettingsImage } = this.assetSetting.input.asset;
      const imageExportSettings = this.isNodeContainingImage(this.node)
        ? exportSettingsImage
        : exportSettings;
      this.node
        .exportAsync(imageExportSettings)
        .then((uint8Array: Uint8Array) => {
          const imageData = this.isNodeContainingImage(this.node)
            ? Buffer.from(uint8Array).toString('base64')
            : Buffer.from(uint8Array).toString();
          const fileExtension = imageExportSettings.format.toLowerCase();
          resolve({
            path: `${this.destination ? `${this.destination}/` : ''}${this.assetName}.${fileExtension}`,
            data: imageData,
          });
        })
        .catch((err) => {
          figma.notify(`Component: ${this.assetName} / Error: ${err}`, { error: true });
          reject(err);
        });
    });
  }

  /**
   * This function checks if node contains any IMAGE fill
   *
   * @returns true, if this.node contains any IMAGE fill, otherwise false
   */
  isNodeContainingImage(node: ComponentNode) {
    const rectangleNodes: Array<RectangleNode> = node.findAllWithCriteria({ types: ['RECTANGLE'] });
    // if there are any rectangleNodes as children, which do have a fill of type IMAGE, return true
    return (
      rectangleNodes.filter((node) => (node.fills as Paint[]).filter((fill) => fill.type === 'IMAGE').length > 0)
        .length > 0
    );
  }

  /**
   * Converts the given `digit` to the equivalent word
   * @param digit - the digit to convert as a string
   * @returns the equivalent word
   */
  private convertDigitToWord(digit: string): string {
    const digitMap = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    } as { [key: string]: string };

    return digitMap[digit];
  }
}

export default Component;
