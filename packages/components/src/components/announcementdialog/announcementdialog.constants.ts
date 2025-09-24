import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('announcementdialog');

const ANNOUNCEMENT_DIALOG_SIZE = ['medium', 'large', 'xlarge', 'fullscreen'] as const;

const DEFAULTS = {
  SIZE: 'medium',
} as const;

export { TAG_NAME, DEFAULTS, ANNOUNCEMENT_DIALOG_SIZE };
