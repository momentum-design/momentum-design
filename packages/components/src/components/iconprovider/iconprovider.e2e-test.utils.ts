import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import IconProvider from './iconprovider.component';
import providerUtils from '../../utils/provider';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// icon provider can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js'))
class SubComponentIconProvider extends Component {
  @property({ type: String, attribute: 'icon-label-prefix' })
  iconLabelPrefix?: string = '';

  private iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

  override render() {
    return html` <p style="margin: 0;">${this.iconLabelPrefix}${this.iconProviderContext.value?.lengthUnit}</p> `;
  }
}

SubComponentIconProvider.register('mdc-subcomponent-icon');
