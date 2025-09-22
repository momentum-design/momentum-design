import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import type { IllustrationNames } from '../illustration/illustration.types';

import IllustrationProvider from './illustrationprovider.component';

// SubComponent to be rendered in storybook, to showcase that the
// illustration provider can be consumed as a sub component
class SubComponentIllustrationProvider extends Component {
  private readonly illustrationProviderContext = providerUtils.consume({
    host: this,
    context: IllustrationProvider.Context,
  });

  @property({ type: String, attribute: 'illustration-name' })
  illustrationName?: IllustrationNames;

  override render() {
    return html`
      <p>Illustration Set: ${this.illustrationProviderContext.value?.illustrationSet}</p>
      <p>URL: ${this.illustrationProviderContext.value?.url}</p>
      <p>File Extension: ${this.illustrationProviderContext.value?.fileExtension}</p>
      <p>Cache strategy: ${this.illustrationProviderContext.value?.cacheStrategy || 'undefined'}</p>
      <p>Cache name: ${this.illustrationProviderContext.value?.cacheName}</p>
      <mdc-illustration name="${ifDefined(this.illustrationName)}"></mdc-illustration>
    `;
  }
}

SubComponentIllustrationProvider.register('mdc-subcomponent-illustration');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-illustration']: SubComponentIllustrationProvider;
  }
}
