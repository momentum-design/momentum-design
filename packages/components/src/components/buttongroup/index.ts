import ButtonGroup from './buttongroup.component';
import { TAG_NAME } from './buttongroup.constants';

ButtonGroup.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-buttongroup']: ButtonGroup;
  }
}

export default ButtonGroup;
