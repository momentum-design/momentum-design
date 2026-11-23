import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import BrandVisualProvider from './brandvisualprovider.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// brand visual provider can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js'))
class SubComponentBrandVisualProvider extends Component {
  @property({ type: String, attribute: 'brand-visual-label-prefix' })
  brandVisualLabelPrefix?: string = '';

  private brandVisualProviderContext = providerUtils.consume({ host: this, context: BrandVisualProvider.Context });

  override render() {
    return html`
      <mdc-text tagname="p" type="body-small-regular" style="margin: 0;">
        ${this.brandVisualLabelPrefix}${this.brandVisualProviderContext.value?.brandVisualSet}
      </mdc-text>
    `;
  }
}

SubComponentBrandVisualProvider.register('mdc-subcomponent-brandvisual');
