import ButtonLink from './buttonlink.component';
import { TAG_NAME } from './buttonlink.constants';
import '../icon';

ButtonLink.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-buttonlink']: ButtonLink;
  }
}

export default ButtonLink;
