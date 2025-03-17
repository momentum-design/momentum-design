import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as o}from"./if-defined-D5BV9-c0.js";import{i as J,D as w,k as n}from"./lit-element-D5KKan5q.js";import{u as Q,n as l}from"./index-C9z9WAEj.js";import{F as ee,D as te,e as ae}from"./FormInternalsMixin-BezuNa1f.js";import{a as re}from"./index-BX3Tn-Br.js";import"./index-bxhk8h4S.js";import{V as p,D as oe,F as S}from"./formfieldwrapper.component-DKn4fQEK.js";import{A as C}from"./input.constants-SdAiAjzS.js";import{T as le}from"./text.constants-ZF0jM5wn.js";import{B as ie,I as ce}from"./button.constants-D3lNAbe_.js";import"./index-vGa-YSJb.js";import"./index-P21x_s7g.js";import"./index-D3DhXfcW.js";import{c as se,s as ne}from"./commonArgTypes-BluK8w5L.js";import{h as de,d as X}from"./utils-D1SE5bce.js";import"./v4-CQkTLCs1.js";import"./v4-BnQ50LvX.js";import"./DisabledMixin-CizxPH9K.js";import"./buttonsimple.component-CcsHbiGJ.js";import"./TabIndexMixin-CsrHswKP.js";import"./state-CSSggq2n.js";import"./button.utils-idYASaaz.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";const he=[J`
  :host {
    --mdc-textarea-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-textarea-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-textarea-disabled-background-color: var(--mds-color-theme-background-primary-disabled);
    --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-textarea-text-secondary-normal : var(--mds-color-theme-text-secondary-normal);
    --mdc-textarea-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-textarea-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-textarea-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-textarea-primary-border-color: var(--mds-color-theme-text-accent-normal);
    --mdc-textarea-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-textarea-focused-background-color: var(--mds-color-theme-background-primary-active);
    --mdc-textarea-focused-border-color: var(--mds-color-theme-outline-input-active);
    --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
    --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
  }

  :host([disabled])::part(textarea),
  :host([disabled])::part(textarea)::placeholder{
    color: var(--mdc-input-disabled-text-color);
  }

  :host([disabled])::part(textarea),
  :host([readonly])::part(textarea){
    border-color: var(--mdc-textarea-disabled-border-color);
    background: var(--mdc-textarea-disabled-background-color);
  }

  :host([disabled][help-text-type="default"])::part(textarea-container),
  :host([disabled][help-text-type="success"])::part(textarea-container),
  :host([disabled][help-text-type="warning"])::part(textarea-container),
  :host([disabled][help-text-type="error"])::part(textarea-container),
  :host([disabled][help-text-type="priority"])::part(textarea-container){
    border-color: var(--mdc-textarea-disabled-border-color);
  }

  :host::part(textarea){
    min-height: 6.25rem;
    color: var(--mdc-textarea-text-color);
    font-family: inherit;
    font-size: var(--mdc-textarea-text-font-size);
    line-height: var(--mdc-textarea-text-line-height);
    background-color: var(--mdc-textarea-background-color);
    resize: none;
    border: none;
    outline: none;
    box-sizing: border-box;
  }


  :host::part(textarea-container) {
    display: flex;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-textarea-border-color);
    overflow: hidden;
    padding: 0.375rem 0.25rem 0.25rem 0.75rem;
  }

  :host(:not([disabled]))::part(textarea-container):hover{
    background-color: var(--mdc-textarea-hover-background-color);
  }

  :host(:not([disabled]))::part(textarea-container):active, 
  :host(:not([disabled]))::part(textarea-container):focus-within{
    background-color: var(--mdc-textarea-focused-background-color);
    border-color:  var(--mdc-textarea-focused-border-color);
  }

  :host::part(textarea-footer) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .textarea::placeholder{
    color: var(--mdc-textarea-text-secondary-normal);
  }

  :host::part(character-counter){
    margin-left: auto;
    color: var(--mdc-textarea-text-secondary-normal);
  }

  :host([help-text-type="error"])::part(character-counter) {
    color: var(--mdc-textarea-error-border-color);
  }

  :host([disabled])::part(character-counter){
    color: var(--mds-color-theme-text-primary-disabled);
  }

  :host([help-text-type="error"])::part(textarea-container),
  :host([help-text-type="error"])::part(textarea-container):focus-within {
    border-color: var(--mdc-textarea-error-border-color);
  }
  :host([help-text-type="warning"])::part(textarea-container),
  :host([help-text-type="warning"])::part(textarea-container):focus-within {
    border-color: var(--mdc-textarea-warning-border-color);
  }
  :host([help-text-type="success"])::part(textarea-container),
  :host([help-text-type="success"])::part(textarea-container):focus-within {
    border-color: var(--mdc-textarea-success-border-color);
  }
  :host([help-text-type="priority"])::part(textarea-container),
  :host([help-text-type="priority"])::part(textarea-container):focus-within {
    border-color: var(--mdc-textarea-primary-border-color);
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

`,...re(!0)],me=Q.constructTagName("textarea"),pe="cancel-bold",$={HARD:"hard",SOFT:"soft"},A={OFF:"off",ON:"on"},c={ICON_SIZE_VALUE:1,ICON_SIZE_UNIT:"rem",CLEAR_BUTTON_ICON:pe,CLEAR_BUTTON_VARIANT:ie.TERTIARY,CLEAR_BUTTON_SIZE:ce[20],CHARACTER_COUNTER_TYPE:le.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:$.SOFT};var ue=Object.defineProperty,r=(e,t,d,u)=>{for(var i=void 0,s=e.length-1,m;s>=0;s--)(m=e[s])&&(i=m(t,d,i)||i);return i&&ue(t,d,i),i};const L=class L extends ee(te(S)){constructor(){var t;super(),this.readonly=!1,this.rows=c.ROWS,this.cols=c.COLS,this.wrap=$.SOFT,this.autocapitalize=C.OFF,this.autocomplete=A.OFF,this.autofocus=!1,this.clearButton=!1,this.clearAriaLabel="",this.characterLimitExceedingFired=!1,this.value=((t=this.textContent)==null?void 0:t.trim())||this.value}get textarea(){return this.inputElement}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(t=>{this.onerror&&this.onerror(t)})}setTextareaValidity(){this.requiredLabel&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===p.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,d,u){super.attributeChangedCallback(t,d,u),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value)}onChange(t){this.updateValue();const d=t.constructor;this.dispatchEvent(new d(t.type,t))}handleKeyDown(t){["Enter"].includes(t.key)&&(t.preventDefault(),this.clearInputText())}clearInputText(){this.value="",this.textarea.focus()}renderClearButton(){return this.clearButton?n`
        <mdc-button
          part='clear-button'
          class='own-focus-ring ${this.value?"":"hidden"}'
          prefix-icon='${c.CLEAR_BUTTON_ICON}'
          variant='${c.CLEAR_BUTTON_VARIANT}'
          size="${c.CLEAR_BUTTON_SIZE}"
          aria-label="${this.clearAriaLabel}"
          ?disabled=${this.disabled||this.readonly||!this.value}
          @click=${this.clearInputText}
          @keydown=${this.handleKeyDown}
        ></mdc-button>
      `:w}renderCharacterCounter(){return this.maxCharacterLimit?n`
      <mdc-text
        part="character-counter"
        tagname="span"
        type=${c.CHARACTER_COUNTER_TYPE}
      >
      ${this.value.length<10?`0${this.value.length}`:this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:w}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?w:n`
        <div part="textarea-footer">
          ${this.renderHelperText()}
          ${this.renderCharacterCounter()}
        </div>
      `}render(){return n`
      ${this.renderLabel()}
      <div class="textarea-container mdc-focus-ring" part="textarea-container">
        <textarea
          aria-label="${this.dataAriaLabel??""}"
          part='textarea'
          id="${this.id}"
          name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${!!this.requiredLabel}"
          placeholder=${o(this.placeholder)}
          rows=${o(this.rows)}
          cols=${o(this.cols)}
          wrap=${o(this.wrap)}
          ?autofocus="${this.autofocus}"
          autocapitalize=${this.autocapitalize}
          autocomplete=${this.autocomplete}
          minlength=${o(this.minlength)}
          maxlength=${o(this.maxlength)}
          dirname=${o(this.dirname)}
          @input=${this.updateValue}
          @change=${this.onChange}
          aria-describedby="${o(this.helpText?oe.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        ${this.renderClearButton()}
        </div>
        ${this.renderTextareaFooter()}
        `}};L.styles=[...S.styles,...he];let a=L;r([l({type:String})],a.prototype,"placeholder");r([l({type:Boolean})],a.prototype,"readonly");r([l({type:Number})],a.prototype,"rows");r([l({type:Number})],a.prototype,"cols");r([l({type:String})],a.prototype,"wrap");r([l({type:String})],a.prototype,"autocapitalize");r([l({type:String})],a.prototype,"autocomplete");r([l({type:Boolean})],a.prototype,"autofocus");r([l({type:String})],a.prototype,"dirname");r([l({type:Number})],a.prototype,"maxlength");r([l({type:Number})],a.prototype,"minlength");r([l({type:Boolean,attribute:"clear-button"})],a.prototype,"clearButton");r([l({type:String,attribute:"clear-aria-label"})],a.prototype,"clearAriaLabel");r([l({type:Number,attribute:"max-character-limit"})],a.prototype,"maxCharacterLimit");r([ae("textarea")],a.prototype,"inputElement");a.register(me);const xe=e=>n`<mdc-textarea
    @input="${h("oninput")}"
    @change="${h("onchange")}"
    @focus="${h("onfocus")}"
    @blur="${h("onblur")}"
    @limitexceeded="${h("limitexceeded")}"
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    placeholder="${e.placeholder}"
    name="${e.name}"
    value="${e.value}"
    rows="${e.rows}"
    cols="${e.cols}"
    wrap="${e.wrap}"
    class="${e.class}"
    style="${e.style}"
    required-label="${e["required-label"]}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?clear-button="${e["clear-button"]}"
    ?resize-button="${e["resize-button"]}"
    data-aria-label="${o(e["data-aria-label"])}"
    maxlength="${o(e.maxlength)}"
    minlength="${o(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?autofocus="${e.autofocus}"
    autocomplete="${e.autocomplete}"
    dirname="${o(e.dirname)}"
    validation-message="${e["validation-message"]}"
    clear-aria-label="${o(e["clear-aria-label"])}" 
    max-character-limit="${o(e["max-character-limit"])}"
  ></mdc-textarea>`,Me={title:"Work In Progress/textarea",tags:["autodocs"],component:"mdc-textarea",render:xe,parameters:{badges:["wip"]},argTypes:{...se,...ne,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},"required-label":{control:"text"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},"clear-button":{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values($)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(C)},autofocus:{control:"boolean"},autocomplete:{control:"select",options:Object.values(A)},dirname:{control:"text"},"clear-aria-label":{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(p)},...de(["characterLimitExceedingFired","textarea","validity","willValidate"]),...X(["--mdc-textarea-disabled-border-color","--mdc-textarea-disabled-text-color","--mdc-textarea-disabled-background-color","--mdc-textarea-border-color","--mdc-textarea-text-color","--mdc-textarea-background-color","--mdc-textarea-hover-background-color","--mdc-textarea-focused-background-color","--mdc-textarea-focused-border-color","--mdc-textarea-error-border-color","--mdc-textarea-warning-border-color","--mdc-textarea-success-border-color","--mdc-textarea-primary-border-color","--mdc-textarea-text-secondary-normal"])}},x={args:{name:"textarea",label:"Label",rows:c.ROWS,cols:c.COLS,wrap:c.WRAP,"required-label":"required",placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":p.DEFAULT,readonly:!1,disabled:!1,"clear-button":!0,autocapitalize:C.OFF,autocomplete:A.OFF,autofocus:!1,"clear-aria-label":"Clear","data-aria-label":""}},E={name:"textarea",label:"Label",rows:c.ROWS,cols:c.COLS,wrap:c.WRAP},b={args:{...E,placeholder:"Placeholder","clear-button":!0,"clear-aria-label":"Clear",value:"Textarea with clear button, click on the clear button to clear the textarea"},parameters:{docs:{description:{story:"This story displays a textarea component with a clear button. The clear button will be displayedwhen the `clear-button` attribute is set to true. The user can click on the clear button to clear the textarea."}}}},y={args:{...E,value:"Disabled & typed textarea","clear-button":!0,"clear-aria-label":"Clear",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},v={args:{...E,readonly:!0,value:"Readonly textarea","clear-button":!0,"clear-aria-label":"Clear"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},T={argTypes:{...X(["label","help-text","required-label","placeholder","value","help-text-type"])},render:()=>n`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(p).map(e=>n`<mdc-textarea
      help-text-type="${e}"
      label="Label"
      help-text="${e} helper text"
      placeholder="Placeholder"
      value="${e}_value"
      ></mdc-textarea>`)}
      <mdc-textarea 
      label="Required Textarea"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea within character limit"
      help-text="Helper text"
      help-text-type="default"
      value="Momentum is how webex design the future of work."
      readonly
      placeholder="Placeholder"
      max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea exceeding character limit"
      readonly
      help-text="Input must not exceed 100 characters."
      help-text-type="error"
      placeholder="Placeholder"
      max-character-limit="75"
      >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
      </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required-label` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},f={render:()=>{let e="",t=p.DEFAULT;return n`
      <form @submit=${i=>{i.preventDefault();const m=new FormData(i.target).get("tweet");h("Form Submitted")({value:m})}}>
      <fieldset>
        <legend>Form Example</legend>
        <mdc-textarea
          id="textarea"
          name="tweet"
          label="Tweet"
          @limitexceeded=${i=>{var m,O;h("limitexceeded")(i);const{detail:s}=i;s.currentCharacterCount>s.maxCharacterLimit?(e=`Input must not exceed ${s.maxCharacterLimit} characters.`,t=p.ERROR):(e="",t=p.DEFAULT),(m=document.getElementById("textarea"))==null||m.setAttribute("help-text",e),(O=document.getElementById("textarea"))==null||O.setAttribute("help-text-type",t)}}
          help-text="${e}"
          help-text-type="${t}"
          clear-button
          clear-aria-label="Clear button"
          required-label="required"
          max-character-limit="75"
          placeholder="Write what's on your mind"
        ></mdc-textarea>
        <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
          <mdc-button type="submit" size='24'>Submit</mdc-button>
          <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
        </div>
      </fieldset>
      </form>
    `},parameters:{docs:{description:{story:"To add a character counter to the textarea, use the `max-character-limit` attribute. The character counter will be displayed below the textarea with the max character limit.User needs to listen to the `limitexceeded` event to handle the character limit check.The event will contain the current character count, the max character limit & current value of the textarea.Based on which the user can update the help text and help text type dynamically."}}}},g={render:()=>n`
    <form @submit=${t=>{t.preventDefault();const u=new FormData(t.target).get("tweet");h("Form Submitted")({value:u})}}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-textarea
        id="textarea"
        name='tweet'
        label="Tweet"
        required-label="required"
        placeholder="Write what's on your mind"
        validation-message="Tweet is required"
      ></mdc-textarea>
      <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `};var F,R,I;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'textarea',
    label: 'Label',
    rows: DEFAULTS.ROWS,
    cols: DEFAULTS.COLS,
    wrap: DEFAULTS.WRAP,
    'required-label': 'required',
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Help text',
    'help-text-type': VALIDATION.DEFAULT,
    readonly: false,
    disabled: false,
    'clear-button': true,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    autofocus: false,
    'clear-aria-label': 'Clear',
    'data-aria-label': ''
  }
}`,...(I=(R=x.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var k,D,_;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    placeholder: 'Placeholder',
    'clear-button': true,
    'clear-aria-label': 'Clear',
    value: 'Textarea with clear button, click on the clear button to clear the textarea'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a textarea component with a clear button. The clear button will be displayed' + 'when the \`clear-button\` attribute is set to true. The user can click on the clear button' + ' to clear the textarea.'
      }
    }
  }
}`,...(_=(D=b.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var U,V,q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: 'Disabled & typed textarea',
    'clear-button': true,
    'clear-aria-label': 'Clear',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a disabled textarea component. The textarea will be displayed as disabled' + 'when the \`disabled\` attribute is set to true. The user will not be able to interact with the textarea.'
      }
    }
  }
}`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,z,B;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readonly: true,
    value: 'Readonly textarea',
    'clear-button': true,
    'clear-aria-label': 'Clear'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a readonly textarea component. The textarea will be displayed as readonly' + 'when the \`readonly\` attribute is set to true. The user will not be able to edit the content' + ' of the textarea.'
      }
    }
  }
}`,...(B=(z=v.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,W,M;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required-label', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    \${Object.values(VALIDATION).map(validation => html\`<mdc-textarea
      help-text-type="\${validation}"
      label="Label"
      help-text="\${validation} helper text"
      placeholder="Placeholder"
      value="\${validation}_value"
      ></mdc-textarea>\`)}
      <mdc-textarea 
      label="Required Textarea"
      help-text="Helper text"
      help-text-type="default"
      required-label='required' 
      placeholder="Textarea is required"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea within character limit"
      help-text="Helper text"
      help-text-type="default"
      value="Momentum is how webex design the future of work."
      readonly
      placeholder="Placeholder"
      max-character-limit="75"
      ></mdc-textarea>
      <mdc-textarea 
      label="Textarea exceeding character limit"
      readonly
      help-text="Input must not exceed 100 characters."
      help-text-type="error"
      placeholder="Placeholder"
      max-character-limit="75"
      >Momentum is how webex design the future of work. This design system exist to create a shared design language.
      </mdc-textarea>
      </div>\`,
  parameters: {
    docs: {
      description: {
        story: 'This story displays all the variants of the textarea component.' + 'The textarea component supports all the validation types. ' + 'User can set the \`help-text-type\` attribute to any of the validation types to display' + 'the help text in that style.' + 'The textarea can also be set as required by passing the \`required-label\` attribute.' + 'User can also set the \`max-character-limit\` attribute to display a character counter below the textarea.' + 'The textarea can also be set as readonly by passing the \`readonly\` attribute.'
      }
    }
  }
}`,...(M=(W=T.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var H,j,Z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    let helpText = '';
    let helpTextType: ValidationType = VALIDATION.DEFAULT;
    const handleCharacterLimitCheck = (event: CustomEvent) => {
      action('limitexceeded')(event);
      const {
        detail
      } = event;
      if (detail.currentCharacterCount > detail.maxCharacterLimit) {
        helpText = \`Input must not exceed \${detail.maxCharacterLimit} characters.\`;
        helpTextType = VALIDATION.ERROR;
      } else {
        helpText = '';
        helpTextType = VALIDATION.DEFAULT;
      }

      // Update the storybook UI dynamically
      document.getElementById('textarea')?.setAttribute('help-text', helpText);
      document.getElementById('textarea')?.setAttribute('help-text-type', helpTextType);
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
      <form @submit=\${handleSubmit}>
      <fieldset>
        <legend>Form Example</legend>
        <mdc-textarea
          id="textarea"
          name="tweet"
          label="Tweet"
          @limitexceeded=\${handleCharacterLimitCheck}
          help-text="\${helpText}"
          help-text-type="\${helpTextType}"
          clear-button
          clear-aria-label="Clear button"
          required-label="required"
          max-character-limit="75"
          placeholder="Write what's on your mind"
        ></mdc-textarea>
        <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
          <mdc-button type="submit" size='24'>Submit</mdc-button>
          <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
        </div>
      </fieldset>
      </form>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'To add a character counter to the textarea, use the \`max-character-limit\` attribute. ' + 'The character counter will be displayed below the textarea with the max character limit.' + 'User needs to listen to the \`limitexceeded\` event to handle the character limit check.' + 'The event will contain the current character count, the max character limit & current value of the textarea.' + 'Based on which the user can update the help text and help text type dynamically.'
      }
    }
  }
}`,...(Z=(j=f.parameters)==null?void 0:j.docs)==null?void 0:Z.source}}};var Y,G,K;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    return html\`
    <form @submit=\${handleSubmit}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-textarea
        id="textarea"
        name='tweet'
        label="Tweet"
        required-label="required"
        placeholder="Write what's on your mind"
        validation-message="Tweet is required"
      ></mdc-textarea>
      <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    \`;
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const He=["Example","TextareaWithClearButton","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm"];export{T as AllVariants,y as DisabledTextarea,x as Example,v as ReadonlyTextarea,g as TextareaInsideForm,f as TextareaWithCharacterCounter,b as TextareaWithClearButton,He as __namedExportsOrder,Me as default};
