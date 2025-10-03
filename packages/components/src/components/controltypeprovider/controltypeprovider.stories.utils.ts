import { html } from 'lit';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';

import ControlTypeProvider from './controltypeprovider.component';

// SubComponent to be rendered in storybook, to showcase that the
// controlType provider can be consumed as a sub component
class SubComponentControlTypeProvider extends Component {
  private readonly controlTypeProviderContext = providerUtils.consume({
    host: this,
    context: ControlTypeProvider.Context,
  });

  override render() {
    return html` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `;
  }
}

SubComponentControlTypeProvider.register('mdc-subcomponent-control-type');
declare global {
  interface HTMLElementTagNameMap {
    ['mdc-subcomponent-control-type']: SubComponentControlTypeProvider;
  }
}
