import"./index-9jv0kyio.js";import"./index-BMN--PIx.js";import{T as p}from"./index-8oex4yMZ.js";import{S as u,X as b,h as k,k as l,n as s}from"./iframe-Bmqk5ncS.js";import"./index-BltIwT_C.js";import{t as a}from"./if-defined-CEMHl27f.js";import{K as f}from"./keys-hFXe221I.js";import{A as v}from"./buttonsimple.component-DJ5naDiX.js";import{D as x}from"./DataAriaLabelMixin-C9ZcLuvp.js";import{F as g}from"./FormInternalsMixin-GQemRFrQ.js";import{D as y,F as m}from"./formfieldwrapper.component-DgTSXZHj.js";const $=[u`
    :host {
      --mdc-checkbox-background-color-hover: var(--mds-color-theme-control-inactive-hover);
      --mdc-checkbox-pressed-icon-color: var(--mds-color-theme-control-inactive-pressed);
      --mdc-checkbox-checked-pressed-icon-color: var(--mds-color-theme-control-active-pressed);
      --mdc-checkbox-checked-background-color-hover: var(--mds-color-theme-control-active-hover);
      --mdc-checkbox-disabled-checked-icon-color: var(--mds-color-theme-control-active-disabled);

      flex-direction: row;
      align-items: flex-start;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host::part(label) :host::part(checkbox-input) {
      cursor: pointer;
    }

    :host([disabled])::part(label) :host([disabled])::part(checkbox-input) {
      cursor: default;
    }

    :host(:hover) mdc-staticcheckbox {
      background: var(--mdc-checkbox-background-color-hover);
    }
    :host(:active) mdc-staticcheckbox {
      background: var(--mdc-checkbox-pressed-icon-color);
    }

    :host([checked]:hover)::part(icon-container),
    :host([indeterminate]:hover)::part(icon-container) {
      background: var(--mdc-checkbox-checked-background-color-hover);
    }
    :host([checked]:active)::part(icon-container),
    :host([indeterminate]:active)::part(icon-container) {
      background: var(--mdc-checkbox-checked-pressed-icon-color);
    }

    :host([disabled]) mdc-staticcheckbox {
      background: unset;
    }

    :host([disabled][checked])::part(icon-container),
    :host([disabled][indeterminate])::part(icon-container) {
      background-color: var(--mdc-checkbox-disabled-checked-icon-color);
    }

    :host mdc-staticcheckbox {
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
    }

    :host::part(checkbox-input) {
      width: 1rem;
      height: 1rem;
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
  `,...b(!0)];var E=Object.defineProperty,c=(d,e,t,T)=>{for(var i=void 0,r=d.length-1,h;r>=0;r--)(h=d[r])&&(i=h(e,t,i)||i);return i&&E(e,t,i),i};const n=class n extends v(g(x(m))){constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.autofocus=!1,this.renderLabelAndHelperText=()=>this.label?l`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:k}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}setFormValue(){let e=null;this.checked?e=this.value?this.value:"on":e=null,this.manageRequired(),this.internals.setFormValue(e)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}formResetCallback(){this.checked=!1,this.indeterminate=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}toggleState(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1)}handleKeyDown(e){var t;e.key===f.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}update(e){super.update(e),e.has("checked")&&this.setFormValue()}render(){return l`
      <mdc-staticcheckbox
        class="mdc-focus-ring"
        ?checked="${this.checked}"
        ?indeterminate="${this.indeterminate}"
        ?disabled="${this.disabled}"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="checkbox-input"
          name="${a(this.name)}"
          value="${a(this.value)}"
          ?required="${this.required}"
          .checked="${this.checked}"
          aria-checked="${this.indeterminate?"mixed":this.checked}"
          .indeterminate="${this.indeterminate}"
          .disabled="${this.disabled}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          aria-describedby="${a(this.helpText?y.HELPER_TEXT_ID:"")}"
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
        />
      </mdc-staticcheckbox>
      ${this.renderLabelAndHelperText()}
    `}};n.styles=[...m.styles,...$];let o=n;c([s({type:Boolean,reflect:!0})],o.prototype,"checked");c([s({type:Boolean,reflect:!0})],o.prototype,"indeterminate");c([s({type:Boolean,reflect:!0})],o.prototype,"autofocus");o.register(p);
