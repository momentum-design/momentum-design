import FilterChip from './filterchip.component';
import { TAG_NAME } from './filterchip.constants';

FilterChip.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-filterchip']: FilterChip
    }
}

export default FilterChip;
