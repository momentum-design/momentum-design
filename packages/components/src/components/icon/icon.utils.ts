import { assetsCache } from '../../utils/assets-cache';
import type { CacheStrategy } from '../../utils/assets-cache';

interface Args {
  url: string;
  name: string;
  fileExtension: string;
  cacheStrategy?: CacheStrategy;
  cacheName?: string;
  renewSignal: () => AbortSignal;
}

/**
 * Utility function for fetching the icon from the provided `request`.
 * It will throw an error if the response is not ok.
 * @param request - The request object to fetch the icon
 * @returns Promise<Response> - The response from the fetch
 * @throws Error if the response is not ok
 */
const fetchIcon = async (request: Request): Promise<Response> =>
  fetch(request).then(response => {
    if (!response.ok) {
      throw new Error('There was a problem while fetching the icon!');
    }
    return response;
  });

/**
 * Fetches a dynamic SVG icon based on the provided `url`, `name` and `fileExtension`.
 * The fetch is aborted if the signal is aborted.
 *
 * This function also includes the logic to cache the fetched icon using the In Memory Cache or Web Cache API.
 * If the `cacheStrategy` is set to `web-cache-api` or `in-memory-cache` and `cacheName` is provided,
 * the fetched icon will be cached using the respective cache.
 *
 * It will throw an error if the response is not ok.
 *
 * @param url - The base url of the icon
 * @param name - The name of the icon
 * @param fileExtension - The file extension of the icon
 * @param signal - The signal to abort the fetch.
 * It is used to cancel the fetch when the component is disconnected or updated.
 * @param cacheStrategy - The cache strategy to use.
 * @param cacheName - The cache name to use.
 *
 * @returns Response string from the fetch
 * @throws Error if the response is not ok
 */
const svgFetch = async ({ url, name, fileExtension, cacheStrategy, cacheName, renewSignal }: Args): Promise<string> => {
  // abort the previous fetch request if it is still pending
  // and create a new signal
  const signal = renewSignal();
  const request = new Request(`${url}/${name}.${fileExtension}`, {
    signal,
  });

  // if there is no cache defined (cacheName and cacheStrategy properly set),
  // fetch the icon and return the response
  if (!cacheName || !cacheStrategy || !['in-memory-cache', 'web-cache-api'].includes(cacheStrategy)) {
    return fetchIcon(request).then(response => response.text());
  }

  return assetsCache(cacheName, cacheStrategy).then(iconsCache =>
    iconsCache
      .get(request)
      .then(responseFromCache => {
        // **If entry in cache, return**
        if (responseFromCache) {
          return responseFromCache;
        }

        // **Otherwise, fetch and cache if successful**
        // Both fetchIcon() and iconsCache.set() "consume" the request,
        // so we need to make a copy.
        // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
        return fetchIcon(request.clone()).then(response => {
          // This avoids caching responses that we know are errors
          // (i.e. HTTP status code of 4xx or 5xx).
          if (response.status < 400 && response.headers.has('content-type')) {
            // Call .clone() on the response to save copy to cache.
            // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
            return iconsCache.set?.(request, response.clone()).then(() => response.text());
          }
          return response.text();
        });
      })
      .catch(error => {
        // Note that a HTTP error response (e.g. 404) will NOT trigger
        // an exception.
        // It will return a normal response object that has the appropriate
        // error code set.
        throw new Error(`Error in caching the Icon ${name}, ${error}`);
      }),
  );
};

export { svgFetch };
