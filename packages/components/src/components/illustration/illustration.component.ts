import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import IllustrationProvider from '../illustrationprovider/illustrationprovider.component';

import styles from './illustration.styles';
import { svgFetch } from './illustration.utils';
import { DEFAULTS } from './illustration.constants';
import type { IllustrationNames } from './illustration.types';

/**
 * Illustration component that dynamically displays SVG illustrations based on a valid name.
 *
 * This component must be mounted within an `IllustrationProvider` component.
 *
 * The `IllustrationProvider` defines the source URL from which illustrations are consumed.
 * The `Illustration` component accepts a `name` attribute, which corresponds to
 * the file name of the illustration to be loaded from the specified URL.
 *
 * Once fetched, the illustration will be rendered. If the fetching process is unsuccessful,
 * no illustration will be displayed.
 *
 * Default sizing of the illustration is controlled by choosing a different illustration name, can be overridden with the `--mdc-illustration-size` CSS property.
 * Coloring of the illustration is currently baked into the svg, meaning that the illustration name determines
 * the coloring.
 *
 * Regarding accessibility, there are two types of illustrations: decorative and informative.
 *
 * ### Decorative Illustrations
 * - Decorative illustrations do not convey any essential information to the content of a page.
 * - They should be hidden from screen readers (SR) to prevent confusion for users.
 * - For decorative illustrations, an `aria-label` is not required, and the `role` will be set to null.
 *
 * ### Informative Illustrations
 * - Informative illustrations convey important information that is not adequately represented
 *   by surrounding text or components.
 * - They provide valuable context and must be announced by assistive technologies.
 * - For informative illustrations, an `aria-label` is required, and the `role` will be set to "img" automatically.
 * - If an `aria-label` is provided, the role will be set to 'img'; if it is absent,
 *   the role will be unset.
 *
 * @tagname mdc-illustration
 *
 * @cssproperty --mdc-illustration-size - Allows customization of the illustration size.
 *
 * @csspart illustration - The svg inside the illustration element.
 */
class Illustration extends Component {
  @state()
  private illustrationData?: HTMLElement;

  /**
   * Name of the illustration (= filename)
   */
  @property({ type: String, reflect: true })
  name?: IllustrationNames = DEFAULTS.NAME;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Aria-labelledby attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  private readonly illustrationProviderContext = providerUtils.consume({
    host: this,
    context: IllustrationProvider.Context,
  });

  @state() private abortController?: AbortController;

  constructor() {
    super();
    this.abortController = new AbortController(); // Initialize AbortController
  }

  /**
   * Parse the illustration string to an html element, set the attributes and
   * return the illustration element
   *
   * @param illustrationData - The illustration string to be parsed
   * @returns illustrationElement
   */
  private prepareIllustrationElement(illustrationData: string) {
    const illustrationElement = new DOMParser().parseFromString(illustrationData, 'text/html').body.children[0];

    if (this.name) {
      illustrationElement.setAttribute('data-name', this.name);
    }
    illustrationElement.setAttribute('part', 'illustration');
    // set aria-hidden=true for SVG to avoid screen readers
    illustrationElement.setAttribute('aria-hidden', 'true');

    return illustrationElement;
  }

  /**
   * Fetches the illustration (currently only svg) and sets state and attributes once fetched successfully
   *
   * This method uses abortController.signal to cancel the fetch request when the component is disconnected or updated.
   * If the request is aborted after the fetch() call has been fulfilled but before the response body has been read,
   * then attempting to read the response body will reject with an AbortError exception.
   */
  private async getIllustrationData() {
    if (this.illustrationProviderContext.value) {
      const { fileExtension, url, cacheName, illustrationSet, cacheStrategy } = this.illustrationProviderContext.value;
      if (illustrationSet === 'custom-illustrations' && url && fileExtension && this.name) {
        // function to abort the fetch request and create a new signal
        // (directly passing the abortcontroller to the fetch request per reference
        // will not work due to JS call-by-sharing behavior)
        const renewSignal = () => {
          this.abortController?.abort();
          this.abortController = new AbortController();
          return this.abortController.signal;
        };

        // fetch illustration data (including caching logic)
        return svgFetch({
          url,
          name: this.name,
          fileExtension,
          cacheName,
          cacheStrategy,
          renewSignal,
        })
          .then(illustrationData => {
            // parse the fetched illustration string to an html element and set the attributes
            const illustrationElement = this.prepareIllustrationElement(illustrationData);
            this.handleIllustrationLoadedSuccess(illustrationElement as HTMLElement);
          })
          .catch(error => {
            this.handleIllustrationLoadedFailure(error);
          });
      }

      if (illustrationSet === 'momentum-illustrations' && this.name) {
        // dynamic import of the lit template from the momentum illustrations package
        return import(`@momentum-design/illustrations/dist/ts/${this.name}.ts`)
          .then(module => {
            this.handleIllustrationLoadedSuccess(module.default());
          })
          .catch(error => {
            this.handleIllustrationLoadedFailure(error);
          });
      }
    }

    const noIllustrationProviderError = new Error('IllustrationProvider not found or not properly set up.');
    this.handleIllustrationLoadedFailure(noIllustrationProviderError);
    return Promise.reject(noIllustrationProviderError);
  }

  /**
   * Sets the illustrationData state to the fetched illustration.
   * Dispatches a 'load' event on the component once the illustration has been successfully loaded.
   * @param illustrationHtml - The illustration html element which has been fetched from the illustration provider.
   */
  private handleIllustrationLoadedSuccess(illustrationHtml: HTMLElement) {
    // update illustrationData state once fetched:
    this.illustrationData = illustrationHtml;

    // when illustration is fetched successfully, trigger illustration load event.
    const loadEvent = new Event('load', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(loadEvent);
  }

  /**
   * Dispatches an 'error' event on the component when the illustration fetching has failed.
   * This event bubbles and is cancelable.
   * The error detail is set to the error object.
   */
  private handleIllustrationLoadedFailure(error: unknown) {
    const errorEvent = new CustomEvent('error', {
      bubbles: true,
      cancelable: true,
      detail: { error },
    });
    this.dispatchEvent(errorEvent);
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // fetch illustration data if name changes:
      this.getIllustrationData().catch(err => {
        if (err.name !== 'AbortError' && this.onerror) {
          this.onerror(err);
        }
      });
    }

    if (changedProperties.has('ariaLabel') || changedProperties.has('ariaLabelledBy')) {
      this.role = this.ariaLabel || this.ariaLabelledby ? 'img' : null;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    // abort the fetch request when the component is disconnected
    this.abortController?.abort();
    this.abortController = undefined; // reset the abort controller
  }

  override render() {
    return html` ${this.illustrationData} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Illustration;
