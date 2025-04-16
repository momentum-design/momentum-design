import Card from './card.component';
import { TAG_NAME } from './card.constants';
import '../icon';
import '../text';
import '../link';
import '../button';

Card.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-card']: Card
    }
}

export default Card;
