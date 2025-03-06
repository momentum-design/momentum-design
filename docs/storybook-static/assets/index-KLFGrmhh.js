import{i as g,D as c,k as d}from"./lit-element-CHllvULs.js";import{u as x,n as r}from"./index-HW6KrQZO.js";import{t as n}from"./if-defined-C4tJgJ33.js";import{a as v}from"./index-BGjwsboe.js";import"./index-BDnyu2mJ.js";import{B as T,I as f}from"./button.constants-Bg6wWCWM.js";import{V as y,D as E,F as b}from"./formfieldwrapper.component-63e8oEkZ.js";import{T as I,V as A}from"./text.constants-DJu2q-6E.js";import{D as _}from"./DataAriaLabelMixin-vs_lw9aw.js";import{F as $}from"./FormInternalsMixin-DnHjpz6p.js";import{v as N}from"./v4-CmTdKEVZ.js";import"./index-D2o0RFrW.js";import"./index-EmaOIA8v.js";import"./index-BGkqZMsC.js";const C=[g`
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
`,...v(!0)],k=x.constructTagName("input"),R={OFF:"off",NONE:"none",ON:"on",SENTENCES:"sentences",WORDS:"words",CHARACTERS:"characters"},S={MAX_LENGTH:10,HELPERTEXT:"Prefix text should not exceed 10 characters",VALIDATION:y.ERROR},s={VALIDATION:y.DEFAULT,ICON_SIZE_VALUE:1,ICON_SIZE_UNIT:"rem",CLEAR_BUTTON_ICON:"cancel-bold",CLEAR_BUTTON_VARIANT:T.TERTIARY,CLEAR_BUTTON_SIZE:f[20],PREFIX_TEXT_TYPE:I.BODY_MIDSIZE_REGULAR,PREFIX_TEXT_TAG:A.SPAN};var L=Object.defineProperty,o=(u,t,i,h)=>{for(var a=void 0,l=u.length-1,m;l>=0;l--)(m=u[l])&&(a=m(t,i,a)||a);return a&&L(t,i,a),a};const p=class p extends $(_(b)){constructor(){super(),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=R.OFF,this.autocomplete="off",this.autofocus=!1,this.clearAriaLabel="",this.id=`mdc-input-${N()}`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setInputValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}setInputValidity(){this.validationMessage&&this.value===""?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}attributeChangedCallback(t,i,h){super.attributeChangedCallback(t,i,h),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(l=>{this.onerror&&this.onerror(l)})}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity()}onChange(t){this.updateValue(),this.setInputValidity();const i=t.constructor;this.dispatchEvent(new i(t.type,t))}handleKeyDown(t){var i;t.key==="Enter"&&((i=this.form)==null||i.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?d`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${s.ICON_SIZE_VALUE}" 
        length-unit="${s.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:c}renderPrefixText(){return this.prefixText?d`
      <mdc-text 
        class="prefix-text" 
        tagname="${s.PREFIX_TEXT_TAG}" 
        type="${s.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,S.MAX_LENGTH)}
      </mdc-text>
    `:c}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(){return this.trailingButton?d`
      <mdc-button 
        part='trailing-button'
        class='own-focus-ring ${this.value?"":"hidden"}'
        prefix-icon='${s.CLEAR_BUTTON_ICON}'
        variant='${s.CLEAR_BUTTON_VARIANT}'
        size="${s.CLEAR_BUTTON_SIZE}"
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
            aria-describedby="${n(this.helpText?E.HELPER_TEXT_ID:"")}"
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
    `}};p.styles=[...b.styles,...C];let e=p;o([r({type:String})],e.prototype,"placeholder");o([r({type:Boolean})],e.prototype,"readonly");o([r({type:String,attribute:"prefix-text"})],e.prototype,"prefixText");o([r({type:String,attribute:"leading-icon"})],e.prototype,"leadingIcon");o([r({type:Boolean,attribute:"trailing-button"})],e.prototype,"trailingButton");o([r({type:Number})],e.prototype,"maxlength");o([r({type:Number})],e.prototype,"minlength");o([r({type:String})],e.prototype,"autocapitalize");o([r({type:String})],e.prototype,"autocomplete");o([r({type:Boolean})],e.prototype,"autofocus");o([r({type:String})],e.prototype,"dirname");o([r({type:String})],e.prototype,"pattern");o([r({type:String})],e.prototype,"list");o([r({type:Number})],e.prototype,"size");o([r({type:String,attribute:"clear-aria-label"})],e.prototype,"clearAriaLabel");e.register(k);export{R as A};
