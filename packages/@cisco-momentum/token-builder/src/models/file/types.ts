import type { Filters, Format } from '../../common';

export interface Config {
  destination: string;
  filters: Filters;
  format: Format;
  references?: boolean;
}
