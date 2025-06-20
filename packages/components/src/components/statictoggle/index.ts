import '../icon';
import StaticToggle from './statictoggle.component';
import { TAG_NAME } from './statictoggle.constants';

StaticToggle.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-statictoggle']: StaticToggle;
  }
}

export default StaticToggle;
