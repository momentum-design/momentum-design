/**
 * Defines the type of media device.
 * - 'unknown' - Represents an unknown device type.
 * - 'desktop' - Represents desktop devices.
 * - 'tablet' - Represents tablet devices.
 * - 'mobile' - Represents mobile devices.
 */
export type ResponsiveMediaType = 'unknown' | 'mobile' | 'desktop' | 'tablet';

/**
 * Defines how popovers are positioned within the dialog.
 * - 'float': Popovers are positioned next to the triggering element.
 * - 'dialog': Popovers are positioned at the center of the scree like dialogs.
 */
export type ResponsivePopoverPositions = 'float' | 'dialog';

/**
 * Context type for ResponsiveSettingsProvider, combining responsive settings options with the current media type.
 */
export type ResponsiveSettings = {
  /** Unique identifier of the responsive settings provider component. */
  id: string;
  /** Enforced media device type. */
  media: ResponsiveMediaType;
  /** If true, dialogs will be forced to fullscreen mode on small screens. */
  forceFullscreenDialog: boolean;
  /** Defines how popovers are positioned. */
  popoverPositioning: ResponsivePopoverPositions;
};
