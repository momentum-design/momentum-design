import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface AssociatedFormControl {
    autofocus: boolean;
    disabled: boolean;
    name: string | undefined;
    value: string | string[];

    pattern?: string;
    min?: number | string;
    max?: number | string;
    step?: number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    validationMessage: string;

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
    inputElement: HTMLInputElement;
    setValidityFromInput(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;

}

export const FormInternalsMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
      /**
   * Indicates the name of the component group (ex: checkbox, radio group).
   * They are used to group elements in a form together.
   * @default ''
   */
      @property({ reflect: true, type: String }) name = '';

      /**
   * Indicates the value of the component group (ex: input, checkbox, radio, select etc...)
   * @default ''
   */
    @property({ reflect: true, type: String }) value = '';

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

    get validationMessage() {
      return this.internals.validationMessage;
    }

    get willValidate() {
      return this.internals.willValidate;
    }

    constructor(...args: any[]) {
      super(args);

      /** @internal */
      this.internals = this.attachInternals();
    }

    /**
   * Sets the validity of the input field based on the input field's validity.
   * @returns void
   */
    setValidityFromInput() {
      if (this.inputElement) {
        this.internals.setValidity(
          this.inputElement.validity,
          this.inputElement.validationMessage,
          this.inputElement,
        );
      }
    }

    checkValidity(): boolean {
      this.setValidityFromInput();
      return this.internals.checkValidity();
    }

    reportValidity() {
      this.setValidityFromInput();
      return this.internals.reportValidity();
    }

    /**
   * @internal
   * The input element
   */
    @query('input') inputElement!: HTMLInputElement;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<FormInternalsMixinInterface> & T;
};
