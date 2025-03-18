import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';
import type { Constructor } from './index.types';

export interface AssociatedFormControl {
    autofocus: boolean;
    disabled?: boolean;
    name: string;
    value: string | string[];

    pattern?: string;
    min?: number | string;
    max?: number | string;
    step?: number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    validationMessage?: string;

    readonly form: HTMLFormElement | null;
    readonly validity: ValidityState;
    readonly willValidate: boolean;

    checkValidity(): boolean;
    reportValidity(): boolean;

    formDisabledCallback?(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(
      state: string | FormData | File,
      mode: 'restore' | 'autocomplete'
    ): void;
  }

export interface FormInternalsMixinInterface {
    name: string;
    value: string;
    form: HTMLFormElement | null;
    validity: ValidityState;
    validationMessage: string;
    willValidate: boolean;
    internals: ElementInternals;
    inputElement: HTMLInputElement | HTMLTextAreaElement;
    setValidity(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;

}

export const FormInternalsMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
      /**
   * Indicates the name of the component group.
   * They are used to group elements in a form together.
   * @default ''
   */
      @property({ reflect: true, type: String }) name = '';

      /**
   * Indicates the value of the component group (ex: input, checkbox, radio, select etc...)
   * @default ''
   */
    @property({ reflect: true, type: String }) value = '';

     /**
     * Custom validation message that will override the default message and displayed when the input is invalid.
     */
     @property({ reflect: true, type: String, attribute: 'validation-message' }) validationMessage?: string;

    /** @internal */
    static formAssociated = true;

    /** @internal */
    internals: ElementInternals;

    /** @internal */
    get form(): HTMLFormElement | null {
      return this.internals.form;
    }

    get validity(): ValidityState {
      return this.internals.validity;
    }

    get willValidate() {
      return this.internals.willValidate;
    }

    constructor(...args: any[]) {
      super(args);

      /** @internal */
      this.internals = this.attachInternals();
      this.id = `mdc-input-${uuidv4()}`;
    }

    /**
   * Sets the validity of the input field based on the input field's validity.
   * @returns void
   */
    setValidity() {
      if (this.inputElement) {
        this.internals.setValidity(
          this.inputElement.validity,
          this.inputElement.validationMessage,
          this.inputElement,
        );
      }
    }

    checkValidity(): boolean {
      this.setValidity();
      return this.internals.checkValidity();
    }

    reportValidity() {
      this.setValidity();
      return this.internals.reportValidity();
    }

    /**
   * @internal
   * The input element
   */
    @query('input') inputElement!: HTMLInputElement | HTMLTextAreaElement;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<FormInternalsMixinInterface> & T;
};
