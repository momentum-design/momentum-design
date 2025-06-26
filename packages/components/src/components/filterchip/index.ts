import FilterChip from './filterchip.component';
import { TAG_NAME } from './filterchip.constants';
import '../text';
import '../icon';

FilterChip.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-filterchip']: FilterChip;
  }
}

export default FilterChip;
