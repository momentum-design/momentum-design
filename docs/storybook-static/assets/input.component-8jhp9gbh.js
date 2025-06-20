import{i as y,D as d,k as c}from"./lit-element-D5KKan5q.js";import{n as i}from"./index-C9z9WAEj.js";import{t as n}from"./if-defined-D5BV9-c0.js";import{h as g}from"./index-MA1r3zrt.js";import"./index-C-GFQ3J6.js";import{A as x,a as v,D as a,P as f}from"./input.constants-DOAqpgue.js";import{D as T,F as b}from"./formfieldwrapper.component-B1RGcmSz.js";import{D as $}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as E}from"./FormInternalsMixin-CqDKsEWP.js";const I=[y`
  :host{
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

  :host, .input-container, .input-section, .input{
    width: 100%;
  }

  input{
    font-family: inherit;
  }

  :host([readonly]) .leading-icon {
    color: var(--mdc-input-support-text-color);
  }

  :host([disabled]) .input,
  :host([disabled]) .input::placeholder,
  :host([disabled]) .prefix-text{
    color: var(--mdc-input-disabled-text-color);
  }

  :host([disabled]) .input-container,
  :host([readonly]) .input-container,
  :host([disabled][help-text-type="default"]) .input-container,
  :host([disabled][help-text-type="success"]) .input-container,
  :host([disabled][help-text-type="warning"]) .input-container,
  :host([disabled][help-text-type="error"]) .input-container,
  :host([disabled][help-text-type="priority"]) .input-container{
    border-color: var(--mdc-input-disabled-border-color);
    background: var(--mdc-input-disabled-background-color);
  }

  .leading-icon{
    aspect-ratio: 1;
  }

  .input-container{
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-input-border-color);
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
    min-width: 3.25rem;
  }

  .input-section{
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

  .prefix-text{
    color: var(--mdc-input-support-text-color);
    white-space: nowrap; // restrict prefix text to be in one line
  }

  :host(:not([disabled])) .input-container:hover{
    background-color: var(--mdc-input-hover-background-color);
  }

  :host(:not([disabled])) .input-container:active, :host(:not([disabled])) .input-container:focus-within{
    background-color: var(--mdc-input-focused-background-color);
    border-color: var(--mdc-input-focused-border-color);
  }

  .input::placeholder{
    color: var(--mdc-input-support-text-color);
  }

  :host([help-text-type="error"]) .input-container, :host([help-text-type="error"]) .input-container:focus-within {
    border-color: var(--mdc-input-error-border-color);
  }
  :host([help-text-type="warning"]) .input-container, :host([help-text-type="warning"]) .input-container:focus-within {
    border-color: var(--mdc-input-warning-border-color);
  }
  :host([help-text-type="success"]) .input-container, :host([help-text-type="success"]) .input-container:focus-within {
    border-color: var(--mdc-input-success-border-color);
  }
  :host([help-text-type="priority"]) .input-container, :host([help-text-type="priority"]) input-container:focus-within {
    border-color: var(--mdc-input-primary-border-color);
  }

  .hidden{
    opacity: 0;
    pointer-events: none;
  }
`,...g(!0)];var k=Object.defineProperty,o=(h,t,r,p)=>{for(var s=void 0,l=h.length-1,m;l>=0;l--)(m=h[l])&&(s=m(t,r,s)||s);return s&&k(t,r,s),s};const u=class u extends E($(b)){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=x.OFF,this.autocomplete=v.OFF,this.autofocus=!1,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setInputValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}setInputValidity(){this.required&&this.validationMessage&&this.value===""?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}attributeChangedCallback(t,r,p){super.attributeChangedCallback(t,r,p),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(l=>{this.onerror&&this.onerror(l)})}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity()}onChange(t){this.updateValue(),this.setInputValidity();const r=t.constructor;this.dispatchEvent(new r(t.type,t))}handleKeyDown(t){var r;t.key==="Enter"&&((r=this.form)==null||r.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?c`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${a.ICON_SIZE_VALUE}" 
        length-unit="${a.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:d}renderPrefixText(){return this.prefixText?c`
      <mdc-text 
        class="prefix-text" 
        tagname="${a.PREFIX_TEXT_TAG}" 
        type="${a.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,f.MAX_LENGTH)}
      </mdc-text>
    `:d}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(t=!1){const r=t||this.value&&this.trailingButton;return r?c`
      <mdc-button 
        part='trailing-button'
        class='own-focus-ring ${r?"":"hidden"}'
        prefix-icon='${a.CLEAR_BUTTON_ICON}'
        variant='${a.CLEAR_BUTTON_VARIANT}'
        size="${a.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!r}
      ></mdc-button>
    `:d}renderInputElement(t,r=!1){const p=r?"":this.placeholder;return c`<input 
                  aria-label="${this.dataAriaLabel??""}"
                  class='input'
                  part='input'
                  id="${this.id}"
                  name="${this.name}"
                  .value="${this.value}"
                  ?disabled="${this.disabled}"
                  ?readonly="${this.readonly}"
                  ?required="${this.required}"
                  type="${t}"
                  aria-describedby="${n(this.helpText?T.HELPER_TEXT_ID:"")}"
                  aria-invalid="${this.helpTextType==="error"?"true":"false"}"
                  placeholder=${n(p)}
                  minlength=${n(this.minlength)}
                  maxlength=${n(this.maxlength)}
                  autocapitalize=${this.autocapitalize}
                  autocomplete=${this.autocomplete}
                  ?autofocus="${this.autofocus}"
                  dirname=${n(this.dirname)}
                  pattern=${n(this.pattern)}
                  list=${n(this.list)}
                  size=${n(this.size)}
                  @input=${this.onInput}
                  @change=${this.onChange}
                  @keydown=${this.handleKeyDown}
                />`}render(){return c`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
       <div class="input-section" part="input-section">
       <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
        <slot name="input">${this.renderInputElement(a.INPUT_TYPE)}</slot>
       </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():d}
    `}};u.styles=[...b.styles,...I];let e=u;o([i({type:String})],e.prototype,"placeholder");o([i({type:Boolean})],e.prototype,"readonly");o([i({type:String,attribute:"prefix-text"})],e.prototype,"prefixText");o([i({type:String,attribute:"leading-icon"})],e.prototype,"leadingIcon");o([i({type:Boolean,attribute:"trailing-button"})],e.prototype,"trailingButton");o([i({type:Number})],e.prototype,"maxlength");o([i({type:Number})],e.prototype,"minlength");o([i({type:String})],e.prototype,"autocapitalize");o([i({type:String})],e.prototype,"autocomplete");o([i({type:Boolean})],e.prototype,"autofocus");o([i({type:String})],e.prototype,"dirname");o([i({type:String})],e.prototype,"pattern");o([i({type:String})],e.prototype,"list");o([i({type:Number})],e.prototype,"size");o([i({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");export{e as I};
