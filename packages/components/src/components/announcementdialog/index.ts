import Announcementdialog from './announcementdialog.component';
import { TAG_NAME } from './announcementdialog.constants';
import '../illustration';
import '../text';

Announcementdialog.register(TAG_NAME);

declare global {
  interface HTMLElementTagNameMap {
    ['mdc-announcementdialog']: Announcementdialog;
  }
}

export default Announcementdialog;
