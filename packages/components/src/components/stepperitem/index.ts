import StepperItem from './stepperitem.component';
import { TAG_NAME } from './stepperitem.constants';
import '../icon';
import '../text';

StepperItem.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-stepperitem']: StepperItem
    }
}

export default StepperItem;
