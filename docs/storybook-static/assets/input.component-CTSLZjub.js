import{N as b,O as g,r as c,k as p,S as x,t as a,n as r}from"./iframe-BrN8x_Z0.js";import"./index-DKcGWQe-.js";import{V as f,D as v}from"./formfieldwrapper.constants-OU-UvGf4.js";import{D as T}from"./DataAriaLabelMixin-3qTrfG9e.js";import{F as E}from"./FormInternalsMixin-BeyXRvUO.js";import{A as $}from"./buttonsimple.component-C085WkLc.js";import{a as C,A as I,N as A}from"./KeyDownHandledMixin-lEQrVlT7.js";import{C as L,A as k,a as w,D as s,P as F}from"./input.constants-CjrJNpEq.js";import{F as h}from"./formfieldwrapper.component-BjWEjXnw.js";const _=[b`
    :host {
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
      --mdc-input-height: 2rem;
    }
    :host,
    :host::part(input-container),
    :host::part(input-section),
    :host::part(input-text),
    ::slotted(input) {
      width: 100%;
    }

    :host::part(input-text),
    ::slotted(input) {
      /* Unset default native input placeholder padding */
      padding-block: unset;
      padding-inline: unset;

      /* Set midsize regular font family to native input text */
      font-family: var(--mdc-themeprovider-font-family);
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
      text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
    }

    :host::part(input-container) {
      background-color: var(--mdc-input-background-color);
      border-color: var(--mdc-input-border-color);
    }

    :host::part(input-container):hover {
      --mdc-input-background-color: var(--mds-color-theme-background-primary-hover);
    }

    :host::part(input-container):active,
    :host::part(input-container):focus-within {
      --mdc-input-border-color: var(--mds-color-theme-outline-input-active);
    }

    :host::part(leading-icon) {
      aspect-ratio: 1;
    }

    :host::part(input-container) {
      height: var(--mdc-input-height);
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-input-border-color);
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
      min-width: 3.25rem;
    }

    :host::part(input-section) {
      display: flex;
      gap: 0.25rem;
    }

    :host::part(input-text),
    ::slotted(input) {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: inherit;
      outline: none;
    }

    :host::part(input-text)::selection,
    ::slotted(input)::selection {
      background-color: var(--mdc-input-selection-background-color);
      color: var(--mdc-input-selection-text-color);
    }

    :host::part(prefix-text) {
      color: var(--mdc-input-support-text-color);
      white-space: nowrap; /* restrict prefix text to be in one line */
    }

    input::placeholder {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled]) {
      --mdc-input-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-support-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-background-color: var(--mds-color-theme-background-input-disabled);
    }

    :host([readonly])::part(leading-icon) {
      color: var(--mdc-input-support-text-color);
    }

    :host([readonly])::part(input-container) {
      --mdc-input-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-background-color: var(--mds-color-theme-background-input-disabled);
    }

    :host([help-text-type='error'])::part(input-container),
    :host([help-text-type='error'])::part(input-container):focus-within,
    :host([help-text-type='warning'])::part(input-container),
    :host([help-text-type='warning'])::part(input-container):focus-within,
    :host([help-text-type='success'])::part(input-container),
    :host([help-text-type='success'])::part(input-container):focus-within,
    :host([help-text-type='priority'])::part(input-container),
    :host([help-text-type='priority'])::part(input-container):focus-within {
      border-color: var(--mdc-help-text-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }

    :host::part(input-footer) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    :host::part(character-counter) {
      margin-left: auto;
      color: var(--mdc-input-support-text-color);
    }

    :host([help-text-type='error'])::part(character-counter) {
      color: var(--mdc-help-text-color);
    }

    :host([disabled])::part(character-counter) {
      color: var(--mds-color-theme-text-primary-disabled);
    }
  `,...g(!0)];var O=Object.defineProperty,o=(m,t,e,l)=>{for(var n=void 0,u=m.length-1,y;u>=0;u--)(y=m[u])&&(n=y(t,e,n)||n);return n&&O(t,e,n),n};const d=class d extends L(C($(E(T(h))))){constructor(){super(...arguments),this.placeholder="",this.trailingButton=!1,this.autocapitalize=k.OFF,this.autocomplete=w.OFF,this.clearAriaLabel="",this.dataAriaDescribedby=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,e,l){super.attributeChangedCallback(t,e,l),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(n=>{this.onerror&&this.onerror(n)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===f.ERROR&&this.helpText&&this.inputElement.setCustomValidity(this.helpText),this.setValidity()}updated(t){super.updated(t),t.has("value")&&this.handleCharacterOverflowStateChange(),t.has("helpText")&&this.announceCharacterLimitWarning()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value),this.announceCharacterLimitWarning()}onInput(t){if(this.updateValue(),this.setInputValidity(),this.checkValidity(),!t.composed){const e=t.constructor;this.dispatchEvent(new e(t.type,t))}}onChange(t){this.updateValue(),this.setInputValidity();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}handleKeyDown(t){var e;this.getActionForKeyEvent(t)===I.ENTER&&this.getKeyboardNavMode()===A.DEFAULT&&((e=this.form)==null||e.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?p`
      <mdc-icon
        part="leading-icon"
        name=${this.leadingIcon}
        size="${s.ICON_SIZE_VALUE}"
        length-unit="${s.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `:c}renderPrefixText(){return this.prefixText?p`
      <mdc-text
        part="prefix-text"
        tagname="${s.PREFIX_TEXT_TAG}"
        type="${s.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,F.MAX_LENGTH)}
      </mdc-text>
    `:c}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus(),this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}renderTrailingButton(t=!1){const e=t||this.value&&this.trailingButton;return e?p`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${e?"":"hidden"}"
        prefix-icon="${s.CLEAR_BUTTON_ICON}"
        variant="${s.CLEAR_BUTTON_VARIANT}"
        size="${s.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!e}
      ></mdc-button>
    `:c}renderInputElement(t,e=!1){const l=e?"":this.placeholder;return p`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${x(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${a(this.helpText?v.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${a(l)}
      minlength=${a(this.minlength)}
      maxlength=${a(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${a(this.dirname)}
      pattern=${a(this.pattern)}
      list=${a(this.list)}
      size=${a(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`}renderInputFooter(){return!this.helpText&&!this.maxCharacterLimit?c:p` <div part="input-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}render(){return p`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(s.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      <mdc-screenreaderannouncer
        identity="${this.inputId}"
        announcement="${a(this.characterLimitAriaLiveAnnouncer)}"
        data-aria-live="polite"
        delay="500"
      ></mdc-screenreaderannouncer>
      ${this.renderInputFooter()}
    `}};d.styles=[...h.styles,..._],d.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};let i=d;o([r({type:String})],i.prototype,"placeholder");o([r({type:String,attribute:"prefix-text"})],i.prototype,"prefixText");o([r({type:String,attribute:"leading-icon"})],i.prototype,"leadingIcon");o([r({type:Boolean,attribute:"trailing-button"})],i.prototype,"trailingButton");o([r({type:Number})],i.prototype,"maxlength");o([r({type:Number})],i.prototype,"minlength");o([r({type:String})],i.prototype,"autocapitalize");o([r({type:String})],i.prototype,"autocomplete");o([r({type:String})],i.prototype,"dirname");o([r({type:String})],i.prototype,"pattern");o([r({type:String})],i.prototype,"list");o([r({type:Number})],i.prototype,"size");o([r({type:String,attribute:"clear-aria-label"})],i.prototype,"clearAriaLabel");o([r({type:String,reflect:!0,attribute:"data-aria-describedby"})],i.prototype,"dataAriaDescribedby");export{i as I};
