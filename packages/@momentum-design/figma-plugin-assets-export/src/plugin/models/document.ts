/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Page from './page';
import { CONSTANTS } from '../constants';

type AllowList = Array<string>;

class Document {
  node: DocumentNode;

  allowList: AllowList;

  constructor(rootNode: DocumentNode, allowList: AllowList) {
    this.node = rootNode;
    this.allowList = allowList;
  }

  /**
   * If provided `allowList` contains words which are in the provided `name`
   *
   * @param allowList - list of words to check
   * @param name - name to check
   * @returns true, if any word in `allowList` is found in the `name`
   */
  isNameInAllowlist(name: string, allowList: AllowList) {
    const isInList = !!allowList.find((listElement) => name.toLowerCase().includes(listElement.toLowerCase()));
    return isInList;
  }

  /**
   * Get sub pages of current document and store page data in Page class
   * @param node - node of current document
   * @param allowList - list of names, allowed as pages to return (useful to sort out draft pages in document)
   * @returns array of page instances
   */
  getDocumentPages(node: DocumentNode, allowList: AllowList) {
    const pages: Array<Page> = [];
    if ('children' in node) {
      for (const child of node.children) {
        if (CONSTANTS.DOCUMENT.VALID_CHILD_TYPES.includes(child.type)) {
          if (this.isNameInAllowlist(child.name, allowList)) {
            pages.push(new Page(child));
          }
        }
      }
    }

    return pages;
  }

  /**
   * Getter of pages property
   */
  get pages(): Array<Page> {
    return this.getDocumentPages(this.node, this.allowList);
  }
}

export default Document;
