import { html } from 'lit';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import ThemeProvider from './themeprovider.component';

// Subcomponent to be rendered in storybook, to showcase that the
// theme can be consumed as a subcomponent
class SubComponentThemeProvider extends Component {
  currentTheme?: string;

  private themeProviderContext = providerUtils.consume({ host: this, context: ThemeProvider.Context });

  override render() {
    return html`
      <p>Lit Component consuming ThemeProvider Context:</p>
      <p style="border: 1px solid">${this.themeProviderContext.value?.themeclass}</p>
    `;
  }
}

SubComponentThemeProvider.register('mdc-subcomponent');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent']: SubComponentThemeProvider;
  }
}
