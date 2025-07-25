import Connector from './stepperconnector.component';
import { TAG_NAME } from './stepperconnector.constants';

Connector.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-stepperconnector']: Connector;
  }
}

export default Connector;
