import { html } from 'lit';
import { Component } from '../../models';
import ThemeProvider from './themeprovider.component';
import providerUtils from '../../utils/provider';

// Subcomponent to be rendered in storybook, to showcase that the
// theme can be consumed as a subcomponent
class SubComponentThemeProvider extends Component {
  currentTheme?: string;

  private themeProviderContext = providerUtils.consume({ host: this, context: ThemeProvider.Context });

  override render() {
    return html` <p>${this.themeProviderContext.value?.theme}</p> `;
  }
}

SubComponentThemeProvider.register('mdc-subcomponent');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent']: SubComponentThemeProvider;
  }
}
