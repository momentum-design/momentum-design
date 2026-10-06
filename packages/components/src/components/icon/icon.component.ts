import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { loadAsset } from '#momentum-assets/icon';

import type { LoadedAsset } from '../../utils/asset-loader/asset-loader.types';
import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import { assetFetch } from '../../utils/asset-fetch';
import IconProvider from '../iconprovider/iconprovider.component';

import styles from './icon.styles';
import { DEFAULTS } from './icon.constants';
import type { IconNames } from './icon.types';
/**
 * @tagname mdc-icon
 *
 * @cssproperty --mdc-icon-fill-color - Allows customization of the default fill color.
 * @cssproperty --mdc-icon-size - Allows customization of the icon size.
 * @cssproperty --mdc-icon-border-radius - Allows customization of the icon border radius.
 *
 * @csspart icon - The svg inside the icon element.
 */
class Icon extends Component {
  @state()
  private iconData?: LoadedAsset;

  @state()
  private lengthUnitFromContext?: string;

  @state()
  private sizeFromContext?: number;

  /**
   * Name of the icon (= filename)
   */
  @property({ type: String, reflect: true })
  name?: IconNames = DEFAULTS.NAME;

  /**
   * Size of the icon (works in combination with length unit)
   */
  @property({ type: Number })
  size?: number;

  /**
   * Length unit attribute for overriding length-unit from `IconProvider`
   */
  @property({ type: String, attribute: 'length-unit' })
  lengthUnit?: string;

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

  private readonly iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

  @state() private abortController?: AbortController;

  private assetLoadId = 0;

  private assetSourceKey?: string;

  constructor() {
    super();
    this.abortController = new AbortController(); // Initialize AbortController
  }

  /**
   * Parse the icon string to an html element, set the attributes and
   * return the icon element
   *
   * @param iconData - The icon string to be parsed
   * @returns iconElement
   */
  private prepareIconElement(iconData: string) {
    const iconElement = new DOMParser().parseFromString(iconData, 'text/html').body.children[0];

    if (this.name) {
      iconElement.setAttribute('data-name', this.name);
    }
    iconElement.setAttribute('part', 'icon');
    // set aria-hidden=true for SVG to avoid screen readers
    iconElement.setAttribute('aria-hidden', 'true');

    return iconElement;
  }

  /**
   * Fetches the icon (currently only svg) and sets state and attributes once fetched successfully
   *
   * This method uses abortController.signal to cancel the fetch request when the component is disconnected or updated.
   * If the request is aborted after the fetch() call has been fulfilled but before the response body has been read,
   * then attempting to read the response body will reject with an AbortError exception.
   */
  private async getIconData() {
    this.assetLoadId += 1;
    const loadId = this.assetLoadId;
    this.abortController?.abort();
    this.abortController = new AbortController();
    const onSuccess = (asset: LoadedAsset) => {
      if (loadId === this.assetLoadId && this.isConnected) this.handleIconLoadedSuccess(asset);
    };
    const onFailure = (error: unknown) => {
      if (loadId === this.assetLoadId && this.isConnected) this.handleIconLoadedFailure(error);
    };

    if (this.iconProviderContext.value) {
      const { fileExtension, url, cacheName, iconSet, cacheStrategy } = this.iconProviderContext.value;
      if (iconSet === 'custom-icons' && url && fileExtension && this.name) {
        // function to abort the fetch request and create a new signal
        // (directly passing the abortcontroller to the fetch request per reference
        // will not work due to JS call-by-sharing behavior)
        const renewSignal = () => {
          this.abortController?.abort();
          this.abortController = new AbortController();
          return this.abortController.signal;
        };

        // fetch icon data (including caching logic)
        return assetFetch({
          url,
          name: this.name,
          fileExtension,
          cacheName,
          cacheStrategy,
          renewSignal,
          assetType: 'icon',
        })
          .then(iconData => {
            // parse the fetched icon string to an html element and set the attributes
            const iconElement = this.prepareIconElement(iconData);
            onSuccess(iconElement as HTMLElement);
          })
          .catch(error => {
            onFailure(error);
          });
      }

      if (iconSet === 'momentum-icons' && this.name) {
        // Resolve Momentum assets through the loader selected by the build.
        return loadAsset({ family: 'icon', name: this.name, signal: this.abortController.signal })
          .then(onSuccess)
          .catch(error => {
            onFailure(error);
          });
      }
    }

    const noIconProviderError = new Error('IconProvider not found or not properly set up.');
    this.handleIconLoadedFailure(noIconProviderError);
    return Promise.reject(noIconProviderError);
  }

  /**
   * Sets the iconData state to the fetched icon.
   * Dispatches a 'load' event on the component once the icon has been successfully loaded.
   * @param iconHtml - The icon html element which has been fetched from the icon provider.
   */
  private handleIconLoadedSuccess(iconHtml: LoadedAsset) {
    // update iconData state once fetched:
    this.iconData = iconHtml;

    // when icon is fetched successfully, trigger icon load event.
    const loadEvent = new Event('load', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(loadEvent);
  }

  /**
   * Dispatches an 'error' event on the component when the icon fetching has failed.
   * This event bubbles and is cancelable.
   * The error detail is set to the error object.
   */
  private handleIconLoadedFailure(error: unknown) {
    const errorEvent = new CustomEvent('error', {
      bubbles: true,
      cancelable: true,
      detail: { error },
    });
    this.dispatchEvent(errorEvent);
  }

  /**
   * Updates the size by setting the width and height
   */
  private updateSize() {
    if (this.computedIconSize && (this.lengthUnit || this.lengthUnitFromContext)) {
      const value = `${this.computedIconSize}${this.lengthUnit ?? this.lengthUnitFromContext}`;
      // set the computed icon size as a css variable to be used in the icon styles
      this.style.setProperty('--computed-icon-size', value);
    }
  }

  private get computedIconSize() {
    return this.size ?? this.sizeFromContext ?? DEFAULTS.SIZE;
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    const provider = this.iconProviderContext.value;
    const sourceKey = JSON.stringify([
      this.name,
      provider?.iconSet,
      provider?.url,
      provider?.fileExtension,
      provider?.cacheName,
      provider?.cacheStrategy,
    ]);
    if (sourceKey !== this.assetSourceKey) {
      this.assetSourceKey = sourceKey;
      // fetch icon data if name changes:
      this.getIconData().catch(err => {
        if (err.name !== 'AbortError' && this.onerror) {
          this.onerror(err);
        }
      });
    }

    if (changedProperties.has('ariaLabel') || changedProperties.has('ariaLabelledby')) {
      this.role = this.ariaLabel || this.ariaLabelledby ? 'img' : null;
    }

    if (changedProperties.has('size') || changedProperties.has('lengthUnit')) {
      this.updateSize();
    }

    if (this.lengthUnitFromContext !== this.iconProviderContext.value?.lengthUnit) {
      this.lengthUnitFromContext = this.iconProviderContext.value?.lengthUnit;
      this.updateSize();
    }

    if (this.sizeFromContext !== this.iconProviderContext.value?.size) {
      this.sizeFromContext = this.iconProviderContext.value?.size;
      this.updateSize();
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated) this.requestUpdate();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.assetLoadId += 1;
    this.assetSourceKey = undefined;
    // abort the fetch request when the component is disconnected
    this.abortController?.abort();
    this.abortController = undefined; // reset the abort controller
  }

  override render() {
    return html` ${this.iconData} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Icon;
