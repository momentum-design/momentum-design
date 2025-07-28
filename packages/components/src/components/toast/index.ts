import Toast from './toast.component';
import { TAG_NAME } from './toast.constants';
import '../icon';
import '../text';
import '../button';
import '../linkbutton';

Toast.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-toast']: Toast
    }
}

export default Toast;
