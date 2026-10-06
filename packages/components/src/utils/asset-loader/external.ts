import { resolveAssetSource } from './configuration';
import type { AssetRequest } from './asset-loader.types';

const MAX_CACHED_ASSETS = 256;
const cachedSvg = new Map<string, string>();
const pendingSvg = new Map<string, Promise<string>>();

const parseSvg = (content: string, { family, name }: AssetRequest): Element => {
  const document = new DOMParser().parseFromString(content, 'image/svg+xml');
  const svg = document.documentElement;
  if (
    svg.localName !== 'svg' ||
    svg.namespaceURI !== 'http://www.w3.org/2000/svg' ||
    document.querySelector('parsererror')
  ) {
    throw new Error('Asset response is not a valid SVG.');
  }
  if (
    svg.querySelector('script') ||
    [svg, ...Array.from(svg.querySelectorAll('*'))].some(element =>
      Array.from(element.attributes).some(attribute => /^on/i.test(attribute.name)),
    )
  ) {
    throw new Error('Asset contains executable content.');
  }
  svg.setAttribute('part', family);
  svg.setAttribute('data-name', name);
  svg.setAttribute('aria-hidden', 'true');
  return svg;
};

const fetchSvg = (url: string): Promise<string> => {
  const key = new URL(url, document.baseURI).href;
  const cached = cachedSvg.get(key);
  if (cached !== undefined) {
    cachedSvg.delete(key);
    cachedSvg.set(key, cached);
    return Promise.resolve(cached);
  }
  const pending = pendingSvg.get(key);
  if (pending) return pending;
  // Shared transport is independent of each component's cancellation signal.
  const request = fetch(key)
    .then(async response => {
      if (!response.ok) throw new Error(`Asset request failed (${response.status}).`);
      const content = await response.text();
      parseSvg(content, { family: 'icon', name: 'validation' });
      cachedSvg.set(key, content);
      if (cachedSvg.size > MAX_CACHED_ASSETS) cachedSvg.delete(cachedSvg.keys().next().value as string);
      return content;
    })
    .finally(() => pendingSvg.delete(key));
  pendingSvg.set(key, request);
  return request;
};

const withSignal = <T>(request: Promise<T>, signal?: AbortSignal): Promise<T> => {
  if (!signal) return request;
  return new Promise<T>((resolve, reject) => {
    const abort = () => reject(new DOMException('Asset load aborted.', 'AbortError'));
    if (signal.aborted) {
      abort();
      return;
    }
    signal.addEventListener('abort', abort, { once: true });
    request
      .then(resolve, reject)
      .finally(() => signal.removeEventListener('abort', abort))
      .catch(reject);
  });
};

const loadImage = (url: string, { name, signal }: AssetRequest): Promise<Element> => {
  const image = document.createElement('img');
  image.setAttribute('part', 'brandvisualImage');
  image.setAttribute('data-name', name);
  const request = new Promise<Element>((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Brand visual image failed to load.'));
    image.src = url;
  });
  return withSignal(request, signal).finally(() => {
    image.onload = null;
    image.onerror = null;
  });
};

export const requiresConfiguredProvider = true;

export const loadAsset = async (request: AssetRequest): Promise<Element> => {
  if (request.signal?.aborted) throw new DOMException('Asset load aborted.', 'AbortError');
  const source = resolveAssetSource(request);
  if ('content' in source) return parseSvg(source.content, request);
  if (!source.url) throw new Error('Asset URL is missing.');
  if (source.format === 'png') return loadImage(source.url, request);
  return parseSvg(await withSignal(fetchSvg(source.url), request.signal), request);
};
