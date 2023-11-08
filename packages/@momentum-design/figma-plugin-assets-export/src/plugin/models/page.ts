/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { CONSTANTS } from '../constants';
import type { Components } from '../types';
import type { Asset, AssetSetting } from '../../shared/types';
import Component from './component';
import { normaliseObject } from '../utils/object';

class Page {
  node: PageNode;

  assetSetting: AssetSetting;

  destination: string;

  constructor(node: PageNode, destination: string, assetSetting: AssetSetting) {
    this.node = node;
    this.destination = destination;
    this.assetSetting = assetSetting;
  }

  get assets(): Promise<Array<Asset>> {
    return Promise.all(this.components.map((component) => component.asset));
  }

  excludeComponents(componentNodes: Array<ComponentNode>): Array<ComponentNode> {
    const { exclude } = this.assetSetting.input;

    if (!exclude) {
      return componentNodes;
    }

    let returnValue;
    let lastComponentNodeItIsGoingThrough;
    try {
      returnValue = componentNodes.filter((n) => {
        lastComponentNodeItIsGoingThrough = n.parent?.name;
        return !(normaliseObject(n.variantProperties)?.[exclude.byVariant] === 'true');
      });
    } catch (e) {
      throw new Error(
        `Error while filtering components by variant property "${exclude.byVariant}". 
        Component: ${lastComponentNodeItIsGoingThrough}. 
        Error: ${e}`,
      );
    }

    /* @ts-ignore */
    return returnValue;
  }

  get components(): Components {
    // get all figma component nodes in current page:
    const componentNodes = this.node.findAllWithCriteria({
      types: CONSTANTS.SEARCH_CRITERIA,
    });

    const filteredComponents = this.excludeComponents(componentNodes);
    // return component instances:
    return filteredComponents.map((node: ComponentNode) => new Component(node, this.destination, this.assetSetting));
  }
}

export default Page;
