import { createContext } from '@lit/context';

import { DEFAULTS, TAG_NAME } from './responsivesettingsprovider.constants';
import {
  ResponsiveMediaType,
  ResponsivePopoverPositions,
  ResponsiveSettings,
} from './responsivesettingsprovider.types';

class ResponsiveSettingsContext {
  public media: ResponsiveMediaType = DEFAULTS.MEDIA;

  public forceFullscreenDialog: boolean = DEFAULTS.FORCE_FULLSCREEN_DIALOG;

  public popoverPositioning: ResponsivePopoverPositions = DEFAULTS.POPOVER_POSITIONING;

  // create typed lit context as part of the ThemeProviderContext
  public static context = createContext<ResponsiveSettings>(TAG_NAME);

  // constructor to allow setting the defaultThemeClass
  constructor(options: Partial<ResponsiveSettings> = {}) {
    Object.assign(this, options); // assign provided options to
  }
}
export default ResponsiveSettingsContext;
