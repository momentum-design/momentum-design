import{t as l}from"./if-defined-4m2k0XeM.js";import{u as J,q as Q,S as ee,X as te,h as S,k as p,n as c,$ as ae}from"./iframe-DOPcpcQF.js";import{e as re}from"./query-DXShiZ7f.js";import"./index--Qhiev9r.js";import{V as x,D as ie,F}from"./formfieldwrapper.component-UmxXluCM.js";import{A as C}from"./input.constants-BTiC4tGc.js";import{D as oe}from"./DataAriaLabelMixin-CLT7XWYg.js";import{F as le}from"./FormInternalsMixin-BQ3PMNxT.js";import{A as ne}from"./buttonsimple.component-B7HM8HAo.js";import"./index-D34rVLca.js";import"./index-ClZ4TakQ.js";import"./index-CXuqFLw3.js";import"./index-DFPQDhEO.js";import{c as se,s as ce}from"./commonArgTypes-BluK8w5L.js";import{a as de,d as me}from"./utils-Dd_sfl9-.js";import{P as he,S as pe}from"./popover.component-CWLn0bX-.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BHQ_pAdE.js";import"./v4-CmTdKEVZ.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-ZMjTSZB9.js";import"./button.component-yaG2D75b.js";import"./button.utils-rNW36Ji7.js";import"./index-BLflAGVV.js";import"./index-DTrDRi1E.js";import"./BackdropMixin-VarMaYSk.js";const ue=J.constructTagName("textarea"),$={HARD:"hard",SOFT:"soft"},E={OFF:"off",ON:"on"},u={CHARACTER_COUNTER_TYPE:Q.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:$.SOFT},xe=[ee`
    :host {
      --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
      --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
      --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
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
      background-color: var(--mdc-textarea-container-background-color);
    }

    :host(:dir(rtl))::part(textarea-container) {
      padding: 0.375rem 0.75rem 0.25rem 0.25rem;
    }

    :host(:not([disabled]))::part(textarea-container):hover {
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-hover);
    }

    :host(:not([disabled]))::part(textarea-container):active,
    :host(:not([disabled]))::part(textarea-container):focus-within {
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-active);
    }

    :host::part(textarea-footer) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    textarea::placeholder {
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host::part(character-counter) {
      margin-left: auto;
      color: var(--mdc-textarea-text-secondary-normal);
    }

    :host([help-text-type='error'])::part(character-counter) {
      color: var(--mdc-help-text-color);
    }

    :host([help-text-type='error'])::part(textarea-container),
    :host([help-text-type='error'])::part(textarea-container):focus-within,
    :host([help-text-type='warning'])::part(textarea-container),
    :host([help-text-type='warning'])::part(textarea-container):focus-within,
    :host([help-text-type='success'])::part(textarea-container),
    :host([help-text-type='success'])::part(textarea-container):focus-within,
    :host([help-text-type='priority'])::part(textarea-container),
    :host([help-text-type='priority'])::part(textarea-container):focus-within {
      --mdc-textarea-border-color: var(--mdc-help-text-color);
    }

    :host([disabled])::part(character-counter) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([disabled])::part(textarea),
    :host([disabled]) textarea::placeholder {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled])::part(textarea-container),
    :host([readonly])::part(textarea-container) {
      --mdc-textarea-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-input-disabled);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,...te(!0)];var be=Object.defineProperty,s=(e,t,r,b)=>{for(var d=void 0,a=e.length-1,n;a>=0;a--)(n=e[a])&&(d=n(t,r,d)||d);return d&&be(t,r,d),d};const L=class L extends ne(le(oe(F))){constructor(){super(...arguments),this.rows=u.ROWS,this.cols=u.COLS,this.wrap=$.SOFT,this.autocapitalize=C.OFF,this.autocomplete=E.OFF,this.characterLimitExceedingFired=!1}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(r=>{this.onerror&&this.onerror(r)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===x.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,r,b){super.attributeChangedCallback(t,r,b),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(a=>{this.onerror&&this.onerror(a)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value),this.announceMaxLengthWarning()}announceMaxLengthWarning(){this.ariaLiveAnnouncer="",!(!this.maxCharacterLimit||this.value.length===0)&&(this.helpText&&this.value.length>this.maxCharacterLimit?this.updateComplete.then(()=>{this.ariaLiveAnnouncer=this.helpText}).catch(()=>{}):this.characterLimitAnnouncement&&this.value.length<=this.maxCharacterLimit&&(this.ariaLiveAnnouncer=this.characterLimitAnnouncement.replace("%{number-of-characters}",this.value.length.toString()).replace("%{max-character-limit}",this.maxCharacterLimit.toString())))}onChange(t){this.updateValue();const r=t.constructor;this.dispatchEvent(new r(t.type,t))}renderCharacterCounter(){return this.maxCharacterLimit?p`
      <mdc-text part="character-counter" tagname="span" type=${u.CHARACTER_COUNTER_TYPE}>
        ${this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:S}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?S:p` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}render(){return p`
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
          placeholder=${l(this.placeholder)}
          rows=${l(this.rows)}
          cols=${l(this.cols)}
          wrap=${l(this.wrap)}
          autocapitalize=${this.autocapitalize}
          autocomplete=${this.autocomplete}
          minlength=${l(this.minlength)}
          maxlength=${l(this.maxlength)}
          dirname=${l(this.dirname)}
          @input=${this.updateValue}
          @change=${this.onChange}
          aria-describedby="${l(this.helpText?ie.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        <mdc-screenreaderannouncer
          identity="${this.inputId}"
          announcement="${l(this.ariaLiveAnnouncer)}"
          data-aria-live="polite"
        ></mdc-screenreaderannouncer>
      </div>
      ${this.renderTextareaFooter()}
    `}};L.styles=[...F.styles,...xe];let o=L;s([c({type:String})],o.prototype,"placeholder");s([c({type:Number})],o.prototype,"rows");s([c({type:Number})],o.prototype,"cols");s([c({type:String})],o.prototype,"wrap");s([c({type:String})],o.prototype,"autocapitalize");s([c({type:String})],o.prototype,"autocomplete");s([c({type:String})],o.prototype,"dirname");s([c({type:Number})],o.prototype,"maxlength");s([c({type:Number})],o.prototype,"minlength");s([c({type:Number,attribute:"max-character-limit"})],o.prototype,"maxCharacterLimit");s([c({type:String,attribute:"character-limit-announcement"})],o.prototype,"characterLimitAnnouncement");s([re("textarea")],o.prototype,"inputElement");s([ae()],o.prototype,"ariaLiveAnnouncer");o.register(ue);const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ye=e=>p`<mdc-textarea
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
    ?required="${e.required}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    data-aria-label="${l(e["data-aria-label"])}"
    maxlength="${l(e.maxlength)}"
    minlength="${l(e.minlength)}"
    autocapitalize="${e.autocapitalize}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    autocomplete="${e.autocomplete}"
    dirname="${l(e.dirname)}"
    validation-message="${e["validation-message"]}"
    toggletip-text="${e["toggletip-text"]}"
    toggletip-placement="${e["toggletip-placement"]}"
    toggletip-strategy="${e["toggletip-strategy"]}"
    info-icon-aria-label="${e["info-icon-aria-label"]}"
    max-character-limit="${l(e["max-character-limit"])}"
    character-limit-announcement="${l(e["character-limit-announcement"])}"
  ></mdc-textarea>`,je={title:"Components/textarea",tags:["autodocs"],component:"mdc-textarea",render:ye,argTypes:{...se,...ce,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},label:{control:"text"},required:{control:"boolean"},"help-text":{control:"text"},readonly:{control:"boolean"},disabled:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},wrap:{control:"select",options:Object.values($)},minlength:{control:"number"},maxlength:{control:"number"},"max-character-limit":{control:"number"},autocapitalize:{control:"select",options:Object.values(C)},"auto-focus-on-mount":{control:"boolean"},autocomplete:{control:"select",options:Object.values(E)},dirname:{control:"text"},"data-aria-label":{control:"text"},"help-text-type":{control:"select",options:Object.values(x)},"validation-message":{control:"text"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(he)},"toggletip-strategy":{control:"select",options:Object.values(pe)},"info-icon-aria-label":{control:"text"},"character-limit-announcement":{control:"text"},...de(["characterLimitExceedingFired","textarea","validity","willValidate"])}},y={args:{name:"textarea",label:"Label",rows:u.ROWS,cols:u.COLS,wrap:u.WRAP,required:!0,placeholder:"Placeholder",value:"","help-text":"Help text","help-text-type":x.DEFAULT,readonly:!1,disabled:!1,autocapitalize:C.OFF,autocomplete:E.OFF,"data-aria-label":""}},K={name:"textarea",label:"Label",rows:u.ROWS,cols:u.COLS,wrap:u.WRAP},g={args:{...K,value:"Disabled & typed textarea",disabled:!0},parameters:{docs:{description:{story:"This story displays a disabled textarea component. The textarea will be displayed as disabledwhen the `disabled` attribute is set to true. The user will not be able to interact with the textarea."}}}},v={args:{...K,readonly:!0,value:"Readonly textarea"},parameters:{docs:{description:{story:"This story displays a readonly textarea component. The textarea will be displayed as readonlywhen the `readonly` attribute is set to true. The user will not be able to edit the content of the textarea."}}}},f={argTypes:{...me(["label","help-text","required","placeholder","value","help-text-type"])},render:()=>p` <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
      ${Object.values(x).map(e=>p`<mdc-textarea
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
    </div>`,parameters:{docs:{description:{story:"This story displays all the variants of the textarea component.The textarea component supports all the validation types. User can set the `help-text-type` attribute to any of the validation types to displaythe help text in that style.The textarea can also be set as required by passing the `required` attribute.User can also set the `max-character-limit` attribute to display a character counter below the textarea.The textarea can also be set as readonly by passing the `readonly` attribute."}}}},T={args:{required:!0,placeholder:"Write what's on your mind","max-character-limit":75,"character-limit-announcement":"%{number-of-characters} out of %{max-character-limit} characters are typed."},render:e=>{let t="",r=x.DEFAULT;return p`
      <form @submit=${a=>{a.preventDefault();const i=new FormData(a.target).get("tweet");h("Form Submitted")({value:i})}}>
        <fieldset>
          <legend>Form Example</legend>
          <mdc-textarea
            id="textarea"
            name="tweet"
            label="Tweet"
            @limitexceeded=${a=>{var i,m;h("limitexceeded")(a);const{detail:n}=a;n.currentCharacterCount>n.maxCharacterLimit?(t=`Input must not exceed ${n.maxCharacterLimit} characters.`,r=x.ERROR):(t="",r=x.DEFAULT),(i=document.getElementById("textarea"))==null||i.setAttribute("help-text",t),(m=document.getElementById("textarea"))==null||m.setAttribute("help-text-type",r)}}
            help-text="${t}"
            help-text-type="${r}"
            ?required="${e.required}"
            max-character-limit="${e["max-character-limit"]}"
            placeholder="${e.placeholder}"
            character-limit-announcement="${e["character-limit-announcement"]}"
          ></mdc-textarea>
          <div style="display: flex; gap: 0.25rem; margin-top: 0.25rem">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
    `},parameters:{docs:{description:{story:"To add a character counter to the textarea, use the `max-character-limit` attribute. The character counter will be displayed below the textarea with the max character limit. User needs to listen to the `limitexceeded` event to handle the character limit check. The event will contain the current character count, the max character limit & current value of the textarea. Based on which the user can update the help text and help text type dynamically."}}}},w={render:()=>p`
      <form @submit=${t=>{t.preventDefault();const b=new FormData(t.target).get("tweet");h("Form Submitted")({value:b})}}>
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
    `},A={render:e=>{const t=e["max-character-limit"],r=(a,n)=>{const i=a.querySelector('mdc-textarea[name="tweet"]'),{value:m}=i;return n.required&&(!m||m.trim()==="")?(i.setAttribute("help-text","Please enter your tweet"),i.setAttribute("help-text-type","error"),!1):m&&m.length>t?(i.setAttribute("help-text",`Input must not exceed ${t} characters.`),i.setAttribute("help-text-type","error"),!1):(i.setAttribute("help-text","Looks good!"),i.setAttribute("help-text-type","success"),!0)};return p`
      <form @submit=${a=>{a.preventDefault();const n=a.target;if(!r(n,e))return;const m=new FormData(n).get("tweet");h("Form Submitted")({value:m})}} @reset=${a=>{const i=a.target.querySelector('mdc-textarea[name="tweet"]');i.setAttribute("help-text",e["help-text"]||""),i.setAttribute("help-text-type",e["help-text-type"]||"default")}} novalidate>
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
}`,...(D=(R=y.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var I,q,V;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(q=g.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,k,M;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(k=v.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var U,z,P;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(z=f.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var H,W,N;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: \`Write what's on your mind\`,
    'max-character-limit': 75,
    'character-limit-announcement': '%{number-of-characters} out of %{max-character-limit} characters are typed.'
  },
  render: (args: Args) => {
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
            ?required="\${args.required}"
            max-character-limit="\${args['max-character-limit']}"
            placeholder="\${args.placeholder}"
            character-limit-announcement="\${args['character-limit-announcement']}"
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
        story: 'To add a character counter to the textarea, use the \`max-character-limit\` attribute. ' + 'The character counter will be displayed below the textarea with the max character limit. ' + 'User needs to listen to the \`limitexceeded\` event to handle the character limit check. ' + 'The event will contain the current character count, the max character limit & current value of the textarea. ' + 'Based on which the user can update the help text and help text type dynamically.'
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
}`,...(X=(B=w.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var Y,G,Z;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(G=A.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const Be=["Example","DisabledTextarea","ReadonlyTextarea","AllVariants","TextareaWithCharacterCounter","TextareaInsideForm","TextareaInsideFormWithHelpTextValidation"];export{f as AllVariants,g as DisabledTextarea,y as Example,v as ReadonlyTextarea,w as TextareaInsideForm,A as TextareaInsideFormWithHelpTextValidation,T as TextareaWithCharacterCounter,Be as __namedExportsOrder,je as default};
