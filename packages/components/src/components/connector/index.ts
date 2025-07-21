import Connector from './connector.component';
import { TAG_NAME } from './connector.constants';

Connector.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-connector']: Connector;
  }
}

export default Connector;
