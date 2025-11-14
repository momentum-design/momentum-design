import"./index-J80jAx4o.js";import"./index-C_tS0rqd.js";import{D as h,T as m,a as g}from"./toggle.constants-CMpdHJFq.js";import{U as f,S as b,X as v,k as y,W as k,n as p}from"./iframe-B6TSCLlU.js";import"./index-Dz2fvLvN.js";import{t as o}from"./if-defined-BXl5P2tt.js";import{K as n}from"./TabIndexMixin-B0rMAGJz.js";import{A as E}from"./buttonsimple.component-BteSHQ_j.js";import{D as $}from"./DataAriaLabelMixin-BO8JSxcF.js";import{F as S}from"./FormInternalsMixin-BOgIByaA.js";import"./index-DgfkBSWc.js";import{D as w}from"./formfieldwrapper.constants-BcCAU07E.js";import{F as c}from"./formfieldwrapper.component-BFVYLVfv.js";const C=[f,b`
    /* Grid layout for labeled toggles */
    :host([label]),
    :host([help-text]) {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      column-gap: 0.75rem;
      row-gap: 0.25rem;
    }

    :host([help-text='']) {
      grid-template-rows: auto;
      row-gap: 0rem;
    }

    :host::part(label-text),
    :host::part(help-text-container) {
      grid-column: 2;
    }

    /* Component structure and layout */
    :host::part(toggle-input) {
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 0.1%;
      overflow: visible;
      z-index: 1;
      width: var(--mdc-toggle-width);
      height: var(--mdc-toggle-height);
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host(:hover)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-hover);
    }

    :host(:active)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-inactive-pressed);
    }

    :host([checked]:hover)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-hover);
    }

    :host([checked]:active)::part(static-toggle) {
      --mdc-toggle-background-color: var(--mds-color-theme-control-active-pressed);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([disabled]),
    :host([soft-disabled]) {
      pointer-events: none;
    }
  `,...v(!0)];var x=Object.defineProperty,u=(l,t,e,z)=>{for(var s=void 0,a=l.length-1,d;a>=0;a--)(d=l[a])&&(s=d(t,e,s)||s);return s&&x(t,e,s),s};const r=class r extends E(S($(c))){constructor(){super(...arguments),this.checked=!1,this.size=h.SIZE}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.checked=!1}formStateRestoreCallback(t){t&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let t=null;this.checked?t=this.value?this.value:"isActive":t=null,this.manageRequired(),this.internals.setFormValue(t)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked)}handleKeyDown(t){var e;(this.readonly||this.softDisabled)&&t.key===n.SPACE&&t.preventDefault(),t.key===n.ENTER&&((e=this.form)==null||e.requestSubmit())}handleChange(t){this.toggleState();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}setToggleSize(t){this.setAttribute("size",Object.values(m).includes(t)?t:h.SIZE)}update(t){super.update(t),t.has("checked")&&this.setFormValue(),t.has("size")&&this.setToggleSize(this.size)}render(){return y`
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
          role="${k.CHECKBOX}"
          ?required="${this.required}"
          name="${o(this.name)}"
          value="${o(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${o(this.helpText?w.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};r.styles=[...c.styles,...C];let i=r;u([p({type:Boolean,reflect:!0})],i.prototype,"checked");u([p({type:String,reflect:!0})],i.prototype,"size");i.register(g);
