import path from 'path';

import File from '../file';

import type { Config, Data, Serial } from './types';

class Platform {
  protected data: Data;

  public constructor({ files, group, name }: Config) {
    this.data = {
      files: [],
      group,
      name,
    };

    if (Array.isArray(files)) {
      this.mountFiles(...files);
    }
  }

  public get files(): Array<any> {
    return [...this.data.files];
  }

  public get group(): string {
    return this.data.group;
  }

  public get name(): string {
    return this.data.name;
  }

  public get outputPath(): string {
    return path.join(this.scopeOutputPath, this.name, '/');
  }

  public get scopeOutputPath(): string {
    if (!this.data.scopeOutputPath) {
      throw new Error('no output path');
    }

    return this.data.scopeOutputPath;
  }

  public get serial(): Serial {
    return {
      buildPath: this.outputPath,
      transformGroup: this.group,
      files: this.files.map((file) => file.serial),
    };
  }

  public mountFiles(...files: Array<File>): this {
    files.forEach((file) => {
      if (this.files.includes(file) || file instanceof File === false) {
        return;
      }

      this.data.files.push(file);
    });

    return this;
  }

  public setScopeOutputPath(path: string): this {
    this.data.scopeOutputPath = path;

    return this;
  }
}

export default Platform;
