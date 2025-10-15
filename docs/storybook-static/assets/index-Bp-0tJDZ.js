import"./index-B5UHMyr0.js";import"./index-CE42psa3.js";import{T as u}from"./index-lOuGaI2e.js";import{S as b,X as f,h as k,k as l,n as o}from"./iframe-DopKAP5L.js";import"./index-DwtUpKF_.js";import{t as r}from"./if-defined-DqsAC6OU.js";import{K as m}from"./keys-hFXe221I.js";import{A as v}from"./buttonsimple.component-B7XrDwpV.js";import{D as x}from"./DataAriaLabelMixin-DMnUhncW.js";import{F as y}from"./FormInternalsMixin-BhRCm80K.js";import{D as g,F as p}from"./formfieldwrapper.component-YB8mSnQi.js";const $=[b`
    :host {
      flex-direction: row;
      align-items: flex-start;
    }

    :host::part(static-checkbox) {
      position: relative;
    }

    :host::part(checkbox-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: var(--mdc-checkbox-size);
      height: var(--mdc-checkbox-size);
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    :host::part(label) {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-checkbox),
    :host([indeterminate]:hover)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-checkbox),
    :host([indeterminate]:active)::part(static-checkbox) {
      --mdc-checkbox-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...f(!0)];var E=Object.defineProperty,c=(d,e,t,T)=>{for(var i=void 0,a=d.length-1,n;a>=0;a--)(n=d[a])&&(i=n(e,t,i)||i);return i&&E(e,t,i),i};const h=class h extends v(y(x(p))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?l`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:k}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;(this.readonly||this.softDisabled)&&e.key===m.SPACE&&e.preventDefault(),e.key===m.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return l`
      <mdc-staticcheckbox
        part="static-checkbox"
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="checkbox-input"
          name="${r(this.name)}"
          value="${r(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${r(this.helpText?g.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};h.styles=[...p.styles,...$];let s=h;c([o({type:Boolean,reflect:!0})],s.prototype,"checked");c([o({type:Boolean,reflect:!0})],s.prototype,"indeterminate");c([o({type:Boolean,reflect:!0})],s.prototype,"autofocus");s.register(u);
