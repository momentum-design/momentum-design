import"./index-CZLUX-wB.js";import"./index-CfAVHUCC.js";import{C as f,T as k}from"./index-kcvCo2Ij.js";import{a2 as v,a4 as y,h as x,k as u,n as d}from"./iframe-Bm4Ct3z4.js";import"./index-_nMOmNK2.js";import{t as c}from"./if-defined-a2k8tZZF.js";import{A as g}from"./buttonsimple.component-B1VJnY8n.js";import{D as E}from"./DataAriaLabelMixin-D7HUoX4x.js";import{F as A}from"./FormInternalsMixin-C4hS5U_U.js";import{F as h}from"./formfieldwrapper.component-DRsWrQhG.js";import{D as T}from"./formfieldwrapper.constants-lxp6bzgb.js";import{K as $,a as D,N as b,A as n}from"./KeyDownHandledMixin-B5nxB61D.js";const w=[v`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
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
      width: var(--mdc-staticcheckbox-size);
      height: var(--mdc-staticcheckbox-size);
      border-radius: 0.125rem;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
    }

    :host::part(label),
    :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-checkbox),
    :host([indeterminate]:hover)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-checkbox),
    :host([indeterminate]:active)::part(static-checkbox) {
      --mdc-staticcheckbox-background-color: var(--mds-color-theme-control-active-pressed);
    }

    :host([help-text-type='error'])::part(static-checkbox) {
      --mdc-staticcheckbox-border-color: var(--mds-color-theme-outline-cancel-normal);
    }

    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...y(!0)];var F=Object.defineProperty,l=(p,e,t,o)=>{for(var i=void 0,r=p.length-1,m;r>=0;r--)(m=p[r])&&(i=m(e,t,i)||i);return i&&F(e,t,i),i};const a=class a extends $(D(g(A(E(h))))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.helpTextType=f.DEFAULT,this.renderLabelAndHelperText=()=>this.label?u`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:x}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked,this.indeterminate=!1)}click(){super.click(),this.toggleState()}handleKeyDown(e){var o;const t=this.getActionForKeyEvent(e);this.getKeyboardNavMode()===b.DEFAULT&&((this.readonly||this.softDisabled)&&t===n.SPACE&&e.preventDefault(),t===n.ENTER&&((o=this.form)==null||o.requestSubmit(),e.preventDefault(),this.keyDownEventHandled())),this.getKeyboardNavMode()===b.SPATIAL&&!(this.readonly||this.softDisabled)&&t===n.ENTER&&(this.toggleState(),this.keyDownEventHandled())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return u`
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
          aria-describedby="${c(this.helpText?T.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};a.styles=[...h.styles,...w],a.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};let s=a;l([d({type:Boolean,reflect:!0})],s.prototype,"checked");l([d({type:Boolean,reflect:!0})],s.prototype,"indeterminate");l([d({type:String,reflect:!0,attribute:"help-text-type"})],s.prototype,"helpTextType");s.register(k);
