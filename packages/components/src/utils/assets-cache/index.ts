type AssetCache = Map<string, string>;
type Registry = Record<string, AssetCache>;
export type CacheStrategy = 'in-memory-cache' | 'web-cache-api';

const registry: Registry = {};

/**
 * Cache, using In-Memory Cache (Map)
 * @param name - name of the cache (used as an identifier)
 * @returns Object with set, get and delete methods
 */
export const inMemoryCache = async (name: string) => {
  if (registry[name] === undefined) {
    registry[name] = new Map();
  }

  return {
    async set(request: Request, response: Response) {
      registry[name].set(request.url, await response.text());
    },
    async get(request: Request) {
      return registry[name].get(request.url);
    },
    async delete(request: Request) {
      registry[name].delete(request.url);
    },
  };
};

/**
 * Cache, using Web API Cache
 * @param name - name of the cache (used as an identifier)
 * @returns Object with set, get and delete methods
 */
export const webAPIAssetsCache = async (name: string) => {
  const cache = await caches.open(name);

  return {
    set: async (request: Request, response: Response) => {
      await cache.put(request, response);
    },
    get: async (request: Request) => {
      const response = await cache.match(request);
      return response?.text();
    },
    delete: async (request: Request) => {
      await cache.delete(request);
    },
  };
};

/**
 * Function to return the cache based on the cache strategy
 * @param cacheName - name of the cache to be used
 * @param cacheStrategy - strategy to be used for caching
 * @returns the cache based on the strategy
 */
export const assetsCache = async (cacheName: string, cacheStrategy: CacheStrategy) => {
  if (cacheStrategy === 'in-memory-cache') {
    return inMemoryCache(cacheName);
  }

  return webAPIAssetsCache(cacheName);
};
