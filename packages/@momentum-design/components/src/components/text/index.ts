import Text from './text.component';
import { TAG_NAME } from './text.constants';

Text.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-text']: Text
    }
}

export default Text;
