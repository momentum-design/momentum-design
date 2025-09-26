import"./index-DyUOsQox.js";import"./index-wwme6ITP.js";import{D as d,T as g,a as p}from"./toggle.constants-aW_kF10n.js";import"./index-BnjtOTfP.js";import"./index-ByPqDEhQ.js";import{i as u,k as b,n}from"./iframe-DbFhe1C8.js";import{t as s}from"./if-defined-D0TzS11l.js";import{K as v}from"./keys-hFXe221I.js";import{A as f}from"./buttonsimple.component-DXSlxVmF.js";import{D as k}from"./DataAriaLabelMixin-DtwoeGMi.js";import{F as y}from"./FormInternalsMixin-BHLJ3gDi.js";import{R as x}from"./roles-CJI3JVG-.js";import"./index-BHt2iRmc.js";import{D as E,F as h}from"./formfieldwrapper.component-C8gtv1jz.js";import{h as w,a as $}from"./index-CO0us3Ia.js";const z=[w,u`
    :host {
      --mdc-toggle-width: 3rem;
      --mdc-toggle-height: 1.5rem;
      --mdc-toggle-width-compact: 2rem;
      --mdc-toggle-height-compact: 1rem;

      --mdc-toggle-label-lineheight: var(--mds-font-lineheight-body-midsize);
      --mdc-toggle-label-fontsize: var(--mds-font-size-body-midsize);
      --mdc-toggle-label-fontweight: 400;
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

    .mdc-label-text,
    .mdc-help-text {
      font-size: var(--mdc-toggle-label-fontsize);
      font-weight: var(--mdc-toggle-label-fontweight);
      line-height: var(--mdc-toggle-label-lineheight);
      grid-column: 2;
    }

    .mdc-label,
    :host::part(toggle-input) {
      cursor: pointer;
    }

    .mdc-label {
      word-break: break-word;
      white-space: normal;
    }

    :host([disabled]) .mdc-label,
    :host([disabled])::part(toggle-input) {
      cursor: default;
    }

    .mdc-help-text {
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

    :host([disabled]) .mdc-label-text,
    :host([disabled]) .mdc-help-text {
      color: var(--mdc-toggle-label-color-disabled);
    }
  `,...$(!0)];var S=Object.defineProperty,m=(l,e,t,F)=>{for(var o=void 0,a=l.length-1,c;a>=0;a--)(c=l[a])&&(o=c(e,t,o)||o);return o&&S(e,t,o),o};const r=class r extends f(y(k(h))){constructor(){super(...arguments),this.checked=!1,this.size=d.SIZE}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}firstUpdated(e){this.inputElement&&this.autoFocusOnMount&&(this.elementToAutoFocus=this.inputElement),super.firstUpdated(e)}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleKeyDown(e){var t;e.key===v.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(g).includes(e)?e:d.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return b`
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
          role="${x.CHECKBOX}"
          ?required="${this.required}"
          name="${s(this.name)}"
          value="${s(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          aria-describedby="${s(this.helpText?E.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};r.styles=[...h.styles,...z];let i=r;m([n({type:Boolean,reflect:!0})],i.prototype,"checked");m([n({type:String,reflect:!0})],i.prototype,"size");i.register(p);
