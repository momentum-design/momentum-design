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

    /**
     * Sets an assertion function to be executed after a component is added to the sheet.
     * Based on this function, the component is added on to the sticker sheet.
     * @param assertion - A function that takes an optional Locator and returns a Promise.
     */
    public setAssertion(assertion: any) {
      this.assertion = assertion;
    }

    /**
     * Sets the attributes for the component, separating children from default attributes.
     * @param attributes - An object containing children and defaultAttributes for the component.
     */
    public setAttributes(attributes: AttributesType) {
      const { children, ...defaultAttributes } = attributes;
      this.attributes = { children, defaultAttributes };
    }

    /**
     * Sets the combined attributes on the currently selected component.
     * @param otherAttributes - Additional attributes to be combined with default attributes.
     */
    private async setAttributesOnComponent(otherAttributes: AttributesType) {
      const combinedAttributes = {
        ...this.attributes.defaultAttributes,
        ...otherAttributes,
      };

      if (this.component) {
        await this.componentPage.setAttributes(this.component, combinedAttributes);
      }
    }

    /**
     * Adds a new component to the sheet with specified attributes.
     * @param otherAttributes - Attributes to be applied to the new component.
     */
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

    /**
     * Creates a new row wrapper in the component sheet.
     */
    private async createRowWrapper() {
      await this.componentPage.page.evaluate(() => {
        const wrapper = document.querySelector('.componentWrapper');
        wrapper?.insertAdjacentHTML('beforeend', '<div class="componentRowWrapper"></div>');
      });
    }

    /**
     * Creates a wrapper for a combination of components and adds them to the sheet.
     * @param combinationArr - An array of objects representing combinations of attributes for components.
     */
    private async createWrapperForCombination(combinationArr: Array<Record<string, any>>) {
      await this.createRowWrapper();

      for (const combination of combinationArr) {
        await this.addComponentToSheet(combination);
      }
    }

    /**
     * Generates all combinations of attribute values based on provided keys and values.
     * @param keys - An array of keys representing attribute names.
     * @param values - A 2D array where each sub-array contains possible values for corresponding keys.
     * @param index - The current index in the keys array (used for recursion).
     * @param current - The current combination being built (used for recursion).
     * @returns An array of objects representing all possible combinations of attributes.
     */
    private generateCombinations(keys: string[], values: any[][], index = 0, current: any = {}): any[] {
      if (index === keys.length) return current;

      const key = keys[index];
      const result: any[] = [];

      for (const value of values[index]) {
        result.push(this.generateCombinations(keys, values, index + 1, { ...current, [key]: value }));
      }

      return result;
    }

    /**
     * Mounts components onto the page using specified combinations of attributes.
     * @param combinations - An object where keys are attribute names and
     * values are objects containing possible attribute configurations.
     * @throws Will throw an error if tagname is not defined.
     */

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

    /**
     * Retrieves the wrapper container element for components on the page.
     * @returns A Locator representing the component wrapper container element.
     */
    public getWrapperContainer() {
      return this.componentPage.page.locator('.componentWrapper');
    }
}

export default StickerSheet;
