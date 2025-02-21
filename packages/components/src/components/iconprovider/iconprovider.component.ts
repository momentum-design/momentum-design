import { property } from 'lit/decorators.js';
import { Provider } from '../../models';
import IconProviderContext from './iconprovider.context';
import { ALLOWED_FILE_EXTENSIONS, DEFAULTS, ALLOWED_LENGTH_UNITS } from './iconprovider.constants';

/**
 * IconProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * Bundling icons will be up to the consumer of this component, such
 * that only a url has to be passed in from which the icons will be
 * fetched.
 *
 * If `cacheStrategy` is provided, the IconProvider will cache the icons
 * in the selected cache (either web-api-cache or js-cache),
 * to avoid fetching the same icon multiple times over the network.
 * This is useful when the same icon is used multiple times in the application.
 * To consider:
 * - The `js-cache` is not persisted and will be lost when the
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
   * Url of where icons will be fetched from
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of icons
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
   * Choose `js-cache` to cache icons in a JS cache (in-memory cache).
   * Choose `web-cache-api` to cache icons using the Web Cache API.
   *
   * NOTE: `cache-name` must be provided if `cache-strategy` is provided.
   *
   * If not provided or invalid value provided, the icons will not be cached.
   * @default undefined
   */
  @property({ type: String, attribute: 'cache-strategy' })
  cacheStrategy?: 'js-cache' | 'web-cache-api';

  /**
   * Icons Cache Name to use
   *
   * If provided, Icons inside the provider will be cached in the
   * cache (determined by `cache-strategy`) with the provided name.
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
      this.context.value.fileExtension !== this.fileExtension
      || this.context.value.url !== this.url
      || this.context.value.lengthUnit !== this.lengthUnit
      || this.context.value.size !== this.size
      || this.context.value.cacheName !== this.cacheName
      || this.context.value.cacheStrategy !== this.cacheStrategy
    ) {
      this.updateValuesInContext();
      this.context.updateObservers();
    }
  }
}
export default IconProvider;
