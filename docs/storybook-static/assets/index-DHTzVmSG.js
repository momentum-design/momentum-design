import"./index-Ds2qIooY.js";import"./index-DWkFIevN.js";import{C as u,T as b}from"./index-DOQr8Rpk.js";import{U as f,X as k,h as x,k as n,n as a}from"./iframe-Hv7IoejM.js";import"./index-CAySyOG8.js";import{t as c}from"./if-defined-DHscNqNO.js";import{K as p}from"./TabIndexMixin-C3SjIrcs.js";import{A as y}from"./buttonsimple.component-D4b6CpKl.js";import{D as v}from"./DataAriaLabelMixin-CVlRlWZI.js";import{F as g}from"./FormInternalsMixin-D0yaPAPx.js";import{F as m}from"./formfieldwrapper.component-B7k1jbKr.js";import{D as $}from"./formfieldwrapper.constants-DXvpCjUn.js";const E=[f`
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

    :host([help-text-type='error'])::part(static-checkbox) {
      --mdc-checkbox-border-color: var(--mds-color-theme-outline-cancel-normal);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...k(!0)];var T=Object.defineProperty,r=(l,e,t,A)=>{for(var s=void 0,o=l.length-1,d;o>=0;o--)(d=l[o])&&(s=d(e,t,s)||s);return s&&T(e,t,s),s};const h=class h extends y(g(v(m))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.helpTextType=u.DEFAULT,this.renderLabelAndHelperText=()=>this.label?n`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:x}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;(this.readonly||this.softDisabled)&&e.key===p.SPACE&&e.preventDefault(),e.key===p.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return n`
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
          name="${c(this.name)}"
          value="${c(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${c(this.helpText?$.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};h.styles=[...m.styles,...E];let i=h;r([a({type:Boolean,reflect:!0})],i.prototype,"checked");r([a({type:Boolean,reflect:!0})],i.prototype,"indeterminate");r([a({type:Boolean,reflect:!0})],i.prototype,"autofocus");r([a({type:String,reflect:!0,attribute:"help-text-type"})],i.prototype,"helpTextType");i.register(b);
