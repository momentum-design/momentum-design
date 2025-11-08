import{u as g,q as y,S as f,X as C,h as d,k as l,n as i,$ as w}from"./iframe-BYtmCSVJ.js";import{t as s}from"./if-defined-Cp9MdHFD.js";import{e as L}from"./query-BPxBhMfF.js";import"./index-CMG7x9eM.js";import{V as E,D as z}from"./formfieldwrapper.constants-BukxmA1C.js";import{A}from"./input.constants-ByLzycgY.js";import{D as T}from"./DataAriaLabelMixin-BA7Gh7ID.js";import{F as S}from"./FormInternalsMixin-DJk-djVb.js";import{A as $}from"./buttonsimple.component-DkLVKnsz.js";import{K as x}from"./TabIndexMixin-BHj_w836.js";import{F as v}from"./formfieldwrapper.component-DpT7sSKn.js";import"./index-BDSSbMwn.js";import"./index-B1cyu70h.js";import"./index-Rx2L2S2y.js";import"./index-DJTLRJu9.js";const R=g.constructTagName("textarea"),b={HARD:"hard",SOFT:"soft"},O={OFF:"off",ON:"on"},c={CHARACTER_COUNTER_TYPE:y.BODY_MIDSIZE_REGULAR,ROWS:5,COLS:40,WRAP:b.SOFT},F=[f`
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
      position: relative;
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

    :host::part(resize-button) {
      position: absolute;
      bottom: 0.25rem;
      inset-inline-end: 0.25rem;
      cursor: nwse-resize;
      opacity: 0.5;
      z-index: 1;
      border-radius: 50%;
    }

    :host::part(resize-button):focus-visible {
      opacity: 1;
    }

    :host(:dir(rtl))::part(resize-button) {
      cursor: nesw-resize;
      transform: scaleX(-1);
    }

    :host([readonly])::part(resize-button),
    :host([disabled])::part(resize-button) {
      cursor: default;
    }
  `,...C(!0)];var k=Object.defineProperty,a=(m,t,e,o)=>{for(var n=void 0,h=m.length-1,u;h>=0;h--)(u=m[h])&&(n=u(t,e,n)||n);return n&&k(t,e,n),n};const p=class p extends $(S(T(v))){constructor(){super(...arguments),this.rows=c.ROWS,this.wrap=b.SOFT,this.autocapitalize=A.OFF,this.autocomplete=O.OFF,this.resizable=!1,this.characterLimitExceedingFired=!1,this.resizeStartY=0,this.resizeStartRows=0,this.handlePointerDown=t=>{if(this.readonly)return;const e=t.currentTarget;e&&(t.preventDefault(),this.resizeStartY=t.clientY,this.resizeStartRows=this.rows||c.ROWS,e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("lostpointercapture",this.handlePointerUp))},this.handlePointerMove=t=>{if(!this.textarea)return;const e=t.clientY-this.resizeStartY,o=parseFloat(window.getComputedStyle(this.textarea).lineHeight),n=Math.round(e/o);this.rows=Math.max(1,this.resizeStartRows+n)},this.handlePointerUp=t=>{const e=t.currentTarget;e&&(t.type==="pointerup"&&e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),e.removeEventListener("pointermove",this.handlePointerMove),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("lostpointercapture",this.handlePointerUp))}}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(e=>{this.onerror&&this.onerror(e)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===E.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange())}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),["maxlength","minlength","required"].includes(t)&&this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(h=>{this.onerror&&this.onerror(h)})}dispatchCharacterOverflowStateChangeEvent(){this.dispatchEvent(new CustomEvent("limitexceeded",{detail:{currentCharacterCount:this.value.length,maxCharacterLimit:this.maxCharacterLimit,value:this.value},bubbles:!0,composed:!0}))}handleCharacterOverflowStateChange(){this.maxCharacterLimit&&(this.value.length>this.maxCharacterLimit&&!this.characterLimitExceedingFired?(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!0):this.value.length<=this.maxCharacterLimit&&this.characterLimitExceedingFired&&(this.dispatchCharacterOverflowStateChangeEvent(),this.characterLimitExceedingFired=!1))}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value),this.announceMaxLengthWarning()}announceMaxLengthWarning(){this.ariaLiveAnnouncer="",!(!this.maxCharacterLimit||this.value.length===0)&&(this.helpText&&this.value.length>this.maxCharacterLimit?this.updateComplete.then(()=>{this.ariaLiveAnnouncer=this.helpText}).catch(()=>{}):this.characterLimitAnnouncement&&this.value.length<=this.maxCharacterLimit&&(this.ariaLiveAnnouncer=this.characterLimitAnnouncement.replace("%{number-of-characters}",this.value.length.toString()).replace("%{max-character-limit}",this.maxCharacterLimit.toString())))}onChange(t){this.updateValue();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}renderCharacterCounter(){return this.maxCharacterLimit?l`
      <mdc-text part="character-counter" tagname="span" type=${c.CHARACTER_COUNTER_TYPE}>
        ${this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `:d}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?d:l` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}handleResizeKeyDown(t){if(this.readonly)return;const e=this.rows||c.ROWS;let o;t.key===x.ARROW_UP?o=Math.max(1,e-1):t.key===x.ARROW_DOWN&&(o=e+1),o!==void 0&&(t.preventDefault(),t.stopPropagation(),this.rows=o)}render(){return l`
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
          aria-describedby="${s(this.helpText?z.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        <mdc-screenreaderannouncer
          identity="${this.inputId}"
          announcement="${s(this.ariaLiveAnnouncer)}"
          data-aria-live="polite"
        ></mdc-screenreaderannouncer>
        ${this.resizable?l`
          <mdc-button
            part="resize-button"
            class="own-focus-ring"
            variant="tertiary"
            size="24"
            prefix-icon="resize-corner-regular"
            aria-label=${this.resizeButtonAriaLabel??""}
            ?disabled="${this.disabled||this.readonly}"
            @keydown=${this.handleResizeKeyDown}
            @pointerdown=${this.handlePointerDown}
          ></mdc-button>
        `:d}
      </div>
      ${this.renderTextareaFooter()}
    `}};p.styles=[...v.styles,...F];let r=p;a([i({type:String})],r.prototype,"placeholder");a([i({type:Number,reflect:!0})],r.prototype,"rows");a([i({type:Number})],r.prototype,"cols");a([i({type:String})],r.prototype,"wrap");a([i({type:String})],r.prototype,"autocapitalize");a([i({type:String})],r.prototype,"autocomplete");a([i({type:String})],r.prototype,"dirname");a([i({type:Number})],r.prototype,"maxlength");a([i({type:Number})],r.prototype,"minlength");a([i({type:Number,attribute:"max-character-limit"})],r.prototype,"maxCharacterLimit");a([i({type:String,attribute:"character-limit-announcement"})],r.prototype,"characterLimitAnnouncement");a([i({type:Boolean,reflect:!0})],r.prototype,"resizable");a([i({type:String,attribute:"resize-button-aria-label"})],r.prototype,"resizeButtonAriaLabel");a([L("textarea")],r.prototype,"inputElement");a([w()],r.prototype,"ariaLiveAnnouncer");r.register(R);export{O as A,c as D,b as W};
