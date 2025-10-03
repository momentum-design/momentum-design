import{F as x,R as h,h as u,o as v,S as f,X as T,k as d,n as o}from"./iframe-Bmqk5ncS.js";import{t as l}from"./if-defined-CEMHl27f.js";import{e as E,i as $,t as c}from"./directive-Ctav8iJK.js";import"./index-Cp423qIv.js";import{D as I,F as g}from"./formfieldwrapper.component-DgTSXZHj.js";import{D as k}from"./DataAriaLabelMixin-C9ZcLuvp.js";import{F as A}from"./FormInternalsMixin-GQemRFrQ.js";import{K as _}from"./keys-hFXe221I.js";import{A as w}from"./buttonsimple.component-DJ5naDiX.js";import{A as C,a as F,D as p,P as O}from"./input.constants-BWFnE7gJ.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=E(class extends ${constructor(r){if(super(r),r.type!==c.PROPERTY&&r.type!==c.ATTRIBUTE&&r.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!x(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===h||t===u)return t;const e=r.element,a=r.name;if(r.type===c.PROPERTY){if(t===e[a])return h}else if(r.type===c.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(a))return h}else if(r.type===c.ATTRIBUTE&&e.getAttribute(a)===t+"")return h;return v(r),t}}),L=[f`
    :host {
      --mdc-input-disabled-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-input-disabled-text-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-input-disabled-background-color: var(--mds-color-theme-background-input-disabled);
      --mdc-input-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-input-text-color: var(--mds-color-theme-text-primary-normal);
      --mdc-input-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-selection-background-color: var(--mds-color-theme-background-accent-active);
      --mdc-input-selection-text-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-input-support-text-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-input-hover-background-color: var(--mds-color-theme-background-primary-hover);
      --mdc-input-focused-background-color: var(--mds-color-theme-background-primary-ghost);
      --mdc-input-focused-border-color: var(--mds-color-theme-outline-input-active);
      --mdc-input-error-border-color: var(--mds-color-theme-text-error-normal);
      --mdc-input-warning-border-color: var(--mds-color-theme-text-warning-normal);
      --mdc-input-success-border-color: var(--mds-color-theme-text-success-normal);
      --mdc-input-primary-border-color: var(--mds-color-theme-text-accent-normal);
    }
    :host,
    :host::part(input-container),
    :host::part(input-section),
    :host::part(input-text) {
      width: 100%;
    }

    input {
      font-family: inherit;
    }

    :host::part(input-container):hover {
      background-color: var(--mdc-input-hover-background-color);
    }

    :host::part(input-container):active,
    :host::part(input-container):focus-within {
      background-color: var(--mdc-input-focused-background-color);
      border-color: var(--mdc-input-focused-border-color);
    }

    :host([readonly])::part(leading-icon) {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled])::part(input-text),
    :host([disabled]) input::placeholder,
    :host([disabled])::part(prefix-text) {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled])::part(input-container),
    :host([readonly])::part(input-container),
    :host([disabled][help-text-type='default'])::part(input-container),
    :host([disabled][help-text-type='success'])::part(input-container),
    :host([disabled][help-text-type='warning'])::part(input-container),
    :host([disabled][help-text-type='error'])::part(input-container),
    :host([disabled][help-text-type='priority'])::part(input-container) {
      border-color: var(--mdc-input-disabled-border-color);
      background: var(--mdc-input-disabled-background-color);
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

    :host::part(input-text) {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: var(--mdc-input-background-color);
      outline: none;
    }

    input::selection {
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

    :host([help-text-type='error'])::part(input-container),
    :host([help-text-type='error'])::part(input-container):focus-within {
      border-color: var(--mdc-input-error-border-color);
    }
    :host([help-text-type='warning'])::part(input-container),
    :host([help-text-type='warning'])::part(input-container):focus-within {
      border-color: var(--mdc-input-warning-border-color);
    }
    :host([help-text-type='success'])::part(input-container),
    :host([help-text-type='success'])::part(input-container):focus-within {
      border-color: var(--mdc-input-success-border-color);
    }
    :host([help-text-type='priority'])::part(input-container),
    :host([help-text-type='priority'])::part(input-container):focus-within {
      border-color: var(--mdc-input-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,...T(!0)];var S=Object.defineProperty,n=(r,t,e,a)=>{for(var s=void 0,m=r.length-1,y;m>=0;m--)(y=r[m])&&(s=y(t,e,s)||s);return s&&S(t,e,s),s};const b=class b extends w(A(k(g))){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=C.OFF,this.autocomplete=F.OFF,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage&&this.inputElement.setCustomValidity(this.validationMessage),this.setValidity()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity(),this.checkValidity()}onChange(t){this.updateValue(),this.setInputValidity();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}handleKeyDown(t){var e;t.key===_.ENTER&&((e=this.form)==null||e.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?d`
      <mdc-icon
        part="leading-icon"
        name=${this.leadingIcon}
        size="${p.ICON_SIZE_VALUE}"
        length-unit="${p.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `:u}renderPrefixText(){return this.prefixText?d`
      <mdc-text
        part="prefix-text"
        tagname="${p.PREFIX_TEXT_TAG}"
        type="${p.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,O.MAX_LENGTH)}
      </mdc-text>
    `:u}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus(),this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}renderTrailingButton(t=!1){const e=t||this.value&&this.trailingButton;return e?d`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${e?"":"hidden"}"
        prefix-icon="${p.CLEAR_BUTTON_ICON}"
        variant="${p.CLEAR_BUTTON_VARIANT}"
        size="${p.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!e}
      ></mdc-button>
    `:u}renderInputElement(t,e=!1){const a=e?"":this.placeholder;return d`<input
      aria-label="${this.dataAriaLabel??""}"
      part="input-text"
      id="${this.inputId}"
      name="${this.name}"
      .value="${R(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${l(this.helpText?I.HELPER_TEXT_ID:"")}"
      aria-invalid="${this.helpTextType==="error"?"true":"false"}"
      placeholder=${l(a)}
      minlength=${l(this.minlength)}
      maxlength=${l(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      dirname=${l(this.dirname)}
      pattern=${l(this.pattern)}
      list=${l(this.list)}
      size=${l(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`}render(){return d`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(p.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():u}
    `}};b.styles=[...g.styles,...L];let i=b;n([o({type:String})],i.prototype,"placeholder");n([o({type:Boolean})],i.prototype,"readonly");n([o({type:String,attribute:"prefix-text"})],i.prototype,"prefixText");n([o({type:String,attribute:"leading-icon"})],i.prototype,"leadingIcon");n([o({type:Boolean,attribute:"trailing-button"})],i.prototype,"trailingButton");n([o({type:Number})],i.prototype,"maxlength");n([o({type:Number})],i.prototype,"minlength");n([o({type:String})],i.prototype,"autocapitalize");n([o({type:String})],i.prototype,"autocomplete");n([o({type:String})],i.prototype,"dirname");n([o({type:String})],i.prototype,"pattern");n([o({type:String})],i.prototype,"list");n([o({type:Number})],i.prototype,"size");n([o({type:String,attribute:"clear-aria-label"})],i.prototype,"clearAriaLabel");export{R as F,i as I};
