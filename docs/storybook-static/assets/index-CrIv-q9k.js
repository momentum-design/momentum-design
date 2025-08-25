import"./index-Qkef0PBd.js";import"./index-C4hiRl7R.js";import{D as n,T as g,a as p}from"./toggle.constants-KVqyYYQP.js";import"./index-DeEenWCE.js";import"./index-Dkj6vQv4.js";import{i as u,k as v}from"./lit-element-D5KKan5q.js";import{n as r}from"./property-Bj3TGwkg.js";import{t as s}from"./if-defined-D5BV9-c0.js";import{K as b}from"./keys-hFXe221I.js";import{D as f}from"./DataAriaLabelMixin-DVpSBUFD.js";import{F as k}from"./FormInternalsMixin-DHE-e7AC.js";import{R as y}from"./roles-CJI3JVG-.js";import"./index-CXWpDdPW.js";import{D as x,F as m}from"./formfieldwrapper.component-BfkD1w96.js";import{h as $,a as E}from"./index-B-GnYs90.js";const w=[$,u`
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
  `,...E(!0)];var z=Object.defineProperty,l=(d,e,t,S)=>{for(var o=void 0,a=d.length-1,h;a>=0;a--)(h=d[a])&&(o=h(e,t,o)||o);return o&&z(e,t,o),o};const c=class c extends k(f(m)){constructor(){super(...arguments),this.checked=!1,this.size=n.SIZE,this.autofocus=!1}connectedCallback(){super.connectedCallback(),this.helpTextType=void 0}formResetCallback(){this.checked=!1}formStateRestoreCallback(e){e&&(this.checked=!0)}manageRequired(){!this.checked&&this.required?(this.validationMessage?this.inputElement.setCustomValidity(this.validationMessage):this.inputElement.setCustomValidity(""),this.setValidity()):this.internals.setValidity({})}setFormValue(){let e=null;this.checked?e=this.value?this.value:"isActive":e=null,this.manageRequired(),this.internals.setFormValue(e)}toggleState(){this.disabled||(this.checked=!this.checked)}handleKeyDown(e){var t;e.key===b.ENTER&&((t=this.form)==null||t.requestSubmit())}handleChange(e){this.toggleState();const t=e.constructor;this.dispatchEvent(new t(e.type,e))}setToggleSize(e){this.setAttribute("size",Object.values(g).includes(e)?e:n.SIZE)}update(e){super.update(e),e.has("checked")&&this.setFormValue(),e.has("size")&&this.setToggleSize(this.size)}render(){return v`
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
          role="${y.CHECKBOX}"
          ?autofocus="${this.autofocus}"
          ?required="${this.required}"
          name="${s(this.name)}"
          value="${s(this.value)}"
          .checked="${this.checked}"
          aria-checked="${this.checked}"
          .disabled="${this.disabled}"
          aria-describedby="${s(this.helpText?x.HELPER_TEXT_ID:"")}"
          aria-label="${this.dataAriaLabel??""}"
          tabindex="${this.disabled?-1:0}"
          @change="${this.handleChange}"
          @keydown="${this.handleKeyDown}"
        />
      </mdc-statictoggle>
      ${this.renderLabel()} ${this.renderHelperText()}
    `}};c.styles=[...m.styles,...w];let i=c;l([r({type:Boolean,reflect:!0})],i.prototype,"checked");l([r({type:String,reflect:!0})],i.prototype,"size");l([r({type:Boolean,reflect:!0})],i.prototype,"autofocus");i.register(p);
