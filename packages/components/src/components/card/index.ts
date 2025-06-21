import Card from './card.component';
import { TAG_NAME } from './card.constants';
import '../icon';
import '../text';

Card.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-card']: Card;
  }
}

export default Card;
