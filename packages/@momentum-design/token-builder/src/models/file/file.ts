import { File as SDFile, TransformedToken } from 'style-dictionary';

import { CONSTANTS } from '../../common';

import type { Config } from './types';

/**
 * This class represents the output item generated by
 * the token builder.
 * @public
 */
class File {
  protected config: Config;

  /**
   * Constructor
   * @param config - configuration for the file
   */
  public constructor(config: Config) {
    this.config = structuredClone(config);
  }

  /**
   * getter method to list all the categories in this file.
   * @returns array with categories.
   */
  public get categories(): Array<string> {
    const { categories } = this.config.filters || {};

    return categories ? [...categories] : [];
  }

  public get destination(): string {
    return this.config.destination;
  }

  public get extension(): string {
    return CONSTANTS.FORMATS[this.config.format].EXTENSION;
  }

  public get file(): string {
    return `${this.destination}.${this.extension}`;
  }

  public get format(): string {
    return CONSTANTS.FORMATS[this.config.format].FORMAT;
  }

  public get filter(): (token: TransformedToken) => boolean {
    const { categories, items, types } = this;

    return (token: TransformedToken): boolean => {
      const matchesCategory = categories.length > 0 ? categories.includes(token?.attributes?.category ?? 'none') : true;
      const matchesItems = items.length > 0 ? items.includes(token?.attributes?.item ?? 'none') : true;
      const matchesTypes = types.length > 0 ? types.includes(token?.attributes?.type ?? 'none') : true;

      return matchesCategory && matchesItems && matchesTypes;
    };
  }

  public get items(): Array<string> {
    const { items } = this.config.filters || {};

    return items ? [...items] : [];
  }

  public get sdConfig(): SDFile {
    return {
      destination: this.file,
      format: this.format,
      filter: this.filter,
      options: {
        outputReferences: this.references,
        selector: this.selector,
        showFileHeader: this.showFileHeader,
        themeable: this.scssThemeable,
        accessControl: this.iosAccessControl,
        import: this.iosImport,
        objectType: this.iosObjectType,
      },
    };
  }

  public get references(): boolean {
    return this.config.outputReferences || false;
  }

  public get selector(): string | undefined {
    return this.config.cssSelector || undefined;
  }

  public get showFileHeader(): boolean {
    return this.config.showFileHeader || true;
  }

  public get scssThemeable(): boolean {
    return this.config.scssThemeable || false;
  }

  public get iosAccessControl(): string | undefined {
    return this.config.iosAccessControl || undefined;
  }

  public get iosImport(): string | Array<String> | undefined  {
    return this.config.iosImport || undefined;
  }

  public get iosObjectType(): string | undefined  {
    return this.config.iosObjectType || undefined;
  }

  public get types(): Array<string> {
    const { types } = this.config.filters || {};

    return types ? [...types] : [];
  }
}

export default File;
