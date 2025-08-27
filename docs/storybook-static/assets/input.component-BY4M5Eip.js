import{R as h,D as u,i as v,k as d}from"./lit-element-D5KKan5q.js";import{n as o}from"./property-Bj3TGwkg.js";import{t as l}from"./if-defined-D5BV9-c0.js";import{e as f,i as x,t as p}from"./directive-Ctav8iJK.js";import{r as T,d as E}from"./directive-helpers-Bb6vhctq.js";import"./index-BSQRiSuk.js";import{D as $,F as g}from"./formfieldwrapper.component-BfkD1w96.js";import{D as I}from"./DataAriaLabelMixin-DVpSBUFD.js";import{F as k}from"./FormInternalsMixin-DHE-e7AC.js";import{K as A}from"./keys-hFXe221I.js";import{A as _}from"./buttonsimple.component-DgtnjMrJ.js";import{A as w,a as C,D as c,P as O}from"./input.constants-BNI4baFt.js";import{a as R}from"./index-B-GnYs90.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=f(class extends x{constructor(r){if(super(r),r.type!==p.PROPERTY&&r.type!==p.ATTRIBUTE&&r.type!==p.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!T(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===h||t===u)return t;const e=r.element,a=r.name;if(r.type===p.PROPERTY){if(t===e[a])return h}else if(r.type===p.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(a))return h}else if(r.type===p.ATTRIBUTE&&e.getAttribute(a)===t+"")return h;return E(r),t}}),L=[v`
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
    .input-container,
    .input-section,
    .input {
      width: 100%;
    }

    input {
      font-family: inherit;
    }

    :host([readonly]) .leading-icon {
      color: var(--mdc-input-support-text-color);
    }

    :host([disabled]) .input,
    :host([disabled]) .input::placeholder,
    :host([disabled]) .prefix-text {
      color: var(--mdc-input-disabled-text-color);
    }

    :host([disabled]) .input-container,
    :host([readonly]) .input-container,
    :host([disabled][help-text-type='default']) .input-container,
    :host([disabled][help-text-type='success']) .input-container,
    :host([disabled][help-text-type='warning']) .input-container,
    :host([disabled][help-text-type='error']) .input-container,
    :host([disabled][help-text-type='priority']) .input-container {
      border-color: var(--mdc-input-disabled-border-color);
      background: var(--mdc-input-disabled-background-color);
    }

    .leading-icon {
      aspect-ratio: 1;
    }

    .input-container {
      height: 2rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--mdc-input-border-color);
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.34375rem 0.375rem 0.34375rem 0.75rem;
      min-width: 3.25rem;
    }

    .input-section {
      display: flex;
      gap: 0.25rem;
    }

    .input {
      border: none;
      color: var(--mdc-input-text-color);
      background-color: var(--mdc-input-background-color);
      outline: none;
    }

    .input::selection {
      background-color: var(--mdc-input-selection-background-color);
      color: var(--mdc-input-selection-text-color);
    }

    .prefix-text {
      color: var(--mdc-input-support-text-color);
      white-space: nowrap; /* restrict prefix text to be in one line */
    }

    :host(:not([disabled])) .input-container:hover {
      background-color: var(--mdc-input-hover-background-color);
    }

    :host(:not([disabled])) .input-container:active,
    :host(:not([disabled])) .input-container:focus-within {
      background-color: var(--mdc-input-focused-background-color);
      border-color: var(--mdc-input-focused-border-color);
    }

    .input::placeholder {
      color: var(--mdc-input-support-text-color);
    }

    :host([help-text-type='error']) .input-container,
    :host([help-text-type='error']) .input-container:focus-within {
      border-color: var(--mdc-input-error-border-color);
    }
    :host([help-text-type='warning']) .input-container,
    :host([help-text-type='warning']) .input-container:focus-within {
      border-color: var(--mdc-input-warning-border-color);
    }
    :host([help-text-type='success']) .input-container,
    :host([help-text-type='success']) .input-container:focus-within {
      border-color: var(--mdc-input-success-border-color);
    }
    :host([help-text-type='priority']) .input-container,
    :host([help-text-type='priority']) input-container:focus-within {
      border-color: var(--mdc-input-primary-border-color);
    }

    .hidden {
      opacity: 0;
      pointer-events: none;
    }
  `,...R(!0)];var P=Object.defineProperty,n=(r,t,e,a)=>{for(var s=void 0,m=r.length-1,y;m>=0;m--)(y=r[m])&&(s=y(t,e,s)||s);return s&&P(t,e,s),s};const b=class b extends _(k(I(g))){constructor(){super(...arguments),this.placeholder="",this.readonly=!1,this.trailingButton=!1,this.autocapitalize=w.OFF,this.autocomplete=C.OFF,this.clearAriaLabel=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.inputElement&&(this.setInputValidity(),this.internals.setFormValue(this.inputElement.value))}).catch(t=>{this.onerror&&this.onerror(t)})}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.value="",this.inputElement.value="",this.setInputValidity(),this.requestUpdate()}formStateRestoreCallback(t){this.value=t}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="validation-message"&&this.updateComplete.then(()=>{this.setInputValidity()}).catch(s=>{this.onerror&&this.onerror(s)})}setInputValidity(){this.inputElement.setCustomValidity(""),!this.inputElement.validity.valid&&this.validationMessage&&this.inputElement.setCustomValidity(this.validationMessage),this.setValidity()}updateValue(){this.value=this.inputElement.value,this.internals.setFormValue(this.inputElement.value)}onInput(){this.updateValue(),this.setInputValidity(),this.checkValidity()}onChange(t){this.updateValue(),this.setInputValidity();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}handleKeyDown(t){var e;t.key===A.ENTER&&((e=this.form)==null||e.requestSubmit())}renderLeadingIcon(){return this.leadingIcon?d`
      <mdc-icon
        class="leading-icon"
        part="leading-icon"
        name=${this.leadingIcon}
        size="${c.ICON_SIZE_VALUE}"
        length-unit="${c.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `:u}renderPrefixText(){return this.prefixText?d`
      <mdc-text
        class="prefix-text"
        tagname="${c.PREFIX_TEXT_TAG}"
        type="${c.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0,O.MAX_LENGTH)}
      </mdc-text>
    `:u}clearInputText(){var t;this.value="",(t=this.inputElement)==null||t.focus(),this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}renderTrailingButton(t=!1){const e=t||this.value&&this.trailingButton;return e?d`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${e?"":"hidden"}"
        prefix-icon="${c.CLEAR_BUTTON_ICON}"
        variant="${c.CLEAR_BUTTON_VARIANT}"
        size="${c.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled||this.readonly||!e}
      ></mdc-button>
    `:u}renderInputElement(t,e=!1){const a=e?"":this.placeholder;return d`<input
      aria-label="${this.dataAriaLabel??""}"
      class="input"
      part="mdc-input"
      id="${this.inputId}"
      name="${this.name}"
      .value="${F(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${t}"
      aria-describedby="${l(this.helpText?$.HELPER_TEXT_ID:"")}"
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
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div class="input-section" part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(c.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText?this.renderHelperText():u}
    `}};b.styles=[...g.styles,...L];let i=b;n([o({type:String})],i.prototype,"placeholder");n([o({type:Boolean})],i.prototype,"readonly");n([o({type:String,attribute:"prefix-text"})],i.prototype,"prefixText");n([o({type:String,attribute:"leading-icon"})],i.prototype,"leadingIcon");n([o({type:Boolean,attribute:"trailing-button"})],i.prototype,"trailingButton");n([o({type:Number})],i.prototype,"maxlength");n([o({type:Number})],i.prototype,"minlength");n([o({type:String})],i.prototype,"autocapitalize");n([o({type:String})],i.prototype,"autocomplete");n([o({type:String})],i.prototype,"dirname");n([o({type:String})],i.prototype,"pattern");n([o({type:String})],i.prototype,"list");n([o({type:Number})],i.prototype,"size");n([o({type:String,attribute:"clear-aria-label"})],i.prototype,"clearAriaLabel");export{i as I};
