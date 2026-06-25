// AI-Assisted
import '../icon';
import '../text';
import StatusMessage from './statusmessage.component';
import { TAG_NAME } from './statusmessage.constants';

StatusMessage.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-statusmessage']: StatusMessage;
  }
}

export default StatusMessage;
// End AI-Assisted
