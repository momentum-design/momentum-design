import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import ResponsiveSettingsProvider from './responsivesettingsprovider.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// responsive settings provider can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js') and the test index.html (/config/playwright/public/index.html))
class SubComponentResponsiveSettingsProvider extends Component {
  @property({ type: String, attribute: 'label-prefix' })
  labelPrefix?: string = '';

  protected readonly responsiveSettingsContext = providerUtils.consume({
    host: this,
    context: ResponsiveSettingsProvider.Context,
  });

  override render() {
    return html`
      <mdc-text tagname="p" type="body-large-regular"
        ><pre>${this.labelPrefix} ${JSON.stringify(this.responsiveSettingsContext.value, null, 3)}<pre></mdc-text
      >
    `;
  }
}

SubComponentResponsiveSettingsProvider.register('mdc-subcomponent-responsive-settings');
