import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import BrandVisualProviderContext from './brandvisualprovider.context';
import { ALLOWED_FILE_EXTENSIONS, DEFAULTS } from './brandvisualprovider.constants';
import type { BrandVisualSet, CacheStrategy } from './brandvisualprovider.types';

/**
 * @tagname mdc-brandvisualprovider
 *
 * @slot - children
 */
class BrandVisualProvider extends Provider<BrandVisualProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: BrandVisualProviderContext.context,
      initialValue: new BrandVisualProviderContext(),
    });
  }

  /**
   * Context object of the BrandVisualProviderContext, to be consumed by child components
   */
  public static get Context() {
    return BrandVisualProviderContext.context;
  }

  /**
   * Brand visual set to be used
   *
   * If `momentum-brand-visuals` is selected, the brand visuals will be fetched from the
   * Momentum Design System brand visual set per a dynamic JS Import (no need to provide a URL).
   * This requires the consumer to have the `@momentum-design/brand-visuals` package installed and the
   * build tooling needs to support dynamic imports.
   *
   * If `custom-brand-visuals` is selected, the brand visuals will be fetched from the provided URL.
   * This requires the consumer to provide a URL from which the brand visuals will be fetched and
   * the consumer needs to make sure to bundle the brand visuals in the application.
   *
   * @default momentum-brand-visuals
   */
  @property({ type: String, attribute: 'brand-visual-set', reflect: true })
  brandVisualSet?: BrandVisualSet = DEFAULTS.BRAND_VISUAL_SET;

  /**
   * Url of where brand visuals will be fetched from
   * (if Brand visual set is `custom-brand-visuals`, this will be the base url)
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of brand visuals
   * (if Brand visual set is `custom-brand-visuals`, this will be the file extension for brand visuals)
   *
   * `svg` visuals are fetched and inlined, `png` visuals are set as the `src` of an `img` element.
   * Note that the two sets are not interchangeable: the device visuals only ship as `png`,
   * every other visual only ships as `svg`.
   *
   * @default svg
   */
  @property({ type: String, attribute: 'file-extension', reflect: true })
  fileExtension?: string = DEFAULTS.FILE_EXTENSION;

  /**
   * Brand visuals Cache Strategy to use
   *
   * **Can only be used if Brand visual set is `custom-brand-visuals` and the file extension is `svg`**
   * (`png` visuals are loaded by the browser through an `img` element and are subject to the
   * regular HTTP cache instead).
   *
   * Choose `in-memory-cache` to cache brand visuals in a JS cache (in-memory cache).
   * Choose `web-cache-api` to cache brand visuals using the Web Cache API.
   *
   * NOTE: `cache-name` must be provided if `cache-strategy` is provided.
   *
   * If not provided or invalid value provided, the brand visuals will not be cached.
   * @default undefined
   */
  @property({ type: String, attribute: 'cache-strategy' })
  cacheStrategy?: CacheStrategy;

  /**
   * Brand visuals Cache Name to use (cache strategy must be provided)
   *
   * If provided, Brand visuals inside the provider will be cached in the
   * cache (determined by `cache-strategy`) with the provided name.
   *
   * Brand visuals cache name must be unique, independent from other asset caches.
   *
   * NOTE: `cache-name` requires `cache-strategy` to be set.
   *
   * If not provided, the brand visuals will not be cached.
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
    this.context.value.brandVisualSet = this.brandVisualSet;
    this.context.value.url = this.url;
    this.context.value.cacheName = this.cacheName;
    this.context.value.cacheStrategy = this.cacheStrategy;
  }

  protected override updateContext(): void {
    if (
      this.context.value.fileExtension !== this.fileExtension ||
      this.context.value.brandVisualSet !== this.brandVisualSet ||
      this.context.value.url !== this.url ||
      this.context.value.cacheName !== this.cacheName ||
      this.context.value.cacheStrategy !== this.cacheStrategy
    ) {
      this.updateValuesInContext();
      this.context.updateObservers();
    }
  }
}
export default BrandVisualProvider;
