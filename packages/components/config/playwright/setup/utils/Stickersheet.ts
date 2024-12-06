/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Locator } from '@playwright/test';
import type { ComponentsPage } from '..';

type AttributesType = Record<string, string>;

class StickerSheet {
    private componentPage: ComponentsPage;

    private tagname: string;

    private assertion?: (component?: Locator) => Promise<any>;

    private component?: Locator;

    private attributes: { children?: any; defaultAttributes?: Record<string, string> } = {};

    private rowId: number = 1;

    constructor(componentPage: ComponentsPage, tagName: string, assertion?: (component?: Locator) => Promise<any>) {
      this.componentPage = componentPage;
      this.tagname = tagName;
      this.assertion = assertion;
    }

    public setAssertion(assertion: any) {
      this.assertion = assertion;
    }

    public setAttributes(attributes: AttributesType) {
      const { children, ...defaultAttributes } = attributes;
      this.attributes = { children, defaultAttributes };
    }

    private async setAttributesOnComponent(otherAttributes: AttributesType) {
      const combinedAttributes = {
        ...this.attributes.defaultAttributes,
        ...otherAttributes,
      };

      if (this.component) {
        await this.componentPage.setAttributes(this.component, combinedAttributes);
      }
    }

    private async addComponentToSheet(otherAttributes: AttributesType) {
      const openingTag = `<${this.tagname} id='${this.tagname}-${this.rowId}'>`;
      const childrenEl = this.attributes.children
        ? `${openingTag}${this.attributes.children}</${this.tagname}>`
        : `${openingTag}</${this.tagname}>`;

      await this.componentPage.page.evaluate(({ childrenEl }) => {
        const targetRow = document.querySelector('.componentRowWrapper:last-of-type');
        targetRow?.insertAdjacentHTML('beforeend', childrenEl);
      }, { childrenEl });

      this.component = await this.componentPage.page.locator(`#${this.tagname}-${this.rowId}`);
      await this.setAttributesOnComponent(otherAttributes);

      if (this.assertion) {
        await this.assertion(this.component);
      }

      this.rowId += 1;
    }

    private async createRowWrapper() {
      await this.componentPage.page.evaluate(() => {
        const wrapper = document.querySelector('.componentWrapper');
        wrapper?.insertAdjacentHTML('beforeend', '<div class="componentRowWrapper"></div>');
      });
    }

    private async createWrapperForCombination(combinationArr: Array<Record<string, any>>) {
      await this.createRowWrapper();

      for (const combination of combinationArr) {
        await this.addComponentToSheet(combination);
      }
    }

    private generateCombinations(keys: string[], values: any[][], index = 0, current: any = {}): any[] {
      if (index === keys.length) return current;

      const key = keys[index];
      const result: any[] = [];

      for (const value of values[index]) {
        result.push(this.generateCombinations(keys, values, index + 1, { ...current, [key]: value }));
      }

      return result;
    }

    public async mountComponents(combinations: Record<string, Record<string, any>>) {
      if (!this.tagname) {
        throw new Error('tagname is required');
      }

      await this.componentPage.mount({
        html: '<div class="componentWrapper"></div>',
        clearDocument: false,
      });

      if (Object.keys(combinations).length === 0) {
        await this.addComponentToSheet({});
        return;
      }

      const keys = Object.keys(combinations);
      const values = Object.values(combinations).map(Object.values);

      const allCombinations = this.generateCombinations(keys, values);

      for (const combination of allCombinations) {
        if (Array.isArray(combination)) {
          await this.createWrapperForCombination(combination);
        } else {
          await this.createRowWrapper();
          await this.addComponentToSheet(combination);
        }
      }
    }

    public getWrapperContainer() {
      return this.componentPage.page.locator('.componentWrapper');
    }
}

export default StickerSheet;
