import{i as q,D as h,k as n}from"./lit-element-CHllvULs.js";import{u as D,n as i}from"./index-HW6KrQZO.js";import{t as a}from"./if-defined-C4tJgJ33.js";import{a as w}from"./index-MYSkQ1zX.js";import"./index-CCSXad9K.js";import{D as H,V as z,N as B}from"./ValueMixin-DFWGhyGn.js";import{B as U,I as X}from"./button.constants-CjxsrM-Y.js";import{V as v,F as $}from"./formfieldwrapper.component-YWp2LE49.js";import{T as M,V as Z}from"./text.constants-DJu2q-6E.js";import"./index-CEJJ7ODp.js";import"./index-BnIP7Wfy.js";import"./index-BGkqZMsC.js";import{a as u}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as j,s as G}from"./commonArgTypes-BluK8w5L.js";import{d as R}from"./utils-D1SE5bce.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-DVyOksUm.js";import"./button.utils-DSouLKFM.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=(e,t,l)=>(l.configurable=!0,l.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,l),l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e,t){return(l,s,d)=>{const c=m=>{var T;return((T=m.renderRoot)==null?void 0:T.querySelector(e))??null};return Y(l,s,{get(){return c(this)}})}}const W=[q`
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
  `,...w(!0)],J=D.constructTagName("input"),P={OFF:"off",NONE:"none",ON:"on",SENTENCES:"sentences",WORDS:"words",CHARACTERS:"characters"},Q={MAX_LENGTH:10,HELPERTEXT:"Prefix text should not exceed 10 characters",VALIDATION:v.ERROR},p={VALIDATION:v.DEFAULT,ICON_SIZE_VALUE:1,ICON_SIZE_UNIT:"rem",CLEAR_BUTTON_ICON:"cancel-bold",CLEAR_BUTTON_VARIANT:U.TERTIARY,CLEAR_BUTTON_SIZE:X[20],PREFIX_TEXT_TYPE:M.BODY_MIDSIZE_REGULAR,PREFIX_TEXT_TAG:Z.SPAN};var ee=Object.defineProperty,o=(e,t,l,s)=>{for(var d=void 0,c=e.length-1,m;c>=0;c--)(m=e[c])&&(d=m(t,l,d)||d);return d&&ee(t,l,d),d};const g=class g extends H(z(B($))){constructor(){super(),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=P.OFF,this.autocomplete="off",this.autofocus=!1,this.clearAriaLabel="",this.internals=this.attachInternals()}checkValidity(){return this.setValidityFromInput(),this.internals.checkValidity()}reportValidity(){return this.setValidityFromInput(),this.internals.reportValidity()}get form(){return this.internals.form}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setValidityFromInput(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}handleValueChange(){this.internals.setFormValue(this.value),this.updateComplete.then(()=>{this.setValidityFromInput()}).catch(t=>{this.onerror&&this.onerror(t)})}attributeChangedCallback(t,l,s){super.attributeChangedCallback(t,l,s),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setValidityFromInput()}).catch(c=>{this.onerror&&this.onerror(c)})}setValidityFromInput(){this.inputElement&&this.internals.setValidity(this.inputElement.validity,this.inputElement.validationMessage,this.inputElement)}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setValidityFromInput()}onChange(t){this.updateValue(),this.setValidityFromInput();const l=t.constructor;this.dispatchEvent(new l(t.type,t))}handleKeyDown(t){var l;t.key==="Enter"&&((l=this.internals.form)==null||l.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?n`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${p.ICON_SIZE_VALUE}" 
        length-unit="${p.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:h}renderPrefixText(){return this.prefixText?n`
      <mdc-text 
        class="prefix-text" 
        tagname="${p.PREFIX_TEXT_TAG}" 
        type="${p.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,Q.MAX_LENGTH)}
      </mdc-text>
    `:h}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(){return this.trailingButton?n`
      <mdc-button 
        part='trailing-button'
        class='${this.value?"":"hidden"}'
        prefix-icon='${p.CLEAR_BUTTON_ICON}'
        variant='${p.CLEAR_BUTTON_VARIANT}'
        size="${p.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!this.value}
      ></mdc-button>
    `:h}render(){return n`
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
            @keydown=${this.handleKeyDown}
          />
        </slot>
       </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():h}
    `}};g.formAssociated=!0,g.styles=[...$.styles,...W];let r=g;o([i({type:String})],r.prototype,"placeholder");o([i({type:Boolean})],r.prototype,"readonly");o([i({type:String,attribute:"prefix-text"})],r.prototype,"prefixText");o([i({type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");o([i({type:Boolean,attribute:"trailing-button"})],r.prototype,"trailingButton");o([i({type:Number})],r.prototype,"maxlength");o([i({type:Number})],r.prototype,"minlength");o([i({type:String})],r.prototype,"autocapitalize");o([i({type:String})],r.prototype,"autocomplete");o([i({type:Boolean})],r.prototype,"autofocus");o([i({type:String})],r.prototype,"dirname");o([i({type:String})],r.prototype,"pattern");o([i({type:String})],r.prototype,"list");o([i({type:Number})],r.prototype,"size");o([i({type:String,attribute:"clear-aria-label"})],r.prototype,"clearAriaLabel");o([K("input")],r.prototype,"inputElement");r.register(J);const te=e=>{const t=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return n` <mdc-input
    @input="${u("oninput")}"
    @change="${u("onchange")}"
    @focus="${u("onfocus")}"
    @blur="${u("onblur")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${t}"
    class="${e.class}"
    style="${e.style}"
    required-label="${e["required-label"]}"
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
    ></mdc-input>`},_e={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:te,parameters:{badges:["stable"]},argTypes:{...j,...G,"help-text-type":{control:"select",options:Object.values(v)},name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(P)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...R(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},b={args:{name:"input",label:"Label","required-label":"required",placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},x={render:()=>n`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  `},y={argTypes:{...R(["label","help-text","required-label","placeholder","value","help-text-type"])},render:()=>n`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(v).map(e=>n`<mdc-input
      help-text-type="${e}"
      label="Label"
      help-text="Helper text"
      placeholder="Placeholder"
      value="${e}_value"
      ></mdc-input>`)}
      <mdc-input 
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Input is required"
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
      </div>`},f={render:()=>n`
    <form @submit=${t=>{t.preventDefault();const s=new FormData(t.target).get("user-name");u("Form Submitted")({value:s})}}>
      <mdc-input
       name='user-name'
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
      ></mdc-input>
      <mdc-button type="submit" size='24' style='margin-top: 0.5rem'>Submit</mdc-button>
    </form>
    `};var E,I,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'input',
    label: 'Label',
    'required-label': 'required',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Helper text',
    'help-text-type': 'default',
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
}`,...(A=(I=b.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var _,L,S;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  \`
}`,...(S=(L=x.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var N,V,k;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required-label', 'placeholder', 'value', 'help-text-type'])
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
      label="Label"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Input is required"
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
}`,...(k=(V=y.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var C,F,O;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
      ></mdc-input>
      <mdc-button type="submit" size='24' style='margin-top: 0.5rem'>Submit</mdc-button>
    </form>
    \`;
  }
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Le=["Example","InputInSmallContainer","AllVariants","FormFieldInput"];export{y as AllVariants,b as Example,f as FormFieldInput,x as InputInSmallContainer,Le as __namedExportsOrder,_e as default};
