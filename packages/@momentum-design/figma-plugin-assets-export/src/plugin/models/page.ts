/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { CONSTANTS } from '../constants';
import type { Asset, Components, Config } from '../types';
import Component from './component';

class Page {
  node: PageNode;

  config: Config;

  destination: string;

  constructor(node: PageNode, destination: string, config: Config) {
    this.node = node;
    this.destination = destination;
    this.config = config;
  }

  get assets(): Promise<Array<Asset>> {
    return Promise.all(this.components.map((component) => component.asset));
  }

  get components(): Components {
    // get all figma component nodes in current page:
    const componentNodes = this.node.findAllWithCriteria({
      types: CONSTANTS.SEARCH_CRITERIA,
    });

    // return component instances:
    return componentNodes.map((node: ComponentNode) => new Component(node, this.destination, this.config));
  }
}

export default Page;
