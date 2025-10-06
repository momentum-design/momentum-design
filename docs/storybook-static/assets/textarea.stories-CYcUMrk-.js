import{t as s}from"./if-defined-DkWWzH-n.js";import{u as J,q as Q,S as ee,X as te,h as F,k as h,n as d}from"./iframe-lp-9jnEC.js";import{e as ae}from"./query-DXShiZ7f.js";import"./index-CgxULmfp.js";import{V as u,D as re,F as S}from"./formfieldwrapper.component-1CvTBzOS.js";import{A}from"./input.constants-CeZLyYaW.js";import{D as oe}from"./DataAriaLabelMixin-Wv16khaz.js";import{F as le}from"./FormInternalsMixin-n2wZAD_K.js";import{A as ie}from"./buttonsimple.component-DQ8Mzjsq.js";import"./index-CYX6gArv.js";import"./index-BLeC7DYG.js";import"./index-CcnnDPgo.js";import{c as se,s as ne}from"./commonArgTypes-BluK8w5L.js";import{a as ce,d as de}from"./utils-Dd_sfl9-.js";import{P as me,S as he}from"./popover.component-DVXfT6S3.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-JX7ngUhc.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-CxXG7xmM.js";import"./button.component-BPF4H-Hp.js";import"./button.utils-rNW36Ji7.js";import"./index-BihGxu7q.js";import"./index-DTrDRi1E.js";import"./index-B1WooknS.js";import"./BackdropMixin-fCgroYQA.js";const pe=J.constructTagName("textarea"),E={HARD:"hard",SOFT:"soft"},$={OFF:"off",ON:"on"},p={CHARACTER_COUNTER_TYPE:Q.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:E.SOFT},ue=[ee`
    :host {
      --mdc-textarea-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-textarea-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-textarea-disabled-background-color: var(--mds-color-theme-background-input-disabled);
      --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-textarea-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
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
    :host([disabled])::part(textarea)::placeholder {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled])::part(textarea-container),
    :host([readonly])::part(textarea-container) {
      border-color: var(--mdc-textarea-disabled-border-color);
      background: var(--mdc-textarea-disabled-background-color);
    }

    :host([disabled][help-text-type='default'])::part(textarea-container),
    :host([disabled][help-text-type='success'])::part(textarea-container),
    :host([disabled][help-text-type='warning'])::part(textarea-container),
    :host([disabled][help-text-type='error'])::part(textarea-container),
    :host([disabled][help-text-type='priority'])::part(textarea-container) {
      border-color: var(--mdc-textarea-disabled-border-color);
    }

    :host::part(textarea) {
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
      width: 100%;
    }

    :host::part(textarea-container) {
      display: flex;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-textarea-border-color);
      overflow: hidden;
      padding: 0.375rem 0.25rem 0.25rem 0.75rem;
    }

    :host(:dir(rtl))::part(textarea-container) {
      padding: 0.375rem 0.75rem 0.25rem 0.25rem;
    }

    :host(:not([disabled]))::part(textarea-container):hover {
      background-color: var(--mdc-textarea-hover-background-color);
    }

    :host(:not([disabled]))::part(textarea-container):active,
    :host(:not([disabled]))::part(textarea-container):focus-within {
      background-color: var(--mdc-textarea-focused-background-color);
      border-color: var(--mdc-textarea-focused-border-color);
    }

    :host::part(textarea-footer) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .textarea::placeholder {
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host::part(character-counter) {
      margin-left: auto;
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host([help-text-type='error'])::part(character-counter) {
      color: var(--mdc-textarea-error-border-color);
    }

    :host([disabled])::part(character-counter) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([help-text-type='error'])::part(textarea-container),
    :host([help-text-type='error'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-error-border-color);
    }
    :host([help-text-type='warning'])::part(textarea-container),
    :host([help-text-type='warning'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-warning-border-color);
    }
    :host([help-text-type='success'])::part(textarea-container),
    :host([help-text-type='success'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-success-border-color);
    }
    :host([help-text-type='priority'])::part(textarea-container),
    :host([help-text-type='priority'])::part(textarea-container):focus-within {
      border-color: var(--mdc-textarea-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,...te(!0)];var xe=Object.defineProperty,c=(e,t,n,x)=>{for(var o=void 0,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=i(t,n,o)||o);return o&&xe(t,n,o),o};const L=class L extends ie(le(oe(S))){constructor(){super(...arguments),this.readonly=!1,this.rows=p.ROWS,this.cols=p.COLS,this.wrap=E.SOFT,this.autocapitalize=A.OFF,this.autocomplete=$.OFF,this.characterLimitExceedingFired=!1}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(n=>{this.onerror&&this.onerror(n)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===u.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,n,x){super.attributeChangedCallback(t,n,x),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(a=>{this.onerror&&this.onerror(a)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value)}onChange(t){this.updateValue();const n=t.constructor;this.dispatchEvent(new n(t.type,t))}renderCharacterCounter(){return this.maxCharacterLimit?h`
      <mdc-text part="character-counter" tagname="span" type=${p.CHARACTER_COUNTER_TYPE}>
        ${this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:F}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?F:h` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}render(){return h`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="textarea-container">
        <textarea
          aria-label="${this.dataAriaLabel??""}"
          part="textarea"
          id="${this.inputId}"
          name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          placeholder=${s(this.placeholder)}
          rows=${s(this.rows)}
          cols=${s(this.cols)}
          wrap=${s(this.wrap)}
          autocapitalize=${this.autocapitalize}
          autocomplete=${this.autocomplete}
          minlength=${s(this.minlength)}
          maxlength=${s(this.maxlength)}
          dirname=${s(this.dirname)}
          @input=${this.updateValue}
          @change=${this.onChange}
          aria-describedby="${s(this.helpText?re.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
      </div>
      ${this.renderTextareaFooter()}
    `}};L.styles=[...S.styles,...ue];let r=L;c([d({type:String})],r.prototype,"placeholder");c([d({type:Boolean})],r.prototype,"readonly");c([d({type:Number})],r.prototype,"rows");c([d({type:Number})],r.prototype,"cols");c([d({type:String})],r.prototype,"wrap");c([d({type:String})],r.prototype,"autocapitalize");c([d({type:String})],r.prototype,"autocomplete");c([d({type:String})],r.prototype,"dirname");c([d({type:Number})],r.prototype,"maxlength");c([d({type:Number})],r.prototype,"minlength");c([d({type:Number,attribute:"max-character-limit"})],r.prototype,"maxCharacterLimit");c([ae("textarea")],r.prototype,"inputElement");r.register(pe);const{action:m}=__STORYBOOK_MODULE_ACTIONS__,be=e=>h`<mdc-textarea
    @input="${m("oninput")}"
    @change="${m("onchange")}"
    @focus="${m("onfocus")}"
    @blur="${m("onblur")}"
    @limitexceeded="${m("limitexceeded")}"
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
    data-aria-label="${s(e["data-aria-label"])}"
    maxlength="${s(e.maxlength)}"
    minlength="${s(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${e.autocomplete}"
    dirname="${s(e.dirname)}"
    validation-message="${e["validation-message"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    max-character-limit="${s(e["max-character-limit"])}"
  ></mdc-textarea>`,Ne={title:"Components/textarea",tags:["autodocs"],component:"mdc-textarea",render:be,argTypes:{...se,...ne,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values(E)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(A)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"select",options:Object.values($)},dirname:{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(u)},"validation-message":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(me)},"toggletip-strategy":{control:"select",options:Object.values(he)},"resize-button":{control:"boolean"},"info-icon-aria-label":{control:"text"},...ce(["characterLimitExceedingFired","textarea","validity","willValidate"])}},y={args:{name:"textarea",label:"Label",rows:p.ROWS,cols:p.COLS,wrap:p.WRAP,required:!0,placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":u.DEFAULT,readonly:!1,disabled:!1,autocapitalize:A.OFF,autocomplete:$.OFF,"data-aria-label":""}},K={name:"textarea",label:"Label",rows:p.ROWS,cols:p.COLS,wrap:p.WRAP},v={args:{...K,value:"Disabled & typed textarea",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},g={args:{...K,readonly:!0,value:"Readonly textarea"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},f={argTypes:{...de(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>h` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(u).map(e=>h`<mdc-textarea
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
    </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},T={render:()=>{let e="",t=u.DEFAULT;return h`
      <form @submit=${o=>{o.preventDefault();const i=new FormData(o.target).get("tweet");m("Form Submitted")({value:i})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            @limitexceeded=${o=>{var i,l;m("limitexceeded")(o);const{detail:a}=o;a.currentCharacterCount>a.maxCharacterLimit?(e=`Input must not exceed ${a.maxCharacterLimit} characters.`,t=u.ERROR):(e="",t=u.DEFAULT),(i=document.getElementById("textarea"))==null||i.setAttribute("help-text",e),(l=document.getElementById("textarea"))==null||l.setAttribute("help-text-type",t)}}
            help-text="${e}"
            help-text-type="${t}"
            required
            max-character-limit="75"
            placeholder="Write what's on your mind"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},parameters:{docs:{description:{story:"To add a character counter to the textarea, use the `max-character-limit` attribute. The character counter will be displayed below the textarea with the max character limit.User needs to listen to the `limitexceeded` event to handle the character limit check.The event will contain the current character count, the max character limit & current value of the textarea.Based on which the user can update the help text and help text type dynamically."}}}},w={render:()=>h`
      <form @submit=${t=>{t.preventDefault();const x=new FormData(t.target).get("tweet");m("Form Submitted")({value:x})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            validation-message="Tweet is required"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},C={render:e=>{const t=e["max-character-limit"],n=(a,i)=>{const l=a.querySelector('mdc-textarea[name="tweet"]'),{value:b}=l;return i.required&&(!b||b.trim()==="")?(l.setAttribute("help-text","Please enter your tweet"),l.setAttribute("help-text-type","error"),!1):b&&b.length>t?(l.setAttribute("help-text",`Input must not exceed ${t} characters.`),l.setAttribute("help-text-type","error"),!1):(l.setAttribute("help-text","Looks good!"),l.setAttribute("help-text-type","success"),!0)};return h`
      <form @submit=${a=>{a.preventDefault();const i=a.target;if(!n(i,e))return;const b=new FormData(i).get("tweet");m("Form Submitted")({value:b})}} @reset=${a=>{const l=a.target.querySelector('mdc-textarea[name="tweet"]');l.setAttribute("help-text",e["help-text"]||""),l.setAttribute("help-text-type",e["help-text-type"]||"default")}} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-textarea
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            max-character-limit="${t}"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},args:{required:!0,"help-text":"","help-text-type":"default","max-character-limit":75}};var O,R,D;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    'data-aria-label': ''
  }
}`,...(D=(R=y.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var I,q,V;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(q=v.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var k,_,z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(_=g.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var M,U,P;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: {
    ...disableControls(['label', 'help-text', 'required', 'placeholder', 'value', 'help-text-type'])
  },
  render: () => html\` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
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
}`,...(P=(U=f.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var H,W,N;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
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
}`,...(N=(W=T.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var j,B,X;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            validation-message="Tweet is required"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  }
}`,...(X=(B=w.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var Y,G,Z;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const MAX_CHAR_LIMIT = args['max-character-limit'];
    const validateTextarea = (form: HTMLFormElement, args: any): boolean => {
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      const {
        value
      } = textareaEl;
      if (args.required && (!value || value.trim() === '')) {
        textareaEl.setAttribute('help-text', 'Please enter your tweet');
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      if (value && value.length > MAX_CHAR_LIMIT) {
        textareaEl.setAttribute('help-text', \`Input must not exceed \${MAX_CHAR_LIMIT} characters.\`);
        textareaEl.setAttribute('help-text-type', 'error');
        return false;
      }
      textareaEl.setAttribute('help-text', 'Looks good!');
      textareaEl.setAttribute('help-text-type', 'success');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateTextarea(form, args)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValue = formData.get('tweet');
      action('Form Submitted')({
        value: selectedValue
      });
    };
    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const textareaEl = form.querySelector('mdc-textarea[name="tweet"]') as Textarea;
      textareaEl.setAttribute('help-text', args['help-text'] || '');
      textareaEl.setAttribute('help-text-type', args['help-text-type'] || 'default');
    };
    return html\`
      <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
        <fieldset>
          <legend>Form Example With Dynamic Help Text</legend>
          <mdc-textarea
            name="tweet"
            label="Tweet"
            required
            placeholder="Write what's on your mind"
            max-character-limit="\${MAX_CHAR_LIMIT}"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    \`;
  },
  args: {
    required: true,
    'help-text': '',
    'help-text-type': 'default',
    'max-character-limit': 75
  }
}`,...(Z=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const je=["Example","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm","TextareaInsideFormWithHelpTextValidation"];export{f as AllVariants,v as DisabledTextarea,y as Example,g as ReadonlyTextarea,w as TextareaInsideForm,C as TextareaInsideFormWithHelpTextValidation,T as TextareaWithCharacterCounter,je as __namedExportsOrder,Ne as default};
