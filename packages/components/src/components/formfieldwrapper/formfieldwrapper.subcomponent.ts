import { html } from 'lit';

import FormfieldWrapper from './formfieldwrapper.component';

// Subcomponent to be rendered in E2E Tests, to showcase that the
// theme can be consumed as a subcomponent
// (this file is imported in the esbuild config for e2e tests ('/config/esbuild/esbuild-e2e.config.js') and the test index.html (/config/playwright/public/index.html))
class SubComponentFormFieldWrapper extends FormfieldWrapper {
  public override render() {
    return html`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `;
  }
}

SubComponentFormFieldWrapper.register('mdc-subcomponent-formfieldwrapper');
