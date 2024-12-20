/* eslint-disable no-restricted-syntax */
import type { ComponentsPage } from '..';

type AttributesType = Record<string, any>;

class StickerSheet {
  private componentPage: ComponentsPage;

  private tagname: string;

  private children?: any;

  private attributes: AttributesType = {};

  private rowId: number = 1;

  private markupHTML: string = '';

  constructor(componentPage: ComponentsPage, tagName: string) {
    if (!tagName) {
      throw new Error('tagname is required');
    }

    this.componentPage = componentPage;
    this.tagname = tagName;
  }

  /**
   * Sets the children for the component
   * @param children - children for the component.
   */
  public setChildren(children: string) {
    this.children = children;
  }

  /**
   * Sets the attributes for the component
   * @param attributes - An object containing attributes for the component.
   */
  public setAttributes(attributes: AttributesType) {
    this.attributes = attributes;
  }

  private formatAttributesAsString() {
    return Object.entries(this.attributes)
      .map(([key, value]) => value ? `${key}="${value}"` : `${key}`)
      .join(' ');
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
   * Retrieves the wrapper container element for components on the page.
   * @returns A Locator representing the component wrapper container element.
   */
  public getWrapperContainer() {
    return this.componentPage.page.locator('.componentWrapper');
  }

  /**
   * Creates a new row wrapper in the component sheet and appends the children to it.
   */
  private createComponentsMarkupHTML(childrenEl?: string, createNewRow = false) {
    if (createNewRow) {
      this.markupHTML += `<div class="componentRowWrapper">${childrenEl}</div>`;
    } else {
      this.markupHTML += childrenEl;
    }
  }

  /**
   * Creates a new element with the specified attributes.
   * @returns A string representing the new element.
   */
  private addComponentToSheet() {
    const attributesString = this.formatAttributesAsString();
    const childrenEl = this.children
      ? `<${this.tagname} id='${this.tagname}-${this.rowId}' ${attributesString}>${this.children}</${this.tagname}>`
      : `<${this.tagname} id='${this.tagname}-${this.rowId}' ${attributesString}></${this.tagname}>`;
    this.rowId += 1;

    return childrenEl;
  }

  /**
   * Creates a wrapper for a combination of components and adds them to the sheet.
   * @param combinationArr - An array of objects representing combinations of attributes for components.
   */
  private createWrapperForCombination(combinationArr: Array<Record<string, any>>) {
    let childrenEl = '';
    for (const combination of combinationArr) {
      if (Array.isArray(combination)) {
        this.createWrapperForCombination(combination);
      } else {
        this.setAttributes({ ...this.attributes, ...combination });
        childrenEl += this.addComponentToSheet();
      }
    }
    this.createComponentsMarkupHTML(childrenEl, true);
  }

  public async createMarkupWithCombination(combinations: Record<string, Record<string, any>>, createNewRow = false) {
    if (Object.keys(combinations).length === 0) {
      this.createComponentsMarkupHTML(this.addComponentToSheet());
      return;
    }

    const keys = Object.keys(combinations);
    const values = Object.values(combinations).map(Object.values);

    const allCombinations = this.generateCombinations(keys, values);

    let childrenEl = '';
    for (const combination of allCombinations) {
      if (Array.isArray(combination)) {
        this.createWrapperForCombination(combination);
      } else if (createNewRow) {
        this.setAttributes({ ...this.attributes, ...combination });
        this.createComponentsMarkupHTML(this.addComponentToSheet(), true);
      } else {
        this.setAttributes({ ...this.attributes, ...combination });
        childrenEl += this.addComponentToSheet();
      }
    }

    if (!Array.isArray(allCombinations[0]) && !createNewRow) {
      this.createComponentsMarkupHTML(childrenEl, true);
    }
  }

  /**
   * Mounts the sticker sheet markup onto the page.
   */
  public async mountStickerSheet() {
    await this.componentPage.mount({
      html: `<div class="componentWrapper">${this.markupHTML}</div>`,
      clearDocument: true,
    });
    await this.componentPage.page.waitForTimeout(1000);
    this.markupHTML = '';
  }
}

export default StickerSheet;
