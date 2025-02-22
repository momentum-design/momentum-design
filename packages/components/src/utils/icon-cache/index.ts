type IconCache = Map<string, string>;
type Registry = Record<string, IconCache>;

const registry: Registry = {};

export const jsIconsCache = (name: string) => {
  if (registry[name] === undefined) {
    registry[name] = new Map();
  }

  return {
    set: (key: string, value: string) => registry[name].set(key, value),
    get: (key: string) => registry[name].get(key),
    delete: (key: string) => registry[name].delete(key),
  };
};

export const webAPIIconsCache = async (name: string) => {
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
