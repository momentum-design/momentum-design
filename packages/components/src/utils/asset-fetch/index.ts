import { assetsCache } from '../assets-cache';
import type { CacheStrategy } from '../assets-cache';

interface Args {
  url: string;
  name: string;
  fileExtension: string;
  cacheStrategy?: CacheStrategy;
  cacheName?: string;
  renewSignal: () => AbortSignal;
  /**
   * Human readable name of the asset kind, used in error messages only
   * (e.g. `icon`, `illustration`, `brand visual`).
   * @default asset
   */
  assetType?: string;
}

/**
 * Utility function for fetching an asset from the provided `request`.
 * It will throw an error if the response is not ok.
 * @param request - The request object to fetch the asset
 * @param assetType - Human readable name of the asset kind, used in the error message
 * @returns Promise<Response> - The response from the fetch
 * @throws Error if the response is not ok
 */
const fetchAsset = async (request: Request, assetType: string): Promise<Response> =>
  fetch(request).then(response => {
    if (!response.ok) {
      throw new Error(`There was a problem while fetching the ${assetType}!`);
    }
    return response;
  });

// Map of in-flight fetch promises keyed by URL to deduplicate concurrent requests
const pendingFetches = new Map<string, Promise<string>>();

/**
 * Fetches a dynamic SVG asset based on the provided `url`, `name` and `fileExtension`.
 * The fetch is aborted if the signal is aborted.
 *
 * This function also includes the logic to cache the fetched asset using the In Memory Cache or Web Cache API.
 * If the `cacheStrategy` is set to `web-cache-api` or `in-memory-cache` and `cacheName` is provided,
 * the fetched asset will be cached using the respective cache.
 *
 * It will throw an error if the response is not ok.
 *
 * Shared by `mdc-icon`, `mdc-illustration` and `mdc-brandvisual`, all of which resolve assets
 * the same way when their provider is configured with a custom set and a url.
 *
 * @param url - The base url of the asset
 * @param name - The name of the asset
 * @param fileExtension - The file extension of the asset
 * @param signal - The signal to abort the fetch.
 * It is used to cancel the fetch when the component is disconnected or updated.
 * @param cacheStrategy - The cache strategy to use.
 * @param cacheName - The cache name to use.
 * @param assetType - Human readable name of the asset kind, used in error messages.
 *
 * @returns Response string from the fetch
 * @throws Error if the response is not ok
 */
const svgFetch = async ({
  url,
  name,
  fileExtension,
  cacheStrategy,
  cacheName,
  renewSignal,
  assetType = 'asset',
}: Args): Promise<string> => {
  // abort the previous fetch request if it is still pending
  // and create a new signal
  const signal = renewSignal();
  const assetUrl = `${url}/${name}.${fileExtension}`;
  const request = new Request(assetUrl, {
    signal,
  });

  // if there is no cache defined (cacheName and cacheStrategy properly set),
  // fetch the asset and return the response
  if (!cacheName || !cacheStrategy || !['in-memory-cache', 'web-cache-api'].includes(cacheStrategy)) {
    return fetchAsset(request, assetType).then(response => response.text());
  }

  return assetsCache(cacheName, cacheStrategy).then(cache =>
    cache
      .get(request)
      .then(responseFromCache => {
        // **If entry in cache, return**
        if (responseFromCache) {
          return responseFromCache;
        }

        // **Check for in-flight fetch for same URL**
        const pending = pendingFetches.get(assetUrl);
        if (pending) {
          return pending;
        }

        // **Otherwise, fetch and cache if successful**
        // Both fetchAsset() and cache.set() "consume" the request,
        // so we need to make a copy.
        // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
        const fetchPromise = fetchAsset(new Request(assetUrl), assetType)
          .then(response => {
            // This avoids caching responses that we know are errors
            // (i.e. HTTP status code of 4xx or 5xx).
            if (response.status < 400 && response.headers.has('content-type')) {
              // Call .clone() on the response to save copy to cache.
              // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
              return cache.set?.(request, response.clone()).then(() => response.text());
            }
            return response.text();
          })
          .finally(() => {
            pendingFetches.delete(assetUrl);
          });
        pendingFetches.set(assetUrl, fetchPromise);
        return fetchPromise;
      })
      .catch(error => {
        // Note that a HTTP error response (e.g. 404) will NOT trigger
        // an exception.
        // It will return a normal response object that has the appropriate
        // error code set.
        throw new Error(`Error in caching the ${assetType} ${name}, ${error}`);
      }),
  );
};

export { svgFetch };
