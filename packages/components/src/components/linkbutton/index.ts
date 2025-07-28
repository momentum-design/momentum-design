import LinkButton from './linkbutton.component';
import { TAG_NAME } from './linkbutton.constants';
import '../icon';

LinkButton.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-linkbutton']: LinkButton
    }
}

export default LinkButton;
