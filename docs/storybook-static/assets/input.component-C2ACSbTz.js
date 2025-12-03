import{H as f,r as h,h as u,q as x,U as v,X as T,k as c,n as o}from"./iframe-Zf8S4XXr.js";import{t as p}from"./if-defined-BQWJj0RV.js";import{e as E,i as $,t as d}from"./directive-Ctav8iJK.js";import"./index-DNNFT9no.js";import{D as I}from"./formfieldwrapper.constants-2ozCuejz.js";import{D as A}from"./DataAriaLabelMixin-DveGvTLx.js";import{F as k}from"./FormInternalsMixin-oD5aignM.js";import{K as _}from"./TabIndexMixin-D7wC9CdO.js";import{A as C}from"./buttonsimple.component-Wudc5woz.js";import{A as w,a as O,D as l,P as F}from"./input.constants-C5swL4Rj.js";import{F as g}from"./formfieldwrapper.component-DGftBtLy.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=E(class extends ${constructor(i){if(super(i),i.type!==d.PROPERTY&&i.type!==d.ATTRIBUTE&&i.type!==d.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===h||t===u)return t;const e=i.element,a=i.name;if(i.type===d.PROPERTY){if(t===e[a])return h}else if(i.type===d.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(a))return h}else if(i.type===d.ATTRIBUTE&&e.getAttribute(a)===t+"")return h;return x(i),t}}),S=[v`
    :host {
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
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
      height: 2rem;
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
  `,...T(!0)];var L=Object.defineProperty,n=(i,t,e,a)=>{for(var s=void 0,m=i.length-1,b;m>=0;m--)(b=i[m])&&(s=b(t,e,s)||s);return s&&L(t,e,s),s};const y=class y extends C(k(A(g))){constructor(){super(...arguments),this.placeholder="",this.trailingButton=!1,this.autocapitalize=w.OFF,this.autocomplete=O.OFF,this.clearAriaLabel="",this.dataAriaDescribedby=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage&&this.inputElement.setCustomValidity(this.validationMessage),this.setValidity()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity(),this.checkValidity()}onChange(t){this.updateValue(),this.setInputValidity();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}handleKeyDown(t){var e;t.key===_.ENTER&&((e=this.form)==null||e.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?c`
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
        ${this.prefixText.slice(0,F.MAX_LENGTH)}
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
    `:u}renderInputElement(t,e=!1){const a=e?"":this.placeholder;return c`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${R(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${p(this.helpText?I.HELPER_TEXT_ID:this.dataAriaDescribedby??"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${p(a)}
      minlength=${p(this.minlength)}
      maxlength=${p(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${p(this.dirname)}
      pattern=${p(this.pattern)}
      list=${p(this.list)}
      size=${p(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`}render(){return c`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(l.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():u}
    `}};y.styles=[...g.styles,...S];let r=y;n([o({type:String})],r.prototype,"placeholder");n([o({type:String,attribute:"prefix-text"})],r.prototype,"prefixText");n([o({type:String,attribute:"leading-icon"})],r.prototype,"leadingIcon");n([o({type:Boolean,attribute:"trailing-button"})],r.prototype,"trailingButton");n([o({type:Number})],r.prototype,"maxlength");n([o({type:Number})],r.prototype,"minlength");n([o({type:String})],r.prototype,"autocapitalize");n([o({type:String})],r.prototype,"autocomplete");n([o({type:String})],r.prototype,"dirname");n([o({type:String})],r.prototype,"pattern");n([o({type:String})],r.prototype,"list");n([o({type:Number})],r.prototype,"size");n([o({type:String,attribute:"clear-aria-label"})],r.prototype,"clearAriaLabel");n([o({type:String,reflect:!0,attribute:"data-aria-describedby"})],r.prototype,"dataAriaDescribedby");export{R as F,r as I};
