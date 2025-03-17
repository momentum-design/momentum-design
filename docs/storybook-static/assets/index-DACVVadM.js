import{i as y,D as c,k as d}from"./lit-element-D5KKan5q.js";import{n as r}from"./index-C9z9WAEj.js";import{t as n}from"./if-defined-D5BV9-c0.js";import{a as g}from"./index-BX3Tn-Br.js";import"./index-bxhk8h4S.js";import{A as v,D as l,P as x,T as f}from"./input.constants-SdAiAjzS.js";import{D as $,F as b}from"./formfieldwrapper.component-DKn4fQEK.js";import{F as T,D as E}from"./FormInternalsMixin-BezuNa1f.js";import"./index-vGa-YSJb.js";import"./index-P21x_s7g.js";import"./index-D3DhXfcW.js";const k=[y`
  :host{
    --mdc-input-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-input-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-input-disabled-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
    --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
    --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-input-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-input-focused-background-color: var(--mds-color-theme-background-primary-active);
    --mdc-input-focused-border-color: var(--mds-color-theme-outline-input-active);
    --mdc-input-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-input-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-input-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-input-primary-border-color: var(--mds-color-theme-text-accent-normal);
  }

  :host, .input-container, .input-section, .input{
    width: 100%;
  }

  :host([readonly]) .leading-icon {
    color: var(--mdc-input-support-text-color);
  }

  :host([disabled]) .input,
  :host([disabled]) .input::placeholder,
  :host([disabled]) .prefix-text{
    color: var(--mdc-input-disabled-text-color);
  }

  :host([disabled]) .input,
  :host([readonly]) .input{
    border-color: var(--mdc-input-disabled-border-color);
    background: var(--mdc-input-disabled-background-color);
  }

  :host([disabled][help-text-type="default"]) .input-container,
  :host([disabled][help-text-type="success"]) .input-container,
  :host([disabled][help-text-type="warning"]) .input-container,
  :host([disabled][help-text-type="error"]) .input-container,
  :host([disabled][help-text-type="priority"]) .input-container{
    border-color: var(--mdc-input-disabled-border-color);
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
`,...g(!0)];var I=Object.defineProperty,i=(u,t,o,h)=>{for(var a=void 0,s=u.length-1,m;s>=0;s--)(m=u[s])&&(a=m(t,o,a)||a);return a&&I(t,o,a),a};const p=class p extends T(E(b)){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=v.OFF,this.autocomplete="off",this.autofocus=!1,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setInputValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}setInputValidity(){this.requiredLabel&&this.validationMessage&&this.value===""?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}attributeChangedCallback(t,o,h){super.attributeChangedCallback(t,o,h),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity()}onChange(t){this.updateValue(),this.setInputValidity();const o=t.constructor;this.dispatchEvent(new o(t.type,t))}handleKeyDown(t){var o;t.key==="Enter"&&((o=this.form)==null||o.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?d`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${l.ICON_SIZE_VALUE}" 
        length-unit="${l.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:c}renderPrefixText(){return this.prefixText?d`
      <mdc-text 
        class="prefix-text" 
        tagname="${l.PREFIX_TEXT_TAG}" 
        type="${l.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,x.MAX_LENGTH)}
      </mdc-text>
    `:c}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(){return this.trailingButton?d`
      <mdc-button 
        part='trailing-button'
        class='own-focus-ring ${this.value?"":"hidden"}'
        prefix-icon='${l.CLEAR_BUTTON_ICON}'
        variant='${l.CLEAR_BUTTON_VARIANT}'
        size="${l.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!this.value}
      ></mdc-button>
    `:c}render(){return d`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
       <div class="input-section" part="input-section">
       <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
        <slot name="input">
          <input 
            aria-label="${this.dataAriaLabel??""}"
            class='input'
            part='input'
            id="${this.id}"
            name="${this.name}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${!!this.requiredLabel}"
            type="text"
            aria-describedby="${n(this.helpText?$.HELPER_TEXT_ID:"")}"
            aria-invalid="${this.helpTextType==="error"?"true":"false"}"
            placeholder=${n(this.placeholder)}
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
          />
        </slot>
       </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():c}
    `}};p.styles=[...b.styles,...k];let e=p;i([r({type:String})],e.prototype,"placeholder");i([r({type:Boolean})],e.prototype,"readonly");i([r({type:String,attribute:"prefix-text"})],e.prototype,"prefixText");i([r({type:String,attribute:"leading-icon"})],e.prototype,"leadingIcon");i([r({type:Boolean,attribute:"trailing-button"})],e.prototype,"trailingButton");i([r({type:Number})],e.prototype,"maxlength");i([r({type:Number})],e.prototype,"minlength");i([r({type:String})],e.prototype,"autocapitalize");i([r({type:String})],e.prototype,"autocomplete");i([r({type:Boolean})],e.prototype,"autofocus");i([r({type:String})],e.prototype,"dirname");i([r({type:String})],e.prototype,"pattern");i([r({type:String})],e.prototype,"list");i([r({type:Number})],e.prototype,"size");i([r({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");e.register(f);
