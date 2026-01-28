import"./index-BukzXrpm.js";import"./index-8eILrhn8.js";import{D as c,T as f,a as b}from"./toggle.constants-CXOZowYr.js";import{$ as y,X as v,a0 as k,h as x,k as p,R as $,n as u}from"./iframe-CM5v7A9W.js";import"./index-DMugiz5i.js";import{t as l}from"./if-defined-DgC6xmGR.js";import{A as E}from"./buttonsimple.component-Brk_p-op.js";import{a as T}from"./ControlTypeMixin-DQNERDni.js";import{D as A}from"./DataAriaLabelMixin-Bksih1qV.js";import{F}from"./FormInternalsMixin-DRnfzEfu.js";import"./index-p66vxPgV.js";import{D as S}from"./formfieldwrapper.constants-BXCNKWCp.js";import{K as z,A as m}from"./KeyToActionMixin-eZa7VV6_.js";import{F as n}from"./formfieldwrapper.component-Bf_bW2S9.js";const C=[y,v`
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
  `,...k(!0)];var D=Object.defineProperty,g=(d,t,e,o)=>{for(var s=void 0,r=d.length-1,h;r>=0;r--)(h=d[r])&&(s=h(t,e,s)||s);return s&&D(t,e,s),s};const a=class a extends z(T(E(F(A(n))))){constructor(){super(...arguments),this.checked=!1,this.size=c.SIZE,this.renderLabelAndHelperText=()=>this.label?p`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:x}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.checked=!1}formStateRestoreCallback(t){t&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let t=null;this.checked?t=this.value?this.value:"isActive":t=null,this.manageRequired(),this.internals.setFormValue(t)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&this.controlType!=="controlled"&&(this.checked=!this.checked)}handleKeyDown(t){var o;const e=this.getActionForKeyEvent(t);(this.readonly||this.softDisabled)&&e===m.SPACE&&t.preventDefault(),e===m.ENTER&&((o=this.form)==null||o.requestSubmit())}handleChange(t){this.toggleState();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}setToggleSize(t){this.setAttribute("size",Object.values(f).includes(t)?t:c.SIZE)}update(t){super.update(t),t.has("checked")&&this.setFormValue(),t.has("size")&&this.setToggleSize(this.size)}render(){return p`
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
          role="${$.SWITCH}"
          ?required="${this.required}"
          name="${l(this.name)}"
          value="${l(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${l(this.helpText?S.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabelAndHelperText()}
    `}};a.styles=[...n.styles,...C],a.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0};let i=a;g([u({type:Boolean,reflect:!0})],i.prototype,"checked");g([u({type:String,reflect:!0})],i.prototype,"size");i.register(b);
