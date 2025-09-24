import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import IllustrationProvider from './illustrationprovider.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// illustration provider can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js'))
class SubComponentIllustrationProvider extends Component {
  @property({ type: String, attribute: 'illustration-label-prefix' })
  illustrationLabelPrefix?: string = '';

  private illustrationProviderContext = providerUtils.consume({ host: this, context: IllustrationProvider.Context });

  override render() {
    return html`
      <mdc-text tagname="p" type="body-small-regular" style="margin: 0;">
        ${this.illustrationLabelPrefix}${this.illustrationProviderContext.value?.illustrationSet}
      </mdc-text>
    `;
  }
}

SubComponentIllustrationProvider.register('mdc-subcomponent-illustration');
