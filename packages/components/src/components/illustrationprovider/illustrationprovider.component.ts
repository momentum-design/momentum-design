import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import IllustrationProviderContext from './illustrationprovider.context';
import { ALLOWED_FILE_EXTENSIONS, DEFAULTS } from './illustrationprovider.constants';
import type { CacheStrategy, IllustrationSet } from './illustrationprovider.types';

/**
 * IllustrationProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * Attribute `illustrationSet` can be set to either `momentum-illustrations` or `custom-illustrations`.
 * If `momentum-illustrations` is selected, the illustrations will be fetched from the
 * Momentum Design System illustration set per a dynamic JS Import (no need to provide a URL).
 * This requires the consumer to have the `@momentum-design/illustrations` package installed and the
 * build tooling needs to support dynamic imports.
 *
 * If `custom-illustrations` is selected, the illustrations will be fetched from the provided URL.
 * This requires the consumer to provide a URL from which the illustrations will be fetched and
 * the consumer needs to make sure to bundle the illustrations in the application.
 *
 * If `cacheStrategy` is provided (only works with illustrationSet = `custom-illustrations`), the
 * IllustrationProvider will cache the illustrations in the selected cache (either web-api-cache or in-memory-cache),
 * to avoid fetching the same illustration multiple times over the network.
 * This is useful when the same illustration is used multiple times in the application.
 * To consider:
 * - The `in-memory-cache` is not persisted and will be lost when the
 * IllustrationProvider is removed from the DOM.
 * - The `web-api-cache` is persisted, but only works in https environments
 * (https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @tagname mdc-illustrationprovider
 *
 * @slot - children
 */
class IllustrationProvider extends Provider<IllustrationProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: IllustrationProviderContext.context,
      initialValue: new IllustrationProviderContext(),
    });
  }

  /**
   * Context object of the IllustrationProviderContext, to be consumed by child components
   */
  public static get Context() {
    return IllustrationProviderContext.context;
  }

  /**
   * Illustration set to be used
   *
   * If `momentum-illustrations` is selected, the illustrations will be fetched from the
   * Momentum Design System illustration set per a dynamic JS Import (no need to provide a URL).
   * This requires the consumer to have the `@momentum-designs` package installed and the
   * build tooling needs to support dynamic imports.
   *
   * If `custom-illustrations` is selected, the illustrations will be fetched from the provided URL.
   * This requires the consumer to provide a URL from which the illustrations will be fetched and
   * the consumer needs to make sure to bundle the illustrations in the application.
   *
   * @default momentum-illustrations
   */
  @property({ type: String, attribute: 'illustration-set', reflect: true })
  illustrationSet?: IllustrationSet = DEFAULTS.ILLUSTRATION_SET;

  /**
   * Url of where illustrations will be fetched from
   * (if Illustration set is `custom-illustrations`, this will be the base url)
   */
  @property({ type: String })
  url?: string;

  /**
   * File extension of illustrations
   * (if Illustration set is `custom-illustrations`, this will be the file extension for illustrations)
   * @default svg
   */
  @property({ type: String, attribute: 'file-extension', reflect: true })
  fileExtension?: string = DEFAULTS.FILE_EXTENSION;

  /**
   * Illustrations Cache Strategy to use
   *
   * **Can only be used if Illustration set is `custom-illustrations`**
   *
   * Choose `in-memory-cache` to cache illustrations in a JS cache (in-memory cache).
   * Choose `web-cache-api` to cache illustrations using the Web Cache API.
   *
   * NOTE: `cache-name` must be provided if `cache-strategy` is provided.
   *
   * If not provided or invalid value provided, the illustrations will not be cached.
   * @default undefined
   */
  @property({ type: String, attribute: 'cache-strategy' })
  cacheStrategy?: CacheStrategy;

  /**
   * Illustrations Cache Name to use (cache strategy must be provided)
   *
   * If provided, Illustrations inside the provider will be cached in the
   * cache (determined by `cache-strategy`) with the provided name.
   *
   * Illustrations cache name must be unique, independent from other asset caches.
   *
   * NOTE: `cache-name` requires `cache-strategy` to be set.
   *
   * If not provided, the illustrations will not be cached.
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
    this.context.value.illustrationSet = this.illustrationSet;
    this.context.value.url = this.url;
    this.context.value.cacheName = this.cacheName;
    this.context.value.cacheStrategy = this.cacheStrategy;
  }

  protected updateContext(): void {
    if (
      this.context.value.fileExtension !== this.fileExtension ||
      this.context.value.illustrationSet !== this.illustrationSet ||
      this.context.value.url !== this.url ||
      this.context.value.cacheName !== this.cacheName ||
      this.context.value.cacheStrategy !== this.cacheStrategy
    ) {
      this.updateValuesInContext();
      this.context.updateObservers();
    }
  }
}
export default IllustrationProvider;
