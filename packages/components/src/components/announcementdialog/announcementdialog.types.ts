import type { Events as DialogEvents } from '../dialog/dialog.types';

import { ANNOUNCEMENT_DIALOG_SIZE } from './announcementdialog.constants';

type AnnouncementDialogSize = (typeof ANNOUNCEMENT_DIALOG_SIZE)[number];

interface Events extends DialogEvents {}

export type { Events, AnnouncementDialogSize };
