import{i as q,D as m,k as n}from"./lit-element-CHllvULs.js";import{u as P,n as o}from"./index-HW6KrQZO.js";import{t as l}from"./if-defined-C4tJgJ33.js";import{h as D}from"./index-CEbgplXA.js";import"./index-Mdu4l6Cj.js";import{B as z,I as H}from"./button.constants-D0rdLcnn.js";import{V as f,D as w,F as T}from"./formfieldwrapper.component-CWIPqk6J.js";import{T as B,V as U}from"./text.constants-DJu2q-6E.js";import{D as X}from"./DataAriaLabelMixin-vs_lw9aw.js";import{F as M}from"./FormInternalsMixin-D4P2zbkO.js";import"./index-BT1ISfLJ.js";import"./index-W-2h3si0.js";import"./index-BGkqZMsC.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Z,s as G}from"./commonArgTypes-BluK8w5L.js";import{d as R}from"./utils-D1SE5bce.js";import"./buttonsimple.component-CXHzGrZ-.js";import"./DisabledMixin-DBt9didn.js";import"./state-CWckTc1X.js";import"./button.utils-CC-feA6A.js";import"./iframe-CIJ1rX14.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const j=[q`
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
  `,...D(!0)],Y=P.constructTagName("input"),F={OFF:"off",NONE:"none",ON:"on",SENTENCES:"sentences",WORDS:"words",CHARACTERS:"characters"},K={MAX_LENGTH:10,HELPERTEXT:"Prefix text should not exceed 10 characters",VALIDATION:f.ERROR},c={VALIDATION:f.DEFAULT,ICON_SIZE_VALUE:1,ICON_SIZE_UNIT:"rem",CLEAR_BUTTON_ICON:"cancel-bold",CLEAR_BUTTON_VARIANT:z.TERTIARY,CLEAR_BUTTON_SIZE:H[20],PREFIX_TEXT_TYPE:B.BODY_MIDSIZE_REGULAR,PREFIX_TEXT_TAG:U.SPAN};var W=Object.defineProperty,a=(e,t,i,u)=>{for(var d=void 0,p=e.length-1,v;p>=0;p--)(v=e[p])&&(d=v(t,i,d)||d);return d&&W(t,i,d),d};const g=class g extends M(X(T)){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=F.OFF,this.autocomplete="off",this.autofocus=!1,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.inputElement.checkValidity(),this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setInputValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&this.handleValueChange()}setInputValidity(){this.validationMessage&&this.value===""?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()}attributeChangedCallback(t,i,u){super.attributeChangedCallback(t,i,u),["maxlength","minlength","pattern","required"].includes(t)&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(p=>{this.onerror&&this.onerror(p)})}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity()}onChange(t){this.updateValue(),this.setInputValidity();const i=t.constructor;this.dispatchEvent(new i(t.type,t))}handleKeyDown(t){var i;t.key==="Enter"&&((i=this.form)==null||i.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?n`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon} 
        size="${c.ICON_SIZE_VALUE}" 
        length-unit="${c.ICON_SIZE_UNIT}">
      </mdc-icon>
    `:m}renderPrefixText(){return this.prefixText?n`
      <mdc-text 
        class="prefix-text" 
        tagname="${c.PREFIX_TEXT_TAG}" 
        type="${c.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,K.MAX_LENGTH)}
      </mdc-text>
    `:m}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus()}renderTrailingButton(){return this.trailingButton?n`
      <mdc-button 
        part='trailing-button'
        class='${this.value?"":"hidden"}'
        prefix-icon='${c.CLEAR_BUTTON_ICON}'
        variant='${c.CLEAR_BUTTON_VARIANT}'
        size="${c.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!this.value}
      ></mdc-button>
    `:m}render(){return n`
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
            aria-describedby="${l(this.helpText?w.HELPER_TEXT_ID:"")}"
            placeholder=${l(this.placeholder)}
            minlength=${l(this.minlength)}
            maxlength=${l(this.maxlength)}
            autocapitalize=${this.autocapitalize}
            autocomplete=${this.autocomplete}
            ?autofocus="${this.autofocus}"
            dirname=${l(this.dirname)}
            pattern=${l(this.pattern)}
            list=${l(this.list)}
            size=${l(this.size)}
            @input=${this.onInput}
            @change=${this.onChange}
            @keydown=${this.handleKeyDown}
          />
        </slot>
       </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():m}
    `}};g.styles=[...T.styles,...j];let r=g;a([o({type:String})],r.prototype,"placeholder");a([o({type:Boolean})],r.prototype,"readonly");a([o({type:String,attribute:"prefix-text"})],r.prototype,"prefixText");a([o({type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");a([o({type:Boolean,attribute:"trailing-button"})],r.prototype,"trailingButton");a([o({type:Number})],r.prototype,"maxlength");a([o({type:Number})],r.prototype,"minlength");a([o({type:String})],r.prototype,"autocapitalize");a([o({type:String})],r.prototype,"autocomplete");a([o({type:Boolean})],r.prototype,"autofocus");a([o({type:String})],r.prototype,"dirname");a([o({type:String})],r.prototype,"pattern");a([o({type:String})],r.prototype,"list");a([o({type:Number})],r.prototype,"size");a([o({type:String,attribute:"clear-aria-label"})],r.prototype,"clearAriaLabel");r.register(Y);const J=e=>{const t=e.maxlength&&e.value?e.value.substring(0,e.maxlength):e.value;return n` <mdc-input
    @input="${s("oninput")}"
    @change="${s("onchange")}"
    @focus="${s("onfocus")}"
    @blur="${s("onblur")}"
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
    data-aria-label="${l(e["data-aria-label"])}"
    leading-icon="${e["leading-icon"]}"
    maxlength="${l(e.maxlength)}"
    minlength="${l(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?autofocus="${e.autofocus}"
    autocomplete="${e.autocomplete}"
    dirname="${l(e.dirname)}"
    pattern="${l(e.pattern)}"
    list="${l(e.list)}"
    size="${l(e.size)}"
    clear-aria-label="${l(e["clear-aria-label"])}"
    ></mdc-input>`},Ae={title:"Components/input",tags:["autodocs"],component:"mdc-input",render:J,parameters:{badges:["stable"]},argTypes:{...Z,...G,"help-text-type":{control:"select",options:Object.values(f)},name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"prefix-text":{control:"text"},"leading-icon":{control:"text"},"trailing-button":{control:"boolean"},minlength:{control:"number"},maxlength:{control:"number"},autocapitalize:{control:"select",options:Object.values(F)},autofocus:{control:"boolean"},autocomplete:{control:"text"},dirname:{control:"text"},pattern:{control:"text"},list:{control:"text"},size:{control:"number"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},...R(["--mdc-input-disabled-border-color","--mdc-input-disabled-text-color","--mdc-input-disabled-background-color","--mdc-input-border-color","--mdc-input-text-color","--mdc-input-background-color","--mdc-input-selection-background-color","--mdc-input-selection-text-color","--mdc-input-support-text-color","--mdc-input-hover-background-color","--mdc-input-focused-background-color","--mdc-input-focused-border-color","--mdc-input-error-border-color","--mdc-input-warning-border-color","--mdc-input-success-border-color","--mdc-input-primary-border-color"])}},h={args:{name:"input",label:"Label","required-label":"required",placeholder:"Placeholder",value:"","help-text":"Helper text","help-text-type":"default",readonly:!1,disabled:!1,"prefix-text":"","leading-icon":"","trailing-button":!1,autocapitalize:"off",autofocus:!1,"clear-aria-label":"clear input","data-aria-label":""}},b={render:()=>n`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  `},x={argTypes:{...R(["label","help-text","required-label","placeholder","value","help-text-type"])},render:()=>n`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(f).map(e=>n`<mdc-input
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
      </div>`},y={render:()=>n`
    <form @submit=${t=>{t.preventDefault();const u=new FormData(t.target).get("user-name");s("Form Submitted")({value:u})}}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-input
       name='user-name'
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
        validation-message="Name is required"
      ></mdc-input>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `};var $,E,I;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var A,_,L;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
  <div style='width: 200px;'>
    <mdc-input label='This is a large label text'
    required-label='required' 
    placeholder='placeholder'>
    </mdc-input>
  </div>
  \`
}`,...(L=(_=b.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var S,N,C;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(N=x.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var k,O,V;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <fieldset>
      <legend>Form Example</legend>
      <mdc-input
       name='user-name'
        label="First Name"
        required-label="required"
        placeholder="Enter your name"
        validation-message="Name is required"
      ></mdc-input>
      <div style='display: flex; gap: 0.25rem;; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    \`;
  }
}`,...(V=(O=y.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const _e=["Example","InputInSmallContainer","AllVariants","FormFieldInput"];export{x as AllVariants,h as Example,y as FormFieldInput,b as InputInSmallContainer,_e as __namedExportsOrder,Ae as default};
