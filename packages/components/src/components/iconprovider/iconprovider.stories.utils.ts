import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import IconProvider from './iconprovider.component';
import providerUtils from '../../utils/provider';
import type { IconNames } from '../icon/icon.types';

// SubComponent to be rendered in storybook, to showcase that the
// icon provider can be consumed as a sub component
class SubComponentIconProvider extends Component {
  private readonly iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

  @property({ type: String, attribute: 'icon-name' })
  iconName?: IconNames;

  override render() {
    return html`
      <p>Icon Set: ${this.iconProviderContext.value?.iconSet}</p>
      <p>URL: ${this.iconProviderContext.value?.url}</p>
      <p>File Extension: ${this.iconProviderContext.value?.fileExtension}</p>
      <p>Length Unit: ${this.iconProviderContext.value?.lengthUnit}</p>
      <p>Default Size: ${this.iconProviderContext.value?.size}</p>
      <p>Cache strategy: ${this.iconProviderContext.value?.cacheStrategy || 'undefined'}</p>
      <p>Cache name: ${this.iconProviderContext.value?.cacheName}</p>
      <mdc-icon length-unit="rem" name="${ifDefined(this.iconName)}"></mdc-icon>
    `;
  }
}

SubComponentIconProvider.register('mdc-subcomponent-icon');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-icon']: SubComponentIconProvider;
  }
}
