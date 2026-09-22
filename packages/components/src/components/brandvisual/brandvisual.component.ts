import { CSSResult, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import { svgFetch } from '../../utils/asset-fetch';
import BrandVisualProvider from '../brandvisualprovider/brandvisualprovider.component';
import type { CacheStrategy } from '../brandvisualprovider/brandvisualprovider.types';

import styles from './brandvisual.styles';
import type { BrandVisualNames, imageProps } from './brandvisual.types';

/**
 * @tagname mdc-brandvisual
 *
 * @event load - (React: onLoad) This event is dispatched when the brandvisual has been successfully loaded.
 * @event error - (React: onError) This event is dispatched when the brandvisual fetching has failed.
 *
 * @csspart brandvisual - Set styles for the brandvisual svg container
 * @csspart brandvisualImage - Set styles for the brandvisual image container
 */
class Brandvisual extends Component {
  @state()
  private brandVisualData?: Element | TemplateResult;

  /**
   * Name of the brandVisual (= filename)
   */
  @property({ type: String, reflect: true })
  name?: BrandVisualNames;

  /**
   * Alt text for the brandvisual image for accessibility.
   * This will only be set if the brandvisual is an image (png).
   */
  @property({ type: String, reflect: true, attribute: 'alt-text' })
  altText?: string;

  private readonly brandVisualProviderContext = providerUtils.consume({
    host: this,
    context: BrandVisualProvider.Context,
  });

  @state() private abortController?: AbortController;

  constructor() {
    super();
    this.abortController = new AbortController(); // Initialize AbortController
  }

  /**
   * Resolves the brandvisual, either over HTTP through a `BrandVisualProvider` or through a
   * dynamic import of the lit template shipped in the `@momentum-design/brand-visuals` package.
   *
   * The dynamic import is the fallback for every case that is not a fully configured custom set:
   * no provider at all, the momentum set, or a custom set that is missing a url or file extension.
   * Keeping it reachable without a provider is what makes this backwards compatible - a bare
   * `<mdc-brandvisual name="…">` behaves exactly as it did before the provider existed.
   */
  private async getBrandVisualData() {
    if (!this.name) {
      const nameError = new Error('No brandvisual name provided.');
      this.handleBrandVisualLoadedFailure(nameError);
      return Promise.reject(nameError);
    }

    const providerContext = this.brandVisualProviderContext.value;

    if (providerContext?.brandVisualSet === 'custom-brand-visuals') {
      const { url, fileExtension, cacheName, cacheStrategy } = providerContext;

      if (url && fileExtension) {
        // raster visuals are handed to the browser as an <img src>, vector ones are fetched
        // and inlined so they can be styled through ::part(brandvisual)
        return fileExtension === 'png'
          ? this.loadBrandVisualImage(url, fileExtension)
          : this.fetchBrandVisual({ url, fileExtension, cacheName, cacheStrategy });
      }
    }

    // dynamic import of the lit template from the momentum brand-visuals package
    return import(`@momentum-design/brand-visuals/dist/ts/${this.name}.ts`)
      .then(module => {
        this.handleBrandVisualLoadedSuccess(module.default());
      })
      .catch(error => {
        this.handleBrandVisualLoadedFailure(error);
      });
  }

  /**
   * Fetches a vector brandvisual over HTTP and inlines it.
   *
   * This method uses abortController.signal to cancel the fetch request when the component is
   * disconnected or updated. If the request is aborted after the fetch() call has been fulfilled
   * but before the response body has been read, then attempting to read the response body will
   * reject with an AbortError exception.
   */
  private async fetchBrandVisual({
    url,
    fileExtension,
    cacheName,
    cacheStrategy,
  }: {
    url: string;
    fileExtension: string;
    cacheName?: string;
    cacheStrategy?: CacheStrategy;
  }) {
    // function to abort the fetch request and create a new signal
    // (directly passing the abortcontroller to the fetch request per reference
    // will not work due to JS call-by-sharing behavior)
    const renewSignal = () => {
      this.abortController?.abort();
      this.abortController = new AbortController();
      return this.abortController.signal;
    };

    return svgFetch({
      url,
      name: this.name as string,
      fileExtension,
      cacheName,
      cacheStrategy,
      renewSignal,
      assetType: 'brand visual',
    })
      .then(brandVisualData => {
        this.handleBrandVisualLoadedSuccess(this.prepareBrandVisualElement(brandVisualData));
      })
      .catch(error => {
        this.handleBrandVisualLoadedFailure(error);
      });
  }

  /**
   * Points an `img` at the raster brandvisual and resolves once the browser has loaded it.
   *
   * There is nothing to fetch here - assigning `src` starts the load even while the element is
   * detached - but we still wait for it so that `load` and `error` keep meaning the same thing
   * they do on the other two branches.
   */
  private async loadBrandVisualImage(url: string, fileExtension: string) {
    const image = document.createElement('img');
    image.setAttribute('part', 'brandvisualImage');
    image.setAttribute('data-name', this.name as string);

    return new Promise<void>(resolve => {
      image.onload = () => {
        this.handleBrandVisualLoadedSuccess(image);
        resolve();
      };
      image.onerror = () => {
        this.handleBrandVisualLoadedFailure(new Error('There was a problem while fetching the brand visual!'));
        resolve();
      };
      image.src = `${url}/${this.name}.${fileExtension}`;
    });
  }

  /**
   * Parse the fetched brandvisual string to an html element and set the attributes the
   * packaged lit templates would otherwise carry.
   *
   * @param brandVisualData - The brandvisual string to be parsed
   * @returns brandVisualElement
   */
  private prepareBrandVisualElement(brandVisualData: string): Element {
    const brandVisualElement = new DOMParser().parseFromString(brandVisualData, 'text/html').body.children[0];

    if (this.name) {
      brandVisualElement.setAttribute('data-name', this.name);
    }
    brandVisualElement.setAttribute('part', 'brandvisual');
    // set aria-hidden=true for SVG to avoid screen readers
    brandVisualElement.setAttribute('aria-hidden', 'true');

    return brandVisualElement;
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // import brandVisual data if name changes:
      this.getBrandVisualData().catch(err => {
        if (err.name !== 'AbortError' && this.onerror) {
          this.onerror(err);
        }
      });
    }

    if (changedProperties.has('altText')) {
      if (this.brandVisualData) {
        this.brandVisualData = this.applyAltText(this.brandVisualData);
      }
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    // abort the fetch request when the component is disconnected
    this.abortController?.abort();
    this.abortController = undefined; // reset the abort controller
  }

  /**
   * Labels the brandvisual with the alt text, if it has anything to label.
   *
   * The dynamic import hands back a lit `TemplateResult`, whose markup has to be parsed before an
   * `img` can be found in it, while both provider branches already produce an `Element` - so the
   * two need different treatment. Only raster visuals have an `img` to label; vector ones are
   * `aria-hidden` by design and are returned untouched.
   */
  private applyAltText(brandVisual: Element | TemplateResult): Element | TemplateResult {
    if (brandVisual instanceof Element) {
      return brandVisual.tagName === 'IMG' ? this.injectHtmlAttributes(brandVisual, { alt: this.altText }) : brandVisual;
    }

    return this.injectTemplateAttributes(brandVisual, 'img', { alt: this.altText });
  }

  private injectTemplateAttributes(litTemplate: TemplateResult, tag: string, props: any): Element | TemplateResult {
    const parser = new DOMParser();
    const doc = parser.parseFromString(litTemplate.strings[0], 'text/html');
    const element = doc.querySelector(tag);
    if (element) {
      this.injectHtmlAttributes(element, props);
    }

    return element || litTemplate;
  }

  private injectHtmlAttributes(html: Element, props: imageProps): Element {
    Object.entries(props).forEach(([key, value]) => {
      // an unset alt-text must not end up rendered as alt="undefined"
      if (value === undefined) {
        html.removeAttribute(key);
      } else {
        html.setAttribute(key, value as string);
      }
    });

    return html;
  }

  /**
   * Sets the brandVisualData state to the fetched brandvisual.
   * Dispatches a 'load' event on the component once the brandvisual has been successfully loaded.
   * @param brandVisualHtml - The brandvisual which has been resolved, either as the lit template
   * from the dynamic import or as an element built from the provider url.
   */
  private handleBrandVisualLoadedSuccess(brandVisualHtml: Element | TemplateResult) {
    this.brandVisualData = this.applyAltText(brandVisualHtml);

    // when brandvisual is imported successfully, trigger brandvisual load event.
    const loadEvent = new Event('load', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(loadEvent);
  }

  /**
   * Dispatches an 'error' event on the component when the brandvisual import has failed.
   * This event bubbles and is cancelable.
   * The error detail is set to the error object.
   */
  private handleBrandVisualLoadedFailure(error: unknown) {
    const errorEvent = new CustomEvent('error', {
      bubbles: true,
      cancelable: true,
      detail: { error },
    });
    this.dispatchEvent(errorEvent);
  }

  override render() {
    return html` ${this.brandVisualData} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Brandvisual;
