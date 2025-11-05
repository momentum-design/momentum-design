import utils from '../../utils/tag-name';

import { ResponsiveMediaType, ResponsivePopoverPositions } from './responsivesettingsprovider.types';

export const TAG_NAME = utils.constructTagName('responsivesettingsprovider');

export const DEFAULTS = {
  FORCE_FULLSCREEN_DIALOG: false,
  POPOVER_POSITIONING: 'float',
  MEDIA: 'unknown',
} as const;

export const VALID_POPOVER_POSITIONING_VALUES: ResponsivePopoverPositions[] = ['float', 'dialog'] as const;
export const VALID_MEDIA_VALUES: ResponsiveMediaType[] = ['unknown', 'mobile', 'desktop', 'tablet'] as const;
