import { CSSResult, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';

import styles from './brandvisual.styles';
import type { BrandVisualNames, imageProps } from './brandvisual.types';

/**
 * The `mdc-brandvisual` component is responsible for rendering logos dynamically & ensures they are
 * displayed correctly within applications.
 *
 * Features:
 * - Dynamically loads brandvisuals based on the `name` attribute.
 * - Emits a `load` event when the brandvisual is successfully fetched.
 * - Emits an `error` event when the brandvisual import fails.
 * - Supports accessibility best practices.
 * - Used for brand representation within the design system.
 *
 * @tagname mdc-brandvisual
 *
 * @event load - (React: onLoad) This event is dispatched when the brandvisual has been successfully loaded.
 * @event error - (React: onError) This event is dispatched when the brandvisual fetching has failed.
 *
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
  @property({ type: String, reflect: true })
  altText?: string;

  private async getBrandVisualData() {
    if (this.name) {
      // dynamic import of the lit template from the momentum brand-visuals package
      return import(`@momentum-design/brand-visuals/dist/ts/${this.name}.ts`)
        .then(module => {
          this.handleBrandVisualLoadedSuccess(module.default());
        })
        .catch(error => {
          this.handleBrandVisualLoadedFailure(error);
        });
    }
    const nameError = new Error('No brandvisual name provided.');
    this.handleBrandVisualLoadedFailure(nameError);
    return Promise.reject(nameError);
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // import brandVisual data if name changes:
      this.getBrandVisualData().catch(err => {
        if (this.onerror) {
          this.onerror(err);
        }
      });
    }

    if (changedProperties.has('altText')) {
      if (this.brandVisualData) {
        this.brandVisualData = this.injectHtmlAttributes(this.brandVisualData as Element, { alt: this.altText });
      }
    }
  }

  private injectTemplateAttributes(litTemplate: TemplateResult, tag: string, props: any): Element | TemplateResult {
    const parser = new DOMParser();
    const doc = parser.parseFromString(litTemplate.strings[0], 'text/html');
    const element = doc.querySelector(tag);
    if (element) {
      Object.entries(props).forEach(([key, value]) => {
        element.setAttribute(key, value as string);
      });
    }

    return element || litTemplate;
  }

  private injectHtmlAttributes(html: Element, props: imageProps): Element {
    Object.entries(props).forEach(([key, value]) => {
      html.setAttribute(key, value as string);
    });

    return html;
  }

  /**
   * Sets the brandVisualData state to the fetched brandvisual.
   * Dispatches a 'load' event on the component once the brandvisual has been successfully loaded.
   * @param brandVisualHtml - The brandvisual html element which has been fetched from the brandvisual provider.
   */
  private handleBrandVisualLoadedSuccess(brandVisualHtml: TemplateResult) {
    this.brandVisualData = this.injectTemplateAttributes(brandVisualHtml, 'img', { alt: this.altText });

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
