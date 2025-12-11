import"./index-D6ttOyno.js";import"./index-ByoG7FEj.js";import{D as h,T as m,a as g}from"./toggle.constants-CT0ulFaP.js";import{W as f,U as b,X as v,k as y,R as k,n as p}from"./iframe-DqI8R0T6.js";import"./index-CSF4IDSN.js";import{t as o}from"./if-defined-1FKA9-0t.js";import{K as c}from"./TabIndexMixin-eZI_-HVg.js";import{A as E}from"./buttonsimple.component-Dx5XsFID.js";import{D as $}from"./DataAriaLabelMixin-BPTWCNDN.js";import{F as w}from"./FormInternalsMixin-D3QOTzSb.js";import"./index-CyJ7x0yO.js";import{D as S}from"./formfieldwrapper.constants-CEGUuN8v.js";import{F as n}from"./formfieldwrapper.component-CmV8Sb6L.js";const C=[f,b`
    :host {
      --mdc-label-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      --mdc-label-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      --mdc-label-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

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
      width: var(--mdc-statictoggle-width);
      height: var(--mdc-statictoggle-height);
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
  `,...v(!0)];var x=Object.defineProperty,u=(l,t,e,z)=>{for(var s=void 0,a=l.length-1,d;a>=0;a--)(d=l[a])&&(s=d(t,e,s)||s);return s&&x(t,e,s),s};const r=class r extends E(w($(n))){constructor(){super(...arguments),this.checked=!1,this.size=h.SIZE}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(t){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(t)}formResetCallback(){this.checked=!1}formStateRestoreCallback(t){t&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let t=null;this.checked?t=this.value?this.value:"isActive":t=null,this.manageRequired(),this.internals.setFormValue(t)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked)}handleKeyDown(t){var e;(this.readonly||this.softDisabled)&&t.key===c.SPACE&&t.preventDefault(),t.key===c.ENTER&&((e=this.form)==null||e.requestSubmit())}handleChange(t){this.toggleState();const e=t.constructor;this.dispatchEvent(new e(t.type,t))}setToggleSize(t){this.setAttribute("size",Object.values(m).includes(t)?t:h.SIZE)}update(t){super.update(t),t.has("checked")&&this.setFormValue(),t.has("size")&&this.setToggleSize(this.size)}render(){return y`
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
          aria-describedby="${o(this.helpText?S.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};r.styles=[...n.styles,...C];let i=r;u([p({type:Boolean,reflect:!0})],i.prototype,"checked");u([p({type:String,reflect:!0})],i.prototype,"size");i.register(g);
