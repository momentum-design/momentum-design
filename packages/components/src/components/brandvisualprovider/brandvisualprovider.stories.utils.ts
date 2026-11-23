import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import type { BrandVisualNames } from '../brandvisual/brandvisual.types';

import BrandVisualProvider from './brandvisualprovider.component';

// SubComponent to be rendered in storybook, to showcase that the
// brand visual provider can be consumed as a sub component
class SubComponentBrandVisualProvider extends Component {
  private readonly brandVisualProviderContext = providerUtils.consume({
    host: this,
    context: BrandVisualProvider.Context,
  });

  @property({ type: String, attribute: 'brand-visual-name' })
  brandVisualName?: BrandVisualNames;

  override render() {
    return html`
      <p>Brand Visual Set: ${this.brandVisualProviderContext.value?.brandVisualSet}</p>
      <p>URL: ${this.brandVisualProviderContext.value?.url}</p>
      <p>File Extension: ${this.brandVisualProviderContext.value?.fileExtension}</p>
      <p>Cache strategy: ${this.brandVisualProviderContext.value?.cacheStrategy || 'undefined'}</p>
      <p>Cache name: ${this.brandVisualProviderContext.value?.cacheName}</p>
      <mdc-brandvisual
        style="width: 10rem;"
        name="${ifDefined(this.brandVisualName)}"
        alt-text="Brand visual resolved through the provider"
      ></mdc-brandvisual>
    `;
  }
}

SubComponentBrandVisualProvider.register('mdc-subcomponent-brandvisual');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-brandvisual']: SubComponentBrandVisualProvider;
  }
}
