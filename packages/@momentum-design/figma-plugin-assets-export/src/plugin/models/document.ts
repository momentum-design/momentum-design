/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Page from './page';
import { CONSTANTS } from '../constants';
import type { Asset, Config, MapPagesToFolder } from '../types';

class Document {
  node: DocumentNode;

  config: Config;

  constructor(rootNode: DocumentNode, config: Config) {
    this.node = rootNode;
    this.config = config;
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
        if (CONSTANTS.DOCUMENT.VALID_CHILD_TYPES.includes(child.type)) {
          const destination = this.getDestination(child.name, this.config.mapPagesToFolder);
          if (destination) {
            pagesTemp.push(new Page(child, destination, this.config));
          }
        }
      }
    }

    return pagesTemp;
  }

  async getAssetsFromPages() {
    if (!this.pages.length) {
      return [];
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

    return assets;
  }
}

export default Document;
