import Card from './card.component';
import { TAG_NAME } from './card.constants';

Card.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-card']: Card
    }
}

export default Card;
