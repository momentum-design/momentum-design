import Searchpopover from './searchpopover.component';
import { TAG_NAME } from './searchpopover.constants';
import '../button';
import '../icon';
import '../text';
import '../popover';

Searchpopover.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-searchpopover']: Searchpopover;
  }
}

export default Searchpopover;
