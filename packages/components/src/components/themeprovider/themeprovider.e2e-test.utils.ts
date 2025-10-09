import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import ThemeProvider from './themeprovider.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// theme can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js') and the test index.html (/config/playwright/public/index.html))
class SubComponentThemeProvider extends Component {
  currentTheme?: string;

  @property({ type: String, attribute: 'theme-label-prefix' })
  themeLabelPrefix?: string;

  private themeProviderContext = providerUtils.consume({ host: this, context: ThemeProvider.Context });

  override render() {
    return html`
      <p style="border: 1px solid">${this.themeLabelPrefix}${this.themeProviderContext.value?.themeclass}</p>
    `;
  }
}

SubComponentThemeProvider.register('mdc-subcomponent');
