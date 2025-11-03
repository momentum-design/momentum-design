import{u as v,q as y,S as b,X as f,h as p,k as h,$ as C,n as r}from"./iframe-5GhuLSNT.js";import{t as i}from"./if-defined-Brvanskx.js";import{e as L}from"./query-BPxBhMfF.js";import"./index-BmmVHsWS.js";import{V as T,D as A}from"./formfieldwrapper.constants-DmA4-VpO.js";import{A as E}from"./input.constants-B_qbAwDz.js";import{D as $}from"./DataAriaLabelMixin-BMsKWw_k.js";import{F as w}from"./FormInternalsMixin-CFkD-wFC.js";import{A as F}from"./buttonsimple.component-Lr2LsVPI.js";import{F as u}from"./formfieldwrapper.component-CDeMqzKe.js";import"./index-DpKNC7b1.js";import"./index-CZmWnR20.js";import"./index-BqqZxVGc.js";import"./index-CGKgMaJk.js";const O=v.constructTagName("textarea"),g={HARD:"hard",SOFT:"soft"},S={OFF:"off",ON:"on"},x={CHARACTER_COUNTER_TYPE:y.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:g.SOFT},k=[b`
    :host {
      --mdc-textarea-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-textarea-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-textarea-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-container-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-textarea-text-secondary-normal: var(--mds-color-theme-text-secondary-normal);
      --mdc-textarea-text-font-size: var(--mds-font-size-body-midsize);
      --mdc-textarea-text-line-height: var(--mds-font-lineheight-body-midsize);
      width: 100%;
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
      width: 100%;
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
  `,...f(!0)];var R=Object.defineProperty,a=(l,t,o,d)=>{for(var n=void 0,s=l.length-1,m;s>=0;s--)(m=l[s])&&(n=m(t,o,n)||n);return n&&R(t,o,n),n};const c=class c extends F(w($(u))){constructor(){super(...arguments),this.rows=x.ROWS,this.wrap=g.SOFT,this.autocapitalize=E.OFF,this.autocomplete=S.OFF,this.characterLimitExceedingFired=!1}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(o=>{this.onerror&&this.onerror(o)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===T.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,o,d){super.attributeChangedCallback(t,o,d),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value),this.announceMaxLengthWarning()}announceMaxLengthWarning(){this.ariaLiveAnnouncer="",!(!this.maxCharacterLimit||this.value.length===0)&&(this.helpText&&this.value.length>this.maxCharacterLimit?this.updateComplete.then(()=>{this.ariaLiveAnnouncer=this.helpText}).catch(()=>{}):this.characterLimitAnnouncement&&this.value.length<=this.maxCharacterLimit&&(this.ariaLiveAnnouncer=this.characterLimitAnnouncement.replace("%{number-of-characters}",this.value.length.toString()).replace("%{max-character-limit}",this.maxCharacterLimit.toString())))}onChange(t){this.updateValue();const o=t.constructor;this.dispatchEvent(new o(t.type,t))}renderCharacterCounter(){return this.maxCharacterLimit?h`
      <mdc-text part="character-counter" tagname="span" type=${x.CHARACTER_COUNTER_TYPE}>
        ${this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:p}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?p:h` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}render(){return h`
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
          placeholder=${i(this.placeholder)}
          rows=${i(this.rows)}
          cols=${i(this.cols)}
          wrap=${i(this.wrap)}
          autocapitalize=${this.autocapitalize}
          autocomplete=${this.autocomplete}
          minlength=${i(this.minlength)}
          maxlength=${i(this.maxlength)}
          dirname=${i(this.dirname)}
          @input=${this.updateValue}
          @change=${this.onChange}
          aria-describedby="${i(this.helpText?A.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        <mdc-screenreaderannouncer
          identity="${this.inputId}"
          announcement="${i(this.ariaLiveAnnouncer)}"
          data-aria-live="polite"
        ></mdc-screenreaderannouncer>
      </div>
      ${this.renderTextareaFooter()}
    `}};c.styles=[...u.styles,...k];let e=c;a([r({type:String})],e.prototype,"placeholder");a([r({type:Number})],e.prototype,"rows");a([r({type:Number})],e.prototype,"cols");a([r({type:String})],e.prototype,"wrap");a([r({type:String})],e.prototype,"autocapitalize");a([r({type:String})],e.prototype,"autocomplete");a([r({type:String})],e.prototype,"dirname");a([r({type:Number})],e.prototype,"maxlength");a([r({type:Number})],e.prototype,"minlength");a([r({type:Number,attribute:"max-character-limit"})],e.prototype,"maxCharacterLimit");a([r({type:String,attribute:"character-limit-announcement"})],e.prototype,"characterLimitAnnouncement");a([L("textarea")],e.prototype,"inputElement");a([C()],e.prototype,"ariaLiveAnnouncer");e.register(O);export{S as A,x as D,g as W};
