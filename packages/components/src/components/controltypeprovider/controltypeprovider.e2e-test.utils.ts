import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import ControlTypeProvider from './controltypeprovider.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// control type provider can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js') and the test index.html (/config/playwright/public/index.html))
class SubComponentControlTypeProvider extends Component {
  @property({ type: String, attribute: 'control-type-label-prefix' })
  controlTypeLabelPrefix?: string = '';

  private controlTypeProviderContext = providerUtils.consume({ host: this, context: ControlTypeProvider.Context });

  override render() {
    return html` <p style="margin: 0;">${this.controlTypeLabelPrefix}${this.controlTypeProviderContext.value}</p> `;
  }
}

SubComponentControlTypeProvider.register('mdc-subcomponent-control-type');
