import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';

import styles from './brandvisual.styles';
import type { BrandVisualNames } from './brandvisual.types';
import { DEFAULTS, PATH } from './brandvisual.constants';

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
  private brandVisualData?: HTMLElement;

  /**
   * Name of the brandVisual (= filename)
   */
  @property({ type: String, reflect: true })
  name?: BrandVisualNames = DEFAULTS.NAME;

  private async getBrandVisualData() {
    if (!this.name) {
      const error = new Error('No brandvisual name provided.');
      this.handleBrandVisualLoadedFailure(error);
      return Promise.reject(error);
    }

    const subPaths = Object.values(PATH);
    let index = 0;

    const tryNext = (): Promise<void> => {
      if (index >= subPaths.length) {
        const error = new Error(`Brand visual "${this.name}" not found in any known path.`);
        this.handleBrandVisualLoadedFailure(error);
        return Promise.reject(error);
      }

      return import(`@momentum-design/brand-visuals/dist/${subPaths[index]}/ts/${this.name}.ts`)
        .then(module => {
          this.handleBrandVisualLoadedSuccess(module.default());
        })
        .catch(() => {
          index += 1;
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          tryNext();
        });
    };

    return tryNext();
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
  }

  /**
   * Sets the brandVisualData state to the fetched brandvisual.
   * Dispatches a 'load' event on the component once the brandvisual has been successfully loaded.
   * @param brandVisualHtml - The brandvisual html element which has been fetched from the brandvisual provider.
   */
  private handleBrandVisualLoadedSuccess(brandVisualHtml: HTMLElement) {
    // update brandVisualData state once fetched:
    this.brandVisualData = brandVisualHtml;

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
