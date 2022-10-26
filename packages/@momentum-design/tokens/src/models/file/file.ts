import type { TransformedToken } from 'style-dictionary';

import CONSTANTS from './constants';
import type { Config, Data, Scope, Serial } from './types';

class File {
  protected data: Data;

  public constructor({ categories, items, types, ...config }: Config) {
    this.data = {
      categories: [],
      items: [],
      types: [],
      ...config,
    };

    this.mountFileScopes({ list: categories, scope: CONSTANTS.FILE_SCOPES.CATEGORIES });
    this.mountFileScopes({ list: items ?? [], scope: CONSTANTS.FILE_SCOPES.ITEMS });
    this.mountFileScopes({ list: types ?? [], scope: CONSTANTS.FILE_SCOPES.TYPES });
  }

  protected mountFileScopes({ list, scope }: { list: Array<string>, scope: Scope }): this {
    if (!Array.isArray(list)) {
      return this;
    }

    list.forEach((item): void => {
      if (this[scope].includes(item) || typeof item !== 'string') {
        return;
      }

      this.data[scope].push(item);
    });

    return this;
  }

  public get categories(): Array<string> {
    return [...this.data.categories];
  }

  public get destination(): string {
    return `${this.data.name}.${this.data.extension}`;
  }

  public get extension(): string {
    return this.data.extension;
  }

  public get format(): string {
    return this.data.format;
  }

  public get items(): Array<string> {
    return [...this.data.items];
  }

  public get name(): string {
    return this.data.name;
  }

  public get serial(): Serial {
    return {
      destination: this.destination,
      format: this.format,
      filter: this.filter(),
    };
  }

  public get types(): Array<string> {
    return [...this.data.types];
  }

  public filter(): (token: TransformedToken) => boolean {
    const { categories, items, types } = this;

    return (token) => {
      const matchesCategory = categories.includes(token?.attributes?.category ?? 'none');
      const matchesType = types.length > 0 ? types.includes(token?.attributes?.type ?? 'none') : true;
      const matchesItem = items.length > 0 ? items.includes(token?.attributes?.item ?? 'none') : true;

      return matchesCategory && matchesType && matchesItem;
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default File;
