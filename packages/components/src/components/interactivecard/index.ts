import InteractiveCard from './interactivecard.component';
import { TAG_NAME } from './interactivecard.constants';

InteractiveCard.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-interactive-card']: InteractiveCard
    }
}

export default InteractiveCard;
