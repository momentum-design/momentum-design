import{i as y,D as p,k as l}from"./lit-element-D5KKan5q.js";import{n as i}from"./index-C9z9WAEj.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{F as g}from"./live-Cwq7YsO4.js";import"./index-CkrWe7oJ.js";import{D as x,F as b}from"./formfieldwrapper.component-Bto_JnzL.js";import{D as v}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as f}from"./FormInternalsMixin-CqDKsEWP.js";import{A as T,a as $,D as s,P as E}from"./input.constants-DtfQZkq2.js";import{h as I}from"./index-Cx7wvr8C.js";const k=[y`
    :host {
      --mdc-input-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-disabled-background-color: var(--mds-color-theme-background-input-disabled);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-hover-background-color: var(--mds-color-theme-background-primary-hover);
      --mdc-input-focused-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-focused-border-color: var(--mds-color-theme-outline-input-active);
      --mdc-input-error-border-color: var(--mds-color-theme-text-error-normal);
      --mdc-input-warning-border-color: var(--mds-color-theme-text-warning-normal);
      --mdc-input-success-border-color: var(--mds-color-theme-text-success-normal);
      --mdc-input-primary-border-color: var(--mds-color-theme-text-accent-normal);
    }

    :host,
    .input-container,
    .input-section,
    .input {
      width: 100%;
    }

    input {
      font-family: inherit;
    }

    :host([readonly]) .leading-icon {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled]) .input,
    :host([disabled]) .input::placeholder,
    :host([disabled]) .prefix-text {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled]) .input-container,
    :host([readonly]) .input-container,
    :host([disabled][help-text-type='default']) .input-container,
    :host([disabled][help-text-type='success']) .input-container,
    :host([disabled][help-text-type='warning']) .input-container,
    :host([disabled][help-text-type='error']) .input-container,
    :host([disabled][help-text-type='priority']) .input-container {
      border-color: var(--mdc-input-disabled-border-color);
      background: var(--mdc-input-disabled-background-color);
    }

    .leading-icon {
      aspect-ratio: 1;
    }

    .input-container {
      height: 2rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-input-border-color);
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
      min-width: 3.25rem;
    }

    .input-section {
      display: flex;
      gap: 0.25rem;
    }

    .input {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: var(--mdc-input-background-color);
      outline: none;
    }

    .input::selection {
      background-color: var(--mdc-input-selection-background-color);
      color: var(--mdc-input-selection-text-color);
    }

    .prefix-text {
      color: var(--mdc-input-support-text-color);
      white-space: nowrap; // restrict prefix text to be in one line
    }

    :host(:not([disabled])) .input-container:hover {
      background-color: var(--mdc-input-hover-background-color);
    }

    :host(:not([disabled])) .input-container:active,
    :host(:not([disabled])) .input-container:focus-within {
      background-color: var(--mdc-input-focused-background-color);
      border-color: var(--mdc-input-focused-border-color);
    }

    .input::placeholder {
      color: var(--mdc-input-support-text-color);
    }

    :host([help-text-type='error']) .input-container,
    :host([help-text-type='error']) .input-container:focus-within {
      border-color: var(--mdc-input-error-border-color);
    }
    :host([help-text-type='warning']) .input-container,
    :host([help-text-type='warning']) .input-container:focus-within {
      border-color: var(--mdc-input-warning-border-color);
    }
    :host([help-text-type='success']) .input-container,
    :host([help-text-type='success']) .input-container:focus-within {
      border-color: var(--mdc-input-success-border-color);
    }
    :host([help-text-type='priority']) .input-container,
    :host([help-text-type='priority']) input-container:focus-within {
      border-color: var(--mdc-input-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,...I(!0)];var _=Object.defineProperty,o=(h,t,r,c)=>{for(var n=void 0,d=h.length-1,m;d>=0;d--)(m=h[d])&&(n=m(t,r,n)||n);return n&&_(t,r,n),n};const u=class u extends f(v(b)){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=T.OFF,this.autocomplete=$.OFF,this.autofocus=!1,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,r,c){super.attributeChangedCallback(t,r,c),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(n=>{this.onerror&&this.onerror(n)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage&&this.inputElement.setCustomValidity(this.validationMessage),this.setValidity()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity(),this.checkValidity()}onChange(t){this.updateValue(),this.setInputValidity();const r=t.constructor;this.dispatchEvent(new r(t.type,t))}handleKeyDown(t){var r;t.key==="Enter"&&((r=this.form)==null||r.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?l`
      <mdc-icon
        class="leading-icon"
        part="leading-icon"
        name=${this.leadingIcon}
        size="${s.ICON_SIZE_VALUE}"
        length-unit="${s.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `:p}renderPrefixText(){return this.prefixText?l`
      <mdc-text
        class="prefix-text"
        tagname="${s.PREFIX_TEXT_TAG}"
        type="${s.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,E.MAX_LENGTH)}
      </mdc-text>
    `:p}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(t=!1){const r=t||this.value&&this.trailingButton;return r?l`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${r?"":"hidden"}"
        prefix-icon="${s.CLEAR_BUTTON_ICON}"
        variant="${s.CLEAR_BUTTON_VARIANT}"
        size="${s.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!r}
      ></mdc-button>
    `:p}renderInputElement(t,r=!1){const c=r?"":this.placeholder;return l`<input
      aria-label="${this.dataAriaLabel??""}"
      class="input"
      part="mdc-input"
      id="${this.id}"
      name="${this.name}"
      .value="${g(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${a(this.helpText?x.HELPER_TEXT_ID:"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${a(c)}
      minlength=${a(this.minlength)}
      maxlength=${a(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      ?autofocus="${this.autofocus}"
      dirname=${a(this.dirname)}
      pattern=${a(this.pattern)}
      list=${a(this.list)}
      size=${a(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`}render(){return l`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div class="input-section" part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(s.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():p}
    `}};u.styles=[...b.styles,...k];let e=u;o([i({type:String})],e.prototype,"placeholder");o([i({type:Boolean})],e.prototype,"readonly");o([i({type:String,attribute:"prefix-text"})],e.prototype,"prefixText");o([i({type:String,attribute:"leading-icon"})],e.prototype,"leadingIcon");o([i({type:Boolean,attribute:"trailing-button"})],e.prototype,"trailingButton");o([i({type:Number})],e.prototype,"maxlength");o([i({type:Number})],e.prototype,"minlength");o([i({type:String})],e.prototype,"autocapitalize");o([i({type:String})],e.prototype,"autocomplete");o([i({type:Boolean})],e.prototype,"autofocus");o([i({type:String})],e.prototype,"dirname");o([i({type:String})],e.prototype,"pattern");o([i({type:String})],e.prototype,"list");o([i({type:Number})],e.prototype,"size");o([i({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");export{e as I};
