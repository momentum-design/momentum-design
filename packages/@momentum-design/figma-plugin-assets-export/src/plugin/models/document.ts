/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Page from './page';
import { CONSTANTS } from '../constants';
import type { Asset, AssetSetting, MapPagesToFolder } from '../../shared/types';
import { DEFAULTS } from '../../shared/export-constants';

class Document {
  node: DocumentNode;

  assetSetting: AssetSetting;

  constructor(rootNode: DocumentNode, assetSetting: AssetSetting) {
    this.node = rootNode;
    this.assetSetting = assetSetting;
  }

  /**
   * If provided `mapPagesToFolder` contains a page with words which are in the provided `name`, return the
   * respective folder of the map.
   *
   * If nothing is returned, page should not be export, therefore destination will be undefined
   *
   * @param name - name to check
   * @param mapPagesToFolder - list of objects, with page name and folder to check
   * @returns true, if any page in `mapPagesToFolder` can be found in the provided `name`
   */
  getDestination(name: string, mapPagesToFolder: MapPagesToFolder) {
    const object = mapPagesToFolder.find((map) => name.toLowerCase().includes(map.page.toLowerCase()));
    return object?.folder;
  }

  /**
   * Get sub pages of current document and store page data in Page class
   *
   * The pages will only be added to the array if the page name is in the `config.allowList`
   * @returns array of page instances
   */
  get pages(): Array<Page> {
    const pagesTemp: Array<Page> = [];
    if ('children' in this.node) {
      for (const child of this.node.children) {
        child.loadAsync();
        if (CONSTANTS.DOCUMENT.VALID_CHILD_TYPES.includes(child.type)) {
          const destination = this.getDestination(child.name, this.assetSetting.input.mapPagesToFolder);
          if (destination || destination === '') {
            pagesTemp.push(new Page(child, destination, this.assetSetting));
          }
        }
      }
    }

    return pagesTemp;
  }

  createChunks(array: Array<any>): Array<Array<any>> {
    const chunkSize = DEFAULTS.CHUNK_SIZE;
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  async getAssetChunksFromPages(): Promise<Asset[][]> {
    if (!this.pages.length) {
      return [[]];
    }

    const assets: Array<Asset> = [];

    await Promise.all(
      this.pages.map(
        (page) => page.assets
          .then((data) => {
            assets.push(...data);
          }),
      ),
    );

    return this.createChunks(assets);
  }
}

export default Document;
