import { webAPIIconsCache } from '../../utils/icon-cache';

interface Args {
  url: string;
  name: string;
  fileExtension: string;
  cacheStrategy?: string;
  cacheName?: string;
  signal?: AbortSignal;
}

/**
 * Fetches a dynamic SVG icon based on the provided `url`, `name` and `fileExtension`.
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
const dynamicSVGImport = async ({
  url,
  name,
  fileExtension,
  cacheStrategy,
  cacheName,
  signal,
}: Args): Promise<string> => {
  const request = new Request(`${url}/${name}.${fileExtension}`);

  // if cacheStrategy is not web-cache-api or cacheName is not defined, fetch the icon normally
  if (cacheStrategy !== 'web-cache-api' || !cacheName) {
    return fetch(request, { signal }).then((response) => {
      if (!response.ok) {
        throw new Error('There was a problem while fetching the icon!');
      }
      return response.text();
    });
  }

  return webAPIIconsCache(cacheName).then((iconsCache) =>
    iconsCache
      .get(request)
      .then((responseFromCache) => {
        // If there is an entry in the cache for the request,
        // then response will be defined and we can just return it.
        if (responseFromCache) {
          return responseFromCache;
        }

        // Otherwise, if there is no entry in the cache for the request,
        // response will be undefined, and we need to fetch() the resource.

        // We call .clone() on the request since we might use it
        // in a call to cache.put() later on.
        // Both fetch() and cache.put() "consume" the request,
        // so we need to make a copy.
        // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
        return fetch(request.clone(), { signal }).then((response) => {
          if (!response.ok) {
            throw new Error('There was a problem while fetching the icon!');
          }
          // This avoids caching responses that we know are errors
          // (i.e. HTTP status code of 4xx or 5xx).
          if (response.status < 400 && response.headers.has('content-type')) {
            // We call .clone() on the response to save a copy of it
            // to the cache. By doing so, we get to keep the original
            // response object which we will return its text back to the
            // controlled page.
            // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
            return iconsCache.set(request, response.clone()).then(() => response.text());
          }

          // Return the original response object, which will be used to
          // fulfill the promise.
          return response.text();
        });
      })
      .catch((error) => {
        // This catch() will handle exceptions that arise from the match()
        // or fetch() operations.
        // Note that a HTTP error response (e.g. 404) will NOT trigger
        // an exception.
        // It will return a normal response object that has the appropriate
        // error code set.
        throw new Error(`Error in caching the Icon ${name}, ${error}`);
      }));
};

export { dynamicSVGImport };
