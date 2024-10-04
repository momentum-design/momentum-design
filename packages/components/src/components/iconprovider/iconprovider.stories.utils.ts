import { html } from 'lit';
import { Component } from '../../models';
import IconProvider from './iconprovider.component';
import providerUtils from '../../utils/provider';

// SubComponent to be rendered in storybook, to showcase that the
// icon provider can be consumed as a sub component
class SubComponentIconProvider extends Component {
  private readonly iconProviderContext = providerUtils.consume({ host: this, context: IconProvider.Context });

  override render() {
    return html`
      <p>URL: ${this.iconProviderContext.value?.url}</p>
      <p>File Extension: ${this.iconProviderContext.value?.fileExtension}</p>
      <p>Length Unit: ${this.iconProviderContext.value?.lengthUnit}</p>
      <p>Default Size: ${this.iconProviderContext.value?.size}</p>
    `;
  }
}

SubComponentIconProvider.register('mdc-subcomponent-icon');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-icon']: SubComponentIconProvider;
  }
}
