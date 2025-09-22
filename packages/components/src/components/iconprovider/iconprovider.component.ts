import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import IconProviderContext from './iconprovider.context';
import { ALLOWED_FILE_EXTENSIONS, DEFAULTS, ALLOWED_LENGTH_UNITS } from './iconprovider.constants';
import type { CacheStrategy, IconSet } from './iconprovider.types';

/**
 * IconProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * Attribute `iconSet` can be set to either `momentum-icons` or `custom-icons`.
 * If `momentum-icons` is selected, the icons will be fetched from the
 * Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
 * This requires the consumer to have the `@momentum-design/icons` package installed and the
 * build tooling needs to support dynamic imports.
 *
 * If `custom-icons` is selected, the icons will be fetched from the provided URL.
 * This requires the consumer to provide a URL from which the icons will be fetched and
 * the consumer needs to make sure to bundle the icons in the application.
 *
 * If `cacheStrategy` is provided (only works with iconSet = `custom-icons`), the
 * IconProvider will cache the icons in the selected cache (either web-api-cache or in-memory-cache),
 * to avoid fetching the same icon multiple times over the network.
 * This is useful when the same icon is used multiple times in the application.
 * To consider:
 * - The `in-memory-cache` is not persisted and will be lost when the
 * IconProvider is removed from the DOM.
 * - The `web-api-cache` is persisted, but only works in https environments
 * (https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @tagname mdc-iconprovider
 *
 * @slot - children
 */
class IconProvider extends Provider<IconProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: IconProviderContext.context,
      initialValue: new IconProviderContext(),
    });
  }

  /**
   * Context object of the IconProvider, to be consumed by child components
   */
  public static get Context() {
    return IconProviderContext.context;
  }

  /**
   * Icon set to be used
   *
   * If `momentum-icons` is selected, the icons will be fetched from the
   * Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
   * This requires the consumer to have the `@momentum-designs` package installed and the
   * build tooling needs to support dynamic imports.
   *
   * If `custom-icons` is selected, the icons will be fetched from the provided URL.
   * This requires the consumer to provide a URL from which the icons will be fetched and
   * the consumer needs to make sure to bundle the icons in the application.
   *
   * @default momentum-icons
   */
  @property({ type: String, attribute: 'icon-set', reflect: true })
  iconSet?: IconSet = DEFAULTS.ICON_SET;

  /**
   * Url of where icons will be fetched from
   * (if Icon set is `custom-icons`, this will be the base url)
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of icons
   * (if Icon set is `custom-icons`, this will be the file extension for icons)
   * @default svg
   */
  @property({ type: String, attribute: 'file-extension', reflect: true })
  fileExtension?: string = DEFAULTS.FILE_EXTENSION;

  /**
   * Length unit used for sizing of icons
   * @default em
   */
  @property({ type: String, attribute: 'length-unit', reflect: true })
  lengthUnit: string = DEFAULTS.LENGTH_UNIT;

  /**
   * The default size of the icon.
   * If not set, it falls back to the size defined by the length unit.
   * @default 1
   */
  @property({ type: Number, reflect: true })
  size?: number = DEFAULTS.SIZE;

  /**
   * Icons Cache Strategy to use
   *
   * **Can only be used if Icon set is `custom-icons`**
   *
   * Choose `in-memory-cache` to cache icons in a JS cache (in-memory cache).
   * Choose `web-cache-api` to cache icons using the Web Cache API.
   *
   * NOTE: `cache-name` must be provided if `cache-strategy` is provided.
   *
   * If not provided or invalid value provided, the icons will not be cached.
   * @default undefined
   */
  @property({ type: String, attribute: 'cache-strategy' })
  cacheStrategy?: CacheStrategy;

  /**
   * Icons Cache Name to use (cache strategy must be provided)
   *
   * If provided, Icons inside the provider will be cached in the
   * cache (determined by `cache-strategy`) with the provided name.
   *
   * Icons cache name must be unique, independent from other asset caches.
   *
   * NOTE: `cache-name` requires `cache-strategy` to be set.
   *
   * If not provided, the icons will not be cached.
   * @default undefined
   */
  @property({ type: String, attribute: 'cache-name' })
  cacheName?: string;

  private updateValuesInContext() {
    // only update fileExtension on context if its an allowed fileExtension
    if (this.fileExtension && ALLOWED_FILE_EXTENSIONS.includes(this.fileExtension)) {
      this.context.value.fileExtension = this.fileExtension;
    } else {
      // Ensure both fileExtension and context are updated to the default if its not an allowed fileExtension
      this.fileExtension = DEFAULTS.FILE_EXTENSION;
      this.context.value.fileExtension = DEFAULTS.FILE_EXTENSION;
    }
    this.context.value.iconSet = this.iconSet;
    this.context.value.url = this.url;
    this.context.value.size = this.size;
    this.context.value.cacheName = this.cacheName;
    this.context.value.cacheStrategy = this.cacheStrategy;

    if (this.lengthUnit && ALLOWED_LENGTH_UNITS.includes(this.lengthUnit)) {
      this.context.value.lengthUnit = this.lengthUnit;
    } else {
      // Ensure both lengthUnit and context are updated to the default if its not an allowed lengthUnit
      this.lengthUnit = DEFAULTS.LENGTH_UNIT;
      this.context.value.lengthUnit = DEFAULTS.LENGTH_UNIT;
    }
  }

  protected updateContext(): void {
    if (
      this.context.value.fileExtension !== this.fileExtension ||
      this.context.value.iconSet !== this.iconSet ||
      this.context.value.url !== this.url ||
      this.context.value.lengthUnit !== this.lengthUnit ||
      this.context.value.size !== this.size ||
      this.context.value.cacheName !== this.cacheName ||
      this.context.value.cacheStrategy !== this.cacheStrategy
    ) {
      this.updateValuesInContext();
      this.context.updateObservers();
    }
  }
}
export default IconProvider;
