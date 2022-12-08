/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { CONSTANTS } from '../constants';
import type { Components, Config } from '../types';
import type { Asset } from '../../shared/types';
import Component from './component';
import { normaliseObject } from '../utils/object';

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

  excludeComponents(componentNodes: Array<ComponentNode>): Array<ComponentNode> {
    return componentNodes.filter(
      (n) => !(normaliseObject(n.variantProperties)?.[this.config.exclude.byVariant] === 'true'),
    );
  }

  get components(): Components {
    // get all figma component nodes in current page:
    const componentNodes = this.node.findAllWithCriteria({
      types: CONSTANTS.SEARCH_CRITERIA,
    });

    const filteredComponents = this.excludeComponents(componentNodes);
    // return component instances:
    return filteredComponents.map((node: ComponentNode) => new Component(node, this.destination, this.config));
  }
}

export default Page;
