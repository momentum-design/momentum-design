import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './brandvisual.styles';
import { Component } from '../../models';
import type { BrandVisualNames } from './brandvisual.types';
import { DEFAULTS } from './brandvisual.constants';

/**
 * brandvisual component, which dynamically displays SVG icons based on a valid name.
 *
 * @tagname mdc-brandvisual
 *
 * @event load - (React: onLoad) This event is dispatched when the icon has been successfully loaded.
 * @event error - (React: onError) This event is dispatched when the icon fetching has failed.
 *
 */
class Brandvisual extends Component {
  @state()
  private iconData?: HTMLElement;

  /**
   * Name of the icon (= filename)
   */
  @property({ type: String, reflect: true })
  name?: BrandVisualNames = DEFAULTS.NAME;

  private async getIconData() {
    if (this.name) {
      // dynamic import of the lit template from the momentum brand-visuals package
      return import(`@momentum-design/brand-visuals/dist/logos/ts/${this.name}.ts`)
        .then((module) => {
          console.log('ggg');
          this.handleIconLoadedSuccess(module.default());
        })
        .catch((error) => {
          this.handleIconLoadedFailure(error);
        });
    }
    this.handleIconLoadedFailure(new Error('No icon name provided.'));
    return Promise.reject(new Error('No icon name provided.'));
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('name')) {
      // import icon data if name changes:
      this.getIconData().catch((err) => {
        if (this.onerror) {
          this.onerror(err);
        }
      });
    }
  }

  /**
   * Sets the iconData state to the fetched icon.
   * Dispatches a 'load' event on the component once the icon has been successfully loaded.
   * @param iconHtml - The icon html element which has been fetched from the icon provider.
   */
  private handleIconLoadedSuccess(iconHtml: HTMLElement) {
    console.log('icon loaded ', iconHtml);
    // update iconData state once fetched:
    this.iconData = iconHtml;

    // when icon is imported successfully, trigger icon load event.
    const loadEvent = new Event('load', {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(loadEvent);
  }

  /**
   * Dispatches an 'error' event on the component when the icon import has failed.
   * This event bubbles and is cancelable.
   * The error detail is set to the error object.
   */
  private handleIconLoadedFailure(error: unknown) {
    console.log('error icon ', error);
    this.style.setProperty('width', '1rem');
    this.style.setProperty('height', '1rem');
    const errorEvent = new CustomEvent('error', {
      bubbles: true,
      cancelable: true,
      detail: { error },
    });
    this.dispatchEvent(errorEvent);
  }

  override render() {
    console.log('icon loaded ', this.iconData);
    return html` ${this.iconData} `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Brandvisual;
