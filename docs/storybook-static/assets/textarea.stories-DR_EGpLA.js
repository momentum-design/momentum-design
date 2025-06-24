import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as o}from"./if-defined-D5BV9-c0.js";import{i as Z,D as L,k as m}from"./lit-element-D5KKan5q.js";import{u as G,n as i}from"./index-C9z9WAEj.js";import{e as X}from"./query-DXShiZ7f.js";import{h as J}from"./index-MA1r3zrt.js";import"./index-Cwhspa4f.js";import{V as p,D as K,F as A}from"./formfieldwrapper.component-B1RGcmSz.js";import{A as T}from"./input.constants-DOAqpgue.js";import{T as Q}from"./index-D1yLszQ-.js";import{D as ee}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{F as te}from"./FormInternalsMixin-CqDKsEWP.js";import"./index-xtIShB-p.js";import"./index-Cotu0jE8.js";import"./index-fne2UIX8.js";import{c as ae,s as re}from"./commonArgTypes-BluK8w5L.js";import{h as oe,d as B}from"./utils-CO8B6ZcN.js";import{P as le}from"./popover.component-q_n7VcSj.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./v4-CmTdKEVZ.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./iframe-DLBUURVf.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-CWUJHaLg.js";import"./roles-BH_hBfTz.js";const ie=[Z`
  :host {
    --mdc-textarea-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
    --mdc-textarea-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-textarea-disabled-background-color: var(--mds-color-theme-background-input-disabled);
    --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
    --mdc-textarea-text-secondary-normal : var(--mds-color-theme-text-secondary-normal);
    --mdc-textarea-error-border-color: var(--mds-color-theme-text-error-normal);
    --mdc-textarea-warning-border-color: var(--mds-color-theme-text-warning-normal);
    --mdc-textarea-success-border-color: var(--mds-color-theme-text-success-normal);
    --mdc-textarea-primary-border-color: var(--mds-color-theme-text-accent-normal);
    --mdc-textarea-hover-background-color: var(--mds-color-theme-background-primary-hover);
    --mdc-textarea-focused-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-textarea-focused-border-color: var(--mds-color-theme-outline-input-active);
    --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
    --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
  }

  :host([disabled])::part(textarea),
  :host([disabled])::part(textarea)::placeholder{
    color: var(--mdc-input-disabled-text-color);
  }

  :host([disabled])::part(textarea-container),
  :host([readonly])::part(textarea-container){
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
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--mdc-textarea-border-color);
    overflow: hidden;
    padding: 0.375rem 0.25rem 0.25rem 0.75rem;
  }

  :host(:dir(rtl))::part(textarea-container){
    padding: 0.375rem 0.75rem 0.25rem 0.25rem;
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

`,...J(!0)],se=G.constructTagName("textarea"),w={HARD:"hard",SOFT:"soft"},C={OFF:"off",ON:"on"},c={CHARACTER_COUNTER_TYPE:Q.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:w.SOFT};var ne=Object.defineProperty,l=(e,t,s,u)=>{for(var r=void 0,n=e.length-1,h;n>=0;n--)(h=e[n])&&(r=h(t,s,r)||r);return r&&ne(t,s,r),r};const $=class $ extends te(ee(A)){constructor(){super(...arguments),this.readonly=!1,this.rows=c.ROWS,this.cols=c.COLS,this.wrap=w.SOFT,this.autocapitalize=T.OFF,this.autocomplete=C.OFF,this.autofocus=!1,this.characterLimitExceedingFired=!1}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(s=>{this.onerror&&this.onerror(s)})}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===p.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,s,u){super.attributeChangedCallback(t,s,u),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(n=>{this.onerror&&this.onerror(n)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value)}onChange(t){this.updateValue();const s=t.constructor;this.dispatchEvent(new s(t.type,t))}renderCharacterCounter(){return this.maxCharacterLimit?m`
      <mdc-text
        part="character-counter"
        tagname="span"
        type=${c.CHARACTER_COUNTER_TYPE}
      >
      ${this.value.length<10?`0${this.value.length}`:this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:L}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?L:m`
        <div part="textarea-footer">
          ${this.renderHelperText()}
          ${this.renderCharacterCounter()}
        </div>
      `}render(){return m`
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
          ?required="${this.required}"
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
          aria-describedby="${o(this.helpText?K.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        </div>
        ${this.renderTextareaFooter()}
        `}};$.styles=[...A.styles,...ie];let a=$;l([i({type:String})],a.prototype,"placeholder");l([i({type:Boolean})],a.prototype,"readonly");l([i({type:Number})],a.prototype,"rows");l([i({type:Number})],a.prototype,"cols");l([i({type:String})],a.prototype,"wrap");l([i({type:String})],a.prototype,"autocapitalize");l([i({type:String})],a.prototype,"autocomplete");l([i({type:Boolean})],a.prototype,"autofocus");l([i({type:String})],a.prototype,"dirname");l([i({type:Number})],a.prototype,"maxlength");l([i({type:Number})],a.prototype,"minlength");l([i({type:Number,attribute:"max-character-limit"})],a.prototype,"maxCharacterLimit");l([X("textarea")],a.prototype,"inputElement");a.register(se);const ce=e=>m`<mdc-textarea
    @input="${d("oninput")}"
    @change="${d("onchange")}"
    @focus="${d("onfocus")}"
    @blur="${d("onblur")}"
    @limitexceeded="${d("limitexceeded")}"
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
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?resize-button="${e["resize-button"]}"
    data-aria-label="${o(e["data-aria-label"])}"
    maxlength="${o(e.maxlength)}"
    minlength="${o(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?autofocus="${e.autofocus}"
    autocomplete="${e.autocomplete}"
    dirname="${o(e.dirname)}"
    validation-message="${e["validation-message"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-text="${e["toggletip-text"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    max-character-limit="${o(e["max-character-limit"])}"
  ></mdc-textarea>`,Be={title:"Components/textarea",tags:["autodocs"],component:"mdc-textarea",render:ce,parameters:{badges:["stable"]},argTypes:{...ae,...re,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values(w)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(T)},autofocus:{control:"boolean"},autocomplete:{control:"select",options:Object.values(C)},dirname:{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(p)},"validation-message":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(le)},"info-icon-aria-label":{control:"text"},...oe(["characterLimitExceedingFired","textarea","validity","willValidate"]),...B(["--mdc-textarea-disabled-border-color","--mdc-textarea-disabled-text-color","--mdc-textarea-disabled-background-color","--mdc-textarea-border-color","--mdc-textarea-text-color","--mdc-textarea-background-color","--mdc-textarea-hover-background-color","--mdc-textarea-focused-background-color","--mdc-textarea-focused-border-color","--mdc-textarea-error-border-color","--mdc-textarea-warning-border-color","--mdc-textarea-success-border-color","--mdc-textarea-primary-border-color","--mdc-textarea-text-secondary-normal"])}},x={args:{name:"textarea",label:"Label",rows:c.ROWS,cols:c.COLS,wrap:c.WRAP,required:!0,placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":p.DEFAULT,readonly:!1,disabled:!1,autocapitalize:T.OFF,autocomplete:C.OFF,autofocus:!1,"data-aria-label":""}},Y={name:"textarea",label:"Label",rows:c.ROWS,cols:c.COLS,wrap:c.WRAP},b={args:{...Y,value:"Disabled & typed textarea",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},y={args:{...Y,readonly:!0,value:"Readonly textarea"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},v={argTypes:{...B(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>m`
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
    ${Object.values(p).map(e=>m`<mdc-textarea
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
      required 
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
      </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},g={render:()=>{let e="",t=p.DEFAULT;return m`
      <form @submit=${r=>{r.preventDefault();const h=new FormData(r.target).get("tweet");d("Form Submitted")({value:h})}}>
      <fieldset>
        <legend>Form Example</legend>
        <mdc-textarea
          id="textarea"
          name="tweet"
          label="Tweet"
          @limitexceeded=${r=>{var h,E;d("limitexceeded")(r);const{detail:n}=r;n.currentCharacterCount>n.maxCharacterLimit?(e=`Input must not exceed ${n.maxCharacterLimit} characters.`,t=p.ERROR):(e="",t=p.DEFAULT),(h=document.getElementById("textarea"))==null||h.setAttribute("help-text",e),(E=document.getElementById("textarea"))==null||E.setAttribute("help-text-type",t)}}
          help-text="${e}"
          help-text-type="${t}"
          required
          max-character-limit="75"
          placeholder="Write what's on your mind"
        ></mdc-textarea>
        <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
          <mdc-button type="submit" size='24'>Submit</mdc-button>
          <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
        </div>
      </fieldset>
      </form>
    `},parameters:{docs:{description:{story:"To add a character counter to the textarea, use the `max-character-limit` attribute. The character counter will be displayed below the textarea with the max character limit.User needs to listen to the `limitexceeded` event to handle the character limit check.The event will contain the current character count, the max character limit & current value of the textarea.Based on which the user can update the help text and help text type dynamically."}}}},f={render:()=>m`
    <form @submit=${t=>{t.preventDefault();const u=new FormData(t.target).get("tweet");d("Form Submitted")({value:u})}}>
      <fieldset>
      <legend>Form Example</legend>
      <mdc-textarea
        id="textarea"
        name='tweet'
        label="Tweet"
        required
        placeholder="Write what's on your mind"
        validation-message="Tweet is required"
      ></mdc-textarea>
      <div style='display: flex; gap: 0.25rem; margin-top: 0.25rem'>
        <mdc-button type="submit" size='24'>Submit</mdc-button>
        <mdc-button type="reset" size='24' variant='secondary'>Reset</mdc-button>
      </div>
      </fieldset>
    </form>
    `};var F,O,S;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'textarea',
    label: 'Label',
    rows: DEFAULTS.ROWS,
    cols: DEFAULTS.COLS,
    wrap: DEFAULTS.WRAP,
    required: true,
    placeholder: 'Placeholder',
    value: '',
    'help-text': 'Help text',
    'help-text-type': VALIDATION.DEFAULT,
    readonly: false,
    disabled: false,
    autocapitalize: AUTO_CAPITALIZE.OFF,
    autocomplete: AUTO_COMPLETE.OFF,
    autofocus: false,
    'data-aria-label': ''
  }
}`,...(S=(O=x.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var D,R,k;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: 'Disabled & typed textarea',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a disabled textarea component. The textarea will be displayed as disabled' + 'when the \`disabled\` attribute is set to true. The user will not be able to interact with the textarea.'
      }
    }
  }
}`,...(k=(R=b.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var V,I,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readonly: true,
    value: 'Readonly textarea'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story displays a readonly textarea component. The textarea will be displayed as readonly' + 'when the \`readonly\` attribute is set to true. The user will not be able to edit the content' + ' of the textarea.'
      }
    }
  }
}`,...(q=(I=y.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var z,U,P;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
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
      required 
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
        story: 'This story displays all the variants of the textarea component.' + 'The textarea component supports all the validation types. ' + 'User can set the \`help-text-type\` attribute to any of the validation types to display' + 'the help text in that style.' + 'The textarea can also be set as required by passing the \`required\` attribute.' + 'User can also set the \`max-character-limit\` attribute to display a character counter below the textarea.' + 'The textarea can also be set as readonly by passing the \`readonly\` attribute.'
      }
    }
  }
}`,...(P=(U=v.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var _,N,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
          required
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
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var M,H,j;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        required
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
}`,...(j=(H=f.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const Ye=["Example","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm"];export{v as AllVariants,b as DisabledTextarea,x as Example,y as ReadonlyTextarea,f as TextareaInsideForm,g as TextareaWithCharacterCounter,Ye as __namedExportsOrder,Be as default};
