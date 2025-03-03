import Textarea from './textarea.component';
import { TAG_NAME } from './textarea.constants';
import '../button';

Textarea.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-textarea']: Textarea
    }
}

export default Textarea;
