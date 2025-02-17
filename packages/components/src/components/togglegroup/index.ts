import ToggleGroup from './togglegroup.component';
import { TAG_NAME } from './togglegroup.constants';

ToggleGroup.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-togglegroup']: ToggleGroup
    }
}

export default ToggleGroup;
