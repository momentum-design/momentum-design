import { resolveAssetSource } from './configuration';
import type { AssetRequest } from './asset-loader.types';

const MAX_CACHED_ASSETS = 256;
const cachedSvg = new Map<string, Element>();
const pendingSvg = new Map<string, Promise<Element>>();

const prepareSvg = (content: string): Element => {
  const parsedDocument = new DOMParser().parseFromString(content, 'image/svg+xml');
  const svg = parsedDocument.documentElement;
  if (
    svg.localName !== 'svg' ||
    svg.namespaceURI !== 'http://www.w3.org/2000/svg' ||
    parsedDocument.querySelector('parsererror')
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
  // Keep the prototype in the rendering document, without retaining its parsed XML document.
  return document.importNode(svg, true);
};

const getCachedSvg = (key: string): Element | undefined => {
  const cached = cachedSvg.get(key);
  if (cached) {
    cachedSvg.delete(key);
    cachedSvg.set(key, cached);
  }
  return cached;
};

const cacheSvg = (key: string, content: string): Element => {
  const template = prepareSvg(content);
  cachedSvg.set(key, template);
  if (cachedSvg.size > MAX_CACHED_ASSETS) cachedSvg.delete(cachedSvg.keys().next().value as string);
  return template;
};

const cloneSvg = (template: Element, { family, name }: AssetRequest): Element => {
  const svg = template.cloneNode(true) as Element;
  svg.setAttribute('part', family);
  svg.setAttribute('data-name', name);
  svg.setAttribute('aria-hidden', 'true');
  return svg;
};

const fetchSvg = (url: string): Promise<Element> => {
  const absoluteUrl = new URL(url, document.baseURI).href;
  const key = `url:${absoluteUrl}`;
  const cached = getCachedSvg(key);
  if (cached) return Promise.resolve(cached);
  const pending = pendingSvg.get(key);
  if (pending) return pending;
  // Shared transport is independent of each component's cancellation signal.
  const request = fetch(absoluteUrl)
    .then(async response => {
      if (!response.ok) throw new Error(`Asset request failed (${response.status}).`);
      return cacheSvg(key, await response.text());
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
  if ('content' in source) {
    const key = `content:${source.content}`;
    return cloneSvg(getCachedSvg(key) ?? cacheSvg(key, source.content), request);
  }
  if (!source.url) throw new Error('Asset URL is missing.');
  if (source.format === 'png') return loadImage(source.url, request);
  return cloneSvg(await withSignal(fetchSvg(source.url), request.signal), request);
};
