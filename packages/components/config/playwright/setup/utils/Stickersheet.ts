/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Locator } from '@playwright/test';
import type { ComponentsPage } from '..';

type AttributesType = Record<string, string>;
type AssertionType = (component?: Locator, attributes?: AttributesType) => Promise<any>;

class StickerSheet {
  private componentPage: ComponentsPage;

  private tagname: string;

  private assertion?: AssertionType;

  private component?: Locator;

  private children?: any;

  private attributes: AttributesType = {};

  private rowId: number = 1;

  constructor(componentPage: ComponentsPage, tagName: string, assertion?: AssertionType) {
    this.componentPage = componentPage;
    this.tagname = tagName;
    this.assertion = assertion;
  }

  /**
   * Sets an assertion function to be executed after a component is added to the sheet.
   * This will allow to wait for a specific condition to be met before proceeding.
   * @param assertion - A function that takes an optional Locator and returns a Promise.
   */
  public setAssertion(assertion: any) {
    this.assertion = assertion;
  }

  /**
   * Sets the children for the component
   * @param children - children for the component.
   */
  public setChildren(children: any) {
    this.children = children;
  }

  /**
   * Sets the attributes for the component
   * @param attributes - An object containing attributes for the component.
   */
  public setAttributes(attributes: AttributesType) {
    this.attributes = attributes;
  }

  private getAttributesAsString() {
    return Object.entries(this.attributes)
      .map(([key, value]) => value ? `${key}="${value}"` : `${key}`)
      .join(' ');
  }

  /**
   * Adds a new component to the sheet with specified attributes.
   */
  private async addComponentToSheet() {
    const attributesString = this.getAttributesAsString();
    const childrenEl = this.children
      ? `<${this.tagname} id='${this.tagname}-${this.rowId}' ${attributesString}>${this.children}</${this.tagname}>`
      : `<${this.tagname} id='${this.tagname}-${this.rowId}' ${attributesString}></${this.tagname}>`;

    await this.componentPage.mount({
      html: childrenEl,
      clearDocument: false,
      elementSelector: '.componentRowWrapper:last-of-type',
    });

    this.component = this.componentPage.page.locator(`#${this.tagname}-${this.rowId}`);
    if (this.assertion) {
      await this.assertion(this.component, this.attributes);
    }
    this.rowId += 1;
  }

  /**
   * Creates a new row wrapper in the component sheet.
   */
  private async createRowWrapper() {
    await this.componentPage.mount({
      html: '<div class="componentRowWrapper"></div>',
      clearDocument: false,
      elementSelector: '.componentWrapper',
    });
  }

  /**
   * Creates a wrapper for a combination of components and adds them to the sheet.
   * @param combinationArr - An array of objects representing combinations of attributes for components.
   */
  private async createWrapperForCombination(combinationArr: Array<Record<string, any>>) {
    await this.createRowWrapper();

    for (const combination of combinationArr) {
      if (Array.isArray(combination)) {
        await this.createWrapperForCombination(combination);
      } else {
        this.setAttributes({ ...this.attributes, ...combination });
        await this.addComponentToSheet();
      }
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
      await this.addComponentToSheet();
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
        this.setAttributes({ ...this.attributes, ...combination });
        await this.addComponentToSheet();
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
