import"./index-CUuLJ370.js";import"./index-DWTl0clH.js";import{D as d,T as p,a as g}from"./toggle.constants-CbqXTGHL.js";import{U as u,S as v,X as b,k as f,W as k,n}from"./iframe-DlUA9Lme.js";import"./index-DBsvpO9c.js";import{t as a}from"./if-defined-sRFM4mFi.js";import{K as y}from"./keys-hFXe221I.js";import{A as x}from"./buttonsimple.component-DbCI_knu.js";import{D as E}from"./DataAriaLabelMixin-zzpBu2FW.js";import{F as $}from"./FormInternalsMixin-CcahIxch.js";import"./index-4agTb2Xy.js";import{D as w,F as h}from"./formfieldwrapper.component-D1y10-Nw.js";const S=[u,v`
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

    :host::part(label-text),
    :host::part(help-text-container) {
      grid-column: 2;
    }

    :host::part(label),
    :host::part(toggle-input) {
      cursor: pointer;
    }

    :host::part(label) {
      word-break: break-word;
      white-space: normal;
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host([disabled])::part(label),
    :host([disabled])::part(toggle-input) {
      cursor: default;
    }

    :host::part(help-text) {
      color: var(--mdc-toggle-help-text-color);
    }

    :host(:hover:not([disabled]))::part(container) {
      background-color: var(--mdc-toggle-inactive-hover-color);
    }

    :host(:active:not([disabled]))::part(container) {
      background-color: var(--mdc-toggle-inactive-pressed-color);
    }

    :host(:hover:not([disabled])[checked])::part(container) {
      background-color: var(--mdc-toggle-active-hover-color);
    }

    :host(:active:not([disabled])[checked])::part(container) {
      background-color: var(--mdc-toggle-active-pressed-color);
    }

    :host([disabled])::part(label-text),
    :host([disabled])::part(help-text) {
      color: var(--mdc-toggle-label-color-disabled);
    }
  `,...b(!0)];var z=Object.defineProperty,m=(l,e,t,F)=>{for(var o=void 0,s=l.length-1,c;s>=0;s--)(c=l[s])&&(o=c(e,t,o)||o);return o&&z(e,t,o),o};const r=class r extends x($(E(h))){constructor(){super(...arguments),this.checked=!1,this.size=d.SIZE}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleKeyDown(e){var t;e.key===y.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(p).includes(e)?e:d.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return f`
      <mdc-statictoggle
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
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
          name="${a(this.name)}"
          value="${a(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          aria-describedby="${a(this.helpText?w.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};r.styles=[...h.styles,...S];let i=r;m([n({type:Boolean,reflect:!0})],i.prototype,"checked");m([n({type:String,reflect:!0})],i.prototype,"size");i.register(g);
