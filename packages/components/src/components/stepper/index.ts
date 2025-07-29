import Stepper from './stepper.component';
import { TAG_NAME } from './stepper.constants';

Stepper.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-stepper']: Stepper;
  }
}

export default Stepper;
