import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import ResponsiveSettingsContext from './responsiveSettingsContext';
import type {
  ResponsiveMediaType,
  ResponsivePopoverPositions,
  ResponsiveSettings,
} from './responsivesettingsprovider.types';
import { DEFAULTS, VALID_MEDIA_VALUES, VALID_POPOVER_POSITIONING_VALUES } from './responsivesettingsprovider.constants';

/**
 * `mdc-responsivesettingsprovider` is a provider component that supplies responsive settings
 * context to its child components.
 *
 * This component does not make any assumptions about how the values are determined. Values can be set
 * based on media queries or other device detection mechanisms.This way consumer can mix and match
 * different settings depending on their target devices and use cases.
 *
 * For example, when the device has table screen size/resolution, but because it is fixed dialog like
 * popovers provide better user experience.
 *
 * ## Responsive settings
 *
 * ### Media
 *
 * Generic media type to enforce responsive behavior in child components.
 * Consumer component can use the media type from the context or
 * just use CSS selector like [media="mobile"] to apply responsive styles.
 *
 * It is "unknown" by default so components can fall back to there default behavior.
 *
 * ### Popover Positioning
 *
 * By default, popovers are positioned close to the trigger element. But on small screens (e.g.: mobile devices),
 * it is often better to show popovers/menus at the center of the screen like dialogs.
 *
 * ### Force Fullscreen Dialog
 *
 * Some components like dialogs can be shown in fullscreen mode on small screens for better user experience.
 *
 * @tagname mdc-responsivesettingsprovider
 */
class ResponsiveSettingsProvider extends Provider<ResponsiveSettings> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: ResponsiveSettingsContext.context,
      initialValue: new ResponsiveSettingsContext({
        media: DEFAULTS.MEDIA,
        popoverPositioning: DEFAULTS.POPOVER_POSITIONING,
        forceFullscreenDialog: DEFAULTS.FORCE_FULLSCREEN_DIALOG,
      }),
    });
  }

  /**
   * Context object of the ResponsiveSettingsProvider, to be consumed by child components
   */
  public static get Context() {
    return ResponsiveSettingsContext.context;
  }

  /**
   * Determines whether dialogs should be forced to fullscreen mode.
   */
  @property({ type: Boolean, attribute: 'force-fullscreen-dialog', reflect: true })
  forceFullscreenDialog: boolean = DEFAULTS.FORCE_FULLSCREEN_DIALOG;

  /** @internal */
  private privatePopoverPositioning: ResponsivePopoverPositions = DEFAULTS.POPOVER_POSITIONING;

  /**
   * The popover positioning for responsive settings.
   * @default 'float'
   */
  @property({ type: String, attribute: 'popover-positioning', reflect: true })
  set popoverPositioning(value: ResponsivePopoverPositions) {
    if (VALID_POPOVER_POSITIONING_VALUES.includes(value)) {
      this.privatePopoverPositioning = value as ResponsivePopoverPositions;
    }
  }

  get popoverPositioning() {
    return this.privatePopoverPositioning;
  }

  /** @internal */
  private privateMedia: ResponsiveMediaType = DEFAULTS.MEDIA;

  /**
   * The media type for responsive settings.
   * @default 'unknown'
   */
  @property({ type: String, attribute: 'media', reflect: true })
  set media(value: ResponsiveMediaType) {
    if (VALID_MEDIA_VALUES.includes(value)) {
      this.privateMedia = value as ResponsiveMediaType;
    }
  }

  get media() {
    return this.privateMedia;
  }

  protected override updateContext(): void {
    if (
      this.context.value?.media !== this.privateMedia ||
      this.context.value?.popoverPositioning !== this.privatePopoverPositioning ||
      this.context.value?.forceFullscreenDialog !== this.forceFullscreenDialog
    ) {
      this.context.value.media = this.media;
      this.context.value.popoverPositioning = this.popoverPositioning;
      this.context.value.forceFullscreenDialog = this.forceFullscreenDialog;

      this.context.updateObservers();
    }
  }
}

export default ResponsiveSettingsProvider;
