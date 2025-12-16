import"./index-DUjJwPbC.js";import"./index-Cll-x2TM.js";import{D as n,T as g,a as f}from"./toggle.constants-CKPeNZ2S.js";import{W as b,U as y,X as v,h as k,k as h,R as x,n as m}from"./iframe-DndUgZyo.js";import"./index-Bx_qH4aV.js";import{t as o}from"./if-defined-DO6MNPEi.js";import{K as c}from"./TabIndexMixin-BYR6zMj6.js";import{A as $}from"./buttonsimple.component-DdqHNLXV.js";import{D as E}from"./DataAriaLabelMixin-cYwlSv6Q.js";import{F as S}from"./FormInternalsMixin-CVNmypp6.js";import"./index-DHY7RLui.js";import{D as z}from"./formfieldwrapper.constants-Ci8iKcnt.js";import{F as p}from"./formfieldwrapper.component-BcEFH-wM.js";const T=[b,y`
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
  `,...v(!0)];var D=Object.defineProperty,u=(l,e,t,F)=>{for(var s=void 0,a=l.length-1,d;a>=0;a--)(d=l[a])&&(s=d(e,t,s)||s);return s&&D(e,t,s),s};const r=class r extends $(S(E(p))){constructor(){super(...arguments),this.checked=!1,this.size=n.SIZE,this.renderLabelAndHelperText=()=>this.label?h`<div part="text-container">${this.renderLabel()} ${this.renderHelperText()}</div>`:k}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked)}handleKeyDown(e){var t;(this.readonly||this.softDisabled)&&e.key===c.SPACE&&e.preventDefault(),e.key===c.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(g).includes(e)?e:n.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return h`
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
          name="${o(this.name)}"
          value="${o(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${o(this.helpText?z.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabelAndHelperText()}
    `}};r.styles=[...p.styles,...T];let i=r;u([m({type:Boolean,reflect:!0})],i.prototype,"checked");u([m({type:String,reflect:!0})],i.prototype,"size");i.register(f);
