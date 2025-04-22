import CardButton from './cardbutton.component';
import { TAG_NAME } from './cardbutton.constants';

CardButton.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-cardbutton']: CardButton
    }
}

export default CardButton;
