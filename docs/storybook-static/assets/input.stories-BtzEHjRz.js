import{i as O,D as m,k as c}from"./lit-element-CHllvULs.js";import{u as C,n as l}from"./index-HW6KrQZO.js";import{t as a}from"./if-defined-C4tJgJ33.js";import{a as P}from"./index-MYSkQ1zX.js";import"./index-D17SFcGz.js";import{D as R,V as q,N as D}from"./ValueMixin-DFWGhyGn.js";import{B as H,I as z}from"./button.constants-CjxsrM-Y.js";import{V as g,F as T}from"./formfieldwrapper.component-Dae6IeB3.js";import{T as B,V as U}from"./text.constants-DJu2q-6E.js";import"./index-Dlz7565z.js";import"./index-BRJNDW9c.js";import"./index-BGkqZMsC.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as w,s as X}from"./commonArgTypes-BluK8w5L.js";import{d as k}from"./utils-D1SE5bce.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-C2NzybLk.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t){return(i,s,n)=>{const d=u=>{var v;return((v=u.renderRoot)==null?void 0:v.querySelector(e))??null};return M(i,s,{get(){return d(this)}})}}const j=[O`
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
    white-space: nowrap; // restirct prefix text to be in one line
  }

  :host(:not([disabled])) .input-container:hover{
    background-color: var(--mdc-input-hover-background-color);
  }

  :host(:not([disabled])) .input-container:active, :host(:not([disabled])) .input-container:focus-within{
    background-color: var(--mdc-input-focused-background-color);
    border-color:  var(--mdc-input-focused-border-color);
  }

  .input::placeholder{
    color: var(--mdc-input-support-text-color);
  }

  :host([help-text-type="error"]) .input-container {
    border-color: var(--mdc-input-error-border-color);
  }
  :host([help-text-type="warning"]) .input-container {
    border-color: var(--mdc-input-warning-border-color);
  }
  :host([help-text-type="success"]) .input-container {
    border-color: var(--mdc-input-success-border-color);
  }
  :host([help-text-type="priority"]) .input-container {
    border-color: var(--mdc-input-primary-border-color);
  }

  .hidden{
    opacity: 0;
    pointer-events: none;
  }
  `,...P(!0)],G=C.constructTagName("input"),F={OFF:"off",NONE:"none",ON:"on",SENTENCES:"sentences",WORDS:"words",CHARACTERS:"characters"},Y={MAX_LENGTH:10,HELPERTEXT:"Prefix text should not exceed 10 characters",VALIDATION:g.ERROR},p={VALIDATION:g.DEFAULT,ICON_SIZE_VALUE:1,ICON_SIZE_UNIT:"rem",CLEAR_BUTTON_ICON:"cancel-bold",CLEAR_BUTTON_VARIANT:H.TERTIARY,CLEAR_BUTTON_SIZE:z[20],PREFIX_TEXT_TYPE:B.BODY_MIDSIZE_REGULAR,PREFIX_TEXT_TAG:U.SPAN};var W=Object.defineProperty,o=(e,t,i,s)=>{for(var n=void 0,d=e.length-1,u;d>=0;d--)(u=e[d])&&(n=u(t,i,n)||n);return n&&W(t,i,n),n};const f=class f extends R(q(D(T))){constructor(){super(),this.placeholder="",this.required=!1,this.readonly=!1,this.trailingButton=!1,this.autocapitalize=F.OFF,this.autocomplete="off",this.autofocus=!1,this.clearAriaLabel="",this.internals=this.attachInternals()}checkValidity(){return this.setValidityFromInput(),this.internals.checkValidity()}reportValidity(){return this.setValidityFromInput(),this.internals.reportValidity()}get form(){return this.internals.form}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setValidityFromInput(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}handleValueChange(){this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.setValidityFromInput()}).catch(t=>{this.onerror&&this.onerror(t)})}attributeChangedCallback(t,i,s){super.attributeChangedCallback(t,i,s),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setValidityFromInput()}).catch(d=>{this.onerror&&this.onerror(d)})}setValidityFromInput(){this.inputElement&&this.internals.setValidity(this.inputElement.validity,this.inputElement.validationMessage,this.inputElement)}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setValidityFromInput()}onChange(t){this.updateValue(),this.setValidityFromInput();const i=t.constructor;this.dispatchEvent(new i(t.type,t))}renderLeadingIcon(){return this.leadingIcon?c`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${p.ICON_SIZE_VALUE}" 
        length-unit="${p.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:m}renderPrefixText(){return this.prefixText?c`
      <mdc-text 
        class="prefix-text" 
        tagname="${p.PREFIX_TEXT_TAG}" 
        type="${p.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,Y.MAX_LENGTH)}
      </mdc-text>
    `:m}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(){return this.trailingButton?c`
      <mdc-button 
        class='${this.value?"":"hidden"}'
        prefix-icon='${p.CLEAR_BUTTON_ICON}'
        variant='${p.CLEAR_BUTTON_VARIANT}'
        size="${p.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!this.value}
      ></mdc-button>
    `:m}render(){return c`
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
            ?required="${this.required}"
            type="text"
            placeholder=${a(this.placeholder)}
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
          />
        </slot>
       </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():m}
    `}};f.formAssociated=!0,f.styles=[...T.styles,...j];let r=f;o([l({type:String})],r.prototype,"placeholder");o([l({type:Boolean})],r.prototype,"required");o([l({type:Boolean})],r.prototype,"readonly");o([l({type:String,attribute:"prefix-text"})],r.prototype,"prefixText");o([l({type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");o([l({type:Boolean,attribute:"trailing-button"})],r.prototype,"trailingButton");o([l({type:Number})],r.prototype,"maxlength");o([l({type:Number})],r.prototype,"minlength");o([l({type:String})],r.prototype,"autocapitalize");o([l({type:String})],r.prototype,"autocomplete");o([l({type:Boolean})],r.prototype,"autofocus");o([l({type:String})],r.prototype,"dirname");o([l({type:String})],r.prototype,"pattern");o([l({type:String})],r.prototype,"list");o([l({type:Number})],r.prototype,"size");o([l({type:String,attribute:"clear-aria-label"})],r.prototype,"clearAriaLabel");o([Z("input")],r.prototype,"inputElement");r.register(G);const J=e=>{const t=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return c` <mdc-input
    @change="${y("onchange")}"
    @focus="${y("onfocus")}"
    @blur="${y("onblur")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${t}"
    class="${e.class}"
    style="${e.style}"
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?trailing-button="${e["trailing-button"]}"
    prefix-text="${e["prefix-text"]}"
    data-aria-label="${a(e["data-aria-label"])}"
    leading-icon="${e["leading-icon"]}"
    maxlength="${a(e.maxlength)}"
    minlength="${a(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?autofocus="${e.autofocus}"
    autocomplete="${e.autocomplete}"
    dirname="${a(e.dirname)}"
    pattern="${a(e.pattern)}"
    list="${a(e.list)}"
    size="${a(e.size)}"
    clear-aria-label="${a(e["clear-aria-label"])}"
    ></mdc-input>`},Te={title:"Work In Progress/input",tags:["autodocs"],component:"mdc-input",render:J,parameters:{badges:["wip"]},argTypes:{...w,...X,"help-text-type":{control:"select",options:Object.values(g)},name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(F)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...k(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},h={args:{name:"input",label:"Label (required)",placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",required:!0,readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},b={argTypes:{...k(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>c`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(g).map(e=>c`<mdc-input
      help-text-type="${e}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="${e}_value"
      ></mdc-input>`)}
      <mdc-input 
      label="Label (required)"
      help-text="Helper text"
      help-text-type="default"
      required placeholder="Input is required"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      readonly 
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      value="This is readonly"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Text disabled"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      prefix-text="https://"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      ></mdc-input>
      </div>`},x={render:()=>c`
    <form @submit=${t=>{t.preventDefault();const s=new FormData(t.target).get("user-name");y("Form Submitted")({value:s})}}>
      <mdc-input
       name='user-name'
        label="First Name (required)"
        placeholder="Enter your name"
        required
      ></mdc-input>
      <mdc-button type="submit" size='24' style='margin-top: 0.5rem'>Submit</mdc-button>
    </form>
    `};var $,E,I;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'input',
    label: 'Label (required)',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    required: true,
    readonly: false,
    disabled: false,
    'prefix-text': '',
    'leading-icon': '',
    'trailing-button': false,
    autocapitalize: 'off',
    autofocus: false,
    'clear-aria-label': 'clear input',
    'data-aria-label': ''
  }
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var A,_,L;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    \${Object.values(VALIDATION).map(validation => html\`<mdc-input
      help-text-type="\${validation}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="\${validation}_value"
      ></mdc-input>\`)}
      <mdc-input 
      label="Label (required)"
      help-text="Helper text"
      help-text-type="default"
      required placeholder="Input is required"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      readonly 
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      value="This is readonly"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      disabled placeholder="Placeholder"
      value="Text disabled"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      prefix-text="https://"
      ></mdc-input>
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      placeholder="Placeholder"
      leading-icon="placeholder-bold"
      ></mdc-input>
      </div>\`
}`,...(L=(_=b.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,V,S;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('user-name');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
    <form @submit=\${handleSubmit}>
      <mdc-input
       name='user-name'
        label="First Name (required)"
        placeholder="Enter your name"
        required
      ></mdc-input>
      <mdc-button type="submit" size='24' style='margin-top: 0.5rem'>Submit</mdc-button>
    </form>
    \`;
  }
}`,...(S=(V=x.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const $e=["Example","AllVariants","FormFieldInput"];export{b as AllVariants,h as Example,x as FormFieldInput,$e as __namedExportsOrder,Te as default};
