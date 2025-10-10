import"./index-CYWprFbl.js";import"./index-Ct2p2VFv.js";import{D as c,T as g,a as u}from"./toggle.constants-DrWsVMFh.js";import{U as b,S as v,X as f,k as y,W as k,n as p}from"./iframe-D1RECH4Q.js";import"./index-CcJQE46r.js";import{t as i}from"./if-defined-BP-5MEqs.js";import{K as h}from"./keys-hFXe221I.js";import{A as x}from"./buttonsimple.component-C4bJAaFW.js";import{D as E}from"./DataAriaLabelMixin-Dp4xT994.js";import{F as $}from"./FormInternalsMixin-CFGW2b4g.js";import"./index-CmVWeWzv.js";import{D as S,F as n}from"./formfieldwrapper.component-BsFW8wMd.js";const w=[b,v`
    /* Base styles and CSS custom properties */
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-width-compact: 2rem;
      --mdc-toggle-height-compact: 1rem;

      --mdc-toggle-label-color-disabled: var(--mds-color-theme-text-primary-disabled);
      --mdc-toggle-help-text-color: var(--mds-color-theme-text-secondary-normal);

      --mdc-toggle-active-hover-color: var(--mds-color-theme-control-active-hover);
      --mdc-toggle-active-pressed-color: var(--mds-color-theme-control-active-pressed);
      --mdc-toggle-inactive-hover-color: var(--mds-color-theme-control-inactive-hover);
      --mdc-toggle-inactive-pressed-color: var(--mds-color-theme-control-inactive-pressed);
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
      width: var(--mdc-toggle-width);
      height: var(--mdc-toggle-height);
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host::part(help-text) {
      color: var(--mdc-toggle-help-text-color);
    }

    /* Default interactive states */
    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host(:hover)::part(container) {
      background-color: var(--mdc-toggle-inactive-hover-color);
    }

    :host(:active)::part(container) {
      background-color: var(--mdc-toggle-inactive-pressed-color);
    }

    :host([checked]:hover)::part(container) {
      background-color: var(--mdc-toggle-active-hover-color);
    }

    :host([checked]:active)::part(container) {
      background-color: var(--mdc-toggle-active-pressed-color);
    }

    /* Readonly state - disables pointer events */
    :host([readonly]),
    :host([soft-disabled]) {
      pointer-events: none;
    }

    /* Disabled states override interactive styles */
    :host([disabled])::part(label),
    :host([disabled])::part(toggle-input),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(toggle-input) {
      cursor: default;
    }

    :host([disabled]:hover)::part(container),
    :host([disabled]:active)::part(container),
    :host([disabled][checked]:hover)::part(container),
    :host([disabled][checked]:active)::part(container),
    :host([soft-disabled]:hover)::part(container),
    :host([soft-disabled]:active)::part(container),
    :host([soft-disabled][checked]:hover)::part(container),
    :host([soft-disabled][checked]:active)::part(container) {
      background-color: unset;
    }

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text),
    :host([soft-disabled])::part(label),
    :host([soft-disabled])::part(label-text),
    :host([soft-disabled])::part(help-text) {
      color: var(--mdc-toggle-label-color-disabled);
    }
  `,...f(!0)];var C=Object.defineProperty,m=(l,e,t,D)=>{for(var o=void 0,a=l.length-1,d;a>=0;a--)(d=l[a])&&(o=d(e,t,o)||o);return o&&C(e,t,o),o};const r=class r extends x($(E(n))){constructor(){super(...arguments),this.checked=!1,this.size=c.SIZE}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){!this.disabled&&!this.softDisabled&&!this.readonly&&(this.checked=!this.checked)}handleKeyDown(e){var t;(this.readonly||this.softDisabled)&&e.key===h.SPACE&&e.preventDefault(),e.key===h.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(g).includes(e)?e:c.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return y`
      <mdc-statictoggle
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        ?soft-disabled="${this.softDisabled}"
        size="${this.size}"
        class="mdc-focus-ring"
        part="container"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          part="toggle-input"
          role="${k.CHECKBOX}"
          ?required="${this.required}"
          name="${i(this.name)}"
          value="${i(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-describedby="${i(this.helpText?S.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};r.styles=[...n.styles,...w];let s=r;m([p({type:Boolean,reflect:!0})],s.prototype,"checked");m([p({type:String,reflect:!0})],s.prototype,"size");s.register(u);
