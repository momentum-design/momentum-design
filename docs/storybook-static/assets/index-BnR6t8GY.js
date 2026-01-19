import"./index-DxXNhewu.js";import"./index-DawcDNdR.js";import{D as h,T as g,a as f}from"./toggle.constants-Dcsq_S7q.js";import{W as b,U as y,X as v,h as k,k as c,R as x,n as m}from"./iframe-BCMIj5Hm.js";import"./index-HkF_GrEw.js";import{t as r}from"./if-defined-laA4nR5u.js";import{K as p}from"./TabIndexMixin-BsqTLWiT.js";import{A as $}from"./buttonsimple.component-lMFqpsZa.js";import{a as E}from"./ControlTypeMixin-Di1dXDPW.js";import{D as S}from"./DataAriaLabelMixin-DVWx9CSx.js";import{F as T}from"./FormInternalsMixin-8h80WSE4.js";import"./index-CCUx3A2T.js";import{D as z}from"./formfieldwrapper.constants-BL-6j9WN.js";import{F as l}from"./formfieldwrapper.component-BVQ-ACDW.js";const F=[b,y`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    /* Flexbox layout for labeled toggles */
    :host([label]),
    :host([help-text]) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.75rem;
    }

    :host([size='default'])::part(label-text) {
      margin: 0.125rem 0;
    }

    :host([size='compact'])::part(static-toggle) {
      margin: 0.125rem 0;
    }

    :host::part(text-container) {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    /* Component structure and layout */
    :host::part(toggle-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-toggle) {
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-toggle) {
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-toggle) {
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-toggle) {
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...v(!0)];var C=Object.defineProperty,u=(d,t,e,D)=>{for(var s=void 0,o=d.length-1,n;o>=0;o--)(n=d[o])&&(s=n(t,e,s)||s);return s&&C(t,e,s),s};const a=class a extends E($(T(S(l)))){constructor(){super(...arguments),this.checked=!1,this.size=h.SIZE,this.renderLabelAndHelperText=()=>this.label?c`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:k}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.checked=!1}formStateRestoreCallback(t){t&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let t=null;this.checked?t=this.value?this.value:"isActive":t=null,this.manageRequired(),this.internals.setFormValue(t)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&this.controlType!=="controlled"&&(this.checked=!this.checked)}handleKeyDown(t){var e;(this.readonly||this.softDisabled)&&t.key===p.SPACE&&t.preventDefault(),t.key===p.ENTER&&((e=this.form)==null||e.requestSubmit())}handleChange(t){this.toggleState();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}setToggleSize(t){this.setAttribute("size",Object.values(g).includes(t)?t:h.SIZE)}update(t){super.update(t),t.has("checked")&&this.setFormValue(),t.has("size")&&this.setToggleSize(this.size)}render(){return c`
      <mdc-statictoggle
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
        size="${this.size}"
        class="mdc-focus-ring"
        part="static-toggle"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="toggle-input"
          role="${x.SWITCH}"
          ?required="${this.required}"
          name="${r(this.name)}"
          value="${r(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${r(this.helpText?z.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabelAndHelperText()}
    `}};a.styles=[...l.styles,...F],a.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0};let i=a;u([m({type:Boolean,reflect:!0})],i.prototype,"checked");u([m({type:String,reflect:!0})],i.prototype,"size");i.register(f);
