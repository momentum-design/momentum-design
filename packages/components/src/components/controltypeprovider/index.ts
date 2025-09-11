import ControlTypeProvider from './controltypeprovider.component';
import { TAG_NAME } from './controltypeprovider.constants';

ControlTypeProvider.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-controltypeprovider']: ControlTypeProvider;
  }
}

export default ControlTypeProvider;
