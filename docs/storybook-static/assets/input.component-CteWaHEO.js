import{O as f,q as h,z as u,o as x,a4 as v,aa as T,k as c,t as n,n as o}from"./iframe-CYZ064vw.js";import{e as E,i as $,t as d}from"./directive-Ctav8iJK.js";import"./index-B4MIJwAF.js";import{V as A,D as I}from"./formfieldwrapper.constants-pFvOs8lW.js";import{D as C}from"./DataAriaLabelMixin-BjIJ89BI.js";import{F as L}from"./FormInternalsMixin-B818aAc-.js";import{A as O}from"./buttonsimple.component-DfTyNmtt.js";import{a as w,A as k,N as _}from"./KeyDownHandledMixin-DGzJ0rYO.js";import{C as F,A as R,a as S,D as l,P as N}from"./input.constants-BYFUEsUf.js";import{F as b}from"./formfieldwrapper.component-BfRcMfn_.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=E(class extends ${constructor(i){if(super(i),i.type!==d.PROPERTY&&i.type!==d.ATTRIBUTE&&i.type!==d.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===h||t===u)return t;const e=i.element,s=i.name;if(i.type===d.PROPERTY){if(t===e[s])return h}else if(i.type===d.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(s))return h}else if(i.type===d.ATTRIBUTE&&e.getAttribute(s)===t+"")return h;return x(i),t}}),U=[v`
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
  `,...T(!0)];var z=Object.defineProperty,a=(i,t,e,s)=>{for(var p=void 0,y=i.length-1,g;y>=0;y--)(g=i[y])&&(p=g(t,e,p)||p);return p&&z(t,e,p),p};const m=class m extends F(w(O(L(C(b))))){constructor(){super(...arguments),this.placeholder="",this.trailingButton=!1,this.autocapitalize=R.OFF,this.autocomplete=S.OFF,this.clearAriaLabel="",this.dataAriaDescribedby=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(p=>{this.onerror&&this.onerror(p)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.maxCharacterLimit&&this.value.length>this.maxCharacterLimit&&this.helpTextType===A.ERROR&&this.helpText&&this.inputElement.setCustomValidity(this.helpText),this.setValidity()}updated(t){super.updated(t),t.has("value")&&this.handleCharacterOverflowStateChange(),t.has("helpText")&&this.announceCharacterLimitWarning()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value),this.announceCharacterLimitWarning()}onInput(t){if(this.updateValue(),this.setInputValidity(),this.checkValidity(),!t.composed){const e=t.constructor;this.dispatchEvent(new e(t.type,t))}}onChange(t){this.updateValue(),this.setInputValidity();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}handleKeyDown(t){var e;this.getActionForKeyEvent(t)===k.ENTER&&this.getKeyboardNavMode()===_.DEFAULT&&((e=this.form)==null||e.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?c`
      <mdc-icon
        part="leading-icon"
        name=${this.leadingIcon}
        size="${l.ICON_SIZE_VALUE}"
        length-unit="${l.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `:u}renderPrefixText(){return this.prefixText?c`
      <mdc-text
        part="prefix-text"
        tagname="${l.PREFIX_TEXT_TAG}"
        type="${l.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,N.MAX_LENGTH)}
      </mdc-text>
    `:u}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus(),this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}renderTrailingButton(t=!1){const e=t||this.value&&this.trailingButton;return e?c`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${e?"":"hidden"}"
        prefix-icon="${l.CLEAR_BUTTON_ICON}"
        variant="${l.CLEAR_BUTTON_VARIANT}"
        size="${l.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!e}
      ></mdc-button>
    `:u}renderInputElement(t,e=!1){const s=e?"":this.placeholder;return c`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${V(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${n(this.helpText?I.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${n(s)}
      minlength=${n(this.minlength)}
      maxlength=${n(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${n(this.dirname)}
      pattern=${n(this.pattern)}
      list=${n(this.list)}
      size=${n(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`}renderInputFooter(){return!this.helpText&&!this.maxCharacterLimit?u:c` <div part="input-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `}render(){return c`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(l.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      <mdc-screenreaderannouncer
        identity="${this.inputId}"
        announcement="${n(this.characterLimitAriaLiveAnnouncer)}"
        data-aria-live="polite"
        delay="500"
      ></mdc-screenreaderannouncer>
      ${this.renderInputFooter()}
    `}};m.styles=[...b.styles,...U],m.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0};let r=m;a([o({type:String})],r.prototype,"placeholder");a([o({type:String,attribute:"prefix-text"})],r.prototype,"prefixText");a([o({type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");a([o({type:Boolean,attribute:"trailing-button"})],r.prototype,"trailingButton");a([o({type:Number})],r.prototype,"maxlength");a([o({type:Number})],r.prototype,"minlength");a([o({type:String})],r.prototype,"autocapitalize");a([o({type:String})],r.prototype,"autocomplete");a([o({type:String})],r.prototype,"dirname");a([o({type:String})],r.prototype,"pattern");a([o({type:String})],r.prototype,"list");a([o({type:Number})],r.prototype,"size");a([o({type:String,attribute:"clear-aria-label"})],r.prototype,"clearAriaLabel");a([o({type:String,reflect:!0,attribute:"data-aria-describedby"})],r.prototype,"dataAriaDescribedby");export{V as F,r as I};
