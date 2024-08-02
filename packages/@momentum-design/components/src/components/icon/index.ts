import Icon from './icon.component';
import { TAG_NAME } from './icon.constants';

Icon.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-icon']: Icon
    }
}

export default Icon;
