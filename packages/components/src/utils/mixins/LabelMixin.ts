import { LitElement, nothing, html } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface LabelMixinInterface {
  label: string;
  renderLabel(): void;
}

export const LabelMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    /**
     * The label of the input field. It is linked to the input field using the `for` attribute.
     */
    @property({ reflect: true, type: String }) label = '';

    /**
     * creates the label element when the label property is set.
     * id is used to link the label with the input field.
     * @returns void
     */
    public renderLabel() {
      if (!this.label) {
        return nothing;
      }
      return html`<label for="${this.id}" class='mdc-label'>${this.label}</label>`;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<LabelMixinInterface> & T;
};
