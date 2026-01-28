import"./index-BukzXrpm.js";import"./index-8eILrhn8.js";import{C as f,T as k}from"./index-B-iBrAKP.js";import{X as x,a0 as v,h as y,k as p,n as a}from"./iframe-CM5v7A9W.js";import"./index-DMugiz5i.js";import{t as h}from"./if-defined-DgC6xmGR.js";import{A as g}from"./buttonsimple.component-Brk_p-op.js";import{D as $}from"./DataAriaLabelMixin-Bksih1qV.js";import{F as T}from"./FormInternalsMixin-DRnfzEfu.js";import{F as m}from"./formfieldwrapper.component-Bf_bW2S9.js";import{D as A}from"./formfieldwrapper.constants-BXCNKWCp.js";import{K as u,A as b}from"./KeyToActionMixin-eZa7VV6_.js";const E=[x`
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
  `,...v(!0)];var D=Object.defineProperty,r=(l,e,t,o)=>{for(var s=void 0,c=l.length-1,d;c>=0;c--)(d=l[c])&&(s=d(e,t,s)||s);return s&&D(e,t,s),s};const n=class n extends u(u(g(T($(m))))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.helpTextType=f.DEFAULT,this.renderLabelAndHelperText=()=>this.label?p`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:y}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var o;const t=this.getActionForKeyEvent(e);(this.readonly||this.softDisabled)&&t===b.SPACE&&e.preventDefault(),t===b.ENTER&&((o=this.form)==null||o.requestSubmit(),e.preventDefault())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return p`
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
          name="${h(this.name)}"
          value="${h(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${h(this.helpText?A.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};n.styles=[...m.styles,...E];let i=n;r([a({type:Boolean,reflect:!0})],i.prototype,"checked");r([a({type:Boolean,reflect:!0})],i.prototype,"indeterminate");r([a({type:Boolean,reflect:!0})],i.prototype,"autofocus");r([a({type:String,reflect:!0,attribute:"help-text-type"})],i.prototype,"helpTextType");i.register(k);
