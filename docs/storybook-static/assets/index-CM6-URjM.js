import{u as v,a4 as f,aa as g,z as m,k as l,t as s,n as o,v as w}from"./iframe-CYZ064vw.js";import"./index-B4MIJwAF.js";import{V as z,D as C}from"./formfieldwrapper.constants-pFvOs8lW.js";import{C as T,A as $}from"./input.constants-BYFUEsUf.js";import{D as A}from"./DataAriaLabelMixin-BjIJ89BI.js";import{F as S}from"./FormInternalsMixin-B818aAc-.js";import{A as L}from"./buttonsimple.component-DfTyNmtt.js";import{K as E,a as F,A as x}from"./KeyDownHandledMixin-DGzJ0rYO.js";import{F as y}from"./formfieldwrapper.component-BfRcMfn_.js";import"./index-DM419G9w.js";import"./index-C-a6jsM_.js";import"./index-BiMq2Xfh.js";import"./index-z2OdZlVq.js";const k=v.constructTagName("textarea"),b={HARD:"hard",SOFT:"soft"},O={OFF:"off",ON:"on"},d={ROWS:5,COLS:40,WRAP:b.SOFT},R=[f`
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
  `,...g(!0)];var D=Object.defineProperty,a=(p,t,e,n)=>{for(var i=void 0,h=p.length-1,u;h>=0;h--)(u=p[h])&&(i=u(t,e,i)||i);return i&&D(t,e,i),i};const c=class c extends T(E(F(L(S(A(y)))))){constructor(){super(...arguments),this.rows=d.ROWS,this.wrap=b.SOFT,this.autocapitalize=$.OFF,this.autocomplete=O.OFF,this.resizable=!1,this.resizeStartY=0,this.resizeStartRows=0,this.handlePointerDown=t=>{if(this.readonly)return;const e=t.currentTarget;e&&(t.preventDefault(),this.resizeStartY=t.clientY,this.resizeStartRows=this.rows||d.ROWS,e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("lostpointercapture",this.handlePointerUp))},this.handlePointerMove=t=>{if(!this.textarea)return;const e=t.clientY-this.resizeStartY,n=parseFloat(window.getComputedStyle(this.textarea).lineHeight),i=Math.round(e/n);this.rows=Math.max(1,this.resizeStartRows+i)},this.handlePointerUp=t=>{const e=t.currentTarget;e&&(t.type==="pointerup"&&e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),e.removeEventListener("pointermove",this.handlePointerMove),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("lostpointercapture",this.handlePointerUp))}}get textarea(){return this.inputElement}connectedCallback(){var t;super.connectedCallback(),this.value=((t=this.textContent)==null?void 0:t.trim())||this.value,this.updateComplete.then(()=>{this.textarea&&(this.textarea.checkValidity(),this.setTextareaValidity(),this.internals.setFormValue(this.textarea.value))}).catch(e=>{this.onerror&&this.onerror(e)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}setTextareaValidity(){this.required&&this.validationMessage&&this.value===""?this.textarea.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===z.ERROR&&this.helpText?this.textarea.setCustomValidity(this.helpText):this.textarea.setCustomValidity(""),this.setValidity()}formResetCallback(){this.value="",this.requestUpdate()}formStateRestoreCallback(t){this.value=t}handleValueChange(){this.updateComplete.then(()=>{this.setTextareaValidity()}).catch(t=>{this.onerror&&this.onerror(t)})}updated(t){super.updated(t),t.has("value")&&(this.handleValueChange(),this.handleCharacterOverflowStateChange()),t.has("helpText")&&this.announceCharacterLimitWarning()}updateValue(){this.value=this.textarea.value,this.internals.setFormValue(this.textarea.value),this.announceCharacterLimitWarning()}onChange(t){this.updateValue();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}renderTextareaFooter(){return!this.helpText&&!this.maxCharacterLimit?m:l` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}handleResizeKeyDown(t){if(this.readonly)return;const e=this.rows||d.ROWS;let n;const i=this.getActionForKeyEvent(t);i===x.UP?(n=Math.max(1,e-1),n!==e&&this.keyDownEventHandled()):i===x.DOWN&&(n=e+1,this.keyDownEventHandled()),n!==void 0&&(t.preventDefault(),t.stopPropagation(),this.rows=n)}render(){return l`
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
          aria-describedby="${s(this.helpText?C.HELPER_TEXT_ID:"")}"
          aria-invalid="${this.helpTextType==="error"?"true":"false"}"
        ></textarea>
        <mdc-screenreaderannouncer
          identity="${this.inputId}"
          announcement="${s(this.characterLimitAriaLiveAnnouncer)}"
          data-aria-live="polite"
          delay="500"
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
            `:m}
      </div>
      ${this.renderTextareaFooter()}
    `}};c.styles=[...y.styles,...R];let r=c;a([o({type:String})],r.prototype,"placeholder");a([o({type:Number,reflect:!0})],r.prototype,"rows");a([o({type:Number})],r.prototype,"cols");a([o({type:String})],r.prototype,"wrap");a([o({type:String})],r.prototype,"autocapitalize");a([o({type:String})],r.prototype,"autocomplete");a([o({type:String})],r.prototype,"dirname");a([o({type:Number})],r.prototype,"maxlength");a([o({type:Number})],r.prototype,"minlength");a([o({type:Boolean,reflect:!0})],r.prototype,"resizable");a([o({type:String,attribute:"resize-button-aria-label"})],r.prototype,"resizeButtonAriaLabel");a([w("textarea")],r.prototype,"inputElement");r.register(k);export{O as A,d as D,b as W};
