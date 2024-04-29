import type { Filters, Format } from '../../common';

export interface Config {
  destination: string;
  filters?: Filters;
  format: Format;
  cssSelector?: string;
  outputReferences?: boolean;
  showFileHeader?: boolean;
  scssThemeable?: boolean;
  iosAccessControl?: string;
  iosImport?: string | Array<string>;
  iosObjectType?: string;
}
